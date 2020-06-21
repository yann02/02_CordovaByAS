document.addEventListener("deviceready", function() {
    console.log("Device was ready.");
    cordova.InAppBrowser.open('https://www.baidu.com', '_system', 'location=yes');
});