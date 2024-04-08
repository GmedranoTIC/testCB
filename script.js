document.addEventListener("DOMContentLoaded", function() {
  const bridge = document.getElementById("bridge");
  const startButton = document.getElementById("start");

  let bridgeBuilt = false;

  startButton.addEventListener("click", function() {
    if (!bridgeBuilt) {
      buildBridge();
      bridgeBuilt = true;
      startButton.textContent = "Reset";
    } else {
      resetBridge();
      bridgeBuilt = false;
      startButton.textContent = "Start";
    }
  });

  function buildBridge() {
    // Code to build the bridge (you can implement this logic)
    bridge.style.height = "200px"; // Example
  }

  function resetBridge() {
    // Code to reset the bridge (you can implement this logic)
    bridge.style.height = "50px"; // Example
  }
});
