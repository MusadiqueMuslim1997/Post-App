

function setBackground(){

    var postBackground = document.getElementById("post-background");
    postBackground.style.backgroundImage = 'url(' + event.target.src + ')'
}
function changeBackgroundColor(){
    var postBackgroundColor = document.getElementById("post-background");
    console.log(event.target.value)
    postBackgroundColor.style.backgroundColor = event.target.value;
}

function changeColor(){
    var textArea = document.getElementById("text-area");
     textArea.style.color = event.target.value;
}