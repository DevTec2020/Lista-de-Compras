const addItem = document.querySelector("form")
const input = document.querySelector("form input")
const ItemLista = document.querySelector(".lista")
const alert = document.getElementById("alert")


// Adicionando item pelo Form
addItem.onsubmit = (event) => {
    event.preventDefault()
    try {
        //adicionando li
        const item = document.createElement('li')

        
        //adicionando div da checkbox
        const div = document.createElement('div')
        div.classList.add("divItem")
        
        //adicionando checkbox
        const checkbox = document.createElement('input')
        checkbox.type = "checkbox"

        //adicionando adicionando texto do item
        const span = document.createElement('span')
        span.textContent = input.value

        //adicionando img da lixeira
        const img = document.createElement('img')
        img.setAttribute("src",`./assets/delete-Lixeira.svg`)
        img.setAttribute("onclick",`RemoveItem(this)`)
        

        
        //adicionando apenas os itens da div
        div.append(checkbox, span)

        // Organizand o Item
        item.append(div, img)

        // Adicionando o Item na ul
        ItemLista.append(item)
        clearForm()
    
    
    } catch (error) {
        console.log("item não adicionado")
    }
    
}

function RemoveItem(liItem){
    try {
        const li = liItem.parentElement;
        li.remove()
        ativaAlerta()

             
           
    } catch (error) {
        console.log(error)
    }
}

function clearForm(){
    input.value = ""
}

function ativaAlerta(){
    const teste = document.getElementById("alert")
    teste.style.visibility='visible'

    setTimeout(() => {
        teste.style.visibility='hidden'
    },4000)

}