const functions = require("firebase-functions");
const admin = require('firebase-admin');
const app = admin.initializeApp()

exports.test = functions.region('us-central1').https.onRequest(async () => { // This line is used for HTTPS triggering for testing

// exports.scheduledFunction = functions.pubsub.schedule('every 5 minutes').onRun((context) => { // This line is used for production
    try {
    console.log("cleaning old dates")
    const root = await admin.database().ref().get();
    var afterData = root.val(); // data after the write

    openAppointments = afterData['OpenAppointment']
    newOpenAppointments = {}
    var today = new Date();
    for (const [key, value] of Object.entries(openAppointments)) {
        const [day, month, year] = key.split('-');
        const currDate = new Date(+year, +month - 1, +day);
        if (currDate < today) {
            delete afterData['OpenAppointment'][key]
        }
    }
    
    const deleteApp = () => app.delete().catch(() => null);

    return app.database().ref("OpenAppointment").set(afterData['OpenAppointment']).then(res => {
      // Deleting the app is necessary for preventing concurrency leaks
      return deleteApp().then(() => res);
    }).catch(err => {
      return deleteApp().then(() => Promise.reject(err));
    });
    } catch (error) {
        console.error(error);
        return null;
    }

});

