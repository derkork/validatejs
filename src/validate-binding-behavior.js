import {ValidationRenderer} from './validation-renderer';
import {inject} from 'aurelia-dependency-injection';

/**
 * A binding behavior for validations.
 */
@inject(ValidationRenderer)
export class ValidateBindingBehavior {

  /**
   * Ctor.
   * @param renderer the validation renderer to be used for rendering validations.
   */
  constructor(renderer:ValidationRenderer) {
    this.renderer = renderer;
  }

  /**
   * Adds the given binding on the given object to this behavior.
   * @param binding the binding to add
   * @param source the object to be validated
   */
  bind(binding:BindingExpression, source:any):void {
    let targetProperty;
    // let target;
    let reporter;
    targetProperty = this.getTargetProperty(binding);
    // target = this.getPropertyContext(source, targetProperty);
    reporter = this.getReporter(source);
    // reporter = ValidationEngine.getValidationReporter(target);
    reporter.subscribe(errors => {
      let relevantErrors = errors.filter(error => {
        return error.propertyName === targetProperty;
      });
      this.renderer.renderErrors(binding.target, relevantErrors);
    });
  }

  /**
   * Does nothing right now.
   * @param binding unused
   * @param source  unused
   */
  unbind(binding:BindingExpression, source:any):void {
    // let targetProperty = this.getTargetProperty(source);
    // let target = this.getPropertyContext(source, targetProperty);
    // let reporter = this.getReporter(source);
  }

  /**
   * Returns the name of the target property bound by the given binding expression. 
   * @param binding the binding expression to evaluate
   * @return {string} the property name of the target property.
   */
  getTargetProperty(binding:BindingExpression):string {
    let targetProperty;
    if (binding.sourceExpression && binding.sourceExpression.expression && binding.sourceExpression.expression.name) {
      targetProperty = binding.sourceExpression.expression.name;
    }
    return targetProperty;
  }

  /**
   * Creates a binding context for the given object and property.
   * @param source the object for which the context should be created.
   * @param targetProperty the property of the object for which the context should be created.
   * @return {any} the created context.
   */
  getPropertyContext(source:any, targetProperty:string):any{
    let target = getContextFor(source, targetProperty);
    return target;
  }

  /**
   * Gets the validation reporter attached to the given object.
   * @param source the source object from which the validation reporter should be extracted.
   * @return {ValidationReporter} the validation reporter
   */
  getReporter(source:any):ValidationReporter {
    let reporter;
    if (source.bindingContext.reporter) {
      reporter = source.bindingContext.reporter;
    } else {
      let parentContext = source.overrideContext.parentOverrideContext;
      reporter = parentContext.bindingContext.reporter;
    }
    return reporter;
  }
}
