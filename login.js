function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value
if(username=="admin"&& password=="user")
{
  alert("Login Succesful")
  window.open("https://google.com")
  return false;
  
}
else
{
  alert("Login Failed. Try Again");
}
  
  
  
}