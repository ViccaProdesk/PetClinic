function getAllPets() {
    fetchData(`http://localhost:9966/petclinic/api/pets`, 'GET').then((req) => {
        response = JSON.parse(req.responseText);
        console.log(response);
    });
}

function getPatientTypes() {
    fetchData(`http://localhost:9966/petclinic/api/pets/pettypes`, 'GET').then((req) => {
        response = JSON.parse(req.responseText);
        console.log(response);
    });
}

function getPetById() {
    fetchData(`http://localhost:9966/petclinic/api/pets/${document.getElementById()}`, 'GET').then((req) => {
        response = JSON.parse(req.responseText);
        console.log(response);
    });
}


getAllPets();
getPatientTypes();
getPetById()