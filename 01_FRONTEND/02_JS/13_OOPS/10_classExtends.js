// class Person => c(name,age,bank) || method => intro
// class Manager extends Person => c(super,roleType) || method => role
// class Cashier extends Manager => c (super, underSupervision) || method => task
// class Customer extends Person => c (super,type) || methods => requirement

class Employee {
  constructor(name, loginID) {
    this.name = name;
    this.loginID = loginID;
  }
  employeeIntro() {
    console.log(
      `Hi, My name is ${this.name} and my login ID is ${this.loginID}.`
    );
  }
}

class EscalationSpecialist extends Employee {
  constructor(name, loginID) {
    super(name, loginID);
    this.level = 3;
    this.roleType = "EscalationSpecialist";
  }
  roleTask() {
    console.log(
      `Hi, My name is ${this.name} and I'm a ${this.roleType} with a level of ${this.level}.`
    );
  }
}

class AssistantCrisisManager extends EscalationSpecialist {
  constructor(name, loginID) {
    super(name, loginID);
    this.level = 4;
    this.roleType = "AssistantCrisisManager";
  }
  roleTaskManager() {
    console.log(
      `Hi, My name is ${this.name} and I'm a ${this.roleType} with a level of ${this.level}.`
    );
  }
}

const harish = new AssistantCrisisManager("Harish S", "harisss");
harish.roleTaskManager();
