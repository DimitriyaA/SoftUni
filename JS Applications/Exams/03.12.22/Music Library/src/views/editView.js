import { getItemById, updateItem } from "../data/data.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const editTemp = (item, handler) => html`
<!-- Edit Page (Only for logged-in users) -->
<section id="edit">
    <div class="form">
        <h2>Edit Album</h2>
        <form @submit=${handler} class="edit-form" data-id=${item._id}>
            <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" .value=${item.singer}/>
            <input type="text" name="album" id="album-album" placeholder="Album" .value=${item.album}/>
            <input type="text" name="imageUrl" id="album-img" placeholder="Image url" .value=${item.imageUrl}/>
            <input type="text" name="release" id="album-release" placeholder="Release date" .value=${item.release}/>
            <input type="text" name="label" id="album-label" placeholder="Label" .value=${item.label}/>
            <input type="text" name="sales" id="album-sales" placeholder="Sales" .value=${item.sales}/>

            <button type="submit">post</button>
        </form>
    </div>
</section>
`;

export async function showEditView(ctx) {
  const id = ctx.params.id;
  const handler = createSubmitHandler(onSubmit);
  const data = await getItemById(id);
  render(editTemp(data, handler));
}

async function onSubmit(data, form) {
  const id = form.dataset.id;

  const { singer, album, imageUrl, release, label, sales } = data;
  if (!singer || !album || !imageUrl || !release || !label || !sales) {
    return alert('All fields needs to be filled!')
  }

  await updateItem(id, data);
  page.redirect(`/details/${id}`);
}