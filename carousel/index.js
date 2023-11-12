const imageContainer =document.querySelector(".carousel-container")
const dots = document.querySelector(".dots");
const nextButton = document.querySelector(".next");
const prevButton =document.querySelector(".prev");

const images = [...imageContainer.children[0].children];
const dotLists = [...dots.children]
let timerId
let mouseFlag;




let lastClickedSecond;
function handleNextButtonClick(e, hoverActive =false){
  if(hoverActive){
    if(!mouseFlag) {
        return;
      }
  
      if(!lastClickedSecond) {
          lastClickedSecond = Date.now();
      }
      else {
          let diff = Date.now() - lastClickedSecond 
          if( diff < 500) {
              return;
          }
      }
  }
    const activeImage = document.querySelector(".active");
    activeImage.classList.remove("active")
    const activeImageIndex = images.indexOf(activeImage)
    const nextActiveImageIndex = activeImageIndex + 1;
    if(nextActiveImageIndex>=images.length){
        nextButton.classList.add("disable")
        images[0].classList.add("active")
        activeDot(activeImageIndex, 0)
    }else{
        nextButton.classList.remove("disable")
        images[nextActiveImageIndex].classList.add("active")
        activeDot(activeImageIndex, nextActiveImageIndex)
    }   

    lastClickedSecond = Date.now();
}
function handlePrevButtonClick(e){
  const activeImage = document.querySelector(".active");
  const activeIndex= images.indexOf(activeImage);
  activeImage.classList.remove("active");
  const nextActiveIndex = activeIndex - 1;
  if(nextActiveIndex<0){
    images[images.length-1].classList.add("active")
    activeDot(activeIndex, images.length-1)
  }else{
    images[nextActiveIndex].classList.add("active")
    activeDot(activeIndex, nextActiveIndex)
  }
}

function activeDot(activeIndex,nextActiveIndex){
    const dotItems = document.querySelectorAll("[data-dot-target]")
    for(let i=0; i<dotItems.length; i++){
        if(dotItems[i].classList.contains("active-dot")){
            dotItems[i].classList.remove("active-dot")
        }
    }

    dotItems[nextActiveIndex].classList.add("active-dot")

}

function handleMouseOver(e){
    mouseFlag=true
   e.stopPropagation()
  
   if((e.target.classList.contains("images")|| e.target.classList.contains("child-image"))){
   timerId= setInterval(()=>{

        handleNextButtonClick(e, true)
    
       },500)
    }
   
   else{
    clearInterval(timerId)
   }


}
// let start, prevTimeStamp
// window.requestAnimationFrame(step)
// function step(timestamp){
// if(start == undefined){
//     start = timestamp
// }
// const elapsed = timestamp -start;
// if(prevTimeStamp !== timestamp){
//    handleMouseOver()
//    mouseFlag=true
// }
// if(elapsed){
//     previousTimeStamp = timestamp;
//     if (!mouseFlag) {
//       window.requestAnimationFrame(step);
//     }
// }
// }

function handleMouseLeave(e){

    mouseFlag =false
  clearInterval(timerId)
}
function createDots(){
    const elements =[]
    for(let i=0;i<=imageContainer.children.length;i++){
         const element = document.createElement("div");
               element.id = `dot-${i+1}`
               element.setAttribute("data-dot-target",i+1)
               if(i==0){
                element.classList.add("active-dot")
               }
         elements.push(element)
    }
    return elements
}

function renderDots(){
    const elements = createDots();
    elements.forEach(item=> dots.appendChild(item))
}

renderDots()





nextButton.addEventListener("click",handleNextButtonClick);
prevButton.addEventListener("click",handlePrevButtonClick);
document.querySelector(".images").addEventListener("mouseover",handleMouseOver)
document.querySelector(".images").addEventListener("mouseleave",handleMouseLeave)