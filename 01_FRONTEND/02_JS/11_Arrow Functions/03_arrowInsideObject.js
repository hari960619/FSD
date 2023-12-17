/* 
In Regular function “this” refers to its parent or left of the dot to which the event is called on.
In Arrow function “this” refers to the surrounding of its parent or its current surrounding scope. 
Arrow Function does not have its own this, it takes it from its surrounding.
Never use an Arrow Function as methods inside an object.
*/

let obj = {
  name: "Harish S",
  age: 27,
  regularFunDetails: function () {
    console.log(this);
    console.log(this.name);
    console.log(this.age);
  },
  arrowFunDetails: () => {
    console.log(this);
    console.log(this.name);
    console.log(this.age);
  },
};

obj.regularFunDetails();
obj.arrowFunDetails();

/* 
A method or a function inside the object should regular.
*/

const chandler = {
  friends: ["R", "M"],
  displayFriendsArrowIn() {
    console.log(this);
    this.friends.forEach((e) => {
      console.log(e);
    });
  },
  displayFriendsRegIn() {
    console.log(this);
    this.friends.forEach(function (e) {
      console.log(e);
    });
  },
};

chandler.displayFriendsArrowIn();
chandler.displayFriendsRegIn();
