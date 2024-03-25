// 2.Reset countires Name region subregion population
var xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v3.1/all", true);
xhr.onload = function (){

var countries = JSON.parse(xhr.responseText);
console.log(countries);

for (var i = 0; i < countries.length; i++){
    console.log(countries[i].name.common + ":" + countries[i].flag);
    console.log("Population:" , countries[i].population);
    console.log("Region:" , countries[i].region);
    console.log("subregion:" , countries[i].subregion);

}
};
xhr.send();
