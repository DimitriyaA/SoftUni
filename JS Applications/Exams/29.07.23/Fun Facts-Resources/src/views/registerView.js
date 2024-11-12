import { page, html, render } from "../lib.js";
import { createSubmitHandler, updateNav } from "../utils.js";
import * as userService from "../data/user.js"

const temp = (handler) => html`
<!-- Register Page (Only for Guest users) -->
<section id="register">
    <div class="form">
        <h2>Register</h2>
        <form @submit=${handler} class="register-form"> 
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
            <button type="submit">register</button>
            <p class="message">Already registered? <a href="/login">Login</a></p>
        </form>
    </div>
</section>
`;

export function showRegisterView() {
    render(temp(createSubmitHandler(onSubmit))); //получава фунцията, която реално ще обработи данните; като резултатът е функция, която не се извиква към момента, реално извикваме на 10 ред
}

async function onSubmit(data, fornRef) {
    if (!data.email || !data.password || data.password !== data["re-password"]) {
        return alert("All fields are required!");
    }

    await userService.register(data.email, data.password);
    updateNav();
    page.redirect("/");
}