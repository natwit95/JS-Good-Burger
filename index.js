document.addEventListener("DOMContentLoaded", () => {
 //Implement Your Code Here

let burgerMenu = document.getElementById("burger-menu")
let orderList = document.getElementById("order-list")
// console.log(burgerMenu)

fetch('http://localhost:3000/burgers')
  .then((response) => {
    return response.json();
  })
  .then((body) => {
    body.forEach(burger => {
      let eachBurger = document.createElement("div")
      eachBurger.className = "burger"
      eachBurger.innerHTML = `
      <h3 class="burger_title">${burger.name}</h3>
      <img src="${burger.image}">
      <p class="burger_description">${burger.description}</p>
      <button class="button">Add to Order</button>
      `
      burgerMenu.append(eachBurger)

    })
  });

  burgerMenu.addEventListener("click", function(event){
    // let orderBtn = burgerMenu.querySelector(".button")
    if (event.target.className === "button") {
    let burgerName = event.target.parentNode.querySelector(".burger_title").innerText
    let burgerLi = document.createElement('li')
    burgerLi.innerHTML = burgerName
    orderList.appendChild(burgerLi)

    }
    // if(event.target.className === "edit-button") {
    // let nameInput = document.getElementById("burger-name").value
    // let descriptionInput = document.getElementById("burger-description").value
    // let imageInput = document.getElementById("burger-image").value
    
    // let burgerTitle = 
    // }
  })

  let burgerForm = document.getElementById("custom-burger")
  // console.log(burgerForm)

  burgerForm.addEventListener("submit", function(event){
    event.preventDefault() 
    let nameInput = document.getElementById("burger-name").value
    let descriptionInput = document.getElementById("burger-description").value
    let imageInput = document.getElementById("burger-image").value
    burgerForm.reset()
    const data = { name: nameInput,
                    description: descriptionInput,
                    image: imageInput
     };

      fetch('http://localhost:3000/burgers', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data),
      })
      .then((response) => response.json())
      .then((data) => {
        let newBurger = document.createElement("div")
        newBurger.className = "burger"
        newBurger.innerHTML = `
      <h3 class="burger_title">${data.name}</h3>
      <img src="${data.image}">
      <p class="burger_description">${data.description}</p>
      <button class="button">Add to Order</button>
      `
        burgerMenu.append(newBurger)
        
      })
      // burgerForm.reset()
  })




})//domend
