// utility function
//it used to get element from string
/* 6.6*/function getelementfromstring(string){
let div=document.createElement('div');
div.innerHTML=string;
return div.firstElementChild
}


// hide thr parameter box initialy
/*3*/parametersBox=document.getElementById('parameterbox')
parametersBox.style.display="none"

// initilizenumber of parameters
/* 6.4*/ let addedparam=0;

// if the user click on params, hide the json box
/*4*/let paramsRadio=document.getElementById('paramsRadio')
paramsRadio.addEventListener('click',()=>{
    document.getElementById('requestJson').style.display='none'
    document.getElementById('parameterbox').style.display='block'

})

// if the user clicks on  json,hide the param box
/*5*/let jsonRadio=document.getElementById('JsonRadio')
jsonRadio.addEventListener('click',()=>{
    document.getElementById('parameterbox').style.display="none"
    document.getElementById('requestJson').style.display="block"
})

// adding or deleteing params
/*6*/let addPAram=document.getElementById('addparams');
addPAram.addEventListener('click',(e)=>{
    e.preventDefault()
    /*6.1*/let params=document.getElementById('params');//back to html for 6.2
    /*6.3*/let string=`  <div class="row my-2">
    <label for="url" class="col-sm-2"></label>
    <div class="col-md-4">
        <input type="text" class="form-control"  id="parameter${addedparam+2}"  placeholder="enter parameter key ${addedparam+2}">
    </div>
    <div class="col-md-4">
        <input type="text" class="form-control" id="parameterValue ${addedparam+2}" placeholder="enter parameter key ${addedparam+2}">
    </div>
    <button class="btn btn-primary deleteparams" >-</button>
</div>`
// convert the element string to DOM node
/* 6.5*/let paramElement=getelementfromstring(string);
/* 6.7*/params.appendChild(paramElement)

//add an event listener to delete parameter on clicking
/*7*/let deleteparams=document.getElementsByClassName('deleteparams')
for(item of deleteparams){
    item.addEventListener('click',(e)=>{
 e.target.parentElement.remove();
    })
}
addedparam++;
})

//if the user clicks on sumbmit button
let submit=document.getElementById('submit')
submit.addEventListener('click',()=>{
  console.log("submit")

  //document.getElementById('responseJsonText').value='please wait';

  //fatch all the values user has entered
  let url=document.getElementById('url').value


let requestType = document.querySelector("input[name='requestType']:checked").value;
let contentType=document.querySelector("input[name='contentType']:checked").value;

//log all the values in the console for dubugging



//if the user  used params option insted of json collect all the parameters in the object

if(contentType=='params'){
    data={};
    for(i=0;i<addedparam+1;i++){
        if(document.getElementById('parameterkey' +(i + 1)) !=undefined){
        let key=document.getElementById('parameterkey'+(i+1)).value;
        let value=document.getElementById('parameterValue'+(i+1)).value;
        data[key]=value
        }
        data=JSON.stringify(data)
    }
}
else{
  // data= document.getElementById('requestJsonText').value
  data= document.getElementById('request-prism').innerHTML
  
}
console.log(url)
console.log(requestType)
console.log(contentType)
console.log(data)

//if the request type is post .invoke fetch api to create a post request

if(requestType=="GET"){
    fetch(url,{
        method:'GET',

    })
    .then(Response=>Response.text())
    .then((text)=>{
        // document.getElementById('requestJsonText').value=text;
        document.getElementById('request-prism').innerHTML=text;
        
    })
}else{
    fetch(url,{

method:'POST',
body:data,
headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
    } )
    .then(Response=>Response.text())
    .then((text)=>{
        // document.getElementById('requestJsonText').value=text;
         document.getElementById('request-prism').innerHTML=text;
        

    })
}

})






































































































