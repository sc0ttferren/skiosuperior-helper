document.addEventListener('DOMContentLoaded', function () {
    chrome.system.audio.getVolume(function (volumeInfo) {
      displayVolume(volumeInfo.volume);
    });
  
    chrome.system.audio.onVolumeChanged.addListener(function (volumeInfo) {
      displayVolume(volumeInfo.volume);
    });
  });
  
  function displayVolume(volume) {
    var volumeDisplay = document.getElementById('volume-display');
    var volumePercentage = document.getElementById('volume-percentage');
  
    volumePercentage.textContent = Math.round(volume * 100) + '%';
    volumeDisplay.style.opacity = 1;
  
    setTimeout(function () {
      volumeDisplay.style.opacity = 0;
    }, 3000);
  }
  