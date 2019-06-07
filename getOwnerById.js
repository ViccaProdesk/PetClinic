let inputOwnerId;
const ownerById = (input) => {inputOwnerId = input.value};

function showOwnerById(){
    return fetchData(`http://localhost:9966/petclinic/api/owners`, 'GET')
        .then((req) => {
            response = JSON.parse(req.responseText);
            console.log(response)
            let para = document.createElement("p");
            let div = document.getElementById("getOwnerById");
            for(key in response){
                console.log(key);
                let {id,firstName,lastName} = response[key];
                console.log(response[key]);
                console.log("id",id,"input",inputOwnerId);
                if(id.toString() === inputOwnerId.toString()){
                    console.log("found",id,response[key]);
                    let textValue = `${id} :- ${firstName} ${lastName} `;
                    para.textContent = textValue;
                    if(div.childElementCount > 0){
                        console.log("edited textContent of current <p> element")
                        div.lastChild.textContent = textValue;
                        
                    }
                }
            }
            if(div.childElementCount === 0){
                 console.log("created a new <p> element")
                 div.appendChild(para);
            }
            
            return JSON.parse(req.responseText);
    });
}