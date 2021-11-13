import { useState, useEffect } from "react";
import "./App.css";
import firebase from './firebasedatabase';
import { collection, getDocs } from 'firebase/firestore';

function App(){
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(database, "Users")
    useEffect(() => {

        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }

        getUsers();
    }, []);

    return (
        <div className="App"> 
            {users.map((user) => {
                return ( 
                    <div>
                        {" "}
                        <h1>Name: {user.name} </h1>
                        <h1>Password: {user.password} </h1>
                    </div>
                );
            })}
        </div>
    );
}

export default App;