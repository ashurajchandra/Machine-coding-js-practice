const tabs = document.querySelector(".tabs")
const tabContents = document.querySelector(".tab-content")

function handleTabClick(e){
    const clickedTabId =e.target.dataset.tabTarget
    for(let i=0; i<tabs.children.length; i++){
        const tabId =tabs.children[i].dataset.tabTarget
        if(clickedTabId == tabId ){
            tabs.children[i].classList.add("activeTab")
          renderTabContent(clickedTabId)
        }else{
            tabs.children[i].classList.remove("activeTab")
        }
    }
}

function renderTabContent(id){
 for(let i=0; i<tabContents.children.length; i++){
    const tabContent =tabContents.children[i]
    if(id ==tabContent.id){
        tabContent.classList.add("active")
    }else{
        tabContent.classList.remove("active")
    }
 }
}

tabs.addEventListener("click",handleTabClick)