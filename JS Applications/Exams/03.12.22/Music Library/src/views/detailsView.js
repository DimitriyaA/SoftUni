import { delItem, getItemById } from "../data/data.js";
import { html, render, page } from "../lib.js";
import { isOwner } from "../util.js";

const detailsTemp = (item, hasOwner) => html`
<section id="details">
        <div id="details-wrapper">
            <p id="details-title">Album Details</p>
            <div id="img-wrapper">
                <img src=${item.imageUrl} alt="example1" />
            </div>
            <div id="info-wrapper">
                <p><strong>Band:</strong><span id="details-singer">${item.singer}</span></p>
                <p>
                    <strong>Album name:</strong><span id="details-album">${item.album}</span>
                </p>
                <p><strong>Release date:</strong><span id="details-release">${item.release}</span></p>
                <p><strong>Label:</strong><span id="details-label">${item.label}</span></p>
                <p><strong>Sales:</strong><span id="details-sales">${item.sales}</span></p>
            </div>
            <div id="likes">Likes: <span id="likes-count">0</span></div>

          <!--Edit and Delete are only for creator-->
          ${hasOwner ? html`
              <div id="action-buttons">
              
              <a href="/edit/${item._id}" id="edit-btn">Edit</a>
              <a @click=${onDelete} data-id=${item._id} href="" id="delete-btn">Delete</a>
             </div>` : ""
  }

  <a href="" id="like-btn">Like</a
                             
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