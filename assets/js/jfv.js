
$(document).ready(function () {
  input = $('input').text();
  $("button").click(function () {
    if(input == ""){
      alert("Enter all the fields");
      return false;
    }
  })

});
