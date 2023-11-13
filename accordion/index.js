const accordionExpandTarget= document.querySelectorAll("[data-expand-target]");
const accordionCollapseTarget = document.querySelectorAll("[data-collapse-target]")
const accordionContent = document.querySelectorAll("[data-accordion-content]")

function handleExpandAccordion(expand){
    expand.classList.toggle("transform")
    const accordionContent= document.querySelectorAll("[data-accordion-content]")
    const currentAccordionContent = accordionContent[expand.dataset.expandTarget-1]
    currentAccordionContent.classList.toggle("active")
}


accordionExpandTarget.forEach((expand)=>{
    expand.addEventListener("click", function(){
        handleExpandAccordion(expand)
    })
})
