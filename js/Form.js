class Form {
    constructor(holder, data) {
        this.holder = holder;
        this.data = data;
        this.formEl = this.init();
        this.getCocktails = new CustomEvent("getCocktails");
        this.setUpEvents();
    }
    init() {
        this.holder.insertAdjacentHTML(
            "beforeend",
            `
            <form action="">
                <input
                    type="text"
                    name="searchString"
                    id="searchString"
                    placeholder="Search for a specific cocktail eg: Margarita"
                />
                <input id="submitBtn" type="submit" value="search" />
            </form>
        `
        );
        return this.holder.querySelector("form");
    }
    setUpEvents() {
        this.formEl.addEventListener("submit", this.getData);
    }
    getData = (e) => {
        e.preventDefault();
        const val = this.formEl.querySelector("#searchString").value;
        fetch(
                "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + val
            )
            .then((drinks) => drinks.json())
            .then((data) => {

                this.data.cocktails = data.drinks;
                dispatchEvent(this.getCocktails)
            })
            .catch(console.log("dit drankje bestaat niet !!!"));
    };
}

export default Form;