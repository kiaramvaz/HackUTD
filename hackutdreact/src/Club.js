import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const fs = require('fs')

const fireBase = require("./firebasedatabase")
const database = firebase.firestore();

const clubCollection = database.collection('Clubs');

var checkTags = (checkTag) => {
    

    fs.readFile('./Tags.txt', 'utf8' , (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        let tags = data.split("\n");
        tags.foreach((curTag) => {
            if(checkTag === curTag){
                return true;
            }
        })
    })

    return false;
}

//Returns true if the club is already in the database
var checkClub = (clubName) =>{
    
    clubCollection.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            if(doc.data().Name === clubName){
                return true;
            }
        });
    });

    return false;
}

var addClub = (data) => {

    const DOC = clubCollection.doc();

    DOC.set({
        Name: data.Name,
        Sections: data.Sections,
        Tags: data.Tags
    })
    .then(() => {console.log("Added club data successfully")})
    .catch((error) => {console.error(error)});
        
    return true;
}

//Returns true if the club is already in the database
var removeClub = (clubName) =>{
    
    let clubDoc;

    clubCollection.get().then(function(querySnapshot) {
        for(let i = 0 ; i< querySnapshot.length; i++){
            let doc = querySnapshot[i];
            if(doc.data().Name === clubName){
                clubDoc = doc;
                break;
            }
        };
    });

    if(!clubDoc){
        console.log("The club " + clubName + " could not be removed because it doesn't exist")
        return false;
    }

    database.deleteDoc(clubDoc);

    return true;
}

var editClub = () =>{

}

var runtest = () =>{
    addClub({
        Name: "AddtestThings",
        Sections: ["Sec1: thionmgsf", "Sec2: oiahdgfbn"],
        Tags: ["fire", "ice", "water"]
    });

    console.log("Trying to run test")

}

export { editClub, checkClub, checkTags, removeClub, addClub, runtest } ;
