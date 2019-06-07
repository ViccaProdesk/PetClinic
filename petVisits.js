function findPet() {
    let input = document.getElementById("petInput");
    getAllPets().then((x)=>{
        let data = JSON.parse(x.responseText);
         for (let x of data) {
            if (x.name === input) {
                window.sessionStorage.setItem("Visits", JSON.stringify(x));
                window.location.href = 'petVisits.html';
            }
        }
    });
    
}
