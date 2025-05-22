function appendToDisplay(value){
let data = document.getElementById("display");
data.value = data.value + value;
console.log(value);
}



function clearDisplay(){
    let display = document.getElementById("display");
    display.value = "";
    

}

function deleteLast(){
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
    

}



function calculateResult(){

    try{
        let result = eval(document.getElementById ("display").value);
        console.log(result);

        document.getElementById("display").value = 
        result;
    }
    catch (error) {
        console.log(error);
    }
}