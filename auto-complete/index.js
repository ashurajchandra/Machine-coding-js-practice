const input = document.querySelector("#search")
const listItem = document.querySelector("ul")
const suggestions = [...listItem.children]



function handleOnChange(e){
    if(!e.target.value){
        listItem.classList.remove("active")
        return
    }
    listItem.classList.add("active")
    findSuggestions(e.target.value)
}

function findSuggestions(value){
    suggestions.forEach((item)=>{
        item.classList.add("active")
        item.addEventListener("click", ()=>{
            handleSearchValue(item.textContent)
        })
    })
   const filteredLists= suggestions.filter((item)=>{
      return  !item.textContent.includes(value) && item
    })
    filteredLists.forEach((item)=>{
        item.classList.remove("active")
    })
    if(filteredLists.length ==suggestions.length){
        listItem.classList.remove("active")
    }else{
        listItem.classList.add("active")
    }
}

function handleSearchValue(item){
input.value = item
listItem.classList.remove("active")
}

input.addEventListener("input", handleOnChange)