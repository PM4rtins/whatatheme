// load-datalayer.js
// Loads Google Analytics tracking using the site's GA ID

/**
 * Script Overview:
 * Name: load-datalayer.js
 * Purpose: Initializes Google Analytics tracking by creating the dataLayer
 *          array and configuring it with the site's GA ID.
 */

/**
 * Functions
 */

/**
 * gtag
 * Parameters:
 *   arguments (any, required) - Arguments representing GA commands and configuration.
 * Returns: void
 * Description: Pushes arguments to the global dataLayer array for Google Analytics.
 */
function gtag() { dataLayer.push(arguments); }

/**
 * Events / Callbacks
 * Description: Immediately pushes the 'js' event with the current date and
 *              the 'config' event with the site's GA ID to the dataLayer,
 *              initializing Google Analytics tracking.
 */
window.dataLayer = window.dataLayer || [];
gtag('js', new Date());
gtag('config', '{{site.google-analytics}}');
