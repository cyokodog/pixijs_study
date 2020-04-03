(() => {
  const el = document.querySelector(".pixelRatio");
  if (!el) return;
  el.textContent = String(window.devicePixelRatio);
})();
