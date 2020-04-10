const WIDTH = 750; // 设计稿尺寸
const setView = () => {
  document.documentElement.style.fontSize = (100 * window.screen.width) / WIDTH + 'px';
};
window.onorientationchange = setView;
setView();

export {};
