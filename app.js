import * as PIXI from 'pixi.js';

const canvas = document.getElementById('canvas');
const app = new PIXI.Application({
  view : canvas,
  width : window.innerWindow,
  height: window.innerHeight
});

const texture = PIXI.Texture.from('sprite.png');
const img = new PIXI.Sprite(texture);
img.x = app.renderer.width / 2;
img.y = app.renderer.height / 2;
app.stage.addChild(img); 


export default app;
