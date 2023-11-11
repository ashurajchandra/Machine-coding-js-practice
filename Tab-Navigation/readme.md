# Tabs Component Documentation

## Overview
This document provides detailed documentation for the Tabs component implemented in HTML, CSS, and JavaScript. The Tabs component allows users to switch between different content sections by clicking on corresponding tabs.

### live-url: https://654f6cfc51f89625578cf8e8--legendary-sopapillas-0916b1.netlify.app/

## Table of Contents
1. [HTML Structure](#html-structure)
2. [JavaScript Functions](#javascript-functions)
   - [handleTabClick](#handletabclick)
   - [renderTabContent](#rendertabcontent)
3. [CSS Styles](#css-styles)

## HTML Structure <a name="html-structure"></a>
The HTML file (`index.html`) defines the structure of the Tabs component. It consists of two main sections:
- **Tabs:** Contains clickable tabs (Tab 1, Tab 2, Tab 3).
- **Tab Content:** Contains the content for each tab (Tab-1, Tab-2, Tab-3).

## JavaScript Functions <a name="javascript-functions"></a>

### handleTabClick <a name="handletabclick"></a>
```javascript
function handleTabClick(e) {
    // Get the clicked tab's data-tab-target attribute
    const clickedTabId = e.target.dataset.tabTarget;

    // Iterate through all tabs
    for (let i = 0; i < tabs.children.length; i++) {
        const tabId = tabs.children[i].dataset.tabTarget;

        // If the clicked tab matches the current iteration tab
        if (clickedTabId == tabId) {
            // Add the 'activeTab' class to the clicked tab
            tabs.children[i].classList.add("activeTab");

            // Render the content of the clicked tab
            renderTabContent(clickedTabId);
        } else {
            // Remove the 'activeTab' class from other tabs
            tabs.children[i].classList.remove("activeTab");
        }
    }
}
```

This function handles the click event on tabs. It retrieves the data-tab-target attribute of the clicked tab and iterates through all tabs. If the clicked tab matches the current iteration tab, it adds the 'activeTab' class to the clicked tab, removes the 'activeTab' class from other tabs, and renders the content of the clicked tab using the renderTabContent function.

### renderTabContent <a name="rendertabcontent"></a>
```javascript
function renderTabContent(id) {
    // Iterate through all tab content elements
    for (let i = 0; i < tabContents.children.length; i++) {
        const tabContent = tabContents.children[i];

        // If the id matches the current iteration tab content id
        if (id == tabContent.id) {
            // Add the 'active' class to show the content
            tabContent.classList.add("active");
        } else {
            // Remove the 'active' class to hide other content
            tabContent.classList.remove("active");
        }
    }
}
```
This function is responsible for rendering the content of the clicked tab. It iterates through all tab content elements and shows the content of the clicked tab by adding the 'active' class. It hides the content of other tabs by removing the 'active' class.

### <a name="css-styles"></a>
 ### The CSS file (style.css) provides styling for the Tabs component. It includes styles for the tabs, tab content, and the active tab.

1. **[data-tab-content]**: Hides all tab content elements by default.
2. **active[data-tab-content]**: Displays the content of the active tab.
3. tabs: Styles the container for tabs with a border at the bottom.
4. **tabs p**: Styles individual tabs with a cursor pointer and a hover effect.
5. **activeTab**: Styles the active tab with a background color.

This documentation provides an understanding of how the Tabs component works, the structure of the HTML file, the flow of JavaScript functions, and the associated CSS styles. Users can refer to this documentation for a clear overview of the implementation and customization options.