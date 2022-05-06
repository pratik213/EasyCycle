let load=0
var int;

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn_2 = document.getElementById("stop")

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

btn_2.addEventListener('click',()=>{
     load=load*0.000277777778
     hour=load
     if (hour <1){
         hour=1
         var price=10
     }
     else{
         Math.ceil(hour);
         price= 10+5*(hour-1)
         price=Math.ceil(price)
     }
     alert("You have to pay "+price)
     int = 0
     
});


btn.onclick = function() {
     modal.style.display = "block";
      int=setInterval(blurring,1000);
   
     
   }
   var btnco = document.querySelectorAll(".btnco")
   
//    function test1(){
//     this.style.backgroundColor="green"
// }
   
//    btnco.addEventListener('click',test1)

document.querySelectorAll('.btnco').forEach(function(e) {
    e.addEventListener('click', function() {
        if (this.style.backgroundColor=="red"){
            this.style.backgroundColor="green"
        }else{
      this.style.backgroundColor = "red";
    }
    })
  });



 

////////////////////////////////////////////////////////////////////////////////////








function start(){
    var int=setInterval(blurring,1000);
    
}
function convertHMS(value) {
    const sec = parseInt(value, 10); // convert value to number if it's string
    let hours   = Math.floor(sec / 3600); // get hours
    let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
    let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds
    // add 0 if value < 10; Example: 2 => 02
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds; // Return is HH : MM : SS
}

function blurring(){
    load++

    btn_2.addEventListener('click',()=>{
        load=clearInterval(int)
    })
    document.getElementById("outvalue").innerHTML= convertHMS(load)
}



x=navigator.geolocation;
x.getCurrentPosition(sucess,failure);

function sucess(position){
    var myLat=position.coords.latitude;
    var myLong= position.coords.longitude;

    var coords= new google.maps.LatLng(myLat,myLong);

    var mapOptions={
        zoom:15,
        center: coords,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    
    }

    var map= new google.maps.Map(document.getElementById("map"),mapOptions);
    var marker = new google.maps.Marker({map:map,position:coords});
}

function failure(){}