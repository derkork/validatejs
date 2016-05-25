import {DOM} from 'aurelia-pal';

/**
 * Renders validations into the DOM.
 */
export class ValidationRenderer {
  /**
   * Renders validation errors into the dom.
   * @param node the node into which the validation errors should be rendered.
   * @param relevantErrors the list of errors to render.
   */
  renderErrors(node:Node, relevantErrors:ValidationError[]):void {
    this.unrenderErrors(node);
    if (relevantErrors.length) {
      node.parentElement.classList.add('has-error');
      relevantErrors.forEach(error => {
        if (node.parentElement.textContent.indexOf(error.message) === -1) {
          let errorMessageHelper = DOM.createElement('span');
          let errorMessageNode = DOM.createTextNode(error.message);
          errorMessageHelper.appendChild(errorMessageNode);
          errorMessageHelper.classList.add('help-block', 'au-validation');
          node.parentElement.appendChild(errorMessageHelper);
        }
      });
    }
  }

  /**
   * Clears previously rendered validation messages from the given node.
   * @param node the node to be cleared.
   */
  unrenderErrors(node:Node):void {
    let deleteThese = [];
    node.parentElement.classList.remove('has-error');
    let children = node.parentElement.children;
    for (let i = 0; i < children.length; i++) {
      let child = children[i];
      if (child.classList.contains('help-block') && child.classList.contains('au-validation')) {
        deleteThese.push(child);
      }
    }
    deleteThese.forEach(child => {
      node.parentElement.removeChild(child);
    });
  }
}
