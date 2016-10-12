var fivepm = 24 - moment().format('H');

var place = [
  'U.S. Minor Outlying Islands',
  'American Samoa',
  'Hawaii',
  'French Polynesia',
  'Alaska',
  'California',
  'Colorado',
  'Illinois',
  'New York',
  'Nova Scotia',
  'Nuuk, Greenland',
  'Cape Verde',
  'Iceland',
  'England',
  'Germany',
  'Finland',
  'Armenia',
  'Uzbekistan',
  'Bhutan',
  'Thailand',
  'China',
  'Japan',
  'Guam',
  'New Zealand'
];

var drink = [
  'Rum Flip',
  'Kava',
  'Kona Longboard Lager',
  'Mai Tai',
  'Stout from alaskan brewing co',
  'Stone IPA',
  'Dales Pale Ale',
  'Revolution Brewing Anti-Hero',
  'Manhattan',
  'Mussel Martini',
  'Sïku',
  'Manecome',
  'Brennivín',
  'Gin & Tonic',
  'Weihenstephan Pilsner',
  'Sima',
  'Artsakh Mulberry Vodka',
  'Shampanski Sparkling Wine',
  'Ara',
  'MeKhong Whiskey',
  'Jiuniang',
  'Sake',
  'Palm Wine',
  'MARLBOROUGH SAUVIGNON BLANC'
];

var image = [
  'minor.jpg',
  'samoa.jpg',
  'hawaii.jpg',
  'polynesia.jpg',
  'alaska.jpg',
  'california.jpg',
  'colorado.jpg',
  'illinois.jpg',
  'newyork.jpg',
  'nova.jpg',
  'greenland.jpg',
  'verde.jpg',
  'iceland.jpg',
  'england.jpg',
  'germany.jpg',
  'finland.jpg',
  'armenia.jpg',
  'uzbekistan.jpg',
  'bhutan.jpg',
  'thailand.jpg',
  'china.jpg',
  'japan.jpg',
  'guam.jpg',
  'zealand.jpg'
];

var render = function (num){
  console.log(num);
  $('#place').text(place[num]);
  $('#drink').text(drink[num]);
  $('body').css('background-image', 'url(http://www.tylernelsonschmidt.com/cdn/'+ image[num] +')');
};

render(fivepm);

var slider = document.getElementById('test');
slider.value = fivepm;

document.onkeydown = function (e) {
  if (e.which === 37) {
    slider.stepDown();
    slider.oninput();
  }
  if (e.which === 39) {
    slider.stepUp();
    slider.oninput();
  }
};

slider.oninput = function () {
  render(slider.value);
};