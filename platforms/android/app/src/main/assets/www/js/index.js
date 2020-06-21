// var app = {
//     // Application Constructor
//     initialize: function() {
//         document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
//     },

//     // deviceready Event Handler
//     //
//     // Bind any cordova events here. Common events are:
//     // 'pause', 'resume', etc.
//     onDeviceReady: function() {
//         this.receivedEvent('deviceready');
//     },

//     // Update DOM on a Received Event
//     receivedEvent: function(id) {
//         var parentElement = document.getElementById(id);
//         var listeningElement = parentElement.querySelector('.listening');
//         var receivedElement = parentElement.querySelector('.received');

//         listeningElement.setAttribute('style', 'display:none;');
//         receivedElement.setAttribute('style', 'display:block;');

//         console.log('Received Event: ' + id);
//     }
// };

// function copyText() {
//     // alert("你好，我是一个警告框！");
//     console.log("Keep smile everyday.");
//     cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
// }

// app.initialize();

document.addEventListener("deviceready", function() {
    console.log("Device was ready.");
    // var listeningElement = document.querySelector('.listening');
    // var receivedElement = document.querySelector('.received');
    // listeningElement.setAttribute('style', 'display:none;');
    // receivedElement.setAttribute('style', 'display:block;');
    // alert("Inited.");
    cordova.InAppBrowser.open('https://www.baidu.com', '_system', 'location=yes');
});