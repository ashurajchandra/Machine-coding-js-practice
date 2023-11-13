const popoverOpenButton =document.querySelector(".my-button");
const popoverArea = document.querySelector(".popover-content")
const backdrop = document.querySelector("[data-backdrop]")
const closeButton = document.querySelector(".close-button")

function handlePopOver(){
    popoverArea.classList.toggle("active")
    backdrop.classList.toggle("active")
}

function handleClosePopup(){
    handlePopOver()
}


backdrop.addEventListener("click", handleClosePopup)
popoverOpenButton.addEventListener("click", handlePopOver)
closeButton.addEventListener("click",handleClosePopup)