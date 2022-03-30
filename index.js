            //Get the elements 
const text = document.getElementById("text");
const button = document.getElementById("button");
const img = document.getElementById("img");
const interpreted = document.getElementById("interpreted");

button.addEventListener("click",()=>{
            
    fetch("https://fedeperin-harry-potter-api.herokuapp.com/personajes") //Api Harry Potter
        .then(response => response.json())
        .then(data => {
                
            let num = Math.ceil(Math.random() * 22);
            let character = data[num] //Set the character
            console.log(character); //print the character 

                //Set the propertis
            let name = character["personaje"];
            let imge = character["imagen"];
            let interpr = character["interpretado_por"];

                //Case of undefined
            if(name == undefined){
                console.error("Not valiue founded... ");
                name = "NOT FOUND";
                imge = "NOT FOUND";
                interpr = "NOT FOUND";
            }

                //Insert in htlm file
            text.innerHTML = name;
            img.innerHTML = `<img src="${imge}" class="card-img-top rounded-circle imgshadow" alt="picture">`;
            interpreted.innerHTML = interpr;
        })
})