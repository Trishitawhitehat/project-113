function preload() {

}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(150, 150);
  video = createCapture(VIDEO);
  video.hide();

}

function draw() {
  image(video, 230, 150, 220, 200);

  fill(255, 0, 0);
  stroke(255, 0, 0);
  rect(20, 20, 80, 80);
  rect(20, 390, 80, 80);
  rect(540, 24, 80, 80);
  rect(540, 390, 80, 80);
  fill(0, 128, 0);
  stroke(0, 128, 0);
  rect(90, 40, 450, 20);
  rect(90, 420, 450, 20);
  rect(40, 90, 20, 300);
  rect(580, 90, 20, 300);
}

Webcam.set({
    width:350,
    height:300,
    image_format :'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() {
    save('studentname.png');
}