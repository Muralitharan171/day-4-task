// 1.How to compare two JSON have the same properties without order?

var obj1={name:"person 1", age:"5"};
var obj2={age:"5", name:"person 1"};

if(JSON.stringify(obj1)===JSON.stringify(obj2)){
   
          console.log("equal");
       }
       else {
           console.log("not equal");  
}

//2.use the rest countries API URL "https://restcountries.eu/rest/v3/all" and display all the country flags in the console

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send()
 request.onload=function(){
    var data = request.response
    var result = JSON.parse(data)
    for(var obj of result){
     console.log( obj.flag);
    }
    }

//3.use same rest countries and print all countries names,regions,sub regions and populations

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send()
 request.onload=function(){
    var data = request.response
    var result = JSON.parse(data)
    for(var obj of result){
       console.log( obj.name.common,obj.region,obj.subregion,obj.population);
    }
    }