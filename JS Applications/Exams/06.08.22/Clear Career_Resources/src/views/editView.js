import { getItemById, updateItem } from "../data/data.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const editTemp = (item, handler) => html`
<!-- Edit Page (Only for logged-in users) -->
<section id="edit">
    <div class="form">
        <h2>Edit Offer</h2>
        <form @submit=${handler} class="edit-form">
            <input type="text" name="title" id="job-title" placeholder="Title" .value=${item.title}/>
            <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" .value=${item.imageUrl}/>
            <input type="text" name="category" id="job-category" placeholder="Category" .value=${item.category}/>
            <textarea id="job-description" name="description" placeholder="Description" rows="4"
                cols="50" .value=${item.description}></textarea>
            <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4"
                cols="50" .value=${item.requirements}></textarea>
            <input type="text" name="salary" id="job-salary" placeholder="Salary" .value=${item.salary}/>

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

  const { title, imageUrl, category, description, requirements, salary } = data;
  if (!title || !imageUrl || !category || !description || !requirements || !salary) {
    return alert('All fields needs to be filled!')
  }

  await updateItem(id, data);
  page.redirect(`/details/${id}`);
}