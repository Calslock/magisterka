Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}

function darkmode(){
    const head = document.head;
    if (document.getElementById("dark-mode-css") == null) {
        const darkModeString = '<link id="dark-mode-css" rel="stylesheet" href="../css/dark.css">';
        head.innerHTML += darkModeString;
    } else {
        document.getElementById("dark-mode-css").remove();
    }
}

function changefont(){
    const head = document.head;
    if (document.getElementById("alternate-font-css") == null) {
        const alternateModeString = '<link id="alternate-font-css" rel="stylesheet" href="../css/alternate-font.css">';
        head.innerHTML += alternateModeString;
    } else {
        document.getElementById("alternate-font-css").remove();
    }
}

function highcontrast(){
    const head = document.head;
    if (document.getElementById("high-contrast-css") == null) {
        const alternateModeString = '<link id="high-contrast-css" rel="stylesheet" href="../css/high-contrast.css">';
        head.innerHTML += alternateModeString;
    } else {
        document.getElementById("high-contrast-css").remove();
    }
}

function changefontsize(id, factor){
    txt = document.getElementById(id);
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize + factor) + 'px';
}

var elements = [
    "header-login",
    "header-date",
    "header-news-bar"
]

function changesize(factor){
    elements.forEach(element => changefontsize(element, factor));
}