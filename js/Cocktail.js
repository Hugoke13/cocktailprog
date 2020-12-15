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
    
              <h3> ${this.cocktailObject.strDrink}</h3>
                <p>-----------------------------------------------------------------</p>
                <p> ${this.cocktailObject.strInstructions} </p>
                <p>-----------------------------------------------------------------</p>
            </div>
            
          `
        );
    }
}

export default Cocktail;