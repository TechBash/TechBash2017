importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');

var config = {
    messagingSenderId: "346952864544"
  };
firebase.initializeApp(config);

const messaging = firebase.messaging();