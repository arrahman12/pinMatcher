function getCodePreCode() {
    return document.getElementById("generateCodeField").value;
}
function setCode(code) {
    document.getElementById("generateCodeField").value = code;

}

function getCounterValue() {

    return document.getElementById("counter").innerText;

}

function setCounterValue(n) {

     document.getElementById("counter").innerText = n;

}


function setCheckCodeText(code) {
    document.getElementById("checkCodeTextBox").value = code;
}
function getCode() {
    return document.getElementById("checkCodeTextBox").value;
}

function generateFourDigitNumber(){
    var num = Math.random() * 10000;
    return Math.floor(num);
}

document.getElementById("generatePinButton").addEventListener("click",function () {

    setCode(generateFourDigitNumber());
    document.getElementById("success").style.display = "none";
    document.getElementById("failed").style.display = "none";


});

var operators = document.getElementsByClassName("button");
for (var x = 0;x<operators.length;x++ ){
    operators[x].addEventListener("click",function () {

            if (this.id === "clear"){
                setCheckCodeText(" ");
            }else if(this.id === "backspace"){

                var output = getCode().toString();
                if (output){
                    output = output.substr(0,output.length-1);
                    setCheckCodeText(output);
                }


            }else {
                var digit = this.id;
                setCheckCodeText(getCode()+digit);
            }

    });
}

document.getElementById("submit").addEventListener("click",function () {

    var previousCode = getCodePreCode();
    var afterCode = getCode();
    var counter = getCounterValue();

    if (previousCode === afterCode && counter <= 3){
        setCheckCodeText("");
        setCode("");
        document.getElementById("success").style.display = "block";
        document.getElementById("tryLeft").style.display = "none";

    }else {

        if (counter == 1){
            document.getElementById("tryLeft").style.display = "none";
            document.getElementById("submit").disabled = true;
            document.getElementById("submit").style.backgroundColor = "grey";

        }else{
            setCheckCodeText("");
            document.getElementById("failed").style.display = "block";
            setCounterValue(getCounterValue() -1);


        }




    }

})

