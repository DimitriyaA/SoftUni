import { register } from "../data/users.js";
import { html, render } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const registerTemplate = (onRegisterBtn) => html`
<!-- Register Page (Only for Guest users) -->
<section id="register">
    <div class="form">
        <h2>Register</h2>
        <form @submit=${onRegisterBtn} class="login-form">
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
            <button type="submit">login</button>
            <p class="message">Already registered? <a href="/login">Login</a></p>
        </form>
    </div>
</section>
`;

export function showRegisterView({ email, password }, form) {
  render(registerTemplate(createSubmitHandler(onRegisterBtn)));
}

async function onRegisterBtn(data, form) {
  if (!data.email || !data.password) {
    return alert("All fields are required!");
  }

  const trimmedPassword = data.password.trim();
  const trimmedRePassword = data["re-password"].trim();

  if (trimmedPassword !== trimmedRePassword) {
    const error = "Passwords don't match!";
    return alert(error);
  }

  register(data.email, trimmedPassword);
}