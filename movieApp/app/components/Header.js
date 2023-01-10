import { Menu } from "/movieApp/app/components/Menu.js";
import { Logo } from "/movieApp/app/components/Logo.js";

export function Header(){
    const $header = document.createElement("header");
    $header.classList.add("header");
    $header.appendChild(Logo());
    $header.appendChild(Menu());
    return $header;
}