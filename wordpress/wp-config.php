<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'db_theatrum' );

/** Database username */
define( 'DB_USER', 'db_theatrum' );

/** Database password */
define( 'DB_PASSWORD', '-3l7z80vqp92WM9x' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

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
define( 'AUTH_KEY',          'drR. qy$F2ZIHWHo[&lP__sc~=TQvuSHA$@(+SS>di7i{UmpU.iBLw9pJ7M^nC{,' );
define( 'SECURE_AUTH_KEY',   'T~jUl4EVnubI& lPnuTo;a+ATwP69wSfZ!2:LaKOOEx.|W@MOo?:yJxyUsGgRu)(' );
define( 'LOGGED_IN_KEY',     'ff#@RPazv$.Bj,.`3;Eh8X8eWS0Zi0dhx%91i=G>{-1k[h!D%^/R%p!JO9?H^(~<' );
define( 'NONCE_KEY',         ':U[2l%Mk.JH6L:2*^[74gsu68cw-f6h4d8L96p%w@`Bblf8Cg?~]KVb^8e@|=<Q~' );
define( 'AUTH_SALT',         'u&,%Daur&-b^6gPQf|&E9-WBau>].am+6+zG#0Zou7/_#PGUN`2Ny#S$*p_joLF+' );
define( 'SECURE_AUTH_SALT',  'Tl:/LS8Cha?2A)<.Ny+$dHF@Z?l;[Y],rCft>mL%%n}~+8@4Yl&;d-QzhW>PLM/F' );
define( 'LOGGED_IN_SALT',    'h;)}vBDX[Jof F.2;fCt%yI.L4RVe5iyV%55g]rQzK/_W93Y0Ncnr9Xy(=REQUd&' );
define( 'NONCE_SALT',        'y&2}Kkybnt6ZHuPY$ou>i_Z`qXPs8ADYoK).p^W^I:QB{-oCyi-[;`]?d/8Gp#eP' );
define( 'WP_CACHE_KEY_SALT', 'O)D_WOA)|S6C:.u|3Cqo07P7w.M_I#Qmy/xtBJ~ogG!T$N]-;fF`Gkf$Fo.nNR<:' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'vp_';


/* Add any custom values between this line and the "stop editing" line. */



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
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
