import { createItem } from "../data/data.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const createTemp = (handler) => html`
<!-- Create Page (Only for logged-in users) -->
    <section id="create">
        <div class="form">
            <h2>Add Event</h2>
            <form @submit=${handler} class="create-form">
                <input type="text" name="name" id="name" placeholder="Event" />
                <input type="text" name="imageUrl" id="event-image" placeholder="Event Image URL" />
                <input type="text" name="category" id="event-category" placeholder="Category" />


                <textarea id="event-description" name="description" placeholder="Description" rows="5"
                    cols="50"></textarea>

                <input type="text" name="date" id="date" placeholder="When?" />

                <button type="submit">Add</button>
            </form>
        </div>
    </section>
`;

export function showCreateView() {
  const handler = createSubmitHandler(onSubmit);
  render(createTemp(handler));
}

async function onSubmit(data, form) {
  const { name, imageUrl, category, description, date } = data;
  if (!name || !imageUrl || !category || !description || !date) {
    return alert('All fields needs to be filled!')
  }

  await createItem(data);
  page.redirect('/dashboard');
}

