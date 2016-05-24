import {observeProperty} from './property-observer';

export function base(targetOrConfig:any|ValidationConfig, key:string, descriptor, rule:(it:any) => ValidationRule) {
  if (key) {
    let target = targetOrConfig;
    targetOrConfig = null;
    return observeProperty(target, key, descriptor, targetOrConfig, rule);
  }
  return function(t, k, d) {
    return observeProperty(t, k, d, targetOrConfig, rule);
  };
}
