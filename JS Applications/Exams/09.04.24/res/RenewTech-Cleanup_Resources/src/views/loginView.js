// src/views/loginView.js
import { html } from '../../../node_modules/lit-html/lit-html.js';

//import { login } from '../api/api.js';

const loginTemplate = (onSubmit) => html`
<section id="login">
<div class="form">
    <img class="border" src="./images/border.png" alt="" />
    <h2>Login</h2>
    <form class="login-form">
        <input type="text" name="email" id="email" placeholder="email" />
        <input type="password" name="password" id="password" placeholder="password" />
        <button type="submit">login</button>
        <p class="message">
            Not registered? <a href="#">Create an account</a>
        </p>
    </form>
</div>
</section>
`;

export const loginView = (ctx) => {
    const onSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();

        if (email == '' || password == '') {
            return alert('All fields are required!');
        }

        await login(email, password);
        ctx.setUserNav();
        ctx.page.redirect('/');
    };

    ctx.render(loginTemplate(onSubmit));
};
