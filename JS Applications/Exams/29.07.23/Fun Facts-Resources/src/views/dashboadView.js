import { html, render } from "../lib.js";
import { getAllFacts } from "../data/data.js";

const temp = (facts) => html`
<!-- Dashboard page -->
<h2>Fun Facts</h2>
<section id="dashboard">
    <!-- Display a div with information about every post (if any)-->
    ${facts.map(fact => factTemp(fact))}
    </section>
<!-- Display an h2 if there are no posts -->
${facts.length === 0 ? html`<h2>No Fun Facts yet.</h2>` : ""}
`;

const factTemp = (fact) => html`
<div class="fact">
<img src=${fact.imageUrl} alt="example1" />
<h3 class="category">${fact.category}</h3>
<p class="description">${fact.moreInfo}</p>
<a class="details-btn" href=/details/${fact._id}>More Info</a>
</div>
`;

export async function showDashboardView() {
    const facts = await getAllFacts();

    render(temp(facts));
}