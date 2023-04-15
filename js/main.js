let result = 0;
let calcInput = document.getElementById("calcInput");
let acbtn = document.getElementById("acbtn");
let data = [];
let btnswitch = false;

function enterValue(calcBtnValue){
    if(calcBtnValue == "+" || calcBtnValue == "-" || calcBtnValue == "*" || calcBtnValue == "/"){
        let index = data[data.length - 1];

        if(index == "+" || index == "-" || index == "*" || index == "/"){
            // do nothing
        }else{
            data.push(calcInput.value);
            data.push(calcBtnValue);
        }
        btnswitch = true;
    }else{
        if(btnswitch == true){
            calcInput.value = "";
        }
        
        if(calcInput.value == 0){
            calcInput.value = calcBtnValue;
        }else{
            calcInput.value += calcBtnValue;
        }
        btnswitch = false;
    }
    monitorIo();
}

function resetValue(){
    data = [];
    calcInput.value = calcInput.defaultValue;
}

function negateValue(){
    let negatedValue = parseFloat(calcInput.value) * -1;
    calcInput.value = negatedValue;
}

function calculateValue(){
    let value = "";

    data.forEach(val=>{
        value += val;
    });
    value += calcInput.value;
    result = eval(value);
    
    calcInput.value = result;

    data = [];
    changeToAC()
}

function setPercentage(){
    calcInput.value = calcInput.value / 100;
}

function monitorIo(){
    if(calcInput.value != 0){
        acbtn.innerText = "C";
        acbtn.onclick = ()=>{
            let nev = calcInput.value.toString();
            if(calcInput.value.length > 1){
                calcInput.value = nev.substring(0, (nev.length -1))
            }else{
                calcInput.value = 0;
            }
        }
    }else{
        changeToAC()
    }
}

function changeToAC(){
    acbtn.innerText = "AC";
    acbtn.onclick = resetValue;
}