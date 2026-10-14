const textarea= document.getElementById("textarea");
let button=document.querySelectorAll("button");

button[0].onclick=function(){
    document.execCommand("bold")
}
button[1].onclick=function(){
    document.execCommand("italic")
}
button[2].onclick=function(){
    document.execCommand("underline")
}
button[3].onclick=function(){
    textarea.innerHTML="";

}

button[4].onclick=function(){
    let text=textarea.innerText;
     let file=new Blob([text]);
     let link=document.createElement("a");
     link.href=URL.createObjectURL(file);
     link.download="maria.txt";
     link.click();

}


