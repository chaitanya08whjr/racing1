canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
carrrrrrrrrrrrrrrrrrrr_width = 100;
carrrrrrrrrrrrrrrrrrrr_height= 90;
carrrrrrrrrrrrrrrrrrrr_img="carrrrrrrrrrrrrrrrrrrr.png"
carrrrrrrrrrrrrrrrrrrr_x = 5;
carrrrrrrrrrrrrrrrrrrr_y = 110;

racingcarrr_width = 100;
racingcarrr_height= 90;
racingcarrr_img="racingcarrr.png"; 
racingcarrr_x = 20;
racingcarrr_y = 20;
bg_img="track.webp";

function add() {
    bg_imgTag = new Image();
    bg_imgTag.onload = uploadBg;
    bg_imgTag.src = bg_img;

    console.log("source="+bg_img);

    carrrrrrrrrrrrrrrrrrrr_imgTag = new Image();
    carrrrrrrrrrrrrrrrrrrr_imgTag.onload = uploadCarrrrrrrrrrrrrrrrrrrr;
    carrrrrrrrrrrrrrrrrrrr_imgTag.src = carrrrrrrrrrrrrrrrrrrr_img;

    racingcarrr_imgTag = new Image();
    racingcarrr_imgTag.onload = uploadRacingcarrr;
    racingcarrr_imgTag.src = racingcarrr_img;
}

function uploadBg() {
    ctx.drawImage(bg_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCarrrrrrrrrrrrrrrrrrrr() {
    ctx.drawImage(carrrrrrrrrrrrrrrrrrrr_imgTag, carrrrrrrrrrrrrrrrrrrr_x, carrrrrrrrrrrrrrrrrrrr_y, carrrrrrrrrrrrrrrrrrrr_width, carrrrrrrrrrrrrrrrrrrr_height);
}

function uploadRacingcarrr() {
    ctx.drawImage(racingcarrr_imgTag, racingcarrr_x, racingcarrr_y, racingcarrr_width, racingcarrr_height);
}

window.addEventListener("keydown", My_keydown);

function My_keydown(e) {
    keyPress = e.keyCode;
    console.log(keyPress);
    if (keyPress == '38') {
        carrrrrrrrrrrrrrrrrrrr_up();
        console.log("up")
    }
    if (keyPress == '40') {
        carrrrrrrrrrrrrrrrrrrr_down();
        console.log("down")
    }
    if (keyPress == '37') {
        carrrrrrrrrrrrrrrrrrrr_left();
        console.log("left")
    }
    if (keyPress == '39') {
        carrrrrrrrrrrrrrrrrrrr_right();
        console.log("right")
    }
    if (keyPress == '87') {
        racingcarrr_w();
        console.log("w")
    }
    if (keyPress == '88') {
        racingcarrr_x();
        console.log("x")
    }
    if (keyPress == '37') {
        racingcarrr_y();
        console.log("y")
    }
    if (keyPress == '37') {
        racingcarrr_z();
        console.log("z")
    }
}
