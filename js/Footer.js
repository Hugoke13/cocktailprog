class Footer {
  constructor(holder) {
    this.holder = holder;
    this.init();
  }
  init() {
    this.holder.insertAdjacentHTML(
      "beforeend",
      `
          <p>copyright 2020 - my Movie-app</p>
        `
    );
  }
}

export default Footer;
