// SETTING AN ITEM
// We need to provide both the key name and the value of the key element.
// Just in case if there is another key which has the same name then the value of this newly assigned ket replaces the old key value of same name.

// localStorage.setItem("String", "Harish S");
// localStorage.setItem("Number", 12345);
// localStorage.setItem("Boolean", true);
// THE REFERENCE OBJECTS WILL NOT BE SET PROPERLY. WE HAVE TO STRINGIFY THEM.
// localStorage.setItem("Array", [1, 2, 3]);
// localStorage.setItem("Object", { name: "abc", age: 27 });
// AFTER STRINGIFYING THEM.
// localStorage.setItem("Array", JSON.stringify([1, 2, 3]));
// localStorage.setItem("Object", JSON.stringify({ name: "abc", age: 27 }));

// GETTING AN ITEM
// Case sensitive, Hence it has to match the key name properly or else you get null.
// Please note that the array and object items needs to be parsed to get them back properly.
// While getting the values, the search term should be a "string".
// console.log(localStorage.getItem("String"));
// console.log(localStorage.getItem("Number"));
// console.log(localStorage.getItem("Boolean"));
// FOR REFERENCE TYPES WE HAVE TO PARSE THEM AND THEN USE THEM.
// console.log(localStorage.getItem("Array"));
// console.log(localStorage.getItem("Object"));
// PARSING ONCE WE COLLECT THE DATA.
// console.log(JSON.parse(localStorage.getItem("Array")));
// console.log(JSON.parse(localStorage.getItem("Object")));

// REMOVING AN ITEM
// The key names are case sensitive hence we need to mention the key name properly in order to remove them.
// adding for demo
// localStorage.setItem("remove", "123455");
// localStorage.removeItem("remove");

//CLEARING ALL ITEMS
// localStorage.clear();

// FORM SECTION

let userName = document.querySelector("#name");
let userEmail = document.querySelector("#email");
let userCountry = document.querySelector("#country");
let userContactNumber = document.querySelector("#phNumber");
let userFavColor = document.querySelector("#userFavColor");
let userDobValue = document.querySelector("#dob");
let userLoginTime = document.querySelector("#loginTime");
let userLogoutTime = document.querySelector("#logoutTime");
let userAge = document.querySelector("#userAge");
let userAbout = document.querySelector("#userAbout");
let userPassword = document.querySelector("#password");
let userPasswordRepeat = document.querySelector("#passwordRepeat");

const users = [];

document.querySelector("#userForm").addEventListener("submit", (e) => {
  e.preventDefault();
  // If does not Match
  if (userPassword.value !== userPasswordRepeat.value) {
    console.log(userPassword.value);
    console.log(userPasswordRepeat.value);
    console.log(userPassword.value === userPasswordRepeat.value);
    document.querySelector("h4#error").classList.add("active");
    document.querySelector("h4#error").textContent = "Password Not Matching!!!";
    setTimeout(() => {
      document.querySelector("h4#error").classList.remove("active");
      document.querySelector("h4#error").textContent = "";
    }, 3000);
    return;
  }
  let user = {};
  user.password = userPassword.value;
  user.name = userName.value;
  user.email = userEmail.value;
  user.country = userCountry.value;
  user.contact = userContactNumber.value;
  user.gender = genderFinder;
  user.hobbies = hobbyFinder;
  user.favColor = userFavColor.value;
  user.dob = userDobValue.value;
  user.loginTime = userLoginTime.value;
  user.logoutTime = userLogoutTime.value;
  user.age = userAge.value;
  user.about = userAbout.value;
  users.push(user);
  console.log(users);
  localStorage.setItem("users", JSON.stringify(users));
});

const storedUsers = JSON.parse(localStorage.getItem("users"));
console.log(storedUsers);
storedUsers.forEach((u) => {
  document.querySelector("#users").innerHTML += `
  <li class="cen">${u.name}</li>
  <li class="cen">${u.email}</li>`;
});

function genderFinder() {
  let gender;
  document.getElementsByName("gender").forEach((e) => {
    if (e.checked) {
      gender = e.value;
    }
  });
  return gender || "NOT SELECTED";
}

function hobbyFinder() {
  let hobbies = [];
  document.getElementsByName("hobbies").forEach((e) => {
    if (e.checked) {
      hobbies.push(e.value);
    }
  });
  return hobbies;
}

document.querySelector("#userAge").addEventListener("change", (e) => {
  document.querySelector("#ageOutput").textContent =
    document.querySelector("#userAge").value;
});

/* 
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis nobis necessitatibus nesciunt. Provident, cupiditate doloremque!
*/
