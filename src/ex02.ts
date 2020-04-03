(() => {
  const canvas = document.querySelector('canvas.ex01') as HTMLCanvasElement;
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  if (!ctx) return;

  const size = 300;
  canvas.style.width = `${size}px`;
  canvas.style.height = `${size}px`;

  ctx.fillStyle = '#0055aa';
  ctx.fillRect(0, 0, size, size);
  ctx.fillStyle = '#557799';
  ctx.fillRect(20, 20, size - 40, size - 40);
})();

(() => {
  const canvas = document.querySelector('canvas.ex02-1') as HTMLCanvasElement;
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  if (!ctx) return;

  // 最初に要素のサイズを固定してから...
  const canvasSize = 300;
  canvas.width = canvasSize;
  canvas.height = canvasSize;

  ctx.fillStyle = '#0055aa';
  ctx.fillRect(0, 0, canvasSize, canvasSize);
  ctx.fillStyle = '#557799';
  ctx.fillRect(20, 20, canvasSize - 40, canvasSize - 40);
})();

(() => {
  const canvas = document.querySelector('canvas.ex02-2') as HTMLCanvasElement;
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  if (!ctx) return;

  // 最初に要素のサイズを固定してから...
  const canvasSize = 300;
  canvas.width = canvasSize;
  canvas.height = canvasSize;

  ctx.fillStyle = '#0055aa';
  ctx.fillRect(0, 0, canvasSize, canvasSize);
  ctx.fillStyle = '#557799';
  ctx.fillRect(20, 20, canvasSize - 40, canvasSize - 40);

  // CSSで見た目のサイズを設定する
  const cssSize = 150;
  canvas.style.width = `${cssSize}px`;
  canvas.style.height = `${cssSize}px`;
})();

(() => {
  const canvas = document.querySelector('canvas.ex03-1') as HTMLCanvasElement;
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  if (!ctx) return;

  // 最初に要素のサイズを固定してから...
  const canvasSize = 200;
  canvas.width = canvasSize;
  canvas.height = canvasSize;

  ctx.fillStyle = '#0055aa';
  ctx.fillRect(0, 0, canvasSize, canvasSize);
  ctx.fillStyle = '#557799';
  ctx.fillRect(20, 20, canvasSize - 40, canvasSize - 40);

  ctx.fillStyle = '#aaccff';
  ctx.font = `${canvasSize - 40}px Arial`;
  ctx.textBaseline = 'top';

  ctx.fillText('あ', 20, 40);
})();

(() => {
  const canvas = document.querySelector('canvas.ex03-2') as HTMLCanvasElement;
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  if (!ctx) return;

  // 最初に要素のサイズを固定してから...
  const canvasSize = 200;
  canvas.width = canvasSize;
  canvas.height = canvasSize;

  // CSSで見た目のサイズを設定する
  // const cssSize = 300;
  // canvas.style.width = cssSize + 'px';
  // canvas.style.height = cssSize + 'px';

  // 解像度に合わせた拡大率を指定する
  const scale = window.devicePixelRatio;
  ctx.scale(scale, scale);

  ctx.fillStyle = '#0055aa';
  ctx.fillRect(0, 0, canvasSize, canvasSize);
  ctx.fillStyle = '#557799';
  ctx.fillRect(20, 20, canvasSize - 40, canvasSize - 40);

  ctx.fillStyle = '#aaccff';
  ctx.font = `${canvasSize - 40}px Arial`;
  ctx.textBaseline = 'top';

  ctx.fillText('あ', 20, 40);
})();

(() => {
  const canvas = document.querySelector('canvas.ex03-3') as HTMLCanvasElement;
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  if (!ctx) return;

  const scale = window.devicePixelRatio;

  // 最初に要素のサイズを固定してから...
  const canvasSize = 200;
  canvas.width = canvasSize * scale;
  canvas.height = canvasSize * scale;

  // 拡大率を指定する
  ctx.scale(scale, scale);

  // CSSで見た目のサイズを設定する
  // const cssSize = 300;
  // canvas.style.width = cssSize + 'px';
  // canvas.style.height = cssSize + 'px';

  ctx.fillStyle = '#0055aa';
  ctx.fillRect(0, 0, canvasSize, canvasSize);
  ctx.fillStyle = '#557799';
  ctx.fillRect(20, 20, canvasSize - 40, canvasSize - 40);

  ctx.fillStyle = '#aaccff';
  ctx.font = `${canvasSize - 40}px Arial`;
  ctx.textBaseline = 'top';

  ctx.fillText('あ', 20, 40);
})();

(() => {
  const canvas = document.querySelector('canvas.ex03-4') as HTMLCanvasElement;
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  if (!ctx) return;

  const scale = window.devicePixelRatio;

  // 最初に要素のサイズを固定してから...
  const canvasSize = 200;
  canvas.width = canvasSize * scale;
  canvas.height = canvasSize * scale;

  // 拡大率を指定する
  ctx.scale(scale, scale);

  // scaleで拡縮した見た目になったcanvasをstyleで本来のcanvasサイズに戻す
  canvas.style.width = `${canvasSize}px`;
  canvas.style.height = `${canvasSize}px`;

  ctx.fillStyle = '#0055aa';
  ctx.fillRect(0, 0, canvasSize, canvasSize);
  ctx.fillStyle = '#557799';
  ctx.fillRect(20, 20, canvasSize - 40, canvasSize - 40);

  ctx.fillStyle = '#aaccff';
  ctx.font = `${canvasSize - 40}px Arial`;
  ctx.textBaseline = 'top';

  ctx.fillText('あ', 20, 40);
})();

// (() => {
//   const srcCanvas = document.querySelector('canvas.ex03-3') as HTMLCanvasElement;
//   const distCanvas = document.querySelector('canvas.ex04-1') as HTMLCanvasElement;
//   const distImage = document.querySelector('img.ex04-1') as HTMLImageElement;
//   if (!srcCanvas || !distCanvas || !distImage) return;

//   const distCtx = distCanvas.getContext('2d');
//   if (!distCtx) return;

//   const scale = window.devicePixelRatio;

//   console.log(srcCanvas);

//   // 切り出しはscale()で拡大したサイズに対して行う
//   const srcCanvasX = 0;
//   const srcCanvasY = 0;
//   const srcCanvasWidth = srcCanvas.width;
//   const srcCanvasHeight = srcCanvas.height;

//   // 生成画像はscale()分縮小したサイズにする
//   const distCanvasX = 0;
//   const distCanvasY = 0;
//   const distWidth = srcCanvas.width;
//   const distHeight = srcCanvas.height;

//   // 出力サイズをscale分縮小すれば、画像を原寸にしつつ若干の画質向上が得られるケースがある...?
//   // const distWidth = srcCanvas.width / scale;
//   // const distHeight = srcCanvas.height / scale;

//   distCanvas.width = distWidth;
//   distCanvas.height = distHeight;

//   distCtx.clearRect(0, 0, distWidth, distHeight);

//   distCtx.drawImage(
//     srcCanvas,

//     srcCanvasX,
//     srcCanvasY,
//     srcCanvasWidth,
//     srcCanvasHeight,

//     distCanvasX,
//     distCanvasY,
//     distWidth,
//     distHeight,
//   );

//   distImage.src = distCanvas.toDataURL('image/png');

//   console.log(distCanvas.toDataURL('image/png'));

//   distImage.style.width = `${distWidth / scale}px`;
//   distImage.style.height = `${distHeight / scale}px`;
// })();

// (() => {
//   const srcCanvas = document.querySelector('canvas.ex03-4') as HTMLCanvasElement;
//   const distCanvas = document.querySelector('canvas.ex04-2') as HTMLCanvasElement;
//   const distImage = document.querySelector('img.ex04-2') as HTMLImageElement;
//   if (!srcCanvas || !distCanvas || !distImage) return;

//   const distCtx = distCanvas.getContext('2d');
//   if (!distCtx) return;

//   const scale = window.devicePixelRatio;

//   // 切り出しはscale()で拡大したサイズに対して行う
//   // 切り出し対象部分のエリアは次のように描画している
//   //
//   // ctx.fillRect(20, 20, canvasSize - 40, canvasSize - 40);
//   //
//   // ここで指定している定数はscale()されてない値のため、拡大率を考慮した値で範囲を指定する
//   const srcCanvasX = 20 * scale;
//   const srcCanvasY = 20 * scale;
//   const srcCanvasWidth = srcCanvas.width - 40 * scale;
//   const srcCanvasHeight = srcCanvas.height - 40 * scale;

//   const distCanvasX = 0;
//   const distCanvasY = 0;
//   const distWidth = srcCanvasWidth;
//   const distHeight = srcCanvasHeight;

//   distCanvas.width = distWidth;
//   distCanvas.height = distHeight;
//   distCtx.clearRect(0, 0, distWidth, distHeight);

//   distCtx.drawImage(
//     srcCanvas,

//     srcCanvasX,
//     srcCanvasY,
//     srcCanvasWidth,
//     srcCanvasHeight,

//     distCanvasX,
//     distCanvasY,
//     distWidth,
//     distHeight,
//   );

//   distImage.src = distCanvas.toDataURL('image/png');
//   distImage.style.width = `${distWidth / scale}px`;
//   distImage.style.height = `${distHeight / scale}px`;
// })();

// (() => {
//   const srcCanvas = document.querySelector('canvas.ex03-4') as HTMLCanvasElement;
//   const distCanvas = document.querySelector('canvas.ex04-1') as HTMLCanvasElement;
//   if (!srcCanvas || !distCanvas) return;

//   const distCtx = distCanvas.getContext('2d');

//   // var ctx = canvas.getContext('2d');
//   if (!distCtx) return;
//   // distCanvas.width = this._artBoardSize.width * this.pixelRatio;
//   // distCanvas.height = this._artBoardSize.height * this.pixelRatio;
//   // context2d.clearRect(0, 0, distCanvas.width, distCanvas.height);

//   const canvasSize = 200;
//   const scale = window.devicePixelRatio;

//   // const { width, height } = srcCanvas;

//   const width = (canvasSize - 40) * scale;
//   const height = (canvasSize - 40) * scale;
//   distCanvas.width = width;
//   distCanvas.height = height;

//   distCanvas.style.width = `${width / scale}px`;
//   distCanvas.style.height = `${height / scale}px`;

//   const srcCanvasX = 20 * scale;
//   const srcCanvasY = 20 * scale;
//   const srcCanvasWidth = (canvasSize - 40) * scale;
//   const srcCanvasHeight = (canvasSize - 40) * scale;

//   distCtx.clearRect(0, 0, width, height);
//   distCtx.drawImage(
//     srcCanvas,
//     srcCanvasX, //
//     srcCanvasY, //
//     srcCanvasWidth,
//     srcCanvasHeight,
//     0,
//     0,
//     width,
//     height,
//   );

//   console.log(distCanvas.toDataURL('image/png'));

//   //  document.querySelector('img').src = distCanvas.toDataURL('image/png');
// })();

// (() => {
//   var canvas = document.querySelector("canvas");
//   if (!canvas) return;
//   var ctx = canvas.getContext("2d");
//   if (!ctx) return;

//   // 表示サイズを設定(CSSにおけるピクセル数です)。
//   var size = 300;
//   canvas.style.width = size + "px";
//   canvas.style.height = size + "px";

//   // メモリ上における実際のサイズを設定(ピクセル密度の分だけ倍増させます)。
//   // var scale = window.devicePixelRatio; // レティナでこの値を1にするとぼやけたcanvasになります

//   const { devicePixelRatio } = window;
//   console.log(devicePixelRatio);

//   var scale = 2; // レティナでこの値を1にするとぼやけたcanvasになります

//   canvas.width = size * scale;
//   canvas.height = size * scale;
//   // canvas.width = size;
//   // canvas.height = size;

//   // CSS上のピクセル数を前提としているシステムに合わせます。
//   ctx.scale(scale, scale);

//   // ctx.fillStyle = "#000";
//   // ctx.fillRect(0, 0, size, size);
//   ctx.fillStyle = "#ffffff";
//   ctx.font = "300px Arial";
//   // ctx.textAlign = "left";
//   ctx.textBaseline = "top";

//   // var x = size / 2;
//   var y = 25;
//   var x = 0;
//   // var y = 0;

//   var textString = "あ";
//   ctx.fillText(textString, x, y);
// })();

/*
const makeCanvas = (size: { width: number; height: number }) => {
  const canvas = document.createElement("canvas");

  // const scale = window.devicePixelRatio; // レティナでこの値を1にするとぼやけたcanvasになります
  // canvas.width = size.width * scale;
  // canvas.height = size.height * scale;

  // canvas.style.backgroundColor = "#aaccff";
  canvas.width = size.width;
  canvas.height = size.height;

  // canvas.style.width = size.width + "px";
  // canvas.style.height = size.height + "px";

  const ctx = canvas.getContext("2d");
  if (ctx) {
    // ctx.scale(scale, scale);

    ctx.fillStyle = "#bada55";
    // ctx.fillRect(10, 10, 300, 300);
    ctx.fillRect(0, 0, 100, 100);

    ctx.fillStyle = "#000000";
    ctx.font = "30px Arial";
    ctx.textBaseline = "top";

    ctx.fillText("canvas", 100, 0);
  }

  return canvas;
};

const makeDiv = (size: { width: number; height: number }) => {
  const div = document.createElement("div");
  div.style.backgroundColor = "#cc0055";
  div.style.width = size.width + "px";
  div.style.height = size.height + "px";
  div.textContent = "div";
  return div;
};

const draw = (ctx: CanvasRenderingContext2D) => {
  // 表示サイズを設定(CSSにおけるピクセル数です)。
  // var size = 200;
  // canvas.style.width = size + "px";
  // canvas.style.height = size + "px";

  // メモリ上における実際のサイズを設定(ピクセル密度の分だけ倍増させます)。
  // var scale = window.devicePixelRatio; // レティナでこの値を1にするとぼやけたcanvasになります
  // canvas.width = size * scale;
  // canvas.height = size * scale;

  // CSS上のピクセル数を前提としているシステムに合わせます。
  // ctx.scale(scale, scale);

  ctx.fillStyle = "#bada55";
  // ctx.fillRect(10, 10, 300, 300);
  ctx.fillRect(0, 0, 50, 50);
  // ctx.fillStyle = "#ffffff";
  // ctx.font = "18px Arial";
  // ctx.textAlign = "center";
  // ctx.textBaseline = "middle";

  // var x = size / 2;
  // var y = size / 2;

  // var textString = "I love MDN";
  // ctx.fillText(textString, x, y);
};

const scale = window.devicePixelRatio; // レティナでこの値を1にするとぼやけたcanvasになります
console.log("scale", scale);

const size = {
  width: 400,
  height: 200
};

const div = makeDiv(size);
document.body.append(div);

const canvas = makeCanvas(size);
// const ctx = canvas.getContext("2d");
// if (ctx) {
//   draw(ctx);
// }

document.body.append(canvas);
*/
