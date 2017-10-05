

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const dateformat = require('dateformat');
admin.initializeApp(functions.config().firebase);
 
exports.emptyFunction = functions.https.onRequest((req, res) => {
  console.log("hello my world!")
  return;
});

exports.notifyScheduledEventFunction = functions.database.ref('/scheduledEvents/{scheduledEventId}').onCreate(event => {

  const libararyEvent = event.data.val();
  const scheduledEventId = event.params.scheduledEventId;

  const db = admin.database();

  db.ref(`/scheduledEvents/${scheduledEventId}`).once('value', snapshot => {
    let se = snapshot.val();

    const payload = {
      notification: {
        title: se.eventName,
        body: se.eventName + ' was scheduled on ' + dateformat(se.eventDate, 'mm/dd') + ' by ' + se.instructorName,
        icon: "https://placeimg.com/250/250"
      }
    };

    db.ref('/tokens')
    .once('value')
    .then(tokens => { 
      tokens.forEach(function(token) {
        var data = token.val();
        admin.messaging().sendToDevice(data.token, payload)
          .then(res => {
            console.log("Sent Successfully", res);
          })
          .catch(err => {
            console.log(err);
          })
      });
    });
  });
});



  