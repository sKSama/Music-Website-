document.getElementById("subr").addEventListener("click", function() {
  //alert("Registration Successful, Login to Continue");
});


function ValidateEmail(inputText,name,pass)
{
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(!inputText.value.match(mailformat))
{
  alert("You have entered an invalid email address!");
  document.reg.emailr.focus();
  return false;
}
if(name.value.length<4)
{
  alert("Enter Name with length > 4");
  document.reg.namer.focus();
  return false;
}
if(pass.value.length<4)
{
  alert("Enter Password with length > 4");
  document.reg.passr.focus();
  return false;
}
  alert("Registered! Login Now to Continue!");
  return true;
}

function ValidateLoginEmail(inputText)
{
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(!inputText.value.match(mailformat))
{
  alert("You have entered an invalid email address!");
  document.login.email.focus();
  return false;
}

  return true;
}
