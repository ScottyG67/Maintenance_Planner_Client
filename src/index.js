const BASE_URL = "http://localhost:3000/"

document.addEventListener("DOMContentLoaded",()=>{

  console.log("dom loaded")
  insertWelcome()
  addTestButn()
})

function insertWelcome() {
  const root = document.getElementById("root")
  let welcome = document.createElement('h2')
  welcome.innerText="This was added in the Index.js file"
  root.appendChild(welcome)
}

function addTestButn() {
  const root = document.getElementById("root")
  let button = document.createElement('button')
  button.innerText= "click to show list of plants"
  button.addEventListener('click',loadPlants)
  root.appendChild(button)
}

function loadPlants() {
  fetch('http://localhost:3000/plants').then(res=>res.json()).then(plantsList => renderPlantsList(plantsList))
}

function renderPlantsList(plantsList){
  const root = document.getElementById("root")
  const ul = document.createElement('ul')
  root.appendChild(ul)
  plantsList.forEach(plant => {
    let li = document.createElement('li')
    li.innerText=plant.name
    ul.appendChild(li)
  });
}