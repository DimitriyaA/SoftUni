import { html, render, page } from "../lib.js";
import * as dataService from "../data/data.js"
import { createSubmitHandler } from "../utils.js";

const temp = (handler, fact) => html`
<!-- Edit Page (Only for logged-in users) -->
    <section id="edit">
        <div class="form">
            <h2>Edit Fact</h2>
            <form @submit=${handler} class="edit-form">
                <input type="text" name="category" id="category" placeholder="Category" .value=${fact.category} />
                <input type="text" name="image-url" id="image-url" placeholder="Image URL" .value=${fact["image-url"]} />
                <textarea id="description" name="description" placeholder="Description" rows="10" cols="50" .value=${fact.description}></textarea>
                <textarea id="additional-info" name="additional-info" placeholder="Additional Info" rows="10"
                    cols="50" .value=${fact["additional-info"]} ></textarea>
                <button type="submit">Post</button>
            </form>
        </div>
    </section>
`;

let id = null;

export async function showEditView(ctx) {
    id = ctx.params.id;
    const fact = await dataService.getFactById(id);
    render(temp(createSubmitHandler(onSubmit), fact));
}

async function onSubmit(data, form) {
    if (!data.category || !data["image-url"] || !data.description || !data["additional-info"]) {
        //|| !data.imageUrl || !data.description || !data.moreInfo) {
        return alert("All fields are required!");
    }

    await dataService.updateFact(id, data);
    page.redirect(`/details/${id}`);
}
