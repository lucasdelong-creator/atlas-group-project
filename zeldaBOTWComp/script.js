const monsterName = document.getElementById("monsterName");
const url = "https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters";

function monsterList(){
fetch (url)
.then(response => response.json())
.then(data => {
    const monsters = data.data;
    for(const monster of monsters){
        console.log(monster.name)
    }
})
.catch(error => console.error("Error:",error));
}