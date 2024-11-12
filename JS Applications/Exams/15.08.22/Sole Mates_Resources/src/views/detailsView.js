import { delItem, getItemById } from "../data/data.js";
import { html, render, page } from "../lib.js";
import { isOwner } from "../util.js";

const detailsTemp = (item, hasOwner) => html`
< !--Details page-- >
  <section id="details">
    <div id="details-wrapper">
      <p id="details-title">Shoe Details</p>
      <div id="img-wrapper">
        <img src=${item.imageUrl} alt="example1" />
      </div>
      <div id="info-wrapper">
        <p>Brand: <span id="details-brand">${item.brand}</span></p>
        <p>
          Model: <span id="details-model">${item.model}</span>
        </p>
        <p>Release date: <span id="details-release">${item.release}</span></p>
        <p>Designer: <span id="details-designer">${item.designer}</span></p>
        <p>Value: <span id="details-value">${item.value}</span></p>
      </div>
      
        <!--Edit and Delete are only for creator-->
        ${hasOwner ? html`
            <div id="action-buttons">
            <a href="/edit/${item._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} data-id=${item._id} href="" id="delete-btn">Delete</a>
           </div>` : ""
  }

    
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