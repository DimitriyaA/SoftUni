import { delItem, getItemById } from "../data/data.js";
import { html, render, page } from "../lib.js";
import { isOwner } from "../util.js";

const detailsTemp = (item, hasOwner) => html`
<!-- Details page -->
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${item.imageUrl} alt="example1" />
        <p id="details-title">${item.title}</p>
        <p id="details-category">
            Category: <span id="categories">${item.category}</span>
        </p>
        <p id="details-salary">
            Salary: <span id="salary-number">${item.salary}</span>
        </p>
        <div id="info-wrapper">
            <div id="details-description">
                <h4>Description</h4>
                <span>${item.description}</span>
            </div>
            <div id="details-requirements">
                <h4>Requirements</h4>
                <span>${item.requirements}</span>
            </div>
        </div>
        
        <p>Applications: <strong id="applications">1</strong></p>

        <!--Edit and Delete are only for creator-->
        ${hasOwner ? html`
            <div id="action-buttons">
            <a href="/edit/${item._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} data-id=${item._id} href="" id="delete-btn">Delete</a>
           </div>` : ""
  }
  <!--Bonus - Only for logged-in users ( not authors )-->
  <a href="" id="apply-btn">Apply</a>
</div>
</div>
</section>
`;

export async function showDetailsView(ctx) {
  const id = ctx.params.id;
  const data = await getItemById(id);
  const hasOwner = isOwner(data._ownerId);
  render(detailsTemp(data, hasOwner));
}

async function onDelete(event) {
  event.preventDefault();
  const isDel = confirm("Delete item?");
  const id = event.target.dataset.id;
  if (!isDel) {
    return;
  }
  await delItem(id);
  page.redirect("/dashboard");
}