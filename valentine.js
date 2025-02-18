// Countdown Timer Function
function startCountdown() {
	const countdownDate = new Date("2025-04-28T00:00:00").getTime();
	const countdownElement = document.getElementById("countdowntimer");

	const countdownInterval = setInterval(() => {
		const now = new Date().getTime();
		const distance = countdownDate - now;

		const days = Math.floor(distance / (1000 * 60 * 60 * 24));
		const hours = Math.floor(
			(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		);
		const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((distance % (1000 * 60)) / 1000);

		if (distance < 0) {
			clearInterval(countdownInterval);
			countdownElement.textContent = "Happy Anniversary! 🎉💖";
			countdownElement.classList.add("celebrate");
		} else {
			countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
		}
	}, 1000);
}

// No Button Function
function handleNo() {
	let noBtn = document.getElementById("no-btn");
	let responseMessage = document.getElementById("response-message");

	noBtn.classList.add("shake");
	responseMessage.style.opacity = "1";
	responseMessage.textContent = "Choose again, I think you made a mistake! 🥺";

	// Remove the shake effect after 0.5s
	setTimeout(() => {
		noBtn.classList.remove("shake");
	}, 500);
}

// Event Listener for the "No" Button
let noBtn = document.getElementById("no-btn");
if (noBtn) {
	noBtn.addEventListener("click", handleNo);
}

// Start the Countdown
startCountdown();
