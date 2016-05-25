import {ValidationReporter} from './validation-reporter';
import {ValidationError} from 'aurelia-validation';


/**
 * A validation configuration.
 */
export class ValidationConfig {
  __validationRules__ = [];

  /**
   * Adds a rule for a property to this validation configuration.
   * @param key the property name for which the rule should be applied.
   * @param rule the rule to be added.
   */
  addRule(key:string, rule:ValidationRule) {
    this.__validationRules__.push({ key: key, rule: rule });
  }

  /**
   * Runs all configured validations for the given property of the given object.
   * @param instance the object to be verified.
   * @param reporter a reporter that should report the validation errors.
   * @param key the property that should be validated.
   * @return an array of { ValidationError } objects.
     */
  validate(instance:any, reporter:ValidationReporter, key:string) : ValidationError[] {
    let errors = [];
    this.__validationRules__.forEach(rule => {
      if (!key || key === rule.key) {
        let result = rule.rule.validate(instance, rule.key);
        if (result) {
          errors.push(result);
        }
      }
    });
    reporter.publish(errors);
    return errors;
  }

  getValidationRules() : any {
    return this.__validationRules__ || (this.__validationRules__ = aggregateValidationRules(this));
  }
  aggregateValidationRules() {
    console.error('not yet implemented');
    //get __validationRules__ from class using metadata
    //merge with any instance specific __validationRules__
  }
}
