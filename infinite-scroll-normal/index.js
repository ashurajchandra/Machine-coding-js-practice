
const container = document.querySelector(".container")

function createElement(id){
    const element = document.createElement("p");
    element.innerText = id;
    return element
}
function addElement(items, lastIndex=0){
    for(let i=0; i<items; i++){
        container.append(createElement(lastIndex+i))
    }
}

function handleScroll(e){
    //get innerheight of window and scrollY position and if sum is more than offsetHeight of document body
    if(window.innerHeight +window.scrollY>= document.documentElement.offsetHeight){
        addElement(10, container.children.length)
    }
}

addElement(10, container.children.length)
window.addEventListener("scroll", handleScroll)