
/**
 * External dependencies
 */
import { addQueryArgs } from '@wordpress/url';
import { capitalize } from 'lodash';

/**
 * Returns true if WooCommerce Payments is in test mode, false otherwise.
 *
 * @param {boolean} fallback Test mode fallback value in case test mode value can't be found.
 *
 * @returns {boolean} True if in test mode, false otherwise. Fallback value if test mode value can't be found.
 */
export const isInTestMode = ( fallback = false ) => {
	if ( 'undefined' === typeof wcpaySettings ) {
		return fallback;
	}
	return '1' === wcpaySettings.testMode || fallback;
};

/**
 * Returns the URL to the WooCommerce Payments settings.
 *
 * @returns {string} URL to the WooCommerce Payments settings menu.
 */
export const getPaymentSettingsUrl = () => {
	return addQueryArgs(
		'admin.php',
		{
			page: 'wc-settings',
			tab: 'checkout',
			section: 'woocommerce_payments',
		}
	);
};

/**
 * Basic formatting function to convert snake_case to display value.
 *
 * @param {string} value snake_case string to convert.
 *
 * @return {string} Display string for rendering.
 */
export const formatStringValue = ( value ) => capitalize( value ).replace( /_/g, ' ' );
