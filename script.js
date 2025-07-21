let clicks = 0;
let autoClickerActive = false;
let autoClickerLevel = 0;
let autoClickerInterval = null;
let autoClickerBaseCost = 100;
let autoClickerCost = autoClickerBaseCost;

const cookieBtn = document.getElementById('cookie-btn');
const cookieImg = cookieBtn.querySelector('img');
const clicksDisplay = document.getElementById('clicks');
const autoBtn = document.getElementById('auto-btn');

function updateAutoBtn() {
  autoBtn.textContent = `Buy/Upgrade Auto Clicker (${autoClickerCost}) [Level ${autoClickerLevel}]`;
}

cookieBtn.addEventListener('click', function() {
  clicks++;
  clicksDisplay.textContent = "Clicks: " + clicks;

  // Add crumble animation
  cookieImg.classList.add('cookie-crumble');
  // After 0.1s, remove animation class to respawn cookie
  setTimeout(() => {
    cookieImg.classList.remove('cookie-crumble');
  }, 100);
});

autoBtn.addEventListener('click', function() {
  if (clicks >= autoClickerCost) {
    clicks -= autoClickerCost;
    autoClickerLevel++;
    autoClickerActive = true;
    clicksDisplay.textContent = "Clicks: " + clicks;
    autoClickerCost = Math.floor(autoClickerBaseCost * Math.pow(2, autoClickerLevel));
    updateAutoBtn();

    if (autoClickerInterval) clearInterval(autoClickerInterval);
    autoClickerInterval = setInterval(() => {
      clicks += autoClickerLevel;
      clicksDisplay.textContent = "Clicks: " + clicks;
    }, 100);
  }
});

updateAutoBtn();