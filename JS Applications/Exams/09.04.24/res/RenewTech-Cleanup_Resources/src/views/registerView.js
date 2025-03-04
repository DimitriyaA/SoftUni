// src/views/registerView.js
import { html } from "../../../node_modules/lit-html/lit-html.js";

import { register } from '../api/api.js';

const registerTemplate = (onSubmit) => html`
    <section id="register">
    <div class="form">
        <img class="border" src="./images/border.png" alt="" />
        <h2>Register</h2>
        <form class="register-form">
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
            <button type="submit">register</button>
            <p class="message">Already registered? <a href="#">Login</a></p>
        </form>
    </div>
</section>
`;

export const registerView = (ctx) => {
    const onSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const repeatPass = formData.get('repeatPass').trim();

        if (email == '' || password == '' || repeatPass == '') {
            return alert('All fields are required!');
        }

        if (password != repeatPass) {
            return alert('Passwords don\'t match!');
        }

        await register(email, password);
        ctx.setUserNav();
        ctx.page.redirect('/');
    };

    ctx.render(registerTemplate(onSubmit));
};
