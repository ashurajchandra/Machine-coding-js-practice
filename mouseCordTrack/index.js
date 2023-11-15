const container = document.querySelector(".container")
const buttons = document.querySelectorAll("button")
const mouseClickCords = []
let popedItem = []


function handleMouseEvents(e){
    const cords = {x:e.x, y:e.y}
    mouseClickCords.push(cords)
    renderPos()
}

function createElement(item,index){
    const element = document.createElement("div")
    element.innerText = index;
    element.className = "mouse-item"
    element.style.position="absolute"
    element.style.top = `${item.y-10}px`;
    element.style.left = `${item.x-10}px`;
    return element;
}

function renderPos(){
  mouseClickCords.forEach((item,index)=>{
    container.appendChild(createElement(item,index+1))
  })
}

function renderPosNew(arr=[]){
    arr.forEach((item,index)=>{
      container.appendChild(createElement(item,index+1))
    })
  }

function handleButtonClick(event,button){
    if(button.id==="1"){
        if(mouseClickCords.length==0){
            return
        }
    const item= mouseClickCords.pop()
    popedItem.push(item)
 container.replaceChildren()
 renderPos()
    }else{
        if(popedItem.length==0){
            return
        }
        mouseClickCords.push(popedItem.pop())
        container.replaceChildren()
        renderPos()

    }


}

buttons.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        handleButtonClick(e,button)
    })
})

function handleMouseMove(e){
    console.log("e",e)
}
container.addEventListener("mousedown", handleMouseEvents)
container.addEventListener("mouseenter", handleMouseMove)