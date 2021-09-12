let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads() // saves the bookmarked tabs even after restart or refresh of page
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    renderLeads()
})



inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = "" // creates blank space after input is done
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
})

function renderLeads() {
let listItems = ""
for (let i = 0; i < myLeads.length; i++) {
    listItems += `<li>
    <a target = '_blank' href='${myLeads[i]}'>
    ${myLeads[i]} 
    </a>
    </li>`
}
ulEl.innerHTML = listItems
}