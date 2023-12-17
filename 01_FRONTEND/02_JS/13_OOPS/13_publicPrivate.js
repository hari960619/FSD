// Private and Public Fields:
// Most class-based languages have the ability to create either public or private fields within a class.
// Support in browsers is limited, but can be implemented with systems like Babel.
// Public declarations are set above the constructor and can be used within the class, but do not get added to a new instance.
// The private declarations are set with the # sign in front of the variable and are only accessible within that class, "they cannot be accessed or changed from outside".

class PublicFieldsRectangle {
  // They are done outside the constructor
  height = 5;
  width;
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

class PrivateFieldsRectangle {
  #height = 0;
  #width;
  constructor(height, width) {
    this.#height = height;
    this.#width = width;
  }
}

const publicRectangle = new PublicFieldsRectangle(10, 15);
console.log(publicRectangle.height);
console.log(publicRectangle.width);
console.log(publicRectangle);

const privateRectangle = new PrivateFieldsRectangle(10, 15);
console.log(privateRectangle.height);
console.log(privateRectangle.width);
console.log(privateRectangle);
