var mars = document.getElementById("mars");
var moon = document.getElementById("moon");
var venus = document.getElementById("venus");
var titan = document.getElementById("titan");

function marsfun() {
if (mars.style.display === "none") {
  mars.style.display = "flex";
  moon.style.display = "none";
  venus.style.display = "none";
  titan.style.display = "none";

}
else {
  mars.style.display = "flex";

}
}

function moonfun() {


  if (moon.style.display === "flex") {
    mars.style.display = "none"
    venus.style.display = "none";
    titan.style.display = "none";

  } else if (moon.style.display === "none"){
    moon.style.display = "flex";
    mars.style.display = "none";
    venus.style.display = "none";
    titan.style.display = "none";
  }
  else {
    moon.style.display = "none";
    venus.style.display = "none";
    titan.style.display = "none";

  
  }
  
  }
  function venusfun() {
    if (venus.style.display === "flex") {
      mars.style.display = "none"
      moon.style.display = "none";
      titan.style.display = "none";

    } else if (venus.style.display === "none"){
      venus.style.display = "flex";
      mars.style.display = "none";
      moon.style.display = "none";
      titan.style.display = "none";
    } else {
      moon.style.display = "none";
      venus.style.display = "none";
      titan.style.display = "none";
      mars.style.display = "none";

    
    }
    
    }
    function titanfun() {
      if (titan.style.display === "flex") {
        mars.style.display = "none"
        venus.style.display = "none";
        moon.style.display = "none";
      } else if (titan.style.display === "none"){
        titan.style.display = "flex";
        mars.style.display = "none";
        venus.style.display = "none";
        moon.style.display = "none";
      } else {
        moon.style.display = "none";
        venus.style.display = "none";
        titan.style.display = "none";
        mars.style.display = "none";
      
      }
      
      }

