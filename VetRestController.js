function getAllVets() {
    return fetchData(`http://localhost:9966/petclinic/api/vets`, 'GET')
        .then((req) => {
            return JSON.parse(req.responseText);
            console.log
        });
}

function newVet() {
    let body = {
    // At some point an input box newVetInput for this will be made    
    name: document.getElementById("newVetInput").value
    };
    return fetchData(`http://localhost:9966/petclinic/api/vets`, 'POST', body)
        .then((req) => {
            return JSON.parse(req.responseText);
        });
}

function DeleteVet() {

    //vetID will be the id of a vet. need to write a function for this
    return fetchData(`http://localhost:9966/petclinic/api/vets/${document.getElementById("vetIdInput").value}`, 'DELETE')
        .then((req) => {
            return JSON.parse(req.responseText);
        });
}

function getVet() {

    //At some point an input box vetIdInput for vet id will be made
    return fetchData(`http://localhost:9966/petclinic/api/vets/${document.getElementById("vetIdInput").value}`, 'GET')
        .then((req) => {
            return JSON.parse(req.responseText);
        });
}

function updateVet() {

    //At some point an input box vetIdInput for vet id will be made
    return fetchData(`http://localhost:9966/petclinic/api/vets/${document.getElementById("vetIdInput").value}`, 'PUT')
        .then((req) => {
            return JSON.parse(req.responseText);
        });
}

