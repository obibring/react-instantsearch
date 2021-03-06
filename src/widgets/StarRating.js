'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _connectRange = require('../connectors/connectRange.js');

var _connectRange2 = _interopRequireDefault(_connectRange);

var _StarRating = require('../components/StarRating.js');

var _StarRating2 = _interopRequireDefault(_StarRating);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * StarRating lets the user refine search results by clicking on stars.
 *
 * The stars are based on the selected `attributeName`.
 * @requirements The attribute passed to the `attributeName` prop must be holding numerical values.
 * @name StarRating
 * @kind widget
 * @propType {string} attributeName - the name of the attribute in the record
 * @propType {number} [min] - Minimum value for the rating. When this isn't set, the minimum value will be automatically computed by Algolia using the data in the index.
 * @propType {number} [max] - Maximum value for the rating. When this isn't set, the maximum value will be automatically computed by Algolia using the data in the index.
 * @propType {{min: number, max: number}} [defaultRefinement] - Default state of the widget containing the lower bound (end) and the max for the rating.
 * @themeKey ais-StarRating__root - The root component of the widget
 * @themeKey ais-StarRating__ratingLink - The item link
 * @themeKey ais-StarRating__ratingLinkSelected - The selected link item
 * @themeKey ais-StarRating__ratingLinkDisabled - The disabled link item
 * @themeKey ais-StarRating__ratingIcon - The rating icon
 * @themeKey ais-StarRating__ratingIconSelected - The selected rating icon
 * @themeKey ais-StarRating__ratingIconDisabled - The disabled rating icon
 * @themeKey ais-StarRating__ratingIconEmpty - The rating empty icon
 * @themeKey ais-StarRating__ratingIconEmptySelected - The selected rating empty icon
 * @themeKey ais-StarRating__ratingIconEmptyDisabled - The disabled rating empty icon
 * @themeKey ais-StarRating__ratingLabel - The link label
 * @themeKey ais-StarRating__ratingLabelSelected - The selected link label
 * @themeKey ais-StarRating__ratingLabelDisabled - The disabled link label
 * @themeKey ais-StarRating__ratingCount - The link count
 * @themeKey ais-StarRating__ratingCountSelected - The selected link count
 * @themeKey ais-StarRating__ratingCountDisabled - The disabled link count
 * @themeKey ais-StarRating__noRefinement - present when there is no refinement
 * @translationKey ratingLabel - Label value for the rating link
 * @example
 * import React from 'react';
 *
 * import { StarRating, InstantSearch } from 'react-instantsearch/dom';
 *
 * export default function App() {
 *   return (
 *     <InstantSearch
 *       appId="latency"
 *       apiKey="6be0576ff61c053d5f9a3225e2a90f76"
 *       indexName="ikea"
 *     >
 *       <StarRating attributeName="rating" />
 *     </InstantSearch>
 *   );
 * }
 */
exports.default = (0, _connectRange2.default)(_StarRating2.default);