

let countEl=document.getElementById('counter-num');

console.log(countEl);

let count =0;
function increment(){
count =count +1;
 
countEl.innerHTML=count;



}

let li= document.getElementById("saveBtn_li");
let access= document.getElementById('access');
function save(){

let saveCount=document.createElement('li');
saveCount.textContent=count+"";

li.appendChild(saveCount);

 access.innerHTML=count;





}




function reset(){

count =0;
access.innerHTML =count;
}

function undoData(){



 if (li.children.length > 0) {
  // Get the last <li> element and remove it
  li.lastElementChild.remove();
 }else{
  console.log('error')
 }
}

reset();

// let libtn= document.getElementById("saveBtn_li");


increment();
save();