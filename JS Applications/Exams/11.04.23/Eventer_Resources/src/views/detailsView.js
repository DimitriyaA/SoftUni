import { delItem, getItemById } from "../data/data.js";
import { html, render, page } from "../lib.js";
import { isOwner } from "../util.js";

const detailsTemp = (item, hasOwner) => html`
<!-- Details page -->
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${item.imageUrl} alt="example1" />
        <p id="details-title">${item.name}</p>
        <p id="details-category">
            Category: <span id="categories">${item.category}</span>
        </p>
        <p id="details-date">
            Date:<span id="date">${item.date}</span></p>
        <div id="info-wrapper">
            <div id="details-description">
                <span>${item.description}</span>
            </div>

        </div>

        <h3>Going: <span id="go">0</span> times.</h3>

        <!--Edit and Delete are only for creator-->
        ${hasOwner ? html`
            <div id="action-buttons">
            <a href="/edit/${item._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} data-id=${item._id} href="" id="delete-btn">Delete</a>
           </div>` : ""
  }

  < !--Bonus - Only for logged -in users(not authors)-- >
    <a href="" id="go-btn">Going</a>
        </div >
    </div >
</section >
    
        </div >
    </div >
  </section >
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