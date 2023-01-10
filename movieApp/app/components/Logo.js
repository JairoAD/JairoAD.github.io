export function Logo(){
    const $div = document.createElement("div");
    $div.innerHTML = `
    <img class ="tmdb-logo" src="/movieApp/app/assets/tmdb.svg" alt ="tmdb logo">
    `;
    $div.classList.add("logo");
    return $div;
}