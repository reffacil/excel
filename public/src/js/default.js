function clear(node){
    for(let i = 0; i < node.childNodes.length; i++){
        var clr = node.childNodes[i];
        if (clr.nodeType==3&&!/\S/.test(clr.nodeValue)){
            clr.parentNode.removeChild(clr);
        }
    }
}