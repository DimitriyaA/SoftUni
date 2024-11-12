import { page, html, render } from "../lib.js";
import { createSubmitHandler } from "../utils.js";
import * as dataService from "../data/data.js";

const temp = (handler) => html`
<!-- Create Page (Only for logged-in users) -->
<section id="create">
    <div class="form">
        <h2>Add Fact</h2>
        <form @submit = ${handler} class="create-form">
            <input type="text" name="category" id="category" placeholder="Category" />
            <input type="text" name="image-url" id="image-url" placeholder="Image URL" />
            <textarea id="description" name="description" placeholder="Description" rows="10" cols="50"  ></textarea>
            <textarea id="additional-info" name="additional-info" placeholder="Additional Info" rows="10"
                cols="50" }></textarea>
            <button type="submit">Add Fact</button>
        </form>
    </div>
</section>
`;

export function addNewFactView() {
    render(temp(createSubmitHandler(onSubmit)));
}

async function onSubmit(data, form) {
    if (!data.category || !data["image-url"] || !data.description || !data["additional-info"]) {
        //|| !data.imageUrl || !data.description || !data.moreInfo) {
        return alert("All fields are required!");
    }

    await dataService.createFact(data);
    page.redirect("/dashboard");
}