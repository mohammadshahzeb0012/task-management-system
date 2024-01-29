const containers = document.getElementsByClassName("container");
let draggingElement = null;

const onDragOver = (event)=>{
    if(draggingElement.parentNode.id === event.currentTarget.id)
     {
        return;
     }
    event.preventDefault();
}
const onDrop = (event)=>{
    console.log(event.target)
    console.log(event.currentTarget)
    event.currentTarget.appendChild(draggingElement)
}


for(let i=0; i<containers.length;i++)
 {
    containers[i].addEventListener("dragover",onDragOver);
    containers[i].addEventListener("drop",onDrop);
 }

function onDragStart(event){
   draggingElement = event.currentTarget;
//    console.log("e target", event.target)
}

draggingElement = null;