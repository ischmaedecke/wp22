// console.log("PLEASE SAY THIS???");

// let squirrelTarget = document.querySelector("#squirrels");

// console.log(squirrelTarget);

// function squirrelCreator() {
//     console.log('YES!');
//     squirrelTarget.innerHTML += "<img src='https://img.texasmonthly.com/2021/10/Texas-Squirrels-Gone-Wild.jpg?auto=compress&crop=faces&fit=fit&fm=pjpg&ixlib=php-3.3.1&q=45'>";
// }

let menuItems = document.querySelector("#menu-items");

function toggleMenu () {
    // menuItems.style.display = "none";
    menuItems.classList.toggle("menu-hide");
}