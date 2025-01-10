const preloaderDisplayTime = 100;

window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader-1');
    setTimeout(function () {
        preloader.style.display = 'none';
    }, preloaderDisplayTime);
});

document.addEventListener("DOMContentLoaded", function () {
    languages();
})

function languages() {
    const btn = document.getElementById('languageBtn');
    const spanish = document.getElementById('spanish');
    const english = document.getElementById('english');
    const french = document.getElementById('french');
    btn.addEventListener('click', () => {
        console.log("click");
    });
    spanish.addEventListener('click', () => {
        console.log("Español");
    });
    english.addEventListener('click', () => {
        console.log("English");
    });
    french.addEventListener('click', () => {
        console.log("Francais");
    });
}

document.getElementById("return").addEventListener("click", function() {
    const rootPath = `${window.location.origin}/`; // Root path of the site
    window.location.href = rootPath;
});