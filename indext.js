var obj1 = { name: "person1", age: 5};
var obj2 = {  age: 5 , name: "person1"};

function areObjectEqual(obj1, obj2){
    var keys1 = Object(obj1);
    var keys2 = Object(obj2);
    
    if (keys1.length !== keys2.length){
        return false;
    }
    for (var i=0; i< keys1.length; i++){
        if(obj1[keys1[i]] !== obj2[key2[1]]){
            return false;
        }
    }
    return true;
}
console.log(areObjectEqual(obj1,obj2));



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

