const url = "https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters";

let entryUrl = "";

function dropdown(){
fetch (url)
.then(response => response.json())
.then(data => {
    const choice = document.getElementById("choice");
    for(const monster of data.data){
        const option = document.createElement("option");
        option.textContent = monster.name.toUpperCase();
        choice.appendChild(option); 
        // console.log(data.image)

        choice.onchange = () => {
            console.log(choice.value)
            entryUrl = "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/" + choice.value.toLowerCase();
            monsterDetails();
        }
    }
})
.catch(error => console.error("Error:",error));
}
dropdown();

function monsterDetails(){
    // const details = getElementById("details");

    fetch(entryUrl)
    .then(response => response.json())
    .then(data => {
    // console.log(data)
    details.innerHTML = `
        <h2>${data.data.name.toUpperCase()}</h2>
        <img src="${data.data.image}" alt="${data.data.name}">
        <p>${data.data.description}</p>
        <p>Drops: ${data.data.drops}</p>
        <p>Locations: ${data.data.common_locations}</p>
          `  ;
})
}