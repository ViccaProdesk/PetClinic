function getPettypes() {
    return FetchPetTypesData(`http://localhost:9966/petclinic/api/pettypes`, 'GET')
        .then((req) => {
            return JSON.parse(req.responseText);
             console.log(response);
        });
}

// function getPettypes() {
//     return fetchData(`http://localhost:9966/petclinic/api/pettypes`, 'POST')
//         .then((req) => {
//             return JSON.parse(req.responseText);
//              console.log(response);
//         });
// }
    getPettypes()