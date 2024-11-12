import { getItemById, updateItem } from "../data/data.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const editTemp = (item, handler) => html`
<!-- Edit Page (Only for logged-in users) -->
<section id="edit">
    <div class="form">
        <h2>Edit item</h2>
        <form @submit=${handler} class="edit-form">
            <input type="text" name="brand" id="shoe-brand" placeholder="Brand" .value=${item.brand}/>
            <input type="text" name="model" id="shoe-model" placeholder="Model" .value=${item.model}/>
            <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url" .value=${item.imageUrl}/>
            <input type="text" name="release" id="shoe-release" placeholder=".value=${item.release}" />
            <input type="text" name="designer" id="shoe-designer" placeholder="Designer" .value=${item.designer}/>
            <input type="text" name="value" id="shoe-value" placeholder="Value" .value=${item.value}/>

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
  const { brand, model, imageUrl, release, designer, value } = data;
  if (!brand || !model || !imageUrl || !release || !designer || !value) {
    return alert('All fields needs to be filled!');
  }

  await updateItem(id, data);
  page.redirect(`/details/${id}`);
}