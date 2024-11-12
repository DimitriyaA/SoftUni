import { getItemById, updateItem } from "../data/data.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const editTemp = (item, handler) => html`
      <!-- Edit Page (Only for logged-in users) -->
      <section id="edit">
          <div class="form">
              <h2>Edit Event</h2>
              <form @submit=${handler} class="edit-form">
                  <input type="text" name="name" id="name" placeholder="Event" .value=${item.name}/>
                  <input type="text" name="imageUrl" id="event-image" placeholder="Event Image" .value=${item.imageUrl}/>
                  <input type="text" name="category" id="event-category" placeholder="Category" .value=${item.category} />
  
  
                  <textarea id="event-description" name="description" placeholder="Description" rows="5"
                      cols="50" .value=${item.description}></textarea>
  
                  <label for="date-and-time">Event Time:</label>
                  <input type="text" name="date" id="date" placeholder="When?" .value=${item.date}/>
  
                  <button type="submit">Edit</button>
              </form >
          </div >
      </section >
  `;

export async function showEditView(ctx) {
  const id = ctx.params.id;
  const handler = createSubmitHandler(onSubmit);
  const data = await getItemById(id);
  render(editTemp(data, handler));
}

async function onSubmit(data, form) {
  const id = form.dataset.id;

  const { name, imageUrl, category, description, date } = data;
  if (!name || !imageUrl || !category || !description || !date) {
    return alert('All fields needs to be filled!')
  }

  await updateItem(id, data);
  page.redirect(`/ details / ${id} `);
}