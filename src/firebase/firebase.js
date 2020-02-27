import * as firebase from 'firebase'
import 'firebase/analytics'
import 'firebase/database'

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };

  firebase.initializeApp(firebaseConfig)
  firebase.analytics()

const database = firebase.database() // turn the call command into a variable for ease of use

export { firebase, database as default }

// REFERENCES BELOW
// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val()
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// })

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// }, (e) => {
//     console.log('Error with data fetching', e)
// })

// setTimeout(() => {
//     database.ref('age').set(33)
// }, 3500)

// setTimeout(() => {
//     database.ref().off(onValueChange)
// }, 7000)

// setTimeout(() => {
//     database.ref('age').set(30)
// }, 10500)

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val()
//         console.log(val)
//     })
//     .catch((e) => {
//         console.log('Error: ', e)
//     })

// database.ref().set({
//     name: 'david',
//     age: 31,
//     stressLevel: 7,
//     job: {
//         title: 'data analyst',
//         company: 'HCL'
//     },
//     location: {
//         city: 'Everett',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('data is saved')
// }).catch((e) => {
//     console.log('this failed', e)
// })

// database.ref().update({
//    stressLevel: 9,
//    'job/company': 'DocNetwork',
//    'location/city': 'Detroit'
// })

// database.ref('isSingle').set(null) // one way to delete in firebase

// database.ref('isSingle').remove().then(() => { // another way to delete in firebase
//     console.log('Removed worked')
// }).catch((e) => {
//     console.log('Remove failed: ',)
// })