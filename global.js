$(document).ready(function () {
      $('.menuBtn').click(function () {
        $('.drawer').toggle(500);
      });
    });
  



const accountBtn = document.getElementById("accountBtn");
if (accountBtn) {
  if (localStorage.getItem('userName')) {
    accountBtn.innerHTML = "Manage Account";
accountBtn.href ="./manageAccount.html";
  } else {
    accountBtn.innerHTML = "Create Account";
accountBtn.href ="./createAccount.html";
  }
}