function responsiv_navigation() {
    var x = document.getElementById("navigationId");
    if (x.className === "navigation") {
      x.className += " responsive";
    }
    else {
      x.className = "navigation";
    }
  }

  var navMobile = document.getElementById("navMobile");

  navMobile.style.maxHeight = "0px";

  function toggle(){
      if(navMobile.style.maxHeight == "0px")
      {
        navMobile.style.maxHeight == "100px"
      }
      else
      {
        navMobile.style.maxHeight == "0px"
      }
  }