function resetDetails(){
  var email = document.getElementById("email").value = "";
  var npword = document.getElementById("npword").value = "";
  var cpword = document.getElementById("cpword").value = "";
}

function enterEmail(){
  var email = document.getElementById("email").value.trim();

  if(email === ""){
    alert("Please, Enter your email first!!!");
  }
}



function checkAll(){
  var email = document.getElementById("email").value.trim();
  var npword = document.getElementById("npword").value.trim();
  var cpword = document.getElementById("cpword").value.trim();

  if(email === "" || npword === "" || cpword === ""){
    alert("Please, Fill all details!!");
    return;
  }
  if(npword!==cpword){
    alert("Password not matched!!");
    resetDetails();
    return;
  }
  else{
    alert("Password changed successfully!!");
    window.open("login.html","_blank");
  }
}
