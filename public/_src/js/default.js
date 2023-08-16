function clear(node){
    for(let i = 0; i < node.childNodes.length; i++){
        var clr = node.childNodes[i];
        if (clr.nodeType==3&&!/\S/.test(clr.nodeValue)){
            clr.parentNode.removeChild(clr);
        }
    }
}

const zero_fill = (number, len) => "0".repeat(len - number.toString().length) + number.toString();
var crear = function(elemento){ return document.createElement(elemento);};
var make = function(elemento){ return document.createElement(elemento);};


var sin_espacios = (event) => {
    let key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if(/\s/.test(key)){
        event.preventDefault();
        return false;
    }
}

const smoothScroll = (element) => {
    document.querySelector(element).scrollIntoView({
        behavior:'smooth'
    });
}

function reviews(){
    Array.from(document.getElementsByClassName('reviews')).forEach(review => {
        review.addEventListener('click', elements => {
            if(elements.target.nodeName === "INPUT"){
                Array.from(review.getElementsByTagName('input')).forEach(input => {
                    input.setAttribute('min', 1);
                    input.setAttribute('max', elements.target.value);
                });
            }
        });
    });
}

function shareInSocialMedia(text, url){
    let twitter = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    let instagram;
    let facebook;
    let linkedin;

    document.getElementsByClassName('fa-twitter')[0].addEventListener('click', ()=>{
        let url = 
        window.open(url,'_blank');
    });
}

function accordion(){
    let component_result = new WebComponent("components/accordion.html").result;
    let DOMtemplate = new DOMParser().parseFromString(component_result,"text/html");
    let accordion_template = DOMtemplate.getElementById("accordion-template").content;

    for(let accordion of document.querySelectorAll(".accordion").values()){
        accordion_modified = document.importNode(accordion, false);
        accordion_copy = document.importNode(accordion, true);
        previous_element = accordion.previousElementSibling;
        accordion.parentElement.removeChild(accordion);
        accordion_content = new DOMFragment();

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

class DotEnv{
    constructor(path){
        const env = new Xhr({path:path}).result;
        let element = env.split(/\r?\n/);
        let arrayVar = new Array();
        element.forEach(row => {
            let str = row.split(/=/);
            if(str[0]){
                arrayVar[str[0].trim()] = str[1].trim();
            }
        });
        return arrayVar;
    }
}
function htmlEscape(s){
    return s
      .replace(/&/g,'&amp;')
      .replace(/</g,'&lt;')
      .replace(/>/g,'&gt;');
}

window.scrollY = () => {
    sticky();
}

function tableOfContents(_){
    let lastHeader = undefined;
    let lastListed = undefined;
    let selector = document.querySelector(_.selector);
    let headings = document.querySelectorAll(_.headings);

    for(let header of headings.values()){
        header.setAttribute("id",header.textContent);
        li = document.createElement("li");
        a = document.createElement("a");
        a.href = `#${header.textContent}`;
        a.appendChild(document.createTextNode(header.textContent));
        li.appendChild(a);

        if(!lastHeader || _.headings.indexOf(header.tagName) > _.headings.indexOf(lastHeader)) ul = document.createElement("ul");

        if(lastHeader){
            if(_.headings.indexOf(header.tagName) > _.headings.indexOf(lastHeader)) lastListed.appendChild(ul);
            if(_.headings.indexOf(header.tagName) < _.headings.indexOf(lastHeader)){
                for(let counter = _.headings.indexOf(header.tagName); counter <= _.headings.indexOf(lastHeader); counter++){
                    ul = ul.parentElement;
                }
            }
        }

        ul.appendChild(li);

        lastListed = li;
        lastHeader = header.tagName;
    }

    selector.appendChild(ul);

    pointer(ul);

    function pointer(table){
        table.onmouseover = (element) => {
            // console.log(element.target);
        };
    }
}