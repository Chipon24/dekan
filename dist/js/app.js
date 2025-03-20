(() => {
    "use strict";
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    fetch("/files/data/перший-пост.json").then((response => response.json())).then((data => {
        const post = data[0];
        document.querySelector(".blog__container").innerHTML += `\n            <article>\n                <h2>${post.title}</h2>\n                <p>${new Date(post.date).toLocaleDateString()}</p>\n                <p>${post.body}</p>\n            </article>\n        `;
    })).catch((error => console.error("Помилка завантаження JSON:", error)));
    window["FLS"] = true;
})();