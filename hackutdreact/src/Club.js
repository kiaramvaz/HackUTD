import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const database = firebase.firestore();

const clubCollection = database.collection('Clubs');

var checkTags = () => {

}

//Returns true if the club is already in the database
var checkClub = (clubName) =>{
    
    clubCollection.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            if(doc.data().Name == clubName){
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
        Tags: data.tags
    })
    .then(() => {console.log("Added club data successfully")})
    .catch(() => {console.error(error)});
        
    return true;
}

//Returns true if the club is already in the database
var removeClub = (clubName) =>{
    
    let clubDoc;

    clubCollection.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            if(doc.data().Name == clubName){
                clubDoc = doc;
                break;
            }
        });
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

runtest = () =>{
    addClub({
        Name: "AddtestThings",
        Sections: ["Sec1: thionmgsf", "Sec2: oiahdgfbn"],
        Tags: ["fire", "ice", "water"]
    });
}

module.exports.runTests = runtest;
module.exports.addClub =  addClub;