import { addingLike, alreadyLikedByUser, getsolutionById, likeCount } from "../data/solutions.js";
import { getUserData } from "../data/util.js";
import { html, render, page } from "../lib.js";

const detailsTemplate = (solutionsData, isOwner, hasUser, likeCounter, userLiked) => html`
    <section id="details">
        <div id="details-wrapper">
            <img id="details-img" src=${solutionsData.imageUrl} alt="example1" />
            <div>
                <p id="details-type">${solutionsData.type}</p>
                <div id="info-wrapper">
                    <div id="details-description">
                        <p id="description">${solutionsData.description}</p>
                        <p id="more-info">${solutionsData.learnMore}</p>
                    </div>
                 </div>
                <h3>Like Solution:<span id="like">${likeCounter}</span></h3>

                ${hasUser ? divContainer(isOwner, solutionsData, userLiked) : null}

            </div>
        </div>
    </section>`;

const divContainer = (isOwner, solutionsData, userLiked) => html`
    <div id="action-buttons">
        ${isOwner ? editAndDeleteBtns(solutionsData) : !userLiked ? likeBtn() : null}
    </div>`;

const editAndDeleteBtns = (solutionsData) => html`
    <a href="/edit/${solutionsData._id}" id="edit-btn">Edit</a>
    <a href="/delete/${solutionsData._id}" id="delete-btn">Delete</a>
`;

const likeBtn = () => html`
    <a href="javascript:void(0)" id="like-btn" @click=${onLike} >Like</a>
`;


let context = null;
export async function showDetails(ctx) {
    context = ctx;
    const id = context.params.id;

    const requests = [
        getsolutionById(id),
        likeCount(id)
    ]

    const user = getUserData();

    if (user) {
        requests.push(alreadyLikedByUser(id, user._id))
    }

    const [solutionsData, likeCounter, userLiked] = await Promise.all(requests);

    const hasUser = !!user;
    const isOwner = hasUser && user._id == solutionsData._ownerId;

    render(detailsTemplate(solutionsData, isOwner, hasUser, likeCounter, userLiked));
};

async function onLike(event) {
    event.preventDefault();
    const id = context.params.id;
    await addingLike(id);
    page.redirect(`/details/${id}`)
};


