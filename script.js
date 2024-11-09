const addItem = document.querySelector("form")
const input = document.querySelector("form input")
const ItemLista = document.querySelector(".lista")

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
        img.setAttribute("src",`./assets/lixeira.svg`)
        
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

function clearForm(){
    input.value = ""
}