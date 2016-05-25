import {validationMetadataKey} from './metadata-key';
import {ValidationConfig} from './validation-config';
import {ValidationEngine} from './validation-engine';
import {ValidationRule} from './validation-rule';
import {metadata} from 'aurelia-metadata';

/**
 * A Validator.
 */
export class Validator {
  object:any;
  config:ValidationConfig;

  /**
   * Ctor.
   * @param object the object to be validated.
   */
  constructor(object:any) {
    this.object = object;
  }

  /**
   * Validates the given property of the object wrapped by this validator.
   * @param prop the property to be validated.
   */
  validate(prop:string):void {
    let config = metadata.getOrCreateOwn(validationMetadataKey, ValidationConfig, this.object);
    let reporter = ValidationEngine.getValidationReporter(this.object);
    if (prop) {
      config.validate(this.object, reporter, prop);
    } else {
      config.validate(this.object, reporter);
    }
  }

  /**
   * Does nothing right now. 
   */
  getProperties() : void {
    console.error('Not yet implemented');
  }

  /**
   * Ensures that the given property is validated by this validator. All calls to builder functions
   * after calling this function this will apply to the specified property.
   * @param prop the property for which validation should be set up.
   * @return {Validator} this instance.
   */
  ensure(prop:string) : Validator {
    let config = metadata.getOrCreateOwn(validationMetadataKey, ValidationConfig, this.object);
    this.config = config;
    this.currentProperty = prop;
    return this;
  }

  /**
   * Adds a length validation to the currently configured property.
   * @param configuration the validation configuration.
   * @return {Validator} this instance.
   */
  length(configuration:any) : Validator {
    this.config.addRule(this.currentProperty, ValidationRule.lengthRule(configuration));
    return this;
  }
  /**
   * Adds a presence validation to the currently configured property.
   * @param configuration the validation configuration.
   * @return {Validator} this instance.
   */
  presence(configuration:any) : Validator {
    this.config.addRule(this.currentProperty, ValidationRule.presence(configuration));
    return this;
  }

  /**
   * Adds a required validation to the currently configured property.
   * @param configuration the validation configuration.
   * @return {Validator} this instance.
   */
  required(configuration:any) : Validator {
    this.config.addRule(this.currentProperty, ValidationRule.presence(configuration));
    return this;
  }

  /**
   * Adds a numericality validation to the currently configured property.
   * @param configuration the validation configuration.
   * @return {Validator} this instance.
   */
  numericality(configuration:any) : Validator {
    this.config.addRule(this.currentProperty, ValidationRule.numericality(configuration));
    return this;
  }

  /**
   * Adds a date validation to the currently configured property.
   * @param configuration the validation configuration.
   * @return {Validator} this instance.
   */
  date(configuration:any) : Validator {
    this.config.addRule(this.currentProperty, ValidationRule.date(configuration));
    return this;
  }

  /**
   * Adds a date and time validation to the currently configured property.
   * @param configuration the validation configuration.
   * @return {Validator} this instance.
   */
  datetime(configuration:any) : Validator {
    this.config.addRule(this.currentProperty, ValidationRule.datetime(configuration));
    return this;
  }

  /**
   * Adds an email validation to the currently configured property.
   * @param configuration the validation configuration.
   * @return {Validator} this instance.
   */
  email(configuration:any) : Validator {
    this.config.addRule(this.currentProperty, ValidationRule.email(configuration));
    return this;
  }

  /**
   * Adds an equality validation to the currently configured property.
   * @param configuration the validation configuration.
   * @return {Validator} this instance.
   */
  equality(configuration:any) : Validator {
    this.config.addRule(this.currentProperty, ValidationRule.equality(configuration));
    return this;
  }

  /**
   * Adds a format validation to the currently configured property.
   * @param configuration the validation configuration.
   * @return {Validator} this instance.
   */
  format(configuration:any) : Validator {
    this.config.addRule(this.currentProperty, ValidationRule.format(configuration));
    return this;
  }

  /**
   * Adds an inclusion validation to the currently configured property.
   * @param configuration the validation configuration.
   * @return {Validator} this instance.
   */
  inclusion(configuration:any) : Validator {
    this.config.addRule(this.currentProperty, ValidationRule.inclusion(configuration));
    return this;
  }

  /**
   * Adds an exclusion validation to the currently configured property.
   * @param configuration the validation configuration.
   * @return {Validator} this instance.
   */
  exclusion(configuration:any) : Validator {
    this.config.addRule(this.currentProperty, ValidationRule.exclusion(configuration));
    return this;
  }

  /**
   * Adds an URL validation to the currently configured property.
   * @param configuration the validation configuration.
   * @return {Validator} this instance.
   */
  url(configuration:any) : Validator {
    this.config.addRule(this.currentProperty, ValidationRule.url(configuration));
    return this;
  }
}
