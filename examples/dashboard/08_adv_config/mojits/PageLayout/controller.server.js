/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('PageLayout', function(Y, NAME) {

/**
 * The PageLayout module.
 *
 * @module PageLayout
 */

    /**
     * Constructor for the Controller class.
     *
     * @class Controller
     * @constructor
     */
    Y.namespace('mojito.controllers')[NAME] = {
        init: function(config){
            this.config = config;
        },

        /**
         * Method corresponding to the 'index' action.
         *
         * @param ac {Object} The ActionContext that provides access
         *        to the Mojito API.
         */
        index: function(ac) {
            var view_type = ac.params.getFromRoute('view_type') || "yui";
            if (view_type === "yui") {
                ac.composite.done({
                    title: "Trib - YUI Developer Dashboard",
                    button_text: "See Mojito Dashboard",
                    other: "/mojito"
                });
            } else if (view_type === "mojito") {
                ac.composite.done({
                    title: "Trib - Mojito Developer Dashboard",
                    button_text: "See YUI Dashboard",
                    other: "/"
                });
            }
        }
    };
}, '0.0.1', {requires: ['mojito','mojito-composite-addon', 'mojito-params-addon']});
