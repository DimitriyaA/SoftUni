import {
  deletePost,
  donation,
  getDonationByPostId,
  getMyDonationsByPostId,
  getPostById,
} from "../util.js";

import { html } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (
  post,
  isOwner,
  onDelete,
  donations,
  showDonationBtn,
  onDonate
) => html`
<section id="details-page">
            <h1 class="title">Post Details</h1>

            <div id="container">
                <div id="details">
                    <div class="image-wrapper">
                        <img src=${post.imageUrl
  } alt="Material Image" class="post-image">
                    </div>
                    <div class="info">
                        <h2 class="title post-title">${post.title}</h2>
                        <p class="post-description">Description: ${post.description
  }</p>
                        <p class="post-address">Address: ${post.address}</p>
                        <p class="post-number">Phone number: ${post.phone}</p>
                        <p class="donate-Item">Donate Materials: ${donations}</p>
                        <div class="btns">
                        <!--Edit and Delete are only for creator-->
                        ${isOwner
    ? html`<a href="/edit/${post._id}" class="edit-btn btn">Edit</a>
                                <a @click=${onDelete} href="javascript:void(0)" class="delete-btn btn">Delete</a>
                              </div> ` : ""
  }
                        

                        ${showDonationBtn
    ? html`
                                <!--Bonus - Only for logged-in users ( not authors )-->
                                <a @click=${onDonate} href="javascript:void(0)"class="donate-btn btn">Donate</a>
                              `
    : ""
  }
                           
                        </div>
                        </div>

                    </div>
                </div>
            
        </section>`;

export async function detailsView(ctx) {
  const userData = getUserData();

  let [post, donations, hasDonated] = await Promise.all([
    getPostById(ctx.params.id),
    getDonationByPostId(ctx.params.id),
    userData ? getMyDonationsByPostId(ctx.params.id, userData.id) : 0,
  ]);
  //console.log(donations, hasDonated);
  const isOwner = userData && userData.id == post._ownerId;
  let showDonationBtn =
    userData != null && isOwner == false && hasDonated == false;
  ctx.render(
    detailsTemplate(
      post,
      isOwner,
      onDelete,
      donations,
      showDonationBtn,
      onDonate
    )
  );

  async function onDelete() {
    const choice = confirm("Are you sure you want to delete this post?");

    if (choice) {
      await deletePost(ctx.params.id);
      ctx.page.redirect("/");
    }
  }
  async function onDonate() {

    await donation(ctx.params.id);
    donations = await getDonationByPostId(ctx.params.id);
    console.log(await getDonationByPostId(ctx.params.id));
    hasDonated = await getMyDonationsByPostId(ctx.params.id, userData.id)
    if (hasDonated != 0) {
      showDonationBtn = false
    }
    ctx.render(
      detailsTemplate(
        post,
        isOwner,
        onDelete,
        donations,
        showDonationBtn,
        onDonate
      )
    );

  }
}
