import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { goTo } from '../utility/goTo.js';
import { renderer } from '../utility/render.js';
import { createSubmitHandler } from '../utility/submiter.js';

const temp = (item, handler) => html`
    
`;

let id = null;
export async function showEditView(ctx) {
    id = ctx.params.id;
    const item = await dataService.getDetails(id);

    renderer(temp(item, createSubmitHandler(onSubmit)));
}

async function onSubmit(data, formRef) {
    // const {type, imageUrl = data['image-url'], description, learnMore = data['more-info']} = data;
    // if (!type || !imageUrl || !description || !learnMore) {
    //     return alert('Oops');
    // }

    // await dataService.editItem(id, {type, imageUrl, description, learnMore});
    goTo(`/details/${id}`);
    formRef.reset();
}
