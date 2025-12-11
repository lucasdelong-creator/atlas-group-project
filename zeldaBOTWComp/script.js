const url = "https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters";

function dropdown(){
fetch (url)
.then(response => response.json())
.then(data => {
    const choice = document.getElementById("choice");
    for(const monster of data.data){
        const option = document.createElement("option");
        option.textContent = monster.name.toUpperCase();
        choice.appendChild(option); 

        option.onclick = () => {
            monsterDetails();
        }
    }
})
.catch(error => console.error("Error:",error));
}
dropdown();

function monsterDetails(){
    fetch(url)
    .then(response => response.json())
.then(data => {
    const details = getElementById("details");
    
})
}