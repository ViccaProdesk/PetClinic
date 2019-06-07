
function getAllOwners() {
    return fetchData(`http://localhost:9966/petclinic/api/owners`, 'GET')
        .then((req) => {
            response = JSON.parse(req.responseText);
            console.log(response)
            let diffList = document.createElement("ul");
            let div = document.getElementById("getAllOwners");
            

            for(key in response){
                console.log(key);
                let {firstName,lastName} = response[key];
                console.log(response[key]);
                console.log(firstName);
                console.log(lastName);
                let list = document.createElement("li");
                //let listText = document.createTextNode;
                //listText = ` ${firstName} ${lastName} `;
                list.innerText = ` ${firstName} ${lastName} `;
                diffList.appendChild(list);
                //list.appendChild(listText);
                
            }
            div.appendChild(diffList);
            //document.body.appendChild(list);
            
            return JSON.parse(req.responseText);
        });
}
