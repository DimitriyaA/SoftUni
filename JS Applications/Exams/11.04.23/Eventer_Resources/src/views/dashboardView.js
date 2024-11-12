import { getAllItems } from "../data/data.js";
import { html, render } from "../lib.js";

const dashboardTemplate = (data) => html`
<h3 class="heading">Market</h3>
${data.length ? dashboardDataTemp(data) : html`<h4>No Events yet.</h4>`}
`
const dashboardDataTemp = (data) => html`
<section id="dashboard">
      <!-- Display a div with information about every post (if any)-->
     ${data.map(item => itemTemp(item))}
</section>
`;

const itemTemp = (data) => html`

<div class="event">
<img src=${data.imageUrl} alt="example1" />
<p class="title">
${data.name}
</p>
<p class="date">${data.date}</p>
<a class="details-btn" href="/details/${data._id}">Details</a>
</div>
`;

export async function showDashboardView() {
  const data = await getAllItems();
  render(dashboardTemplate(data));
}