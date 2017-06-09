export class FoundrybotError extends Error {

  public name: String;
  public type: String;

  constructor (message: string, type: string = 'validation_error') {
    // Calling parent constructor of base Error class.
    super(message);

    // Capturing stack trace, excluding constructor call from it.
    Error.captureStackTrace(this, this.constructor);

    // Saving class name in the property of our custom error as a shortcut.
    this.name = this.constructor.name;

    // Typing for easy reference
    this.type = type;
  }
}