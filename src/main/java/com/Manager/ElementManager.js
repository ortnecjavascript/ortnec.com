function doChanges(id, value) {
    (value ? changeValue(id, value) : hideElement(id)); //place for validator
    return null;
}

function hideElement(id) {
    try {
        document.getElementById(id).className = "hideMe";
    } catch (err) {
        console.log(err);
    }
}

function showElement(id) {
    try {
        document.getElementById(id).className = "showMe";
    } catch (err) {
        console.log(err);
    }
}

function changeValue(id, value) {
    try {
        var el = document.getElementById(id);
        el.innerHTML = value;
    } catch (err) {
        console.log(err);
    }
    return false;
}

function setValue(id) {
    try {
        var value = document.getElementById(id).value;
    } catch (err) {
        console.log(err);
    }
    (value.length ? setValues(id, value) : console.log('wrong value'));

}
var setValues = function (id, value) {
    if (id == 'exampleInputAmount' && hasNumbers(value)) {
        Response.setAmount(value);
    } else if (id == 'text') {
        Response.setBonuses(value);
    }
};

var hasNumbers = function(amount){
    return /\d/.test(amount);
};