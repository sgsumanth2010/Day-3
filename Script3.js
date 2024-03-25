// Reset countrie flags 
var xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v3.1/all", true);
xhr.onload = function (){

var countries = JSON.parse(xhr.responseText);
console.log(countries);

for (var i = 0; i < countries.length; i++){
    console.log(countries[i].name.common + ":" + countries[i].flag);
}
};
xhr.send();
