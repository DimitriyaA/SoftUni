import { createItem } from "../data/data.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const createTemp = (handler) => html`
<!-- Create Page (Only for logged-in users) -->
<section id="create">
    <div class="form">
        <h2>Create Offer</h2>
        <form @submit=${handler} class="create-form">
            <input type="text" name="title" id="job-title" placeholder="Title" />
            <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" />
            <input type="text" name="category" id="job-category" placeholder="Category" />
            <textarea id="job-description" name="description" placeholder="Description" rows="4"
                cols="50"></textarea>
            <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4"
                cols="50"></textarea>
            <input type="text" name="salary" id="job-salary" placeholder="Salary" />

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
  const { title, imageUrl, category, description, requirements, salary } = data;
  if (!title || !imageUrl || !category || !description || !requirements || !salary) {
    return alert('All fields needs to be filled!')
  }

  await createItem(data);
  page.redirect('/dashboard');
}

