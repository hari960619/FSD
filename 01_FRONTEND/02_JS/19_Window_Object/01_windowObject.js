// The outer height and width is referred as the browser size, laptop, mobile, tab.
// The inner height and width is referred as the display window size, the console size reduces the inner height of the display window.
console.log(window.outerHeight);
console.log(window.outerWidth);
console.log(window.innerHeight);
console.log(window.innerWidth);

//Gives us horizontal scrolling.
console.log(window.scrollX);
// Gives us vertical scrolling.
console.log(window.scrollY);

// Location
console.log(window.location);
console.log(window.location.hostname);
console.log(window.location.port);
console.log(window.location.href);
console.log(window.location.protocol);
console.log(window.location.host);

// Reload: Keeps on reloading
// window.location.reload();

// History
// window.history.go(-1);
// window.history.go(1);
console.log(window.history.length);

// Navigator
console.log(window.navigator);
console.log(window.navigator.language);
console.log(window.navigator.userAgent);
// Deprecated
console.log(window.navigator.appName);
console.log(window.navigator.appVersion);
console.log(window.navigator.platform);
console.log(window.navigator.vendor);
