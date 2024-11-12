import { html, render, page } from "../lib.js";
import * as dataService from "../data/data.js";
import { hasOwner } from "../utils.js";

const temp = (fact, owner) => html`
<!-- Details page -->
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${fact.imageUrl} alt="example1" />
        <p id="details-category">${fact.category}</p>
        <div id="info-wrapper">
            <div id="details-description">
                <p id="description">
                   ${fact.description}
                </p>
                <p id="more-info">
                    ${fact.moreInfo}
                </p>
            </div>

            <h3>Likes:<span id="likes">0</span></h3>

            <!--Edit and Delete are only for creator-->
            ${owner ?
        html`
            <div id="action-buttons">
                <a href=/edit/${fact._id} id="edit-btn">Edit</a>
                <a href="" @click=${onDelete} data-id=${fact._id} id="delete-btn">Delete</a>
                ` : ""}
               
        </div >
    </div >
</section >
    `;

export async function showDetailsView(ctx) {
    const id = ctx.params.id;
    const fact = await dataService.getFactById(id);
    const owner = hasOwner(fact._ownerId);
    render(temp(fact, owner));
}

async function onDelete(e) {
    e.preventDefault();
    const id = e.target.dataset.id;
    const confirmRes = confirm("delete this fact?");
    if (!confirmRes) {
        return;
    }
    await dataService.deleteFact(id);
    page.redirect("/dashboard");
}
