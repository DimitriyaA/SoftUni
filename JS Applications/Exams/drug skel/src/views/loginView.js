import { html } from '../../node_modules/lit-html/lit-html.js';
import { userService } from '../service/userService.js';
import { goTo } from '../utility/goTo.js';
import { renderer } from '../utility/render.js';
import { createSubmitHandler } from '../utility/submiter.js';
import { updateNav } from '../utility/updateNav.js';

const temp = (handler) => html`
`;

export function showLoginView() {
    renderer(temp(createSubmitHandler(onSubmit)));
}

async function onSubmit(data, formRef) {
    // const {email, password} = data;
    // if (!email || !password) {
    //     return alert('Oops');
    // }

    // await userService.login({email, password})
    updateNav();
    goTo('/');
    formRef.reset();
}
