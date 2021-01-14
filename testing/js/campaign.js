$(document).ready(function () {
    if (new URLSearchParams(window.location.search).has('mobileUser') == true) {
        //console.log('test1');
        $('.WebUser').css('display', 'none');
        $('.MobileUser').css('display', 'block');
    } else {
        //console.log('test2');
        $('.WebUser').css('display', 'block');
        $('.MobileUser').css('display', 'none');
    }

    class Campaign {
        constructor() {
            this.Details = {
                State: '',
                City: '',
                Data: ''
            };
        }
        // return `(${this.x}, ${this.y})`;
    };

    let Obj = new Campaign();
    let states = state_arr;
    let cities = city_arr;
    let stateElement = document.getElementById("states");
    let cityElement = document.getElementById("cities");

    states.forEach((element, index) => {
        stateElement.options[stateElement.options.length] = new Option(element.trim(), index);
    });

    $('#states').on('change', function (value, index) {
        $('#cities').empty();
        let selectedStateCities = cities[$('#states :selected').val()].split("|"); //select all the cities of selected state
        selectedStateCities.forEach((element, index) => {
            //console.log(index);
            cityElement.options[cityElement.options.length] = new Option(element.trim(), index);
        });
    });

    $('#cities').on('change', function (value, index) {
        // console.log($('#cities :selected').text());
        // searchDonorObj.donorDetails.State = $('#states :selected').text();
        // searchDonorObj.donorDetails.City = $('#cities :selected').text();

        Obj.Details.State = +$('#states :selected').val();
        Obj.Details.City = +$('#cities :selected').val();

    });
    $('#Campaign').on('submit', function (e) {
        e.preventDefault();
        //console.log(searchDonorObj);
        // #AvailableDonors
        //SearchDonors(searchDonorObj);
        // $("#dk1").hide();
        // $("#dk2").hide();
        FireBaseSearchCampaigns(Obj);
        alert("hello")
    });
});

/*
var x = document.getElementById("mySelect").selectedIndex;
var y = document.getElementById("mySelect").options;
alert("Index: " + y[x].index + " is " + y[x].text);
*/