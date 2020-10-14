function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    slider = document.getElementsByClassName("carousel-control-prev slider");
    if( slider != null )
    {
      slider[0].disabled = true;
      console.log(slider[0]);
      console.log("Y");
    }

  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    slider = document.getElementsByClassName("carousel-control-prev slider");
    if( slider != null )
    {
      slider[0].disabled = false;
      console.log("N");
    }
  }