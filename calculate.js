//Add all event listeners
let radios = document.getElementsByClassName("radio");

for (var i = 0; i < radios.length; i++) {
    radios[i].addEventListener('click', radioClicked);
}


document.getElementById("input-custom").addEventListener("input", customEntry);

document.getElementById("input-bill").addEventListener("keyup", updateForm);
document.getElementById("input-no-ppl").addEventListener("keyup", updateForm);
document.getElementById("button-reset").addEventListener("click", reset);


function clearRadios(){
    var elements = document.getElementsByTagName("input");
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].type == "radio") {
            elements[i].checked = false;
        }
    }
}

function radioClicked(){
    document.getElementById("input-custom").value = "";
    updateForm();
}

function customEntry(){
    if (document.getElementById("input-custom").value != ""){
        clearRadios();
    }
    updateForm();
}

function displayZeroError(inputField){
    document.getElementById("error-" + inputField).classList.remove("hidden");
    document.getElementById("input-" + inputField).classList.add("input-error");
}

function removeZeroErrors(){
    document.getElementById("error-bill").classList.add("hidden");
    document.getElementById("error-no-ppl").classList.add("hidden");
    document.getElementById("input-bill").classList.remove("input-error");
    document.getElementById("input-no-ppl").classList.remove("input-error");
}

function updateForm(){
    removeZeroErrors();
    if (document.getElementById("input-bill").value == 0){
        displayZeroError("bill");
    } else if(document.getElementById("input-no-ppl").value == 0){
        displayZeroError("no-ppl");
    } else{
        let bill = parseFloat(document.getElementById("input-bill").value);
        let noPpl = document.getElementById("input-no-ppl").value;
        if (document.getElementById("input-custom").value != ""){
            var tipMultiplier = document.getElementById("input-custom").value / 100;
        } else{
            var tipMultiplier = getSelectedTip() / 100;
        }

        let tipResult = ((bill * tipMultiplier) / noPpl);
        let totalResult = ((bill + bill * tipMultiplier) / noPpl);  
        document.getElementById("tip-result-display").innerHTML = "$" + tipResult.toFixed(2);
        document.getElementById("total-result-display").innerHTML = "$" + totalResult.toFixed(2);
    }


}

function getSelectedTip(){
    return document.querySelector('input[name="tip-percent"]:checked').id.replace(/\D/g,'');
}

function reset(){
    document.getElementById("input-bill").value = "";
    document.getElementById("input-custom").value = "";
    document.getElementById("input-no-ppl").value = "";
    clearRadios();


    document.getElementById("tip-result-display").innerHTML = "$0.00";
    document.getElementById("total-result-display").innerHTML = "$0.00";
}

