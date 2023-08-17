
let icone = document.getElementsByClassName("icone");
  for(let i=0; i<icone.length; i++){
    icone = document.getElementById("classe" + [i]);
   if(icone){
     icone.addEventListener('mouseover', () => {
      icone.style.display = "grid";
      }
  )}
}

var myHeaders = new Headers();
myHeaders.append("Authorization", "36b949c6-a800-4ec0-82ae-ce7ef31bc10a");

var formdata = new FormData();

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
 // body: formdata,
  redirect: 'follow'
};

fetch("https://api.pathfinder2.fr/v1/pf2/ancestry", requestOptions)
  .then(response => response.json())
  .then(result => {console.log(result);
    
  for (let i=0; i<result.results.length; i++){
    console.log(result.results[i].name);
    console.log(result.results[i].system.hp);
    let race_name = result.results[i].name;
    let race_hp = result.results[i].system.hp;
    var listItem = "<li>" + race_name+ - + race_hp + "PV </li>";
    // let location = document.getElementById("name").innerHTML;
    $("#races-list").append(listItem);
    // location.append('<p>'+ race_name[i] +race_hp[i]+ '</p>');
  }
  })
  
  //.catch(error => console.log('error', error));

  fetch("https://api.pathfinder2.fr/v1/pf2/class", requestOptions)
  .then(response => response.json())
  .then(result => {console.log(result);
    
  for (let i=0; i<result.results.length; i++){
    console.log(result.results[i].name);
    console.log(result.results[i].system.hp);
    let class_name = result.results[i].name;
    let class_hp = result.results[i].system.hp;
    var listItem = "<li>" + class_name+ - + class_hp + "PV </li>";
    // let location = document.getElementById("name").innerHTML;
    $("#class-list").append(listItem);
    // location.append('<p>'+ race_name[i] +race_hp[i]+ '</p>');
  }
  })

 