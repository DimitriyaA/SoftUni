import { html, render } from "../lib.js";
import { createSubmitHandler } from "../util.js";
import * as dataService from "../data/data.js";

const searchTemp = (handler, results) => html`
< !--Search Page(Only for logged -in users) -->
<section id="search">
    <h2>Search by Brand</h2>

    <form @submit=${handler} class="search-wrapper cf">
        <input id="#search-input" type="text" name="search" placeholder="Search here..." required />
        <button type="submit">Search</button>
    </form>
    </div>
    ${results && results?.length ? results.map(pair => resultTemp(pair)) : resultTemp()}
    </section>
`;

const resultTemp = (pair) => html`
            <ul class="card-wrapper">
                <!-- Display a li with information about every post (if any)-->
                 ${!!pair ?
        html`<li class="card">
                    <img src=${pair.imagrUrl} alt="travis" />
                    <p>
                        <strong>Brand: </strong><span class="brand">${pair.brand}</span>
                    </p>
                    <p>
                        <strong>Model: </strong><span class="model">${pair.model}</span>
                    </p>
                    <p><strong>Value:</strong><span class="value">${pair.value}</span>$</p>
                    <a class="details-btn" href=/details/${pair._id}>Details</a>
                </li>`
        :
        html`< h2 > There are no results found.</h2 >`
    }
                
            </ul>
    `;

export function showSearchView() {
    render(searchTemp(createSubmitHandler(onSearch)));
}

async function onSearch(data, form) {
    if (!data.search) {
        return alert('There are no results found!')
    }

    const result = await dataService.searchPair(data.search);
    render(searchTemp(createSubmitHandler(onSearch), result));
}