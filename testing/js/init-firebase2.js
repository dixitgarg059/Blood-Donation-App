// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBc30CFb21b5dCigi9nSjASsnuk8bfW5VY",
    authDomain: "testing-a3332.firebaseapp.com",
    projectId: "testing-a3332",
    storageBucket: "testing-a3332.appspot.com",
    messagingSenderId: "230511833942",
    appId: "1:230511833942:web:b1b3cde298840944d59cf7",
    measurementId: "G-664K9D56E4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
var db = firebase.firestore();
var donorReferenceID = "0";



function AddData()
{
    // Add a new document in collection "cities"
    // alert("hello");
    // db.collection("users").add({
    //     first: "Ada",
    //     last: "Lovelace",
    //     born: 1815
    // })
    // .then(function(docRef) {
    //     alert("Document written with ID");
    // })
    // .catch(function(error) {
    //     alert("Error adding document: ");
    // });
    db.collection("users").doc("LA").set({
        name: "Los Angeles",
        state: "CA",
        country: "USA"
    })
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
    
}

function getData()
{
    var docRef = db.collection("users").doc("LA");
    docRef.get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}

$(document).ready(function(){
    
    alert("adding data");
    // AddData();
    getData();
    alert("done");

});
// function FireBaseSearchCampaigns(obj) {
    //     // [START get_all]
//     // document.getElementById('searchFormLoading').style.display = 'block';
//     $('#searchFormLoading').css('display', 'block');
//     $('#unavailableError').css('display', 'none');
//     //console.log("searching donors....");
//     //console.log('details:', donor.donorDetails.State, donor.donorDetails.City, donor.donorDetails.BloodGroup);
//     let query = db.collection('Donors')
//         .where('State', '==', donor.donorDetails.State)
//         .where('City', '==', donor.donorDetails.City);
//     let index = 0;
//     query.get()
//         .then(snapshot => {
//             //console.log('total data', snapshot.docs.length);
//             if (snapshot.docs.length <= 0) {
//                 $('#CampaignTable').css('display', 'none');
//                 $('#noCampaignsFound').css('display', 'block');
//             } else {
//                 $('#CampaignTable').css('display', 'block');
//                 $('noCampaignsFound').css('display', 'none');
//                 $('#CampaignTable tbody').empty();
//                 snapshot.forEach(function (doc) {
//                     //console.log(doc.id, '=>', doc.data());
//                     //console.log(doc.data().LastDonatedDate);
//                     // var diff=
//                     // alert(doc.data().DontDonate)
                    
//                     if(doc.data().DontDonate !=true)
//                     {
                        
//                         var flag=true
//                         var table='#DonorsTable > tbody:last-child'
//                         if(doc.data().BloodDonationOption != 'NeverDonated')
//                         {
//                             var current_date=new Date();
//                             var last_donated_date=new Date((doc.data().LastDonatedDate));
//                             months = (current_date.getFullYear() - last_donated_date.getFullYear()) * 12;
//                             months -= last_donated_date.getMonth();
//                             months += current_date.getMonth();
//                             if(months < 5)
//                             {
//                                 table='#DonorsTable2 > tbody:last-child';
//                                 $("#dk2").show()
//                             }
//                             else
//                                 $("#dk1").show()
//                             $(table).append(
//                                 `<tr><td class="width:90%">
//                                 <div class="card">
//                                     <div class="card-body">
//                                         <div class="row">
//                                             <div class="col-md-4 py-1">
//                                                 <b>Donor No: </b>#${++index}
//                                                 <br>
//                                                 <b>Donor Name: </b>${doc.data().DonorName}
//                                             </div>
//                                             <div class="col-md-5 py-1">
//                                             <!--<b>Email: </b>${doc.data().Email} -->
//                                                 <b>Contact No: </b><a href="tel: ${doc.data().ContactNo}">${doc.data().ContactNo}</a>
//                                                 <br>
//                                                 <b>Location: </b>${ state_arr[doc.data().State]}, ${city_arr[doc.data().State].split("|")[doc.data().City] }
//                                             </div>
//                                             <div class="col-md-3 py-1">
//                                                 <div class="blood-style">
//                                                 <b>Blood Group: </b>${doc.data().BloodGroup}
//                                                 </div>
//                                                 <!--<b>Available: </b>mol<br>-->
//                                                 <b>Last Donated on: </b>${doc.data().BloodDonationOption == 'NeverDonated'? 'NeverDonated': doc.data().LastDonatedDate == '1900-01-01' ? 'Never Donated' : new Date((doc.data().LastDonatedDate)).toDateString()} 
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 </td></tr>`);
//                         }
//                         else
//                         {
//                             $("#dk1").show()
//                             $(table).append(
//                                 `<tr><td class="width:75%">
//                                 <div class="card">
//                                     <div class="card-body">
//                                         <div class="row">
//                                             <div class="col-md-4 py-1">
//                                                 <b>Donor No: </b>#${++index}
//                                                 <br>
//                                                 <b>Donor Name: </b>${doc.data().DonorName}
//                                             </div>
//                                             <div class="col-md-5 py-1">
//                                             <!--<b>Email: </b>${doc.data().Email} -->
//                                                 <b>Contact No: </b><a href="tel: ${doc.data().ContactNo}">${doc.data().ContactNo}</a>
//                                                 <br>
//                                                 <b>Location: </b>${ state_arr[doc.data().State]}, ${city_arr[doc.data().State].split("|")[doc.data().City] }
//                                             </div>
//                                             <div class="col-md-3 py-1">
//                                                 <div class="blood-style">
//                                                 <b>Blood Group: </b>${doc.data().BloodGroup}
//                                                 </div>
//                                                 <!--<b>Available: </b>mol<br>-->
//                                                 <b>Last Donated on: </b>${doc.data().BloodDonationOption == 'NeverDonated'? 'NeverDonated': doc.data().LastDonatedDate == '1900-01-01' ? 'Never Donated' : new Date((doc.data().LastDonatedDate)).toDateString()} 
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 </td></tr>`
//                             );
//                         }        
                    
//                     }
//                 });
//             }
//             //document.getElementById('searchFormLoading').style.display = 'none';
//             $('#searchFormLoading').css('display', 'none');
//         })
//         .catch(err => {
//             console.log('Error getting documents', err);
//             $('#unavailableError').html(err.message);
//             $('#unavailableError').css('display', 'block');
//             alert(err.message);
//         });
// }

// function FireBaseRegisterDonor(donor) {
//     //document.getElementById('registerFormLoading').style.display = 'block';
//     $('#registerFormLoading').css('display', 'none');
//     $('#unavailableError').css('display', 'none');
//     //console.log('searching for donor id:', donorReferenceID);
//     var docRef = db.collection("Donors").doc(donor.donorDetails.donorReferenceID);
//     docRef.get().then(function (thisDoc) {
//         if (thisDoc.exists) {
//             console.log('user exisits, updating now....', donor);
//             docRef.update(donor.donorDetails).then(function () {
//                 //alert('You have successfully updated your details');
//                 window.location = './searchDonors.html';
//             })
//         } else {
//             console.log('created new user');
//             //docRef.set(donor.donorDetails);
//             db.collection("Donors").add(donor.donorDetails).then(function (docRef) {
//                 console.log("Document written with ID: ", docRef.id);
//                 //alert('You have successfully registerd as donor');
//                 window.location = './searchDonors.html';
//             })
//                 .catch(function (error) {
//                     console.error("Error adding document: ", error);
//                     $('#unavailableError').css('display', 'block');
//                     $('#unavailableError').html(error.message);
//                     alert(error.message);
//                 });
//         }
//     }).catch(function (error) {
//         console.log(error.message);
//         $('#unavailableError').css('display', 'block');
//         $('#unavailableError').html(error.message);
//         alert(error.message);
//     });
// }

// function CheckDonorExists(donor) {
//     console.log("searching donors....");
//     document.getElementById('registerFormLoading').style.display = 'block';
//     $('#unavailableError').css('display', 'none');
//     //console.log(donor.donorDetails.State, donor.donorDetails.City, donor.donorDetails.BloodGroup); return;
//     let query = db.collection('Donors');

//     if (donor.donorDetails.ContactNo != null) {
//         query = query.where('ContactNo', '==', donor.donorDetails.ContactNo);
//     }
//     // if (donor.donorDetails.DonorName != null) {
//     //     query = query.where('DonorName', '==', donor.donorDetails.DonorName);
//     // }
//     /*if (donor.donorDetails.Email != null) {
//         query = query.where('Email', '==', donor.donorDetails.Email);
//     }*/

//     let index = 0;
//     query.get()
//         .then(snapshot => {
//             // console.log("searched donors length:", snapshot.docs.length);
//             // console.log("searched donors first element:", snapshot.docs[0]);
//             if (snapshot.docs.length === 0) {
//                 donor.donorDetails.donorReferenceID = '0';
//                 PopulateDonorUIDetails(donor.donorDetails.donorReferenceID, donor.donorDetails.DonorName,
//                     '',
//                     '',
//                     donor.donorDetails.ContactNo,
//                     donor.donorDetails.Email,
//                     '',
//                     ''
//                 );
//                 document.getElementById('registerFormLoading').style.display = 'none';
//             } else {
//                 snapshot.forEach(function (doc) {
//                     console.log("id from firestore", doc.id);
//                     donor.donorDetails.donorReferenceID = doc.id;
//                     donor.RegisterDonor();
//                     //console.log('LastDonatedDate:', doc.data().LastDonatedDate);
//                     PopulateDonorUIDetails(doc.id, doc.data().DonorName.trim(),
//                         doc.data().State,
//                         doc.data().City,
//                         doc.data().ContactNo.trim(),
//                         doc.data().Email.trim(),
//                         doc.data().BloodGroup.trim(),
//                         doc.data().BloodDonationOption.trim(),
//                         (doc.data().LastDonatedDate)
//                     );
//                     document.getElementById('registerFormLoading').style.display = 'none';
//                 });
//             }
//         })
//         .catch(err => {
//             console.log('Error getting documents', err);
//             alert(err.message);
//             $('#unavailableError').css('display', 'block');
//             $('#unavailableError').html(err.message);
//         });
// }
