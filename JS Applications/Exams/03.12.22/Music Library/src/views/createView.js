import { createItem } from "../data/data.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const createTemp = (handler) => html`
<!-- Create Page (Only for logged-in users) -->
<section id="create">
    <div class="form">
        <h2>Add Album</h2>
        <form @submit=${handler} class="create-form">
            <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
            <input type="text" name="album" id="album-album" placeholder="Album" />
            <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
            <input type="text" name="release" id="album-release" placeholder="Release date" />
            <input type="text" name="label" id="album-label" placeholder="Label" />
            <input type="text" name="sales" id="album-sales" placeholder="Sales" />

            <button type="submit">post</button>
        </form>
    </div>
</section>

`;

export function showCreateView() {
  const handler = createSubmitHandler(onSubmit);
  render(createTemp(handler));
}

async function onSubmit(data, form) {
  const { singer, album, imageUrl, release, label, sales } = data;
  if (!singer || !album || !imageUrl || !release || !label || !sales) {
    return alert('All fields needs to be filled!')
  }

  await createItem(data);
  page.redirect('/dashboard');
}

