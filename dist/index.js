/** @license Apache-2.0 */

'use strict';

/**
* The maximum base 10 exponent for a single-precision floating-point number.
*
* @module @stdlib/constants-float32-max-base10-exponent
* @type {integer32}
*
* @example
* var FLOAT32_MAX_BASE10_EXPONENT = require( '@stdlib/constants-float32-max-base10-exponent' );
* // returns 38
*/


// MAIN //

/**
* The maximum base 10 exponent for a single-precision floating-point number.
*
* @constant
* @type {integer32}
* @default 38
* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
*/
var FLOAT32_MAX_BASE10_EXPONENT = 38|0; // asm type annotation


// EXPORTS //

module.exports = FLOAT32_MAX_BASE10_EXPONENT;
