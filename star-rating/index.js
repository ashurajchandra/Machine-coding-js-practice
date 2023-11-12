const stars =document.querySelector(".star-wrapper");
const currentRating = document.querySelector(".current-rating-value");

let halfRating=false
let filled =0;
function handleRatings(e){
    halfRating=false;
if(filled){
    for(let i=0; i<filled; i++){
        stars.children[i].classList.remove("yellow")
    }
}
for(let i =0 ; i<e.target.id; i++){
    const star = stars.children[i]
    star.classList.add("yellow")
   
}
halfRating =true
filled = halfRating? Math.abs(e.target.id - 0.5) :e.target.id
currentRating.textContent =halfRating? Math.abs(e.target.id - 0.5) :e.target.id
}

function handleMouseEnter(e){
    for(let i=0; i<filled;i++){
        stars.children[i].classList.remove("yellow")
        stars.children[i].style.backgroundImage="none";
        stars.children[i].style.color = '';
    }
    for(let i=0; i<e.target.id;i++){
        console.log("star",stars.children[i].getBoundingClientRect())
        console.log("client-x", e.clientX )
        const {x,width} = stars.children[i].getBoundingClientRect()
         const halfRating = Math.abs(x - e.clientX)
         console.log("half-rating",halfRating)
         if(halfRating>width/2){
            stars.children[i].classList.add("yellow")
         }else{
            stars.children[i].style.backgroundImage = `linear-gradient(to right, lightsalmon 50%, transparent 50%)`;
            stars.children[i].style.webkitBackgroundClip = 'text';
            stars.children[i].style.color = 'transparent';
         }
      
       
    }
}

function handleMouseLeave(){
    for(let i=0; i<stars.children.length;i++){
        stars.children[i].classList.remove("yellow")
        stars.children[i].style.backgroundImage="none";
        stars.children[i].style.color = '';
    }
    for(let i=0; i<filled;i++){
        stars.children[i].classList.add("yellow")
    }
}


stars.addEventListener("click", handleRatings)
stars.addEventListener("mouseover",handleMouseEnter)
stars.addEventListener("mouseleave",handleMouseLeave)