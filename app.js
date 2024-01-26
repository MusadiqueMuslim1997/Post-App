

function setBackground() {

    var postBackground = document.getElementById("post-background");
    postBackground.style.backgroundImage = 'url(' + event.target.src + ')'
}
function changeBackgroundColor() {
    var postBackgroundColor = document.getElementById("post-background");
    console.log(event.target.value)
    postBackgroundColor.style.backgroundColor = event.target.value;
}

function changeColor() {
    var textArea = document.getElementById("text-area");
    textArea.style.color = event.target.value;
}
function changeStyle(){
   
    var textArea = document.getElementById("text-area");
    var type  = event.target.innerHTML;
    if(type === "B"){
        if( textArea.style.fontWeight === "bold") {
            textArea.style.fontWeight = "normal"
            event.target.style.fontWeight = "normal"
        }
        else{
   
        textArea.style.fontWeight = "bold";
        event.target.style.fontWeight = "bolder"
        }
    }

    if(type === "I"){
        if( textArea.style.fontStyle === "italic") {
            textArea.style.fontStyle = "normal"
            event.target.style.fontWeight = "normal"
            
        }
        else{
   
        textArea.style.fontStyle = "italic";
        event.target.style.fontWeight = "bolder"
        event.target.style.fontStyle = "italic"
        
        }
    }

    if(type === "U"){
        if( textArea.style.textDecoration === "underline") {
            textArea.style.textDecoration = "none"
            event.target.style.fontWeight = "normal"
            
        }
        else{
   
        textArea.style.textDecoration = "underline";
        event.target.style.fontWeight = "bolder"
        event.target.style.textDecoration = "underline"
        
        }
    }
}
function changeFontSize(){
    var textArea = document.getElementById("text-area");
    textArea.style.fontSize = event.target.value + "px";
}

function createPsot(){
    var items = document.getElementById("items");
    var item = document.getElementById("item");
    items.style.display = "none";
    item.style.display = "none";
}