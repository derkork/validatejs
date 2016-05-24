import {ValidationRule} from './validation-rule';
import {base} from './base-decorator';

export function length(targetOrConfig:any|ValidationConfig, key:string, descriptor) {
  return base(targetOrConfig, key, descriptor, ValidationRule.lengthRule);
}

export function presence(targetOrConfig:any|ValidationConfig, key:string, descriptor) {
  return base(targetOrConfig, key, descriptor, ValidationRule.presence);
}

export function required(targetOrConfig:any|ValidationConfig, key:string, descriptor) {
  return base(targetOrConfig, key, descriptor, ValidationRule.presence);
}

export function date(targetOrConfig:any|ValidationConfig, key:string, descriptor) {
  return base(targetOrConfig, key, descriptor, ValidationRule.date);
}

export function datetime(targetOrConfig:any|ValidationConfig, key:string, descriptor) {
  return base(targetOrConfig, key, descriptor, ValidationRule.datetime);
}

export function email(targetOrConfig:any|ValidationConfig, key:string, descriptor) {
  return base(targetOrConfig, key, descriptor, ValidationRule.email);
}

export function equality(targetOrConfig:any|ValidationConfig, key:string, descriptor) {
  return base(targetOrConfig, key, descriptor, ValidationRule.equality);
}

export function exclusion(targetOrConfig:any|ValidationConfig, key:string, descriptor) {
  return base(targetOrConfig, key, descriptor, ValidationRule.exclusion);
}

export function inclusion(targetOrConfig:any|ValidationConfig, key:string, descriptor) {
  return base(targetOrConfig, key, descriptor, ValidationRule.inclusion);
}

export function format(targetOrConfig:any|ValidationConfig, key:string, descriptor) {
  return base(targetOrConfig, key, descriptor, ValidationRule.format);
}

export function url(targetOrConfig:any|ValidationConfig, key:string, descriptor) {
  return base(targetOrConfig, key, descriptor, ValidationRule.url);
}

export function numericality(targetOrConfig:any|ValidationConfig, key:string, descriptor) {
  return base(targetOrConfig, key, descriptor, ValidationRule.numericality);
}
