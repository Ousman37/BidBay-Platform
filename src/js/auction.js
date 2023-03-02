// Rename the existing endTime variable to auctionEndTime
const auctionEndTime = new Date().getTime() + 10 * 60 * 1000;

// Get the remaining time element for each product
const remainingTimeElements = document.querySelectorAll('.remaining-time');

// Function to update the remaining time for each product
function updateRemainingTime() {
  // Get the current time
  const currentTime = new Date().getTime();

  // Calculate the remaining time in milliseconds
  const remainingTime = auctionEndTime - currentTime;

  // Convert remaining time to minutes and seconds
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  // Update the remaining time element for each product
  remainingTimeElements.forEach(element => {
    element.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  });
}

// Update the remaining time initially
updateRemainingTime();

// Update the remaining time every second
setInterval(updateRemainingTime, 1000);
