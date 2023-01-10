import { Loader } from "/movieApp/app/components/loader.js";
import { Header } from "/movieApp/app/components/header.js";
import { Main } from "/movieApp/app/components/Main.js";
import { Router } from "/movieApp/app/components/Router.js";
import { infiniteScroll } from "/movieApp/app/helpers/infiniteScroll.js";
import { Banner } from "/movieApp/app/components/Banner.js";

export function App() {
    const $root = document.getElementById("root");

    $root.innerHTML = null;

    $root.appendChild(Header());
    $root.appendChild(Banner());
    $root.appendChild(Main());
    $root.appendChild(Loader());

    Router();
    infiniteScroll();
}

