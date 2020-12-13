class Cocktail {
    constructor(holder, cocktailObject) {
        this.holder = holder;
        this.cocktailObject = cocktailObject;
        this.init();
    }
    init() {
        this.holder.insertAdjacentHTML(
            "beforeend",
            `
            <div class="cocktail">
              ${this.cocktailObject.original_title}
            </div>
          `
        );
    }
}

export default Cocktail;