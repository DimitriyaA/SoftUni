import { html } from '../../node_modules/lit-html/lit-html.js'

import * as gamesService from '../api/games.js';


const catalogTemplate = (games) => html`
<h2>Products</h2>
        <section id="dashboard">

    ${games.length > 0 
    ?games.map(cardTemplate)
    : html`<h2>No products yet.</h2>`}

</section>
`;

const cardTemplate = (game) => html`
<div class="product">
            <img src="${game.imageUrl}" alt="example1" />
            <p class="title">${game.name}             
            </p>
            <p><strong>Price:</strong><span class="price">${game.price}</span>$</p>
            <a class="details-btn" href="/details/${game._id}">Details</a>
          </div>
`;

export async function catalogPage(ctx){
    const games = await gamesService.getAll();
    ctx.render(catalogTemplate(games));
}