const tabs = document.querySelector(".tab-heading");
const tabContent = document.querySelector(".tab-content");

function handleTabClick(e){
     for(let i=0; i<e.target.id; i++){
        if(i+1 == e.target.id){
            const currentTab = tabs.children[i].id;
            renderCurrentTabContent(e.target.id)
        }

     }
   
}

function renderCurrentTabContent(id){
    for(let i=0; i<tabContent.children.length; i++){
        const content =tabContent.children[i];
       
        if(content.id ==id){
            content.classList.add("show")
            content.classList.remove("hide")
        }else{
            content.classList.add("hide")
        }
    } 
}


tabs.addEventListener("click",handleTabClick)