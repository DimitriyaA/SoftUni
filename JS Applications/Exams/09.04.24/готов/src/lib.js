import { html, render as renderer } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";

const root = document.querySelector("main");

function render(template) {
    renderer(template, root)
}

export {
    html,
    render,
    page
}