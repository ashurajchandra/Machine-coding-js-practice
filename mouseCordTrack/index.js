const container = document.querySelector(".container")
const buttons = document.querySelectorAll("button")
const mouseClickCords = []
let popedItem = []


function handleMouseEvents(e){
    console.log("e",e)
    const cords = {x:e.x, y:e.y}
    mouseClickCords.push(cords)

    console.log("mouseClickCords",mouseClickCords)
    renderPos()
}

function createElement(item,index){
    console.log("item",item)
    const element = document.createElement("div")
    element.innerText = index;
    element.className = "mouse-item"
    element.style.position="absolute"
    element.style.top = `${item.y-10}px`;
    element.style.left = `${item.x-10}px`;
    console.log("element",element)
    console.log("top",element.style.top+"px")
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
 console.log("item",item)
 container.replaceChildren()
 console.log("container.children",container.children,container.children.length)
 renderPos()
    }else{
        // const newCords = [...mouseClickCords,...popedItem]
        if(popedItem.length==0){
            return
        }
        mouseClickCords.push(popedItem.pop())
        container.replaceChildren()
        // renderPosNew(newCords)
        renderPos()

    }


}

buttons.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        handleButtonClick(e,button)
    })
})
container.addEventListener("mousedown", handleMouseEvents)