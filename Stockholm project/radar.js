const video = document.getElementById("video");
const brightnessText = document.getElementById("brightness");
const status = document.getElementById("cloud-status");
const distanceInfo = document.getElementById("distance-info");
const seedingReadiness = document.getElementById("seeding-readiness");
const alertSound = document.getElementById("alertSound");
const canvasRadar = document.getElementById("radarCanvas");
const ctxRadar = canvasRadar.getContext("2d");

alertSound.volume = 0.3;


navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;
  })
  .catch(err => {
    status.innerText = "Camera access denied.";
  });


const tempCanvas = document.createElement('canvas');
const tempCtx = tempCanvas.getContext('2d');
let lastAlertTime = 0;

function checkBrightness() {
  if (!video.videoWidth) return;

  tempCanvas.width = video.videoWidth;
  tempCanvas.height = video.videoHeight;
  tempCtx.drawImage(video, 0, 0, tempCanvas.width, tempCanvas.height);
  const frame = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
  let total = 0;

  for (let i = 0; i < frame.data.length; i += 4) {
    const r = frame.data[i];
    const g = frame.data[i + 1];
    const b = frame.data[i + 2];
    const brightness = (r + g + b) / 3;
    total += brightness;
  }

  const avgBrightness = total / (frame.data.length / 4);
  brightnessText.textContent = avgBrightness.toFixed(0);

  if (avgBrightness < 100) {
    status.textContent = "☁️ Cloud Detected";
    status.style.color = "orange";
    distanceInfo.textContent = "Estimated Distance: 2.3 km";
    seedingReadiness.textContent = "Seeding Readiness: NaCl Injection Possible";

    if (Date.now() - lastAlertTime > 5000) {
      alertSound.play();
      lastAlertTime = Date.now();
    }
  } else {
    status.textContent = "☀️ Not a Cloud";
    status.style.color = "lime";
    distanceInfo.textContent = "Estimated Distance: ∞ (Clear)";
    seedingReadiness.textContent = "Seeding Readiness: ❌ Not Suitable";
  }
}

setInterval(checkBrightness, 1000);


let angle = 0;
function drawRadar() {
  const w = canvasRadar.width;
  const h = canvasRadar.height;
  const centerX = w / 2;
  const centerY = h / 2;
  const radius = Math.min(w, h) / 2;


  ctxRadar.clearRect(0, 0, w, h);


  ctxRadar.beginPath();
  ctxRadar.arc(centerX, centerY, radius - 2, 0, Math.PI * 2);
  ctxRadar.fillStyle = "rgba(0, 255, 100, 0.08)";
  ctxRadar.fill();

  const sweepLength = radius;
  const x = centerX + sweepLength * Math.cos(angle);
  const y = centerY + sweepLength * Math.sin(angle);

  ctxRadar.beginPath();
  ctxRadar.moveTo(centerX, centerY);
  ctxRadar.lineTo(x, y);
  ctxRadar.strokeStyle = "rgba(0,255,0,0.6)";
  ctxRadar.lineWidth = 3;
  ctxRadar.stroke();

  angle += 0.03;
  requestAnimationFrame(drawRadar);
}

canvasRadar.width = 300;
canvasRadar.height = 300;
drawRadar();
