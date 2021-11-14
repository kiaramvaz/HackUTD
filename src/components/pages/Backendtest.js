import React, { useState, useEffect } from "react";
import "../../App.css";
import firebase from '../../firebasedatabase';
import {onSnapshot} from "firebase/firestore"
import { arrayUnion, arrayRemove, doc, updateDoc } from "firebase/firestore"; 


function Web(){
    const [newName, setNewName] = useState("");
    const [newUsername, setNewUsername] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newInterest1, setNewInterest1] = useState("");
    const [newInterest2, setNewInterest2] = useState("");
    const [newInterest3, setNewInterest3] = useState("");

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    const database = firebase.firestore();
    const ref = database.collection("users");

    var checkBox = document.querySelector('.checkbox:checked') !== null;

    const createUser = () => {
        var ad = checkBox ? false : true;

        ref.doc(newEmail).set({
            name: newName,
            username: newUsername,
            password: newPassword,
            interests: firebase.firestore.FieldValue.arrayUnion(newInterest1, newInterest2, newInterest3),
            admin: ad
        })
        .then(() => {console.log('Data Successfully Added');})
        .catch(error => {console.error(error)});
        
    };

    const updateUser = () => {
            ref.doc(newEmail).update({
                interests: {0: newInterest1, 1: newInterest2, 2: newInterest3},
                
            })
            .then(() => {console.log('Data Successfully Added');})
            .catch(error => {console.error(error)});
    };

    function getUsers() {
        setLoading(true);
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setUsers(items);
            setLoading(false);
        });
    }

    useEffect(() => {
        getUsers();
    }, []);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="App">
            <h1>Create User</h1>
            <input placeholder="Name" onChange={(event) => {setNewName(event.target.value)} }/>
            <input placeholder="Username" onChange={(event) => {setNewUsername(event.target.value)} }/>
            <input placeholder="Password" onChange={(event) => {setNewPassword(event.target.value)} }/>
            <input placeholder="Email Address" onChange={(event) => {setNewEmail(event.target.value)} }/>
            <input placeholder="Interest 1" onChange={(event) => {setNewInterest1(event.target.value)} }/>
            <input placeholder="Interest 2" onChange={(event) => {setNewInterest2(event.target.value)} }/>
            <input placeholder="Interest 3" onChange={(event) => {setNewInterest3(event.target.value)} }/>
            <input type="checkbox" class="checkbox" id="admin"/>
            <label for="choice-yes">Admin</label>

            <button onClick={createUser}> Create User </button>

            <h1>Update User</h1>
            <input placeholder="Email Address" onChange={(event) => {setNewEmail(event.target.value)} }/>
            <input placeholder="Interest 1" onChange={(event) => {setNewInterest1(event.target.value)} }/>
            <input placeholder="Interest 2" onChange={(event) => {setNewInterest2(event.target.value)} }/>
            <input placeholder="Interest 3" onChange={(event) => {setNewInterest3(event.target.value)} }/>

            <button onClick={updateUser}> Update User </button>

            <h1>Users</h1>
            {users.map((user) => (
                <div key={user.id}>
                    <h2>Name: {user.name}</h2> 
                    <p>Username: {user.username}</p>
                    <p>Password: {user.password}</p>
                </div>
            ))}
        </div>
    );
}

export default Web;