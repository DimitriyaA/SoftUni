// src/views/editView.js
import { html } from "../../../node_modules/lit-html/lit-html.js";
import { getSolutionById, editSolution } from '../api/api.js';

const editTemplate = (solution, onSubmit) => html`
<section id="edit">
    <div class="form">
        <img class="border" src="./images/border.png" alt="" />
        <h2>Edit Solution</h2>
        <form class="edit-form">
            <input type="text" name="type" id="type" placeholder="Solution Type" />
            <input type="text" name="image-url" id="image-url" placeholder="Image URL" />
            <textarea id="description" name="description" placeholder="Description" rows="2" cols="10"></textarea>
            <textarea id="more-info" name="more-info" placeholder="more Info" rows="2" cols="10"></textarea>
            <button type="submit">Edit</button>
        </form>
    </div>
</section>
`;

export const editView = async (ctx) => {
    const solution = await getSolutionById(ctx.params.id);
    const onSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const title = formData.get('title').trim();
        const description = formData.get('description').trim();

        if (title == '' || description == '') {
            return alert('All fields are required!');
        }

        await editSolution(ctx.params.id, { title, description });
        ctx.page.redirect(`/details/${ctx.params.id}`);
    };

    ctx.render(editTemplate(solution, onSubmit));
};
