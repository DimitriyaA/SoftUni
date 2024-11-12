import { getAllItems } from "../data/data.js";
import { html, render } from "../lib.js";

const dashboardTemplate = (data) => html`
<!-- Display a li with information about every post (if any)-->
<h2>Albums</h2>
${data.length ? dashboardDataTemp(data) : html` <h2>There are no albums added yet.</h2>`}
`
const dashboardDataTemp = (data) => html`
<section id="dashboard">
      <!-- Display a div with information about every post (if any)-->
     ${data.map(item => itemTemp(item))}
</section>
`;

const itemTemp = (data) => html`
<li class="card">
<img src=${data.imageUrl} alt="travis" />
<p>
    <strong>Singer/Band: </strong><span class="singer">${data.singer}</span>
</p>
<p>
    <strong>Album name: </strong><span class="album">${data.album}</span>
</p>
<p><strong>Sales:</strong><span class="sales">2${data.sales}</span></p>
<a class="details-btn" href="/details/${data._id}">Details</a>
</li>
`;

export async function showDashboardView() {
  const data = await getAllItems();
  render(dashboardTemplate(data));
}