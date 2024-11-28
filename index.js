const userItem = document.getElementById("item-input")
const btnAdd = document.getElementById("add-item")
const buyList = document.getElementById("list")
const alert = document.querySelector(".alert")
const closeAlert = document.getElementById("close")

let idCounter = 0


function addItem() {
    const inputValue = userItem.value;

    if (inputValue.trim() !== '') {
        idCounter++
        const itemId = idCounter

        const newItem = document.createElement('div')
        newItem.classList.add('items')
        newItem.setAttribute('id', itemId)

        newItem.innerHTML = `
            <label class="custom-checkbox">
                <input type="checkbox" id="checkbox">
                <span class="checkbox-label">${inputValue}</span>
            </label>
            <button class="delete-button" id="delete-${itemId}"><img src="./icons/trash.svg" alt="lixeira"></button>
        `

        const deleteBtn = newItem.querySelector('.delete-button')

        deleteBtn.addEventListener('click', () => {
            newItem.remove()
            alert.classList.remove('hidden')
        })

        closeAlert.addEventListener('click', () => {
            alert.classList.add('hidden')
        })

        buyList.appendChild(newItem)
        userItem.value = ''
    } else {
        alert('Por favor, adicione um item')
    }
}

btnAdd.addEventListener("click", addItem);
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') { 
        addItem()
    }
})



