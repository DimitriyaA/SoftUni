import { getAllItems } from "../data/data.js";
import { html, render } from "../lib.js";

const dashboardTemplate = (data) => html`
<h2>Collectibles</h2>
${data.length ? dashboardDataTemp(data) : html`<h2>There are no items added yet.</h2>`}
`
const dashboardDataTemp = (data) => html`
<section id="dashboard">
      <!-- Display a div with information about every post (if any)-->
     ${data.map(item => itemTemp(item))}
</section>
`;

const itemTemp = (data) => html`

<li class="card">
        <img src="./images/travis.jpg" alt="travis" />
        <p>
          <strong>Brand: </strong><span class="brand">${data.brand}</span>
        </p>
        <p>
          <strong>Model: </strong><span class="model">${data.model}</span>
        </p>
        <p><strong>Value:</strong><span class="value">${data.value}</span>$</p>
        <a class="details-btn" href="/details/${data._id}">Details</a>
      </li>

</div>
`;


export async function showDashboardView() {
  const data = await getAllItems();
  render(dashboardTemplate(data));
}