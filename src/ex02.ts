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
