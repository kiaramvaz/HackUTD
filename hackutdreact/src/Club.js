import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { getFirestore,doc, setDoc, getDoc, collection, addDoc, updateDoc, deleteDoc, deleteField } from "firebase/firestore";

const fs = require('fs')

//const fireBase = require("./firebasedatabase")
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
var removeClub = (clubName) =>{

    let added = false;

    clubCollection.get().then( (querySnapshot) => {
        querySnapshot.forEach((curDoc) => {
            if(curDoc.data().Name === clubName){
                deleteDoc(doc(database, "Clubs", clubName));
            }
        })
    });
    if(!added){
        console.log("The club " + clubName + " could not be removed because it doesn't exist")
    }
    //return added;
}

//Returns true if the club is already in the database
var checkClub = (clubName, callback) =>{
    
    clubCollection.get().then(function(querySnapshot) {
        let removed = false;
        querySnapshot.forEach(function(doc) {
            if(!removed && doc.data().Name === clubName){
                removed = true;
                return;
            }
        });
        callback(removed);
    });
}

var addClub = (data) => {
    setDoc(doc(database, "Clubs", data.Name), {
        Name: data.Name,
        Sections: data.Sections,
        Tags: data.Tags
    }).then(() => {console.log("Added club data successfully")})
    .catch((error) => {console.error(error)});
    return true;
}


var editClub = (data) =>{

    function insertClub(clubExists){
        if(!clubExists){
            setDoc(doc(database, "Clubs", data.Name), {
                Name: data.Name,
                Sections: data.Sections,
                Tags: data.Tags
            }).then(() => {console.log("Added club data successfully")})
            .catch((error) => {console.error(error)});
        }
        else{
            updateDoc(doc(database, "Clubs", data.Name), {
                Name: data.Name,
                Sections: data.Sections,
                Tags: data.Tags
            }).then(() => {console.log("Added club data successfully")})
            .catch((error) => {console.error(error)});
        }
    }

    checkClub(data.name, insertClub);
}

function sort(searchText, tags, callback){

    
    clubCollection.get().then((querySnapshot) => {
        let matchingClubs = [];
        querySnapshot.forEach((curDoc) => {
            let docData = curDoc.data();
            
            if(docData.Name === "Admin"){
                //just a placeholder`
                return;
            }
            let hasTag = (tag) =>{
                for(let i =0; i< docData.Tags.length; i++){
                    if(docData.Tags[i]  === tag){
                        return true;
                    }
                }
                return false;
            }
            if(tags.length > 0){
                for(let i = 0; i < tags.length; i++){
                    if(!hasTag(tags[i])){
                        //Doesn't have the tag beign searched for
                        return;
                    }
                }
            }
            
            let compareableName = docData.Name.substr(0, Math.min(searchText.length, docData.Name.length));
            let usableSearchText = searchText.substr(0, Math.min(searchText.length, docData.Name.length))
            //If there is no search text then is not searchign by tag
            if(usableSearchText.length === 0){
                matchingClubs.push(docData);
            }
            //If it search lenght is less than 3 then the firsrt two digits have to match for it to show up
            else if(usableSearchText.length < 3){
                if(usableSearchText === compareableName){
                    matchingClubs.push(docData);
                }
            }
            //If it search lenght is greatar than 2 then the firsrt two digits have to match for it to show up
            else{
                let allowedLetterMistakes = usableSearchText.length/3;

                let mistakeAmount = 0;

                for(let i = 0 ; i < compareableName.length; i++){
                    if(compareableName.charAt(i) !== usableSearchText.charAt(i) ){
                        mistakeAmount++;
                    }
                }
                if(mistakeAmount > allowedLetterMistakes){
                    //To many mismatched chars to appear in the search
                    return;
                }

                matchingClubs.push(docData);
            }

        })
        callback(matchingClubs);
    })
    
}

var runtest = () =>{

    function useData(isClub){
        console.log(isClub)
        //
    }
    checkClub("Hackutd", useData);
}

export { editClub, checkClub, checkTags, removeClub, addClub, runtest,sort } ;
