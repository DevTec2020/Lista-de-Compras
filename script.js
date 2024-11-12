// Recuperando dados do form
const addItem = document.querySelector("form")
const input = document.querySelector("form input")

// Recuperando dados da lista
const ItemLista = document.querySelector(".lista")

// Recuperando Alert
const alert = document.getElementById("alert")
const icoFechar = document.getElementById("ico-fechar")



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

// Removendo itemm
function RemoveItem(liItem){
    try {
        const li = liItem.parentElement;
        li.remove()
        ativaAlerta()

             
           
    } catch (error) {
        console.log(error)
    }
}

// Limpa Form
function clearForm(){
    input.value = ""
}

// Deixando o alerta visivel
function ativaAlerta(){
    alert.style.visibility='visible'
}

// Fechando o alerta no icone X
icoFechar.addEventListener("click", () => {
    alert.style.visibility='hidden'
}) 
