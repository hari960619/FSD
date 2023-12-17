// SetInterval performs the operation until it is cleared by the clearInterval.
// SetTimeOut does not perform until the time interval is passed.

let num = 0;
const logName = (name) => {
  num++;
  console.log(num);
  console.log(`Hi ${name} !!!`);
};

const interval = setInterval(logName, 1000);

setTimeout(() => {
  clearInterval(interval);
}, 2000);

for (let i = 0; i < 10000000; i++) {
  console.log(i);
}

// Async Code only works after all the sync code is executed.

//Callback Hell

function prepareMaggie() {
  setTimeout(() => {
    console.log("Boiling the water");
    setTimeout(() => {
      console.log("Put in the masala powder");
      setTimeout(() => {
        console.log("Add the noodles");
        setTimeout(() => {
          console.log("Add vegetables");
          setTimeout(() => {
            console.log("Wait for it to cook");
            setTimeout(() => {
              console.log("Serve and Enjoy");
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}

prepareMaggie();
