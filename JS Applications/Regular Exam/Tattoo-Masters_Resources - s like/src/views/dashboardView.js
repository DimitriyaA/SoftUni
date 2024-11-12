import { getAllItems } from "../data/data.js";
import { html, render } from "../lib.js";
import { tattooTemp } from "./partials/tattoo.js";

const dashboardTemp = (tattoos) => html`
<h2>Collection</h2>
    <section id="tattoos">
        ${tattoos.length ? tattoos.map(tattooTemp) : html`<h2 id="no-tattoo">Collection is empty, be the first to contribute</h2>`}
</section>`;

export async function dashboardView() {
    const tattoos = await getAllItems();
    render(dashboardTemp(tattoos));
}