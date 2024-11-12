import { html } from "../../lib.js"

export const tattooTemp = (data) => html`
    <div class="tattoo">
        <img src=${data.imageUrl} alt="example2" />
        <div class="tattoo-info">
            <h3 class="type">${data.type} </h3>
            <span>Uploaded by </span>
            <p class="user-type">${data.userType} </p>
            <a class="details-btn" href="/details/${data._id}">Learn More</a>
        </div>
    </div>
`;