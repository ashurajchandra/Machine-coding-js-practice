const stars =document.querySelector(".star-wrapper");
const currentRating = document.querySelector(".current-rating-value");


let filled =0;
function handleRatings(e){
if(filled){
    for(let i=0; i<filled; i++){
        stars.children[i].classList.remove("yellow")
    }
}
for(let i =0 ; i<e.target.id; i++){
    const star = stars.children[i]
    star.classList.add("yellow")
}
filled = e.target.id
currentRating.textContent = e.target.id
}

function handleMouseEnter(e){
    for(let i=0; i<filled;i++){
        stars.children[i].classList.remove("yellow")
    }
    for(let i=0; i<e.target.id;i++){
       stars.children[i].classList.add("yellow")
       
    }
}

function handleMouseLeave(){
    for(let i=0; i<stars.children.length;i++){
        stars.children[i].classList.remove("yellow")
    }
    for(let i=0; i<filled;i++){
        stars.children[i].classList.add("yellow")
    }
}


stars.addEventListener("click", handleRatings)
stars.addEventListener("mouseover",handleMouseEnter)
stars.addEventListener("mouseleave",handleMouseLeave)