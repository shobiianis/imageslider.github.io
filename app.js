var images=document.getElementsByTagName("img")
var i=1;
function next(){
    if(i==0){
        images[images.length-1].className="noDisplay"
        images[i].className="yesDisplay";
        i++;
    }
    else{
images[i-1].className="noDisplay"
images[i].className="yesDisplay"
i++;
}
if(i==images.length){
    i=0;
}

}


