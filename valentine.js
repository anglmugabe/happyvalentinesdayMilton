let noBtn = document.getElementById("no-btn");
let responseMessage = document.getElementById("response-message");

noBtn.addEventListener("click", function () {
	noBtn.classList.add("shake");

	responseMessage.style.opacity = "1";
	responseMessage.textContent = "Choose again, I think you made a mistake! 🥺";

	setTimeout(() => {
		noBtn.classList.remove("shake");
	}, 500);
});
