import { getsolutionById, updateSolution } from "../data/solutions.js";
import { html, render, page } from "../lib.js";

const editTemplate = (solutionsData) => html `
    <section id="edit">
        <div class="form">
            <img class="border" src="./images/border.png" alt="" />
            <h2>Edit Solution</h2>
            <form class="edit-form" @submit=${onEdit}>
                <input type="text" name="type" id="type" placeholder="Solution Type" .value=${solutionsData.type} />
                <input type="text" name="image-url" id="image-url" placeholder="Image URL" .value=${solutionsData.imageUrl} />
                <textarea id="description" name="description" placeholder="Description" rows="2" cols="10" .value=${solutionsData.description} ></textarea>
                <textarea id="more-info" name="more-info" placeholder="more Info" rows="2" cols="10" .value=${solutionsData.learnMore} ></textarea>
                <button type="submit">Edit</button>
            </form>
        </div>
    </section>
`;

let context = null;
export async function showEdit(ctx) {
    context = ctx;
    const id = context.params.id;
    const solutionsData = await getsolutionById(id);
    render(editTemplate(solutionsData));
}

async function onEdit(event) {
    event.preventDefault();
    const id = context.params.id;

    const formData = new FormData(event.target);
    const {type, "image-url": imageUrl, description, "more-info": moreInfo } = Object.fromEntries(formData);

    if (!type || !imageUrl || !description || !moreInfo) {
        return alert("Edit error")
    }

    await updateSolution(id, type, imageUrl, description, moreInfo);
    page.redirect(`/details/${id}`)
}