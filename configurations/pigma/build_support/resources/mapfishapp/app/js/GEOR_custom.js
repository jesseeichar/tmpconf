/**
 * Sample geOrchestra viewer config file
 *
 * Instructions: copy this buffer into GEOR_custom.js,
 * uncomment lines you wish to modify and 
 * modify the corresponding values to suit your needs.
 */

Ext.namespace("GEOR");

GEOR.custom = {
    /**
     * Constant: DEFAULT_WMC.
     * The path to the application's default WMC.
     * Defaults to "default.wmc"
     */
    //DEFAULT_WMC: "default.wmc",
    
    /**
     * Constant: DEFAULT_PRINT_FORMAT
     * {String} The default (ie selected) print layout format.
     * Defaults to "A4 paysage"
     */
    //DEFAULT_PRINT_FORMAT: "A4 paysage",
    
    /**
     * Constant: DEFAULT_PRINT_FORMAT
     * {String} The default (ie selected) print resolution.
     * Defaults to "127"
     */
    //DEFAULT_PRINT_RESOLUTION: "127",
    
    /**
     * Constant: GEOSERVER_WFS_URL
     * The URL to GeoServer WFS.
     * This is required if and only if the edit application is used
     * or if the "referentials" module is activated.
     * Defaults to /geoserver/wfs
     */
    //GEOSERVER_WFS_URL: "/geoserver/wfs",

    /**
     * Constant: GEOSERVER_WMS_URL
     * The URL to the GeoServer WMS. 
     * This is required if and only if OSM_AS_OVMAP is set to false.
     * Defaults to /geoserver/wms
     */
    //GEOSERVER_WMS_URL: "/geoserver/wms",

    /**
     * Constant: GEONETWORK_URL
     * The URL to the GeoNetwork server.
     * Defaults to "/geonetwork/srv/fr"
     */
    //GEONETWORK_URL: "/geonetwork/srv/fr",

    /**
     * Constant: CSW_GETDOMAIN_SORTING
     * true to case insensitive sort (client side) the keywords 
     * got from a CSW getDomain request. false to disable 
     * client side sorting 
     * (which is preferable in case of too many keywords).
     * Defaults to false
     */
    //CSW_GETDOMAIN_SORTING: false,
    
    /**
     * Constant: CATALOG_NAME
     * The name to display in the catalog tab under "add layer"
     * (was: GeoCatalogue for the GeoBretagne project).
     * Defaults to 'Catalogue geOrchestra'
     */
    CATALOG_NAME: 'Catalogue PIGMA',
    
    /**
     * Constant: THESAURUS_NAME
     * Thesaurus name to display for the CSW GetDomain request.
     * Defaults to 'mots clés'
     */
    //THESAURUS_NAME: 'mots clés',
    
    /**
     * Constant: DEFAULT_THESAURUS_KEY
     * Key (as the one in the response from /geonetwork/srv/fr/xml.thesaurus.getList) 
     * of the thesaurus to use as the default (selected) one.
     */
    DEFAULT_THESAURUS_KEY: 'local._none_.pigma',
        
    /**
     * Constant: MAX_FEATURES
     * The maximum number of vector features displayed.
     * Defaults to a value estimated by an empirical formula
     */
    //MAX_FEATURES: 500,
    
    /**
     * Constant: MAX_LENGTH
     * The maximum number of chars in a XML response 
     * before triggering an alert.
     * Defaults to a value estimated by an empirical formula
     */
    //MAX_LENGTH: 500000,

    
    /**
     * Constant: DEFAULT_ATTRIBUTION
     * Default attribution for layers which don't have one.
     * Defaults to ''
     */
    DEFAULT_ATTRIBUTION: 'PIGMA',

    /**
     * Constant: OSM_AS_OVMAP
     * Boolean: if true, use OSM mapnik as overview map baselayer 
     * instead of GEOR.config.OVMAP_LAYER_NAME.
     * Defaults to true
     */
    //OSM_AS_OVMAP: true,
    
    /**
     * Constant: OVMAP_LAYER_NAME
     * The name of the base layer which will be displayed in the overview map.
     * This is required if and only if OSM_AS_OVMAP is set to false.
     * This layer must be served by the server GEOSERVER_WMS_URL as image/png
     * Defaults to "geor_loc:DEPARTEMENTS"
     */
    //OVMAP_LAYER_NAME: "geor_loc:DEPARTEMENTS",
    
    /**
     * Constant: WMSC2WMS
     * Hash allowing correspondance between WMS-C server URLs and WMS server URLs for print
     * This assumes that layers share the same name on both servers
     * Eventually, Administrator can setup a mirror WMS server configured to consume WMS-C and serve them as WMS ...
     *
     * Example usage:
     *
     * "wmsc_url": "wms_url",
     *
     * For a WMSC with no WMS counterpart,
     * referencing the wmsc_url here allows the user 
     * to be warned that this layer will not be printed:
     *
     * "wmsc_url": undefined,
     */
    WMSC2WMS: {
        "http://osm.geobretagne.fr/service/wms": 
            "http://geobretagne.fr/osm-google", 
        "http://geobretagne.fr/geoserver/gwc/service/wms": 
            undefined // no trailing comma
    },


    /**
     * Constant: MAP_DOTS_PER_INCH
     * {Float} Sets the resolution used for scale computation.
     * Defaults to GeoServer defaults, which is 25.4 / 0.28
     */
    //MAP_DOTS_PER_INCH: 25.4 / 0.28,
    
    /**
     * Constant: RECENTER_ON_ADDRESSES
     * {Boolean} whether to display the recenter on addresses tab.
     * Defaults to false
     */
    //RECENTER_ON_ADDRESSES: false,
    
    /**
     * Constant: ADDRESS_URL
     * {String} The URL to the OpenAddresses web service.
     * Defaults to "/addrapp/addresses"
     */
    //ADDRESS_URL: "/addrapp/addresses",

    /**
     * Constant: NS_LOC
     * {String} The referentials layers' namespace alias as defined in
     *    the GeoServer configuration.
     * Defaults to "geor_loc"
     */
    NS_LOC: "pigma_loc",
    
    /**
     * Constant: NS_EDIT
     * {String} The editing layers' namespace alias as defined in
     *    the GeoServer configuration.
     * Defaults to "geor_edit"
     */
    NS_EDIT: "pigma_edit",


    /**
     * Constant: CSW_GETDOMAIN_PROPERTY
     * {String} the property used to query the CSW for keywords.
     * Defaults to "subject"
     */
    //CSW_GETDOMAIN_PROPERTY: "subject",


    /**
     * Constant: MAP_SCALES
     * {Array} The map's scales.
     * Defaults to GeoBretagne GWC compliant scales
     */
    MAP_SCALES : [
        500,
        1000,
        2000,
        5000,
        10000,
        25000,
        50000,
        100000,
        200000,
        500000,
        1000000,
        1500000,
        2000000,
        4000000
    ],

    /**
     * Constant: MAP_SRS
     * {String} The default map SRS code.
     * Defaults to EPSG:2154
     */
    //MAP_SRS: "EPSG:2154",

    /**
     * Constant: MAP_XMIN aka "left"
     * {Float} The max extent xmin in MAP_SRS coordinates.
     * Defaults to -357823 (France metropolitaine left)
     */
    //MAP_XMIN: -357823,

    /**
     * Constant: MAP_YMIN aka "bottom"
     * {Float} The max extent ymin in MAP_SRS coordinates.
     * Defaults to 6037008 (France metropolitaine bottom)
     */
    //MAP_YMIN: 6037008,

    /**
     * Constant: MAP_XMAX aka "right"
     * {Float} The max extent xmax in MAP_SRS coordinates.
     * Defaults to 1313632 (France metropolitaine right)
     */
    //MAP_XMAX: 1313632,

    /**
     * Constant: MAP_YSMAX aka "top"
     * {Float} The max extent ymax in MAP_SRS coordinates
     * Defaults to 7230727 (France metropolitaine top)
     */
    //MAP_YMAX: 7230727,
    
    /**
     * Constant: MAP_POS_SRS1
     * {String} The cursor position will be displayed using this SRS.
     * Defaults to "EPSG:2154"
     */
    //MAP_POS_SRS1: "EPSG:2154",
    
    /**
     * Constant: MAP_POS_SRS2
     * {String} The cursor position will be displayed using this SRS.
     * Defaults to "EPSG:3948"
     */
    MAP_POS_SRS2: "EPSG:3944",
    
    /**
     * Constant: PROJ4JS_STRINGS
     * {Object} The list of supported SRS with their definitions.
     * Defaults to "EPSG:2154" & "EPSG:900913" being defined
     * Note that "EPSG:900913" is required if OSM_AS_OVMAP is set to true
     * The other required SRSes are the one used by mouse position
     */
    PROJ4JS_STRINGS: {
        "EPSG:2154": "+title=RGF-93/Lambert 93, +proj=lcc +lat_1=49 +lat_2=44 +lat_0=46.5 +lon_0=3 +x_0=700000 +y_0=6600000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
        "EPSG:3944": "+title=RGF93/CC44, +proj=lcc +lat_1=43.25 +lat_2=44.75 +lat_0=44 +lon_0=3 +x_0=1700000 +y_0=3200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
        "EPSG:900913": "+title=Web Spherical Mercator, +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs"
    },
    
    /**
     * Constant: TILE_SINGLE
     * {Boolean} When false, activates WMS tiled requests.
     * Defaults to false
     */
    //TILE_SINGLE: false,
    
    /**
     * Constant: TILE_WIDTH
     * {Integer} Width of the WMS tiles in pixels.
     * Defaults to 512
     */
    //TILE_WIDTH: 512,
    
    /**
     * Constant: TILE_HEIGHT
     * {Integer} Height of the WMS tiles in pixels.
     * Defaults to 512
     */
    //TILE_HEIGHT: 512,

    /**
     * Constant: GEONAMES_FILTERS
     * {Object} Describes the geonames options.
     * Defaults to France/Bretagne/populated places
     */
    GEONAMES_FILTERS: {
        country: 'FR',         // France
        adminCode1: '97',      // Aquitaine
        style: 'short',        // verbosity of results
        lang: 'fr',
        featureClass: 'P',     // class category: populated places
        maxRows: 20            // maximal number of results
    },

    /**
     * Constant: GEONAMES_ZOOMLEVEL
     * {Integer} The number of zoom levels from maximum zoom level
     *           to zoom to, when using GeoNames recentering
     * Should always be >= 1.
     * Defaults to 5
     */
    //GEONAMES_ZOOMLEVEL: 5,
    
    /**
     * Constant: ANIMATE_WINDOWS
     * {Boolean} Display animations on windows opening/closing
     * Defaults to true
     */
    //ANIMATE_WINDOWS: true,
    
    /**
     * Constant: ROLES_FOR_STYLER
     * {Array} roles required for the styler to show up
     * Empty array means the module is available for everyone
     * Defaults to ['ROLE_SV_USER', 'ROLE_SV_REVIEWER', 'ROLE_SV_EDITOR', 'ROLE_SV_ADMIN']
     */
    ROLES_FOR_STYLER: [],
    
    /**
     * Constant: ROLES_FOR_QUERIER
     * {Array} roles required for the querier to show up
     * Empty array means the module is available for everyone
     * Defaults to []
     */
    //ROLES_FOR_QUERIER: [],
    
    /**
     * Constant: ROLES_FOR_PRINTER
     * {Array} roles required to be able to print
     * Empty array means printing is available for everyone
     * Defaults to ['ROLE_SV_USER', 'ROLE_SV_REVIEWER', 'ROLE_SV_EDITOR', 'ROLE_SV_ADMIN']
     */
    ROLES_FOR_PRINTER: [],
    
    /**
     * Constant: HELP_URL
     * {String} URL of the help ressource.
     * Defaults to "/doc/html/documentation.html#viewer"
     */
    //HELP_URL: "/doc/html/documentation.html#viewer",
    
    /**
     * Constant: CONFIRM_LAYER_REMOVAL
     * {Boolean} Do we want a popup dialog to appear on layer removal ?
     * Defaults to false
     */
    //CONFIRM_LAYER_REMOVAL: false,
    
    /**
     * Constant: WMS_SERVERS
     * {Array} List of externals WMS to display in the WMS servers tab.
     */
    WMS_SERVERS: [
        {"name": "PIGMA - toutes les couches", "url": "http://@shared.server.name@/geoserver/wms"},
        {"name": "PIGMA - PIGMA", "url": "http://@shared.server.name@/geoserver/pigma/wms"},
        {"name": "PIGMA - CUB", "url": "http://@shared.server.name@/geoserver/cub/wms"},
        {"name": "PIGMA - AGRN", "url": "http://@shared.server.name@/geoserver/agrn/wms"},
        {"name": "PIGMA - Chambre d'agriculture 64", "url": "http://@shared.server.name@/geoserver/chag64/wms"},
        {"name": "PIGMA - CA Périgueux", "url": "http://@shared.server.name@/geoserver/ca24/wms"},
        {"name": "PIGMA - CDC Montesquieu", "url": "http://@shared.server.name@/geoserver/cdcmtq/wms"},
        {"name": "PIGMA - Chambre économique 24", "url": "http://@shared.server.name@/geoserver/ce24/wms"},
        {"name": "PIGMA - CG 33", "url": "http://@shared.server.name@/geoserver/cg33/wms"},
        {"name": "PIGMA - CR Aquitaine TIC", "url": "http://@shared.server.name@/geoserver/cratic/wms"},
        {"name": "PIGMA - DRAAF", "url": "http://@shared.server.name@/geoserver/draaf/wms"},
        {"name": "PIGMA - EPIDOR", "url": "http://@shared.server.name@/geoserver/epidor/wms"},
        {"name": "PIGMA - EPIDROPT", "url": "http://@shared.server.name@/geoserver/epidropt/wms"},
        {"name": "PIGMA - Euratlantique", "url": "http://@shared.server.name@/geoserver/euratl/wms"},
        {"name": "PIGMA - FD Chasse 33", "url": "http://@shared.server.name@/geoserver/fdc33/wms"},
        {"name": "PIGMA - FD Pêche 33", "url": "http://@shared.server.name@/geoserver/fdp33/wms"},
        {"name": "PIGMA - GIP Littoral", "url": "http://@shared.server.name@/geoserver/giplit/wms"},
        {"name": "PIGMA - Gironde Numérique", "url": "http://@shared.server.name@/geoserver/girnum/wms"},
        {"name": "PIGMA - Rectorat", "url": "http://@shared.server.name@/geoserver/rect/wms"},
        {"name": "PIGMA - RFF", "url": "http://@shared.server.name@/geoserver/rff/wms"},
        {"name": "PIGMA - SMEAG", "url": "http://@shared.server.name@/geoserver/smeag/wms"},
        {"name": "PIGMA - SMEAP", "url": "http://@shared.server.name@/geoserver/smeap/wms"},
        {"name": "PIGMA - SYSDAU", "url": "http://@shared.server.name@/geoserver/sysdau/wms"},
        {"name": "PIGMA - DDTM 40", "url": "http://@shared.server.name@/geoserver/ddtm40/wms"},
        {"name": "PIGMA - IGN vecteurs", "url": "http://@shared.server.name@/geoserver/ign/wms"},
        {"name": "PIGMA - IGN rasters", "url": "http://@shared.server.name@/geoserver/ign_r/wms"},
        {"name": "PIGMA - INSEE", "url": "http://@shared.server.name@/geoserver/insee/wms"},
        {"name": "PIGMA - DREAL", "url": "http://@shared.server.name@/geoserver/dreal/wms"},
        {"name": "PIGMA - SDIS", "url": "http://@shared.server.name@/geoserver/sdis/wms"},
        {"name": "Sandre/zonages", "url": "http://services.sandre.eaufrance.fr/geo/zonage"},
        {"name": "Sandre/ouvrages", "url": "http://services.sandre.eaufrance.fr/geo/ouvrage"},
        {"name": "Sandre/stations", "url": "http://services.sandre.eaufrance.fr/geo/stations"},
        {"name": "BRGM/géologie", "url": "http://geoservices.brgm.fr/geologie"},
        {"name": "BRGM/risques", "url": "http://geoservices.brgm.fr/risques"},
        {"name": "Cartorisque33, risques naturels", "url": "http://cartorisque.prim.net/wms/33"},
        {"name": "Cartorisque24, risques naturels", "url": "http://cartorisque.prim.net/wms/24"},
        {"name": "Cartorisque47, risques naturels", "url": "http://cartorisque.prim.net/wms/47"},
        {"name": "Cartorisque40, risques naturels", "url": "http://cartorisque.prim.net/wms/40"},
        {"name": "Cartorisque64, risques naturels", "url": "http://cartorisque.prim.net/wms/64"},
        {"name": "Carmen Aquitaine", "url": "http://ws.carmen.developpement-durable.gouv.fr/WMS/6/carte1"},
        {"name": "GeoSignal", "url": "http://www.geosignal.org/cgi-bin/wmsmap"},
        {"name": "Corine Land Cover", "url": "http://sd1878-2.sivit.org/geoserver/wms"},
        {"name": "GeoLittoral", "url": "http://geolittoral.application.equipement.gouv.fr/wms/metropole"},
        {"name": "Gest'Eau", "url": "http://gesteau.oieau.fr/service"},
        {"name": "IFREMER/littoral", "url": "http://www.ifremer.fr/services/wms1"}
    ],
    
    /**
     * Constant: WFS_SERVERS
     * {Array} List of externals WFS to display in the WFS servers tab.
     */
    WFS_SERVERS: [
        {"name": "PIGMA - toutes les couches", "url": "http://@shared.server.name@/geoserver/wfs"},
        {"name": "PIGMA - PIGMA", "url": "http://@shared.server.name@/geoserver/pigma/wfs"},
        {"name": "PIGMA - CUB", "url": "http://@shared.server.name@/geoserver/cub/wfs"},
        {"name": "PIGMA - AGRN", "url": "http://@shared.server.name@/geoserver/agrn/wfs"},
        {"name": "PIGMA - Chambre d'agriculture 64", "url": "http://@shared.server.name@/geoserver/chag64/wfs"},
        {"name": "PIGMA - CA Périgueux", "url": "http://@shared.server.name@/geoserver/ca24/wfs"},
        {"name": "PIGMA - CDC Montesquieu", "url": "http://@shared.server.name@/geoserver/cdcmtq/wfs"},
        {"name": "PIGMA - Chambre économique 24", "url": "http://@shared.server.name@/geoserver/ce24/wfs"},
        {"name": "PIGMA - CG 33", "url": "http://@shared.server.name@/geoserver/cg33/wfs"},
        {"name": "PIGMA - CR Aquitaine TIC", "url": "http://@shared.server.name@/geoserver/cratic/wfs"},
        {"name": "PIGMA - DRAAF", "url": "http://@shared.server.name@/geoserver/draaf/wfs"},
        {"name": "PIGMA - EPIDOR", "url": "http://@shared.server.name@/geoserver/epidor/wfs"},
        {"name": "PIGMA - EPIDROPT", "url": "http://@shared.server.name@/geoserver/epidropt/wfs"},
        {"name": "PIGMA - Euratlantique", "url": "http://@shared.server.name@/geoserver/euratl/wfs"},
        {"name": "PIGMA - FD Chasse 33", "url": "http://@shared.server.name@/geoserver/fdc33/wfs"},
        {"name": "PIGMA - FD Peche 33", "url": "http://@shared.server.name@/geoserver/fdp33/wfs"},
        {"name": "PIGMA - GIP Littoral", "url": "http://@shared.server.name@/geoserver/giplit/wfs"},
        {"name": "PIGMA - Gironde Numérique", "url": "http://@shared.server.name@/geoserver/girnum/wfs"},
        {"name": "PIGMA - Rectorat", "url": "http://@shared.server.name@/geoserver/rect/wfs"},
        {"name": "PIGMA - RFF", "url": "http://@shared.server.name@/geoserver/rff/wfs"},
        {"name": "PIGMA - SMEAG", "url": "http://@shared.server.name@/geoserver/smeag/wfs"},
        {"name": "PIGMA - SMEAP", "url": "http://@shared.server.name@/geoserver/smeap/wfs"},
        {"name": "PIGMA - SYSDAU", "url": "http://@shared.server.name@/geoserver/sysdau/wfs"},
        {"name": "PIGMA - DDTM 40", "url": "http://@shared.server.name@/geoserver/ddtm40/wfs"},
        {"name": "PIGMA - IGN", "url": "http://@shared.server.name@/geoserver/ign/wfs"},
        {"name": "PIGMA - INSEE", "url": "http://@shared.server.name@/geoserver/insee/wfs"},
        {"name": "PIGMA - DREAL", "url": "http://@shared.server.name@/geoserver/dreal/wfs"},
        {"name": "PIGMA - SDIS", "url": "http://@shared.server.name@/geoserver/sdis/wfs"},
        {"name": "Corine Land Cover", "url": "http://sd1878-2.sivit.org/geoserver/wfs"}
    ]
    
    // No trailing comma for the last line (or IE will complain)
}
