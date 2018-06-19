# Ember-vs-React-React

This project is the React code relating to the Ember vs React— the ultimate battle (Round 1) and 
Ember vs React - round 2 articles.

This is a very basic example of how to get started with React. It uses firebase for data persistence
and css for styling. 

## Common Commands

`npm start` - Starts the project and you will be directed to the localhost

## Firebase 

1. You need to make a firebase account.

2. Create a project
  * Click on database tab 
  * Click real time database 
  * Click start in test mode 

3. Go to overview page 

4. Click 'Add firebase to your web app'

5. Create the firebase.js file in the src folder and copy the firebase object into the file. So it looks similar to this:

```javascript
import firebase from 'firebase';

var config = {
  apiKey:  "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};

firebase.initializeApp(config);

export default firebase;
```

And then you will have your own firebase setup.
