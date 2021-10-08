let display1=document.querySelector('.display-1');
let display2=document.querySelector('.display-2');
let result=document.querySelector('.result');
let number=document.querySelectorAll('.number');
let operation=document.querySelectorAll('.operation');
let equal=document.querySelector('.equal');
let clean=document.querySelector('.all_clear');
let cleanlast=document.querySelector('.last_clear');

let disNum1='';
let disNum2='';
let res=null;
let lastoperation='';
let haveDot=false;

 number.forEach(number=>{
     number.addEventListener('click',(e)=>{
         if(e.target.innerText==='.' && !haveDot){
             haveDot=true;
         }else if(e.target.innerText==='.' && haveDot){
             return;
         }
         disNum2 += e.target.innerText;
         display2.innerText=disNum2;
     })
 })

operation.forEach(operation=>{
    operation.addEventListener('click',(e)=>{
        if(!disNum2) res;
        haveDot=false;
        const operationName=e.target.innerText;
        if(disNum1 && disNum2 && lastoperation ){
            mathOperation();
        }else{
            res=parseFloat(disNum2);
        }
        clearVar(operationName);
        lastoperation=operationName;
        console.log(res)
    })
})

function clearVar(name=''){
   
    disNum1 +=disNum2+' '+ name+ ' ';
    display1.innerText=disNum1;
    display2.innerText= '';
    disNum2= ' ';
    result.innerText=res;
}

function mathOperation(){
    if(lastoperation==='*'){
        res=parseFloat(res) *parseFloat(disNum2)       
    }else if(lastoperation==='/'){
        res=parseFloat(res)/ parseFloat(disNum2)       
    }else if(lastoperation==='+'){
        res=parseFloat(res) + parseFloat(disNum2)       
    }else if(lastoperation==='-'){
        res=parseFloat(res) -parseFloat(disNum2)       
    }else if(lastoperation==='%'){
        res=parseFloat(res) % parseFloat(disNum2)       
    }
}

equal.addEventListener('click',(e)=>{
    if(!disNum1 || !disNum2 ) return;
    haveDot=false;
    mathOperation();
    clearVar();
    display2.innerHTML=res;
    res.innerText=' ';
    disNum2=res;
    disNum1=' ';
})

clean.addEventListener('click',(e)=>{
    display2.innerHTML='0';
    display1.innerHTML='0';
    disNum1=' ';
    disNum2=' ';
    res=' ';
    result.innerHTML='0';
})

cleanlast.addEventListener('click',(e)=>{
    display2.innerHTML='';
    disNum2=' ';
})
window.addEventListener('keydown',(e)=>{
    if(
        e.key=='0' ||
        e.key=='1' ||
        e.key=='2' ||
        e.key=='3' ||
        e.key=='4' ||
        e.key=='5' ||
        e.key=='6' ||
        e.key=='7' ||
        e.key=='8' ||
        e.key=='9' ||
        e.key=='0' ||
        e.key=='.'  
    ){
        clickButton(e.key);
    }
    else if(
        e.key==='*'||
        e.key==='/'||
        e.key==='%'||
        e.key==='-'||
        e.key==='+'
    ){
        clickOperation(e.key);
    }else if(e.key==='Enter' || e.key==='='){
        clickeqal();
    }
})

function clickButton(key){
    number.forEach(button=>{
        if(button.innerText===key){
            button.click();
        }
    })
}
function clickOperation(key){
    operation.forEach(button=>{
        if(button.innerText===key){
            button.click();
        }
    })
}
function clickeqal(){
    equal.click();
}