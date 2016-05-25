import {ValidationReporter} from './validation-reporter';

export class ValidationEngine {
  /**
   * Creates a validation reporter for the given object. If such a reporter already exists, the existing one
   * will be returned.
   * @param instance the object instance for which the reporter shall be created.
   * @return {ValidationReporter} the created or existing ValidationReporter
   */
  static getValidationReporter(instance:any):ValidationReporter {
    return instance.__validationReporter__ || (instance.__validationReporter__ = new ValidationReporter());
  }
}
