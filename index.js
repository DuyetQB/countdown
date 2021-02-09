var countdown = new Date("feb 12, 2021 0:0:0 ").getTime();
var iframe = document.querySelector("#preview-frame");
var main = document.querySelector("#main");
var oldAudio = document.querySelector("#stAudio")
var newYearAudio = document.querySelector("#newAudio")

var x = setInterval(function(){
 

  var now = new Date().getTime();
  var distance = countdown- now ;
  
  var days = Math.floor(distance / (60 * 60 *24 *1000));
  var hours = Math.floor(distance %(60 * 60 *24*1000)/(60*60*1000));
  
   var minutes = Math.floor(distance %(60 *60*1000)/(60*1000));
    var seconds = Math.floor(distance %(60 *1000)/1000);
  
  
  
  document.querySelector("#days").innerHTML = days;
  document.querySelector("#hours").innerHTML = hours
  document.querySelector("#mins").innerHTML = minutes
  document.querySelector("#secs").innerHTML = seconds;
  
  if(distance <= 0){
    clearInterval(x);
   document.querySelector("#tet").innerHTML = "Happy new year 2021";
   iframe.style.display = "block";
  main.style.display = "none";
  oldAudio.pause();
  newYearAudio.play();
  newYearAudio.loop = true
  }
},1000);
//lập trình bởi Đinh Sĩ Duyệt 
//Hóa Sơn 


 
