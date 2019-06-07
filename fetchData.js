function fetchData(url, method, body) {

    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.onreadystatechange = () => {
            if (req.readyState === 4) {
                if (((req.status >= 200) && (req.status <= 299))) {
                    resolve(req);
                } else {
                    reject("Name does not match existing records");
                }
            }
        };
        req.open(method, url);
        req.setRequestHeader("Content-Type", "application/json");
        req.send(JSON.stringify(body));
    });
}


function getAllOwners() {
    return fetchData(`http://localhost:9966/petclinic/api/owners`, 'GET')
        .then((req) => {
            return JSON.parse(req.responseText);
        });
}
