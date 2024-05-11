const toggleTheme = document.getElementById("toggleTheme"); 
const rootHtml = document.documentElement;
const accordionHeaders = document.querySelectorAll(".accordion-header"); // Seleciona todos os elementos HTML que possuem a classe como o mesmo nome
const menuLinks = document.querySelectorAll(".menu-link");

function changeTheme(){ // Altera o tema da interface entre claro e escuro
    const currentTheme = rootHtml.getAttribute("data-theme");

    currentTheme === "dark" ? rootHtml.setAttribute("data-theme", "light") : rootHtml.setAttribute("data-theme", "dark");

    toggleTheme.classList.toggle("bi-sun");
    toggleTheme.classList.toggle("bi-moon-stars"); // bi-moon-stars não está no html e css, porém o boostrap está linkado no document do htmal
}

toggleTheme.addEventListener("click", changeTheme);


