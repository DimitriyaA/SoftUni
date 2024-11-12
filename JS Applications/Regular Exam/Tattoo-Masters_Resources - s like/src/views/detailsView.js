import { deleteItem, getItemById } from "../data/data.js";
import { getLikesByTattooId, likeTattoo } from "../data/like.js";
import { html, page, render } from "../lib.js";
import { getUserData } from "../utils.js";

const detailsTemplate = (data, likes, hasUser, hasLiked, isOwner, onLike, onDelete) => html`
<section id="details">
<div id="details-wrapper">
    <img id="details-img" src=${data.imageUrl} alt="example1" />
    <div>
        <div id="info-wrapper">
            <p id="details-type">${data.type}</p>
            <div id="details-description">
                <p id="user-type">${data.userType}</p>
                <p id="description">
                  ${data.description}
                </p>
            </div >
  <h3>Like tattoo:<span id="like">${likes}</span></h3>
                
                ${hasUser ? html`
                <div id="action-buttons">
                ${isOwner ? html`
                <a href="/edit/${data._id}" id="edit-btn">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>`
      : null}

                    ${hasLiked ? null : html`
                    <a @submit=${onLike} href="javascript:void(0)" id="like-btn">Like</a>`}
                </div>
                ` : null
  }
            </div >
        </div >
    </section > `;


export async function detailsView(ctx) {
  const id = ctx.params.id;

  const [data, likesInfo] = await Promise.all([
    getItemById(id),
    getLikesByTattooId(id)
  ]);

  const userData = getUserData();

  const isOwner = userData?._id == data._ownerId;
  const hasLiked = likesInfo.hasLiked || isOwner;

  render(detailsTemplate(data, likesInfo.likes, Boolean(userData), hasLiked, isOwner, onLike, onDelete));

  async function onLike() {
    await likeTattoo(id);

    page.redirect('/dashboard/' + id);
  }

  async function onDelete() {
    let choice = confirm('Are you sure?');

    if (!choice) {
      return;
    }

    await deleteItem(id);
    page.redirect('/dashboard');
  }
}