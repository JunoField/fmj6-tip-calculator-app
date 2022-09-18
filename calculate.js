let radios = document.getElementsByClassName("radio");

for (var i = 0; i < radios.length; i++) {
    radios[i].addEventListener('click', radioClicked);
}


document.getElementById("input-custom").addEventListener("keypress", customEntry);

document.getElementById("input-bill").addEventListener("keypress", updateForm);
document.getElementById("input-no-ppl").addEventListener("keypress", updateForm);


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

function updateForm(){
    let bill = parseFloat(document.getElementById("input-bill").value);
    let noPpl = document.getElementById("input-no-ppl").value;
    if (document.getElementById("input-custom").value != ""){
        var tipMultiplier = document.getElementById("input-custom").value / 100;
    } else{
        var tipMultiplier = getSelectedTip() / 100;
    }

    document.getElementById("tip-result-display").innerHTML = "$" + ((bill * tipMultiplier) / noPpl).toFixed(2);
    document.getElementById("total-result-display").innerHTML = "$" + ((bill + bill * tipMultiplier) / noPpl).toFixed(2);

}

function getSelectedTip(){
    return document.querySelector('input[name="tip-percent"]:checked').id.replace(/\D/g,'');
}



