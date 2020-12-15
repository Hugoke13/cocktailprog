import Cocktail from "./Cocktail";

class Cocktails {
    constructor(holder, data) {
        this.holder = holder;
        this.data = data;
        this.gridElement = this.init();
        this.renderCocktails();
    }
    init() {
        this.holder.insertAdjacentHTML(
            "beforeend",
            `
          <div class="cocktailGrid">
              
          </div>
        `
        );
        return this.holder.querySelector(".cocktailGrid");
    }
    renderCocktails = () => {
        this.gridElement.innerHTML = "";
        if (this.data.cocktails.length > 0) {
            this.data.cocktails.forEach(cocktail => {
                new Cocktail(this.gridElement, cocktail);
            });
        } else {
            this.gridElement.innerHTML = "nog geen cocktails !!!";
        }
    };
}

export default Cocktails;