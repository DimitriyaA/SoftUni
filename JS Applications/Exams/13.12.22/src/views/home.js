import { html } from '../../node_modules/lit-html/lit-html.js'

import * as gamesService from '../api/games.js';

const homeTemplate = (games) => html`
<section id="home">
          <img
            src="./images/beauty-g0d19af267_1920-removebg.png"
            alt="home"
          />
          <h2>Looking for the best beauty products?</h2>
          <h3>You are in the right place!</h3>
        </section>
`;
const previewTemplate = (game) => html`
<!-- Display div: with information about every game (if any) -->
<!-- <div class="game">
                    <div class="image-wrap">
                        <img src=${game.imageUrl}>
                    </div>
                    <h3>${game.title}</h3>
                    <div class="rating">
                        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                    </div>
                    <div class="data-buttons">
                        <a href="/details/${game._id}" class="btn details-btn">Details</a>
                    </div>
                </div> -->
                `
export async function homePage(ctx){
    const games = await gamesService.getRecent(); 
    ctx.render(homeTemplate(games));
}