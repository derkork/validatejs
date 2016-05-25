import {ValidationRule} from './validation-rule';
import {base} from './base-decorator';

/**
 * Sets up a property observer that applies a length validation on the given property.
 * @param targetOrConfig the object to be validated or a validation configuration.
 * @param key the name of the property to be validated
 * @param descriptor ?
 */
export function length(targetOrConfig:any|ValidationConfig, key:string, descriptor:any) {
  return base(targetOrConfig, key, descriptor, ValidationRule.lengthRule);
}

/**
 * Sets up a property observer that applies a presence validation on the given property.
 * @param targetOrConfig the object to be validated or a validation configuration.
 * @param key the name of the property to be validated
 * @param descriptor ?
 */
export function presence(targetOrConfig:any|ValidationConfig, key:string, descriptor:any) {
  return base(targetOrConfig, key, descriptor, ValidationRule.presence);
}

/**
 * Sets up a property observer that applies a required validation on the given property.
 * @param targetOrConfig the object to be validated or a validation configuration.
 * @param key the name of the property to be validated
 * @param descriptor ?
 */
export function required(targetOrConfig:any|ValidationConfig, key:string, descriptor:any) {
  return base(targetOrConfig, key, descriptor, ValidationRule.presence);
}

/**
 * Sets up a property observer that applies a date validation on the given property.
 * @param targetOrConfig the object to be validated or a validation configuration.
 * @param key the name of the property to be validated
 * @param descriptor ?
 */
export function date(targetOrConfig:any|ValidationConfig, key:string, descriptor:any) {
  return base(targetOrConfig, key, descriptor, ValidationRule.date);
}

/**
 * Sets up a property observer that applies a date and time validation on the given property.
 * @param targetOrConfig the object to be validated or a validation configuration.
 * @param key the name of the property to be validated
 * @param descriptor ?
 */
export function datetime(targetOrConfig:any|ValidationConfig, key:string, descriptor:any) {
  return base(targetOrConfig, key, descriptor, ValidationRule.datetime);
}

/**
 * Sets up a property observer that applies an email validation on the given property.
 * @param targetOrConfig the object to be validated or a validation configuration.
 * @param key the name of the property to be validated
 * @param descriptor ?
 */
export function email(targetOrConfig:any|ValidationConfig, key:string, descriptor:any) {
  return base(targetOrConfig, key, descriptor, ValidationRule.email);
}

/**
 * Sets up a property observer that applies an equality validation on the given property.
 * @param targetOrConfig the object to be validated or a validation configuration.
 * @param key the name of the property to be validated
 * @param descriptor ?
 */
export function equality(targetOrConfig:any|ValidationConfig, key:string, descriptor:any) {
  return base(targetOrConfig, key, descriptor, ValidationRule.equality);
}

/**
 * Sets up a property observer that applies an exclusion validation on the given property.
 * @param targetOrConfig the object to be validated or a validation configuration.
 * @param key the name of the property to be validated
 * @param descriptor ?
 */
export function exclusion(targetOrConfig:any|ValidationConfig, key:string, descriptor:any) {
  return base(targetOrConfig, key, descriptor, ValidationRule.exclusion);
}

/**
 * Sets up a property observer that applies a required validation on the given property.
 * @param targetOrConfig the object to be validated or a validation configuration.
 * @param key the name of the property to be validated
 * @param descriptor ?
 */
export function inclusion(targetOrConfig:any|ValidationConfig, key:string, descriptor:any) {
  return base(targetOrConfig, key, descriptor, ValidationRule.inclusion);
}

/**
 * Sets up a property observer that applies a format validation on the given property.
 * @param targetOrConfig the object to be validated or a validation configuration.
 * @param key the name of the property to be validated
 * @param descriptor ?
 */
export function format(targetOrConfig:any|ValidationConfig, key:string, descriptor:any) {
  return base(targetOrConfig, key, descriptor, ValidationRule.format);
}

/**
 * Sets up a property observer that applies an url validation on the given property.
 * @param targetOrConfig the object to be validated or a validation configuration.
 * @param key the name of the property to be validated
 * @param descriptor ?
 */
export function url(targetOrConfig:any|ValidationConfig, key:string, descriptor:any) {
  return base(targetOrConfig, key, descriptor, ValidationRule.url);
}

/**
 * Sets up a property observer that applies a numericality validation on the given property.
 * @param targetOrConfig the object to be validated or a validation configuration.
 * @param key the name of the property to be validated
 * @param descriptor ?
 */
export function numericality(targetOrConfig:any|ValidationConfig, key:string, descriptor:any) {
  return base(targetOrConfig, key, descriptor, ValidationRule.numericality);
}
