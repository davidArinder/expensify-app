import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB-L9FXy6Lhq2xbn9tQ72dHdm7L4yVZ0n8",
    authDomain: "expensify-627e5.firebaseapp.com",
    databaseURL: "https://expensify-627e5.firebaseio.com",
    projectId: "expensify-627e5",
    storageBucket: "expensify-627e5.appspot.com",
    messagingSenderId: "633947110871",
    appId: "1:633947110871:web:296fcdca8a98ae14701f92",
    measurementId: "G-1ZNER2BTQ8"
  };

  firebase.initializeApp(firebaseConfig)
  firebase.analytics()

const database = firebase.database() // turn the call command into a variable for ease of use

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