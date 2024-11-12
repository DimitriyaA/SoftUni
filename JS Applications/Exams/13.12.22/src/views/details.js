import { html,nothing } from '../../node_modules/lit-html/lit-html.js'
import * as gamesService from '../api/games.js'
import { addRender } from '../middleWares/render.js'

const detailsTemplate = (game,logged,onDelete) => html`

  <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="${game.imageUrl}" alt="example1" />
            <p id="details-title">${game.name}</p>
            <p id="details-category">
              Category: <span id="categories">${game.category}</span>
            </p>
            <p id="details-price">
              Price: <span id="price-number">${game.price}</span>$</p>
            <div id="info-wrapper">
              <div id="details-description">
                <h4>Bought: <span id="buys">0</span> times.</h4>
                <span
                  >${game.description}</span
                >
              </div>
            </div>
    

            <div id="action-buttons">
    <!-- Edit/Delete buttons ( Only for creator of this game )  -->
    ${logged
    
    ? game.isOwner ? html`    
        <a href="/edit/${game._id}" id="edit-btn">Edit</a>
        <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>        
    `
    : html `<a href="" id="buy-btn">Buy</a>`
    : nothing }
    
    
    
</div>



</section>
`;

export async function detailsPage(ctx){
    const gameId = ctx.params.id;
    const logged = ctx.user;
    
    const game = await gamesService.getById(gameId);
    // console.log(logged);
    // console.log(ctx.user);
    if(ctx.user){
        game.isOwner = ctx.user._id == game._ownerId;
    }
    ctx.render(detailsTemplate(game,onDelete));

    async function onDelete(){
       const choice = confirm(`Are you sure you want to delete ${game.name}?`);
       if(choice){
        await gamesService.deleteById(gameId);
        ctx.page.redirect('/catalog')
       }
    }
}
