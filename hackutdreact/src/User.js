import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const database = firebase.firestore();

const collection = database.collection("Users");

//var addUser = (data) =>

/*import firebase from "./firebase";

const addBtn = document.getElementaryById('addBtn');
const name = document.getElementaryById('name');
const password = document.getElementaryById('password');
const username = document.getElementaryById('password');

const database = firebase.firestore();
const userCollection = database.collection('Users');

addBtn.addEventListener('click', e => {
    e.preventDefault();
    userCollection.doc("user1").set({
        name: "Jason Bourne",
        password: "password123",
        username: "JBorn"
    })
})
*/
