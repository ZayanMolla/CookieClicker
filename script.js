let clicks = 0;
let clickPower = 1;
let clickPowerLevel = 0;
let clickPowerBaseCost = 50;
let clickPowerCost = clickPowerBaseCost;

let autoClickerActive = false;
let autoClickerLevel = 0;
let autoClickerInterval = null;
let autoClickerBaseCost = 100;
let autoClickerCost = autoClickerBaseCost;

const cookieBtn = document.getElementById('cookie-btn');
const cookieImg = cookieBtn.querySelector('img');
const clicksDisplay = document.getElementById('clicks');
const autoBtn = document.getElementById('auto-btn');

// Create manual click upgrade button
const clickPowerBtn = document.createElement('button');
clickPowerBtn.id = "click-power-btn";
clickPowerBtn.textContent = `Upgrade Click Power (${clickPowerCost}) [Level ${clickPowerLevel}]`;
clickPowerBtn.style.background = "#90caf9";
clickPowerBtn.style.color = "#1a237e";
clickPowerBtn.style.margin = "10px";
clickPowerBtn.style.fontSize = "1.2em";
document.body.insertBefore(clickPowerBtn, autoBtn);

function updateAutoBtn() {
  autoBtn.textContent = `Buy/Upgrade Auto Clicker (${autoClickerCost}) [Level ${autoClickerLevel}]`;
}

function updateClickPowerBtn() {
  clickPowerBtn.textContent = `Upgrade Click Power (${clickPowerCost}) [Level ${clickPowerLevel}]`;
}

cookieBtn.addEventListener('click', function() {
  clicks += clickPower;
  clicksDisplay.textContent = "Clicks: " + clicks;

  // Add crumble animation
  cookieImg.classList.add('cookie-crumble');
  setTimeout(() => {
    cookieImg.classList.remove('cookie-crumble');
  }, 100);
});

clickPowerBtn.addEventListener('click', function() {
  if (clicks >= clickPowerCost) {
    clicks -= clickPowerCost;
    clickPowerLevel++;
    clickPower = 1 + clickPowerLevel; // Each level adds +1 to click power
    clickPowerCost = Math.floor(clickPowerBaseCost * Math.pow(2, clickPowerLevel));
    clicksDisplay.textContent = "Clicks: " + clicks;
    updateClickPowerBtn();
  }
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
updateClickPowerBtn();