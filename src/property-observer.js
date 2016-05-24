import {metadata} from 'aurelia-metadata';
import {ValidationConfig} from './validation-config';
import {ValidationEngine} from './validation-engine';
import {validationMetadataKey} from './metadata-key';


export function observeProperty(target:any, key:string, descriptor:any, targetOrConfig:any|ValidationConfig, rule: (it:any) => ValidationRule) : void {
  let config = metadata.getOrCreateOwn(validationMetadataKey, ValidationConfig, target);
  config.addRule(key, rule(targetOrConfig));

  // TODO: REMOVE
  let innerPropertyName = `_${key}`;

  // typescript or babel?
  let babel = descriptor !== undefined;

  if (babel) {
    // babel passes in the property descriptor with a method to get the initial value.

    // set the initial value of the property if it is defined.
    if (typeof descriptor.initializer === 'function') {
      target[innerPropertyName] = descriptor.initializer();
    }
  } else {
    descriptor = {};
  }

  delete descriptor.writable;
  delete descriptor.initializer;

  descriptor.get = function() { return this[innerPropertyName]; };
  descriptor.set = function(newValue) {
    let reporter = ValidationEngine.getValidationReporter(this);

    this[innerPropertyName] = newValue;

    config.validate(this, reporter);
  };

  descriptor.get.dependencies = [innerPropertyName];

  if (!babel) {
    Reflect.defineProperty(target, key, descriptor);
  }
}
