function checkLogin(){
  var uname = document.getElementById("uname").value.trim();
  var pword = document.getElementById("pword").value.trim();

  if(uname==="" || pword===""){
    alert("Please, Enter both username and password")
  }else{
    alert("Logged in successfully")
  }
}

function resetDetails(){
  var uname = document.getElementById("uname").value = "";
  var pword = document.getElementById("pword").value = "";
}

