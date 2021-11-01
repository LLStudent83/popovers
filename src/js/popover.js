export default class Popover {
  constructor(container) {
    this.container = container;
    this.button = document.querySelector('.button');
    this.button.addEventListener('click', (evt) => {
      this.onclick(evt);
    });
  }

  onclick(evt) {
    console.log(evt);
    const html = `<div class="popover">
    <h3 class="popover-header">Popover title</h3>
    <div class="popover-body">Я всплывающе окно</div>
  </div>`;
    this.container.insertAdjacentHTML('afterbegin', html);
    const popover = document.querySelector('.popover');

    const buttonLlocation = this.button.getBoundingClientRect();
    console.log(buttonLlocation);
    popover.style.left = `${0 - (150 - (buttonLlocation.width / 2))}px`;
    popover.style.top = '78px';
    setTimeout(() => { popover.remove(); }, 10000);
  }
}
