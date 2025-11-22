// initialize-search.js
// Initializes SimpleJekyllSearch with a custom template, JSON source, and fuzzy search

/**
 * Script Overview:
 * Name: initialize-search.js
 * Purpose: Sets up SimpleJekyllSearch on the page, defining search input,
 *          results container, result template, and enabling fuzzy search.
 */

/**
 * Events / Callbacks
 * Description: Immediately invokes SimpleJekyllSearch with the following configuration:
 *   - searchInput: Element with ID 'search'
 *   - resultsContainer: Element with ID 'results-container'
 *   - json: JSON file providing search data
 *   - searchResultTemplate: Custom HTML template for displaying search results
 *   - noResultsText: Custom HTML displayed when no results are found
 *   - fuzzy: true, enabling fuzzy search functionality
 */
SimpleJekyllSearch({
    searchInput: document.getElementById('search'),
    resultsContainer: document.getElementById('results-container'),
    json: '{{ "pages/search.json" | relative_url }}',
    searchResultTemplate: '<div class="search-result columns has-text-centered" id="blog-card">< div class= "column is-one-third" ><div class="image is-16by9" style="background-image: url({image});"></div></div><a href="{url}"><div class="column has-text-left"><h1 class="title is-size-4-touch">{title}</h1><div class="content has-text-grey">{content}<hr class="has-background-grey"><span class="has-text-grey">Published on <span class="has-text-weight-semibold">{date}</span></span><i class="fas fa-clock"></i><span class="has-text-weight-semibold">{readtime} min</span> read</div></div></a></div >',
    noResultsText: '<div class="subtitle has-text-centered is-uppercase">No Results Found</div><hr class="has-background-black" style="margin: 0.5rem 5rem 2.5rem 5rem">',
    fuzzy: true,
});
