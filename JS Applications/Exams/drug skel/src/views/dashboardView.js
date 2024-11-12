import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { renderer } from '../utility/render.js';

const temp = (items) => html`
    
`;

const cardTemp = (item) => html`
    
`;

export async function showDashboardView() {
    const items = await dataService.getAll();

    renderer(temp(items));
}

