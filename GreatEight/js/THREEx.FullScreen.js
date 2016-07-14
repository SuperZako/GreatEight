// This THREEx helper makes it easy to handle the fullscreen API
// * it hides the prefix for each browser
// * it hides the little discrepencies of the various vendor API
// * at the time of this writing (nov 2011) it is available in 
//   [firefox nightly](http://blog.pearce.org.nz/2011/11/firefoxs-html-full-screen-api-enabled.html),
//   [webkit nightly](http://peter.sh/2011/01/javascript-full-screen-api-navigation-timing-and-repeating-css-gradients/) and
//   [chrome stable](http://updates.html5rocks.com/2011/10/Let-Your-Content-Do-the-Talking-Fullscreen-API).
// # Code
/** @namespace */
var THREEx;
(function (THREEx) {
    var FullScreen;
    (function (FullScreen) {
        /**
         * test if it is possible to have fullscreen
         *
         * @returns {Boolean} true if fullscreen API is available, false otherwise
        */
        function available() {
            return this._hasWebkitFullScreen || this._hasMozFullScreen;
        }
        FullScreen.available = available;
        /**
         * test if fullscreen is currently activated
         *
         * @returns {Boolean} true if fullscreen is currently activated, false otherwise
        */
        function activated() {
            if (this._hasWebkitFullScreen) {
                return document.webkitIsFullScreen;
            }
            else if (this._hasMozFullScreen) {
            }
            else {
                console.assert(false);
            }
        }
        FullScreen.activated = activated;
        /**
         * Request fullscreen on a given element
         * @param {DomElement} element to make fullscreen. optional. default to document.body
        */
        function request(element) {
            element = element || document.body;
            if (this._hasWebkitFullScreen) {
                element.webkitRequestFullScreen();
            }
            else if (this._hasMozFullScreen) {
            }
            else {
                console.assert(false);
            }
        }
        FullScreen.request = request;
        /**
         * Cancel fullscreen
        */
        function cancel() {
            if (this._hasWebkitFullScreen) {
                document.webkitCancelFullScreen();
            }
            else if (this._hasMozFullScreen) {
            }
            else {
                console.assert(false);
            }
        }
        FullScreen.cancel = cancel;
        // internal functions to know which fullscreen API implementation is available
        var _hasWebkitFullScreen = 'webkitCancelFullScreen' in document ? true : false;
        var _hasMozFullScreen = 'mozCancelFullScreen' in document ? true : false;
        /**
         * Bind a key to renderer screenshot
         * usage: THREEx.FullScreen.bindKey({ charCode : 'a'.charCodeAt(0) });
        */
        function bindKey(opts) {
            opts = opts || {};
            var charCode = opts.charCode || 'f'.charCodeAt(0);
            var dblclick = opts.dblclick !== undefined ? opts.dblclick : false;
            var element = opts.element;
            var toggle = function () {
                if (activated()) {
                    cancel();
                }
                else {
                    request(element);
                }
            };
            var onKeyPress = function (event) {
                if (event.which !== charCode)
                    return;
                toggle();
            }.bind(this);
            document.addEventListener('keypress', onKeyPress, false);
            dblclick && document.addEventListener('dblclick', toggle, false);
            return {
                unbind: function () {
                    document.removeEventListener('keypress', onKeyPress, false);
                    dblclick && document.removeEventListener('dblclick', toggle, false);
                }
            };
        }
        FullScreen.bindKey = bindKey;
    })(FullScreen = THREEx.FullScreen || (THREEx.FullScreen = {}));
})(THREEx || (THREEx = {}));
//# sourceMappingURL=THREEx.FullScreen.js.map