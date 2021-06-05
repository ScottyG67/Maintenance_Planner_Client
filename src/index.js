
document.addEventListener("DOMContentLoaded",()=>{
  console.log("dom loaded")
  insertWelcome()
})

function insertWelcome() {
  const root = document.getElementById("root")
  let welcome = document.createElement('h2')
  welcome.innerText="This was added in the Index.js file"
  root.appendChild(welcome)
}