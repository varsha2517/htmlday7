function validate(){
    var result = "";
    result  +=validateName();
    result  +=validateEmail();
    result  +=validatePassword();
    result  +=validateTerms();

    if(result =="")return true;

    alert("validation Result:\n\n" +result);
    return false;
}

function validateName(){
    var name=docuement.getElementByName("name")[0].value;
    if(name.length <= 3)
    return "name should be atleast three characters.\n";
    return "valid username\n";
}
function validatePassword(){
    var password = valueOf("password");
    var retype = valueOf("retype_password");

    if(password.length <= 6)
    return "Passwordshould be at least 6 characters.\n";

    if (password ! = retype)
    return "passwords do not match.\n";
    return "Valid Password";
}