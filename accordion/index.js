const accordionExpandTarget= document.querySelectorAll("[data-expand-target]");
const accordionCollapseTarget = document.querySelectorAll("[data-collapse-target]")
const accordionContent = document.querySelectorAll("[data-accordion-content]")

function handleExpandAccordion(expand){
    expand.classList.toggle("transform")
    let accordionContent= document.querySelectorAll("[data-accordion-content]")
    accordionContent=[...accordionContent]
    const currentAccordionContent = accordionContent[expand.dataset.expandTarget-1]
  const filteredAccordion=  accordionContent.filter(item=> item.dataset.accordionContent !== currentAccordionContent.dataset.accordionContent )
    currentAccordionContent.classList.toggle("active")
    filteredAccordion.forEach((item)=>{
        item.classList.remove("active")
    })
}


accordionExpandTarget.forEach((expand)=>{
    expand.addEventListener("click", function(){
        handleExpandAccordion(expand)
    })
})
