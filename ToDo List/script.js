let input=document.querySelector(".task_input");
let ul=document.querySelector(".task_list");
let lists=document.querySelectorAll(".task_list li");


function taskDeleter(e){
    e.currentTarget.remove();
}
for(let i =0; i <lists.length;i++){
    lists[i].addEventListener("dblclick",taskDeleter);
}

input.addEventListener("keypress",function(e){
    // console.log(e);
    if(e.key=="Enter"){

        let task =input.value;
        console.log(e.target.value);
        console.log(task);

        if(task=="")
        {alert("Error empty task cannot be added");
        return;
        }

        input.value="";
        let li=document.createElement('li');

        li.innerText=task;
      
       li.addEventListener("dblclick",taskDeleter);

    
       ul.insertBefore(li,ul.firstChild);
      


    }


});

// input.addEventListener("click",function(e){
//     console.log(e);
//     if(e.key=="Enter"){

//     }


// });