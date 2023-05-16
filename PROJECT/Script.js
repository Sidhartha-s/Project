function Drop() 
{
  document.getElementById("Droplist").classList.toggle("show");
}
function disappear()
{
  document.getElementById("Droplist").classList.toggle("show");
}

function filter() 
{
  var input, filter, ul, li, a, i, div;
  input = document.getElementById("input");
  filter = input.value.toUpperCase();
  div = document.getElementById("Droplist");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) 
  {
    txtValue = a[i].textContent;
    if (txtValue.toUpperCase().indexOf(filter) > -1)
    {
      a[i].style.display = "";
    }
    else 
    {
      a[i].style.display = "none";
    }
  }
}
function validate() 
{
  var text;
  if( document.myForm.name.value == "" ) 
  {
    text = "Name cannot be empty";
    document.getElementById("demo").innerHTML = text;
    document.myForm.name.focus() ;
    return false;
  }
  if( document.myForm.pass.value == "" ) 
  {
    text = "E-mail cannot be empty";
    document.getElementById("demo").innerHTML = text;
    document.myForm.email.focus() ;
    return false;
  }
}

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}