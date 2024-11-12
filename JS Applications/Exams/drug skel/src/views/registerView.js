import { html } from '../../node_modules/lit-html/lit-html.js';
import { renderer } from '../utility/render.js';
import {createSubmitHandler} from '../utility/submiter.js';
import { userService } from '../service/userService.js';
import { goTo } from '../utility/goTo.js';
import { updateNav } from '../utility/updateNav.js'

const temp = (handler) => html`
`;

export function showRegisterView() {
    renderer(temp(createSubmitHandler(onSubmit)));
}

async function onSubmit(data, formRef) {
    //const {email, password, rePass = data['re-password']} = data;
    //if (!email || !password || rePass !== password) {
        //return alert('Oops');
    //}

    //await userService.register({email, password});
    updateNav();
    goTo('/');
    formRef.reset();
}
