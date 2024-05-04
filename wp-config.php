<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'ims' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'cH?tF>vf~eK}<^i$:x{Z]8 ^G2|)v6Hz71_OmL3q:}t+Z>w3tJ_m$RxcKz;/:Ykz' );
define( 'SECURE_AUTH_KEY',  'b4i{O]:sqSo/5VPBHkt/bAit8w7HQ~,EO6Qe7XBXfC@$gG%y+^sd}+r^gh*#BrVs' );
define( 'LOGGED_IN_KEY',    'f!tD;tq_6O|o>.nb.`<U{oklpaF87yU%IUZf$pxmkY3G-up/)W5-iBlFVubwpC=v' );
define( 'NONCE_KEY',        'Y(%!;xkZD0zXN5]Bi6to:j3ZV,hPa3vVnl]LX1N8I]vALhXZWGChkXw<$Q)dL6t%' );
define( 'AUTH_SALT',        'wR&HAS&$z%Kb&gWZBT9d01fyWxu=h%JVP=+N_@{BC<3e?capCUi?6pLzj=;S2Gss' );
define( 'SECURE_AUTH_SALT', 'Zqa0hZ$$!}HF%jsRP.<W(`i{OC#wcrP2@v^y9FSDmla,nuy2e6z0,)Ap{<O6syvz' );
define( 'LOGGED_IN_SALT',   'PRP8bQn8#)d?Q9)eXWZ<|P%T1*Jfiw}=#OV*M(o/lWVIorOJ5n+<tt`x+a-%t^qS' );
define( 'NONCE_SALT',       'nKM*|?Y=lnya0b1rypEcY]p15f8f]C7@6Qgk?t~mw[Ti+oB[2qnWZqN]QAzEBjZg' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'ims';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
