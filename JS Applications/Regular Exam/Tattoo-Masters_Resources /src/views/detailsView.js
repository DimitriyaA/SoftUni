import { deleteItem, getItemById } from "../data/data.js";
import { html, render, page } from "../lib.js";
import { isOwner } from "../utils.js";

const detailsTemp = (item, hasOwner) => html`
<!-- Details page -->
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${item.imageUrl} alt="example1" />
        <div>
            <div id="info-wrapper">
                <p id="details-type">${item.type}</p>
                <div id="details-description">
                    <p id="user-type">${item.userType}</p>
                    <p id="description">
                    ${item.description}
                    </p>
                </div>
                <h3>Like tattoo:<span id="like">0</span></h3>
                <!--Edit and Delete are only for creator-->
                ${hasOwner ? html`
                    <div id="action-buttons">
                    <a href="/edit/${item._id}" id="edit-btn">Edit</a>
                    <a @click=${onDelete} data-id=${item._id} href="" id="delete-btn">Delete</a>
                   </div>` : ""
  }

 
    <a href="#" id="like-btn">Like</a>
                </div >
            </div >
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
  await deleteItem(id);
  page.redirect("/dashboard");
}