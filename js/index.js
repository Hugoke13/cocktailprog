import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import Cocktails from "./Cocktails";
const data = {
    cocktails: [],
    loading: false,
    cocktailDetail: {}
};

new Header(document.body, "Mijn cocktailapplicatie", " | ",
    "Vind hier je favoriete cocktails");
new Form(document.body, data);
const cocktails = new Cocktails(document.body, data);
window.addEventListener("getCocktails", Cocktails.renderCocktails);
new Footer(document.body);