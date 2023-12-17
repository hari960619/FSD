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
  user.passwordRepeat = userPasswordRepeat.value;
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
  console.log(user);
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
