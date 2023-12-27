document.addEventListener('DOMContentLoaded', function(){
    HighlightJSTabsNavigation();
});

function HighlightJSTabsNavigation(){
    document.querySelectorAll("code").forEach(codeTag => {
        const indentation = new RegExp(codeTag.innerHTML.match(/^(\s{4})+/g),"gm");
        codeTag.innerHTML = codeTag.innerHTML
        .replace(/<(\w+|\/)/g,"&lt;$1") // Can add too: .replace(/'/g,"&#039;")
        .replace(/(\S)>/g,"$1&gt;") // Can add too: .replace(/"/g,"&quot;")
        .replace(indentation,"\n")
    });

    document.querySelectorAll(".container-navigation-by-tabs").forEach((containerNavigationByTabs, currentContainerNavigationByTabs) => {
        let tabs = containerNavigationByTabs.querySelectorAll(".tabs-title a");
        let tabsContent = containerNavigationByTabs.querySelectorAll(".tabs-pannel div");

        relateTabsToItsContent(tabs, tabsContent, currentContainerNavigationByTabs);
        async function relateTabsToItsContent(tabs, tabsContent, currentContainerNavigationByTabs){
            await tabs.forEach((tab, currentTab)=>{
                let copyButton = document.createElement("button");
                let id = tab.hash.slice(1) || `${tab.textContent.replace(/\s/g,'-')}-${currentTab}-${currentContainerNavigationByTabs}`;
                tabsContent[currentTab].setAttribute("id",`${id}`);
                tabsContent[currentTab].appendChild(copyButton);
                tab.setAttribute("href",`#${id}`);
                tab.addEventListener('click', clickedTab => {
                    clickedTab.preventDefault();
                    if(!clickedTab.target.closest("a")) return; // Can be clickedTab.target.tagName !== "A"
                    tabs.forEach((tab, currentTab)=>{
                        tab.classList.toggle("active",tab.hash === clickedTab.target.hash);
                        tabsContent[currentTab].classList.toggle("active",tabsContent[currentTab].id === clickedTab.target.hash.slice(1));
                    });
                });
                location.hash === tab.hash ? (tab.click(), tab.scrollIntoView({behavior:"smooth"})) : tabs[0].click();
                // copyButton.addEventListener("click", navigator.clipboard.writeText(tabsContent[currentTab].querySelector("code").textContent));
            });
        }
    });
}

// document.activeElement;
// console.log(tabs.dataset.default-color);