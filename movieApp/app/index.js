import { App } from "/movieApp/app/App.js";
import api from "/movieApp/app/helpers/helpers/api.js";

document.addEventListener("DOMContentLoaded", App);
window.addEventListener("hashchange", () => {
    api.page = 1;
    App();
});