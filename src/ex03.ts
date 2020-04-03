import * as PIXI from 'pixi.js';

(() => {
  const canvas = document.querySelector('canvas.ex01-1') as HTMLCanvasElement;
  if (!canvas) return;

  const canvasSize = 200;

  const app = new PIXI.Application({
    width: canvasSize,
    height: canvasSize,
    view: canvas,
    backgroundColor: 0x0055aa,
  });

  const graphics = new PIXI.Graphics();
  graphics.clear();
  graphics.beginFill(0x557799, 1);
  graphics.drawRect(20, 20, canvasSize - 40, canvasSize - 40);
  graphics.endFill();

  app.stage.addChild(graphics);

  const text = new PIXI.Text('あ');
  text.x = 20;
  text.y = 20;

  text.style = new PIXI.TextStyle({
    fill: '#aaccff',
    fontSize: canvasSize - 40,
    fontFamily: 'Arial',
  });

  app.stage.addChild(text);
})();

(() => {
  const canvas = document.querySelector('canvas.ex01-2') as HTMLCanvasElement;
  if (!canvas) return;

  const canvasSize = 200;

  const app = new PIXI.Application({
    width: canvasSize,
    height: canvasSize,
    view: canvas,
    backgroundColor: 0x0055aa,
    resolution: window.devicePixelRatio || 1,
  });

  const graphics = new PIXI.Graphics();
  graphics.clear();
  graphics.beginFill(0x557799, 1);
  graphics.drawRect(20, 20, canvasSize - 40, canvasSize - 40);
  graphics.endFill();

  app.stage.addChild(graphics);

  const text = new PIXI.Text('あ');
  text.x = 20;
  text.y = 20;

  text.style = new PIXI.TextStyle({
    fill: '#aaccff',
    fontSize: canvasSize - 40,
    fontFamily: 'Arial',
  });

  app.stage.addChild(text);
})();

(() => {
  const canvas = document.querySelector('canvas.ex01-3') as HTMLCanvasElement;
  if (!canvas) return;

  const canvasSize = 200;

  // const app = new PIXI.Application({
  //   width: canvasSize,
  //   height: canvasSize,
  //   view: canvas,
  //   backgroundColor: 0x0055aa,
  //   resolution: window.devicePixelRatio || 1,
  //   autoDensity: true, // 旧バージョンでは autoResize
  // });

  const renderer = new PIXI.Renderer({
    width: canvasSize,
    height: canvasSize,
    view: canvas,
    backgroundColor: 0x0055aa,
    resolution: window.devicePixelRatio || 1,
    autoDensity: true, // 旧バージョンでは autoResize
  });

  const stage = new PIXI.Container();
  const graphics = new PIXI.Graphics();
  graphics.clear();
  graphics.beginFill(0x557799, 1);
  graphics.drawRect(20, 20, canvasSize - 40, canvasSize - 40);
  graphics.endFill();

  stage.addChild(graphics);

  const text = new PIXI.Text('あ');
  text.x = 20;
  text.y = 20;

  text.style = new PIXI.TextStyle({
    fill: '#aaccff',
    fontSize: canvasSize - 40,
    fontFamily: 'Arial',
  });

  stage.addChild(text);

  requestAnimationFrame(() => {
    renderer.render(stage);
  });
})();

requestAnimationFrame(() => {
  const srcCanvas = document.querySelector('canvas.ex01-3') as HTMLCanvasElement;
  const distCanvas = document.querySelector('canvas.ex02-2') as HTMLCanvasElement;
  const distImage = document.querySelector('img.ex02-2') as HTMLImageElement;
  if (!srcCanvas || !distCanvas || !distImage) return;

  const distCtx = distCanvas.getContext('2d');
  if (!distCtx) return;

  const scale = window.devicePixelRatio;

  // 切り出しはscale()で拡大したサイズを基準に行う必要がある。
  // 文字周辺の塗りつぶしエリアを切り出そうとした場合、
  // このエリアはCanvasに対し20pxのマージン位置に描画したので、
  // この位置に対しscale()の拡大率を掛けて切り出し範囲を求める。
  const srcCanvasX = 20 * scale;
  const srcCanvasY = 20 * scale;
  const srcCanvasWidth = srcCanvas.width - 40 * scale;
  const srcCanvasHeight = srcCanvas.height - 40 * scale;

  const distCanvasX = 0;
  const distCanvasY = 0;
  const distWidth = srcCanvasWidth;
  const distHeight = srcCanvasHeight;

  distCanvas.width = distWidth;
  distCanvas.height = distHeight;
  distCtx.clearRect(0, 0, distWidth, distHeight);

  distCtx.drawImage(
    srcCanvas,

    srcCanvasX,
    srcCanvasY,
    srcCanvasWidth,
    srcCanvasHeight,

    distCanvasX,
    distCanvasY,
    distWidth,
    distHeight,
  );

  distImage.src = distCanvas.toDataURL('image/png');
  distImage.style.width = `${distWidth / scale}px`;
  distImage.style.height = `${distHeight / scale}px`;
});

requestAnimationFrame(() => {
  const srcCanvas = document.querySelector('canvas.ex01-3') as HTMLCanvasElement;
  const distCanvas = document.querySelector('canvas.ex02-3') as HTMLCanvasElement;
  // const distCanvas = document.createElement('canvas');

  const distImage = document.querySelector('img.ex02-3') as HTMLImageElement;

  // const distImage = document.createElement('img');

  if (!srcCanvas || !distCanvas || !distImage) return;

  const distCtx = distCanvas.getContext('2d');
  if (!distCtx) return;

  const scale = window.devicePixelRatio;

  // 切り出しはscale()で拡大したサイズを基準に行う必要がある。
  // 文字周辺の塗りつぶしエリアを切り出そうとした場合、
  // このエリアはCanvasに対し20pxのマージン位置に描画したので、
  // この位置に対しscale()の拡大率を掛けて切り出し範囲を求める。
  const srcCanvasX = 20 * scale;
  const srcCanvasY = 20 * scale;
  const srcCanvasWidth = srcCanvas.width - 40 * scale;
  const srcCanvasHeight = srcCanvas.height - 40 * scale;

  // 出力画像のサイズをdevicePixelRatioで割って縮小する
  const distCanvasX = 0;
  const distCanvasY = 0;
  const distWidth = srcCanvasWidth / scale;
  const distHeight = srcCanvasHeight / scale;

  distCanvas.width = distWidth;
  distCanvas.height = distHeight;
  distCtx.clearRect(0, 0, distWidth, distHeight);

  distCtx.drawImage(
    srcCanvas,

    srcCanvasX,
    srcCanvasY,
    srcCanvasWidth,
    srcCanvasHeight,

    distCanvasX,
    distCanvasY,
    distWidth,
    distHeight,
  );

  distImage.src = distCanvas.toDataURL('image/png');
});
