// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyAnIg780dQtzziCMuiFICUplfZh2krR6a8",
    authDomain: "blood-donation-app-2-cb025.firebaseapp.com",
    projectId: "blood-donation-app-2-cb025",
    storageBucket: "blood-donation-app-2-cb025.appspot.com",
    messagingSenderId: "456565973628",
    appId: "1:456565973628:web:99da67051bf7cf762b1ff9",
    measurementId: "G-MDKEWHTJP0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
var db = firebase.firestore();
// var donorReferenceID = "0";


var Done = false;
var ValidUser = false;

function AddData(obj) {

    // alert("in add data");

    var obj1 = {
        title: "fdnkd",
        state: "fndsjkfda",
        city: "fdnjk",
        content: "fjkdfn"
    };
    db.collection("activities").add(obj)
        .then(function (docRef) {
            alert("added");
            console.log("Document written with ID: ", docRef.id);
            added = true;
            window.location="./campaign.html";
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
            added = true;
        });
}


// async function ValidateUser(Username, Password) {
//     Username=Username + '';
//     Password=Password+'';
//     console.log(Username,Password);
//     Done=false;
//     ValidUser=false;
//     var docRef = db.collection("activities").doc("Admin");
//     var flg=false;
//     await docRef.get().then(function (doc) {
//         if (doc.exists) {
//             console.log("Document data:", doc.data());
//             if (doc.data().Username == Username && doc.data().Password == Password)
//             {
//                 ValidUser=true;
//                 Done=true;
//                 console.log("yes");
//                 // return 10;
//             }
//             else
//                 Done=true;


//         } 
//     }).catch(function (error) {
//         Done=true;
//         console.log("Error getting document:", error);
//     });

// }
// function getData()
// {
//     var docRef = db.collection("users").doc("LA");
//     docRef.get().then(function(doc) {
//         if (doc.exists) {
//             console.log("Document data:", doc.data());
//         } else {
//             // doc.data() will be undefined in this case
//             console.log("No such document!");
//         }
//     }).catch(function(error) {
//         console.log("Error getting document:", error);
//     });
// }

// $(document).ready(function(){

//     alert("adding data");
//     // AddData();
//     getData();
//     alert("done");

// });


function FireBaseSearchCampaigns(donor) {
    // [START get_all]
    // document.getElementById('searchFormLoading').style.display = 'block';
    // return 
    $('#searchFormLoading').css('display', 'block');
    $('#unavailableError').css('display', 'none');
    // alert("hello");
    //console.log("searching donors....");
    //console.log('details:', donor.donorDetails.State, donor.donorDetails.City, donor.donorDetails.BloodGroup);
    // console.log(donor.donorDetails.State,donor.donorDetails.City);
    // return ;
    var State = donor.donorDetails.State + '';
    var City = donor.donorDetails.City + '';
    let query = db.collection('activities')
        .where("state", "==", State)
        .where('city', '==', City);
    let index = 0;
    query.get()
        .then(snapshot => {
            //console.log('total data', snapshot.docs.length);
            if (snapshot.docs.length <= 0) {
                console.log("not found");
                $('#CampaignTable').css('display', 'none');
                $('#noCampaignsFound').css('display', 'block');
            } else {
                $('#CampaignTable').css('display', 'block');
                $('noCampaignsFound').css('display', 'none');
                $('#CampaignTable tbody').empty();
                snapshot.forEach(function (doc) {

                    $("#add_activities").append(
                        `<div class = "card">
                        <h2><b> ${doc.data().title} </b>    <h2>
                        <h5> <b>Location: </b>${state_arr[doc.data().state]}, ${city_arr[doc.data().state].split("|")[doc.data().city]}</h5>
                        <div class="fakeimg">
                            <img src="https://www.aipiftsap.org/pages/activities/Images/WhatsApp%20Image%202020-06-28%20at%209.41.36%20AM.jpeg" >
                        </div>
                        <p>${doc.data().body}<p>
                        </div>
                        `
                    );
                });
            }
            $('#searchFormLoading').css('display', 'none');
        })
        .catch(err => {
            console.log('Error getting documents', err);
            $('#unavailableError').html(err.message);
            $('#unavailableError').css('display', 'block');
            alert(err.message);
        });
}