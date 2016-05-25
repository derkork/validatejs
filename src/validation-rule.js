import validate from 'validate.js';
import {ValidationError} from 'aurelia-validation';

/**
 * A validation rule.
 */
export class ValidationRule {
  name:string = '';
  config:any|ValidationConfig;

  /**
   * Ctor.
   * @param name the name of the validation rule.
   * @param config the configuration of the validation rule. The configration is specific to the type of rule.
   */
  constructor(name:string, config:any|ValidationConfig) {
    this.name = name;
    this.config = config;
  }

  /**
   * Validates the given property of the given target object against this validation rule.
   * @param target the target object to validate
   * @param propName the name of the property to validate
   * @return a {ValidationError} object when the validation fails or a falsey value when the validation succeeds.
   */
  validate(target:any, propName:string):ValidationError {
    if (target && propName) {
      let validator = { [propName]: { [this.name]: this.config } };
      let result = validate(target, validator);
      if (result) {
        let error = cleanResult(result);
        result = new ValidationError(error);
      }
      return result;
    }
    throw new Error('Invalid target or property name.');
  }

  /**
   * Creates a new date validation rule.
   * @param config the validation configuration to use.
   * @return {ValidationRule} the created rule.
   */
  static date(config:any|ValidationConfig = true):ValidationRule {
    return new ValidationRule('date', config);
  }
  /**
   * Creates a new date and time validation rule.
   * @param config the validation configuration to use.
   * @return {ValidationRule} the created rule.
   */
  static datetime(config:any|ValidationConfig = true):ValidationRule {
    return new ValidationRule('datetime', config);
  }
  /**
   * Creates a new email validation rule.
   * @param config the validation configuration to use.
   * @return {ValidationRule} the created rule.
   */
  static email(config:any|ValidationConfig = true):ValidationRule {
    return new ValidationRule('email', config);
  }
  /**
   * Creates a new equality validation rule.
   * @param config the validation configuration to use.
   * @return {ValidationRule} the created rule.
   */
  static equality(config:any|ValidationConfig):ValidationRule {
    return new ValidationRule('equality', config);
  }
  /**
   * Creates a new exclusion validation rule.
   * @param config the validation configuration to use.
   * @return {ValidationRule} the created rule.
   */
  static exclusion(config:any|ValidationConfig):ValidationRule {
    return new ValidationRule('exclusion', config);
  }
  /**
   * Creates a new format validation rule.
   * @param config the validation configuration to use.
   * @return {ValidationRule} the created rule.
   */
  static format(config:any|ValidationConfig):ValidationRule {
    return new ValidationRule('format', config);
  }
  /**
   * Creates a new inclusion validation rule.
   * @param config the validation configuration to use.
   * @return {ValidationRule} the created rule.
   */
  static inclusion(config:any|ValidationConfig):ValidationRule {
    return new ValidationRule('inclusion', config);
  }
  /**
   * Creates a new length validation rule.
   * @param config the validation configuration to use.
   * @return {ValidationRule} the created rule.
   */
  static lengthRule(config:any|ValidationConfig):ValidationRule {
    return new ValidationRule('length', config);
  }
  /**
   * Creates a new numericality validation rule.
   * @param config the validation configuration to use.
   * @return {ValidationRule} the created rule.
   */
  static numericality(config:any|ValidationConfig = true):ValidationRule {
    return new ValidationRule('numericality', config);
  }
  /**
   * Creates a new presence validation rule.
   * @param config the validation configuration to use.
   * @return {ValidationRule} the created rule.
   */
  static presence(config:any|ValidationConfig = true):ValidationRule {
    return new ValidationRule('presence', config);
  }
  /**
   * Creates a new url validation rule.
   * @param config the validation configuration to use.
   * @return {ValidationRule} the created rule.
   */
  static url(config:any|ValidationConfig = true):ValidationRule {
    return new ValidationRule('url', config);
  }
}

/**
 * Cleans results acquired from the underlying validation library. Removes all inherited elements.
 * @param data the data to clean up. 
 * @return {any} the cleaned up data.
 */
export function cleanResult(data:any):any {
  let result = {};
  for (let prop in data) {
    if (data.hasOwnProperty(prop)) {
      result = {
        propertyName: prop,
        message: data[prop][0]
      };
    }
  }
  return result;
}
