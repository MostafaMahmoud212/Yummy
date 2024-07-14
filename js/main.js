import { HtmlFunctional, HtmlValidation } from "./functional.js";
import { inputValidator } from "./Validator.js";
import { API_Fetcher } from "./API_Fetcher.js";

const api_fetcher = new API_Fetcher()
const html_handler = new HtmlFunctional('Page-content','loader',api_fetcher)
const validator =  new inputValidator("nameInput","emailInput","phoneInput","ageInput","passwordInput","repasswordInput")
const html_validator = new HtmlValidation (validator)

function initializeSearch() {
  html_handler.SerachInitialization();
}
function initializeCategories() {
  api_fetcher.Getter.getAllMealsByCategory((data) => {
    html_handler.category(data);
  });
}
function initializeAreas() {
  api_fetcher.Getter.getAreas((data) => {
    html_handler.AreaHandler(data);
  });
}
function initializeIngredients() {
  api_fetcher.Getter.getIngredients((data) => {
    html_handler.ingredientsHandler(data);
  });
}
function initializeContactUs() {
  html_handler.ContactUsInitialization();
}

// Functions in globals
window.initializeSearch = initializeSearch;
window.initializeCategories = initializeCategories;
window.initializeAreas = initializeAreas;
window.initializeIngredients = initializeIngredients;
window.initializeContactUs = initializeContactUs;
window.html_handler = html_handler;
window.api_fetcher = api_fetcher;
window.html_validator = html_validator;

api_fetcher.Getter.getAllMeals((data) => {
	html_handler.allMeals(data)
})