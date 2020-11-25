(() => {
  const canvas = document.querySelector('canvas.ex01') as HTMLCanvasElement;
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  if (!ctx) return;

  const canvasSize = 200;
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
  ctx.fillStyle = '#aaccff';
  ctx.font = `${canvasSize - 40}px Arial`;
  ctx.textBaseline = 'top';
  ctx.fillText('あ', 20, 40);
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
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // const scale = window.devicePixelRatio;
  // const scale = 2;

  const minScale = 2;
  const scale = window.devicePixelRatio < minScale ? minScale : window.devicePixelRatio;

  // 最初に要素のサイズを固定してから...
  const canvasSize = 200;
  canvas.width = canvasSize * scale;
  canvas.height = canvasSize * scale;

  // CSSで見た目のサイズを設定する
  // canvas.style.width = `${canvasSize}px`;
  // canvas.style.height = `${canvasSize}px`;

  canvas.style.backgroundColor = 'gray';

  // 拡大率を指定する
  ctx.scale(scale, scale);

  ctx.fillStyle = '#0055aa';
  ctx.fillRect(0, 0, canvasSize, canvasSize);

  const margin = 20;
  ctx.fillStyle = '#557799';
  ctx.fillRect(margin, margin, canvasSize - margin * 2, canvasSize - margin * 2);

  ctx.fillStyle = '#aaccff';
  ctx.font = `${canvasSize - margin * 2}px Arial`;
  ctx.textBaseline = 'top';

  ctx.fillText('ぴ', margin, margin * 2);

  const distCanvas = document.querySelector('canvas.ex03-3-dist') as HTMLCanvasElement;
  if (!distCanvas) return;
  var distCtx = distCanvas.getContext('2d');
  if (!distCtx) return;

  distCanvas.style.backgroundColor = 'red';

  const rawMargin = 20 * scale;
  const rawSize = canvasSize * scale;
  const targetSize = rawSize - rawMargin * 2;

  const sx = rawMargin;
  const sy = rawMargin;
  const sWidth = targetSize;
  const sHight = targetSize;

  const dx = 0;
  const dy = 0;
  const dWith = targetSize;
  const dHight = targetSize;

  distCanvas.width = dWith;
  distCanvas.height = dHight;

  distCtx.drawImage(
    canvas,

    sx,
    sy,
    sWidth,
    sHight,

    dx, //srcCanvasX,
    dy, //srcCanvasY,
    dWith, //srcCanvasWidth,
    dHight, //srcCanvasHeight,
    // distCanvasX,
    // distCanvasY,
    // distWidth,
    // distHeight,
  );

  // distCanvas.style.width = `${canvasSize - 20 * 2}px`;
  // distCanvas.style.height = `${canvasSize - 20 * 2}px`;

  console.log('ok');
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
