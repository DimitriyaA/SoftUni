import { getAllItems } from "../data/data.js";
import { html, render } from "../lib.js";

const dashboardTemplate = (data) => html`
<section id="dashboard">
    <h2>Job Offers</h2>
${data.length ? dashboardDataTemp(data) : html`<h2>No offers yet.</h2>`}
`
const dashboardDataTemp = (data) => html`

      <!-- Display a div with information about every post (if any)-->
     ${data.map(item => itemTemp(item))}
</section>
`;

const itemTemp = (data) => html`
<div class="offer">
        <img src=${data.imageUrl} alt="./images/example3.png" />
        <p>
            <strong>Title: </strong><span class="title">${data.title}</span>
        </p>
        <p><strong>Salary:</strong><span class="salary">${data.salary}</span></p>
        <a class="details-btn" href="/details/${data._id}">Details</a>
    </div>
`;

export async function showDashboardView() {
  const data = await getAllItems();
  render(dashboardTemplate(data));
}