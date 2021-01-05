module.exports = {
	displayName: 'airspaces',
	hook: 'contextmenu',
	className: 'plugin-lhpane',
    classNameMobile: 'plugin-airspaces-mobile plugin-mobile-fullscreen',
    dependencies: [
        'https://unpkg.com/windyplugin-module-pickertools@0.1.0/dist/pickerTools.js',
        'https://unpkg.com/windyplugin-module-infobox@0.0.8/dist/infobox.js',
        'https://unpkg.com/windyplugin-module-airspaces@0.0.34/dist/airspaces.js'
    ],
	exclusive: 'lhpane',
}
