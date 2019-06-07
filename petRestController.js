function getAllPets() {
    return fetchData(`http://localhost:9966/petclinic/api/pets`, 'GET');
}

function getPatientTypes() {
    fetchData(`http://localhost:9966/petclinic/api/pets/pettypes`, 'GET').then((req) => {
        response = JSON.parse(req.responseText);
        console.log(response);
    });
}

function getPetById(htmlId) {
    fetchData(`http://localhost:9966/petclinic/api/pets/${document.getElementById(htmlId)}`, 'GET').then((req) => {
        response = JSON.parse(req.responseText);
        console.log(response);
    });
}


getPatientTypes();