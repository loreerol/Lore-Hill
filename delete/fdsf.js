function yesno(thecheckbox, thelabel) {
    
    var checkboxvar = document.getElementById(thecheckbox);
    var labelvar = document.getElementById(thelabel);
    if (!checkboxvar.checked) {
        labelvar.innerHTML = "english";
    }
    else {
        labelvar.innerHTML = "german";
    }
}