import React, { useState, useEffect } from "react";
import "./App.css";
import firebase from './firebasedatabase';

function Web(){
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    const ref = firebase.firestore().collection("users");

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
        <div>
            <h1>Users</h1>
            {users.map((user) => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <p>{user.password}</p>
                </div>
            ))}
        </div>
    );
}

export default Web;