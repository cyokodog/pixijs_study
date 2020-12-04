import * as PIXI from 'pixi.js';
import { OutlineFilter } from 'pixi-filters';

const updateStandardMaskSize = (x: number, y: number, mask: PIXI.Graphics) => {
  mask.clear();
  mask.beginFill(0xffffff, 0.1);
  const points = [
    new PIXI.Point(x + 10, y + 100),
    new PIXI.Point(x + 200, y + 120),
    new PIXI.Point(x + 200, y + 200),
    new PIXI.Point(x + 10, y + 180),
  ];
  mask.drawPolygon(points);
  mask.endFill();
};

(() => {
  const canvas = document.querySelector('canvas') as HTMLCanvasElement;
  if (!canvas) return;

  const app = new PIXI.Application({
    width: 1600,
    height: 500,
    view: canvas,
    backgroundColor: 0xeeeeff,
  });

  // app.stage.destroy();

  let container: PIXI.Container;
  container = new PIXI.Container();

  const $thickness = document.querySelector<HTMLInputElement>('.thickness');
  const $quality = document.querySelector<HTMLInputElement>('.quality');
  const $imageOutline = document.querySelector<HTMLInputElement>('.imageOutline');
  const $mask = document.querySelector<HTMLInputElement>('.mask');
  const $maskOutline = document.querySelector<HTMLInputElement>('.maskOutline');

  const addImage = (imageUrl: string, x: number) => {
    const sprite = PIXI.Sprite.from(imageUrl);

    const outline = new OutlineFilter(Number($thickness!.value), 0x0055ff, Number($quality!.value));
    outline.padding = 10;

    if ($imageOutline!.checked) {
      sprite.filters = [outline];
    }

    sprite.x = x;
    sprite.y = 100;

    const wrapper = new PIXI.Container();

    wrapper.addChild(sprite);
    container.addChild(wrapper);
    console.log($mask!.checked);
    if ($mask!.checked) {
      const mask = new PIXI.Graphics();
      // mask.position.x = 0;
      // mask.position.y = 0;
      updateStandardMaskSize(x, 100, mask);
      wrapper.mask = mask;
      if ($maskOutline!.checked) {
        wrapper.filters = [outline];
      }
    }
  };

  const draw = () => {
    container.removeChildren();

    // container.filters = [
    //   new OutlineFilter(Number($thickness!.value), 0x0055ff, Number($quality!.value)),
    // ];

    app.stage.addChild(container);

    // addImage('./images/sample3.png', 0);
    // addImage('./images/sample3.png', 368);
    // addImage('./images/sample2.png', 736);
    // addImage('./images/sample4.png', 1104);

    addImage('./images/sample1.png', 0);
    addImage('./images/sample2.png', 368);
    addImage('./images/sample3.png', 736);
    addImage('./images/sample4.png', 1104);

    console.log(container.height);
  };

  $thickness!.addEventListener('input', draw);
  $quality!.addEventListener('input', draw);

  $imageOutline!.addEventListener('change', draw);
  $mask!.addEventListener('change', draw);
  $maskOutline!.addEventListener('change', draw);

  draw();
})();
