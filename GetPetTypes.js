function getPettypes() {
    return FetchPetTypesData(`http://localhost:9966/petclinic/api/pettypes`, 'GET')
        .then((req) => {
            response = JSON.parse(req.responseText);
            console.log(response)
            let pett = document.createElement("ul");
            let div = document.getElementsByClassName("getPettypes")
          
            for(key in response){
                console.log(key);
                let {Pet_type} = response[key];
                console.log(response[key]);
                console.log(Pet_type);
               let list = document.createElement("li");
               pett.appendChild(list);
           }
               div.appendChild(pett)
           return JSON.parse(req.responseText);
            });


}

