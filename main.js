import './style.css'

let canvas, ctx;

let size = {
  width: window.innerWidth,
  height: window.innerHeight
}
let interval = 10; // 間隔
let num = Math.floor(size.width / interval) + 1; // 横に並ぶ数

function init(){
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');

  canvas.width = size.width;
  canvas.height = size.height;
}

function render(){
  
  for(let i = 0; i < num; i++){
    let radian = i / 180 * Math.PI; //ラジアンに変換 i番目の角度の計算

     //fillRect(x, y, width, height)
    ctx.fillRect(
      interval * i,
      (size.height * 0.5) + (size.height * 0.5) * Math.sin(radian),
      1,
      size.height
    );
  }
  
  // loop();
  function loop() {
    // 経過時間
    let passedTime = new Date().getTime();

    
    // 画面をリセット
    // ctx.clearRect(0,0, canvas.width, canvas.width);
    
    
    
    requestAnimationFrame(loop);
  }
}

window.addEventListener('load', ()=>{
  init();
  render();
});

window.addEventListener('resize', ()=>{
  size.width = window.innerWidth;
  size.height = window.innerHeight;
  
  canvas.width = size.width;
  canvas.height = size.height;
  render();
});
