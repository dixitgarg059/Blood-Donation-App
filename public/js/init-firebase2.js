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

async function AddData(obj) {

    // alert("in add data");

    var obj1 = {
        title: "fdnkd",
        state: "fndsjkfda",
        city: "fdnjk",
        content: "fjkdfn"
    };
    var doc=await db.collection("activities").add(obj);
    console.log("document written with id : ",doc.id);
    return doc.id;
}


async function ValidateUser(Username, Password) {
    Username=Username + '';
    Password=Password+'';
    console.log(Username,Password);
    var ValidUser=false;

    var docRef = db.collection("activities").doc("Admin");
    var doc=await docRef.get();
    if (doc.exists) {
        console.log("Document data:", doc.data());
        if (doc.data().Username == Username && doc.data().Password == Password)
        {
            ValidUser=true;
            console.log("yes");
        }
        else
            ValidUser=false;
    }
    console.log(ValidUser);
    return ValidUser;
}

async function upload_file(fileUpload,Name)
{

    var storage = firebase.storage();
    var image_ref=storage.ref().child('images' + "/" + Name)
    await image_ref.put(fileUpload);
    console.log("Image uploaded");
    alert("Added");
    
}
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
                    Name="images/" + doc.id + ".jpeg";
                    var storage=firebase.storage();
                    var Ref=storage.ref(Name);
                    Ref.getDownloadURL()
                    .then((url) => {
                        // `url` is the download URL for 'images/stars.jpg'
                    
                        // // This can be downloaded directly:
                        // var xhr = new XMLHttpRequest();
                        // xhr.responseType = 'blob';
                        // xhr.onload = (event) => {
                        //   var blob = xhr.response;
                        // };
                        // xhr.open('GET', url);
                        // xhr.send();
                    
                        $("#add_activities").append(
                            `<div class = "card">
                            <h2><b> ${doc.data().title} </b>    <h2>
                            <h5> <b>Location: </b>${state_arr[doc.data().state]}, ${city_arr[doc.data().state].split("|")[doc.data().city]}</h5>
                            <div class="fakeimg">
                                <img src=${url} >
                            </div>
                            <p>${doc.data().body}<p>
                            </div>
                            `
                        );
                        // Or inserted into an <img> element
                        var img = document.getElementById('myimg');
                        img.setAttribute('src', url);
                      })
                      .catch((error) => {
                        // Handle any errors
                      });
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