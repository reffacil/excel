class AjaxRequest {
    constructor(url) {
      this.url = url;
    }
  
    async hacerPeticion() {
      try {
        const response = await this.realizarPeticion();
        const data = await response.json();
        this.procesarRespuesta(data);
      } catch (error) {
        console.error('Error en la petición:', error);
      }
    }
  
    realizarPeticion() {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', this.url, true);
  
        xhr.onload = function () {
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve(xhr);
          } else {
            reject(xhr.statusText);
          }
        };
  
        xhr.onerror = function () {
          reject(xhr.statusText);
        };
  
        xhr.send();
      });
    }
  
    procesarRespuesta(data) {
      console.log('Respuesta:', data);
      // Aquí puedes realizar acciones con la respuesta recibida.
    }
  }
  
  // Uso de la clase
  const url = 'https://jsonplaceholder.typicode.com/posts/1';  // Puedes cambiar la URL según tus necesidades.
  const ajaxRequest = new AjaxRequest(url);
  ajaxRequest.hacerPeticion();
  
class Xhr{
    constructor(data){
        this.xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
        this.xhr.onreadystatechange = (event) => {
            if(this.xhr.readyState === 4 && this.xhr.status === 200){
                console.log("El evento es este: ", event);
            }
        }
        this.xhr.open("GET", data.path);
        this.xhr.send();
    }

    get response(){
        return this.xhr.response;
    }
}

class WebComponent{
    constructor(component){
        this.component = new Xhr({path:component}).response
    }

    get result(){
        return this.component;
    }

    // window.customElements.define(custom_element, shadowDOM);
}

function accordion(){
    let component_result = new WebComponent("../../assets/components/accordion.html").result;
    let DOMtemplate = new DOMParser().parseFromString(component_result,"text/html");
    let accordion_template = DOMtemplate.getElementById("accordion-template").content;

    for(let accordion of document.querySelectorAll(".accordion").values()){
        accordion_modified = document.importNode(accordion, false);
        accordion_copy = document.importNode(accordion, true);
        previous_element = accordion.previousElementSibling;
        accordion.parentElement.removeChild(accordion);
        accordion_content = document.createDocumentFragment();

        for(let node of accordion_copy.querySelectorAll(".accordion > *").values()){
            if(node.nodeName === "H2"){
                accordion_item = document.importNode(accordion_template, true);
                accordion_item.querySelector(".accordion-button").appendChild(document.createTextNode(node.textContent));
                do{
                    accordion_item.querySelector(".accordion-content").appendChild(node.nextElementSibling);
                }while(node.nextElementSibling && node.nextElementSibling.nodeName !== "H2");
                accordion_content.appendChild(accordion_item);
            }
        }
        accordion_modified.appendChild(accordion_content);
        previous_element.after(accordion_modified);
        clear(previous_element.nextElementSibling);

        accordion_modified.querySelectorAll(".accordion-header").forEach(function(element){
            element.addEventListener("click", function(event){
                element.firstElementChild.classList.toggle("selected");
                element.nextElementSibling.classList.toggle("collapse");
        })});
    }
}

document.addEventListener('DOMContentLoaded', (e)=>{
    // console.log("me cargue despues del el dom");
    console.log("Javascript funcionando");
    HighlightJSTabsNavigation();
});

window.addEventListener("load", function(event){
    // console.log("me cargue antes que el dom");
    // indice();
    // accordion();
});

function clear(nodo){
    for(let i = 0; i < nodo.childNodes.length; i++){
        var clr = nodo.childNodes[i];
        if (clr.nodeType==3&&!/\S/.test(clr.nodeValue)){
            clr.parentNode.removeChild(clr);
        }
    }
}

// var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
const zero_fill = (number, len) => "0".repeat(len - number.toString().length) + number.toString();
var crear = function(elemento){ return document.createElement(elemento);};
var make = function(elemento){ return document.createElement(elemento);};

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

function elementos_en_linea(){
    let fragmento = document.createDocumentFragment();
    let contenedor = document.getElementById("elementos_en_linea");
    let consulta = new Xhr({path:"../../assets/json/tags.json"}).response
    let elementos = JSON.parse(consulta);

    Object.entries(elementos).map(elemento => {
        const [clave, objeto] = elemento;
        if(objeto.flow === "inline"){
            a = document.createElement("a");
            a.setAttribute("href", "#");
            a.appendChild(document.createTextNode(`${clave} `));
            fragmento.appendChild(a);
        }
    });
    contenedor.appendChild(fragmento);
}

function elementos_en_bloque(){
    let fragmento = document.createDocumentFragment()
    let contenedor = document.getElementById("elementos_en_bloque");
    let consulta = new Xhr({path:"../../assets/json/tags.json"}).response
    let elementos = JSON.parse(consulta);

    Object.entries(elementos).map(elemento => {
        const [clave, objeto] = elemento;
        if(objeto.flow === "block"){
            a = document.createElement("a");
            a.setAttribute("href", "#");
            a.appendChild(document.createTextNode(`${clave} `));
            fragmento.appendChild(a);
        }
    });
    contenedor.appendChild(fragmento);
}

function entidades(){
    // let conn = new Xhr({path:"json/entities.json"}).result;
    let conn = new XMLHttpRequest(); 
    conn.onreadystatechange = function(){
        if(conn.readyState === 4 && conn.status === 200){

            let fragmento = document.createDocumentFragment();
            let elemento = document.getElementById("entidades");
            let obj = JSON.parse(conn.responseText);

            table = crear("table");
            table.className = "mod-table";
            tr = crear("tr");
            
            for(let entidad in obj){
                if(JSON.stringify(entidad).endsWith(";\"")){
                    for(let key in obj[entidad]){
                        if(key === "codepoints"){
                            p3 = crear("p");
                            p3.appendChild(document.createTextNode(obj[entidad][key]));
                        }
                        if(key === "characters"){
                            td = crear("td");
                            p1 = crear("p");
                            p2 = crear("p");
                            p1.appendChild(document.createTextNode(obj[entidad][key]));
                            p2.appendChild(document.createTextNode(entidad));
                            td.appendChild(p1);
                            td.appendChild(p2);
                            td.appendChild(p3);
                        }
                    }
                    tr.appendChild(td);
                }
            }
            
            table.appendChild(tr);
            fragmento.appendChild(table);
            elemento.appendChild(fragmento);
        }
    };
    conn.open("GET","json/entities.json",false);
    conn.send();
}

function indice(){
    let elemento = document.getElementById("indice");
    let fragmento = document.createDocumentFragment();
    let header = document.querySelectorAll("h1,h2,h3,h4,h5,h6");
    for(let nodo of header.values()){
        nodo.setAttribute("id",nodo.textContent);
        let a = crear("a");
        a.href = `#${nodo.textContent}`;
        if(nodo.nodeName == "H1"){a.classList.add("t1")}
        if(nodo.nodeName == "H2"){a.classList.add("t2")}
        if(nodo.nodeName == "H3"){a.classList.add("t3")}
        a.appendChild(document.createTextNode(nodo.textContent))
        fragmento.appendChild(a);
    }
    elemento.appendChild(fragmento);
}