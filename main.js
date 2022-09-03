import './style.css'

let canvas, ctx;

let size;
let interval = 20; // 間隔
let num; // 横に並ぶ数

function init(){
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  
  size = {
    width: window.innerWidth,
    height: window.innerHeight
  }
  num = Math.floor(size.width / interval) + 1; // 横に並ぶ数

  canvas.width = size.width;
  canvas.height = size.height;
}

function render(){
  ctx.fillStyle = "#FFAB40";
  
  // for(let i = 0; i < num; i++){
  //   let radian = i / 180 * Math.PI; //ラジアンに変換 i番目の角度の計算

  //   // fillRect(x, y, width, height)
  //   ctx.fillRect(
  //     interval * i,
  //     (size.height * 0.5) + ((size.height * 0.5) * (Math.sin(radian * 5) * 0.1)),
  //     3,
  //     size.height
  //   );
  // }
  
  loop();
  function loop() {
    // 経過時間
    let passedTime = new Date().getTime();

    // let par = ((passedTime % 1000) / 999); // 1秒ごとに0〜1を繰り返す
    let angle = passedTime / 20; // １秒間に0.02増加する

    
    // 画面をリセット
    ctx.clearRect(0,0, canvas.width, canvas.width);

    for(let i = 0; i < num; i++){
      let radian = (angle + i) / 180 * Math.PI; //ラジアンに変換 i番目の角度の計算
  
      // fillRect(x, y, width, height)
      ctx.fillRect(
        interval * i,
        (size.height * 0.5) + ((size.height * 0.5) * ((Math.sin(radian * 3) + Math.cos(radian)) * 0.1)),
        3,
        size.height
      );
    }

    for(let i = 0; i < num + 1; i++){
      let radian = (angle + i) / 180 * Math.PI;
  
      // fillRect(x, y, width, height)
      ctx.fillRect(
        interval * i - interval * 0.33333,
        (size.height * 0.5) + ((size.height * 0.5) * ((Math.sin(radian * 2) + Math.cos(radian * 3)) * 0.15)),
        3,
        size.height
      );
    }

    for(let i = 0; i < num + 1; i++){
      let radian = (angle + i) / 180 * Math.PI;
  
      // fillRect(x, y, width, height)
      ctx.fillRect(
        interval * i - interval * 0.66666,
        (size.height * 0.5) + ((size.height * 0.5) * ((Math.sin(radian) + Math.sin(radian * 3)) * 0.2)),
        3,
        size.height
      );
    }
    
    
    
    requestAnimationFrame(loop);
  }
}

window.addEventListener('load', ()=>{
  init();
  render();
});

window.addEventListener('resize', ()=>{
  init();
  render();
});
