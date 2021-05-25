//document.getElementById('smallCards').innerHTML='<div  class="col-sm-3><div class="card card1"> <img class="icon" src="./image/Group 2.png" alt=""><div class="card-body"> <p class="failure-to-thrive">Failure to thrive – not gaining weight and height as per the age n  </p></div></div></div>'
function appendHtml(el, str) {
    var div = document.createElement('div');
    div.innerHTML = str;
    while (div.children.length > 0) {
        el.appendChild(div.children[0]);
    }
}

let data=[{image:'./image/Group 2.png',text:'sFailure to thrive – not gaining weight and height as per the age norms'},
          {image:'./image/Group 2.png',text:'Infections warranting multiple hospitalizations'},
          {image:'./image/Group.png',text:'Requirement of intravenous antibiotics to clear infections'},
          {image:'./image/Group3.png',text:'2 or more episodes of pneumonia'}]


for(let i=0;i<data.length;i++){
appendHtml(document.getElementById('smallCards'),
`<div  class="col-sm-3">
   <div class="card card1">
  <img class="icon" src='${data[i].image}' alt="card-photo">
  <div class="card-body">
    <p class="failure-to-thrive">${data[i].text}
    </p>
  </div>
</div>
</div>`)
}

function toggle(ID){

    let el=document.getElementById(`${ID}`)
    if(el.style.display=='none'){
        el.style.display='block'
    }
    else{
        el.style.display='none'
    }
}