//returns to console only



function createTable(vets) {
    const table = document.createElement("table");
    table.className = "table table-sm";
    const tbody = document.createElement("tbody");

    for (let member of vets) {
        //create a new row for each x
        const tr = table.insertRow(-1);
        //create a new object for each value
        for (let memberKey in member) {

            const td = tr.insertCell();
            //append the data into the cell
            td.appendChild(document.createTextNode(member[memberKey]));

        }
        //append row to table body
        tbody.appendChild(tr);
    }
    //NOT CURRENTLY WORKING
    //create table headers
    const tr = table.insertRow(-1);

    for (let member in vets[0]) {
        const th = document.createElement('th');
        th.appendChild(document.createTextNode(memberKey));
        tr.appendChild(th);
    }
    //append the table body to the table
    table.appendChild(tbody);

    //append the table to table location
    document.getElementById("tableLocation").appendChild(table);
}




function listAllVets() {
    return fetchData(`http://localhost:9966/petclinic/api/vets`, 'GET')
        .then((req) => {
            response = JSON.parse(req.responseText);
            createTable(response)
        });
}