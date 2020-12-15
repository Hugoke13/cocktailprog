class Header {
  constructor(holder, headerTitle, headerTagLine) {
    this.holder = holder;
    this.headerTitle = headerTitle;
    this.headerTagLine = headerTagLine;
    this.init();
  }
  init() {
    this.holder.insertAdjacentHTML(
      "beforeend",
      `
        <header>
            <h1>${this.headerTitle} | ${this.headerTagLine}</h1>
        </header>
      `
    );
  }
}

export default Header;
