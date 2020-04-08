import * as PIXI from 'pixi.js';
import { DropShadowFilter } from 'pixi-filters';

(() => {
  const canvas = document.querySelector('canvas.ex01') as HTMLCanvasElement;
  if (!canvas) return;

  const canvasSize = 200;

  const app = new PIXI.Application({
    width: canvasSize,
    height: canvasSize,
    view: canvas,
    backgroundColor: 0xf0f0f0,
  });

  const shadowGraphics = new PIXI.Graphics()
    .clear()
    // .lineStyle(0.1, 0x008cc5, 0.1)
    .beginFill(0x008cc5, 0.2)
    .drawPolygon([10, 0, 50, 0, 40, 50, 0, 50])
    .beginHole()
    .drawPolygon([11, 1, 49, 1, 39, 49, 1, 49])
    .endHole()
    .endFill();

  shadowGraphics.x = 50;
  shadowGraphics.y = 50;

  shadowGraphics.filters = [
    new DropShadowFilter({
      alpha: 4,
      shadowOnly: true,
      color: 0x00c8ff,
      blur: 2,
      distance: 0,
    }),
  ];

  app.stage.addChild(shadowGraphics);

  const objectGraphics = new PIXI.Graphics()
    .beginFill(0x008cc5, 0.15)
    .drawPolygon([10, 0, 50, 0, 40, 50, 0, 50])
    .endFill();
  objectGraphics.x = 50;
  objectGraphics.y = 50;

  app.stage.addChild(objectGraphics);
})();
