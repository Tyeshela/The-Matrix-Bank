const canvas = document.getElementById("matrix");
  const ctx = canvas.getContext("2d");

  let matrix = "01";
  matrix = matrix.split("");

  const font_size = 10;
  let device_pixel_ratio = window.devicePixelRatio || 1;
  let drops = [];
  let animationInterval;

  function resizeCanvas() {
    canvas.width = window.innerWidth * device_pixel_ratio;
    canvas.height = window.innerHeight * device_pixel_ratio;
    ctx.scale(device_pixel_ratio, device_pixel_ratio);
  }

  function initializeDrops() {
    const columns = Math.ceil(canvas.width / font_size);
    const drops = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -canvas.height / font_size);
    }

    return drops;
  }

  function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0F0";
    ctx.font = font_size + "px arial";

    for (let i = 0; i < drops.length; i++) {
      const text = matrix[Math.floor(Math.random() * matrix.length)];
      ctx.fillText(text, i * font_size, drops[i] * font_size);

      if (drops[i] * font_size > canvas.height && Math.random() > 0.975) {
        drops[i] = Math.floor(Math.random() * -canvas.height / font_size);
      }

      drops[i]++;
    }
  }

  function initialize() {
    clearInterval(animationInterval);
    resizeCanvas();
    drops = initializeDrops();
    draw();
    animationInterval = setInterval(draw, 35);
  }

  window.addEventListener("resize", initialize);
  initialize();