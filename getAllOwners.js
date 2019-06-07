
function getAllOwners() {
    return fetchData(`http://localhost:9966/petclinic/api/owners`, 'GET')
        .then((req) => {
            response = JSON.parse(req.responseText);
            console.log(response)
            let para = document.createElement("p");
            let div = document.getElementsByClassName("getAllOwners")
            para.textContent = response;
            for(key in response){
                console.log(key);
                console.log(response[key]);
            }
            document.body.appendChild(para);
            
            return JSON.parse(req.responseText);
        });
}
