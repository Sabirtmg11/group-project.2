function toggleRSVP() {
  var invitation = document.getElementById("invitation");
  var responseForm = document.getElementById("responseForm");

  invitation.style.display = "none";
  responseForm.style.display = "block";
}

function submitForm() {
  var favorite = document.getElementById("favorite").value;
  var time = document.getElementById("time").value;
  var confirmationMessage = document.getElementById("confirmationMessage");

  confirmationMessage.innerHTML = `Thank you! See you there at ${time} for ${favorite}! 🎉`;
  confirmationMessage.style.display = "block";
}
