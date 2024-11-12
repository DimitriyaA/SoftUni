import { html } from '../../node_modules/lit-html/lit-html.js'
import { createSubmitHandler } from '../util.js';
import * as gamesService from '../api/games.js';

const createTemplate = (onSubmit) => html`
    <section id="create">
          <div class="form">
            <h2>Add Product</h2>
            <form @submit=${onSubmit} class="create-form">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Product Name"
              />
              <input
                type="text"
                name="imageUrl"
                id="product-image"
                placeholder="Product Image"
              />
              <input
                type="text"
                name="category"
                id="product-category"
                placeholder="Category"
              />
              <textarea
                id="product-description"
                name="description"
                placeholder="Description"
                rows="5"
                cols="50"
              ></textarea>
              
              <input
                type="text"
                name="price"
                id="product-price"
                placeholder="Price"
              />

              <button type="submit">Add</button>
            </form>
          </div>
        </section>
`;

export function createPage(ctx){
    ctx.render(createTemplate(createSubmitHandler(ctx, onSubmit)));
}

async function onSubmit(ctx,data,event){
    if(Object.values(data).some(f => f == '')){
        return alert('All fields are required!')
    }
    // console.log(ctx)
    // console.log(data.title);
    await gamesService.create({
        name : data.name,
        category: data.category,
        price: data.price,
        imageUrl: data.imageUrl,
        description: data.description,
    })
    event.target.reset();
    ctx.page.redirect('/catalog')

}