var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

var map = document.getElementById("map");

var myMap;
var myPlacemark;

if (map) {
  ymaps.ready(init);
  function init () {
    myMap = new ymaps.Map(map, {
      center: [59.938631, 30.323055],
      zoom: 15
    });

    myPlacemark = new ymaps.Placemark(
      [59.938631, 30.323055] , {
        preset: "twirl#redStretchyIcon"
    });

    myMap.geoObjects.add(myPlacemark);
  }
}
