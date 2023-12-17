const value = "d";

// MAJOR LEARNING IS THAT WE CAN'T USE "return" INSIDE SWITCH.

switch (value) {
  case "a": {
    console.log("Logging value a");
    break;
  }
  case "b": {
    console.log("Logging value b");
    break;
  }
  default: {
    console.log("default value");
    break;
  }
}
