import { getItemById, updateItem } from "../data/data.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../utils.js";

const editTemplate = (data, onEdit) => html`

<section id="edit">
        <div class="form">
            <h2>Edit tattoo</h2>
        <form @submit=${onEdit} class="edit-form">
            <input type="text" name="type" id="type" placeholder="Tattoo Type" .value=${data.type}/>
            <input type="text" name="image-url" id="image-url" placeholder="Image URL" .value=${data.imageUrl}/>
            <textarea id="description" name="description" placeholder="Description" rows="2" cols="10" .value=${data.description}></textarea>
            <select id="user-type" name="user-type" .value=${data.userType}>
                <option value="" disabled selected>Select your role</option>
                <option value="Tattoo Artist">Tattoo Artist</option>
                <option value="Tattoo Enthusiast">Tattoo Enthusiast</option>
                <option value="First Time in Tattoo">
                    First Time in Tattoo
                </option>
                <option value="Tattoo Collector">Tattoo Collector</option>
            </select>
            <button type="submit">Edit</button>
        </form>
    </div>
</section>
`;

export async function showEditView(ctx) {
  const id = ctx.params.id;

  const data = await getItemById(id);
  render(editTemplate(data, createSubmitHandler(onEdit)));

  async function onEdit({
    type,
    'image-url': imageUrl,
    description,
    'user-type': userType
  }) {

    if (!type || !imageUrl || !description || !userType) {
      return alert('All fields are required!');
    }

    await updateItem(id, {
      type,
      imageUrl,
      description,
      userType
    });

    page.redirect('/details/' + id);

  }
}