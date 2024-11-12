import { login } from "../data/users.js";
import { updateNav } from "../data/util.js";
import { html, render, page } from "../lib.js";

const loginTemplate = () => html `
    <section id="login">
        <div class="form">
            <img class="border" src="./images/border.png" alt="" />
            <h2>Login</h2>
            <form class="login-form" @submit=${onLogin}>
                <input type="text" name="email" id="email" placeholder="email" />
                <input type="password" name="password" id="password" placeholder="password" />
                <button type="submit">login</button>
                <p class="message">
                    Not registered? <a href="/register">Create an account</a>
                </p>
            </form>
        </div>
    </section>
`;

export function showLogin(ctx) {
    render(loginTemplate());
};

async function onLogin(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const {email, password} = Object.fromEntries(formData);

    if (!email || !password) {
        return alert("Login error")
    }

    await login(email, password);
    updateNav();
    page.redirect("/")
}