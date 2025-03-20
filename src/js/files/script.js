// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

fetch('content/posts/перший-пост.json')
    .then(response => response.json())
    .then(data => {
        const post = data[0];
        document.querySelector(".blog__container").innerHTML += `
            <article>
                <h2>${post.title}</h2>
                <p>${new Date(post.date).toLocaleDateString()}</p>
                <p>${post.body}</p>
            </article>
        `;
    })
    .catch(error => console.error("Помилка завантаження JSON:", error));