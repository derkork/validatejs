import {observeProperty} from './property-observer';

/**
 * Sets up a property observer that checks a given validation rule on a given property.
 * @param targetOrConfig the object to be validated or a validation configuration.
 * @param key the name of the property to be validated
 * @param descriptor ?
 * @param rule a function that creates the validation rule for the given target object or validation configuration
 */
export function base(targetOrConfig:any|ValidationConfig, key:string, descriptor:any, rule:(it:any|ValidationConfig) => ValidationRule):any {
  if (key) {
    let target = targetOrConfig;
    targetOrConfig = null;
    return observeProperty(target, key, descriptor, targetOrConfig, rule);
  }
  return function(t, k, d) {
    return observeProperty(t, k, d, targetOrConfig, rule);
  };
}
