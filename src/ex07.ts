import * as PIXI from 'pixi.js';
import { OutlineFilter } from 'pixi-filters';

(() => {
  const canvas = document.querySelector('canvas') as HTMLCanvasElement;
  if (!canvas) return;

  const app = new PIXI.Application({
    width: 1600,
    height: 400,
    view: canvas,
    backgroundColor: 0xf0f0f0,
  });

  // app.stage.destroy();

  let container: PIXI.Container;
  container = new PIXI.Container();

  const $thickness = document.querySelector<HTMLInputElement>('.thickness');
  const $quality = document.querySelector<HTMLInputElement>('.quality');

  const draw = () => {
    container.removeChildren();
    app.stage.addChild(container);

    const addImage = (imageUrl: string, x: number) => {
      const sprite = PIXI.Sprite.from(imageUrl);
      sprite.filters = [
        new OutlineFilter(Number($thickness!.value), 0x0055ff, Number($quality!.value)),
      ];
      sprite.x = x;
      container.addChild(sprite);
    };

    addImage('./images/sample1.png', 0);
    addImage('./images/sample2.png', 368);
    addImage('./images/sample3.png', 736);
    addImage('./images/sample4.png', 1104);
  };

  $thickness!.addEventListener('input', function () {
    draw();
  });
  $quality!.addEventListener('input', function () {
    draw();
  });

  draw();
})();
