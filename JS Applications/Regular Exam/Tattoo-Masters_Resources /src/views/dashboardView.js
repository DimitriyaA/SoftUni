import { getAllItems } from "../data/data.js";
import { html, render } from "../lib.js";

const dashboardTemplate = (data) => html`
    <h2>Collection</h2>
    <section id="tattoos">
    ${data.length ? dashboardDataTemp(data) : html`<h2 id="no-tattoo">Collection is empty, 
    be the first to contribute</h2>`}
`;

const dashboardDataTemp = (data) => html`
<section id="dashboard">
      <!-- Display a div with information about every post (if any)-->
     ${data.map(item => tattooTemp(item))}
</section>
`;

const tattooTemp = (data) => html`
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

export async function showDashboardView() {
    const data = await getAllItems();
    render(dashboardTemplate(data));
}