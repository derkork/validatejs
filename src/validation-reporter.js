/**
 * @return {number} a random number based on the current date and time.
 */
function getRandomId(): number {
  let rand = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;
  let id = new Date().getTime() + rand;
  return id;
}

/**
 * Observer for validation events.
 */
export class ValidationObserver {
  id = getRandomId();
  callback:(it:ValidationError[]) => void;
  reporter:ValidationReporter;

  /**
   * Ctor.
   * @param reporter the reporter to use for reporting validation messages.
   * @param callback a callback function being called on validation.
   */
  constructor(reporter:ValidationReporter, callback: (it:ValidationError[]) => void) {
    this.reporter = reporter;
    this.callback = callback;
  }

  /**
   * Destroys this observer.
   */
  dispose():void {
    this.reporter.destroyObserver(this);
  }
}

/**
 * A reporter for validation events.
 */
export class ValidationReporter {
  callback:(it:ValidationError[]) => void;
  __callbacks__:any = {};

  /**
   * Creates a subscription to validation events.
   * @param callback a callback function to be called when new validation events occur.
   * @return {ValidationObserver} an observer object which can be used to dispose of the subscription when no longer needed.
   */
  subscribe(callback: (it:ValidationError[]) => void):ValidationObserver {
    let observer = new ValidationObserver(this, callback);
    this.__callbacks__[observer.id] = observer;
    return observer;
  }

  /**
   * Publishes the given list of errors to all attached ValidationObservers.
   * @param errors the list of errors to be published.
   */
  publish(errors:ValidationError[]):void {
    for (let key of Object.keys(this.__callbacks__)) {
      let observer = this.__callbacks__[key];
      observer.callback(errors);
    }
  }

  /**
   * Removes the given observer from the internal list of subscriptions. This observer will no longer receive
   * event updates after this.
   * @param observer the observer to be removed.
   */
  destroyObserver(observer:ValidationObserver):boolean {
    delete this.__callbacks__[observer.id];
    return true;
  }
}
