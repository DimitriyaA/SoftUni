// src/views/createView.js
import { html } from "../../../node_modules/lit-html/lit-html.js";
import { createSolution } from '../api/api.js';

const createTemplate = (onSubmit) => html`
<section id="create">
    <div class="form">
        <img class="border" src="./images/border.png" alt="" />
        <h2>Add Solution</h2>
        <form class="create-form">
            <input type="text" name="type" id="type" placeholder="Solution Type" />
            <input type="text" name="image-url" id="image-url" placeholder="Image URL" />
            <textarea id="description" name="description" placeholder="Description" rows="2" cols="10"></textarea>
            <textarea id="more-info" name="more-info" placeholder="more Info" rows="2" cols="10"></textarea>
            <button type="submit">Add Solution</button>
        </form>
    </div>
</section>
`;

export const createView = (ctx) => {
    const onSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const title = formData.get('title').trim();
        const description = formData.get('description').trim();

        if (title == '' || description == '') {
            return alert('All fields are required!');
        }

        await createSolution({ title, description });
        ctx.page.redirect('/dashboard');
    };

    ctx.render(createTemplate(onSubmit));
};