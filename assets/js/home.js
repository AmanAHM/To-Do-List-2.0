var pen= document.getElementById("pen-edit");
var display=document.getElementById("display");
var edit=document.getElementById("edit-func");

let tick= document.querySelectorAll(".hola");

console.log(tick);
tick.forEach((t)=>{


    t.onclick=function(){

        if(t.classList.contains("fa-circle"))
        {
         t.classList.replace("fa-circle","fa-circle-check");
        }
        else{
         
         t.classList.replace("fa-circle-check","fa-circle");
        }
     }
})







const date_format={
    enableTime:true,
    dateFormat:"F j, Y (h:S K)",


    // altInput: true,
    // altFormat: "F j, Y (h:S K)"
    // dateFormat: "Y-m-d",
}


flatpickr("input[type=datetime-local]", date_format);





