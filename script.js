let clicks = 0;
let autoClickerActive = false;
const autoClickerCost = 100;

const cookieBtn = document.getElementById('cookie-btn');
const clicksDisplay = document.getElementById('clicks');
const autoBtn = document.getElementById('auto-btn');

cookieBtn.addEventListener('click', function() {
  clicks++;
  clicksDisplay.textContent = "Clicks: " + clicks;
});

autoBtn.addEventListener('click', function() {
  if (clicks >= autoClickerCost && !autoClickerActive) {
    clicks -= autoClickerCost;
    autoClickerActive = true;
    clicksDisplay.textContent = "Clicks: " + clicks;
    autoBtn.disabled = true; // Prevent buying again
    setInterval(() => {
      clicks++;
      clicksDisplay.textContent = "Clicks: " + clicks;
    }, 100); // 0.1 second interval
  }
});