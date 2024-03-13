(function (factory) {
  typeof define === 'function' && define.amd ? define('index', factory) :
  factory();
}((function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;

    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = o[Symbol.iterator]();
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  var animationQueue = {};

  var Animation = /*#__PURE__*/function () {
    function Animation() {
      _classCallCheck(this, Animation);
    }

    _createClass(Animation, null, [{
      key: "slideUp",

      /**
       * Slide up aims to close an element. To do that, we take the height of the element, and set it to 0 to
       * force an animation
       */
      value: function slideUp(element, callback) {
        var propertyToAnimate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'height';
        element.style[propertyToAnimate] = "".concat(element.scrollHeight, "px"); // Force previous height to allow CSS transition

        element.offsetHeight; // Force redraw

        element.style[propertyToAnimate] = 0;

        if (animationQueue[element.id]) {
          element.removeEventListener('transitionend', animationQueue[element.id]);
          delete animationQueue[element.id];
        }

        var transitionEnded = function transitionEnded(event) {
          if (event.propertyName === 'height') {
            element.removeEventListener('transitionend', transitionEnded);
            (callback || function () {})();
          }
        };

        element.addEventListener('transitionend', transitionEnded);
      }
      /**
       * Slide down aims to open an element. To do that, you must make sure that the element you are trying to open
       * is set with height: 0; overflow: hidden in the CSS, and does not contain any padding nor margin.
       */

    }, {
      key: "slideDown",
      value: function slideDown(element, callback) {
        var propertyToAnimate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'height';
        // To do the animation we temporarily hide it, check the height, and transition to it
        element.style[propertyToAnimate] = "".concat(element.scrollHeight, "px");

        var transitionEnded = function transitionEnded(event) {
          if (event.propertyName === propertyToAnimate) {
            var defaultValue = 'auto';

            if (propertyToAnimate === 'max-height') {
              defaultValue = 'none';
            }

            element.style[propertyToAnimate] = defaultValue; // Allows the content to grow normally

            element.removeEventListener('transitionend', transitionEnded);
            delete animationQueue[element.id];
            (callback || function () {})();
          }
        };

        element.addEventListener('transitionend', transitionEnded);
        animationQueue[element.id] = transitionEnded;
      }
    }]);

    return Animation;
  }();

  /**
   * Various DOM helper
   */
  var Dom = /*#__PURE__*/function () {
    function Dom() {
      _classCallCheck(this, Dom);
    }

    _createClass(Dom, null, [{
      key: "getSiblings",

      /**
       * Get all the previous and next siblings, optionally filtered by a selector
       */
      value: function getSiblings(element, filter) {
        var includeSelf = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var siblings = [];
        var currentElement = element; // Do the previous first

        while (currentElement = currentElement.previousElementSibling) {
          if (!filter || currentElement.matches(filter)) {
            siblings.push(currentElement);
          }
        }

        if (includeSelf) {
          siblings.push(element);
        } // Then the next side


        currentElement = element;

        while (currentElement = currentElement.nextElementSibling) {
          if (!filter || currentElement.matches(filter)) {
            siblings.push(currentElement);
          }
        }

        return siblings;
      }
    }]);

    return Dom;
  }();

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, basedir, module) {
  	return module = {
  		path: basedir,
  		exports: {},
  		require: function (path, base) {
  			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
  		}
  	}, fn(module, module.exports), module.exports;
  }

  function commonjsRequire () {
  	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
  }

  var browser = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    /**
     * DOM event delegator
     *
     * The delegator will listen
     * for events that bubble up
     * to the root node.
     *
     * @constructor
     * @param {Node|string} [root] The root node or a selector string matching the root node
     */

    function Delegate(root) {
      /**
       * Maintain a map of listener
       * lists, keyed by event name.
       *
       * @type Object
       */
      this.listenerMap = [{}, {}];

      if (root) {
        this.root(root);
      }
      /** @type function() */


      this.handle = Delegate.prototype.handle.bind(this); // Cache of event listeners removed during an event cycle

      this._removedListeners = [];
    }
    /**
     * Start listening for events
     * on the provided DOM element
     *
     * @param  {Node|string} [root] The root node or a selector string matching the root node
     * @returns {Delegate} This method is chainable
     */


    Delegate.prototype.root = function (root) {
      var listenerMap = this.listenerMap;
      var eventType; // Remove master event listeners

      if (this.rootElement) {
        for (eventType in listenerMap[1]) {
          if (listenerMap[1].hasOwnProperty(eventType)) {
            this.rootElement.removeEventListener(eventType, this.handle, true);
          }
        }

        for (eventType in listenerMap[0]) {
          if (listenerMap[0].hasOwnProperty(eventType)) {
            this.rootElement.removeEventListener(eventType, this.handle, false);
          }
        }
      } // If no root or root is not
      // a dom node, then remove internal
      // root reference and exit here


      if (!root || !root.addEventListener) {
        if (this.rootElement) {
          delete this.rootElement;
        }

        return this;
      }
      /**
       * The root node at which
       * listeners are attached.
       *
       * @type Node
       */


      this.rootElement = root; // Set up master event listeners

      for (eventType in listenerMap[1]) {
        if (listenerMap[1].hasOwnProperty(eventType)) {
          this.rootElement.addEventListener(eventType, this.handle, true);
        }
      }

      for (eventType in listenerMap[0]) {
        if (listenerMap[0].hasOwnProperty(eventType)) {
          this.rootElement.addEventListener(eventType, this.handle, false);
        }
      }

      return this;
    };
    /**
     * @param {string} eventType
     * @returns boolean
     */


    Delegate.prototype.captureForType = function (eventType) {
      return ['blur', 'error', 'focus', 'load', 'resize', 'scroll'].indexOf(eventType) !== -1;
    };
    /**
     * Attach a handler to one
     * event for all elements
     * that match the selector,
     * now or in the future
     *
     * The handler function receives
     * three arguments: the DOM event
     * object, the node that matched
     * the selector while the event
     * was bubbling and a reference
     * to itself. Within the handler,
     * 'this' is equal to the second
     * argument.
     *
     * The node that actually received
     * the event can be accessed via
     * 'event.target'.
     *
     * @param {string} eventType Listen for these events
     * @param {string|undefined} selector Only handle events on elements matching this selector, if undefined match root element
     * @param {function()} handler Handler function - event data passed here will be in event.data
     * @param {boolean} [useCapture] see 'useCapture' in <https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener>
     * @returns {Delegate} This method is chainable
     */


    Delegate.prototype.on = function (eventType, selector, handler, useCapture) {
      var root;
      var listenerMap;
      var matcher;
      var matcherParam;

      if (!eventType) {
        throw new TypeError('Invalid event type: ' + eventType);
      } // handler can be passed as
      // the second or third argument


      if (typeof selector === 'function') {
        useCapture = handler;
        handler = selector;
        selector = null;
      } // Fallback to sensible defaults
      // if useCapture not set


      if (useCapture === undefined) {
        useCapture = this.captureForType(eventType);
      }

      if (typeof handler !== 'function') {
        throw new TypeError('Handler must be a type of Function');
      }

      root = this.rootElement;
      listenerMap = this.listenerMap[useCapture ? 1 : 0]; // Add master handler for type if not created yet

      if (!listenerMap[eventType]) {
        if (root) {
          root.addEventListener(eventType, this.handle, useCapture);
        }

        listenerMap[eventType] = [];
      }

      if (!selector) {
        matcherParam = null; // COMPLEX - matchesRoot needs to have access to
        // this.rootElement, so bind the function to this.

        matcher = matchesRoot.bind(this); // Compile a matcher for the given selector
      } else if (/^[a-z]+$/i.test(selector)) {
        matcherParam = selector;
        matcher = matchesTag;
      } else if (/^#[a-z0-9\-_]+$/i.test(selector)) {
        matcherParam = selector.slice(1);
        matcher = matchesId;
      } else {
        matcherParam = selector;
        matcher = Element.prototype.matches;
      } // Add to the list of listeners


      listenerMap[eventType].push({
        selector: selector,
        handler: handler,
        matcher: matcher,
        matcherParam: matcherParam
      });
      return this;
    };
    /**
     * Remove an event handler
     * for elements that match
     * the selector, forever
     *
     * @param {string} [eventType] Remove handlers for events matching this type, considering the other parameters
     * @param {string} [selector] If this parameter is omitted, only handlers which match the other two will be removed
     * @param {function()} [handler] If this parameter is omitted, only handlers which match the previous two will be removed
     * @returns {Delegate} This method is chainable
     */


    Delegate.prototype.off = function (eventType, selector, handler, useCapture) {
      var i;
      var listener;
      var listenerMap;
      var listenerList;
      var singleEventType; // Handler can be passed as
      // the second or third argument

      if (typeof selector === 'function') {
        useCapture = handler;
        handler = selector;
        selector = null;
      } // If useCapture not set, remove
      // all event listeners


      if (useCapture === undefined) {
        this.off(eventType, selector, handler, true);
        this.off(eventType, selector, handler, false);
        return this;
      }

      listenerMap = this.listenerMap[useCapture ? 1 : 0];

      if (!eventType) {
        for (singleEventType in listenerMap) {
          if (listenerMap.hasOwnProperty(singleEventType)) {
            this.off(singleEventType, selector, handler);
          }
        }

        return this;
      }

      listenerList = listenerMap[eventType];

      if (!listenerList || !listenerList.length) {
        return this;
      } // Remove only parameter matches
      // if specified


      for (i = listenerList.length - 1; i >= 0; i--) {
        listener = listenerList[i];

        if ((!selector || selector === listener.selector) && (!handler || handler === listener.handler)) {
          this._removedListeners.push(listener);

          listenerList.splice(i, 1);
        }
      } // All listeners removed


      if (!listenerList.length) {
        delete listenerMap[eventType]; // Remove the main handler

        if (this.rootElement) {
          this.rootElement.removeEventListener(eventType, this.handle, useCapture);
        }
      }

      return this;
    };
    /**
     * Handle an arbitrary event.
     *
     * @param {Event} event
     */


    Delegate.prototype.handle = function (event) {
      var i;
      var l;
      var type = event.type;
      var root;
      var phase;
      var listener;
      var returned;
      var listenerList = [];
      var target;
      var eventIgnore = 'ftLabsDelegateIgnore';

      if (event[eventIgnore] === true) {
        return;
      }

      target = event.target; // Hardcode value of Node.TEXT_NODE
      // as not defined in IE8

      if (target.nodeType === 3) {
        target = target.parentNode;
      } // Handle SVG <use> elements in IE


      if (target.correspondingUseElement) {
        target = target.correspondingUseElement;
      }

      root = this.rootElement;
      phase = event.eventPhase || (event.target !== event.currentTarget ? 3 : 2); // eslint-disable-next-line default-case

      switch (phase) {
        case 1:
          //Event.CAPTURING_PHASE:
          listenerList = this.listenerMap[1][type];
          break;

        case 2:
          //Event.AT_TARGET:
          if (this.listenerMap[0] && this.listenerMap[0][type]) {
            listenerList = listenerList.concat(this.listenerMap[0][type]);
          }

          if (this.listenerMap[1] && this.listenerMap[1][type]) {
            listenerList = listenerList.concat(this.listenerMap[1][type]);
          }

          break;

        case 3:
          //Event.BUBBLING_PHASE:
          listenerList = this.listenerMap[0][type];
          break;
      }

      var toFire = []; // Need to continuously check
      // that the specific list is
      // still populated in case one
      // of the callbacks actually
      // causes the list to be destroyed.

      l = listenerList.length;

      while (target && l) {
        for (i = 0; i < l; i++) {
          listener = listenerList[i]; // Bail from this loop if
          // the length changed and
          // no more listeners are
          // defined between i and l.

          if (!listener) {
            break;
          }

          if (target.tagName && ["button", "input", "select", "textarea"].indexOf(target.tagName.toLowerCase()) > -1 && target.hasAttribute("disabled")) {
            // Remove things that have previously fired
            toFire = [];
          } // Check for match and fire
          // the event if there's one
          //
          // TODO:MCG:20120117: Need a way
          // to check if event#stopImmediatePropagation
          // was called. If so, break both loops.
          else if (listener.matcher.call(target, listener.matcherParam, target)) {
              toFire.push([event, target, listener]);
            }
        } // TODO:MCG:20120117: Need a way to
        // check if event#stopPropagation
        // was called. If so, break looping
        // through the DOM. Stop if the
        // delegation root has been reached


        if (target === root) {
          break;
        }

        l = listenerList.length; // Fall back to parentNode since SVG children have no parentElement in IE

        target = target.parentElement || target.parentNode; // Do not traverse up to document root when using parentNode, though

        if (target instanceof HTMLDocument) {
          break;
        }
      }

      var ret;

      for (i = 0; i < toFire.length; i++) {
        // Has it been removed during while the event function was fired
        if (this._removedListeners.indexOf(toFire[i][2]) > -1) {
          continue;
        }

        returned = this.fire.apply(this, toFire[i]); // Stop propagation to subsequent
        // callbacks if the callback returned
        // false

        if (returned === false) {
          toFire[i][0][eventIgnore] = true;
          toFire[i][0].preventDefault();
          ret = false;
          break;
        }
      }

      return ret;
    };
    /**
     * Fire a listener on a target.
     *
     * @param {Event} event
     * @param {Node} target
     * @param {Object} listener
     * @returns {boolean}
     */


    Delegate.prototype.fire = function (event, target, listener) {
      return listener.handler.call(target, event, target);
    };
    /**
     * Check whether an element
     * matches a tag selector.
     *
     * Tags are NOT case-sensitive,
     * except in XML (and XML-based
     * languages such as XHTML).
     *
     * @param {string} tagName The tag name to test against
     * @param {Element} element The element to test with
     * @returns boolean
     */


    function matchesTag(tagName, element) {
      return tagName.toLowerCase() === element.tagName.toLowerCase();
    }
    /**
     * Check whether an element
     * matches the root.
     *
     * @param {?String} selector In this case this is always passed through as null and not used
     * @param {Element} element The element to test with
     * @returns boolean
     */


    function matchesRoot(selector, element) {
      if (this.rootElement === window) {
        return (// Match the outer document (dispatched from document)
          element === document || // The <html> element (dispatched from document.body or document.documentElement)
          element === document.documentElement || // Or the window itself (dispatched from window)
          element === window
        );
      }

      return this.rootElement === element;
    }
    /**
     * Check whether the ID of
     * the element in 'this'
     * matches the given ID.
     *
     * IDs are case-sensitive.
     *
     * @param {string} id The ID to test against
     * @param {Element} element The element to test with
     * @returns boolean
     */


    function matchesId(id, element) {
      return id === element.id;
    }
    /**
     * Short hand for off()
     * and root(), ie both
     * with no parameters
     *
     * @return void
     */


    Delegate.prototype.destroy = function () {
      this.off();
      this.root();
    };

    var _default = Delegate;
    exports["default"] = _default;
    module.exports = exports["default"];
  });
  var Delegate = /*@__PURE__*/getDefaultExportFromCjs(browser);

  var CollapsibleManager = /*#__PURE__*/function () {
    function CollapsibleManager() {
      _classCallCheck(this, CollapsibleManager);

      this.domDelegate = new Delegate(document.body);

      this._attachListeners();
    }

    _createClass(CollapsibleManager, [{
      key: "_attachListeners",
      value: function _attachListeners() {
        this.domDelegate.on('click', '[data-action="toggle-collapsible"]:not([disabled])', this._toggleCollapsible.bind(this));
        document.addEventListener('collapsible:toggle', this._toggleCollapsible.bind(this));
      }
      /**
       * Toggle a given collapsible
       */

    }, {
      key: "_toggleCollapsible",
      value: function _toggleCollapsible(event, target) {
        var _this = this;

        // If the target is null, it may be because someone has sent the global event "collapsible:toggle". If that the case
        // we can retrieve the toggle button by using the event.detail.id
        if (!target && event.detail) {
          target = document.querySelector("[aria-controls=\"".concat(event.detail.id, "\"]"));
        }

        var isOpen = target.getAttribute('aria-expanded') === 'true',
            parentCollapsible = target.parentNode;

        if (isOpen) {
          this._close(parentCollapsible);
        } else {
          this._open(parentCollapsible);
        } // We make sure to close any siblings collapsible as well


        if (target.getAttribute('data-close-siblings') !== 'false') {
          Dom.getSiblings(parentCollapsible).forEach(function (collapsibleToClose) {
            return _this._close(collapsibleToClose);
          });
        }
      }
      /**
       * Open a given collapsible
       */

    }, {
      key: "_open",
      value: function _open(collapsible) {
        var toggleButton = collapsible.querySelector('[aria-controls]');

        if (!toggleButton || toggleButton.getAttribute('aria-expanded') === 'true') {
          return; // It's already open
        }

        var collapsibleContent = collapsible.querySelector("#".concat(toggleButton.getAttribute('aria-controls')));
        toggleButton.setAttribute('aria-expanded', 'true');

        if (collapsibleContent.hasAttribute('aria-hidden')) {
          collapsibleContent.setAttribute('aria-hidden', 'false');
        }

        Animation.slideDown(collapsibleContent, function () {
          if (toggleButton.hasAttribute('data-collapsible-force-overflow')) {
            collapsibleContent.style.overflow = 'visible';
          } // If there is an autofocus field, we focus it


          var autofocusElement = collapsibleContent.querySelector('[autofocus]');

          if (autofocusElement) {
            autofocusElement.focus();
          }
        });
      }
      /**
       * Close a given collapsible
       */

    }, {
      key: "_close",
      value: function _close(collapsible) {
        var toggleButton = collapsible.querySelector('[aria-controls]');

        if (!toggleButton || toggleButton.getAttribute('aria-expanded') === 'false') {
          return; // It's already closed
        }

        var collapsibleContent = collapsible.querySelector("#".concat(toggleButton.getAttribute('aria-controls')));

        if (toggleButton.hasAttribute('data-collapsible-force-overflow')) {
          collapsibleContent.style.overflow = 'hidden';
        }

        if (collapsibleContent.hasAttribute('aria-hidden')) {
          collapsibleContent.setAttribute('aria-hidden', 'true');
        }

        toggleButton.setAttribute('aria-expanded', 'false');
        Animation.slideUp(collapsibleContent);
      }
    }]);

    return CollapsibleManager;
  }();

  var CountrySelector = /*#__PURE__*/function () {
    function CountrySelector(countrySelect, provinceSelect) {
      _classCallCheck(this, CountrySelector);

      this.countrySelect = countrySelect;
      this.provinceSelect = provinceSelect;

      if (this.countrySelect && this.provinceSelect) {
        this._attachListeners();

        this._initSelectors();
      }
    }

    _createClass(CountrySelector, [{
      key: "destroy",
      value: function destroy() {
        if (this.countrySelect) {
          this.countrySelect.removeEventListener('change', this._onCountryChangedListener);
        }
      }
    }, {
      key: "_initSelectors",
      value: function _initSelectors() {
        // Check first the default value of country
        var defaultCountry = this.countrySelect.getAttribute('data-default');

        if (defaultCountry) {
          for (var i = 0; i !== this.countrySelect.options.length; ++i) {
            if (this.countrySelect.options[i].text === defaultCountry) {
              this.countrySelect.selectedIndex = i;
              break;
            }
          }
        } else {
          this.countrySelect.selectedIndex = 0;
        }

        var event = new Event('change', {
          bubbles: true
        });
        this.countrySelect.dispatchEvent(event); // Then the province

        var defaultProvince = this.provinceSelect.getAttribute('data-default');

        if (defaultProvince) {
          for (var _i = 0; _i !== this.provinceSelect.options.length; ++_i) {
            if (this.provinceSelect.options[_i].text === defaultProvince) {
              this.provinceSelect.selectedIndex = _i;
              break;
            }
          }
        }
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this._onCountryChangedListener = this._onCountryChanged.bind(this);
        this.countrySelect.addEventListener('change', this._onCountryChangedListener);
      }
    }, {
      key: "_onCountryChanged",
      value: function _onCountryChanged() {
        var _this = this;

        var selectedOption = this.countrySelect.options[this.countrySelect.selectedIndex];

        if (!selectedOption) {
          return;
        }

        var provinces = JSON.parse(selectedOption.getAttribute('data-provinces') || '[]'); // First remove all options

        this.provinceSelect.innerHTML = '';

        if (provinces.length === 0) {
          this.provinceSelect.closest('.form__input-wrapper').style.display = 'none';
          return;
        } // We need to build the provinces array


        provinces.forEach(function (data) {
          _this.provinceSelect.options.add(new Option(data[1], data[0]));
        });
        this.provinceSelect.closest('.form__input-wrapper').style.display = 'block';
      }
    }]);

    return CountrySelector;
  }();

  var Responsive = /*#__PURE__*/function () {
    function Responsive() {
      _classCallCheck(this, Responsive);
    }

    _createClass(Responsive, null, [{
      key: "matchesBreakpoint",
      value: function matchesBreakpoint(breakpoint) {
        switch (breakpoint) {
          case 'phone':
            return window.matchMedia('screen and (max-width: 640px)').matches;

          case 'tablet':
            return window.matchMedia('screen and (min-width: 641px) and (max-width: 1023px)').matches;

          case 'tablet-and-up':
            return window.matchMedia('screen and (min-width: 641px)').matches;

          case 'pocket':
            return window.matchMedia('screen and (max-width: 1023px)').matches;

          case 'lap':
            return window.matchMedia('screen and (min-width: 1024px) and (max-width: 1279px)').matches;

          case 'lap-and-up':
            return window.matchMedia('screen and (min-width: 1024px)').matches;

          case 'desk':
            return window.matchMedia('screen and (min-width: 1280px)').matches;

          case 'widescreen':
            return window.matchMedia('screen and (min-width: 1440px)').matches;

          case 'supports-hover':
            return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
        }
      }
    }, {
      key: "getCurrentBreakpoint",
      value: function getCurrentBreakpoint() {
        if (window.matchMedia('screen and (max-width: 640px)').matches) {
          return 'phone';
        }

        if (window.matchMedia('screen and (min-width: 641px) and (max-width: 1023px)').matches) {
          return 'tablet';
        }

        if (window.matchMedia('screen and (min-width: 1024px) and (max-width: 1279px)').matches) {
          return 'lap';
        }

        if (window.matchMedia('screen and (min-width: 1280px)').matches) {
          return 'desk';
        }
      }
    }]);

    return Responsive;
  }();

  var DesktopNavigation = /*#__PURE__*/function () {
    function DesktopNavigation(element, navigationLayout, openTrigger) {
      _classCallCheck(this, DesktopNavigation);

      this.element = element;
      this.delegateElement = new Delegate(this.element);
      this.delegateRoot = new Delegate(document.documentElement);
      this.useInlineNavigation = navigationLayout === 'inline';
      this.isNavigationVisible = this.useInlineNavigation;
      this.openTrigger = openTrigger; // If we use a device that does not support hover, we force the open trigger to be on click (for instance iPad)

      if (!Responsive.matchesBreakpoint('supports-hover')) {
        this.openTrigger = 'click';
      }

      this.openItems = [];
      this.dropdownActivationTimeouts = {};
      this.dropdownDeactivationTimeouts = {};
      this.DROPDOWN_TIMEOUT = 100;

      this._attachListeners();

      if (this.useInlineNavigation) {
        this._setupInlineNavigation();
      }
    }

    _createClass(DesktopNavigation, [{
      key: "destroy",
      value: function destroy() {
        this.delegateElement.off();
        this.delegateRoot.off();
      }
    }, {
      key: "onBlockSelect",
      value: function onBlockSelect(event) {
        var _this = this;

        if (!this.useInlineNavigation) {
          this._openNavigation();
        } // We receive a reference to the mega-menu, but for simpler handling, we simulate as if the button was hovered. First, we must close
        // mega-menu if there is already one that is open


        Dom.getSiblings(event.target.parentNode, '.is-dropdown-open').forEach(function (openItem) {
          _this._deactivateDropdown(event, openItem.querySelector('[data-type="menuitem"][aria-haspopup]'));
        }); // The previousElementSibling is always the link itself

        this._activateDropdown(event, event.target.previousElementSibling);
      }
    }, {
      key: "onBlockDeselect",
      value: function onBlockDeselect(event) {
        if (!this.useInlineNavigation) {
          this._closeNavigation();
        } // The deactivation is done on the wrapping div (so parentNode)


        this._deactivateDropdown(event, event.target.parentNode);
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this.delegateElement.on('focusout', this._onFocusOut.bind(this));
        this.delegateRoot.on('click', this._onClick.bind(this));
        this.delegateElement.on('click', '[data-action="toggle-menu"]', this._toggleNavigation.bind(this));

        if (this.openTrigger === 'hover') {
          this.delegateElement.on('focusin', '[data-type="menuitem"][aria-haspopup]', this._activateDropdown.bind(this));
          this.delegateElement.on('mouseover', '[data-type="menuitem"][aria-haspopup]', this._activateDropdown.bind(this));
          this.delegateElement.on('mouseover', '[data-type="menu"][aria-hidden="false"]', this._blockDropdownDeactivation.bind(this));
          this.delegateElement.on('focusout', '.is-dropdown-open', this._deactivateDropdown.bind(this));
          this.delegateElement.on('mouseout', '.is-dropdown-open', this._deactivateDropdown.bind(this));
        } else {
          this.delegateElement.on('click', '[data-type="menuitem"][aria-haspopup]', this._toggleDropdown.bind(this));
        }
      }
      /**
       * When the whole menu looses focus, it's automatically closed (in the case of condensed menu)
       */

    }, {
      key: "_onFocusOut",
      value: function _onFocusOut(event) {
        // event.relatedTarget is the new target that receives focus
        if (event.relatedTarget !== null && !this.element.contains(event.relatedTarget)) {
          this._closeNavigation();
        }
      }
      /**
       * We need to catch click outside the element to automatically close menu
       */

    }, {
      key: "_onClick",
      value: function _onClick(event) {
        if (!this.element.contains(event.target)) {
          this._closeNavigation();
        }
      }
      /**
       * Open the navigation (really make sense for condensed menu-
       */

    }, {
      key: "_openNavigation",
      value: function _openNavigation() {
        // Inline navigation is always visible so there is nothing to open
        if (this.useInlineNavigation) {
          return;
        }

        this.element.querySelector('[data-action="toggle-menu"]').setAttribute('aria-expanded', 'true');
        this.element.querySelector('[data-type="menu"]').setAttribute('aria-hidden', 'false');
        this.isNavigationVisible = true;
      }
      /**
       * Close the navigation (really make sense for condensed menu)
       */

    }, {
      key: "_closeNavigation",
      value: function _closeNavigation() {
        var _this2 = this;

        if (!this.useInlineNavigation) {
          this.element.querySelector('[data-action="toggle-menu"]').setAttribute('aria-expanded', 'false');
          this.element.querySelector('[data-type="menu"]').setAttribute('aria-hidden', 'true');
        }

        this.isNavigationVisible = false;

        if (this.openTrigger === 'click') {
          var cloneOpenItems = this.openItems.slice(0);
          cloneOpenItems.forEach(function (item) {
            _this2._deactivateDropdown(event, item);
          });
        }
      }
      /**
       * Toggle navigation
       */

    }, {
      key: "_toggleNavigation",
      value: function _toggleNavigation(event) {
        if (this.isNavigationVisible) {
          this._closeNavigation();
        } else {
          this._openNavigation();
        }
      }
      /**
       * Toggle a dropdown
       */

    }, {
      key: "_toggleDropdown",
      value: function _toggleDropdown(event, target) {
        // If the link is currently not expanded, we block the click
        if (target.getAttribute('aria-expanded') === 'false') {
          event.preventDefault();
        }

        if (target.getAttribute('aria-expanded') === 'true') {
          // If the link target is "#", by convention we close the dropdown, otherwise we just follow the link
          if (target.getAttribute('href') === '#') {
            event.preventDefault();

            this._deactivateDropdown(event, target.closest('.is-dropdown-open'));
          }
        } else {
          this._activateDropdown(event, target);
        }
      }
      /**
       * Open a dropdown menu
       */

    }, {
      key: "_activateDropdown",
      value: function _activateDropdown(event, target) {
        var _this3 = this;

        // If we are on click, we first need to close any other dropdown (if needed)
        if (this.openTrigger === 'click') {
          var cloneOpenItems = this.openItems.slice(0);
          cloneOpenItems.forEach(function (item) {
            if (!item.contains(target)) {
              _this3._deactivateDropdown(event, item);
            }
          });
        }

        var menuToOpen = Dom.getSiblings(target, '[aria-hidden]')[0];

        var callback = function callback() {
          target.setAttribute('aria-expanded', 'true');
          target.parentNode.classList.add('is-dropdown-open');
          menuToOpen.setAttribute('aria-hidden', 'false'); // If this menu was scheduled for deactivation, we remove the scheduling as it is now meant to open

          if (_this3.openTrigger === 'hover' && _this3.dropdownDeactivationTimeouts[menuToOpen.id]) {
            clearTimeout(_this3.dropdownDeactivationTimeouts[menuToOpen.id]);
            delete _this3.dropdownDeactivationTimeouts[menuToOpen.id];
          } // If we are in inline navigation, we may be on the edge of the screen. If that's the case we check if any of the sub-sub-menu goes outside the screen. If
          // this is the case, sub-sub-menu will be displayed on the left


          if (_this3.useInlineNavigation) {
            var windowWidth = window.innerWidth,
                shouldOpenLeft = false;
            menuToOpen.querySelectorAll('.nav-dropdown').forEach(function (subSubMenu) {
              if (subSubMenu.getBoundingClientRect().right > windowWidth) {
                shouldOpenLeft = true;
              }
            });

            if (shouldOpenLeft) {
              menuToOpen.classList.add('nav-dropdown--inverse');
            }
          }

          target.closest('[data-type="menu"]').classList.add('nav-dropdown--glued');

          if (menuToOpen.classList.contains('mega-menu')) {
            _this3._setupMegaMenu(menuToOpen);
          }

          if (_this3.openTrigger === 'click') {
            _this3.openItems.push(target.parentNode);
          }
        }; // If we are using on click, we can directly close, otherwise we apply a slight delay before closing the menu,
        // so that the deactivation could be cancelled if the mouse is back to the dropdown (which can happen when doing
        // horizontal movement)


        if (this.openTrigger === 'click') {
          callback();
        } else {
          // Any other menu that has been scheduled for activation must be deactivated as it's now this one that is supposed to open
          for (var toDeactivate in this.dropdownActivationTimeouts) {
            if (this.dropdownActivationTimeouts.hasOwnProperty(toDeactivate)) {
              clearTimeout(this.dropdownActivationTimeouts[toDeactivate]);
              delete this.dropdownActivationTimeouts[toDeactivate];
            }
          }

          callback();
          /*this.dropdownActivationTimeouts[menuToOpen.id] = setTimeout(() => {
            callback();
            delete this.dropdownActivationTimeouts[menuToOpen.id];
          }, this.DROPDOWN_TIMEOUT);*/
        }
      }
      /**
       * Close a dropdown menu
       */

    }, {
      key: "_deactivateDropdown",
      value: function _deactivateDropdown(event, target) {
        var _this4 = this;

        // event.relatedTarget is the new target. This allows to make sure to only close the dropdown if we leave the containing div
        if (this.openTrigger === 'hover' && target.contains(event.relatedTarget)) {
          return;
        }

        var menuToClose = target.querySelector('[aria-hidden]');

        var callback = function callback() {
          target.classList.remove('is-dropdown-open');
          target.querySelector('[data-type="menuitem"]').setAttribute('aria-expanded', 'false');
          var menuToClose = target.querySelector('[aria-hidden]');
          menuToClose.setAttribute('aria-hidden', 'true');
          target.closest('[data-type="menu"]').classList.remove('nav-dropdown--glued'); // If on click, we also close all sub-menus that may be open

          if (_this4.openTrigger === 'click') {
            target.querySelectorAll('.is-dropdown-open').forEach(function (item) {
              _this4._deactivateDropdown(event, item);

              var index = _this4.openItems.indexOf(item);

              if (index > -1) {
                _this4.openItems.splice(index, 1);
              }
            }); // It has been deactivated so we also remove this one

            var index = _this4.openItems.indexOf(target);

            if (index > -1) {
              _this4.openItems.splice(index, 1);
            }
          }
        }; // If we are using on click, we can directly close, otherwise we apply a slight delay before closing the menu,
        // so that the deactivation could be cancelled if the mouse is back to the dropdown (which can happen when doing
        // horizontal movement)


        if (this.openTrigger === 'click') {
          callback();
        } else {
          this.dropdownDeactivationTimeouts[menuToClose.id] = setTimeout(function () {
            callback();
            delete _this4.dropdownDeactivationTimeouts[menuToClose.id];
          }, this.DROPDOWN_TIMEOUT);
        }
      }
      /**
       * This method allows to block the dropdown deactivation if the mouse is back on the element. This may happen for
       * instance when the customer does a kind of diagonal movement to the menu. While the mouse may leave the opening
       * item, we want the item to stay open
       */

    }, {
      key: "_blockDropdownDeactivation",
      value: function _blockDropdownDeactivation(event, target) {
        if (this.dropdownDeactivationTimeouts[target.id] !== undefined) {
          clearTimeout(this.dropdownDeactivationTimeouts[target.id]);
          delete this.dropdownDeactivationTimeouts[target.id]; // If we blocked the deactivation, then we must also remove any pending menu that could have been scheduled to open

          for (var toDeactivate in this.dropdownActivationTimeouts) {
            if (this.dropdownActivationTimeouts.hasOwnProperty(toDeactivate)) {
              clearTimeout(this.dropdownActivationTimeouts[toDeactivate]);
              delete this.dropdownActivationTimeouts[toDeactivate];
            }
          }
        }
      }
      /**
       * Set the maximum width allowed for the given mega-menu. For the inline style, it is always full width so nothing to do
       */

    }, {
      key: "_setupMegaMenu",
      value: function _setupMegaMenu(megaMenu) {
        if (!this.useInlineNavigation) {
          var navDropdownWidth = megaMenu.closest('.nav-dropdown').clientWidth;
          megaMenu.style.maxWidth = Math.min(1400 - navDropdownWidth, parseInt(window.innerWidth - navDropdownWidth - 80)) + 'px';
        }
      }
      /**
       * Fix inline navigation
       */

    }, {
      key: "_setupInlineNavigation",
      value: function _setupInlineNavigation() {
        var _this5 = this;

        this.element.querySelectorAll('.mega-menu').forEach(function (megaMenu) {
          megaMenu.closest('.nav-bar__item').classList.add('nav-bar__item--static');
        }); // If using the inline navigation, we also set up a mutation observer whenever a sub-sub-dropdown is open, in order
        // to calculate their distance from the top of the screen, so we can apply a max-height properly

        if ('MutationObserver' in window) {
          this.dropdownMenuObserver = new MutationObserver(function (mutationList) {
            mutationList.forEach(function (mutation) {
              if (mutation.target.getAttribute('aria-hidden') === 'false') {
                // We set a CSS variable, so we can do various calculation in CSS
                mutation.target.style.setProperty('--distance-to-top', "".concat(mutation.target.getBoundingClientRect().top, "px"));
              }
            });
          });
          this.element.querySelectorAll('.nav-dropdown .nav-dropdown').forEach(function (item) {
            _this5.dropdownMenuObserver.observe(item, {
              attributes: true,
              attributeFilter: ['aria-hidden']
            });
          });
        }
      }
    }]);

    return DesktopNavigation;
  }();

  var CollectionFilterDrawer = /*#__PURE__*/function () {
    function CollectionFilterDrawer(options) {
      _classCallCheck(this, CollectionFilterDrawer);

      this.element = document.getElementById('mobile-collection-filters');
      this.delegateRoot = new Delegate(document.documentElement);
      this.options = options;
      this.isOpen = false;

      if (this.element) {
        this._attachListeners();
      }
    }

    _createClass(CollectionFilterDrawer, [{
      key: "destroy",
      value: function destroy() {
        this.delegateRoot.off();
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this.delegateRoot.on('click', '[aria-controls="mobile-collection-filters"][data-action="open-drawer"]', this.open.bind(this));
        this.delegateRoot.on('click', "#mobile-collection-filters [data-action=\"close-drawer\"]", this.close.bind(this));
        document.addEventListener('collection-filter:close', this.close.bind(this));
        document.addEventListener('click', this._detectOutsideClick.bind(this));
        window.addEventListener('resize', this._computeDrawerHeight.bind(this));
      }
    }, {
      key: "open",
      value: function open(event) {
        if (event) {
          event.stopPropagation();
        }

        this._computeDrawerHeight();

        this.isOpen = true;
        document.querySelector('[aria-controls="mobile-collection-filters"]').setAttribute('aria-expanded', 'true');
        document.getElementById('mobile-collection-filters').setAttribute('aria-hidden', 'false');
        document.body.classList.add('no-mobile-scroll');
      }
    }, {
      key: "close",
      value: function close(event) {
        if (event) {
          event.stopPropagation();
        }

        this.isOpen = false;
        document.querySelector('[aria-controls="mobile-collection-filters"]').setAttribute('aria-expanded', 'false');
        document.getElementById('mobile-collection-filters').setAttribute('aria-hidden', 'true');
        document.body.classList.remove('no-mobile-scroll');
      }
    }, {
      key: "_computeDrawerHeight",
      value: function _computeDrawerHeight() {
        document.getElementById('mobile-collection-filters').querySelector('.collection-drawer').style.maxHeight = "".concat(window.innerHeight, "px");
      }
    }, {
      key: "_detectOutsideClick",
      value: function _detectOutsideClick(event) {
        if (this.isOpen && !event.target.closest('.collection-drawer__inner')) {
          this.close();
        }
      }
    }]);

    return CollectionFilterDrawer;
  }();

  var ExitPopup = /*#__PURE__*/function () {
    function ExitPopup(element) {
      _classCallCheck(this, ExitPopup);

      this.element = element;
      this.delegateElement = new Delegate(this.element);
      this.rootDelegateElement = new Delegate(document.body);
      this.options = JSON.parse(element.getAttribute('data-popup-settings'));
      this.hasOpenOnceInCurrentPage = false; // If the popup has been already displayed, we do not display it

      try {
        if (window.location.hash === '#exit-popup' && window.theme.pageType !== 'captcha') {
          this._openPopup();
        }
      } catch (error) {// Some browsers (especially in private mode) throw an exception when trying to access local storage, so we protect ourselves here
      }

      this._attachListeners();
    }

    _createClass(ExitPopup, [{
      key: "destroy",
      value: function destroy() {
        this.delegateElement.off();
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        var _this = this;

        this._onKeyPressedListener = this._onKeyPressed.bind(this);
        /* Some browsers like Android emit a mouseleave event when opening keyboard. This is too unreliable for touch devices */

        if (!Responsive.matchesBreakpoint('supports-hover')) {
          return;
        }

        this.delegateElement.on('click', '[data-action="close-popup"]', this._closePopup.bind(this));
        document.body.addEventListener('mouseleave', function () {
          if (!_this.hasOpenOnceInCurrentPage) {
            if (!_this.options['showOnlyOnce'] || _this.options['showOnlyOnce'] && localStorage.getItem('themeExitPopup') === null) {
              _this._openPopup();
            }
          }
        });
        this._clickOutsideListener = this._checkClickOutside.bind(this);
      }
    }, {
      key: "_openPopup",
      value: function _openPopup() {
        if (!window.theme.isNewsletterPopupOpen) {
          this.element.setAttribute('aria-hidden', 'false');
          localStorage.setItem('themeExitPopup', 'true');
          this.hasOpenOnceInCurrentPage = true;
          window.theme.isExitPopupOpen = true;
          this.delegateElement.on('click', this._clickOutsideListener);
          this.rootDelegateElement.on('keyup', this._onKeyPressedListener);
        }
      }
    }, {
      key: "_closePopup",
      value: function _closePopup() {
        this.element.setAttribute('aria-hidden', 'true');
        window.theme.isExitPopupOpen = false;
        this.delegateElement.off('click', this._clickOutsideListener);
        this.rootDelegateElement.off('keyup', this._onKeyPressedListener);
      }
    }, {
      key: "_checkClickOutside",
      value: function _checkClickOutside(event) {
        if (!this.element.contains(event.target) || this.element === event.target) {
          this._closePopup();
        }
      }
    }, {
      key: "_onKeyPressed",
      value: function _onKeyPressed(event) {
        if (event.key === 'Escape') {
          this._closePopup();
        }
      }
    }]);

    return ExitPopup;
  }();

  /**
   * Simple plugin that handles the loading bar actions
   *
   * This plugin uses delegate events so it's independent of the sections.
   */
  var LoadingBar = /*#__PURE__*/function () {
    function LoadingBar() {
      _classCallCheck(this, LoadingBar);

      this.element = document.querySelector('.loading-bar');

      if (this.element) {
        document.addEventListener('theme:loading:start', this._onLoadingStart.bind(this));
        document.addEventListener('theme:loading:end', this._onLoadingEnd.bind(this));
        this.element.addEventListener('transitionend', this._onTransitionEnd.bind(this));
      }
    }

    _createClass(LoadingBar, [{
      key: "_onLoadingStart",
      value: function _onLoadingStart() {
        this.element.classList.add('is-visible');
        this.element.style.transform = 'scaleX(0.4)';
      }
    }, {
      key: "_onLoadingEnd",
      value: function _onLoadingEnd() {
        this.element.style.transform = 'scaleX(1)';
        this.element.classList.add('is-finished');
      }
    }, {
      key: "_onTransitionEnd",
      value: function _onTransitionEnd(event) {
        if (event.propertyName === 'transform' && this.element.classList.contains('is-finished')) {
          this.element.classList.remove('is-visible');
          this.element.classList.remove('is-finished');
          this.element.style.transform = 'scaleX(0)';
        }
      }
    }]);

    return LoadingBar;
  }();

  var Accessibility = /*#__PURE__*/function () {
    function Accessibility() {
      _classCallCheck(this, Accessibility);
    }

    _createClass(Accessibility, null, [{
      key: "trapFocus",

      /**
       * Traps the focus in a particular container
       */
      value: function trapFocus(container, namespace) {
        this.listeners = this.listeners || {}; // We check if there is an element with the attribute "autofocus"

        var elementToFocus = container.querySelector('[autofocus]') || container;
        container.setAttribute('tabindex', '-1');
        elementToFocus.focus();

        this.listeners[namespace] = function (event) {
          if (container !== event.target && !container.contains(event.target)) {
            elementToFocus.focus();
          }
        };

        document.addEventListener('focusin', this.listeners[namespace]);
      }
      /**
       * Removes the trap of focus in a particular container
       */

    }, {
      key: "removeTrapFocus",
      value: function removeTrapFocus(container, namespace) {
        if (container) {
          container.removeAttribute('tabindex');
        }

        document.removeEventListener('focusin', this.listeners[namespace]);
      }
      /**
       * Reset any previous trap focus
       */

    }, {
      key: "clearTrapFocus",
      value: function clearTrapFocus() {
        for (var key in this.listeners) {
          if (this.listeners.hasOwnProperty(key)) {
            document.removeEventListener('focusin', this.listeners[key]);
          }
        }

        this.listeners = {};
      }
    }]);

    return Accessibility;
  }();

  /**
   * This class handles both the mini cart and the dedicated cart page. It's not the cleanest code on earth but works well :)
   */

  var Cart = /*#__PURE__*/function () {
    function Cart(element, options) {
      _classCallCheck(this, Cart);

      this.element = element;
      this.delegateElement = new Delegate(this.element);
      this.delegateRoot = new Delegate(document.documentElement);
      this.options = options; // Some developers blindly remove the DOM code for the cart, so we have to do a check here to make sure it is here

      if (!this.element) {
        return;
      }

      this.miniCartElement = this.element.querySelector('.mini-cart');
      this.isMiniCartOpen = false;

      if (window.theme.pageType !== 'cart' && this.miniCartElement) {
        this.miniCartToggleElement = this.element.querySelector("[aria-controls=\"".concat(this.miniCartElement.id, "\"]"));

        this._checkMiniCartScrollability();
      }

      this.itemCount = window.theme.cartCount;

      this._attachListeners();
    }

    _createClass(Cart, [{
      key: "destroy",
      value: function destroy() {
        this.delegateElement.off();
        this.delegateRoot.off();
        window.removeEventListener('resize', this._calculateMiniCartHeightListener);
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this._calculateMiniCartHeightListener = this._calculateMiniCartHeight.bind(this);

        if (window.theme.pageType !== 'cart' && window.theme.cartType !== 'page') {
          this.delegateElement.on('click', '[data-action="toggle-mini-cart"]', this._toggleMiniCart.bind(this));
          this.delegateElement.on('keyup', this._checkMiniCartClose.bind(this));
          this.delegateRoot.on('click', this._onWindowClick.bind(this));
          window.addEventListener('resize', this._calculateMiniCartHeightListener);
        }

        this.delegateRoot.on('click', '[data-action="decrease-quantity"]', this._updateQuantity.bind(this));
        this.delegateRoot.on('click', '[data-action="increase-quantity"]', this._updateQuantity.bind(this));
        this.delegateRoot.on('change', '.quantity-selector:not(.quantity-selector--product) .quantity-selector__value', this._updateQuantity.bind(this));
        this.delegateRoot.on('keyup', '.quantity-selector:not(.quantity-selector--product) .quantity-selector__value', this._updateQuantitySize.bind(this));
        this.delegateRoot.on('keydown', '.quantity-selector__value', this._blockEnterKey.bind(this));
        this.delegateRoot.on('product:added', this._onProductAdded.bind(this));
        this.delegateRoot.on('cart:refresh', this._onCartRefresh.bind(this));
      }
    }, {
      key: "_toggleMiniCart",
      value: function _toggleMiniCart(event) {
        if (event) {
          event.preventDefault();
        }

        if (this.isMiniCartOpen) {
          this._closeMiniCart();
        } else {
          this._openMiniCart();
        }
      }
    }, {
      key: "_openMiniCart",
      value: function _openMiniCart() {
        this.miniCartToggleElement.setAttribute('aria-expanded', 'true'); // If we are on mobile phone we also set the aria-expanded attribute to true on the icon state holder

        if (Responsive.getCurrentBreakpoint() === 'phone') {
          this.miniCartToggleElement.querySelector('.header__cart-icon').setAttribute('aria-expanded', 'true');
        } // Finally also set aria-hidden to false on controlled element


        this.miniCartElement.setAttribute('aria-hidden', 'false');
        this.isMiniCartOpen = true;

        this._calculateMiniCartHeight(); // Trap the focus


        Accessibility.trapFocus(this.miniCartElement, 'mini-cart');
        document.body.classList.add('no-mobile-scroll');
      }
    }, {
      key: "_closeMiniCart",
      value: function _closeMiniCart() {
        this.miniCartToggleElement.setAttribute('aria-expanded', 'false'); // If we are on mobile phone we also set the aria-expanded attribute to true on the icon state holder

        if (Responsive.getCurrentBreakpoint() === 'phone') {
          this.miniCartToggleElement.querySelector('.header__cart-icon').setAttribute('aria-expanded', 'false');
          this.miniCartElement.style.maxHeight = '';
        } // Finally also set aria-hidden to false on controlled element


        this.miniCartElement.setAttribute('aria-hidden', 'true');
        this.isMiniCartOpen = false;
        document.body.classList.remove('no-mobile-scroll');
      }
    }, {
      key: "_checkMiniCartClose",
      value: function _checkMiniCartClose(event) {
        if (!this.isMiniCartOpen) {
          return;
        }

        if (event.key === 'Escape') {
          this._closeMiniCart();
        }
      }
    }, {
      key: "_calculateMiniCartHeight",
      value: function _calculateMiniCartHeight() {
        if (Responsive.getCurrentBreakpoint() === 'phone') {
          if (this.isMiniCartOpen) {
            var headerGroupHeight = 0;
            Array.from(document.querySelectorAll('.shopify-section-group-header-group')).forEach(function (item) {
              if (item.classList.contains('shopify-section--announcement-bar') && window.scrollY > item.clientHeight) ; else {
                headerGroupHeight += item.clientHeight;
              }
            });
            var maxHeight = window.innerHeight - headerGroupHeight;
            this.miniCartElement.style.maxHeight = "".concat(maxHeight, "px"); // We also need to calculate the content part height to avoid any issue on Chrome

            var miniCartContentElement = this.miniCartElement.querySelector('.mini-cart__content'),
                miniCartRecapElement = this.miniCartElement.querySelector('.mini-cart__recap');

            if (miniCartRecapElement) {
              miniCartContentElement.style.maxHeight = "".concat(maxHeight - miniCartRecapElement.clientHeight, "px");
            }
          } else {
            this.miniCartElement.style.maxHeight = '';
            this.miniCartElement.querySelector('.mini-cart__content').style.maxHeight = '';
          }
        } else {
          this.miniCartElement.style.maxHeight = '';
          this.miniCartElement.querySelector('.mini-cart__content').style.maxHeight = '';
        }
      }
      /**
       * Change the quantity of the cart
       */

    }, {
      key: "_updateQuantity",
      value: function _updateQuantity(event, target) {
        var _this = this;

        var parsedQuantity = 1;

        if (target.tagName === 'INPUT') {
          parsedQuantity = parseInt(target.value);
        } else {
          parsedQuantity = parseInt(target.getAttribute('data-quantity'));
        } // If we are in "page" mode, we reload the page instead of doing that in Ajax to have a better compatibility with apps


        if (window.theme.cartType === 'page') {
          if (target.hasAttribute('data-href')) {
            window.location.href = target.getAttribute('data-href');
          } else {
            window.location.href = "".concat(window.routes.cartChangeUrl, "?line=").concat(target.getAttribute('data-line'), "&quantity=").concat(parsedQuantity);
          }

          return;
        }

        document.dispatchEvent(new CustomEvent('theme:loading:start'));
        fetch("".concat(window.routes.cartChangeUrl, ".js"), {
          body: JSON.stringify({
            line: target.getAttribute('data-line'),
            quantity: parsedQuantity
          }),
          credentials: 'same-origin',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest' // This is needed as currently there is a bug in Shopify that assumes this header

          }
        }).then(function (cart) {
          cart.json().then(function (content) {
            _this.itemCount = content['item_count'];

            _this._rerender(false).then(function () {
              document.dispatchEvent(new CustomEvent('theme:loading:end'));
            });
          });
        });
        event.preventDefault();
      }
    }, {
      key: "_updateQuantitySize",
      value: function _updateQuantitySize(event, target) {
        target.setAttribute('size', Math.max(target.value.length, 2));
      }
    }, {
      key: "_blockEnterKey",
      value: function _blockEnterKey(event) {
        if (event.key === 'Enter') {
          return false;
        }
      }
      /**
       * This method is called internally to rerender the cart, based on the content returned by Shopify Ajax API.
       * We could save some performance by updating directly in JavaScript instead of doing a GET call to get the HTML
       * from Shopify, but by experience, this allows for easier app integration as it allows the Liquid to re-run
       * all the time and hence having easier logic.
       */

    }, {
      key: "_rerender",
      value: function _rerender() {
        var _this2 = this;

        var scrollToTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        // Note: appending a timestamp is necessary as the polyfill on IE11 and lower does not support the "cache" property
        var url = '';

        if (window.theme.pageType !== 'cart') {
          url = "".concat(window.routes.cartUrl, "?section_id=mini-cart");
        } else {
          var cartSection = document.querySelector('[data-section-type="cart"]');
          url = "".concat(window.routes.cartUrl, "?section_id=").concat(cartSection.getAttribute('data-section-id'));
        }

        return fetch(url, {
          credentials: 'same-origin',
          method: 'GET',
          headers: {
            'Cache-Control': 'no-cache'
          }
        }).then(function (content) {
          content.text().then(function (html) {
            // We extract the data-item-count from the returned element
            var myDiv = document.createElement('div');
            myDiv.innerHTML = html;
            myDiv = myDiv.firstElementChild;

            if (myDiv.firstElementChild && myDiv.firstElementChild.hasAttribute('data-item-count')) {
              _this2.itemCount = parseInt(myDiv.firstElementChild.getAttribute('data-item-count'));
            }

            _this2.element.querySelector('.header__cart-count').textContent = _this2.itemCount;

            if (window.theme.cartType !== 'page') {
              if (window.theme.pageType !== 'cart') {
                // Note: we could use outerHTML here but outerHTML does not update the reference to new object
                var tempElement = document.createElement('div');
                tempElement.innerHTML = html; // When we re-render, we need to preserve the scroll position when content changes

                var miniCartItemListElement = _this2.miniCartElement.querySelector('.mini-cart__line-item-list'),
                    scrollPosition = null;

                if (miniCartItemListElement) {
                  scrollPosition = miniCartItemListElement.scrollTop;
                }

                _this2.miniCartElement.innerHTML = tempElement.querySelector('.mini-cart').innerHTML;

                var newMiniCartItemListElement = _this2.miniCartElement.querySelector('.mini-cart__line-item-list');

                if (newMiniCartItemListElement && scrollPosition !== null) {
                  newMiniCartItemListElement.scrollTop = scrollPosition;
                }

                _this2._checkMiniCartScrollability();

                _this2._calculateMiniCartHeight();

                _this2.element.dispatchEvent(new CustomEvent('cart:rerendered'));
              } else {
                // The replacement of the DOM here could be made better and more resilient (maybe exploring using a virtual DOM approach in future?)
                var _tempElement = document.createElement('div');

                _tempElement.innerHTML = html;
                var originalCart = document.querySelector('[data-section-type="cart"]');
                originalCart.innerHTML = _tempElement.querySelector('[data-section-type="cart"]').innerHTML;

                if (scrollToTop) {
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  });
                }

                _this2.element.dispatchEvent(new CustomEvent('cart:rerendered', {
                  bubbles: true
                }));
              }
            }
          });
        });
      }
      /**
       * Check if the mini-cart is scrollable
       */

    }, {
      key: "_checkMiniCartScrollability",
      value: function _checkMiniCartScrollability() {
        var miniCartItemList = this.miniCartElement.querySelector('.mini-cart__line-item-list');

        if (miniCartItemList && miniCartItemList.scrollHeight > miniCartItemList.clientHeight) {
          miniCartItemList.classList.add('is-scrollable');
        }
      }
      /**
       * This callback is automatically called when a variant has been added, which allows us to open it and re-render
       */

    }, {
      key: "_onProductAdded",
      value: function _onProductAdded(event) {
        var _this3 = this;

        this.itemCount += event.detail.quantity;
        /* Add the quantity added */

        this._onCartRefresh().then(function () {
          if (window.theme.pageType !== 'cart') {
            // If we don't have the sticky header enabled, we scroll to top to make sure it is visible
            if (window.theme.cartType === 'drawer' && !_this3.options['useStickyHeader']) {
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
              window.addEventListener('scrollend', function () {
                return _this3._calculateMiniCartHeight();
              });
            }

            if (window.theme.cartType === 'message' && event.detail.button) {
              var originalMessage = event.detail.button.innerHTML;
              event.detail.button.innerHTML = window.languages.productAddedShort;
              setTimeout(function () {
                event.detail.button.innerHTML = originalMessage;
              }, 1500);
            }

            if (window.theme.pageType !== 'cart' && window.theme.cartType === 'drawer') {
              _this3._openMiniCart();
            }
          }
        });
      }
      /**
       * Allows to refresh the mini-cart
       */

    }, {
      key: "_onCartRefresh",
      value: function _onCartRefresh(event) {
        var scrollToTop = true;

        if (event && event.detail) {
          scrollToTop = event.detail.scrollToTop;
        }

        return this._rerender(scrollToTop).then(function () {
          document.dispatchEvent(new CustomEvent('theme:loading:end'));
        });
      }
      /**
       * We need to catch click outside the element to automatically close mini-cart
       */

    }, {
      key: "_onWindowClick",
      value: function _onWindowClick(event) {
        if (this.miniCartElement && this.isMiniCartOpen && !this.element.contains(event.target)) {
          this._closeMiniCart();
        }
      }
    }]);

    return Cart;
  }();

  var MobileNavigation = /*#__PURE__*/function () {
    function MobileNavigation(element) {
      _classCallCheck(this, MobileNavigation);

      this.element = element;
      this.delegateElement = new Delegate(this.element);
      this.delegateRoot = new Delegate(document.documentElement);
      this.mobileMenuElement = this.element.querySelector('.mobile-menu');
      this.mobileMenuToggleElement = this.element.querySelector("[aria-controls=\"".concat(this.mobileMenuElement.id, "\"]"));
      this.isOpen = false;

      this._attachListeners();
    }

    _createClass(MobileNavigation, [{
      key: "destroy",
      value: function destroy() {
        this.delegateElement.off();
        this.delegateRoot.off();
        window.removeEventListener('resize', this._calculatMaxHeightListener);
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this._calculatMaxHeightListener = this._calculateMaxHeight.bind(this);
        this.delegateElement.on('click', '[data-action="toggle-menu"]', this._toggleMenu.bind(this));
        this.delegateElement.on('click', '[data-action="open-panel"]', this._openPanel.bind(this));
        this.delegateElement.on('click', '[data-action="close-panel"]', this._closePanel.bind(this));
        this.delegateRoot.on('click', this._onWindowClick.bind(this));
        window.addEventListener('resize', this._calculatMaxHeightListener);
      }
    }, {
      key: "_toggleMenu",
      value: function _toggleMenu() {
        this.isOpen = !this.isOpen;
        this.mobileMenuToggleElement.setAttribute('aria-expanded', this.isOpen ? 'true' : 'false');
        this.mobileMenuElement.setAttribute('aria-hidden', this.isOpen ? 'false' : 'true');

        if (!this.isOpen) {
          this.mobileMenuElement.style.maxHeight = ''; // If closed, we need to close all sub-menus

          this.element.querySelectorAll('.mobile-menu__panel.is-open').forEach(function (item) {
            item.classList.remove('is-open');
          });
          document.body.classList.remove('no-mobile-scroll');
        } else {
          // We need to restrict the height
          this._calculateMaxHeight();

          document.body.classList.add('no-mobile-scroll');
        }
      }
    }, {
      key: "_openPanel",
      value: function _openPanel(event, target) {
        target.setAttribute('aria-expanded', 'true');
        this.element.querySelector("#".concat(target.getAttribute('aria-controls'))).classList.add('is-open');
      }
    }, {
      key: "_closePanel",
      value: function _closePanel(event, target) {
        // We first get the panel to be closed
        var panelToClose = target.closest('.mobile-menu__panel.is-open');
        panelToClose.classList.remove('is-open'); // Then update the ARIA attributes for button that control it

        this.element.querySelector("[aria-controls=\"".concat(panelToClose.id, "\"]")).setAttribute('aria-expanded', 'false');
      }
    }, {
      key: "_calculateMaxHeight",
      value: function _calculateMaxHeight() {
        if (this.isOpen) {
          this.mobileMenuElement.style.maxHeight = "".concat(window.innerHeight - document.querySelector('.header').getBoundingClientRect().bottom, "px");
        }
      }
    }, {
      key: "_onWindowClick",
      value: function _onWindowClick(event) {
        if (this.isOpen && !this.element.contains(event.target)) {
          this._toggleMenu();
        }
      }
    }]);

    return MobileNavigation;
  }();

  var ModalManager = /*#__PURE__*/function () {
    function ModalManager() {
      _classCallCheck(this, ModalManager);

      this.domDelegate = new Delegate(document.body);
      this.activeModalsQueue = [];
      var activeModal = document.querySelector('.modal[aria-hidden="false"]');

      if (activeModal) {
        this.activeModalsQueue.push(activeModal);
      }

      this._attachListeners();
    }

    _createClass(ModalManager, [{
      key: "_attachListeners",
      value: function _attachListeners() {
        this._onKeyPressedListener = this._onKeyPressed.bind(this);
        this.domDelegate.on('click', '[data-action="open-modal"]', this._openModal.bind(this));
        this.domDelegate.on('click', '[data-action="close-modal"]', this._closeModal.bind(this)); // We allow any other code to force closing a modal by listening to the "modal:close" event

        document.addEventListener('modal:close', this._closeModal.bind(this));
        this._clickOutsideListener = this._checkClickOutside.bind(this); // If there is already an active modal when the page is loaded, we directly attach the listener on outside click

        if (this.activeModalsQueue.length > 0) {
          document.documentElement.classList.add('is-locked');
          this.domDelegate.on('click', this._clickOutsideListener);
        }
      }
    }, {
      key: "_openModal",
      value: function _openModal(event, target) {
        var _this = this;

        var modal = document.querySelector("#".concat(target.getAttribute('aria-controls')));

        if (modal) {
          var onOpen = function onOpen(event) {
            if (event.propertyName === 'visibility') {
              modal.removeEventListener('transitionend', onOpen);
              Accessibility.trapFocus(modal, 'modal' + modal.id);

              _this.activeModalsQueue.push(modal);
            }
          };

          modal.addEventListener('transitionend', onOpen);
          modal.setAttribute('aria-hidden', 'false');
          document.documentElement.classList.add('is-locked');
          this.domDelegate.on('click', this._clickOutsideListener);
          this.domDelegate.on('keyup', this._onKeyPressedListener);
          return false; // Prevent the event to be propagated to the clickOutsideListener immediately
        }
      }
    }, {
      key: "_closeModal",
      value: function _closeModal() {
        if (this.activeModalsQueue.length > 0) {
          var modalToClose = this.activeModalsQueue.pop();

          var onClose = function onClose(event) {
            if (event.propertyName === 'visibility') {
              modalToClose.removeEventListener('transitionend', onClose);
              Accessibility.removeTrapFocus(modalToClose, 'modal' + modalToClose.id); // We emit an event saying it has closed, which can give the option to do cleanup

              modalToClose.dispatchEvent(new CustomEvent('modal:closed'));
            }
          };

          modalToClose.addEventListener('transitionend', onClose);
          modalToClose.setAttribute('aria-hidden', 'true');
          document.documentElement.classList.remove('is-locked');
          this.domDelegate.off('click', this._clickOutsideListener);
          this.domDelegate.off('keyup', this._onKeyPressedListener);
        }
      }
    }, {
      key: "_checkClickOutside",
      value: function _checkClickOutside(event) {
        if (this.activeModalsQueue.length === 0) {
          return;
        }

        var modalToClose = this.activeModalsQueue[this.activeModalsQueue.length - 1];

        if (modalToClose && (!modalToClose.contains(event.target) || modalToClose === event.target)) {
          this._closeModal();
        }
      }
    }, {
      key: "_onKeyPressed",
      value: function _onKeyPressed(event) {
        if (event.key === 'Escape') {
          this._closeModal();
        }
      }
    }]);

    return ModalManager;
  }();

  var NewsletterPopup = /*#__PURE__*/function () {
    function NewsletterPopup(element) {
      _classCallCheck(this, NewsletterPopup);

      this.element = element;
      this.delegateElement = new Delegate(this.element);
      this.rootDelegateElement = new Delegate(document.body);
      this.options = JSON.parse(element.getAttribute('data-popup-settings')); // If the popup has been already displayed, we do not display it

      try {
        if (window.location.hash === '#newsletter-popup' && window.theme.pageType !== 'captcha') {
          this._openPopup();
        } else if (!this.options['showOnlyOnce'] || this.options['showOnlyOnce'] && localStorage.getItem('themePopup') === null) {
          setTimeout(this._openPopup.bind(this), this.options['apparitionDelay'] * 1000);
        }
      } catch (error) {// Some browsers (especially in private mode) throw an exception when trying to access local storage, so we protect ourselves here
      }

      this._attachListeners();
    }

    _createClass(NewsletterPopup, [{
      key: "destroy",
      value: function destroy() {
        this.delegateElement.off();
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this._onKeyPressedListener = this._onKeyPressed.bind(this);
        this.delegateElement.on('click', '[data-action="close-popup"]', this._closePopup.bind(this));
        this._clickOutsideListener = this._checkClickOutside.bind(this);
      }
    }, {
      key: "_openPopup",
      value: function _openPopup() {
        if (!window.theme.isExitPopupOpen) {
          this.element.setAttribute('aria-hidden', 'false');
          localStorage.setItem('themePopup', 'true');
          window.theme.isNewsletterPopupOpen = true;
          this.delegateElement.on('click', this._clickOutsideListener);
          this.rootDelegateElement.on('keyup', this._onKeyPressedListener);
        }
      }
    }, {
      key: "_closePopup",
      value: function _closePopup() {
        this.element.setAttribute('aria-hidden', 'true');
        window.theme.isNewsletterPopupOpen = false;
        this.delegateElement.off('click');
        this.rootDelegateElement.off('keyup', this._onKeyPressedListener);
      }
    }, {
      key: "_checkClickOutside",
      value: function _checkClickOutside(event) {
        if (!this.element.contains(event.target) || this.element === event.target) {
          this._closePopup();
        }
      }
    }, {
      key: "_onKeyPressed",
      value: function _onKeyPressed(event) {
        if (event.key === 'Escape') {
          this._closePopup();
        }
      }
    }]);

    return NewsletterPopup;
  }();

  var fastdom = createCommonjsModule(function (module) {
    !function (win) {
      /**
       * Mini logger
       *
       * @return {Function}
       */

      var debug =  function () {};
      /**
       * Normalized rAF
       *
       * @type {Function}
       */

      var raf = win.requestAnimationFrame || win.webkitRequestAnimationFrame || win.mozRequestAnimationFrame || win.msRequestAnimationFrame || function (cb) {
        return setTimeout(cb, 16);
      };
      /**
       * Initialize a `FastDom`.
       *
       * @constructor
       */


      function FastDom() {
        var self = this;
        self.reads = [];
        self.writes = [];
        self.raf = raf.bind(win); // test hook
      }

      FastDom.prototype = {
        constructor: FastDom,

        /**
         * Adds a job to the read batch and
         * schedules a new frame if need be.
         *
         * @param  {Function} fn
         * @param  {Object} ctx the context to be bound to `fn` (optional).
         * @public
         */
        measure: function measure(fn, ctx) {
          var task = !ctx ? fn : fn.bind(ctx);
          this.reads.push(task);
          scheduleFlush(this);
          return task;
        },

        /**
         * Adds a job to the
         * write batch and schedules
         * a new frame if need be.
         *
         * @param  {Function} fn
         * @param  {Object} ctx the context to be bound to `fn` (optional).
         * @public
         */
        mutate: function mutate(fn, ctx) {
          var task = !ctx ? fn : fn.bind(ctx);
          this.writes.push(task);
          scheduleFlush(this);
          return task;
        },

        /**
         * Clears a scheduled 'read' or 'write' task.
         *
         * @param {Object} task
         * @return {Boolean} success
         * @public
         */
        clear: function clear(task) {
          return remove(this.reads, task) || remove(this.writes, task);
        },

        /**
         * Extend this FastDom with some
         * custom functionality.
         *
         * Because fastdom must *always* be a
         * singleton, we're actually extending
         * the fastdom instance. This means tasks
         * scheduled by an extension still enter
         * fastdom's global task queue.
         *
         * The 'super' instance can be accessed
         * from `this.fastdom`.
         *
         * @example
         *
         * var myFastdom = fastdom.extend({
         *   initialize: function() {
         *     // runs on creation
         *   },
         *
         *   // override a method
         *   measure: function(fn) {
         *     // do extra stuff ...
         *
         *     // then call the original
         *     return this.fastdom.measure(fn);
         *   },
         *
         *   ...
         * });
         *
         * @param  {Object} props  properties to mixin
         * @return {FastDom}
         */
        extend: function extend(props) {
          if (_typeof(props) != 'object') throw new Error('expected object');
          var child = Object.create(this);
          mixin(child, props);
          child.fastdom = this; // run optional creation hook

          if (child.initialize) child.initialize();
          return child;
        },
        // override this with a function
        // to prevent Errors in console
        // when tasks throw
        "catch": null
      };
      /**
       * Schedules a new read/write
       * batch if one isn't pending.
       *
       * @private
       */

      function scheduleFlush(fastdom) {
        if (!fastdom.scheduled) {
          fastdom.scheduled = true;
          fastdom.raf(flush.bind(null, fastdom));
        }
      }
      /**
       * Runs queued `read` and `write` tasks.
       *
       * Errors are caught and thrown by default.
       * If a `.catch` function has been defined
       * it is called instead.
       *
       * @private
       */


      function flush(fastdom) {
        var writes = fastdom.writes;
        var reads = fastdom.reads;
        var error;

        try {
          debug('flushing reads', reads.length);
          runTasks(reads);
          debug('flushing writes', writes.length);
          runTasks(writes);
        } catch (e) {
          error = e;
        }

        fastdom.scheduled = false; // If the batch errored we may still have tasks queued

        if (reads.length || writes.length) scheduleFlush(fastdom);

        if (error) {
          debug('task errored', error.message);
          if (fastdom["catch"]) fastdom["catch"](error);else throw error;
        }
      }
      /**
       * We run this inside a try catch
       * so that if any jobs error, we
       * are able to recover and continue
       * to flush the batch until it's empty.
       *
       * @private
       */


      function runTasks(tasks) {
        var task;

        while (task = tasks.shift()) {
          task();
        }
      }
      /**
       * Remove an item from an Array.
       *
       * @param  {Array} array
       * @param  {*} item
       * @return {Boolean}
       */


      function remove(array, item) {
        var index = array.indexOf(item);
        return !!~index && !!array.splice(index, 1);
      }
      /**
       * Mixin own properties of source
       * object into the target.
       *
       * @param  {Object} target
       * @param  {Object} source
       */


      function mixin(target, source) {
        for (var key in source) {
          if (source.hasOwnProperty(key)) target[key] = source[key];
        }
      } // There should never be more than
      // one instance of `FastDom` in an app


      var exports = win.fastdom = win.fastdom || new FastDom(); // jshint ignore:line
      // Expose to CJS & AMD

      module.exports = exports;
    }(typeof window !== 'undefined' ? window : commonjsGlobal);
  });

  var OverflowScroller = /*#__PURE__*/function () {
    function OverflowScroller(element, options) {
      _classCallCheck(this, OverflowScroller);

      if (!element) {
        return;
      }

      this.element = element;
      this.options = options;
      this.lastKnownY = window.scrollY;
      this.currentTop = 0;
      this.initialTopOffset = options['offsetTop'] || parseInt(window.getComputedStyle(this.element).top);

      this._attachListeners();
    }

    _createClass(OverflowScroller, [{
      key: "destroy",
      value: function destroy() {
        window.removeEventListener('scroll', this._checkPositionListener);
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this._checkPositionListener = this._checkPosition.bind(this);
        window.addEventListener('scroll', this._checkPositionListener);
      }
    }, {
      key: "_checkPosition",
      value: function _checkPosition() {
        var _this = this;

        fastdom.measure(function () {
          var bounds = _this.element.getBoundingClientRect(),
              maxTop = bounds.top + window.scrollY - _this.element.offsetTop + _this.initialTopOffset,
              minTop = _this.element.clientHeight - window.innerHeight + (_this.options['offsetBottom'] || 0);

          if (window.scrollY < _this.lastKnownY) {
            _this.currentTop -= window.scrollY - _this.lastKnownY;
          } else {
            _this.currentTop += _this.lastKnownY - window.scrollY;
          }

          _this.currentTop = Math.min(Math.max(_this.currentTop, -minTop), maxTop, _this.initialTopOffset);
          _this.lastKnownY = window.scrollY;
        });
        fastdom.mutate(function () {
          _this.element.style.top = "".concat(_this.currentTop, "px");
        });
      }
    }]);

    return OverflowScroller;
  }();

  var PopoverManager = /*#__PURE__*/function () {
    function PopoverManager() {
      _classCallCheck(this, PopoverManager);

      this.delegateElement = new Delegate(document.body);
      this.delegateRoot = new Delegate(document.documentElement);
      this.activePopover = null;

      this._attachListeners();
    }

    _createClass(PopoverManager, [{
      key: "_attachListeners",
      value: function _attachListeners() {
        this._onLooseFocusListener = this._onLooseFocus.bind(this);
        this.delegateElement.on('click', '[data-action="toggle-popover"]', this._togglePopover.bind(this));
        this.delegateElement.on('click', '[data-action="show-popover-panel"]', this._showPanel.bind(this));
        this.delegateRoot.on('click', this._onWindowClick.bind(this));
        document.addEventListener('popover:close', this._closeActivePopover.bind(this));
        window.addEventListener('resize', this._windowResized.bind(this));
      }
    }, {
      key: "_togglePopover",
      value: function _togglePopover(event, target) {
        var hasActivePopover = this.activePopover !== null,
            previousActivePopoverId = this.activePopover ? this.activePopover.id : null; // If the toggler has a "data-follow-link" attribute, we match against the breakpoint and redirect to the page

        if (target.hasAttribute('data-follow-link') && Responsive.matchesBreakpoint(target.getAttribute('data-follow-link'))) {
          return;
        }

        if (hasActivePopover) {
          this._closeActivePopover();
        }

        if (!hasActivePopover || hasActivePopover && target.getAttribute('aria-controls') !== previousActivePopoverId) {
          this._openPopover(target);
        }

        event.preventDefault();
      }
    }, {
      key: "_closeActivePopover",
      value: function _closeActivePopover() {
        this.activePopover.setAttribute('aria-hidden', 'true');
        document.querySelector("[aria-controls=\"".concat(this.activePopover.id, "\"]")).setAttribute('aria-expanded', 'false');
        this.activePopover.removeEventListener('focusout', this._onLooseFocusListener);
        this.activePopover = null;
      }
    }, {
      key: "_openPopover",
      value: function _openPopover(target) {
        var element = document.getElementById(target.getAttribute('aria-controls'));
        target.setAttribute('aria-expanded', 'true');
        element.setAttribute('aria-hidden', 'false'); // If we are on mobile phone we also set the aria-expanded attribute to true on the icon state holder

        if (Responsive.getCurrentBreakpoint() === 'phone') {
          element.style.height = "".concat(window.innerHeight - document.querySelector('.header').getBoundingClientRect().bottom, "px");
        } else {
          element.style.height = ''; // If the popover contains a "panel-list", we set the height to the active panel

          var panelList = element.querySelector('.popover__panel-list');

          if (panelList) {
            panelList.style.height = "".concat(panelList.clientHeight, "px");
          }
        }

        this.activePopover = element;
        this.activePopover.addEventListener('focusout', this._onLooseFocusListener);
      }
    }, {
      key: "_showPanel",
      value: function _showPanel(event, target) {
        // If no active popover, we do nothing
        if (!this.activePopover) {
          return;
        } // Otherwise we get all the panels within the popover


        var panels = this.activePopover.querySelectorAll('.popover__panel');
        panels.forEach(function (panel) {
          if (panel.id === target.getAttribute('aria-controls')) {
            panel.classList.add('is-selected');
            panel.closest('.popover__panel-list').style.height = "".concat(panel.clientHeight, "px");
          } else {
            panel.classList.remove('is-selected');
          }
        });
      }
    }, {
      key: "_onWindowClick",
      value: function _onWindowClick(event) {
        if (event.target.getAttribute('data-action') === 'toggle-popover' || event.target.closest('[data-action="toggle-popover"]')) {
          return;
        }

        if (this.activePopover && !this.activePopover.contains(event.target)) {
          this._closeActivePopover();
        }
      }
    }, {
      key: "_onLooseFocus",
      value: function _onLooseFocus(event) {
        if (this.activePopover && event.relatedTarget !== null && !this.activePopover.contains(event.relatedTarget)) {
          this._closeActivePopover();
        }
      }
    }, {
      key: "_windowResized",
      value: function _windowResized() {
        if (Responsive.getCurrentBreakpoint() === 'phone' && this.activePopover) {
          this.activePopover.style.height = "".concat(window.innerHeight - document.querySelector('.header').getBoundingClientRect().bottom, "px");
        }
      }
    }]);

    return PopoverManager;
  }();

  var ProductItemColorSwatch = /*#__PURE__*/function () {
    function ProductItemColorSwatch(element) {
      _classCallCheck(this, ProductItemColorSwatch);

      this.element = element;
      this.delegateElement = new Delegate(this.element);

      this._attachListeners();

      this.recalculateSwatches();
    }

    _createClass(ProductItemColorSwatch, [{
      key: "destroy",
      value: function destroy() {
        this.delegateElement.off();
        window.removeEventListener('resize', this._recalculateSwatchesListener);
      }
    }, {
      key: "recalculateSwatches",
      value: function recalculateSwatches() {
        var _this = this;

        // If you have too many swatches, it will grow into more than one lines, which is not desirable. Instead,
        // we'd like to only show one line only, and show a "+X" if there are too many swatches
        fastdom.measure(function () {
          // For each swatch list we get the number of swatches, and make sure that we don't display more than 100% of
          // the width
          _this.element.querySelectorAll('.product-item__swatch-list').forEach(function (swatchList) {
            // Get the width of the swatch list (this is 100%)
            var currentWidth = swatchList.clientWidth,
                maxAllowedWidth = parseInt(Math.min(currentWidth, 200)); // A single swatch takes 30px, so let's figure out how many we can fit completely

            var maxFit = Math.floor(maxAllowedWidth / 30); // Now, we add a special class to the one after "maxFit"

            fastdom.mutate(function () {
              var colorSwatches = swatchList.querySelectorAll('.color-swatch'); // For each, we reset the attributes if needed

              colorSwatches.forEach(function (colorSwatch, index) {
                colorSwatch.classList.remove('color-swatch--view-more');

                if (maxFit === index + 1 && maxFit !== colorSwatches.length) {
                  colorSwatch.classList.add('color-swatch--view-more');
                }
              });
            });
          });
        });
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this._recalculateSwatchesListener = this.recalculateSwatches.bind(this);
        this.delegateElement.on('change', '.product-item__swatch-list .color-swatch__radio', this._colorChanged.bind(this));
        window.addEventListener('resize', this._recalculateSwatchesListener);
      }
    }, {
      key: "_colorChanged",
      value: function _colorChanged(event, target) {
        // We need to change the URL of the various links
        var productItem = target.closest('.product-item'),
            variantUrl = target.getAttribute('data-variant-url');
        productItem.querySelector('.product-item__image-wrapper').setAttribute('href', variantUrl);
        productItem.querySelector('.product-item__title').setAttribute('href', variantUrl); // If we have a custom image for the variant, we change it

        var originalImageElement = productItem.querySelector('.product-item__primary-image');

        if (target.hasAttribute('data-image-url') && target.getAttribute('data-media-id') !== originalImageElement.getAttribute('data-media-id')) {
          var newImageElement = document.createElement('img');
          newImageElement.className = 'product-item__primary-image';
          newImageElement.setAttribute('data-media-id', target.getAttribute('data-media-id'));
          newImageElement.setAttribute('src', target.getAttribute('data-image-url')); // Replace the original node

          originalImageElement.parentNode.style.paddingBottom = "".concat(100.0 / newImageElement.getAttribute('data-image-aspect-ratio'), "%");
          originalImageElement.parentNode.replaceChild(newImageElement, originalImageElement);
        }
      }
    }]);

    return ProductItemColorSwatch;
  }();

  var Currency = /*#__PURE__*/function () {
    function Currency() {
      _classCallCheck(this, Currency);
    }

    _createClass(Currency, null, [{
      key: "formatMoney",

      /**
       * Format money values based on your shop currency settings
       *
       * @param  {Number|string} cents - value in cents or dollar amount e.g. 300 cents or 3.00 dollars
       * @param  {String} format - shop money_format setting
       * @return {String} value - formatted value
       */
      value: function formatMoney(cents, format) {
        if (typeof cents === 'string') {
          cents = cents.replace('.', '');
        }

        var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/,
            formatString = format || '${{amount}}';

        function defaultTo(value, defaultValue) {
          return value == null || value !== value ? defaultValue : value;
        }

        function formatWithDelimiters(number, precision, thousands, decimal) {
          precision = defaultTo(precision, 2);
          thousands = defaultTo(thousands, ',');
          decimal = defaultTo(decimal, '.');

          if (isNaN(number) || number == null) {
            return 0;
          }

          number = (number / 100.0).toFixed(precision);
          var parts = number.split('.'),
              dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands),
              centsAmount = parts[1] ? decimal + parts[1] : '';
          return dollarsAmount + centsAmount;
        }

        var value = '';

        switch (formatString.match(placeholderRegex)[1]) {
          case 'amount':
            value = formatWithDelimiters(cents, 2);
            break;

          case 'amount_no_decimals':
            value = formatWithDelimiters(cents, 0);
            break;

          case 'amount_with_space_separator':
            value = formatWithDelimiters(cents, 2, ' ', '.');
            break;

          case 'amount_with_comma_separator':
            value = formatWithDelimiters(cents, 2, '.', ',');
            break;

          case 'amount_with_apostrophe_separator':
            value = formatWithDelimiters(cents, 2, '\'', '.');
            break;

          case 'amount_no_decimals_with_comma_separator':
            value = formatWithDelimiters(cents, 0, '.', ',');
            break;

          case 'amount_no_decimals_with_space_separator':
            value = formatWithDelimiters(cents, 0, ' ');
            break;

          case 'amount_no_decimals_with_apostrophe_separator':
            value = formatWithDelimiters(cents, 0, '\'');
            break;
        }

        if (formatString.indexOf('with_comma_separator') !== -1) {
          return formatString.replace(placeholderRegex, value);
        } else {
          return formatString.replace(placeholderRegex, value);
        }
      }
    }]);

    return Currency;
  }();

  /**
   * This implementation allows to serialize a form
   */
  var Form = /*#__PURE__*/function () {
    function Form() {
      _classCallCheck(this, Form);
    }

    _createClass(Form, null, [{
      key: "serialize",
      value: function serialize(form) {
        function stringKey(key, value) {
          var beginBracket = key.lastIndexOf('[');

          if (beginBracket === -1) {
            var _hash = {};
            _hash[key] = value;
            return _hash;
          }

          var newKey = key.substr(0, beginBracket);
          var newValue = {};
          newValue[key.substring(beginBracket + 1, key.length - 1)] = value;
          return stringKey(newKey, newValue);
        }

        var hash = {};

        for (var i = 0, len = form.elements.length; i < len; i++) {
          var formElement = form.elements[i];

          if (formElement.name === '' || formElement.disabled) {
            continue;
          }

          if (formElement.name && !formElement.disabled && (formElement.checked || /select|textarea/i.test(formElement.nodeName) || /hidden|text|search|tel|url|email|password|datetime|date|month|week|time|datetime-local|number|range|color/i.test(formElement.type))) {
            var stringKeys = stringKey(formElement.name, formElement.value);
            hash = Form.extend(hash, stringKeys);
          }
        }

        return hash;
      }
    }, {
      key: "extend",
      value: function extend() {
        var extended = {};
        var i = 0; // Merge the object into the extended object

        var merge = function merge(obj) {
          for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
              // If property is an object, merge properties
              if (Object.prototype.toString.call(obj[prop]) === '[object Object]') {
                extended[prop] = Form.extend(extended[prop], obj[prop]);
              } else {
                extended[prop] = obj[prop];
              }
            }
          }
        }; // Loop through each object and conduct a merge


        for (; i < arguments.length; i++) {
          merge(arguments[i]);
        }

        return extended;
      }
    }]);

    return Form;
  }();

  /**
   * Handle the store availability management. The parameter is the div that will hold the content. The function
   * "updateWithVariant" must be called whenever the variant is changed.
   */
  var StoreAvailability = /*#__PURE__*/function () {
    function StoreAvailability(element) {
      _classCallCheck(this, StoreAvailability);

      this.element = element;

      if (!this.element) {
        return;
      } // We move the modal outside


      var modal = this.element.querySelector('.store-availabilities-modal');

      if (modal) {
        document.body.appendChild(modal);
      }
    }

    _createClass(StoreAvailability, [{
      key: "updateWithVariant",
      value: function updateWithVariant(variant) {
        if (!this.element) {
          return; // If the element to inject the store availability does not exist, we return immediately
        } // If the variant is null (for instance unavailable variant), we clear the container


        if (!variant) {
          this.element.textContent = '';
          return;
        } // If we have a new variant we render the section


        this._renderAvailabilitySection(variant['id']);
      }
    }, {
      key: "_renderAvailabilitySection",
      value: function _renderAvailabilitySection(id) {
        var _this = this;

        // First we clear the previous content
        this.element.innerHTML = ''; // If there is already an element with the given modal we remove it first

        var availabilityModal = document.getElementById("StoreAvailabilityModal-".concat(id));

        if (availabilityModal) {
          availabilityModal.remove();
        }

        return fetch("".concat(window.routes.rootUrlWithoutSlash, "/variants/").concat(id, "?section_id=store-availability")).then(function (response) {
          return response.text().then(function (content) {
            var fakeDiv = document.createElement('div');
            fakeDiv.innerHTML = content;
            fakeDiv.innerHTML = fakeDiv.firstElementChild.innerHTML;

            if (fakeDiv.firstElementChild.getAttribute('data-count') === '0') {
              return; // Nothing to show
            }

            _this.element.innerHTML = fakeDiv.innerHTML; // In order for our modal system to work we have to append the modal to the body instead

            var availabilityModal = document.getElementById("StoreAvailabilityModal-".concat(id));
            document.body.appendChild(availabilityModal);
          });
        });
      }
    }]);

    return StoreAvailability;
  }();

  var ProductVariants = /*#__PURE__*/function () {
    function ProductVariants(element, options) {
      var _this = this;

      _classCallCheck(this, ProductVariants);

      this.element = element;
      this.delegateElement = new Delegate(this.element);
      this.options = options;
      var productJsonElement = this.element.querySelector('[data-product-json]'); // If we are using placeholder, there is no JSON so we wrap here!

      if (productJsonElement) {
        var jsonData = JSON.parse(productJsonElement.innerHTML);
        this.productData = jsonData['product'];
        this.productOptionsWithValues = jsonData['options_with_values'];
        this.productTemplate = jsonData['template'];
        this.variantsInventories = jsonData['inventories'] || {};
        this.variantSelectors = this.element.querySelectorAll('.product-form__option[data-selector-type]');
        this.masterSelector = this.element.querySelector("#product-select-".concat(this.productData['id'])); // We init value with the first selected variant

        this.productData['variants'].forEach(function (variant) {
          if (variant['id'] === jsonData['selected_variant_id']) {
            _this.currentVariant = variant;
            _this.option1 = variant['option1'];
            _this.option2 = variant['option2'];
            _this.option3 = variant['option3'];
          }
        });
        this.storeAvailability = new StoreAvailability(this.element.querySelector('.product-meta__store-availability-container'));
      }

      this._updateSelectors(this.currentVariant); // We update the selectors on initial load to disable the sold out variants


      this._setupStockCountdown();

      this._attachListeners();
    }

    _createClass(ProductVariants, [{
      key: "destroy",
      value: function destroy() {
        this.delegateElement.off('click');
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this.delegateElement.on('change', '.product-form__single-selector', this._onOptionChanged.bind(this));
        this.delegateElement.on('click', '[data-action="add-to-cart"]', this._addToCart.bind(this));
      }
      /**
       * ---------------------------------------------------------------------------------------------------
       * CODE THAT HANDLE VARIANT CHANGES IN THE FRONT
       *
       * Please note that this code is highly dependant on the markup and classes, so make sure to NOT
       * edit this code
       * ---------------------------------------------------------------------------------------------------
       */

      /**
       * This callback is called whenever the variant changes and allows to update data about the active variant
       */

    }, {
      key: "_onVariantChanged",
      value: function _onVariantChanged(previousVariant, newVariant) {
        // 1st: the prices
        this._updateProductPrices(newVariant, previousVariant); // 2th: update inventory


        this._updateInventory(newVariant, previousVariant); // 3th: update SKU


        this._updateSku(newVariant, previousVariant); // 4th: update the discount label (if necessary)


        this._updateDiscountLabel(newVariant, previousVariant); // 5th: update the unit price (if necessary)


        this._updateUnitPrice(newVariant, previousVariant); // 6th: update selectors


        this._updateSelectors(newVariant, previousVariant); // 7th: the add to cart button


        this._updateAddToCartButton(newVariant, previousVariant); // 8th: store availability


        this.storeAvailability.updateWithVariant(newVariant); // Finally, we send an event so that other system could hook and do their own logic

        this.element.dispatchEvent(new CustomEvent('variant:changed', {
          bubbles: true,
          detail: {
            variant: newVariant,
            previousVariant: previousVariant
          }
        })); // Allow system monitoring the name attribute to work

        this.masterSelector.dispatchEvent(new Event('change', {
          bubbles: true
        }));
      }
      /**
       * Update the prices (optionally showing compare at price)
       */

    }, {
      key: "_updateProductPrices",
      value: function _updateProductPrices(newVariant, previousVariant) {
        var productPrices = this.element.querySelector('.price-list'),
            currencyFormat = window.theme.currencyCodeEnabled ? window.theme.moneyWithCurrencyFormat : window.theme.moneyFormat;

        if (!productPrices) {
          return; // Sometimes merchant remove element from the code without taking care of JS... so let's be defensive
        }

        if (!newVariant) {
          productPrices.style.display = 'none';
        } else {
          if (previousVariant && previousVariant['price'] === newVariant['price'] && previousVariant['compare_at_price'] === newVariant['compare_at_price']) {
            return; // The price do not have changed so let's return to avoid changing the DOM for nothing
          }

          productPrices.innerHTML = '';

          if (newVariant['compare_at_price'] > newVariant['price']) {
            productPrices.innerHTML += "<span class=\"price price--highlight\"><span class=\"visually-hidden\">".concat(window.languages.productSalePrice, "</span>").concat(Currency.formatMoney(newVariant['price'], currencyFormat), "</span>");
            productPrices.innerHTML += "<span class=\"price price--compare\"><span class=\"visually-hidden\">".concat(window.languages.productRegularPrice, "</span>").concat(Currency.formatMoney(newVariant['compare_at_price'], currencyFormat), "</span>");
          } else {
            productPrices.innerHTML += "<span class=\"price\"><span class=\"visually-hidden\">".concat(window.languages.productSalePrice, "</span>").concat(Currency.formatMoney(newVariant['price'], currencyFormat), "</span>");
          }

          productPrices.style.display = '';
        }
      }
      /**
       * Update the inventory (if needed)
       */

    }, {
      key: "_updateInventory",
      value: function _updateInventory(newVariant) {
        if (!this.options['showInventoryQuantity'] || !newVariant) {
          return;
        }

        var productFormInventoryElement = this.element.querySelector('.product-form__inventory'),
            variantInventoryManagement = this.variantsInventories[newVariant['id']]['inventory_management'],
            variantInventoryPolicy = this.variantsInventories[newVariant['id']]['inventory_policy'],
            variantInventoryQuantity = this.variantsInventories[newVariant['id']]['inventory_quantity'],
            variantInventoryMessage = this.variantsInventories[newVariant['id']]['inventory_message'];

        if (!productFormInventoryElement) {
          return; // Sometimes merchant remove element from the code without taking care of JS... so let's be defensive
        }

        productFormInventoryElement.classList.remove('inventory--high');
        productFormInventoryElement.classList.remove('inventory--low');

        if (newVariant['available']) {
          if (null !== variantInventoryManagement && variantInventoryPolicy === 'deny' && this.options['lowInventoryThreshold'] > 0) {
            if (variantInventoryQuantity <= this.options['lowInventoryThreshold']) {
              productFormInventoryElement.classList.add('inventory--low');
            } else {
              productFormInventoryElement.classList.add('inventory--high');
            }
          } else {
            productFormInventoryElement.classList.add('inventory--high');
          }
        } // We also need to update the stock countdown if setup


        var stockCountdown = this.element.querySelector('.inventory-bar');

        if (stockCountdown) {
          var stockCountdownProgress = Math.min(Math.max(variantInventoryQuantity / parseInt(stockCountdown.getAttribute('data-stock-countdown-max')) * 100.0, 0), 100);
          stockCountdown.classList.toggle('inventory-bar--hidden', stockCountdownProgress === 0);
          stockCountdown.firstElementChild.style.width = "".concat(stockCountdownProgress, "%");
        }

        productFormInventoryElement.innerHTML = variantInventoryMessage;
      }
      /**
       * Update SKU
       */

    }, {
      key: "_updateSku",
      value: function _updateSku(newVariant, previousVariant) {
        var productSku = this.element.querySelector('.product-meta__sku');

        if (!productSku) {
          return;
        }

        var productSkuNumber = productSku.querySelector('.product-meta__sku-number');

        if (!newVariant || newVariant['sku'] === '') {
          productSku.style.display = 'none';
        } else {
          if (previousVariant && previousVariant['sku'] === newVariant['sku']) {
            return; // The SKU do not have changed so let's return to avoid changing the DOM for nothing
          }

          productSkuNumber.innerHTML = newVariant['sku'];
          productSku.style.display = '';
        }
      }
      /**
       * Update the discount label
       */

    }, {
      key: "_updateDiscountLabel",
      value: function _updateDiscountLabel(newVariant, previousVariant) {
        if (!window.theme.showDiscount) {
          return; // Nothing to do if discount label is configured to be hidden
        }

        var discountLabel = this.element.querySelector('.product-meta .product-label--on-sale'); // Some merchants have removed it from the code so we have to act defensive

        if (!discountLabel) {
          return;
        }

        if (!newVariant || !(newVariant['price'] < newVariant['compare_at_price'])) {
          discountLabel.style.display = 'none';
        } else {
          // We compute the savings based on the setting
          var savings = null;

          if (window.theme.discountMode === 'percentage') {
            savings = "".concat(Math.round((newVariant['compare_at_price'] - newVariant['price']) * 100 / newVariant['compare_at_price']), "%");
          } else {
            savings = "<span>".concat(Currency.formatMoney(newVariant['compare_at_price'] - newVariant['price'], window.theme.moneyFormat), "</span>");
          }

          discountLabel.innerHTML = "".concat(window.languages.collectionOnSaleLabel.replace('{{savings}}', savings));
          discountLabel.style.display = 'inline-block';
        }
      }
    }, {
      key: "_updateUnitPrice",
      value: function _updateUnitPrice(newVariant, previousVariant) {
        var unitPriceMeasurement = this.element.querySelector('.unit-price-measurement');

        if (!unitPriceMeasurement) {
          return; // Sometimes merchant remove element from the code without taking care of JS... so let's be defensive
        }

        if (!newVariant || !newVariant['unit_price_measurement']) {
          unitPriceMeasurement.parentNode.style.display = 'none';
        } else {
          unitPriceMeasurement.parentNode.style.display = 'block';
          unitPriceMeasurement.querySelector('.unit-price-measurement__price').innerHTML = Currency.formatMoney(newVariant['unit_price'], window.theme.moneyFormat);
          unitPriceMeasurement.querySelector('.unit-price-measurement__reference-unit').innerHTML = newVariant['unit_price_measurement']['reference_unit'];
          var unitPriceReferenceValue = unitPriceMeasurement.querySelector('.unit-price-measurement__reference-value');
          unitPriceReferenceValue.innerHTML = newVariant['unit_price_measurement']['reference_value'];
          unitPriceReferenceValue.style.display = newVariant['unit_price_measurement']['reference_value'] === 1 ? 'none' : 'inline';
        }
      }
      /**
       * Warehouse automatically adds a "disabled" state to sold out/unavailable variant. When we change the variant we have to recompute
       * all the selectors
       */

    }, {
      key: "_updateSelectors",
      value: function _updateSelectors(newVariant) {
        var _this2 = this;

        // We apply a top-down approach where we first check the first option, second option and third option. If there is
        // more than one option, the value is considered "available" if there is at least one variant with this value
        // available (independently of the selected variant)
        var applyClassToSelector = function applyClassToSelector(selector, valueIndex, available) {
          var selectorType = selector.getAttribute('data-selector-type');

          switch (selectorType) {
            case 'color':
              selector.querySelector(".color-swatch:nth-child(".concat(valueIndex + 1, ")")).classList.toggle('color-swatch--disabled', !available);
              break;

            case 'variant':
              selector.querySelector(".variant-swatch:nth-child(".concat(valueIndex + 1, ")")).classList.toggle('variant-swatch--disabled', !available);
              break;

            case 'block':
              selector.querySelector(".block-swatch:nth-child(".concat(valueIndex + 1, ")")).classList.toggle('block-swatch--disabled', !available);
              break;
          }
        };

        if (this.variantSelectors && this.variantSelectors[0]) {
          // For the first option, the value is considered available if there is at least one variant available
          this.productOptionsWithValues[0]['values'].forEach(function (value, valueIndex) {
            applyClassToSelector(_this2.variantSelectors[0], valueIndex, _this2.productData['variants'].some(function (variant) {
              return variant['option1'] === value && variant['available'];
            })); // We now do the second level

            if (_this2.variantSelectors[1]) {
              _this2.productOptionsWithValues[1]['values'].forEach(function (value, valueIndex) {
                applyClassToSelector(_this2.variantSelectors[1], valueIndex, _this2.productData['variants'].some(function (variant) {
                  return variant['option2'] === value && variant['option1'] === _this2.option1 && variant['available'];
                })); // And finally the third level

                if (_this2.variantSelectors[2]) {
                  _this2.productOptionsWithValues[2]['values'].forEach(function (value, valueIndex) {
                    applyClassToSelector(_this2.variantSelectors[2], valueIndex, _this2.productData['variants'].some(function (variant) {
                      return variant['option3'] === value && variant['option1'] === _this2.option1 && variant['option2'] === _this2.option2 && variant['available'];
                    }));
                  });
                }
              });
            }
          });
        }
      }
      /**
       * Update the add to cart
       */

    }, {
      key: "_updateAddToCartButton",
      value: function _updateAddToCartButton(newVariant) {
        var addToCartButtonElement = this.element.querySelector('.product-form__add-button'),
            infoListElement = this.element.querySelector('.product-form__info-list');

        if (!addToCartButtonElement) {
          return; // Sometimes merchant remove element from the code without taking care of JS... so let's be defensive
        }

        if (!newVariant) {
          addToCartButtonElement.setAttribute('disabled', 'disabled');
          addToCartButtonElement.classList.add('button--disabled');
          addToCartButtonElement.classList.remove('button--primary');
          addToCartButtonElement.removeAttribute('data-action');
          addToCartButtonElement.innerHTML = window.languages.productFormUnavailable;
          infoListElement.style.display = 'none';
        } else {
          infoListElement.style.display = 'block';

          if (newVariant['available']) {
            addToCartButtonElement.removeAttribute('disabled');
            addToCartButtonElement.classList.remove('button--disabled');
            addToCartButtonElement.classList.add('button--primary');
            addToCartButtonElement.setAttribute('data-action', 'add-to-cart');
            addToCartButtonElement.innerHTML = this.productTemplate === 'pre-order' ? window.languages.productFormPreOrder : window.languages.productFormAddToCart;
          } else {
            addToCartButtonElement.setAttribute('disabled', 'disabled');
            addToCartButtonElement.classList.add('button--disabled');
            addToCartButtonElement.classList.remove('button--primary');
            addToCartButtonElement.removeAttribute('data-action');
            addToCartButtonElement.innerHTML = window.languages.productFormSoldOut;
          }
        } // We handle the smart payment button


        if (this.options['showPaymentButton']) {
          var paymentButtonElement = this.element.querySelector('.shopify-payment-button');

          if (!paymentButtonElement) {
            return; // Some apps dynamically remove the dynamic checkout button from the code, so we add a guard here
          }

          if (!newVariant || !newVariant['available']) {
            paymentButtonElement.style.display = 'none';
          } else {
            paymentButtonElement.style.display = 'block';
          }
        }
      }
      /**
       * ---------------------------------------------------------------------------------------------------
       * INTERNAL CODE THAT HANDLE VARIANT CHANGES
       * ---------------------------------------------------------------------------------------------------
       */

      /**
       * Whenever an option is changed, this code fetch the corresponding active variant
       */

    }, {
      key: "_onOptionChanged",
      value: function _onOptionChanged(event, target) {
        this['option' + target.getAttribute('data-option-position')] = target.value; // We update the selected value

        var selectedValueElement = target.closest('.product-form__option').querySelector('.product-form__selected-value');

        if (selectedValueElement) {
          selectedValueElement.innerHTML = target.value;
        } // Finally, we get the new variant


        var previousVariant = this.currentVariant;
        this.currentVariant = this._getCurrentVariantFromOptions();

        this._onVariantChanged(previousVariant, this.currentVariant);

        if (this.currentVariant) {
          if (this.options['enableHistoryState'] && history.replaceState) {
            var newUrl = "".concat(window.location.protocol, "//").concat(window.location.host).concat(window.location.pathname, "?variant=").concat(this.currentVariant.id);
            window.history.replaceState({
              path: newUrl
            }, '', newUrl);
          } // We need to modify the hidden select that contain the id attribute as well


          this.masterSelector.querySelector('[selected]').removeAttribute('selected');
          this.masterSelector.querySelector("[value=\"".concat(this.currentVariant['id'], "\"]")).setAttribute('selected', 'selected');
        }
      }
      /**
       * Get the active variant based on the options
       */

    }, {
      key: "_getCurrentVariantFromOptions",
      value: function _getCurrentVariantFromOptions() {
        var _this3 = this;

        var found = false;
        this.productData['variants'].forEach(function (variant) {
          if (variant['option1'] === _this3.option1 && variant['option2'] === _this3.option2 && variant['option3'] === _this3.option3) {
            found = variant;
          }
        });
        return found || null;
      }
      /**
       * ---------------------------------------------------------------------------------------------------
       * INTERNAL CODE THAT HANDLE PRODUCT ADD TO CART
       * ---------------------------------------------------------------------------------------------------
       */

    }, {
      key: "_addToCart",
      value: function _addToCart(event, target) {
        var _this4 = this;

        var formElement = this.element.querySelector('form[action*="/cart/add"]');

        if (!formElement.reportValidity()) {
          return;
        }

        if (window.theme.cartType === 'page') {
          return; // When using a cart type of page, we just simply redirect to the cart page
        }

        event.preventDefault(); // Prevent form to be submitted

        event.stopPropagation(); // First, we switch the status of the button

        target.setAttribute('disabled', 'disabled');
        document.dispatchEvent(new CustomEvent('theme:loading:start'));
        fetch("".concat(window.routes.cartAddUrl, ".js"), {
          body: JSON.stringify(Form.serialize(formElement)),
          credentials: 'same-origin',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest' // This is needed as currently there is a bug in Shopify that assumes this header

          }
        }).then(function (response) {
          document.dispatchEvent(new CustomEvent('theme:loading:end'));

          if (response.ok) {
            target.removeAttribute('disabled'); // We simply trigger an event so the mini-cart can re-render

            _this4.element.dispatchEvent(new CustomEvent('product:added', {
              bubbles: true,
              detail: {
                variant: _this4.currentVariant,
                button: target,
                quantity: parseInt(formElement.querySelector('[name="quantity"]').value)
              }
            })); // If we are in the context of quick view, we also force closing the modal


            if (_this4.options['isQuickView'] && window.theme.cartType === 'drawer') {
              document.dispatchEvent(new CustomEvent('modal:close'));
            }

            if (window.theme.cartType === 'message') {
              _this4._showAlert(window.languages.productAdded, 'success', target);
            }
          } else {
            response.json().then(function (content) {
              _this4._showAlert(content['description'], 'error', target);
            });
          }
        });
        event.preventDefault();
      }
      /**
       * ---------------------------------------------------------------------------------------------------
       * INTERNAL CODE THAT HANDLE PRODUCT ADD TO CART
       * ---------------------------------------------------------------------------------------------------
       */

      /**
       * In order to have a small animation when the inventory bar is visible, we setup an intersection observer
       */

    }, {
      key: "_setupStockCountdown",
      value: function _setupStockCountdown() {
        var _this5 = this;

        // If there is an inventory bar, we trigger an intersection observer to add an animation
        var stockCountdown = this.element.querySelector('.inventory-bar');

        if (stockCountdown) {
          var onStockCountdownVisible = function onStockCountdownVisible() {
            var variantInventoryQuantity = _this5.variantsInventories[_this5.currentVariant['id']]['inventory_quantity'];
            var stockCountdownProgress = Math.min(Math.max(variantInventoryQuantity / parseInt(stockCountdown.getAttribute('data-stock-countdown-max')) * 100.0, 0), 100);
            stockCountdown.classList.toggle('inventory-bar--hidden', stockCountdownProgress === 0);
            stockCountdown.firstElementChild.style.width = "".concat(stockCountdownProgress, "%");
          };

          if (window.IntersectionObserver) {
            var stockCountdownIntersectionObserver = new IntersectionObserver(function (entries) {
              entries.forEach(function (item) {
                if (item.isIntersecting) {
                  onStockCountdownVisible();
                  stockCountdownIntersectionObserver.disconnect();
                }
              });
            });
            stockCountdownIntersectionObserver.observe(stockCountdown);
          } else {
            onStockCountdownVisible();
          }
        }
      }
    }, {
      key: "_showAlert",
      value: function _showAlert(message, type, afterElement) {
        var messageElement = document.createElement('div');
        messageElement.className = 'product-form__status-message';
        messageElement.innerHTML = "<p class=\"alert ".concat(type === 'success' ? 'alert--success' : 'alert--error', "\">").concat(message, "</p>");
        afterElement.removeAttribute('disabled');
        afterElement.parentNode.insertAdjacentElement('afterend', messageElement);
        Animation.slideDown(messageElement);
        setTimeout(function () {
          Animation.slideUp(messageElement, function () {
            messageElement.remove();
          });
        }, 5500);
      }
    }]);

    return ProductVariants;
  }();

  var ProductModel = /*#__PURE__*/function () {
    function ProductModel(element) {
      _classCallCheck(this, ProductModel);

      this.element = element;
      this.delegateElement = new Delegate(this.element);
      this.delegateRoot = new Delegate(document.documentElement);

      this._attachListeners();

      var stylesheet = document.createElement('link');
      stylesheet.rel = 'stylesheet';
      stylesheet.href = 'https://cdn.shopify.com/shopifycloud/model-viewer-ui/assets/v1.0/model-viewer-ui.css';
      document.head.appendChild(stylesheet);
      window.Shopify.loadFeatures([{
        name: 'model-viewer-ui',
        version: '1.0',
        onLoad: this._setupModelViewerUI.bind(this)
      }, {
        name: 'shopify-xr',
        version: '1.0'
      }]);
    }

    _createClass(ProductModel, [{
      key: "destroy",
      value: function destroy() {}
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        var _this = this;

        this.element.querySelector('model-viewer').addEventListener('shopify_model_viewer_ui_toggle_play', function () {
          _this.element.dispatchEvent(new CustomEvent('model:played', {
            bubbles: true
          }));
        });
        this.element.querySelector('model-viewer').addEventListener('shopify_model_viewer_ui_toggle_pause', function () {
          _this.element.dispatchEvent(new CustomEvent('model:paused', {
            bubbles: true
          }));
        });
      }
    }, {
      key: "hasBeenSelected",
      value: function hasBeenSelected(isInitialLoading) {
        // As per guidelines, we only need to autoplay when it's not a touch device, and on desktop only if it's not the
        // initial loading
        if (Responsive.matchesBreakpoint('supports-hover') && !isInitialLoading) {
          this.modelUi.play();
        }
      }
    }, {
      key: "hasBeenDeselected",
      value: function hasBeenDeselected() {
        // In all cases, we just turn it off
        this.modelUi.pause();
      }
    }, {
      key: "_setupModelViewerUI",
      value: function _setupModelViewerUI() {
        this.modelElement = this.element.querySelector('model-viewer');
        this.modelUi = new window.Shopify.ModelViewerUI(this.modelElement);
      }
    }]);

    return ProductModel;
  }();

  var ProductVideo = /*#__PURE__*/function () {
    function ProductVideo(element, enableVideoLooping) {
      _classCallCheck(this, ProductVideo);

      this.element = element;
      this.delegateElement = new Delegate(this.element);
      this.enableVideoLooping = enableVideoLooping;
      this.player = null;

      switch (this.element.getAttribute('data-media-type')) {
        case 'video':
          var stylesheet = document.createElement('link');
          stylesheet.rel = 'stylesheet';
          stylesheet.href = 'https://cdn.shopify.com/shopifycloud/shopify-plyr/v1.0/shopify-plyr.css';
          document.head.appendChild(stylesheet);
          window.Shopify.loadFeatures([{
            name: 'video-ui',
            version: '1.0',
            onLoad: this._setupHtml5Video.bind(this)
          }]);
          break;

        case 'external_video':
          this._setupExternalVideo();

          break;
      }
    }

    _createClass(ProductVideo, [{
      key: "destroy",
      value: function destroy() {
        if (this.player) {
          this.player.destroy(); // Both Plyr and YouTube API use the same name
        }
      }
    }, {
      key: "hasBeenSelected",
      value: function hasBeenSelected(isInitialLoading) {
        // As per guidelines, we only need to autoplay when it's not a touch device, and on desktop only if it's not the
        // initial loading
        if (Responsive.matchesBreakpoint('supports-hover') && !isInitialLoading) {
          this.play();
        }
      }
    }, {
      key: "hasBeenDeselected",
      value: function hasBeenDeselected() {
        this.pause();
      }
    }, {
      key: "play",
      value: function play() {
        switch (this.element.getAttribute('data-media-type')) {
          case 'video':
            this.player.play();
            break;

          case 'external_video':
            if (this.element.getAttribute('data-media-host') === 'youtube') {
              this.player.playVideo();
            } else {
              this.player.player();
            } // If we're using YouTube, we have to focus the parent div (as it's not possible to directly focus an iframe)


            this.element.focus();
            break;
        }
      }
    }, {
      key: "pause",
      value: function pause() {
        switch (this.element.getAttribute('data-media-type')) {
          case 'video':
            this.player.pause();
            break;

          case 'external_video':
            if (this.element.getAttribute('data-media-host') === 'youtube') {
              this.player.pauseVideo();
            } else {
              this.player.pause();
            }

            break;
        }
      }
    }, {
      key: "_setupHtml5Video",
      value: function _setupHtml5Video() {
        var _this = this;

        this.player = new Shopify.Plyr(this.element.querySelector('video'), {
          controls: ['play', 'progress', 'mute', 'volume', 'play-large', 'fullscreen'],
          loop: {
            active: this.enableVideoLooping
          },
          hideControlsOnPause: true,
          clickToPlay: true,
          iconUrl: '//cdn.shopify.com/shopifycloud/shopify-plyr/v1.0/shopify-plyr.svg',
          tooltips: {
            controls: false,
            seek: true
          }
        });
        this.player.on('play', function () {
          _this.element.dispatchEvent(new CustomEvent('video:played', {
            bubbles: true
          }));
        });
        this.player.on('pause', function () {
          _this.element.dispatchEvent(new CustomEvent('video:paused', {
            bubbles: true
          }));
        });
      }
    }, {
      key: "_setupExternalVideo",
      value: function _setupExternalVideo() {
        if (this.element.getAttribute('data-media-host') === 'youtube') {
          this._loadYouTubeScript().then(this._setupYouTubePlayer.bind(this));
        } else if (this.element.getAttribute('data-media-host') === 'vimeo') {
          this._loadVimeoScript().then(this._setupVimeoPlayer.bind(this));
        }
      }
    }, {
      key: "_setupYouTubePlayer",
      value: function _setupYouTubePlayer() {
        var _this2 = this;

        var playerLoadingInterval = setInterval(function () {
          if (window.YT !== undefined && window.YT.Player !== undefined) {
            _this2.player = new YT.Player(_this2.element.querySelector('iframe'), {
              videoId: _this2.element.getAttribute('data-video-id'),
              events: {
                onStateChange: function onStateChange(event) {
                  if (event.data === 0 && _this2.enableVideoLooping) {
                    event.target.seekTo(0);
                  }
                }
              }
            });
            clearInterval(playerLoadingInterval);
          }
        }, 50);
      }
    }, {
      key: "_loadYouTubeScript",
      value: function _loadYouTubeScript() {
        return new Promise(function (resolve, reject) {
          var script = document.createElement('script');
          document.body.appendChild(script);
          script.onload = resolve;
          script.onerror = reject;
          script.async = true;
          script.src = '//www.youtube.com/iframe_api';
        });
      }
    }, {
      key: "_setupVimeoPlayer",
      value: function _setupVimeoPlayer() {
        var _this3 = this;

        var playerLoadingInterval = setInterval(function () {
          if (window.Vimeo !== undefined && window.Vimeo.Player !== undefined) {
            _this3.player = new Vimeo.Player(_this3.element.querySelector('iframe'));
            clearInterval(playerLoadingInterval);
          }
        }, 50);
      }
    }, {
      key: "_loadVimeoScript",
      value: function _loadVimeoScript() {
        return new Promise(function (resolve, reject) {
          var script = document.createElement('script');
          document.body.appendChild(script);
          script.onload = resolve;
          script.onerror = reject;
          script.async = true;
          script.src = '//player.vimeo.com/api/player.js';
        });
      }
    }]);

    return ProductVideo;
  }();

  var evEmitter = createCommonjsModule(function (module) {
    /**
     * EvEmitter v1.1.0
     * Lil' event emitter
     * MIT License
     */

    /* jshint unused: true, undef: true, strict: true */
    (function (global, factory) {
      // universal module definition

      /* jshint strict: false */

      /* globals define, module, window */
      if ( module.exports) {
        // CommonJS - Browserify, Webpack
        module.exports = factory();
      } else {
        // Browser globals
        global.EvEmitter = factory();
      }
    })(typeof window != 'undefined' ? window : commonjsGlobal, function () {

      function EvEmitter() {}

      var proto = EvEmitter.prototype;

      proto.on = function (eventName, listener) {
        if (!eventName || !listener) {
          return;
        } // set events hash


        var events = this._events = this._events || {}; // set listeners array

        var listeners = events[eventName] = events[eventName] || []; // only add once

        if (listeners.indexOf(listener) == -1) {
          listeners.push(listener);
        }

        return this;
      };

      proto.once = function (eventName, listener) {
        if (!eventName || !listener) {
          return;
        } // add event


        this.on(eventName, listener); // set once flag
        // set onceEvents hash

        var onceEvents = this._onceEvents = this._onceEvents || {}; // set onceListeners object

        var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {}; // set flag

        onceListeners[listener] = true;
        return this;
      };

      proto.off = function (eventName, listener) {
        var listeners = this._events && this._events[eventName];

        if (!listeners || !listeners.length) {
          return;
        }

        var index = listeners.indexOf(listener);

        if (index != -1) {
          listeners.splice(index, 1);
        }

        return this;
      };

      proto.emitEvent = function (eventName, args) {
        var listeners = this._events && this._events[eventName];

        if (!listeners || !listeners.length) {
          return;
        } // copy over to avoid interference if .off() in listener


        listeners = listeners.slice(0);
        args = args || []; // once stuff

        var onceListeners = this._onceEvents && this._onceEvents[eventName];

        for (var i = 0; i < listeners.length; i++) {
          var listener = listeners[i];
          var isOnce = onceListeners && onceListeners[listener];

          if (isOnce) {
            // remove listener
            // remove before trigger to prevent recursion
            this.off(eventName, listener); // unset once flag

            delete onceListeners[listener];
          } // trigger listener


          listener.apply(this, args);
        }

        return this;
      };

      proto.allOff = function () {
        delete this._events;
        delete this._onceEvents;
      };

      return EvEmitter;
    });
  });

  var getSize = createCommonjsModule(function (module) {
    /*!
     * getSize v2.0.3
     * measure size of elements
     * MIT license
     */

    /* jshint browser: true, strict: true, undef: true, unused: true */

    /* globals console: false */
    (function (window, factory) {
      /* jshint strict: false */

      /* globals define, module */
      if ( module.exports) {
        // CommonJS
        module.exports = factory();
      } else {
        // browser global
        window.getSize = factory();
      }
    })(window, function factory() {
      // get a number from a string, not a percentage

      function getStyleSize(value) {
        var num = parseFloat(value); // not a percent like '100%', and a number

        var isValid = value.indexOf('%') == -1 && !isNaN(num);
        return isValid && num;
      }

      function noop() {}

      var logError = typeof console == 'undefined' ? noop : function (message) {
        console.error(message);
      }; // -------------------------- measurements -------------------------- //

      var measurements = ['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom', 'borderLeftWidth', 'borderRightWidth', 'borderTopWidth', 'borderBottomWidth'];
      var measurementsLength = measurements.length;

      function getZeroSize() {
        var size = {
          width: 0,
          height: 0,
          innerWidth: 0,
          innerHeight: 0,
          outerWidth: 0,
          outerHeight: 0
        };

        for (var i = 0; i < measurementsLength; i++) {
          var measurement = measurements[i];
          size[measurement] = 0;
        }

        return size;
      } // -------------------------- getStyle -------------------------- //

      /**
       * getStyle, get style of element, check for Firefox bug
       * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
       */


      function getStyle(elem) {
        var style = getComputedStyle(elem);

        if (!style) {
          logError('Style returned ' + style + '. Are you running this code in a hidden iframe on Firefox? ' + 'See https://bit.ly/getsizebug1');
        }

        return style;
      } // -------------------------- setup -------------------------- //


      var isSetup = false;
      var isBoxSizeOuter;
      /**
       * setup
       * check isBoxSizerOuter
       * do on first getSize() rather than on page load for Firefox bug
       */

      function setup() {
        // setup once
        if (isSetup) {
          return;
        }

        isSetup = true; // -------------------------- box sizing -------------------------- //

        /**
         * Chrome & Safari measure the outer-width on style.width on border-box elems
         * IE11 & Firefox<29 measures the inner-width
         */

        var div = document.createElement('div');
        div.style.width = '200px';
        div.style.padding = '1px 2px 3px 4px';
        div.style.borderStyle = 'solid';
        div.style.borderWidth = '1px 2px 3px 4px';
        div.style.boxSizing = 'border-box';
        var body = document.body || document.documentElement;
        body.appendChild(div);
        var style = getStyle(div); // round value for browser zoom. desandro/masonry#928

        isBoxSizeOuter = Math.round(getStyleSize(style.width)) == 200;
        getSize.isBoxSizeOuter = isBoxSizeOuter;
        body.removeChild(div);
      } // -------------------------- getSize -------------------------- //


      function getSize(elem) {
        setup(); // use querySeletor if elem is string

        if (typeof elem == 'string') {
          elem = document.querySelector(elem);
        } // do not proceed on non-objects


        if (!elem || _typeof(elem) != 'object' || !elem.nodeType) {
          return;
        }

        var style = getStyle(elem); // if hidden, everything is 0

        if (style.display == 'none') {
          return getZeroSize();
        }

        var size = {};
        size.width = elem.offsetWidth;
        size.height = elem.offsetHeight;
        var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box'; // get all measurements

        for (var i = 0; i < measurementsLength; i++) {
          var measurement = measurements[i];
          var value = style[measurement];
          var num = parseFloat(value); // any 'auto', 'medium' value will be 0

          size[measurement] = !isNaN(num) ? num : 0;
        }

        var paddingWidth = size.paddingLeft + size.paddingRight;
        var paddingHeight = size.paddingTop + size.paddingBottom;
        var marginWidth = size.marginLeft + size.marginRight;
        var marginHeight = size.marginTop + size.marginBottom;
        var borderWidth = size.borderLeftWidth + size.borderRightWidth;
        var borderHeight = size.borderTopWidth + size.borderBottomWidth;
        var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter; // overwrite width and height if we can get it from style

        var styleWidth = getStyleSize(style.width);

        if (styleWidth !== false) {
          size.width = styleWidth + ( // add padding and border unless it's already including it
          isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
        }

        var styleHeight = getStyleSize(style.height);

        if (styleHeight !== false) {
          size.height = styleHeight + ( // add padding and border unless it's already including it
          isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight);
        }

        size.innerWidth = size.width - (paddingWidth + borderWidth);
        size.innerHeight = size.height - (paddingHeight + borderHeight);
        size.outerWidth = size.width + marginWidth;
        size.outerHeight = size.height + marginHeight;
        return size;
      }

      return getSize;
    });
  });

  var matchesSelector = createCommonjsModule(function (module) {
    /**
     * matchesSelector v2.0.2
     * matchesSelector( element, '.selector' )
     * MIT license
     */

    /*jshint browser: true, strict: true, undef: true, unused: true */
    (function (window, factory) {

      if ( module.exports) {
        // CommonJS
        module.exports = factory();
      } else {
        // browser global
        window.matchesSelector = factory();
      }
    })(window, function factory() {

      var matchesMethod = function () {
        var ElemProto = window.Element.prototype; // check for the standard method name first

        if (ElemProto.matches) {
          return 'matches';
        } // check un-prefixed


        if (ElemProto.matchesSelector) {
          return 'matchesSelector';
        } // check vendor prefixes


        var prefixes = ['webkit', 'moz', 'ms', 'o'];

        for (var i = 0; i < prefixes.length; i++) {
          var prefix = prefixes[i];
          var method = prefix + 'MatchesSelector';

          if (ElemProto[method]) {
            return method;
          }
        }
      }();

      return function matchesSelector(elem, selector) {
        return elem[matchesMethod](selector);
      };
    });
  });

  var utils = createCommonjsModule(function (module) {
    /**
     * Fizzy UI utils v2.0.7
     * MIT license
     */

    /*jshint browser: true, undef: true, unused: true, strict: true */
    (function (window, factory) {
      // universal module definition

      /*jshint strict: false */

      /*globals define, module, require */
      if ( module.exports) {
        // CommonJS
        module.exports = factory(window, matchesSelector);
      } else {
        // browser global
        window.fizzyUIUtils = factory(window, window.matchesSelector);
      }
    })(window, function factory(window, matchesSelector) {

      var utils = {}; // ----- extend ----- //
      // extends objects

      utils.extend = function (a, b) {
        for (var prop in b) {
          a[prop] = b[prop];
        }

        return a;
      }; // ----- modulo ----- //


      utils.modulo = function (num, div) {
        return (num % div + div) % div;
      }; // ----- makeArray ----- //


      var arraySlice = Array.prototype.slice; // turn element or nodeList into an array

      utils.makeArray = function (obj) {
        if (Array.isArray(obj)) {
          // use object if already an array
          return obj;
        } // return empty array if undefined or null. #6


        if (obj === null || obj === undefined) {
          return [];
        }

        var isArrayLike = _typeof(obj) == 'object' && typeof obj.length == 'number';

        if (isArrayLike) {
          // convert nodeList to array
          return arraySlice.call(obj);
        } // array of single index


        return [obj];
      }; // ----- removeFrom ----- //


      utils.removeFrom = function (ary, obj) {
        var index = ary.indexOf(obj);

        if (index != -1) {
          ary.splice(index, 1);
        }
      }; // ----- getParent ----- //


      utils.getParent = function (elem, selector) {
        while (elem.parentNode && elem != document.body) {
          elem = elem.parentNode;

          if (matchesSelector(elem, selector)) {
            return elem;
          }
        }
      }; // ----- getQueryElement ----- //
      // use element as selector string


      utils.getQueryElement = function (elem) {
        if (typeof elem == 'string') {
          return document.querySelector(elem);
        }

        return elem;
      }; // ----- handleEvent ----- //
      // enable .ontype to trigger from .addEventListener( elem, 'type' )


      utils.handleEvent = function (event) {
        var method = 'on' + event.type;

        if (this[method]) {
          this[method](event);
        }
      }; // ----- filterFindElements ----- //


      utils.filterFindElements = function (elems, selector) {
        // make array of elems
        elems = utils.makeArray(elems);
        var ffElems = [];
        elems.forEach(function (elem) {
          // check that elem is an actual element
          if (!(elem instanceof HTMLElement)) {
            return;
          } // add elem if no selector


          if (!selector) {
            ffElems.push(elem);
            return;
          } // filter & find items if we have a selector
          // filter


          if (matchesSelector(elem, selector)) {
            ffElems.push(elem);
          } // find children


          var childElems = elem.querySelectorAll(selector); // concat childElems to filterFound array

          for (var i = 0; i < childElems.length; i++) {
            ffElems.push(childElems[i]);
          }
        });
        return ffElems;
      }; // ----- debounceMethod ----- //


      utils.debounceMethod = function (_class, methodName, threshold) {
        threshold = threshold || 100; // original method

        var method = _class.prototype[methodName];
        var timeoutName = methodName + 'Timeout';

        _class.prototype[methodName] = function () {
          var timeout = this[timeoutName];
          clearTimeout(timeout);
          var args = arguments;

          var _this = this;

          this[timeoutName] = setTimeout(function () {
            method.apply(_this, args);
            delete _this[timeoutName];
          }, threshold);
        };
      }; // ----- docReady ----- //


      utils.docReady = function (callback) {
        var readyState = document.readyState;

        if (readyState == 'complete' || readyState == 'interactive') {
          // do async to allow for other scripts to run. metafizzy/flickity#441
          setTimeout(callback);
        } else {
          document.addEventListener('DOMContentLoaded', callback);
        }
      }; // ----- htmlInit ----- //
      // http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/


      utils.toDashed = function (str) {
        return str.replace(/(.)([A-Z])/g, function (match, $1, $2) {
          return $1 + '-' + $2;
        }).toLowerCase();
      };

      var console = window.console;
      /**
       * allow user to initialize classes via [data-namespace] or .js-namespace class
       * htmlInit( Widget, 'widgetName' )
       * options are parsed from data-namespace-options
       */

      utils.htmlInit = function (WidgetClass, namespace) {
        utils.docReady(function () {
          var dashedNamespace = utils.toDashed(namespace);
          var dataAttr = 'data-' + dashedNamespace;
          var dataAttrElems = document.querySelectorAll('[' + dataAttr + ']');
          var jsDashElems = document.querySelectorAll('.js-' + dashedNamespace);
          var elems = utils.makeArray(dataAttrElems).concat(utils.makeArray(jsDashElems));
          var dataOptionsAttr = dataAttr + '-options';
          var jQuery = window.jQuery;
          elems.forEach(function (elem) {
            var attr = elem.getAttribute(dataAttr) || elem.getAttribute(dataOptionsAttr);
            var options;

            try {
              options = attr && JSON.parse(attr);
            } catch (error) {
              // log error, do not initialize
              if (console) {
                console.error('Error parsing ' + dataAttr + ' on ' + elem.className + ': ' + error);
              }

              return;
            } // initialize


            var instance = new WidgetClass(elem, options); // make available via $().data('namespace')

            if (jQuery) {
              jQuery.data(elem, namespace, instance);
            }
          });
        });
      }; // -----  ----- //


      return utils;
    });
  });

  var cell = createCommonjsModule(function (module) {
    // Flickity.Cell
    (function (window, factory) {
      // universal module definition

      /* jshint strict: false */
      if ( module.exports) {
        // CommonJS
        module.exports = factory(window, getSize);
      } else {
        // browser global
        window.Flickity = window.Flickity || {};
        window.Flickity.Cell = factory(window, window.getSize);
      }
    })(window, function factory(window, getSize) {

      function Cell(elem, parent) {
        this.element = elem;
        this.parent = parent;
        this.create();
      }

      var proto = Cell.prototype;

      proto.create = function () {
        this.element.style.position = 'absolute';
        this.element.setAttribute('aria-hidden', 'true');
        this.x = 0;
        this.shift = 0;
      };

      proto.destroy = function () {
        // reset style
        this.unselect();
        this.element.style.position = '';
        var side = this.parent.originSide;
        this.element.style[side] = '';
      };

      proto.getSize = function () {
        this.size = getSize(this.element);
      };

      proto.setPosition = function (x) {
        this.x = x;
        this.updateTarget();
        this.renderPosition(x);
      }; // setDefaultTarget v1 method, backwards compatibility, remove in v3


      proto.updateTarget = proto.setDefaultTarget = function () {
        var marginProperty = this.parent.originSide == 'left' ? 'marginLeft' : 'marginRight';
        this.target = this.x + this.size[marginProperty] + this.size.width * this.parent.cellAlign;
      };

      proto.renderPosition = function (x) {
        // render position of cell with in slider
        var side = this.parent.originSide;
        this.element.style[side] = this.parent.getPositionValue(x);
      };

      proto.select = function () {
        this.element.classList.add('is-selected');
        this.element.removeAttribute('aria-hidden');
      };

      proto.unselect = function () {
        this.element.classList.remove('is-selected');
        this.element.setAttribute('aria-hidden', 'true');
      };
      /**
       * @param {Integer} factor - 0, 1, or -1
      **/


      proto.wrapShift = function (shift) {
        this.shift = shift;
        this.renderPosition(this.x + this.parent.slideableWidth * shift);
      };

      proto.remove = function () {
        this.element.parentNode.removeChild(this.element);
      };

      return Cell;
    });
  });

  var slide = createCommonjsModule(function (module) {
    // slide
    (function (window, factory) {
      // universal module definition

      /* jshint strict: false */
      if ( module.exports) {
        // CommonJS
        module.exports = factory();
      } else {
        // browser global
        window.Flickity = window.Flickity || {};
        window.Flickity.Slide = factory();
      }
    })(window, function factory() {

      function Slide(parent) {
        this.parent = parent;
        this.isOriginLeft = parent.originSide == 'left';
        this.cells = [];
        this.outerWidth = 0;
        this.height = 0;
      }

      var proto = Slide.prototype;

      proto.addCell = function (cell) {
        this.cells.push(cell);
        this.outerWidth += cell.size.outerWidth;
        this.height = Math.max(cell.size.outerHeight, this.height); // first cell stuff

        if (this.cells.length == 1) {
          this.x = cell.x; // x comes from first cell

          var beginMargin = this.isOriginLeft ? 'marginLeft' : 'marginRight';
          this.firstMargin = cell.size[beginMargin];
        }
      };

      proto.updateTarget = function () {
        var endMargin = this.isOriginLeft ? 'marginRight' : 'marginLeft';
        var lastCell = this.getLastCell();
        var lastMargin = lastCell ? lastCell.size[endMargin] : 0;
        var slideWidth = this.outerWidth - (this.firstMargin + lastMargin);
        this.target = this.x + this.firstMargin + slideWidth * this.parent.cellAlign;
      };

      proto.getLastCell = function () {
        return this.cells[this.cells.length - 1];
      };

      proto.select = function () {
        this.cells.forEach(function (cell) {
          cell.select();
        });
      };

      proto.unselect = function () {
        this.cells.forEach(function (cell) {
          cell.unselect();
        });
      };

      proto.getCellElements = function () {
        return this.cells.map(function (cell) {
          return cell.element;
        });
      };

      return Slide;
    });
  });

  var animate = createCommonjsModule(function (module) {
    // animate
    (function (window, factory) {
      // universal module definition

      /* jshint strict: false */
      if ( module.exports) {
        // CommonJS
        module.exports = factory(window, utils);
      } else {
        // browser global
        window.Flickity = window.Flickity || {};
        window.Flickity.animatePrototype = factory(window, window.fizzyUIUtils);
      }
    })(window, function factory(window, utils) {

      var proto = {};

      proto.startAnimation = function () {
        if (this.isAnimating) {
          return;
        }

        this.isAnimating = true;
        this.restingFrames = 0;
        this.animate();
      };

      proto.animate = function () {
        this.applyDragForce();
        this.applySelectedAttraction();
        var previousX = this.x;
        this.integratePhysics();
        this.positionSlider();
        this.settle(previousX); // animate next frame

        if (this.isAnimating) {
          var _this = this;

          requestAnimationFrame(function animateFrame() {
            _this.animate();
          });
        }
      };

      proto.positionSlider = function () {
        var x = this.x; // wrap position around

        if (this.options.wrapAround && this.cells.length > 1) {
          x = utils.modulo(x, this.slideableWidth);
          x = x - this.slideableWidth;
          this.shiftWrapCells(x);
        }

        this.setTranslateX(x, this.isAnimating);
        this.dispatchScrollEvent();
      };

      proto.setTranslateX = function (x, is3d) {
        x += this.cursorPosition; // reverse if right-to-left and using transform

        x = this.options.rightToLeft ? -x : x;
        var translateX = this.getPositionValue(x); // use 3D tranforms for hardware acceleration on iOS
        // but use 2D when settled, for better font-rendering

        this.slider.style.transform = is3d ? 'translate3d(' + translateX + ',0,0)' : 'translateX(' + translateX + ')';
      };

      proto.dispatchScrollEvent = function () {
        var firstSlide = this.slides[0];

        if (!firstSlide) {
          return;
        }

        var positionX = -this.x - firstSlide.target;
        var progress = positionX / this.slidesWidth;
        this.dispatchEvent('scroll', null, [progress, positionX]);
      };

      proto.positionSliderAtSelected = function () {
        if (!this.cells.length) {
          return;
        }

        this.x = -this.selectedSlide.target;
        this.velocity = 0; // stop wobble

        this.positionSlider();
      };

      proto.getPositionValue = function (position) {
        if (this.options.percentPosition) {
          // percent position, round to 2 digits, like 12.34%
          return Math.round(position / this.size.innerWidth * 10000) * 0.01 + '%';
        } else {
          // pixel positioning
          return Math.round(position) + 'px';
        }
      };

      proto.settle = function (previousX) {
        // keep track of frames where x hasn't moved
        if (!this.isPointerDown && Math.round(this.x * 100) == Math.round(previousX * 100)) {
          this.restingFrames++;
        } // stop animating if resting for 3 or more frames


        if (this.restingFrames > 2) {
          this.isAnimating = false;
          delete this.isFreeScrolling; // render position with translateX when settled

          this.positionSlider();
          this.dispatchEvent('settle', null, [this.selectedIndex]);
        }
      };

      proto.shiftWrapCells = function (x) {
        // shift before cells
        var beforeGap = this.cursorPosition + x;

        this._shiftCells(this.beforeShiftCells, beforeGap, -1); // shift after cells


        var afterGap = this.size.innerWidth - (x + this.slideableWidth + this.cursorPosition);

        this._shiftCells(this.afterShiftCells, afterGap, 1);
      };

      proto._shiftCells = function (cells, gap, shift) {
        for (var i = 0; i < cells.length; i++) {
          var cell = cells[i];
          var cellShift = gap > 0 ? shift : 0;
          cell.wrapShift(cellShift);
          gap -= cell.size.outerWidth;
        }
      };

      proto._unshiftCells = function (cells) {
        if (!cells || !cells.length) {
          return;
        }

        for (var i = 0; i < cells.length; i++) {
          cells[i].wrapShift(0);
        }
      }; // -------------------------- physics -------------------------- //


      proto.integratePhysics = function () {
        this.x += this.velocity;
        this.velocity *= this.getFrictionFactor();
      };

      proto.applyForce = function (force) {
        this.velocity += force;
      };

      proto.getFrictionFactor = function () {
        return 1 - this.options[this.isFreeScrolling ? 'freeScrollFriction' : 'friction'];
      };

      proto.getRestingPosition = function () {
        // my thanks to Steven Wittens, who simplified this math greatly
        return this.x + this.velocity / (1 - this.getFrictionFactor());
      };

      proto.applyDragForce = function () {
        if (!this.isDraggable || !this.isPointerDown) {
          return;
        } // change the position to drag position by applying force


        var dragVelocity = this.dragX - this.x;
        var dragForce = dragVelocity - this.velocity;
        this.applyForce(dragForce);
      };

      proto.applySelectedAttraction = function () {
        // do not attract if pointer down or no slides
        var dragDown = this.isDraggable && this.isPointerDown;

        if (dragDown || this.isFreeScrolling || !this.slides.length) {
          return;
        }

        var distance = this.selectedSlide.target * -1 - this.x;
        var force = distance * this.options.selectedAttraction;
        this.applyForce(force);
      };

      return proto;
    });
  });

  var flickity = createCommonjsModule(function (module) {
    // Flickity main
    (function (window, factory) {
      // universal module definition

      /* jshint strict: false */
      if ( module.exports) {
        // CommonJS
        module.exports = factory(window, evEmitter, getSize, utils, cell, slide, animate);
      } else {
        // browser global
        var _Flickity = window.Flickity;
        window.Flickity = factory(window, window.EvEmitter, window.getSize, window.fizzyUIUtils, _Flickity.Cell, _Flickity.Slide, _Flickity.animatePrototype);
      }
    })(window, function factory(window, EvEmitter, getSize, utils, Cell, Slide, animatePrototype) {

      var jQuery = window.jQuery;
      var getComputedStyle = window.getComputedStyle;
      var console = window.console;

      function moveElements(elems, toElem) {
        elems = utils.makeArray(elems);

        while (elems.length) {
          toElem.appendChild(elems.shift());
        }
      } // -------------------------- Flickity -------------------------- //
      // globally unique identifiers


      var GUID = 0; // internal store of all Flickity intances

      var instances = {};

      function Flickity(element, options) {
        var queryElement = utils.getQueryElement(element);

        if (!queryElement) {
          if (console) {
            console.error('Bad element for Flickity: ' + (queryElement || element));
          }

          return;
        }

        this.element = queryElement; // do not initialize twice on same element

        if (this.element.flickityGUID) {
          var instance = instances[this.element.flickityGUID];
          instance.option(options);
          return instance;
        } // add jQuery


        if (jQuery) {
          this.$element = jQuery(this.element);
        } // options


        this.options = utils.extend({}, this.constructor.defaults);
        this.option(options); // kick things off

        this._create();
      }

      Flickity.defaults = {
        accessibility: true,
        // adaptiveHeight: false,
        cellAlign: 'center',
        // cellSelector: undefined,
        // contain: false,
        freeScrollFriction: 0.075,
        // friction when free-scrolling
        friction: 0.28,
        // friction when selecting
        namespaceJQueryEvents: true,
        // initialIndex: 0,
        percentPosition: true,
        resize: true,
        selectedAttraction: 0.025,
        setGallerySize: true // watchCSS: false,
        // wrapAround: false

      }; // hash of methods triggered on _create()

      Flickity.createMethods = [];
      var proto = Flickity.prototype; // inherit EventEmitter

      utils.extend(proto, EvEmitter.prototype);

      proto._create = function () {
        // add id for Flickity.data
        var id = this.guid = ++GUID;
        this.element.flickityGUID = id; // expando

        instances[id] = this; // associate via id
        // initial properties

        this.selectedIndex = 0; // how many frames slider has been in same position

        this.restingFrames = 0; // initial physics properties

        this.x = 0;
        this.velocity = 0;
        this.originSide = this.options.rightToLeft ? 'right' : 'left'; // create viewport & slider

        this.viewport = document.createElement('div');
        this.viewport.className = 'flickity-viewport';

        this._createSlider();

        if (this.options.resize || this.options.watchCSS) {
          window.addEventListener('resize', this);
        } // add listeners from on option


        for (var eventName in this.options.on) {
          var listener = this.options.on[eventName];
          this.on(eventName, listener);
        }

        Flickity.createMethods.forEach(function (method) {
          this[method]();
        }, this);

        if (this.options.watchCSS) {
          this.watchCSS();
        } else {
          this.activate();
        }
      };
      /**
       * set options
       * @param {Object} opts
       */


      proto.option = function (opts) {
        utils.extend(this.options, opts);
      };

      proto.activate = function () {
        if (this.isActive) {
          return;
        }

        this.isActive = true;
        this.element.classList.add('flickity-enabled');

        if (this.options.rightToLeft) {
          this.element.classList.add('flickity-rtl');
        }

        this.getSize(); // move initial cell elements so they can be loaded as cells

        var cellElems = this._filterFindCellElements(this.element.children);

        moveElements(cellElems, this.slider);
        this.viewport.appendChild(this.slider);
        this.element.appendChild(this.viewport); // get cells from children

        this.reloadCells();

        if (this.options.accessibility) {
          // allow element to focusable
          this.element.tabIndex = 0; // listen for key presses

          this.element.addEventListener('keydown', this);
        }

        this.emitEvent('activate');
        this.selectInitialIndex(); // flag for initial activation, for using initialIndex

        this.isInitActivated = true; // ready event. #493

        this.dispatchEvent('ready');
      }; // slider positions the cells


      proto._createSlider = function () {
        // slider element does all the positioning
        var slider = document.createElement('div');
        slider.className = 'flickity-slider';
        slider.style[this.originSide] = 0;
        this.slider = slider;
      };

      proto._filterFindCellElements = function (elems) {
        return utils.filterFindElements(elems, this.options.cellSelector);
      }; // goes through all children


      proto.reloadCells = function () {
        // collection of item elements
        this.cells = this._makeCells(this.slider.children);
        this.positionCells();

        this._getWrapShiftCells();

        this.setGallerySize();
      };
      /**
       * turn elements into Flickity.Cells
       * @param {Array or NodeList or HTMLElement} elems
       * @returns {Array} items - collection of new Flickity Cells
       */


      proto._makeCells = function (elems) {
        var cellElems = this._filterFindCellElements(elems); // create new Flickity for collection


        var cells = cellElems.map(function (cellElem) {
          return new Cell(cellElem, this);
        }, this);
        return cells;
      };

      proto.getLastCell = function () {
        return this.cells[this.cells.length - 1];
      };

      proto.getLastSlide = function () {
        return this.slides[this.slides.length - 1];
      }; // positions all cells


      proto.positionCells = function () {
        // size all cells
        this._sizeCells(this.cells); // position all cells


        this._positionCells(0);
      };
      /**
       * position certain cells
       * @param {Integer} index - which cell to start with
       */


      proto._positionCells = function (index) {
        index = index || 0; // also measure maxCellHeight
        // start 0 if positioning all cells

        this.maxCellHeight = index ? this.maxCellHeight || 0 : 0;
        var cellX = 0; // get cellX

        if (index > 0) {
          var startCell = this.cells[index - 1];
          cellX = startCell.x + startCell.size.outerWidth;
        }

        var len = this.cells.length;

        for (var i = index; i < len; i++) {
          var cell = this.cells[i];
          cell.setPosition(cellX);
          cellX += cell.size.outerWidth;
          this.maxCellHeight = Math.max(cell.size.outerHeight, this.maxCellHeight);
        } // keep track of cellX for wrap-around


        this.slideableWidth = cellX; // slides

        this.updateSlides(); // contain slides target

        this._containSlides(); // update slidesWidth


        this.slidesWidth = len ? this.getLastSlide().target - this.slides[0].target : 0;
      };
      /**
       * cell.getSize() on multiple cells
       * @param {Array} cells
       */


      proto._sizeCells = function (cells) {
        cells.forEach(function (cell) {
          cell.getSize();
        });
      }; // --------------------------  -------------------------- //


      proto.updateSlides = function () {
        this.slides = [];

        if (!this.cells.length) {
          return;
        }

        var slide = new Slide(this);
        this.slides.push(slide);
        var isOriginLeft = this.originSide == 'left';
        var nextMargin = isOriginLeft ? 'marginRight' : 'marginLeft';

        var canCellFit = this._getCanCellFit();

        this.cells.forEach(function (cell, i) {
          // just add cell if first cell in slide
          if (!slide.cells.length) {
            slide.addCell(cell);
            return;
          }

          var slideWidth = slide.outerWidth - slide.firstMargin + (cell.size.outerWidth - cell.size[nextMargin]);

          if (canCellFit.call(this, i, slideWidth)) {
            slide.addCell(cell);
          } else {
            // doesn't fit, new slide
            slide.updateTarget();
            slide = new Slide(this);
            this.slides.push(slide);
            slide.addCell(cell);
          }
        }, this); // last slide

        slide.updateTarget(); // update .selectedSlide

        this.updateSelectedSlide();
      };

      proto._getCanCellFit = function () {
        var groupCells = this.options.groupCells;

        if (!groupCells) {
          return function () {
            return false;
          };
        } else if (typeof groupCells == 'number') {
          // group by number. 3 -> [0,1,2], [3,4,5], ...
          var number = parseInt(groupCells, 10);
          return function (i) {
            return i % number !== 0;
          };
        } // default, group by width of slide
        // parse '75%


        var percentMatch = typeof groupCells == 'string' && groupCells.match(/^(\d+)%$/);
        var percent = percentMatch ? parseInt(percentMatch[1], 10) / 100 : 1;
        return function (i, slideWidth) {
          return slideWidth <= (this.size.innerWidth + 1) * percent;
        };
      }; // alias _init for jQuery plugin .flickity()


      proto._init = proto.reposition = function () {
        this.positionCells();
        this.positionSliderAtSelected();
      };

      proto.getSize = function () {
        this.size = getSize(this.element);
        this.setCellAlign();
        this.cursorPosition = this.size.innerWidth * this.cellAlign;
      };

      var cellAlignShorthands = {
        // cell align, then based on origin side
        center: {
          left: 0.5,
          right: 0.5
        },
        left: {
          left: 0,
          right: 1
        },
        right: {
          right: 0,
          left: 1
        }
      };

      proto.setCellAlign = function () {
        var shorthand = cellAlignShorthands[this.options.cellAlign];
        this.cellAlign = shorthand ? shorthand[this.originSide] : this.options.cellAlign;
      };

      proto.setGallerySize = function () {
        if (this.options.setGallerySize) {
          var height = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
          this.viewport.style.height = height + 'px';
        }
      };

      proto._getWrapShiftCells = function () {
        // only for wrap-around
        if (!this.options.wrapAround) {
          return;
        } // unshift previous cells


        this._unshiftCells(this.beforeShiftCells);

        this._unshiftCells(this.afterShiftCells); // get before cells
        // initial gap


        var gapX = this.cursorPosition;
        var cellIndex = this.cells.length - 1;
        this.beforeShiftCells = this._getGapCells(gapX, cellIndex, -1); // get after cells
        // ending gap between last cell and end of gallery viewport

        gapX = this.size.innerWidth - this.cursorPosition; // start cloning at first cell, working forwards

        this.afterShiftCells = this._getGapCells(gapX, 0, 1);
      };

      proto._getGapCells = function (gapX, cellIndex, increment) {
        // keep adding cells until the cover the initial gap
        var cells = [];

        while (gapX > 0) {
          var cell = this.cells[cellIndex];

          if (!cell) {
            break;
          }

          cells.push(cell);
          cellIndex += increment;
          gapX -= cell.size.outerWidth;
        }

        return cells;
      }; // ----- contain ----- //
      // contain cell targets so no excess sliding


      proto._containSlides = function () {
        if (!this.options.contain || this.options.wrapAround || !this.cells.length) {
          return;
        }

        var isRightToLeft = this.options.rightToLeft;
        var beginMargin = isRightToLeft ? 'marginRight' : 'marginLeft';
        var endMargin = isRightToLeft ? 'marginLeft' : 'marginRight';
        var contentWidth = this.slideableWidth - this.getLastCell().size[endMargin]; // content is less than gallery size

        var isContentSmaller = contentWidth < this.size.innerWidth; // bounds

        var beginBound = this.cursorPosition + this.cells[0].size[beginMargin];
        var endBound = contentWidth - this.size.innerWidth * (1 - this.cellAlign); // contain each cell target

        this.slides.forEach(function (slide) {
          if (isContentSmaller) {
            // all cells fit inside gallery
            slide.target = contentWidth * this.cellAlign;
          } else {
            // contain to bounds
            slide.target = Math.max(slide.target, beginBound);
            slide.target = Math.min(slide.target, endBound);
          }
        }, this);
      }; // -----  ----- //

      /**
       * emits events via eventEmitter and jQuery events
       * @param {String} type - name of event
       * @param {Event} event - original event
       * @param {Array} args - extra arguments
       */


      proto.dispatchEvent = function (type, event, args) {
        var emitArgs = event ? [event].concat(args) : args;
        this.emitEvent(type, emitArgs);

        if (jQuery && this.$element) {
          // default trigger with type if no event
          type += this.options.namespaceJQueryEvents ? '.flickity' : '';
          var $event = type;

          if (event) {
            // create jQuery event
            var jQEvent = jQuery.Event(event);
            jQEvent.type = type;
            $event = jQEvent;
          }

          this.$element.trigger($event, args);
        }
      }; // -------------------------- select -------------------------- //

      /**
       * @param {Integer} index - index of the slide
       * @param {Boolean} isWrap - will wrap-around to last/first if at the end
       * @param {Boolean} isInstant - will immediately set position at selected cell
       */


      proto.select = function (index, isWrap, isInstant) {
        if (!this.isActive) {
          return;
        }

        index = parseInt(index, 10);

        this._wrapSelect(index);

        if (this.options.wrapAround || isWrap) {
          index = utils.modulo(index, this.slides.length);
        } // bail if invalid index


        if (!this.slides[index]) {
          return;
        }

        var prevIndex = this.selectedIndex;
        this.selectedIndex = index;
        this.updateSelectedSlide();

        if (isInstant) {
          this.positionSliderAtSelected();
        } else {
          this.startAnimation();
        }

        if (this.options.adaptiveHeight) {
          this.setGallerySize();
        } // events


        this.dispatchEvent('select', null, [index]); // change event if new index

        if (index != prevIndex) {
          this.dispatchEvent('change', null, [index]);
        } // old v1 event name, remove in v3


        this.dispatchEvent('cellSelect');
      }; // wraps position for wrapAround, to move to closest slide. #113


      proto._wrapSelect = function (index) {
        var len = this.slides.length;
        var isWrapping = this.options.wrapAround && len > 1;

        if (!isWrapping) {
          return index;
        }

        var wrapIndex = utils.modulo(index, len); // go to shortest

        var delta = Math.abs(wrapIndex - this.selectedIndex);
        var backWrapDelta = Math.abs(wrapIndex + len - this.selectedIndex);
        var forewardWrapDelta = Math.abs(wrapIndex - len - this.selectedIndex);

        if (!this.isDragSelect && backWrapDelta < delta) {
          index += len;
        } else if (!this.isDragSelect && forewardWrapDelta < delta) {
          index -= len;
        } // wrap position so slider is within normal area


        if (index < 0) {
          this.x -= this.slideableWidth;
        } else if (index >= len) {
          this.x += this.slideableWidth;
        }
      };

      proto.previous = function (isWrap, isInstant) {
        this.select(this.selectedIndex - 1, isWrap, isInstant);
      };

      proto.next = function (isWrap, isInstant) {
        this.select(this.selectedIndex + 1, isWrap, isInstant);
      };

      proto.updateSelectedSlide = function () {
        var slide = this.slides[this.selectedIndex]; // selectedIndex could be outside of slides, if triggered before resize()

        if (!slide) {
          return;
        } // unselect previous selected slide


        this.unselectSelectedSlide(); // update new selected slide

        this.selectedSlide = slide;
        slide.select();
        this.selectedCells = slide.cells;
        this.selectedElements = slide.getCellElements(); // HACK: selectedCell & selectedElement is first cell in slide, backwards compatibility
        // Remove in v3?

        this.selectedCell = slide.cells[0];
        this.selectedElement = this.selectedElements[0];
      };

      proto.unselectSelectedSlide = function () {
        if (this.selectedSlide) {
          this.selectedSlide.unselect();
        }
      };

      proto.selectInitialIndex = function () {
        var initialIndex = this.options.initialIndex; // already activated, select previous selectedIndex

        if (this.isInitActivated) {
          this.select(this.selectedIndex, false, true);
          return;
        } // select with selector string


        if (initialIndex && typeof initialIndex == 'string') {
          var cell = this.queryCell(initialIndex);

          if (cell) {
            this.selectCell(initialIndex, false, true);
            return;
          }
        }

        var index = 0; // select with number

        if (initialIndex && this.slides[initialIndex]) {
          index = initialIndex;
        } // select instantly


        this.select(index, false, true);
      };
      /**
       * select slide from number or cell element
       * @param {Element or Number} elem
       */


      proto.selectCell = function (value, isWrap, isInstant) {
        // get cell
        var cell = this.queryCell(value);

        if (!cell) {
          return;
        }

        var index = this.getCellSlideIndex(cell);
        this.select(index, isWrap, isInstant);
      };

      proto.getCellSlideIndex = function (cell) {
        // get index of slides that has cell
        for (var i = 0; i < this.slides.length; i++) {
          var slide = this.slides[i];
          var index = slide.cells.indexOf(cell);

          if (index != -1) {
            return i;
          }
        }
      }; // -------------------------- get cells -------------------------- //

      /**
       * get Flickity.Cell, given an Element
       * @param {Element} elem
       * @returns {Flickity.Cell} item
       */


      proto.getCell = function (elem) {
        // loop through cells to get the one that matches
        for (var i = 0; i < this.cells.length; i++) {
          var cell = this.cells[i];

          if (cell.element == elem) {
            return cell;
          }
        }
      };
      /**
       * get collection of Flickity.Cells, given Elements
       * @param {Element, Array, NodeList} elems
       * @returns {Array} cells - Flickity.Cells
       */


      proto.getCells = function (elems) {
        elems = utils.makeArray(elems);
        var cells = [];
        elems.forEach(function (elem) {
          var cell = this.getCell(elem);

          if (cell) {
            cells.push(cell);
          }
        }, this);
        return cells;
      };
      /**
       * get cell elements
       * @returns {Array} cellElems
       */


      proto.getCellElements = function () {
        return this.cells.map(function (cell) {
          return cell.element;
        });
      };
      /**
       * get parent cell from an element
       * @param {Element} elem
       * @returns {Flickit.Cell} cell
       */


      proto.getParentCell = function (elem) {
        // first check if elem is cell
        var cell = this.getCell(elem);

        if (cell) {
          return cell;
        } // try to get parent cell elem


        elem = utils.getParent(elem, '.flickity-slider > *');
        return this.getCell(elem);
      };
      /**
       * get cells adjacent to a slide
       * @param {Integer} adjCount - number of adjacent slides
       * @param {Integer} index - index of slide to start
       * @returns {Array} cells - array of Flickity.Cells
       */


      proto.getAdjacentCellElements = function (adjCount, index) {
        if (!adjCount) {
          return this.selectedSlide.getCellElements();
        }

        index = index === undefined ? this.selectedIndex : index;
        var len = this.slides.length;

        if (1 + adjCount * 2 >= len) {
          return this.getCellElements();
        }

        var cellElems = [];

        for (var i = index - adjCount; i <= index + adjCount; i++) {
          var slideIndex = this.options.wrapAround ? utils.modulo(i, len) : i;
          var slide = this.slides[slideIndex];

          if (slide) {
            cellElems = cellElems.concat(slide.getCellElements());
          }
        }

        return cellElems;
      };
      /**
       * select slide from number or cell element
       * @param {Element, Selector String, or Number} selector
       */


      proto.queryCell = function (selector) {
        if (typeof selector == 'number') {
          // use number as index
          return this.cells[selector];
        }

        if (typeof selector == 'string') {
          // do not select invalid selectors from hash: #123, #/. #791
          if (selector.match(/^[#\.]?[\d\/]/)) {
            return;
          } // use string as selector, get element


          selector = this.element.querySelector(selector);
        } // get cell from element


        return this.getCell(selector);
      }; // -------------------------- events -------------------------- //


      proto.uiChange = function () {
        this.emitEvent('uiChange');
      }; // keep focus on element when child UI elements are clicked


      proto.childUIPointerDown = function (event) {
        // HACK iOS does not allow touch events to bubble up?!
        if (event.type != 'touchstart') {
          event.preventDefault();
        }

        this.focus();
      }; // ----- resize ----- //


      proto.onresize = function () {
        this.watchCSS();
        this.resize();
      };

      utils.debounceMethod(Flickity, 'onresize', 150);

      proto.resize = function () {
        if (!this.isActive) {
          return;
        }

        this.getSize(); // wrap values

        if (this.options.wrapAround) {
          this.x = utils.modulo(this.x, this.slideableWidth);
        }

        this.positionCells();

        this._getWrapShiftCells();

        this.setGallerySize();
        this.emitEvent('resize'); // update selected index for group slides, instant
        // TODO: position can be lost between groups of various numbers

        var selectedElement = this.selectedElements && this.selectedElements[0];
        this.selectCell(selectedElement, false, true);
      }; // watches the :after property, activates/deactivates


      proto.watchCSS = function () {
        var watchOption = this.options.watchCSS;

        if (!watchOption) {
          return;
        }

        var afterContent = getComputedStyle(this.element, ':after').content; // activate if :after { content: 'flickity' }

        if (afterContent.indexOf('flickity') != -1) {
          this.activate();
        } else {
          this.deactivate();
        }
      }; // ----- keydown ----- //
      // go previous/next if left/right keys pressed


      proto.onkeydown = function (event) {
        // only work if element is in focus
        var isNotFocused = document.activeElement && document.activeElement != this.element;

        if (!this.options.accessibility || isNotFocused) {
          return;
        }

        var handler = Flickity.keyboardHandlers[event.keyCode];

        if (handler) {
          handler.call(this);
        }
      };

      Flickity.keyboardHandlers = {
        // left arrow
        37: function _() {
          var leftMethod = this.options.rightToLeft ? 'next' : 'previous';
          this.uiChange();
          this[leftMethod]();
        },
        // right arrow
        39: function _() {
          var rightMethod = this.options.rightToLeft ? 'previous' : 'next';
          this.uiChange();
          this[rightMethod]();
        }
      }; // ----- focus ----- //

      proto.focus = function () {
        // TODO remove scrollTo once focus options gets more support
        // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus#Browser_compatibility
        var prevScrollY = window.pageYOffset;
        this.element.focus({
          preventScroll: true
        }); // hack to fix scroll jump after focus, #76

        if (window.pageYOffset != prevScrollY) {
          window.scrollTo(window.pageXOffset, prevScrollY);
        }
      }; // -------------------------- destroy -------------------------- //
      // deactivate all Flickity functionality, but keep stuff available


      proto.deactivate = function () {
        if (!this.isActive) {
          return;
        }

        this.element.classList.remove('flickity-enabled');
        this.element.classList.remove('flickity-rtl');
        this.unselectSelectedSlide(); // destroy cells

        this.cells.forEach(function (cell) {
          cell.destroy();
        });
        this.element.removeChild(this.viewport); // move child elements back into element

        moveElements(this.slider.children, this.element);

        if (this.options.accessibility) {
          this.element.removeAttribute('tabIndex');
          this.element.removeEventListener('keydown', this);
        } // set flags


        this.isActive = false;
        this.emitEvent('deactivate');
      };

      proto.destroy = function () {
        this.deactivate();
        window.removeEventListener('resize', this);
        this.allOff();
        this.emitEvent('destroy');

        if (jQuery && this.$element) {
          jQuery.removeData(this.element, 'flickity');
        }

        delete this.element.flickityGUID;
        delete instances[this.guid];
      }; // -------------------------- prototype -------------------------- //


      utils.extend(proto, animatePrototype); // -------------------------- extras -------------------------- //

      /**
       * get Flickity instance from element
       * @param {Element} elem
       * @returns {Flickity}
       */

      Flickity.data = function (elem) {
        elem = utils.getQueryElement(elem);
        var id = elem && elem.flickityGUID;
        return id && instances[id];
      };

      utils.htmlInit(Flickity, 'flickity');

      if (jQuery && jQuery.bridget) {
        jQuery.bridget('flickity', Flickity);
      } // set internal jQuery, for Webpack + jQuery v3, #478


      Flickity.setJQuery = function (jq) {
        jQuery = jq;
      };

      Flickity.Cell = Cell;
      Flickity.Slide = Slide;
      return Flickity;
    });
  });

  var unipointer = createCommonjsModule(function (module) {
    /*!
     * Unipointer v2.3.0
     * base class for doing one thing with pointer event
     * MIT license
     */

    /*jshint browser: true, undef: true, unused: true, strict: true */
    (function (window, factory) {
      // universal module definition

      /* jshint strict: false */

      /*global define, module, require */
      if ( module.exports) {
        // CommonJS
        module.exports = factory(window, evEmitter);
      } else {
        // browser global
        window.Unipointer = factory(window, window.EvEmitter);
      }
    })(window, function factory(window, EvEmitter) {

      function noop() {}

      function Unipointer() {} // inherit EvEmitter


      var proto = Unipointer.prototype = Object.create(EvEmitter.prototype);

      proto.bindStartEvent = function (elem) {
        this._bindStartEvent(elem, true);
      };

      proto.unbindStartEvent = function (elem) {
        this._bindStartEvent(elem, false);
      };
      /**
       * Add or remove start event
       * @param {Boolean} isAdd - remove if falsey
       */


      proto._bindStartEvent = function (elem, isAdd) {
        // munge isAdd, default to true
        isAdd = isAdd === undefined ? true : isAdd;
        var bindMethod = isAdd ? 'addEventListener' : 'removeEventListener'; // default to mouse events

        var startEvent = 'mousedown';

        if (window.PointerEvent) {
          // Pointer Events
          startEvent = 'pointerdown';
        } else if ('ontouchstart' in window) {
          // Touch Events. iOS Safari
          startEvent = 'touchstart';
        }

        elem[bindMethod](startEvent, this);
      }; // trigger handler methods for events


      proto.handleEvent = function (event) {
        var method = 'on' + event.type;

        if (this[method]) {
          this[method](event);
        }
      }; // returns the touch that we're keeping track of


      proto.getTouch = function (touches) {
        for (var i = 0; i < touches.length; i++) {
          var touch = touches[i];

          if (touch.identifier == this.pointerIdentifier) {
            return touch;
          }
        }
      }; // ----- start event ----- //


      proto.onmousedown = function (event) {
        // dismiss clicks from right or middle buttons
        var button = event.button;

        if (button && button !== 0 && button !== 1) {
          return;
        }

        this._pointerDown(event, event);
      };

      proto.ontouchstart = function (event) {
        this._pointerDown(event, event.changedTouches[0]);
      };

      proto.onpointerdown = function (event) {
        this._pointerDown(event, event);
      };
      /**
       * pointer start
       * @param {Event} event
       * @param {Event or Touch} pointer
       */


      proto._pointerDown = function (event, pointer) {
        // dismiss right click and other pointers
        // button = 0 is okay, 1-4 not
        if (event.button || this.isPointerDown) {
          return;
        }

        this.isPointerDown = true; // save pointer identifier to match up touch events

        this.pointerIdentifier = pointer.pointerId !== undefined ? // pointerId for pointer events, touch.indentifier for touch events
        pointer.pointerId : pointer.identifier;
        this.pointerDown(event, pointer);
      };

      proto.pointerDown = function (event, pointer) {
        this._bindPostStartEvents(event);

        this.emitEvent('pointerDown', [event, pointer]);
      }; // hash of events to be bound after start event


      var postStartEvents = {
        mousedown: ['mousemove', 'mouseup'],
        touchstart: ['touchmove', 'touchend', 'touchcancel'],
        pointerdown: ['pointermove', 'pointerup', 'pointercancel']
      };

      proto._bindPostStartEvents = function (event) {
        if (!event) {
          return;
        } // get proper events to match start event


        var events = postStartEvents[event.type]; // bind events to node

        events.forEach(function (eventName) {
          window.addEventListener(eventName, this);
        }, this); // save these arguments

        this._boundPointerEvents = events;
      };

      proto._unbindPostStartEvents = function () {
        // check for _boundEvents, in case dragEnd triggered twice (old IE8 bug)
        if (!this._boundPointerEvents) {
          return;
        }

        this._boundPointerEvents.forEach(function (eventName) {
          window.removeEventListener(eventName, this);
        }, this);

        delete this._boundPointerEvents;
      }; // ----- move event ----- //


      proto.onmousemove = function (event) {
        this._pointerMove(event, event);
      };

      proto.onpointermove = function (event) {
        if (event.pointerId == this.pointerIdentifier) {
          this._pointerMove(event, event);
        }
      };

      proto.ontouchmove = function (event) {
        var touch = this.getTouch(event.changedTouches);

        if (touch) {
          this._pointerMove(event, touch);
        }
      };
      /**
       * pointer move
       * @param {Event} event
       * @param {Event or Touch} pointer
       * @private
       */


      proto._pointerMove = function (event, pointer) {
        this.pointerMove(event, pointer);
      }; // public


      proto.pointerMove = function (event, pointer) {
        this.emitEvent('pointerMove', [event, pointer]);
      }; // ----- end event ----- //


      proto.onmouseup = function (event) {
        this._pointerUp(event, event);
      };

      proto.onpointerup = function (event) {
        if (event.pointerId == this.pointerIdentifier) {
          this._pointerUp(event, event);
        }
      };

      proto.ontouchend = function (event) {
        var touch = this.getTouch(event.changedTouches);

        if (touch) {
          this._pointerUp(event, touch);
        }
      };
      /**
       * pointer up
       * @param {Event} event
       * @param {Event or Touch} pointer
       * @private
       */


      proto._pointerUp = function (event, pointer) {
        this._pointerDone();

        this.pointerUp(event, pointer);
      }; // public


      proto.pointerUp = function (event, pointer) {
        this.emitEvent('pointerUp', [event, pointer]);
      }; // ----- pointer done ----- //
      // triggered on pointer up & pointer cancel


      proto._pointerDone = function () {
        this._pointerReset();

        this._unbindPostStartEvents();

        this.pointerDone();
      };

      proto._pointerReset = function () {
        // reset properties
        this.isPointerDown = false;
        delete this.pointerIdentifier;
      };

      proto.pointerDone = noop; // ----- pointer cancel ----- //

      proto.onpointercancel = function (event) {
        if (event.pointerId == this.pointerIdentifier) {
          this._pointerCancel(event, event);
        }
      };

      proto.ontouchcancel = function (event) {
        var touch = this.getTouch(event.changedTouches);

        if (touch) {
          this._pointerCancel(event, touch);
        }
      };
      /**
       * pointer cancel
       * @param {Event} event
       * @param {Event or Touch} pointer
       * @private
       */


      proto._pointerCancel = function (event, pointer) {
        this._pointerDone();

        this.pointerCancel(event, pointer);
      }; // public


      proto.pointerCancel = function (event, pointer) {
        this.emitEvent('pointerCancel', [event, pointer]);
      }; // -----  ----- //
      // utility function for getting x/y coords from event


      Unipointer.getPointerPoint = function (pointer) {
        return {
          x: pointer.pageX,
          y: pointer.pageY
        };
      }; // -----  ----- //


      return Unipointer;
    });
  });

  var unidragger = createCommonjsModule(function (module) {
    /*!
     * Unidragger v2.3.1
     * Draggable base class
     * MIT license
     */

    /*jshint browser: true, unused: true, undef: true, strict: true */
    (function (window, factory) {
      // universal module definition

      /*jshint strict: false */

      /*globals define, module, require */
      if ( module.exports) {
        // CommonJS
        module.exports = factory(window, unipointer);
      } else {
        // browser global
        window.Unidragger = factory(window, window.Unipointer);
      }
    })(window, function factory(window, Unipointer) {

      function Unidragger() {} // inherit Unipointer & EvEmitter


      var proto = Unidragger.prototype = Object.create(Unipointer.prototype); // ----- bind start ----- //

      proto.bindHandles = function () {
        this._bindHandles(true);
      };

      proto.unbindHandles = function () {
        this._bindHandles(false);
      };
      /**
       * Add or remove start event
       * @param {Boolean} isAdd
       */


      proto._bindHandles = function (isAdd) {
        // munge isAdd, default to true
        isAdd = isAdd === undefined ? true : isAdd; // bind each handle

        var bindMethod = isAdd ? 'addEventListener' : 'removeEventListener';
        var touchAction = isAdd ? this._touchActionValue : '';

        for (var i = 0; i < this.handles.length; i++) {
          var handle = this.handles[i];

          this._bindStartEvent(handle, isAdd);

          handle[bindMethod]('click', this); // touch-action: none to override browser touch gestures. metafizzy/flickity#540

          if (window.PointerEvent) {
            handle.style.touchAction = touchAction;
          }
        }
      }; // prototype so it can be overwriteable by Flickity


      proto._touchActionValue = 'none'; // ----- start event ----- //

      /**
       * pointer start
       * @param {Event} event
       * @param {Event or Touch} pointer
       */

      proto.pointerDown = function (event, pointer) {
        var isOkay = this.okayPointerDown(event);

        if (!isOkay) {
          return;
        } // track start event position
        // Safari 9 overrides pageX and pageY. These values needs to be copied. flickity#842


        this.pointerDownPointer = {
          pageX: pointer.pageX,
          pageY: pointer.pageY
        };
        event.preventDefault();
        this.pointerDownBlur(); // bind move and end events

        this._bindPostStartEvents(event);

        this.emitEvent('pointerDown', [event, pointer]);
      }; // nodes that have text fields


      var cursorNodes = {
        TEXTAREA: true,
        INPUT: true,
        SELECT: true,
        OPTION: true
      }; // input types that do not have text fields

      var clickTypes = {
        radio: true,
        checkbox: true,
        button: true,
        submit: true,
        image: true,
        file: true
      }; // dismiss inputs with text fields. flickity#403, flickity#404

      proto.okayPointerDown = function (event) {
        var isCursorNode = cursorNodes[event.target.nodeName];
        var isClickType = clickTypes[event.target.type];
        var isOkay = !isCursorNode || isClickType;

        if (!isOkay) {
          this._pointerReset();
        }

        return isOkay;
      }; // kludge to blur previously focused input


      proto.pointerDownBlur = function () {
        var focused = document.activeElement; // do not blur body for IE10, metafizzy/flickity#117

        var canBlur = focused && focused.blur && focused != document.body;

        if (canBlur) {
          focused.blur();
        }
      }; // ----- move event ----- //

      /**
       * drag move
       * @param {Event} event
       * @param {Event or Touch} pointer
       */


      proto.pointerMove = function (event, pointer) {
        var moveVector = this._dragPointerMove(event, pointer);

        this.emitEvent('pointerMove', [event, pointer, moveVector]);

        this._dragMove(event, pointer, moveVector);
      }; // base pointer move logic


      proto._dragPointerMove = function (event, pointer) {
        var moveVector = {
          x: pointer.pageX - this.pointerDownPointer.pageX,
          y: pointer.pageY - this.pointerDownPointer.pageY
        }; // start drag if pointer has moved far enough to start drag

        if (!this.isDragging && this.hasDragStarted(moveVector)) {
          this._dragStart(event, pointer);
        }

        return moveVector;
      }; // condition if pointer has moved far enough to start drag


      proto.hasDragStarted = function (moveVector) {
        return Math.abs(moveVector.x) > 3 || Math.abs(moveVector.y) > 3;
      }; // ----- end event ----- //

      /**
       * pointer up
       * @param {Event} event
       * @param {Event or Touch} pointer
       */


      proto.pointerUp = function (event, pointer) {
        this.emitEvent('pointerUp', [event, pointer]);

        this._dragPointerUp(event, pointer);
      };

      proto._dragPointerUp = function (event, pointer) {
        if (this.isDragging) {
          this._dragEnd(event, pointer);
        } else {
          // pointer didn't move enough for drag to start
          this._staticClick(event, pointer);
        }
      }; // -------------------------- drag -------------------------- //
      // dragStart


      proto._dragStart = function (event, pointer) {
        this.isDragging = true; // prevent clicks

        this.isPreventingClicks = true;
        this.dragStart(event, pointer);
      };

      proto.dragStart = function (event, pointer) {
        this.emitEvent('dragStart', [event, pointer]);
      }; // dragMove


      proto._dragMove = function (event, pointer, moveVector) {
        // do not drag if not dragging yet
        if (!this.isDragging) {
          return;
        }

        this.dragMove(event, pointer, moveVector);
      };

      proto.dragMove = function (event, pointer, moveVector) {
        event.preventDefault();
        this.emitEvent('dragMove', [event, pointer, moveVector]);
      }; // dragEnd


      proto._dragEnd = function (event, pointer) {
        // set flags
        this.isDragging = false; // re-enable clicking async

        setTimeout(function () {
          delete this.isPreventingClicks;
        }.bind(this));
        this.dragEnd(event, pointer);
      };

      proto.dragEnd = function (event, pointer) {
        this.emitEvent('dragEnd', [event, pointer]);
      }; // ----- onclick ----- //
      // handle all clicks and prevent clicks when dragging


      proto.onclick = function (event) {
        if (this.isPreventingClicks) {
          event.preventDefault();
        }
      }; // ----- staticClick ----- //
      // triggered after pointer down & up with no/tiny movement


      proto._staticClick = function (event, pointer) {
        // ignore emulated mouse up clicks
        if (this.isIgnoringMouseUp && event.type == 'mouseup') {
          return;
        }

        this.staticClick(event, pointer); // set flag for emulated clicks 300ms after touchend

        if (event.type != 'mouseup') {
          this.isIgnoringMouseUp = true; // reset flag after 300ms

          setTimeout(function () {
            delete this.isIgnoringMouseUp;
          }.bind(this), 400);
        }
      };

      proto.staticClick = function (event, pointer) {
        this.emitEvent('staticClick', [event, pointer]);
      }; // ----- utils ----- //


      Unidragger.getPointerPoint = Unipointer.getPointerPoint; // -----  ----- //

      return Unidragger;
    });
  });

  var drag = createCommonjsModule(function (module) {
    // drag
    (function (window, factory) {
      // universal module definition

      /* jshint strict: false */
      if ( module.exports) {
        // CommonJS
        module.exports = factory(window, flickity, unidragger, utils);
      } else {
        // browser global
        window.Flickity = factory(window, window.Flickity, window.Unidragger, window.fizzyUIUtils);
      }
    })(window, function factory(window, Flickity, Unidragger, utils) {

      utils.extend(Flickity.defaults, {
        draggable: '>1',
        dragThreshold: 3
      }); // ----- create ----- //

      Flickity.createMethods.push('_createDrag'); // -------------------------- drag prototype -------------------------- //

      var proto = Flickity.prototype;
      utils.extend(proto, Unidragger.prototype);
      proto._touchActionValue = 'pan-y'; // --------------------------  -------------------------- //

      var isTouch = ('createTouch' in document);
      var isTouchmoveScrollCanceled = false;

      proto._createDrag = function () {
        this.on('activate', this.onActivateDrag);
        this.on('uiChange', this._uiChangeDrag);
        this.on('deactivate', this.onDeactivateDrag);
        this.on('cellChange', this.updateDraggable); // TODO updateDraggable on resize? if groupCells & slides change
        // HACK - add seemingly innocuous handler to fix iOS 10 scroll behavior
        // #457, RubaXa/Sortable#973

        if (isTouch && !isTouchmoveScrollCanceled) {
          window.addEventListener('touchmove', function () {});
          isTouchmoveScrollCanceled = true;
        }
      };

      proto.onActivateDrag = function () {
        this.handles = [this.viewport];
        this.bindHandles();
        this.updateDraggable();
      };

      proto.onDeactivateDrag = function () {
        this.unbindHandles();
        this.element.classList.remove('is-draggable');
      };

      proto.updateDraggable = function () {
        // disable dragging if less than 2 slides. #278
        if (this.options.draggable == '>1') {
          this.isDraggable = this.slides.length > 1;
        } else {
          this.isDraggable = this.options.draggable;
        }

        if (this.isDraggable) {
          this.element.classList.add('is-draggable');
        } else {
          this.element.classList.remove('is-draggable');
        }
      }; // backwards compatibility


      proto.bindDrag = function () {
        this.options.draggable = true;
        this.updateDraggable();
      };

      proto.unbindDrag = function () {
        this.options.draggable = false;
        this.updateDraggable();
      };

      proto._uiChangeDrag = function () {
        delete this.isFreeScrolling;
      }; // -------------------------- pointer events -------------------------- //


      proto.pointerDown = function (event, pointer) {
        if (!this.isDraggable) {
          this._pointerDownDefault(event, pointer);

          return;
        }

        var isOkay = this.okayPointerDown(event);

        if (!isOkay) {
          return;
        }

        this._pointerDownPreventDefault(event);

        this.pointerDownFocus(event); // blur

        if (document.activeElement != this.element) {
          // do not blur if already focused
          this.pointerDownBlur();
        } // stop if it was moving


        this.dragX = this.x;
        this.viewport.classList.add('is-pointer-down'); // track scrolling

        this.pointerDownScroll = getScrollPosition();
        window.addEventListener('scroll', this);

        this._pointerDownDefault(event, pointer);
      }; // default pointerDown logic, used for staticClick


      proto._pointerDownDefault = function (event, pointer) {
        // track start event position
        // Safari 9 overrides pageX and pageY. These values needs to be copied. #779
        this.pointerDownPointer = {
          pageX: pointer.pageX,
          pageY: pointer.pageY
        }; // bind move and end events

        this._bindPostStartEvents(event);

        this.dispatchEvent('pointerDown', event, [pointer]);
      };

      var focusNodes = {
        INPUT: true,
        TEXTAREA: true,
        SELECT: true
      };

      proto.pointerDownFocus = function (event) {
        var isFocusNode = focusNodes[event.target.nodeName];

        if (!isFocusNode) {
          this.focus();
        }
      };

      proto._pointerDownPreventDefault = function (event) {
        var isTouchStart = event.type == 'touchstart';
        var isTouchPointer = event.pointerType == 'touch';
        var isFocusNode = focusNodes[event.target.nodeName];

        if (!isTouchStart && !isTouchPointer && !isFocusNode) {
          event.preventDefault();
        }
      }; // ----- move ----- //


      proto.hasDragStarted = function (moveVector) {
        return Math.abs(moveVector.x) > this.options.dragThreshold;
      }; // ----- up ----- //


      proto.pointerUp = function (event, pointer) {
        delete this.isTouchScrolling;
        this.viewport.classList.remove('is-pointer-down');
        this.dispatchEvent('pointerUp', event, [pointer]);

        this._dragPointerUp(event, pointer);
      };

      proto.pointerDone = function () {
        window.removeEventListener('scroll', this);
        delete this.pointerDownScroll;
      }; // -------------------------- dragging -------------------------- //


      proto.dragStart = function (event, pointer) {
        if (!this.isDraggable) {
          return;
        }

        this.dragStartPosition = this.x;
        this.startAnimation();
        window.removeEventListener('scroll', this);
        this.dispatchEvent('dragStart', event, [pointer]);
      };

      proto.pointerMove = function (event, pointer) {
        var moveVector = this._dragPointerMove(event, pointer);

        this.dispatchEvent('pointerMove', event, [pointer, moveVector]);

        this._dragMove(event, pointer, moveVector);
      };

      proto.dragMove = function (event, pointer, moveVector) {
        if (!this.isDraggable) {
          return;
        }

        event.preventDefault();
        this.previousDragX = this.dragX; // reverse if right-to-left

        var direction = this.options.rightToLeft ? -1 : 1;

        if (this.options.wrapAround) {
          // wrap around move. #589
          moveVector.x = moveVector.x % this.slideableWidth;
        }

        var dragX = this.dragStartPosition + moveVector.x * direction;

        if (!this.options.wrapAround && this.slides.length) {
          // slow drag
          var originBound = Math.max(-this.slides[0].target, this.dragStartPosition);
          dragX = dragX > originBound ? (dragX + originBound) * 0.5 : dragX;
          var endBound = Math.min(-this.getLastSlide().target, this.dragStartPosition);
          dragX = dragX < endBound ? (dragX + endBound) * 0.5 : dragX;
        }

        this.dragX = dragX;
        this.dragMoveTime = new Date();
        this.dispatchEvent('dragMove', event, [pointer, moveVector]);
      };

      proto.dragEnd = function (event, pointer) {
        if (!this.isDraggable) {
          return;
        }

        if (this.options.freeScroll) {
          this.isFreeScrolling = true;
        } // set selectedIndex based on where flick will end up


        var index = this.dragEndRestingSelect();

        if (this.options.freeScroll && !this.options.wrapAround) {
          // if free-scroll & not wrap around
          // do not free-scroll if going outside of bounding slides
          // so bounding slides can attract slider, and keep it in bounds
          var restingX = this.getRestingPosition();
          this.isFreeScrolling = -restingX > this.slides[0].target && -restingX < this.getLastSlide().target;
        } else if (!this.options.freeScroll && index == this.selectedIndex) {
          // boost selection if selected index has not changed
          index += this.dragEndBoostSelect();
        }

        delete this.previousDragX; // apply selection
        // TODO refactor this, selecting here feels weird
        // HACK, set flag so dragging stays in correct direction

        this.isDragSelect = this.options.wrapAround;
        this.select(index);
        delete this.isDragSelect;
        this.dispatchEvent('dragEnd', event, [pointer]);
      };

      proto.dragEndRestingSelect = function () {
        var restingX = this.getRestingPosition(); // how far away from selected slide

        var distance = Math.abs(this.getSlideDistance(-restingX, this.selectedIndex)); // get closet resting going up and going down

        var positiveResting = this._getClosestResting(restingX, distance, 1);

        var negativeResting = this._getClosestResting(restingX, distance, -1); // use closer resting for wrap-around


        var index = positiveResting.distance < negativeResting.distance ? positiveResting.index : negativeResting.index;
        return index;
      };
      /**
       * given resting X and distance to selected cell
       * get the distance and index of the closest cell
       * @param {Number} restingX - estimated post-flick resting position
       * @param {Number} distance - distance to selected cell
       * @param {Integer} increment - +1 or -1, going up or down
       * @returns {Object} - { distance: {Number}, index: {Integer} }
       */


      proto._getClosestResting = function (restingX, distance, increment) {
        var index = this.selectedIndex;
        var minDistance = Infinity;
        var condition = this.options.contain && !this.options.wrapAround ? // if contain, keep going if distance is equal to minDistance
        function (d, md) {
          return d <= md;
        } : function (d, md) {
          return d < md;
        };

        while (condition(distance, minDistance)) {
          // measure distance to next cell
          index += increment;
          minDistance = distance;
          distance = this.getSlideDistance(-restingX, index);

          if (distance === null) {
            break;
          }

          distance = Math.abs(distance);
        }

        return {
          distance: minDistance,
          // selected was previous index
          index: index - increment
        };
      };
      /**
       * measure distance between x and a slide target
       * @param {Number} x
       * @param {Integer} index - slide index
       */


      proto.getSlideDistance = function (x, index) {
        var len = this.slides.length; // wrap around if at least 2 slides

        var isWrapAround = this.options.wrapAround && len > 1;
        var slideIndex = isWrapAround ? utils.modulo(index, len) : index;
        var slide = this.slides[slideIndex];

        if (!slide) {
          return null;
        } // add distance for wrap-around slides


        var wrap = isWrapAround ? this.slideableWidth * Math.floor(index / len) : 0;
        return x - (slide.target + wrap);
      };

      proto.dragEndBoostSelect = function () {
        // do not boost if no previousDragX or dragMoveTime
        if (this.previousDragX === undefined || !this.dragMoveTime || // or if drag was held for 100 ms
        new Date() - this.dragMoveTime > 100) {
          return 0;
        }

        var distance = this.getSlideDistance(-this.dragX, this.selectedIndex);
        var delta = this.previousDragX - this.dragX;

        if (distance > 0 && delta > 0) {
          // boost to next if moving towards the right, and positive velocity
          return 1;
        } else if (distance < 0 && delta < 0) {
          // boost to previous if moving towards the left, and negative velocity
          return -1;
        }

        return 0;
      }; // ----- staticClick ----- //


      proto.staticClick = function (event, pointer) {
        // get clickedCell, if cell was clicked
        var clickedCell = this.getParentCell(event.target);
        var cellElem = clickedCell && clickedCell.element;
        var cellIndex = clickedCell && this.cells.indexOf(clickedCell);
        this.dispatchEvent('staticClick', event, [pointer, cellElem, cellIndex]);
      }; // ----- scroll ----- //


      proto.onscroll = function () {
        var scroll = getScrollPosition();
        var scrollMoveX = this.pointerDownScroll.x - scroll.x;
        var scrollMoveY = this.pointerDownScroll.y - scroll.y; // cancel click/tap if scroll is too much

        if (Math.abs(scrollMoveX) > 3 || Math.abs(scrollMoveY) > 3) {
          this._pointerDone();
        }
      }; // ----- utils ----- //


      function getScrollPosition() {
        return {
          x: window.pageXOffset,
          y: window.pageYOffset
        };
      } // -----  ----- //


      return Flickity;
    });
  });

  var prevNextButton = createCommonjsModule(function (module) {
    // prev/next buttons
    (function (window, factory) {
      // universal module definition

      /* jshint strict: false */
      if ( module.exports) {
        // CommonJS
        module.exports = factory(window, flickity, unipointer, utils);
      } else {
        // browser global
        factory(window, window.Flickity, window.Unipointer, window.fizzyUIUtils);
      }
    })(window, function factory(window, Flickity, Unipointer, utils) {

      var svgURI = 'http://www.w3.org/2000/svg'; // -------------------------- PrevNextButton -------------------------- //

      function PrevNextButton(direction, parent) {
        this.direction = direction;
        this.parent = parent;

        this._create();
      }

      PrevNextButton.prototype = Object.create(Unipointer.prototype);

      PrevNextButton.prototype._create = function () {
        // properties
        this.isEnabled = true;
        this.isPrevious = this.direction == -1;
        var leftDirection = this.parent.options.rightToLeft ? 1 : -1;
        this.isLeft = this.direction == leftDirection;
        var element = this.element = document.createElement('button');
        element.className = 'flickity-button flickity-prev-next-button';
        element.className += this.isPrevious ? ' previous' : ' next'; // prevent button from submitting form http://stackoverflow.com/a/10836076/182183

        element.setAttribute('type', 'button'); // init as disabled

        this.disable();
        element.setAttribute('aria-label', this.isPrevious ? 'Previous' : 'Next'); // create arrow

        var svg = this.createSVG();
        element.appendChild(svg); // events

        this.parent.on('select', this.update.bind(this));
        this.on('pointerDown', this.parent.childUIPointerDown.bind(this.parent));
      };

      PrevNextButton.prototype.activate = function () {
        this.bindStartEvent(this.element);
        this.element.addEventListener('click', this); // add to DOM

        this.parent.element.appendChild(this.element);
      };

      PrevNextButton.prototype.deactivate = function () {
        // remove from DOM
        this.parent.element.removeChild(this.element); // click events

        this.unbindStartEvent(this.element);
        this.element.removeEventListener('click', this);
      };

      PrevNextButton.prototype.createSVG = function () {
        var svg = document.createElementNS(svgURI, 'svg');
        svg.setAttribute('class', 'flickity-button-icon');
        svg.setAttribute('viewBox', '0 0 100 100');
        var path = document.createElementNS(svgURI, 'path');
        var pathMovements = getArrowMovements(this.parent.options.arrowShape);
        path.setAttribute('d', pathMovements);
        path.setAttribute('class', 'arrow'); // rotate arrow

        if (!this.isLeft) {
          path.setAttribute('transform', 'translate(100, 100) rotate(180) ');
        }

        svg.appendChild(path);
        return svg;
      }; // get SVG path movmement


      function getArrowMovements(shape) {
        // use shape as movement if string
        if (typeof shape == 'string') {
          return shape;
        } // create movement string


        return 'M ' + shape.x0 + ',50' + ' L ' + shape.x1 + ',' + (shape.y1 + 50) + ' L ' + shape.x2 + ',' + (shape.y2 + 50) + ' L ' + shape.x3 + ',50 ' + ' L ' + shape.x2 + ',' + (50 - shape.y2) + ' L ' + shape.x1 + ',' + (50 - shape.y1) + ' Z';
      }

      PrevNextButton.prototype.handleEvent = utils.handleEvent;

      PrevNextButton.prototype.onclick = function () {
        if (!this.isEnabled) {
          return;
        }

        this.parent.uiChange();
        var method = this.isPrevious ? 'previous' : 'next';
        this.parent[method]();
      }; // -----  ----- //


      PrevNextButton.prototype.enable = function () {
        if (this.isEnabled) {
          return;
        }

        this.element.disabled = false;
        this.isEnabled = true;
      };

      PrevNextButton.prototype.disable = function () {
        if (!this.isEnabled) {
          return;
        }

        this.element.disabled = true;
        this.isEnabled = false;
      };

      PrevNextButton.prototype.update = function () {
        // index of first or last slide, if previous or next
        var slides = this.parent.slides; // enable is wrapAround and at least 2 slides

        if (this.parent.options.wrapAround && slides.length > 1) {
          this.enable();
          return;
        }

        var lastIndex = slides.length ? slides.length - 1 : 0;
        var boundIndex = this.isPrevious ? 0 : lastIndex;
        var method = this.parent.selectedIndex == boundIndex ? 'disable' : 'enable';
        this[method]();
      };

      PrevNextButton.prototype.destroy = function () {
        this.deactivate();
        this.allOff();
      }; // -------------------------- Flickity prototype -------------------------- //


      utils.extend(Flickity.defaults, {
        prevNextButtons: true,
        arrowShape: {
          x0: 10,
          x1: 60,
          y1: 50,
          x2: 70,
          y2: 40,
          x3: 30
        }
      });
      Flickity.createMethods.push('_createPrevNextButtons');
      var proto = Flickity.prototype;

      proto._createPrevNextButtons = function () {
        if (!this.options.prevNextButtons) {
          return;
        }

        this.prevButton = new PrevNextButton(-1, this);
        this.nextButton = new PrevNextButton(1, this);
        this.on('activate', this.activatePrevNextButtons);
      };

      proto.activatePrevNextButtons = function () {
        this.prevButton.activate();
        this.nextButton.activate();
        this.on('deactivate', this.deactivatePrevNextButtons);
      };

      proto.deactivatePrevNextButtons = function () {
        this.prevButton.deactivate();
        this.nextButton.deactivate();
        this.off('deactivate', this.deactivatePrevNextButtons);
      }; // --------------------------  -------------------------- //


      Flickity.PrevNextButton = PrevNextButton;
      return Flickity;
    });
  });

  var pageDots = createCommonjsModule(function (module) {
    // page dots
    (function (window, factory) {
      // universal module definition

      /* jshint strict: false */
      if ( module.exports) {
        // CommonJS
        module.exports = factory(window, flickity, unipointer, utils);
      } else {
        // browser global
        factory(window, window.Flickity, window.Unipointer, window.fizzyUIUtils);
      }
    })(window, function factory(window, Flickity, Unipointer, utils) {

      function PageDots(parent) {
        this.parent = parent;

        this._create();
      }

      PageDots.prototype = Object.create(Unipointer.prototype);

      PageDots.prototype._create = function () {
        // create holder element
        this.holder = document.createElement('ol');
        this.holder.className = 'flickity-page-dots'; // create dots, array of elements

        this.dots = []; // events

        this.handleClick = this.onClick.bind(this);
        this.on('pointerDown', this.parent.childUIPointerDown.bind(this.parent));
      };

      PageDots.prototype.activate = function () {
        this.setDots();
        this.holder.addEventListener('click', this.handleClick);
        this.bindStartEvent(this.holder); // add to DOM

        this.parent.element.appendChild(this.holder);
      };

      PageDots.prototype.deactivate = function () {
        this.holder.removeEventListener('click', this.handleClick);
        this.unbindStartEvent(this.holder); // remove from DOM

        this.parent.element.removeChild(this.holder);
      };

      PageDots.prototype.setDots = function () {
        // get difference between number of slides and number of dots
        var delta = this.parent.slides.length - this.dots.length;

        if (delta > 0) {
          this.addDots(delta);
        } else if (delta < 0) {
          this.removeDots(-delta);
        }
      };

      PageDots.prototype.addDots = function (count) {
        var fragment = document.createDocumentFragment();
        var newDots = [];
        var length = this.dots.length;
        var max = length + count;

        for (var i = length; i < max; i++) {
          var dot = document.createElement('li');
          dot.className = 'dot';
          dot.setAttribute('aria-label', 'Page dot ' + (i + 1));
          fragment.appendChild(dot);
          newDots.push(dot);
        }

        this.holder.appendChild(fragment);
        this.dots = this.dots.concat(newDots);
      };

      PageDots.prototype.removeDots = function (count) {
        // remove from this.dots collection
        var removeDots = this.dots.splice(this.dots.length - count, count); // remove from DOM

        removeDots.forEach(function (dot) {
          this.holder.removeChild(dot);
        }, this);
      };

      PageDots.prototype.updateSelected = function () {
        // remove selected class on previous
        if (this.selectedDot) {
          this.selectedDot.className = 'dot';
          this.selectedDot.removeAttribute('aria-current');
        } // don't proceed if no dots


        if (!this.dots.length) {
          return;
        }

        this.selectedDot = this.dots[this.parent.selectedIndex];
        this.selectedDot.className = 'dot is-selected';
        this.selectedDot.setAttribute('aria-current', 'step');
      };

      PageDots.prototype.onTap = // old method name, backwards-compatible
      PageDots.prototype.onClick = function (event) {
        var target = event.target; // only care about dot clicks

        if (target.nodeName != 'LI') {
          return;
        }

        this.parent.uiChange();
        var index = this.dots.indexOf(target);
        this.parent.select(index);
      };

      PageDots.prototype.destroy = function () {
        this.deactivate();
        this.allOff();
      };

      Flickity.PageDots = PageDots; // -------------------------- Flickity -------------------------- //

      utils.extend(Flickity.defaults, {
        pageDots: true
      });
      Flickity.createMethods.push('_createPageDots');
      var proto = Flickity.prototype;

      proto._createPageDots = function () {
        if (!this.options.pageDots) {
          return;
        }

        this.pageDots = new PageDots(this); // events

        this.on('activate', this.activatePageDots);
        this.on('select', this.updateSelectedPageDots);
        this.on('cellChange', this.updatePageDots);
        this.on('resize', this.updatePageDots);
        this.on('deactivate', this.deactivatePageDots);
      };

      proto.activatePageDots = function () {
        this.pageDots.activate();
      };

      proto.updateSelectedPageDots = function () {
        this.pageDots.updateSelected();
      };

      proto.updatePageDots = function () {
        this.pageDots.setDots();
      };

      proto.deactivatePageDots = function () {
        this.pageDots.deactivate();
      }; // -----  ----- //


      Flickity.PageDots = PageDots;
      return Flickity;
    });
  });

  var player = createCommonjsModule(function (module) {
    // player & autoPlay
    (function (window, factory) {
      // universal module definition

      /* jshint strict: false */
      if ( module.exports) {
        // CommonJS
        module.exports = factory(evEmitter, utils, flickity);
      } else {
        // browser global
        factory(window.EvEmitter, window.fizzyUIUtils, window.Flickity);
      }
    })(window, function factory(EvEmitter, utils, Flickity) {

      function Player(parent) {
        this.parent = parent;
        this.state = 'stopped'; // visibility change event handler

        this.onVisibilityChange = this.visibilityChange.bind(this);
        this.onVisibilityPlay = this.visibilityPlay.bind(this);
      }

      Player.prototype = Object.create(EvEmitter.prototype); // start play

      Player.prototype.play = function () {
        if (this.state == 'playing') {
          return;
        } // do not play if page is hidden, start playing when page is visible


        var isPageHidden = document.hidden;

        if (isPageHidden) {
          document.addEventListener('visibilitychange', this.onVisibilityPlay);
          return;
        }

        this.state = 'playing'; // listen to visibility change

        document.addEventListener('visibilitychange', this.onVisibilityChange); // start ticking

        this.tick();
      };

      Player.prototype.tick = function () {
        // do not tick if not playing
        if (this.state != 'playing') {
          return;
        }

        var time = this.parent.options.autoPlay; // default to 3 seconds

        time = typeof time == 'number' ? time : 3000;

        var _this = this; // HACK: reset ticks if stopped and started within interval


        this.clear();
        this.timeout = setTimeout(function () {
          _this.parent.next(true);

          _this.tick();
        }, time);
      };

      Player.prototype.stop = function () {
        this.state = 'stopped';
        this.clear(); // remove visibility change event

        document.removeEventListener('visibilitychange', this.onVisibilityChange);
      };

      Player.prototype.clear = function () {
        clearTimeout(this.timeout);
      };

      Player.prototype.pause = function () {
        if (this.state == 'playing') {
          this.state = 'paused';
          this.clear();
        }
      };

      Player.prototype.unpause = function () {
        // re-start play if paused
        if (this.state == 'paused') {
          this.play();
        }
      }; // pause if page visibility is hidden, unpause if visible


      Player.prototype.visibilityChange = function () {
        var isPageHidden = document.hidden;
        this[isPageHidden ? 'pause' : 'unpause']();
      };

      Player.prototype.visibilityPlay = function () {
        this.play();
        document.removeEventListener('visibilitychange', this.onVisibilityPlay);
      }; // -------------------------- Flickity -------------------------- //


      utils.extend(Flickity.defaults, {
        pauseAutoPlayOnHover: true
      });
      Flickity.createMethods.push('_createPlayer');
      var proto = Flickity.prototype;

      proto._createPlayer = function () {
        this.player = new Player(this);
        this.on('activate', this.activatePlayer);
        this.on('uiChange', this.stopPlayer);
        this.on('pointerDown', this.stopPlayer);
        this.on('deactivate', this.deactivatePlayer);
      };

      proto.activatePlayer = function () {
        if (!this.options.autoPlay) {
          return;
        }

        this.player.play();
        this.element.addEventListener('mouseenter', this);
      }; // Player API, don't hate the ... thanks I know where the door is


      proto.playPlayer = function () {
        this.player.play();
      };

      proto.stopPlayer = function () {
        this.player.stop();
      };

      proto.pausePlayer = function () {
        this.player.pause();
      };

      proto.unpausePlayer = function () {
        this.player.unpause();
      };

      proto.deactivatePlayer = function () {
        this.player.stop();
        this.element.removeEventListener('mouseenter', this);
      }; // ----- mouseenter/leave ----- //
      // pause auto-play on hover


      proto.onmouseenter = function () {
        if (!this.options.pauseAutoPlayOnHover) {
          return;
        }

        this.player.pause();
        this.element.addEventListener('mouseleave', this);
      }; // resume auto-play on hover off


      proto.onmouseleave = function () {
        this.player.unpause();
        this.element.removeEventListener('mouseleave', this);
      }; // -----  ----- //


      Flickity.Player = Player;
      return Flickity;
    });
  });

  var addRemoveCell = createCommonjsModule(function (module) {
    // add, remove cell
    (function (window, factory) {
      // universal module definition

      /* jshint strict: false */
      if ( module.exports) {
        // CommonJS
        module.exports = factory(window, flickity, utils);
      } else {
        // browser global
        factory(window, window.Flickity, window.fizzyUIUtils);
      }
    })(window, function factory(window, Flickity, utils) {

      function getCellsFragment(cells) {
        var fragment = document.createDocumentFragment();
        cells.forEach(function (cell) {
          fragment.appendChild(cell.element);
        });
        return fragment;
      } // -------------------------- add/remove cell prototype -------------------------- //


      var proto = Flickity.prototype;
      /**
       * Insert, prepend, or append cells
       * @param {Element, Array, NodeList} elems
       * @param {Integer} index
       */

      proto.insert = function (elems, index) {
        var cells = this._makeCells(elems);

        if (!cells || !cells.length) {
          return;
        }

        var len = this.cells.length; // default to append

        index = index === undefined ? len : index; // add cells with document fragment

        var fragment = getCellsFragment(cells); // append to slider

        var isAppend = index == len;

        if (isAppend) {
          this.slider.appendChild(fragment);
        } else {
          var insertCellElement = this.cells[index].element;
          this.slider.insertBefore(fragment, insertCellElement);
        } // add to this.cells


        if (index === 0) {
          // prepend, add to start
          this.cells = cells.concat(this.cells);
        } else if (isAppend) {
          // append, add to end
          this.cells = this.cells.concat(cells);
        } else {
          // insert in this.cells
          var endCells = this.cells.splice(index, len - index);
          this.cells = this.cells.concat(cells).concat(endCells);
        }

        this._sizeCells(cells);

        this.cellChange(index, true);
      };

      proto.append = function (elems) {
        this.insert(elems, this.cells.length);
      };

      proto.prepend = function (elems) {
        this.insert(elems, 0);
      };
      /**
       * Remove cells
       * @param {Element, Array, NodeList} elems
       */


      proto.remove = function (elems) {
        var cells = this.getCells(elems);

        if (!cells || !cells.length) {
          return;
        }

        var minCellIndex = this.cells.length - 1; // remove cells from collection & DOM

        cells.forEach(function (cell) {
          cell.remove();
          var index = this.cells.indexOf(cell);
          minCellIndex = Math.min(index, minCellIndex);
          utils.removeFrom(this.cells, cell);
        }, this);
        this.cellChange(minCellIndex, true);
      };
      /**
       * logic to be run after a cell's size changes
       * @param {Element} elem - cell's element
       */


      proto.cellSizeChange = function (elem) {
        var cell = this.getCell(elem);

        if (!cell) {
          return;
        }

        cell.getSize();
        var index = this.cells.indexOf(cell);
        this.cellChange(index);
      };
      /**
       * logic any time a cell is changed: added, removed, or size changed
       * @param {Integer} changedCellIndex - index of the changed cell, optional
       */


      proto.cellChange = function (changedCellIndex, isPositioningSlider) {
        var prevSelectedElem = this.selectedElement;

        this._positionCells(changedCellIndex);

        this._getWrapShiftCells();

        this.setGallerySize(); // update selectedIndex
        // try to maintain position & select previous selected element

        var cell = this.getCell(prevSelectedElem);

        if (cell) {
          this.selectedIndex = this.getCellSlideIndex(cell);
        }

        this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex);
        this.emitEvent('cellChange', [changedCellIndex]); // position slider

        this.select(this.selectedIndex); // do not position slider after lazy load

        if (isPositioningSlider) {
          this.positionSliderAtSelected();
        }
      }; // -----  ----- //


      return Flickity;
    });
  });

  var lazyload = createCommonjsModule(function (module) {
    // lazyload
    (function (window, factory) {
      // universal module definition

      /* jshint strict: false */
      if ( module.exports) {
        // CommonJS
        module.exports = factory(window, flickity, utils);
      } else {
        // browser global
        factory(window, window.Flickity, window.fizzyUIUtils);
      }
    })(window, function factory(window, Flickity, utils) {

      Flickity.createMethods.push('_createLazyload');
      var proto = Flickity.prototype;

      proto._createLazyload = function () {
        this.on('select', this.lazyLoad);
      };

      proto.lazyLoad = function () {
        var lazyLoad = this.options.lazyLoad;

        if (!lazyLoad) {
          return;
        } // get adjacent cells, use lazyLoad option for adjacent count


        var adjCount = typeof lazyLoad == 'number' ? lazyLoad : 0;
        var cellElems = this.getAdjacentCellElements(adjCount); // get lazy images in those cells

        var lazyImages = [];
        cellElems.forEach(function (cellElem) {
          var lazyCellImages = getCellLazyImages(cellElem);
          lazyImages = lazyImages.concat(lazyCellImages);
        }); // load lazy images

        lazyImages.forEach(function (img) {
          new LazyLoader(img, this);
        }, this);
      };

      function getCellLazyImages(cellElem) {
        // check if cell element is lazy image
        if (cellElem.nodeName == 'IMG') {
          var lazyloadAttr = cellElem.getAttribute('data-flickity-lazyload');
          var srcAttr = cellElem.getAttribute('data-flickity-lazyload-src');
          var srcsetAttr = cellElem.getAttribute('data-flickity-lazyload-srcset');

          if (lazyloadAttr || srcAttr || srcsetAttr) {
            return [cellElem];
          }
        } // select lazy images in cell


        var lazySelector = 'img[data-flickity-lazyload], ' + 'img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]';
        var imgs = cellElem.querySelectorAll(lazySelector);
        return utils.makeArray(imgs);
      } // -------------------------- LazyLoader -------------------------- //

      /**
       * class to handle loading images
       */


      function LazyLoader(img, flickity) {
        this.img = img;
        this.flickity = flickity;
        this.load();
      }

      LazyLoader.prototype.handleEvent = utils.handleEvent;

      LazyLoader.prototype.load = function () {
        this.img.addEventListener('load', this);
        this.img.addEventListener('error', this); // get src & srcset

        var src = this.img.getAttribute('data-flickity-lazyload') || this.img.getAttribute('data-flickity-lazyload-src');
        var srcset = this.img.getAttribute('data-flickity-lazyload-srcset'); // set src & serset

        this.img.src = src;

        if (srcset) {
          this.img.setAttribute('srcset', srcset);
        } // remove attr


        this.img.removeAttribute('data-flickity-lazyload');
        this.img.removeAttribute('data-flickity-lazyload-src');
        this.img.removeAttribute('data-flickity-lazyload-srcset');
      };

      LazyLoader.prototype.onload = function (event) {
        this.complete(event, 'flickity-lazyloaded');
      };

      LazyLoader.prototype.onerror = function (event) {
        this.complete(event, 'flickity-lazyerror');
      };

      LazyLoader.prototype.complete = function (event, className) {
        // unbind events
        this.img.removeEventListener('load', this);
        this.img.removeEventListener('error', this);
        var cell = this.flickity.getParentCell(this.img);
        var cellElem = cell && cell.element;
        this.flickity.cellSizeChange(cellElem);
        this.img.classList.add(className);
        this.flickity.dispatchEvent('lazyLoad', event, cellElem);
      }; // -----  ----- //


      Flickity.LazyLoader = LazyLoader;
      return Flickity;
    });
  });

  var js = createCommonjsModule(function (module) {
    /*!
     * Flickity v2.2.1
     * Touch, responsive, flickable carousels
     *
     * Licensed GPLv3 for open source use
     * or Flickity Commercial License for commercial use
     *
     * https://flickity.metafizzy.co
     * Copyright 2015-2019 Metafizzy
     */
    (function (window, factory) {
      // universal module definition

      /* jshint strict: false */
      if ( module.exports) {
        // CommonJS
        module.exports = factory(flickity, drag, prevNextButton, pageDots, player, addRemoveCell, lazyload);
      }
    })(window, function factory(Flickity) {
      /*jshint strict: false*/
      return Flickity;
    });
  });

  var flickityFade = createCommonjsModule(function (module) {
    /**
     * Flickity fade v1.0.0
     * Fade between Flickity slides
     */

    /* jshint browser: true, undef: true, unused: true */
    (function (window, factory) {
      // universal module definition

      /*globals define, module, require */
      if ( module.exports) {
        // CommonJS
        module.exports = factory(js, utils);
      } else {
        // browser global
        factory(window.Flickity, window.fizzyUIUtils);
      }
    })(commonjsGlobal, function factory(Flickity, utils) {
      // ---- Slide ---- //
      var Slide = Flickity.Slide;
      var slideUpdateTarget = Slide.prototype.updateTarget;

      Slide.prototype.updateTarget = function () {
        slideUpdateTarget.apply(this, arguments);

        if (!this.parent.options.fade) {
          return;
        } // position cells at selected target


        var slideTargetX = this.target - this.x;
        var firstCellX = this.cells[0].x;
        this.cells.forEach(function (cell) {
          var targetX = cell.x - firstCellX - slideTargetX;
          cell.renderPosition(targetX);
        });
      };

      Slide.prototype.setOpacity = function (alpha) {
        this.cells.forEach(function (cell) {
          cell.element.style.opacity = alpha;
        });
      }; // ---- Flickity ---- //


      var proto = Flickity.prototype;
      Flickity.createMethods.push('_createFade');

      proto._createFade = function () {
        this.fadeIndex = this.selectedIndex;
        this.prevSelectedIndex = this.selectedIndex;
        this.on('select', this.onSelectFade);
        this.on('dragEnd', this.onDragEndFade);
        this.on('settle', this.onSettleFade);
        this.on('activate', this.onActivateFade);
        this.on('deactivate', this.onDeactivateFade);
      };

      var updateSlides = proto.updateSlides;

      proto.updateSlides = function () {
        updateSlides.apply(this, arguments);

        if (!this.options.fade) {
          return;
        } // set initial opacity


        this.slides.forEach(function (slide, i) {
          var alpha = i == this.selectedIndex ? 1 : 0;
          slide.setOpacity(alpha);
        }, this);
      };
      /* ---- events ---- */


      proto.onSelectFade = function () {
        // in case of resize, keep fadeIndex within current count
        this.fadeIndex = Math.min(this.prevSelectedIndex, this.slides.length - 1);
        this.prevSelectedIndex = this.selectedIndex;
      };

      proto.onSettleFade = function () {
        delete this.didDragEnd;

        if (!this.options.fade) {
          return;
        } // set full and 0 opacity on selected & faded slides


        this.selectedSlide.setOpacity(1);
        var fadedSlide = this.slides[this.fadeIndex];

        if (fadedSlide && this.fadeIndex != this.selectedIndex) {
          this.slides[this.fadeIndex].setOpacity(0);
        }
      };

      proto.onDragEndFade = function () {
        // set flag
        this.didDragEnd = true;
      };

      proto.onActivateFade = function () {
        if (this.options.fade) {
          this.element.classList.add('is-fade');
        }
      };

      proto.onDeactivateFade = function () {
        if (!this.options.fade) {
          return;
        }

        this.element.classList.remove('is-fade'); // reset opacity

        this.slides.forEach(function (slide) {
          slide.setOpacity('');
        });
      };
      /* ---- position & fading ---- */


      var positionSlider = proto.positionSlider;

      proto.positionSlider = function () {
        if (!this.options.fade) {
          positionSlider.apply(this, arguments);
          return;
        }

        this.fadeSlides();
        this.dispatchScrollEvent();
      };

      var positionSliderAtSelected = proto.positionSliderAtSelected;

      proto.positionSliderAtSelected = function () {
        if (this.options.fade) {
          // position fade slider at origin
          this.setTranslateX(0);
        }

        positionSliderAtSelected.apply(this, arguments);
      };

      proto.fadeSlides = function () {
        if (this.slides.length < 2) {
          return;
        } // get slides to fade-in & fade-out


        var indexes = this.getFadeIndexes();
        var fadeSlideA = this.slides[indexes.a];
        var fadeSlideB = this.slides[indexes.b];
        var distance = this.wrapDifference(fadeSlideA.target, fadeSlideB.target);
        var progress = this.wrapDifference(fadeSlideA.target, -this.x);
        progress = progress / distance;
        fadeSlideA.setOpacity(1 - progress);
        fadeSlideB.setOpacity(progress); // hide previous slide

        var fadeHideIndex = indexes.a;

        if (this.isDragging) {
          fadeHideIndex = progress > 0.5 ? indexes.a : indexes.b;
        }

        var isNewHideIndex = this.fadeHideIndex != undefined && this.fadeHideIndex != fadeHideIndex && this.fadeHideIndex != indexes.a && this.fadeHideIndex != indexes.b;

        if (isNewHideIndex) {
          // new fadeHideSlide set, hide previous
          this.slides[this.fadeHideIndex].setOpacity(0);
        }

        this.fadeHideIndex = fadeHideIndex;
      };

      proto.getFadeIndexes = function () {
        if (!this.isDragging && !this.didDragEnd) {
          return {
            a: this.fadeIndex,
            b: this.selectedIndex
          };
        }

        if (this.options.wrapAround) {
          return this.getFadeDragWrapIndexes();
        } else {
          return this.getFadeDragLimitIndexes();
        }
      };

      proto.getFadeDragWrapIndexes = function () {
        var distances = this.slides.map(function (slide, i) {
          return this.getSlideDistance(-this.x, i);
        }, this);
        var absDistances = distances.map(function (distance) {
          return Math.abs(distance);
        });
        var minDistance = Math.min.apply(Math, absDistances);
        var closestIndex = absDistances.indexOf(minDistance);
        var distance = distances[closestIndex];
        var len = this.slides.length;
        var delta = distance >= 0 ? 1 : -1;
        return {
          a: closestIndex,
          b: utils.modulo(closestIndex + delta, len)
        };
      };

      proto.getFadeDragLimitIndexes = function () {
        // calculate closest previous slide
        var dragIndex = 0;

        for (var i = 0; i < this.slides.length - 1; i++) {
          var slide = this.slides[i];

          if (-this.x < slide.target) {
            break;
          }

          dragIndex = i;
        }

        return {
          a: dragIndex,
          b: dragIndex + 1
        };
      };

      proto.wrapDifference = function (a, b) {
        var diff = b - a;

        if (!this.options.wrapAround) {
          return diff;
        }

        var diffPlus = diff + this.slideableWidth;
        var diffMinus = diff - this.slideableWidth;

        if (Math.abs(diffPlus) < Math.abs(diff)) {
          diff = diffPlus;
        }

        if (Math.abs(diffMinus) < Math.abs(diff)) {
          diff = diffMinus;
        }

        return diff;
      }; // ---- wrapAround ---- //


      var _getWrapShiftCells = proto._getWrapShiftCells;

      proto._getWrapShiftCells = function () {
        if (!this.options.fade) {
          _getWrapShiftCells.apply(this, arguments);
        }
      };

      var shiftWrapCells = proto.shiftWrapCells;

      proto.shiftWrapCells = function () {
        if (!this.options.fade) {
          shiftWrapCells.apply(this, arguments);
        }
      };

      return Flickity;
    });
  });

  var photoswipe = createCommonjsModule(function (module, exports) {
    /*! PhotoSwipe - v4.1.3 - 2019-01-08
    * http://photoswipe.com
    * Copyright (c) 2019 Dmitry Semenov; */
    (function (root, factory) {
      {
        module.exports = factory();
      }
    })(commonjsGlobal, function () {

      var PhotoSwipe = function PhotoSwipe(template, UiClass, items, options) {
        /*>>framework-bridge*/

        /**
         *
         * Set of generic functions used by gallery.
         * 
         * You're free to modify anything here as long as functionality is kept.
         * 
         */
        var framework = {
          features: null,
          bind: function bind(target, type, listener, unbind) {
            var methodName = (unbind ? 'remove' : 'add') + 'EventListener';
            type = type.split(' ');

            for (var i = 0; i < type.length; i++) {
              if (type[i]) {
                target[methodName](type[i], listener, false);
              }
            }
          },
          isArray: function isArray(obj) {
            return obj instanceof Array;
          },
          createEl: function createEl(classes, tag) {
            var el = document.createElement(tag || 'div');

            if (classes) {
              el.className = classes;
            }

            return el;
          },
          getScrollY: function getScrollY() {
            var yOffset = window.pageYOffset;
            return yOffset !== undefined ? yOffset : document.documentElement.scrollTop;
          },
          unbind: function unbind(target, type, listener) {
            framework.bind(target, type, listener, true);
          },
          removeClass: function removeClass(el, className) {
            var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
            el.className = el.className.replace(reg, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
          },
          addClass: function addClass(el, className) {
            if (!framework.hasClass(el, className)) {
              el.className += (el.className ? ' ' : '') + className;
            }
          },
          hasClass: function hasClass(el, className) {
            return el.className && new RegExp('(^|\\s)' + className + '(\\s|$)').test(el.className);
          },
          getChildByClass: function getChildByClass(parentEl, childClassName) {
            var node = parentEl.firstChild;

            while (node) {
              if (framework.hasClass(node, childClassName)) {
                return node;
              }

              node = node.nextSibling;
            }
          },
          arraySearch: function arraySearch(array, value, key) {
            var i = array.length;

            while (i--) {
              if (array[i][key] === value) {
                return i;
              }
            }

            return -1;
          },
          extend: function extend(o1, o2, preventOverwrite) {
            for (var prop in o2) {
              if (o2.hasOwnProperty(prop)) {
                if (preventOverwrite && o1.hasOwnProperty(prop)) {
                  continue;
                }

                o1[prop] = o2[prop];
              }
            }
          },
          easing: {
            sine: {
              out: function out(k) {
                return Math.sin(k * (Math.PI / 2));
              },
              inOut: function inOut(k) {
                return -(Math.cos(Math.PI * k) - 1) / 2;
              }
            },
            cubic: {
              out: function out(k) {
                return --k * k * k + 1;
              }
            }
            /*
            	elastic: {
            		out: function ( k ) {
            				var s, a = 0.1, p = 0.4;
            			if ( k === 0 ) return 0;
            			if ( k === 1 ) return 1;
            			if ( !a || a < 1 ) { a = 1; s = p / 4; }
            			else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
            			return ( a * Math.pow( 2, - 10 * k) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) + 1 );
            			},
            	},
            	back: {
            		out: function ( k ) {
            			var s = 1.70158;
            			return --k * k * ( ( s + 1 ) * k + s ) + 1;
            		}
            	}
            */

          },

          /**
           * 
           * @return {object}
           * 
           * {
           *  raf : request animation frame function
           *  caf : cancel animation frame function
           *  transfrom : transform property key (with vendor), or null if not supported
           *  oldIE : IE8 or below
           * }
           * 
           */
          detectFeatures: function detectFeatures() {
            if (framework.features) {
              return framework.features;
            }

            var helperEl = framework.createEl(),
                helperStyle = helperEl.style,
                vendor = '',
                features = {}; // IE8 and below

            features.oldIE = document.all && !document.addEventListener;
            features.touch = 'ontouchstart' in window;

            if (window.requestAnimationFrame) {
              features.raf = window.requestAnimationFrame;
              features.caf = window.cancelAnimationFrame;
            }

            features.pointerEvent = !!window.PointerEvent || navigator.msPointerEnabled; // fix false-positive detection of old Android in new IE
            // (IE11 ua string contains "Android 4.0")

            if (!features.pointerEvent) {
              var ua = navigator.userAgent; // Detect if device is iPhone or iPod and if it's older than iOS 8
              // http://stackoverflow.com/a/14223920
              // 
              // This detection is made because of buggy top/bottom toolbars
              // that don't trigger window.resize event.
              // For more info refer to _isFixedPosition variable in core.js

              if (/iP(hone|od)/.test(navigator.platform)) {
                var v = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);

                if (v && v.length > 0) {
                  v = parseInt(v[1], 10);

                  if (v >= 1 && v < 8) {
                    features.isOldIOSPhone = true;
                  }
                }
              } // Detect old Android (before KitKat)
              // due to bugs related to position:fixed
              // http://stackoverflow.com/questions/7184573/pick-up-the-android-version-in-the-browser-by-javascript


              var match = ua.match(/Android\s([0-9\.]*)/);
              var androidversion = match ? match[1] : 0;
              androidversion = parseFloat(androidversion);

              if (androidversion >= 1) {
                if (androidversion < 4.4) {
                  features.isOldAndroid = true; // for fixed position bug & performance
                }

                features.androidVersion = androidversion; // for touchend bug
              }

              features.isMobileOpera = /opera mini|opera mobi/i.test(ua); // p.s. yes, yes, UA sniffing is bad, propose your solution for above bugs.
            }

            var styleChecks = ['transform', 'perspective', 'animationName'],
                vendors = ['', 'webkit', 'Moz', 'ms', 'O'],
                styleCheckItem,
                styleName;

            for (var i = 0; i < 4; i++) {
              vendor = vendors[i];

              for (var a = 0; a < 3; a++) {
                styleCheckItem = styleChecks[a]; // uppercase first letter of property name, if vendor is present

                styleName = vendor + (vendor ? styleCheckItem.charAt(0).toUpperCase() + styleCheckItem.slice(1) : styleCheckItem);

                if (!features[styleCheckItem] && styleName in helperStyle) {
                  features[styleCheckItem] = styleName;
                }
              }

              if (vendor && !features.raf) {
                vendor = vendor.toLowerCase();
                features.raf = window[vendor + 'RequestAnimationFrame'];

                if (features.raf) {
                  features.caf = window[vendor + 'CancelAnimationFrame'] || window[vendor + 'CancelRequestAnimationFrame'];
                }
              }
            }

            if (!features.raf) {
              var lastTime = 0;

              features.raf = function (fn) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                var id = window.setTimeout(function () {
                  fn(currTime + timeToCall);
                }, timeToCall);
                lastTime = currTime + timeToCall;
                return id;
              };

              features.caf = function (id) {
                clearTimeout(id);
              };
            } // Detect SVG support


            features.svg = !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect;
            framework.features = features;
            return features;
          }
        };
        framework.detectFeatures(); // Override addEventListener for old versions of IE

        if (framework.features.oldIE) {
          framework.bind = function (target, type, listener, unbind) {
            type = type.split(' ');

            var methodName = (unbind ? 'detach' : 'attach') + 'Event',
                evName,
                _handleEv = function _handleEv() {
              listener.handleEvent.call(listener);
            };

            for (var i = 0; i < type.length; i++) {
              evName = type[i];

              if (evName) {
                if (_typeof(listener) === 'object' && listener.handleEvent) {
                  if (!unbind) {
                    listener['oldIE' + evName] = _handleEv;
                  } else {
                    if (!listener['oldIE' + evName]) {
                      return false;
                    }
                  }

                  target[methodName]('on' + evName, listener['oldIE' + evName]);
                } else {
                  target[methodName]('on' + evName, listener);
                }
              }
            }
          };
        }
        /*>>framework-bridge*/

        /*>>core*/
        //function(template, UiClass, items, options)


        var self = this;
        /**
         * Static vars, don't change unless you know what you're doing.
         */

        var DOUBLE_TAP_RADIUS = 25,
            NUM_HOLDERS = 3;
        /**
         * Options
         */

        var _options = {
          allowPanToNext: true,
          spacing: 0.12,
          bgOpacity: 1,
          mouseUsed: false,
          loop: true,
          pinchToClose: true,
          closeOnScroll: true,
          closeOnVerticalDrag: true,
          verticalDragRange: 0.75,
          hideAnimationDuration: 333,
          showAnimationDuration: 333,
          showHideOpacity: false,
          focus: true,
          escKey: true,
          arrowKeys: true,
          mainScrollEndFriction: 0.35,
          panEndFriction: 0.35,
          isClickableElement: function isClickableElement(el) {
            return el.tagName === 'A';
          },
          getDoubleTapZoom: function getDoubleTapZoom(isMouseClick, item) {
            if (isMouseClick) {
              return 1;
            } else {
              return item.initialZoomLevel < 0.7 ? 1 : 1.33;
            }
          },
          maxSpreadZoom: 1.33,
          modal: true,
          // not fully implemented yet
          scaleMode: 'fit' // TODO

        };
        framework.extend(_options, options);
        /**
         * Private helper variables & functions
         */

        var _getEmptyPoint = function _getEmptyPoint() {
          return {
            x: 0,
            y: 0
          };
        };

        var _isOpen,
            _isDestroying,
            _closedByScroll,
            _currentItemIndex,
            _containerStyle,
            _containerShiftIndex,
            _currPanDist = _getEmptyPoint(),
            _startPanOffset = _getEmptyPoint(),
            _panOffset = _getEmptyPoint(),
            _upMoveEvents,
            // drag move, drag end & drag cancel events array
        _downEvents,
            // drag start events array
        _globalEventHandlers,
            _viewportSize = {},
            _currZoomLevel,
            _startZoomLevel,
            _translatePrefix,
            _translateSufix,
            _updateSizeInterval,
            _itemsNeedUpdate,
            _currPositionIndex = 0,
            _offset = {},
            _slideSize = _getEmptyPoint(),
            // size of slide area, including spacing
        _itemHolders,
            _prevItemIndex,
            _indexDiff = 0,
            // difference of indexes since last content update
        _dragStartEvent,
            _dragMoveEvent,
            _dragEndEvent,
            _dragCancelEvent,
            _transformKey,
            _pointerEventEnabled,
            _isFixedPosition = true,
            _likelyTouchDevice,
            _modules = [],
            _requestAF,
            _cancelAF,
            _initalClassName,
            _initalWindowScrollY,
            _oldIE,
            _currentWindowScrollY,
            _features,
            _windowVisibleSize = {},
            _renderMaxResolution = false,
            _orientationChangeTimeout,
            // Registers PhotoSWipe module (History, Controller ...)
        _registerModule = function _registerModule(name, module) {
          framework.extend(self, module.publicMethods);

          _modules.push(name);
        },
            _getLoopedId = function _getLoopedId(index) {
          var numSlides = _getNumItems();

          if (index > numSlides - 1) {
            return index - numSlides;
          } else if (index < 0) {
            return numSlides + index;
          }

          return index;
        },
            // Micro bind/trigger
        _listeners = {},
            _listen = function _listen(name, fn) {
          if (!_listeners[name]) {
            _listeners[name] = [];
          }

          return _listeners[name].push(fn);
        },
            _shout = function _shout(name) {
          var listeners = _listeners[name];

          if (listeners) {
            var args = Array.prototype.slice.call(arguments);
            args.shift();

            for (var i = 0; i < listeners.length; i++) {
              listeners[i].apply(self, args);
            }
          }
        },
            _getCurrentTime = function _getCurrentTime() {
          return new Date().getTime();
        },
            _applyBgOpacity = function _applyBgOpacity(opacity) {
          _bgOpacity = opacity;
          self.bg.style.opacity = opacity * _options.bgOpacity;
        },
            _applyZoomTransform = function _applyZoomTransform(styleObj, x, y, zoom, item) {
          if (!_renderMaxResolution || item && item !== self.currItem) {
            zoom = zoom / (item ? item.fitRatio : self.currItem.fitRatio);
          }

          styleObj[_transformKey] = _translatePrefix + x + 'px, ' + y + 'px' + _translateSufix + ' scale(' + zoom + ')';
        },
            _applyCurrentZoomPan = function _applyCurrentZoomPan(allowRenderResolution) {
          if (_currZoomElementStyle) {
            if (allowRenderResolution) {
              if (_currZoomLevel > self.currItem.fitRatio) {
                if (!_renderMaxResolution) {
                  _setImageSize(self.currItem, false, true);

                  _renderMaxResolution = true;
                }
              } else {
                if (_renderMaxResolution) {
                  _setImageSize(self.currItem);

                  _renderMaxResolution = false;
                }
              }
            }

            _applyZoomTransform(_currZoomElementStyle, _panOffset.x, _panOffset.y, _currZoomLevel);
          }
        },
            _applyZoomPanToItem = function _applyZoomPanToItem(item) {
          if (item.container) {
            _applyZoomTransform(item.container.style, item.initialPosition.x, item.initialPosition.y, item.initialZoomLevel, item);
          }
        },
            _setTranslateX = function _setTranslateX(x, elStyle) {
          elStyle[_transformKey] = _translatePrefix + x + 'px, 0px' + _translateSufix;
        },
            _moveMainScroll = function _moveMainScroll(x, dragging) {
          if (!_options.loop && dragging) {
            var newSlideIndexOffset = _currentItemIndex + (_slideSize.x * _currPositionIndex - x) / _slideSize.x,
                delta = Math.round(x - _mainScrollPos.x);

            if (newSlideIndexOffset < 0 && delta > 0 || newSlideIndexOffset >= _getNumItems() - 1 && delta < 0) {
              x = _mainScrollPos.x + delta * _options.mainScrollEndFriction;
            }
          }

          _mainScrollPos.x = x;

          _setTranslateX(x, _containerStyle);
        },
            _calculatePanOffset = function _calculatePanOffset(axis, zoomLevel) {
          var m = _midZoomPoint[axis] - _offset[axis];
          return _startPanOffset[axis] + _currPanDist[axis] + m - m * (zoomLevel / _startZoomLevel);
        },
            _equalizePoints = function _equalizePoints(p1, p2) {
          p1.x = p2.x;
          p1.y = p2.y;

          if (p2.id) {
            p1.id = p2.id;
          }
        },
            _roundPoint = function _roundPoint(p) {
          p.x = Math.round(p.x);
          p.y = Math.round(p.y);
        },
            _mouseMoveTimeout = null,
            _onFirstMouseMove = function _onFirstMouseMove() {
          // Wait until mouse move event is fired at least twice during 100ms
          // We do this, because some mobile browsers trigger it on touchstart
          if (_mouseMoveTimeout) {
            framework.unbind(document, 'mousemove', _onFirstMouseMove);
            framework.addClass(template, 'pswp--has_mouse');
            _options.mouseUsed = true;

            _shout('mouseUsed');
          }

          _mouseMoveTimeout = setTimeout(function () {
            _mouseMoveTimeout = null;
          }, 100);
        },
            _bindEvents = function _bindEvents() {
          framework.bind(document, 'keydown', self);

          if (_features.transform) {
            // don't bind click event in browsers that don't support transform (mostly IE8)
            framework.bind(self.scrollWrap, 'click', self);
          }

          if (!_options.mouseUsed) {
            framework.bind(document, 'mousemove', _onFirstMouseMove);
          }

          framework.bind(window, 'resize scroll orientationchange', self);

          _shout('bindEvents');
        },
            _unbindEvents = function _unbindEvents() {
          framework.unbind(window, 'resize scroll orientationchange', self);
          framework.unbind(window, 'scroll', _globalEventHandlers.scroll);
          framework.unbind(document, 'keydown', self);
          framework.unbind(document, 'mousemove', _onFirstMouseMove);

          if (_features.transform) {
            framework.unbind(self.scrollWrap, 'click', self);
          }

          if (_isDragging) {
            framework.unbind(window, _upMoveEvents, self);
          }

          clearTimeout(_orientationChangeTimeout);

          _shout('unbindEvents');
        },
            _calculatePanBounds = function _calculatePanBounds(zoomLevel, update) {
          var bounds = _calculateItemSize(self.currItem, _viewportSize, zoomLevel);

          if (update) {
            _currPanBounds = bounds;
          }

          return bounds;
        },
            _getMinZoomLevel = function _getMinZoomLevel(item) {
          if (!item) {
            item = self.currItem;
          }

          return item.initialZoomLevel;
        },
            _getMaxZoomLevel = function _getMaxZoomLevel(item) {
          if (!item) {
            item = self.currItem;
          }

          return item.w > 0 ? _options.maxSpreadZoom : 1;
        },
            // Return true if offset is out of the bounds
        _modifyDestPanOffset = function _modifyDestPanOffset(axis, destPanBounds, destPanOffset, destZoomLevel) {
          if (destZoomLevel === self.currItem.initialZoomLevel) {
            destPanOffset[axis] = self.currItem.initialPosition[axis];
            return true;
          } else {
            destPanOffset[axis] = _calculatePanOffset(axis, destZoomLevel);

            if (destPanOffset[axis] > destPanBounds.min[axis]) {
              destPanOffset[axis] = destPanBounds.min[axis];
              return true;
            } else if (destPanOffset[axis] < destPanBounds.max[axis]) {
              destPanOffset[axis] = destPanBounds.max[axis];
              return true;
            }
          }

          return false;
        },
            _setupTransforms = function _setupTransforms() {
          if (_transformKey) {
            // setup 3d transforms
            var allow3dTransform = _features.perspective && !_likelyTouchDevice;
            _translatePrefix = 'translate' + (allow3dTransform ? '3d(' : '(');
            _translateSufix = _features.perspective ? ', 0px)' : ')';
            return;
          } // Override zoom/pan/move functions in case old browser is used (most likely IE)
          // (so they use left/top/width/height, instead of CSS transform)


          _transformKey = 'left';
          framework.addClass(template, 'pswp--ie');

          _setTranslateX = function _setTranslateX(x, elStyle) {
            elStyle.left = x + 'px';
          };

          _applyZoomPanToItem = function _applyZoomPanToItem(item) {
            var zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio,
                s = item.container.style,
                w = zoomRatio * item.w,
                h = zoomRatio * item.h;
            s.width = w + 'px';
            s.height = h + 'px';
            s.left = item.initialPosition.x + 'px';
            s.top = item.initialPosition.y + 'px';
          };

          _applyCurrentZoomPan = function _applyCurrentZoomPan() {
            if (_currZoomElementStyle) {
              var s = _currZoomElementStyle,
                  item = self.currItem,
                  zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio,
                  w = zoomRatio * item.w,
                  h = zoomRatio * item.h;
              s.width = w + 'px';
              s.height = h + 'px';
              s.left = _panOffset.x + 'px';
              s.top = _panOffset.y + 'px';
            }
          };
        },
            _onKeyDown = function _onKeyDown(e) {
          var keydownAction = '';

          if (_options.escKey && e.keyCode === 27) {
            keydownAction = 'close';
          } else if (_options.arrowKeys) {
            if (e.keyCode === 37) {
              keydownAction = 'prev';
            } else if (e.keyCode === 39) {
              keydownAction = 'next';
            }
          }

          if (keydownAction) {
            // don't do anything if special key pressed to prevent from overriding default browser actions
            // e.g. in Chrome on Mac cmd+arrow-left returns to previous page
            if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey) {
              if (e.preventDefault) {
                e.preventDefault();
              } else {
                e.returnValue = false;
              }

              self[keydownAction]();
            }
          }
        },
            _onGlobalClick = function _onGlobalClick(e) {
          if (!e) {
            return;
          } // don't allow click event to pass through when triggering after drag or some other gesture


          if (_moved || _zoomStarted || _mainScrollAnimating || _verticalDragInitiated) {
            e.preventDefault();
            e.stopPropagation();
          }
        },
            _updatePageScrollOffset = function _updatePageScrollOffset() {
          self.setScrollOffset(0, framework.getScrollY());
        }; // Micro animation engine


        var _animations = {},
            _numAnimations = 0,
            _stopAnimation = function _stopAnimation(name) {
          if (_animations[name]) {
            if (_animations[name].raf) {
              _cancelAF(_animations[name].raf);
            }

            _numAnimations--;
            delete _animations[name];
          }
        },
            _registerStartAnimation = function _registerStartAnimation(name) {
          if (_animations[name]) {
            _stopAnimation(name);
          }

          if (!_animations[name]) {
            _numAnimations++;
            _animations[name] = {};
          }
        },
            _stopAllAnimations = function _stopAllAnimations() {
          for (var prop in _animations) {
            if (_animations.hasOwnProperty(prop)) {
              _stopAnimation(prop);
            }
          }
        },
            _animateProp = function _animateProp(name, b, endProp, d, easingFn, onUpdate, onComplete) {
          var startAnimTime = _getCurrentTime(),
              t;

          _registerStartAnimation(name);

          var animloop = function animloop() {
            if (_animations[name]) {
              t = _getCurrentTime() - startAnimTime; // time diff
              //b - beginning (start prop)
              //d - anim duration

              if (t >= d) {
                _stopAnimation(name);

                onUpdate(endProp);

                if (onComplete) {
                  onComplete();
                }

                return;
              }

              onUpdate((endProp - b) * easingFn(t / d) + b);
              _animations[name].raf = _requestAF(animloop);
            }
          };

          animloop();
        };

        var publicMethods = {
          // make a few local variables and functions public
          shout: _shout,
          listen: _listen,
          viewportSize: _viewportSize,
          options: _options,
          isMainScrollAnimating: function isMainScrollAnimating() {
            return _mainScrollAnimating;
          },
          getZoomLevel: function getZoomLevel() {
            return _currZoomLevel;
          },
          getCurrentIndex: function getCurrentIndex() {
            return _currentItemIndex;
          },
          isDragging: function isDragging() {
            return _isDragging;
          },
          isZooming: function isZooming() {
            return _isZooming;
          },
          setScrollOffset: function setScrollOffset(x, y) {
            _offset.x = x;
            _currentWindowScrollY = _offset.y = y;

            _shout('updateScrollOffset', _offset);
          },
          applyZoomPan: function applyZoomPan(zoomLevel, panX, panY, allowRenderResolution) {
            _panOffset.x = panX;
            _panOffset.y = panY;
            _currZoomLevel = zoomLevel;

            _applyCurrentZoomPan(allowRenderResolution);
          },
          init: function init() {
            if (_isOpen || _isDestroying) {
              return;
            }

            var i;
            self.framework = framework; // basic functionality

            self.template = template; // root DOM element of PhotoSwipe

            self.bg = framework.getChildByClass(template, 'pswp__bg');
            _initalClassName = template.className;
            _isOpen = true;
            _features = framework.detectFeatures();
            _requestAF = _features.raf;
            _cancelAF = _features.caf;
            _transformKey = _features.transform;
            _oldIE = _features.oldIE;
            self.scrollWrap = framework.getChildByClass(template, 'pswp__scroll-wrap');
            self.container = framework.getChildByClass(self.scrollWrap, 'pswp__container');
            _containerStyle = self.container.style; // for fast access
            // Objects that hold slides (there are only 3 in DOM)

            self.itemHolders = _itemHolders = [{
              el: self.container.children[0],
              wrap: 0,
              index: -1
            }, {
              el: self.container.children[1],
              wrap: 0,
              index: -1
            }, {
              el: self.container.children[2],
              wrap: 0,
              index: -1
            }]; // hide nearby item holders until initial zoom animation finishes (to avoid extra Paints)

            _itemHolders[0].el.style.display = _itemHolders[2].el.style.display = 'none';

            _setupTransforms(); // Setup global events


            _globalEventHandlers = {
              resize: self.updateSize,
              // Fixes: iOS 10.3 resize event
              // does not update scrollWrap.clientWidth instantly after resize
              // https://github.com/dimsemenov/PhotoSwipe/issues/1315
              orientationchange: function orientationchange() {
                clearTimeout(_orientationChangeTimeout);
                _orientationChangeTimeout = setTimeout(function () {
                  if (_viewportSize.x !== self.scrollWrap.clientWidth) {
                    self.updateSize();
                  }
                }, 500);
              },
              scroll: _updatePageScrollOffset,
              keydown: _onKeyDown,
              click: _onGlobalClick
            }; // disable show/hide effects on old browsers that don't support CSS animations or transforms, 
            // old IOS, Android and Opera mobile. Blackberry seems to work fine, even older models.

            var oldPhone = _features.isOldIOSPhone || _features.isOldAndroid || _features.isMobileOpera;

            if (!_features.animationName || !_features.transform || oldPhone) {
              _options.showAnimationDuration = _options.hideAnimationDuration = 0;
            } // init modules


            for (i = 0; i < _modules.length; i++) {
              self['init' + _modules[i]]();
            } // init


            if (UiClass) {
              var ui = self.ui = new UiClass(self, framework);
              ui.init();
            }

            _shout('firstUpdate');

            _currentItemIndex = _currentItemIndex || _options.index || 0; // validate index

            if (isNaN(_currentItemIndex) || _currentItemIndex < 0 || _currentItemIndex >= _getNumItems()) {
              _currentItemIndex = 0;
            }

            self.currItem = _getItemAt(_currentItemIndex);

            if (_features.isOldIOSPhone || _features.isOldAndroid) {
              _isFixedPosition = false;
            }

            template.setAttribute('aria-hidden', 'false');

            if (_options.modal) {
              if (!_isFixedPosition) {
                template.style.position = 'absolute';
                template.style.top = framework.getScrollY() + 'px';
              } else {
                template.style.position = 'fixed';
              }
            }

            if (_currentWindowScrollY === undefined) {
              _shout('initialLayout');

              _currentWindowScrollY = _initalWindowScrollY = framework.getScrollY();
            } // add classes to root element of PhotoSwipe


            var rootClasses = 'pswp--open ';

            if (_options.mainClass) {
              rootClasses += _options.mainClass + ' ';
            }

            if (_options.showHideOpacity) {
              rootClasses += 'pswp--animate_opacity ';
            }

            rootClasses += _likelyTouchDevice ? 'pswp--touch' : 'pswp--notouch';
            rootClasses += _features.animationName ? ' pswp--css_animation' : '';
            rootClasses += _features.svg ? ' pswp--svg' : '';
            framework.addClass(template, rootClasses);
            self.updateSize(); // initial update

            _containerShiftIndex = -1;
            _indexDiff = null;

            for (i = 0; i < NUM_HOLDERS; i++) {
              _setTranslateX((i + _containerShiftIndex) * _slideSize.x, _itemHolders[i].el.style);
            }

            if (!_oldIE) {
              framework.bind(self.scrollWrap, _downEvents, self); // no dragging for old IE
            }

            _listen('initialZoomInEnd', function () {
              self.setContent(_itemHolders[0], _currentItemIndex - 1);
              self.setContent(_itemHolders[2], _currentItemIndex + 1);
              _itemHolders[0].el.style.display = _itemHolders[2].el.style.display = 'block';

              if (_options.focus) {
                // focus causes layout, 
                // which causes lag during the animation, 
                // that's why we delay it untill the initial zoom transition ends
                template.focus();
              }

              _bindEvents();
            }); // set content for center slide (first time)


            self.setContent(_itemHolders[1], _currentItemIndex);
            self.updateCurrItem();

            _shout('afterInit');

            if (!_isFixedPosition) {
              // On all versions of iOS lower than 8.0, we check size of viewport every second.
              // 
              // This is done to detect when Safari top & bottom bars appear, 
              // as this action doesn't trigger any events (like resize). 
              // 
              // On iOS8 they fixed this.
              // 
              // 10 Nov 2014: iOS 7 usage ~40%. iOS 8 usage 56%.
              _updateSizeInterval = setInterval(function () {
                if (!_numAnimations && !_isDragging && !_isZooming && _currZoomLevel === self.currItem.initialZoomLevel) {
                  self.updateSize();
                }
              }, 1000);
            }

            framework.addClass(template, 'pswp--visible');
          },
          // Close the gallery, then destroy it
          close: function close() {
            if (!_isOpen) {
              return;
            }

            _isOpen = false;
            _isDestroying = true;

            _shout('close');

            _unbindEvents();

            _showOrHide(self.currItem, null, true, self.destroy);
          },
          // destroys the gallery (unbinds events, cleans up intervals and timeouts to avoid memory leaks)
          destroy: function destroy() {
            _shout('destroy');

            if (_showOrHideTimeout) {
              clearTimeout(_showOrHideTimeout);
            }

            template.setAttribute('aria-hidden', 'true');
            template.className = _initalClassName;

            if (_updateSizeInterval) {
              clearInterval(_updateSizeInterval);
            }

            framework.unbind(self.scrollWrap, _downEvents, self); // we unbind scroll event at the end, as closing animation may depend on it

            framework.unbind(window, 'scroll', self);

            _stopDragUpdateLoop();

            _stopAllAnimations();

            _listeners = null;
          },

          /**
           * Pan image to position
           * @param {Number} x     
           * @param {Number} y     
           * @param {Boolean} force Will ignore bounds if set to true.
           */
          panTo: function panTo(x, y, force) {
            if (!force) {
              if (x > _currPanBounds.min.x) {
                x = _currPanBounds.min.x;
              } else if (x < _currPanBounds.max.x) {
                x = _currPanBounds.max.x;
              }

              if (y > _currPanBounds.min.y) {
                y = _currPanBounds.min.y;
              } else if (y < _currPanBounds.max.y) {
                y = _currPanBounds.max.y;
              }
            }

            _panOffset.x = x;
            _panOffset.y = y;

            _applyCurrentZoomPan();
          },
          handleEvent: function handleEvent(e) {
            e = e || window.event;

            if (_globalEventHandlers[e.type]) {
              _globalEventHandlers[e.type](e);
            }
          },
          goTo: function goTo(index) {
            index = _getLoopedId(index);
            var diff = index - _currentItemIndex;
            _indexDiff = diff;
            _currentItemIndex = index;
            self.currItem = _getItemAt(_currentItemIndex);
            _currPositionIndex -= diff;

            _moveMainScroll(_slideSize.x * _currPositionIndex);

            _stopAllAnimations();

            _mainScrollAnimating = false;
            self.updateCurrItem();
          },
          next: function next() {
            self.goTo(_currentItemIndex + 1);
          },
          prev: function prev() {
            self.goTo(_currentItemIndex - 1);
          },
          // update current zoom/pan objects
          updateCurrZoomItem: function updateCurrZoomItem(emulateSetContent) {
            if (emulateSetContent) {
              _shout('beforeChange', 0);
            } // itemHolder[1] is middle (current) item


            if (_itemHolders[1].el.children.length) {
              var zoomElement = _itemHolders[1].el.children[0];

              if (framework.hasClass(zoomElement, 'pswp__zoom-wrap')) {
                _currZoomElementStyle = zoomElement.style;
              } else {
                _currZoomElementStyle = null;
              }
            } else {
              _currZoomElementStyle = null;
            }

            _currPanBounds = self.currItem.bounds;
            _startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;
            _panOffset.x = _currPanBounds.center.x;
            _panOffset.y = _currPanBounds.center.y;

            if (emulateSetContent) {
              _shout('afterChange');
            }
          },
          invalidateCurrItems: function invalidateCurrItems() {
            _itemsNeedUpdate = true;

            for (var i = 0; i < NUM_HOLDERS; i++) {
              if (_itemHolders[i].item) {
                _itemHolders[i].item.needsUpdate = true;
              }
            }
          },
          updateCurrItem: function updateCurrItem(beforeAnimation) {
            if (_indexDiff === 0) {
              return;
            }

            var diffAbs = Math.abs(_indexDiff),
                tempHolder;

            if (beforeAnimation && diffAbs < 2) {
              return;
            }

            self.currItem = _getItemAt(_currentItemIndex);
            _renderMaxResolution = false;

            _shout('beforeChange', _indexDiff);

            if (diffAbs >= NUM_HOLDERS) {
              _containerShiftIndex += _indexDiff + (_indexDiff > 0 ? -NUM_HOLDERS : NUM_HOLDERS);
              diffAbs = NUM_HOLDERS;
            }

            for (var i = 0; i < diffAbs; i++) {
              if (_indexDiff > 0) {
                tempHolder = _itemHolders.shift();
                _itemHolders[NUM_HOLDERS - 1] = tempHolder; // move first to last

                _containerShiftIndex++;

                _setTranslateX((_containerShiftIndex + 2) * _slideSize.x, tempHolder.el.style);

                self.setContent(tempHolder, _currentItemIndex - diffAbs + i + 1 + 1);
              } else {
                tempHolder = _itemHolders.pop();

                _itemHolders.unshift(tempHolder); // move last to first


                _containerShiftIndex--;

                _setTranslateX(_containerShiftIndex * _slideSize.x, tempHolder.el.style);

                self.setContent(tempHolder, _currentItemIndex + diffAbs - i - 1 - 1);
              }
            } // reset zoom/pan on previous item


            if (_currZoomElementStyle && Math.abs(_indexDiff) === 1) {
              var prevItem = _getItemAt(_prevItemIndex);

              if (prevItem.initialZoomLevel !== _currZoomLevel) {
                _calculateItemSize(prevItem, _viewportSize);

                _setImageSize(prevItem);

                _applyZoomPanToItem(prevItem);
              }
            } // reset diff after update


            _indexDiff = 0;
            self.updateCurrZoomItem();
            _prevItemIndex = _currentItemIndex;

            _shout('afterChange');
          },
          updateSize: function updateSize(force) {
            if (!_isFixedPosition && _options.modal) {
              var windowScrollY = framework.getScrollY();

              if (_currentWindowScrollY !== windowScrollY) {
                template.style.top = windowScrollY + 'px';
                _currentWindowScrollY = windowScrollY;
              }

              if (!force && _windowVisibleSize.x === window.innerWidth && _windowVisibleSize.y === window.innerHeight) {
                return;
              }

              _windowVisibleSize.x = window.innerWidth;
              _windowVisibleSize.y = window.innerHeight; //template.style.width = _windowVisibleSize.x + 'px';

              template.style.height = _windowVisibleSize.y + 'px';
            }

            _viewportSize.x = self.scrollWrap.clientWidth;
            _viewportSize.y = self.scrollWrap.clientHeight;

            _updatePageScrollOffset();

            _slideSize.x = _viewportSize.x + Math.round(_viewportSize.x * _options.spacing);
            _slideSize.y = _viewportSize.y;

            _moveMainScroll(_slideSize.x * _currPositionIndex);

            _shout('beforeResize'); // even may be used for example to switch image sources
            // don't re-calculate size on inital size update


            if (_containerShiftIndex !== undefined) {
              var holder, item, hIndex;

              for (var i = 0; i < NUM_HOLDERS; i++) {
                holder = _itemHolders[i];

                _setTranslateX((i + _containerShiftIndex) * _slideSize.x, holder.el.style);

                hIndex = _currentItemIndex + i - 1;

                if (_options.loop && _getNumItems() > 2) {
                  hIndex = _getLoopedId(hIndex);
                } // update zoom level on items and refresh source (if needsUpdate)


                item = _getItemAt(hIndex); // re-render gallery item if `needsUpdate`,
                // or doesn't have `bounds` (entirely new slide object)

                if (item && (_itemsNeedUpdate || item.needsUpdate || !item.bounds)) {
                  self.cleanSlide(item);
                  self.setContent(holder, hIndex); // if "center" slide

                  if (i === 1) {
                    self.currItem = item;
                    self.updateCurrZoomItem(true);
                  }

                  item.needsUpdate = false;
                } else if (holder.index === -1 && hIndex >= 0) {
                  // add content first time
                  self.setContent(holder, hIndex);
                }

                if (item && item.container) {
                  _calculateItemSize(item, _viewportSize);

                  _setImageSize(item);

                  _applyZoomPanToItem(item);
                }
              }

              _itemsNeedUpdate = false;
            }

            _startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;
            _currPanBounds = self.currItem.bounds;

            if (_currPanBounds) {
              _panOffset.x = _currPanBounds.center.x;
              _panOffset.y = _currPanBounds.center.y;

              _applyCurrentZoomPan(true);
            }

            _shout('resize');
          },
          // Zoom current item to
          zoomTo: function zoomTo(destZoomLevel, centerPoint, speed, easingFn, updateFn) {
            /*
            	if(destZoomLevel === 'fit') {
            		destZoomLevel = self.currItem.fitRatio;
            	} else if(destZoomLevel === 'fill') {
            		destZoomLevel = self.currItem.fillRatio;
            	}
            */
            if (centerPoint) {
              _startZoomLevel = _currZoomLevel;
              _midZoomPoint.x = Math.abs(centerPoint.x) - _panOffset.x;
              _midZoomPoint.y = Math.abs(centerPoint.y) - _panOffset.y;

              _equalizePoints(_startPanOffset, _panOffset);
            }

            var destPanBounds = _calculatePanBounds(destZoomLevel, false),
                destPanOffset = {};

            _modifyDestPanOffset('x', destPanBounds, destPanOffset, destZoomLevel);

            _modifyDestPanOffset('y', destPanBounds, destPanOffset, destZoomLevel);

            var initialZoomLevel = _currZoomLevel;
            var initialPanOffset = {
              x: _panOffset.x,
              y: _panOffset.y
            };

            _roundPoint(destPanOffset);

            var onUpdate = function onUpdate(now) {
              if (now === 1) {
                _currZoomLevel = destZoomLevel;
                _panOffset.x = destPanOffset.x;
                _panOffset.y = destPanOffset.y;
              } else {
                _currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
                _panOffset.x = (destPanOffset.x - initialPanOffset.x) * now + initialPanOffset.x;
                _panOffset.y = (destPanOffset.y - initialPanOffset.y) * now + initialPanOffset.y;
              }

              if (updateFn) {
                updateFn(now);
              }

              _applyCurrentZoomPan(now === 1);
            };

            if (speed) {
              _animateProp('customZoomTo', 0, 1, speed, easingFn || framework.easing.sine.inOut, onUpdate);
            } else {
              onUpdate(1);
            }
          }
        };
        /*>>core*/

        /*>>gestures*/

        /**
         * Mouse/touch/pointer event handlers.
         * 
         * separated from @core.js for readability
         */

        var MIN_SWIPE_DISTANCE = 30,
            DIRECTION_CHECK_OFFSET = 10; // amount of pixels to drag to determine direction of swipe

        var _gestureStartTime,
            _gestureCheckSpeedTime,
            // pool of objects that are used during dragging of zooming
        p = {},
            // first point
        p2 = {},
            // second point (for zoom gesture)
        delta = {},
            _currPoint = {},
            _startPoint = {},
            _currPointers = [],
            _startMainScrollPos = {},
            _releaseAnimData,
            _posPoints = [],
            // array of points during dragging, used to determine type of gesture
        _tempPoint = {},
            _isZoomingIn,
            _verticalDragInitiated,
            _oldAndroidTouchEndTimeout,
            _currZoomedItemIndex = 0,
            _centerPoint = _getEmptyPoint(),
            _lastReleaseTime = 0,
            _isDragging,
            // at least one pointer is down
        _isMultitouch,
            // at least two _pointers are down
        _zoomStarted,
            // zoom level changed during zoom gesture
        _moved,
            _dragAnimFrame,
            _mainScrollShifted,
            _currentPoints,
            // array of current touch points
        _isZooming,
            _currPointsDistance,
            _startPointsDistance,
            _currPanBounds,
            _mainScrollPos = _getEmptyPoint(),
            _currZoomElementStyle,
            _mainScrollAnimating,
            // true, if animation after swipe gesture is running
        _midZoomPoint = _getEmptyPoint(),
            _currCenterPoint = _getEmptyPoint(),
            _direction,
            _isFirstMove,
            _opacityChanged,
            _bgOpacity,
            _wasOverInitialZoom,
            _isEqualPoints = function _isEqualPoints(p1, p2) {
          return p1.x === p2.x && p1.y === p2.y;
        },
            _isNearbyPoints = function _isNearbyPoints(touch0, touch1) {
          return Math.abs(touch0.x - touch1.x) < DOUBLE_TAP_RADIUS && Math.abs(touch0.y - touch1.y) < DOUBLE_TAP_RADIUS;
        },
            _calculatePointsDistance = function _calculatePointsDistance(p1, p2) {
          _tempPoint.x = Math.abs(p1.x - p2.x);
          _tempPoint.y = Math.abs(p1.y - p2.y);
          return Math.sqrt(_tempPoint.x * _tempPoint.x + _tempPoint.y * _tempPoint.y);
        },
            _stopDragUpdateLoop = function _stopDragUpdateLoop() {
          if (_dragAnimFrame) {
            _cancelAF(_dragAnimFrame);

            _dragAnimFrame = null;
          }
        },
            _dragUpdateLoop = function _dragUpdateLoop() {
          if (_isDragging) {
            _dragAnimFrame = _requestAF(_dragUpdateLoop);

            _renderMovement();
          }
        },
            _canPan = function _canPan() {
          return !(_options.scaleMode === 'fit' && _currZoomLevel === self.currItem.initialZoomLevel);
        },
            // find the closest parent DOM element
        _closestElement = function _closestElement(el, fn) {
          if (!el || el === document) {
            return false;
          } // don't search elements above pswp__scroll-wrap


          if (el.getAttribute('class') && el.getAttribute('class').indexOf('pswp__scroll-wrap') > -1) {
            return false;
          }

          if (fn(el)) {
            return el;
          }

          return _closestElement(el.parentNode, fn);
        },
            _preventObj = {},
            _preventDefaultEventBehaviour = function _preventDefaultEventBehaviour(e, isDown) {
          _preventObj.prevent = !_closestElement(e.target, _options.isClickableElement);

          _shout('preventDragEvent', e, isDown, _preventObj);

          return _preventObj.prevent;
        },
            _convertTouchToPoint = function _convertTouchToPoint(touch, p) {
          p.x = touch.pageX;
          p.y = touch.pageY;
          p.id = touch.identifier;
          return p;
        },
            _findCenterOfPoints = function _findCenterOfPoints(p1, p2, pCenter) {
          pCenter.x = (p1.x + p2.x) * 0.5;
          pCenter.y = (p1.y + p2.y) * 0.5;
        },
            _pushPosPoint = function _pushPosPoint(time, x, y) {
          if (time - _gestureCheckSpeedTime > 50) {
            var o = _posPoints.length > 2 ? _posPoints.shift() : {};
            o.x = x;
            o.y = y;

            _posPoints.push(o);

            _gestureCheckSpeedTime = time;
          }
        },
            _calculateVerticalDragOpacityRatio = function _calculateVerticalDragOpacityRatio() {
          var yOffset = _panOffset.y - self.currItem.initialPosition.y; // difference between initial and current position

          return 1 - Math.abs(yOffset / (_viewportSize.y / 2));
        },
            // points pool, reused during touch events
        _ePoint1 = {},
            _ePoint2 = {},
            _tempPointsArr = [],
            _tempCounter,
            _getTouchPoints = function _getTouchPoints(e) {
          // clean up previous points, without recreating array
          while (_tempPointsArr.length > 0) {
            _tempPointsArr.pop();
          }

          if (!_pointerEventEnabled) {
            if (e.type.indexOf('touch') > -1) {
              if (e.touches && e.touches.length > 0) {
                _tempPointsArr[0] = _convertTouchToPoint(e.touches[0], _ePoint1);

                if (e.touches.length > 1) {
                  _tempPointsArr[1] = _convertTouchToPoint(e.touches[1], _ePoint2);
                }
              }
            } else {
              _ePoint1.x = e.pageX;
              _ePoint1.y = e.pageY;
              _ePoint1.id = '';
              _tempPointsArr[0] = _ePoint1; //_ePoint1;
            }
          } else {
            _tempCounter = 0; // we can use forEach, as pointer events are supported only in modern browsers

            _currPointers.forEach(function (p) {
              if (_tempCounter === 0) {
                _tempPointsArr[0] = p;
              } else if (_tempCounter === 1) {
                _tempPointsArr[1] = p;
              }

              _tempCounter++;
            });
          }

          return _tempPointsArr;
        },
            _panOrMoveMainScroll = function _panOrMoveMainScroll(axis, delta) {
          var panFriction,
              overDiff = 0,
              newOffset = _panOffset[axis] + delta[axis],
              startOverDiff,
              dir = delta[axis] > 0,
              newMainScrollPosition = _mainScrollPos.x + delta.x,
              mainScrollDiff = _mainScrollPos.x - _startMainScrollPos.x,
              newPanPos,
              newMainScrollPos; // calculate fdistance over the bounds and friction

          if (newOffset > _currPanBounds.min[axis] || newOffset < _currPanBounds.max[axis]) {
            panFriction = _options.panEndFriction; // Linear increasing of friction, so at 1/4 of viewport it's at max value. 
            // Looks not as nice as was expected. Left for history.
            // panFriction = (1 - (_panOffset[axis] + delta[axis] + panBounds.min[axis]) / (_viewportSize[axis] / 4) );
          } else {
            panFriction = 1;
          }

          newOffset = _panOffset[axis] + delta[axis] * panFriction; // move main scroll or start panning

          if (_options.allowPanToNext || _currZoomLevel === self.currItem.initialZoomLevel) {
            if (!_currZoomElementStyle) {
              newMainScrollPos = newMainScrollPosition;
            } else if (_direction === 'h' && axis === 'x' && !_zoomStarted) {
              if (dir) {
                if (newOffset > _currPanBounds.min[axis]) {
                  panFriction = _options.panEndFriction;
                  overDiff = _currPanBounds.min[axis] - newOffset;
                  startOverDiff = _currPanBounds.min[axis] - _startPanOffset[axis];
                } // drag right


                if ((startOverDiff <= 0 || mainScrollDiff < 0) && _getNumItems() > 1) {
                  newMainScrollPos = newMainScrollPosition;

                  if (mainScrollDiff < 0 && newMainScrollPosition > _startMainScrollPos.x) {
                    newMainScrollPos = _startMainScrollPos.x;
                  }
                } else {
                  if (_currPanBounds.min.x !== _currPanBounds.max.x) {
                    newPanPos = newOffset;
                  }
                }
              } else {
                if (newOffset < _currPanBounds.max[axis]) {
                  panFriction = _options.panEndFriction;
                  overDiff = newOffset - _currPanBounds.max[axis];
                  startOverDiff = _startPanOffset[axis] - _currPanBounds.max[axis];
                }

                if ((startOverDiff <= 0 || mainScrollDiff > 0) && _getNumItems() > 1) {
                  newMainScrollPos = newMainScrollPosition;

                  if (mainScrollDiff > 0 && newMainScrollPosition < _startMainScrollPos.x) {
                    newMainScrollPos = _startMainScrollPos.x;
                  }
                } else {
                  if (_currPanBounds.min.x !== _currPanBounds.max.x) {
                    newPanPos = newOffset;
                  }
                }
              } //

            }

            if (axis === 'x') {
              if (newMainScrollPos !== undefined) {
                _moveMainScroll(newMainScrollPos, true);

                if (newMainScrollPos === _startMainScrollPos.x) {
                  _mainScrollShifted = false;
                } else {
                  _mainScrollShifted = true;
                }
              }

              if (_currPanBounds.min.x !== _currPanBounds.max.x) {
                if (newPanPos !== undefined) {
                  _panOffset.x = newPanPos;
                } else if (!_mainScrollShifted) {
                  _panOffset.x += delta.x * panFriction;
                }
              }

              return newMainScrollPos !== undefined;
            }
          }

          if (!_mainScrollAnimating) {
            if (!_mainScrollShifted) {
              if (_currZoomLevel > self.currItem.fitRatio) {
                _panOffset[axis] += delta[axis] * panFriction;
              }
            }
          }
        },
            // Pointerdown/touchstart/mousedown handler
        _onDragStart = function _onDragStart(e) {
          // Allow dragging only via left mouse button.
          // As this handler is not added in IE8 - we ignore e.which
          // 
          // http://www.quirksmode.org/js/events_properties.html
          // https://developer.mozilla.org/en-US/docs/Web/API/event.button
          if (e.type === 'mousedown' && e.button > 0) {
            return;
          }

          if (_initialZoomRunning) {
            e.preventDefault();
            return;
          }

          if (_oldAndroidTouchEndTimeout && e.type === 'mousedown') {
            return;
          }

          if (_preventDefaultEventBehaviour(e, true)) {
            e.preventDefault();
          }

          _shout('pointerDown');

          if (_pointerEventEnabled) {
            var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');

            if (pointerIndex < 0) {
              pointerIndex = _currPointers.length;
            }

            _currPointers[pointerIndex] = {
              x: e.pageX,
              y: e.pageY,
              id: e.pointerId
            };
          }

          var startPointsList = _getTouchPoints(e),
              numPoints = startPointsList.length;

          _currentPoints = null;

          _stopAllAnimations(); // init drag


          if (!_isDragging || numPoints === 1) {
            _isDragging = _isFirstMove = true;
            framework.bind(window, _upMoveEvents, self);
            _isZoomingIn = _wasOverInitialZoom = _opacityChanged = _verticalDragInitiated = _mainScrollShifted = _moved = _isMultitouch = _zoomStarted = false;
            _direction = null;

            _shout('firstTouchStart', startPointsList);

            _equalizePoints(_startPanOffset, _panOffset);

            _currPanDist.x = _currPanDist.y = 0;

            _equalizePoints(_currPoint, startPointsList[0]);

            _equalizePoints(_startPoint, _currPoint); //_equalizePoints(_startMainScrollPos, _mainScrollPos);


            _startMainScrollPos.x = _slideSize.x * _currPositionIndex;
            _posPoints = [{
              x: _currPoint.x,
              y: _currPoint.y
            }];
            _gestureCheckSpeedTime = _gestureStartTime = _getCurrentTime(); //_mainScrollAnimationEnd(true);

            _calculatePanBounds(_currZoomLevel, true); // Start rendering


            _stopDragUpdateLoop();

            _dragUpdateLoop();
          } // init zoom


          if (!_isZooming && numPoints > 1 && !_mainScrollAnimating && !_mainScrollShifted) {
            _startZoomLevel = _currZoomLevel;
            _zoomStarted = false; // true if zoom changed at least once

            _isZooming = _isMultitouch = true;
            _currPanDist.y = _currPanDist.x = 0;

            _equalizePoints(_startPanOffset, _panOffset);

            _equalizePoints(p, startPointsList[0]);

            _equalizePoints(p2, startPointsList[1]);

            _findCenterOfPoints(p, p2, _currCenterPoint);

            _midZoomPoint.x = Math.abs(_currCenterPoint.x) - _panOffset.x;
            _midZoomPoint.y = Math.abs(_currCenterPoint.y) - _panOffset.y;
            _currPointsDistance = _startPointsDistance = _calculatePointsDistance(p, p2);
          }
        },
            // Pointermove/touchmove/mousemove handler
        _onDragMove = function _onDragMove(e) {
          e.preventDefault();

          if (_pointerEventEnabled) {
            var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');

            if (pointerIndex > -1) {
              var p = _currPointers[pointerIndex];
              p.x = e.pageX;
              p.y = e.pageY;
            }
          }

          if (_isDragging) {
            var touchesList = _getTouchPoints(e);

            if (!_direction && !_moved && !_isZooming) {
              if (_mainScrollPos.x !== _slideSize.x * _currPositionIndex) {
                // if main scroll position is shifted – direction is always horizontal
                _direction = 'h';
              } else {
                var diff = Math.abs(touchesList[0].x - _currPoint.x) - Math.abs(touchesList[0].y - _currPoint.y); // check the direction of movement

                if (Math.abs(diff) >= DIRECTION_CHECK_OFFSET) {
                  _direction = diff > 0 ? 'h' : 'v';
                  _currentPoints = touchesList;
                }
              }
            } else {
              _currentPoints = touchesList;
            }
          }
        },
            // 
        _renderMovement = function _renderMovement() {
          if (!_currentPoints) {
            return;
          }

          var numPoints = _currentPoints.length;

          if (numPoints === 0) {
            return;
          }

          _equalizePoints(p, _currentPoints[0]);

          delta.x = p.x - _currPoint.x;
          delta.y = p.y - _currPoint.y;

          if (_isZooming && numPoints > 1) {
            // Handle behaviour for more than 1 point
            _currPoint.x = p.x;
            _currPoint.y = p.y; // check if one of two points changed

            if (!delta.x && !delta.y && _isEqualPoints(_currentPoints[1], p2)) {
              return;
            }

            _equalizePoints(p2, _currentPoints[1]);

            if (!_zoomStarted) {
              _zoomStarted = true;

              _shout('zoomGestureStarted');
            } // Distance between two points


            var pointsDistance = _calculatePointsDistance(p, p2);

            var zoomLevel = _calculateZoomLevel(pointsDistance); // slightly over the of initial zoom level


            if (zoomLevel > self.currItem.initialZoomLevel + self.currItem.initialZoomLevel / 15) {
              _wasOverInitialZoom = true;
            } // Apply the friction if zoom level is out of the bounds


            var zoomFriction = 1,
                minZoomLevel = _getMinZoomLevel(),
                maxZoomLevel = _getMaxZoomLevel();

            if (zoomLevel < minZoomLevel) {
              if (_options.pinchToClose && !_wasOverInitialZoom && _startZoomLevel <= self.currItem.initialZoomLevel) {
                // fade out background if zooming out
                var minusDiff = minZoomLevel - zoomLevel;
                var percent = 1 - minusDiff / (minZoomLevel / 1.2);

                _applyBgOpacity(percent);

                _shout('onPinchClose', percent);

                _opacityChanged = true;
              } else {
                zoomFriction = (minZoomLevel - zoomLevel) / minZoomLevel;

                if (zoomFriction > 1) {
                  zoomFriction = 1;
                }

                zoomLevel = minZoomLevel - zoomFriction * (minZoomLevel / 3);
              }
            } else if (zoomLevel > maxZoomLevel) {
              // 1.5 - extra zoom level above the max. E.g. if max is x6, real max 6 + 1.5 = 7.5
              zoomFriction = (zoomLevel - maxZoomLevel) / (minZoomLevel * 6);

              if (zoomFriction > 1) {
                zoomFriction = 1;
              }

              zoomLevel = maxZoomLevel + zoomFriction * minZoomLevel;
            }

            if (zoomFriction < 0) {
              zoomFriction = 0;
            } // distance between touch points after friction is applied


            _currPointsDistance = pointsDistance; // _centerPoint - The point in the middle of two pointers

            _findCenterOfPoints(p, p2, _centerPoint); // paning with two pointers pressed


            _currPanDist.x += _centerPoint.x - _currCenterPoint.x;
            _currPanDist.y += _centerPoint.y - _currCenterPoint.y;

            _equalizePoints(_currCenterPoint, _centerPoint);

            _panOffset.x = _calculatePanOffset('x', zoomLevel);
            _panOffset.y = _calculatePanOffset('y', zoomLevel);
            _isZoomingIn = zoomLevel > _currZoomLevel;
            _currZoomLevel = zoomLevel;

            _applyCurrentZoomPan();
          } else {
            // handle behaviour for one point (dragging or panning)
            if (!_direction) {
              return;
            }

            if (_isFirstMove) {
              _isFirstMove = false; // subtract drag distance that was used during the detection direction  

              if (Math.abs(delta.x) >= DIRECTION_CHECK_OFFSET) {
                delta.x -= _currentPoints[0].x - _startPoint.x;
              }

              if (Math.abs(delta.y) >= DIRECTION_CHECK_OFFSET) {
                delta.y -= _currentPoints[0].y - _startPoint.y;
              }
            }

            _currPoint.x = p.x;
            _currPoint.y = p.y; // do nothing if pointers position hasn't changed

            if (delta.x === 0 && delta.y === 0) {
              return;
            }

            if (_direction === 'v' && _options.closeOnVerticalDrag) {
              if (!_canPan()) {
                _currPanDist.y += delta.y;
                _panOffset.y += delta.y;

                var opacityRatio = _calculateVerticalDragOpacityRatio();

                _verticalDragInitiated = true;

                _shout('onVerticalDrag', opacityRatio);

                _applyBgOpacity(opacityRatio);

                _applyCurrentZoomPan();

                return;
              }
            }

            _pushPosPoint(_getCurrentTime(), p.x, p.y);

            _moved = true;
            _currPanBounds = self.currItem.bounds;

            var mainScrollChanged = _panOrMoveMainScroll('x', delta);

            if (!mainScrollChanged) {
              _panOrMoveMainScroll('y', delta);

              _roundPoint(_panOffset);

              _applyCurrentZoomPan();
            }
          }
        },
            // Pointerup/pointercancel/touchend/touchcancel/mouseup event handler
        _onDragRelease = function _onDragRelease(e) {
          if (_features.isOldAndroid) {
            if (_oldAndroidTouchEndTimeout && e.type === 'mouseup') {
              return;
            } // on Android (v4.1, 4.2, 4.3 & possibly older) 
            // ghost mousedown/up event isn't preventable via e.preventDefault,
            // which causes fake mousedown event
            // so we block mousedown/up for 600ms


            if (e.type.indexOf('touch') > -1) {
              clearTimeout(_oldAndroidTouchEndTimeout);
              _oldAndroidTouchEndTimeout = setTimeout(function () {
                _oldAndroidTouchEndTimeout = 0;
              }, 600);
            }
          }

          _shout('pointerUp');

          if (_preventDefaultEventBehaviour(e, false)) {
            e.preventDefault();
          }

          var releasePoint;

          if (_pointerEventEnabled) {
            var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');

            if (pointerIndex > -1) {
              releasePoint = _currPointers.splice(pointerIndex, 1)[0];

              if (navigator.msPointerEnabled) {
                var MSPOINTER_TYPES = {
                  4: 'mouse',
                  // event.MSPOINTER_TYPE_MOUSE
                  2: 'touch',
                  // event.MSPOINTER_TYPE_TOUCH 
                  3: 'pen' // event.MSPOINTER_TYPE_PEN

                };
                releasePoint.type = MSPOINTER_TYPES[e.pointerType];

                if (!releasePoint.type) {
                  releasePoint.type = e.pointerType || 'mouse';
                }
              } else {
                releasePoint.type = e.pointerType || 'mouse';
              }
            }
          }

          var touchList = _getTouchPoints(e),
              gestureType,
              numPoints = touchList.length;

          if (e.type === 'mouseup') {
            numPoints = 0;
          } // Do nothing if there were 3 touch points or more


          if (numPoints === 2) {
            _currentPoints = null;
            return true;
          } // if second pointer released


          if (numPoints === 1) {
            _equalizePoints(_startPoint, touchList[0]);
          } // pointer hasn't moved, send "tap release" point


          if (numPoints === 0 && !_direction && !_mainScrollAnimating) {
            if (!releasePoint) {
              if (e.type === 'mouseup') {
                releasePoint = {
                  x: e.pageX,
                  y: e.pageY,
                  type: 'mouse'
                };
              } else if (e.changedTouches && e.changedTouches[0]) {
                releasePoint = {
                  x: e.changedTouches[0].pageX,
                  y: e.changedTouches[0].pageY,
                  type: 'touch'
                };
              }
            }

            _shout('touchRelease', e, releasePoint);
          } // Difference in time between releasing of two last touch points (zoom gesture)


          var releaseTimeDiff = -1; // Gesture completed, no pointers left

          if (numPoints === 0) {
            _isDragging = false;
            framework.unbind(window, _upMoveEvents, self);

            _stopDragUpdateLoop();

            if (_isZooming) {
              // Two points released at the same time
              releaseTimeDiff = 0;
            } else if (_lastReleaseTime !== -1) {
              releaseTimeDiff = _getCurrentTime() - _lastReleaseTime;
            }
          }

          _lastReleaseTime = numPoints === 1 ? _getCurrentTime() : -1;

          if (releaseTimeDiff !== -1 && releaseTimeDiff < 150) {
            gestureType = 'zoom';
          } else {
            gestureType = 'swipe';
          }

          if (_isZooming && numPoints < 2) {
            _isZooming = false; // Only second point released

            if (numPoints === 1) {
              gestureType = 'zoomPointerUp';
            }

            _shout('zoomGestureEnded');
          }

          _currentPoints = null;

          if (!_moved && !_zoomStarted && !_mainScrollAnimating && !_verticalDragInitiated) {
            // nothing to animate
            return;
          }

          _stopAllAnimations();

          if (!_releaseAnimData) {
            _releaseAnimData = _initDragReleaseAnimationData();
          }

          _releaseAnimData.calculateSwipeSpeed('x');

          if (_verticalDragInitiated) {
            var opacityRatio = _calculateVerticalDragOpacityRatio();

            if (opacityRatio < _options.verticalDragRange) {
              self.close();
            } else {
              var initalPanY = _panOffset.y,
                  initialBgOpacity = _bgOpacity;

              _animateProp('verticalDrag', 0, 1, 300, framework.easing.cubic.out, function (now) {
                _panOffset.y = (self.currItem.initialPosition.y - initalPanY) * now + initalPanY;

                _applyBgOpacity((1 - initialBgOpacity) * now + initialBgOpacity);

                _applyCurrentZoomPan();
              });

              _shout('onVerticalDrag', 1);
            }

            return;
          } // main scroll 


          if ((_mainScrollShifted || _mainScrollAnimating) && numPoints === 0) {
            var itemChanged = _finishSwipeMainScrollGesture(gestureType, _releaseAnimData);

            if (itemChanged) {
              return;
            }

            gestureType = 'zoomPointerUp';
          } // prevent zoom/pan animation when main scroll animation runs


          if (_mainScrollAnimating) {
            return;
          } // Complete simple zoom gesture (reset zoom level if it's out of the bounds)  


          if (gestureType !== 'swipe') {
            _completeZoomGesture();

            return;
          } // Complete pan gesture if main scroll is not shifted, and it's possible to pan current image


          if (!_mainScrollShifted && _currZoomLevel > self.currItem.fitRatio) {
            _completePanGesture(_releaseAnimData);
          }
        },
            // Returns object with data about gesture
        // It's created only once and then reused
        _initDragReleaseAnimationData = function _initDragReleaseAnimationData() {
          // temp local vars
          var lastFlickDuration, tempReleasePos; // s = this

          var s = {
            lastFlickOffset: {},
            lastFlickDist: {},
            lastFlickSpeed: {},
            slowDownRatio: {},
            slowDownRatioReverse: {},
            speedDecelerationRatio: {},
            speedDecelerationRatioAbs: {},
            distanceOffset: {},
            backAnimDestination: {},
            backAnimStarted: {},
            calculateSwipeSpeed: function calculateSwipeSpeed(axis) {
              if (_posPoints.length > 1) {
                lastFlickDuration = _getCurrentTime() - _gestureCheckSpeedTime + 50;
                tempReleasePos = _posPoints[_posPoints.length - 2][axis];
              } else {
                lastFlickDuration = _getCurrentTime() - _gestureStartTime; // total gesture duration

                tempReleasePos = _startPoint[axis];
              }

              s.lastFlickOffset[axis] = _currPoint[axis] - tempReleasePos;
              s.lastFlickDist[axis] = Math.abs(s.lastFlickOffset[axis]);

              if (s.lastFlickDist[axis] > 20) {
                s.lastFlickSpeed[axis] = s.lastFlickOffset[axis] / lastFlickDuration;
              } else {
                s.lastFlickSpeed[axis] = 0;
              }

              if (Math.abs(s.lastFlickSpeed[axis]) < 0.1) {
                s.lastFlickSpeed[axis] = 0;
              }

              s.slowDownRatio[axis] = 0.95;
              s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
              s.speedDecelerationRatio[axis] = 1;
            },
            calculateOverBoundsAnimOffset: function calculateOverBoundsAnimOffset(axis, speed) {
              if (!s.backAnimStarted[axis]) {
                if (_panOffset[axis] > _currPanBounds.min[axis]) {
                  s.backAnimDestination[axis] = _currPanBounds.min[axis];
                } else if (_panOffset[axis] < _currPanBounds.max[axis]) {
                  s.backAnimDestination[axis] = _currPanBounds.max[axis];
                }

                if (s.backAnimDestination[axis] !== undefined) {
                  s.slowDownRatio[axis] = 0.7;
                  s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];

                  if (s.speedDecelerationRatioAbs[axis] < 0.05) {
                    s.lastFlickSpeed[axis] = 0;
                    s.backAnimStarted[axis] = true;

                    _animateProp('bounceZoomPan' + axis, _panOffset[axis], s.backAnimDestination[axis], speed || 300, framework.easing.sine.out, function (pos) {
                      _panOffset[axis] = pos;

                      _applyCurrentZoomPan();
                    });
                  }
                }
              }
            },
            // Reduces the speed by slowDownRatio (per 10ms)
            calculateAnimOffset: function calculateAnimOffset(axis) {
              if (!s.backAnimStarted[axis]) {
                s.speedDecelerationRatio[axis] = s.speedDecelerationRatio[axis] * (s.slowDownRatio[axis] + s.slowDownRatioReverse[axis] - s.slowDownRatioReverse[axis] * s.timeDiff / 10);
                s.speedDecelerationRatioAbs[axis] = Math.abs(s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis]);
                s.distanceOffset[axis] = s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis] * s.timeDiff;
                _panOffset[axis] += s.distanceOffset[axis];
              }
            },
            panAnimLoop: function panAnimLoop() {
              if (_animations.zoomPan) {
                _animations.zoomPan.raf = _requestAF(s.panAnimLoop);
                s.now = _getCurrentTime();
                s.timeDiff = s.now - s.lastNow;
                s.lastNow = s.now;
                s.calculateAnimOffset('x');
                s.calculateAnimOffset('y');

                _applyCurrentZoomPan();

                s.calculateOverBoundsAnimOffset('x');
                s.calculateOverBoundsAnimOffset('y');

                if (s.speedDecelerationRatioAbs.x < 0.05 && s.speedDecelerationRatioAbs.y < 0.05) {
                  // round pan position
                  _panOffset.x = Math.round(_panOffset.x);
                  _panOffset.y = Math.round(_panOffset.y);

                  _applyCurrentZoomPan();

                  _stopAnimation('zoomPan');

                  return;
                }
              }
            }
          };
          return s;
        },
            _completePanGesture = function _completePanGesture(animData) {
          // calculate swipe speed for Y axis (paanning)
          animData.calculateSwipeSpeed('y');
          _currPanBounds = self.currItem.bounds;
          animData.backAnimDestination = {};
          animData.backAnimStarted = {}; // Avoid acceleration animation if speed is too low

          if (Math.abs(animData.lastFlickSpeed.x) <= 0.05 && Math.abs(animData.lastFlickSpeed.y) <= 0.05) {
            animData.speedDecelerationRatioAbs.x = animData.speedDecelerationRatioAbs.y = 0; // Run pan drag release animation. E.g. if you drag image and release finger without momentum.

            animData.calculateOverBoundsAnimOffset('x');
            animData.calculateOverBoundsAnimOffset('y');
            return true;
          } // Animation loop that controls the acceleration after pan gesture ends


          _registerStartAnimation('zoomPan');

          animData.lastNow = _getCurrentTime();
          animData.panAnimLoop();
        },
            _finishSwipeMainScrollGesture = function _finishSwipeMainScrollGesture(gestureType, _releaseAnimData) {
          var itemChanged;

          if (!_mainScrollAnimating) {
            _currZoomedItemIndex = _currentItemIndex;
          }

          var itemsDiff;

          if (gestureType === 'swipe') {
            var totalShiftDist = _currPoint.x - _startPoint.x,
                isFastLastFlick = _releaseAnimData.lastFlickDist.x < 10; // if container is shifted for more than MIN_SWIPE_DISTANCE, 
            // and last flick gesture was in right direction

            if (totalShiftDist > MIN_SWIPE_DISTANCE && (isFastLastFlick || _releaseAnimData.lastFlickOffset.x > 20)) {
              // go to prev item
              itemsDiff = -1;
            } else if (totalShiftDist < -MIN_SWIPE_DISTANCE && (isFastLastFlick || _releaseAnimData.lastFlickOffset.x < -20)) {
              // go to next item
              itemsDiff = 1;
            }
          }

          var nextCircle;

          if (itemsDiff) {
            _currentItemIndex += itemsDiff;

            if (_currentItemIndex < 0) {
              _currentItemIndex = _options.loop ? _getNumItems() - 1 : 0;
              nextCircle = true;
            } else if (_currentItemIndex >= _getNumItems()) {
              _currentItemIndex = _options.loop ? 0 : _getNumItems() - 1;
              nextCircle = true;
            }

            if (!nextCircle || _options.loop) {
              _indexDiff += itemsDiff;
              _currPositionIndex -= itemsDiff;
              itemChanged = true;
            }
          }

          var animateToX = _slideSize.x * _currPositionIndex;
          var animateToDist = Math.abs(animateToX - _mainScrollPos.x);
          var finishAnimDuration;

          if (!itemChanged && animateToX > _mainScrollPos.x !== _releaseAnimData.lastFlickSpeed.x > 0) {
            // "return to current" duration, e.g. when dragging from slide 0 to -1
            finishAnimDuration = 333;
          } else {
            finishAnimDuration = Math.abs(_releaseAnimData.lastFlickSpeed.x) > 0 ? animateToDist / Math.abs(_releaseAnimData.lastFlickSpeed.x) : 333;
            finishAnimDuration = Math.min(finishAnimDuration, 400);
            finishAnimDuration = Math.max(finishAnimDuration, 250);
          }

          if (_currZoomedItemIndex === _currentItemIndex) {
            itemChanged = false;
          }

          _mainScrollAnimating = true;

          _shout('mainScrollAnimStart');

          _animateProp('mainScroll', _mainScrollPos.x, animateToX, finishAnimDuration, framework.easing.cubic.out, _moveMainScroll, function () {
            _stopAllAnimations();

            _mainScrollAnimating = false;
            _currZoomedItemIndex = -1;

            if (itemChanged || _currZoomedItemIndex !== _currentItemIndex) {
              self.updateCurrItem();
            }

            _shout('mainScrollAnimComplete');
          });

          if (itemChanged) {
            self.updateCurrItem(true);
          }

          return itemChanged;
        },
            _calculateZoomLevel = function _calculateZoomLevel(touchesDistance) {
          return 1 / _startPointsDistance * touchesDistance * _startZoomLevel;
        },
            // Resets zoom if it's out of bounds
        _completeZoomGesture = function _completeZoomGesture() {
          var destZoomLevel = _currZoomLevel,
              minZoomLevel = _getMinZoomLevel(),
              maxZoomLevel = _getMaxZoomLevel();

          if (_currZoomLevel < minZoomLevel) {
            destZoomLevel = minZoomLevel;
          } else if (_currZoomLevel > maxZoomLevel) {
            destZoomLevel = maxZoomLevel;
          }

          var destOpacity = 1,
              onUpdate,
              initialOpacity = _bgOpacity;

          if (_opacityChanged && !_isZoomingIn && !_wasOverInitialZoom && _currZoomLevel < minZoomLevel) {
            //_closedByScroll = true;
            self.close();
            return true;
          }

          if (_opacityChanged) {
            onUpdate = function onUpdate(now) {
              _applyBgOpacity((destOpacity - initialOpacity) * now + initialOpacity);
            };
          }

          self.zoomTo(destZoomLevel, 0, 200, framework.easing.cubic.out, onUpdate);
          return true;
        };

        _registerModule('Gestures', {
          publicMethods: {
            initGestures: function initGestures() {
              // helper function that builds touch/pointer/mouse events
              var addEventNames = function addEventNames(pref, down, move, up, cancel) {
                _dragStartEvent = pref + down;
                _dragMoveEvent = pref + move;
                _dragEndEvent = pref + up;

                if (cancel) {
                  _dragCancelEvent = pref + cancel;
                } else {
                  _dragCancelEvent = '';
                }
              };

              _pointerEventEnabled = _features.pointerEvent;

              if (_pointerEventEnabled && _features.touch) {
                // we don't need touch events, if browser supports pointer events
                _features.touch = false;
              }

              if (_pointerEventEnabled) {
                if (navigator.msPointerEnabled) {
                  // IE10 pointer events are case-sensitive
                  addEventNames('MSPointer', 'Down', 'Move', 'Up', 'Cancel');
                } else {
                  addEventNames('pointer', 'down', 'move', 'up', 'cancel');
                }
              } else if (_features.touch) {
                addEventNames('touch', 'start', 'move', 'end', 'cancel');
                _likelyTouchDevice = true;
              } else {
                addEventNames('mouse', 'down', 'move', 'up');
              }

              _upMoveEvents = _dragMoveEvent + ' ' + _dragEndEvent + ' ' + _dragCancelEvent;
              _downEvents = _dragStartEvent;

              if (_pointerEventEnabled && !_likelyTouchDevice) {
                _likelyTouchDevice = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1;
              } // make variable public


              self.likelyTouchDevice = _likelyTouchDevice;
              _globalEventHandlers[_dragStartEvent] = _onDragStart;
              _globalEventHandlers[_dragMoveEvent] = _onDragMove;
              _globalEventHandlers[_dragEndEvent] = _onDragRelease; // the Kraken

              if (_dragCancelEvent) {
                _globalEventHandlers[_dragCancelEvent] = _globalEventHandlers[_dragEndEvent];
              } // Bind mouse events on device with detected hardware touch support, in case it supports multiple types of input.


              if (_features.touch) {
                _downEvents += ' mousedown';
                _upMoveEvents += ' mousemove mouseup';
                _globalEventHandlers.mousedown = _globalEventHandlers[_dragStartEvent];
                _globalEventHandlers.mousemove = _globalEventHandlers[_dragMoveEvent];
                _globalEventHandlers.mouseup = _globalEventHandlers[_dragEndEvent];
              }

              if (!_likelyTouchDevice) {
                // don't allow pan to next slide from zoomed state on Desktop
                _options.allowPanToNext = false;
              }
            }
          }
        });
        /*>>gestures*/

        /*>>show-hide-transition*/

        /**
         * show-hide-transition.js:
         *
         * Manages initial opening or closing transition.
         *
         * If you're not planning to use transition for gallery at all,
         * you may set options hideAnimationDuration and showAnimationDuration to 0,
         * and just delete startAnimation function.
         * 
         */


        var _showOrHideTimeout,
            _showOrHide = function _showOrHide(item, img, out, completeFn) {
          if (_showOrHideTimeout) {
            clearTimeout(_showOrHideTimeout);
          }

          _initialZoomRunning = true;
          _initialContentSet = true; // dimensions of small thumbnail {x:,y:,w:}.
          // Height is optional, as calculated based on large image.

          var thumbBounds;

          if (item.initialLayout) {
            thumbBounds = item.initialLayout;
            item.initialLayout = null;
          } else {
            thumbBounds = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
          }

          var duration = out ? _options.hideAnimationDuration : _options.showAnimationDuration;

          var onComplete = function onComplete() {
            _stopAnimation('initialZoom');

            if (!out) {
              _applyBgOpacity(1);

              if (img) {
                img.style.display = 'block';
              }

              framework.addClass(template, 'pswp--animated-in');

              _shout('initialZoom' + (out ? 'OutEnd' : 'InEnd'));
            } else {
              self.template.removeAttribute('style');
              self.bg.removeAttribute('style');
            }

            if (completeFn) {
              completeFn();
            }

            _initialZoomRunning = false;
          }; // if bounds aren't provided, just open gallery without animation


          if (!duration || !thumbBounds || thumbBounds.x === undefined) {
            _shout('initialZoom' + (out ? 'Out' : 'In'));

            _currZoomLevel = item.initialZoomLevel;

            _equalizePoints(_panOffset, item.initialPosition);

            _applyCurrentZoomPan();

            template.style.opacity = out ? 0 : 1;

            _applyBgOpacity(1);

            if (duration) {
              setTimeout(function () {
                onComplete();
              }, duration);
            } else {
              onComplete();
            }

            return;
          }

          var startAnimation = function startAnimation() {
            var closeWithRaf = _closedByScroll,
                fadeEverything = !self.currItem.src || self.currItem.loadError || _options.showHideOpacity; // apply hw-acceleration to image

            if (item.miniImg) {
              item.miniImg.style.webkitBackfaceVisibility = 'hidden';
            }

            if (!out) {
              _currZoomLevel = thumbBounds.w / item.w;
              _panOffset.x = thumbBounds.x;
              _panOffset.y = thumbBounds.y - _initalWindowScrollY;
              self[fadeEverything ? 'template' : 'bg'].style.opacity = 0.001;

              _applyCurrentZoomPan();
            }

            _registerStartAnimation('initialZoom');

            if (out && !closeWithRaf) {
              framework.removeClass(template, 'pswp--animated-in');
            }

            if (fadeEverything) {
              if (out) {
                framework[(closeWithRaf ? 'remove' : 'add') + 'Class'](template, 'pswp--animate_opacity');
              } else {
                setTimeout(function () {
                  framework.addClass(template, 'pswp--animate_opacity');
                }, 30);
              }
            }

            _showOrHideTimeout = setTimeout(function () {
              _shout('initialZoom' + (out ? 'Out' : 'In'));

              if (!out) {
                // "in" animation always uses CSS transitions (instead of rAF).
                // CSS transition work faster here, 
                // as developer may also want to animate other things, 
                // like ui on top of sliding area, which can be animated just via CSS
                _currZoomLevel = item.initialZoomLevel;

                _equalizePoints(_panOffset, item.initialPosition);

                _applyCurrentZoomPan();

                _applyBgOpacity(1);

                if (fadeEverything) {
                  template.style.opacity = 1;
                } else {
                  _applyBgOpacity(1);
                }

                _showOrHideTimeout = setTimeout(onComplete, duration + 20);
              } else {
                // "out" animation uses rAF only when PhotoSwipe is closed by browser scroll, to recalculate position
                var destZoomLevel = thumbBounds.w / item.w,
                    initialPanOffset = {
                  x: _panOffset.x,
                  y: _panOffset.y
                },
                    initialZoomLevel = _currZoomLevel,
                    initalBgOpacity = _bgOpacity,
                    onUpdate = function onUpdate(now) {
                  if (now === 1) {
                    _currZoomLevel = destZoomLevel;
                    _panOffset.x = thumbBounds.x;
                    _panOffset.y = thumbBounds.y - _currentWindowScrollY;
                  } else {
                    _currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
                    _panOffset.x = (thumbBounds.x - initialPanOffset.x) * now + initialPanOffset.x;
                    _panOffset.y = (thumbBounds.y - _currentWindowScrollY - initialPanOffset.y) * now + initialPanOffset.y;
                  }

                  _applyCurrentZoomPan();

                  if (fadeEverything) {
                    template.style.opacity = 1 - now;
                  } else {
                    _applyBgOpacity(initalBgOpacity - now * initalBgOpacity);
                  }
                };

                if (closeWithRaf) {
                  _animateProp('initialZoom', 0, 1, duration, framework.easing.cubic.out, onUpdate, onComplete);
                } else {
                  onUpdate(1);
                  _showOrHideTimeout = setTimeout(onComplete, duration + 20);
                }
              }
            }, out ? 25 : 90); // Main purpose of this delay is to give browser time to paint and
            // create composite layers of PhotoSwipe UI parts (background, controls, caption, arrows).
            // Which avoids lag at the beginning of scale transition.
          };

          startAnimation();
        };
        /*>>show-hide-transition*/

        /*>>items-controller*/

        /**
        *
        * Controller manages gallery items, their dimensions, and their content.
        * 
        */


        var _items,
            _tempPanAreaSize = {},
            _imagesToAppendPool = [],
            _initialContentSet,
            _initialZoomRunning,
            _controllerDefaultOptions = {
          index: 0,
          errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
          forceProgressiveLoading: false,
          // TODO
          preload: [1, 1],
          getNumItemsFn: function getNumItemsFn() {
            return _items.length;
          }
        };

        var _getItemAt,
            _getNumItems,
            _getZeroBounds = function _getZeroBounds() {
          return {
            center: {
              x: 0,
              y: 0
            },
            max: {
              x: 0,
              y: 0
            },
            min: {
              x: 0,
              y: 0
            }
          };
        },
            _calculateSingleItemPanBounds = function _calculateSingleItemPanBounds(item, realPanElementW, realPanElementH) {
          var bounds = item.bounds; // position of element when it's centered

          bounds.center.x = Math.round((_tempPanAreaSize.x - realPanElementW) / 2);
          bounds.center.y = Math.round((_tempPanAreaSize.y - realPanElementH) / 2) + item.vGap.top; // maximum pan position

          bounds.max.x = realPanElementW > _tempPanAreaSize.x ? Math.round(_tempPanAreaSize.x - realPanElementW) : bounds.center.x;
          bounds.max.y = realPanElementH > _tempPanAreaSize.y ? Math.round(_tempPanAreaSize.y - realPanElementH) + item.vGap.top : bounds.center.y; // minimum pan position

          bounds.min.x = realPanElementW > _tempPanAreaSize.x ? 0 : bounds.center.x;
          bounds.min.y = realPanElementH > _tempPanAreaSize.y ? item.vGap.top : bounds.center.y;
        },
            _calculateItemSize = function _calculateItemSize(item, viewportSize, zoomLevel) {
          if (item.src && !item.loadError) {
            var isInitial = !zoomLevel;

            if (isInitial) {
              if (!item.vGap) {
                item.vGap = {
                  top: 0,
                  bottom: 0
                };
              } // allows overriding vertical margin for individual items


              _shout('parseVerticalMargin', item);
            }

            _tempPanAreaSize.x = viewportSize.x;
            _tempPanAreaSize.y = viewportSize.y - item.vGap.top - item.vGap.bottom;

            if (isInitial) {
              var hRatio = _tempPanAreaSize.x / item.w;
              var vRatio = _tempPanAreaSize.y / item.h;
              item.fitRatio = hRatio < vRatio ? hRatio : vRatio; //item.fillRatio = hRatio > vRatio ? hRatio : vRatio;

              var scaleMode = _options.scaleMode;

              if (scaleMode === 'orig') {
                zoomLevel = 1;
              } else if (scaleMode === 'fit') {
                zoomLevel = item.fitRatio;
              }

              if (zoomLevel > 1) {
                zoomLevel = 1;
              }

              item.initialZoomLevel = zoomLevel;

              if (!item.bounds) {
                // reuse bounds object
                item.bounds = _getZeroBounds();
              }
            }

            if (!zoomLevel) {
              return;
            }

            _calculateSingleItemPanBounds(item, item.w * zoomLevel, item.h * zoomLevel);

            if (isInitial && zoomLevel === item.initialZoomLevel) {
              item.initialPosition = item.bounds.center;
            }

            return item.bounds;
          } else {
            item.w = item.h = 0;
            item.initialZoomLevel = item.fitRatio = 1;
            item.bounds = _getZeroBounds();
            item.initialPosition = item.bounds.center; // if it's not image, we return zero bounds (content is not zoomable)

            return item.bounds;
          }
        },
            _appendImage = function _appendImage(index, item, baseDiv, img, preventAnimation, keepPlaceholder) {
          if (item.loadError) {
            return;
          }

          if (img) {
            item.imageAppended = true;

            _setImageSize(item, img, item === self.currItem && _renderMaxResolution);

            baseDiv.appendChild(img);

            if (keepPlaceholder) {
              setTimeout(function () {
                if (item && item.loaded && item.placeholder) {
                  item.placeholder.style.display = 'none';
                  item.placeholder = null;
                }
              }, 500);
            }
          }
        },
            _preloadImage = function _preloadImage(item) {
          item.loading = true;
          item.loaded = false;
          var img = item.img = framework.createEl('pswp__img', 'img');

          var onComplete = function onComplete() {
            item.loading = false;
            item.loaded = true;

            if (item.loadComplete) {
              item.loadComplete(item);
            } else {
              item.img = null; // no need to store image object
            }

            img.onload = img.onerror = null;
            img = null;
          };

          img.onload = onComplete;

          img.onerror = function () {
            item.loadError = true;
            onComplete();
          };

          img.src = item.src; // + '?a=' + Math.random();

          return img;
        },
            _checkForError = function _checkForError(item, cleanUp) {
          if (item.src && item.loadError && item.container) {
            if (cleanUp) {
              item.container.innerHTML = '';
            }

            item.container.innerHTML = _options.errorMsg.replace('%url%', item.src);
            return true;
          }
        },
            _setImageSize = function _setImageSize(item, img, maxRes) {
          if (!item.src) {
            return;
          }

          if (!img) {
            img = item.container.lastChild;
          }

          var w = maxRes ? item.w : Math.round(item.w * item.fitRatio),
              h = maxRes ? item.h : Math.round(item.h * item.fitRatio);

          if (item.placeholder && !item.loaded) {
            item.placeholder.style.width = w + 'px';
            item.placeholder.style.height = h + 'px';
          }

          img.style.width = w + 'px';
          img.style.height = h + 'px';
        },
            _appendImagesPool = function _appendImagesPool() {
          if (_imagesToAppendPool.length) {
            var poolItem;

            for (var i = 0; i < _imagesToAppendPool.length; i++) {
              poolItem = _imagesToAppendPool[i];

              if (poolItem.holder.index === poolItem.index) {
                _appendImage(poolItem.index, poolItem.item, poolItem.baseDiv, poolItem.img, false, poolItem.clearPlaceholder);
              }
            }

            _imagesToAppendPool = [];
          }
        };

        _registerModule('Controller', {
          publicMethods: {
            lazyLoadItem: function lazyLoadItem(index) {
              index = _getLoopedId(index);

              var item = _getItemAt(index);

              if (!item || (item.loaded || item.loading) && !_itemsNeedUpdate) {
                return;
              }

              _shout('gettingData', index, item);

              if (!item.src) {
                return;
              }

              _preloadImage(item);
            },
            initController: function initController() {
              framework.extend(_options, _controllerDefaultOptions, true);
              self.items = _items = items;
              _getItemAt = self.getItemAt;
              _getNumItems = _options.getNumItemsFn; //self.getNumItems;

              if (_getNumItems() < 3) {
                _options.loop = false; // disable loop if less then 3 items
              }

              _listen('beforeChange', function (diff) {
                var p = _options.preload,
                    isNext = diff === null ? true : diff >= 0,
                    preloadBefore = Math.min(p[0], _getNumItems()),
                    preloadAfter = Math.min(p[1], _getNumItems()),
                    i;

                for (i = 1; i <= (isNext ? preloadAfter : preloadBefore); i++) {
                  self.lazyLoadItem(_currentItemIndex + i);
                }

                for (i = 1; i <= (isNext ? preloadBefore : preloadAfter); i++) {
                  self.lazyLoadItem(_currentItemIndex - i);
                }
              });

              _listen('initialLayout', function () {
                self.currItem.initialLayout = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
              });

              _listen('mainScrollAnimComplete', _appendImagesPool);

              _listen('initialZoomInEnd', _appendImagesPool);

              _listen('destroy', function () {
                var item;

                for (var i = 0; i < _items.length; i++) {
                  item = _items[i]; // remove reference to DOM elements, for GC

                  if (item.container) {
                    item.container = null;
                  }

                  if (item.placeholder) {
                    item.placeholder = null;
                  }

                  if (item.img) {
                    item.img = null;
                  }

                  if (item.preloader) {
                    item.preloader = null;
                  }

                  if (item.loadError) {
                    item.loaded = item.loadError = false;
                  }
                }

                _imagesToAppendPool = null;
              });
            },
            getItemAt: function getItemAt(index) {
              if (index >= 0) {
                return _items[index] !== undefined ? _items[index] : false;
              }

              return false;
            },
            allowProgressiveImg: function allowProgressiveImg() {
              // 1. Progressive image loading isn't working on webkit/blink 
              //    when hw-acceleration (e.g. translateZ) is applied to IMG element.
              //    That's why in PhotoSwipe parent element gets zoom transform, not image itself.
              //    
              // 2. Progressive image loading sometimes blinks in webkit/blink when applying animation to parent element.
              //    That's why it's disabled on touch devices (mainly because of swipe transition)
              //    
              // 3. Progressive image loading sometimes doesn't work in IE (up to 11).
              // Don't allow progressive loading on non-large touch devices
              return _options.forceProgressiveLoading || !_likelyTouchDevice || _options.mouseUsed || screen.width > 1200; // 1200 - to eliminate touch devices with large screen (like Chromebook Pixel)
            },
            setContent: function setContent(holder, index) {
              if (_options.loop) {
                index = _getLoopedId(index);
              }

              var prevItem = self.getItemAt(holder.index);

              if (prevItem) {
                prevItem.container = null;
              }

              var item = self.getItemAt(index),
                  img;

              if (!item) {
                holder.el.innerHTML = '';
                return;
              } // allow to override data


              _shout('gettingData', index, item);

              holder.index = index;
              holder.item = item; // base container DIV is created only once for each of 3 holders

              var baseDiv = item.container = framework.createEl('pswp__zoom-wrap');

              if (!item.src && item.html) {
                if (item.html.tagName) {
                  baseDiv.appendChild(item.html);
                } else {
                  baseDiv.innerHTML = item.html;
                }
              }

              _checkForError(item);

              _calculateItemSize(item, _viewportSize);

              if (item.src && !item.loadError && !item.loaded) {
                item.loadComplete = function (item) {
                  // gallery closed before image finished loading
                  if (!_isOpen) {
                    return;
                  } // check if holder hasn't changed while image was loading


                  if (holder && holder.index === index) {
                    if (_checkForError(item, true)) {
                      item.loadComplete = item.img = null;

                      _calculateItemSize(item, _viewportSize);

                      _applyZoomPanToItem(item);

                      if (holder.index === _currentItemIndex) {
                        // recalculate dimensions
                        self.updateCurrZoomItem();
                      }

                      return;
                    }

                    if (!item.imageAppended) {
                      if (_features.transform && (_mainScrollAnimating || _initialZoomRunning)) {
                        _imagesToAppendPool.push({
                          item: item,
                          baseDiv: baseDiv,
                          img: item.img,
                          index: index,
                          holder: holder,
                          clearPlaceholder: true
                        });
                      } else {
                        _appendImage(index, item, baseDiv, item.img, _mainScrollAnimating || _initialZoomRunning, true);
                      }
                    } else {
                      // remove preloader & mini-img
                      if (!_initialZoomRunning && item.placeholder) {
                        item.placeholder.style.display = 'none';
                        item.placeholder = null;
                      }
                    }
                  }

                  item.loadComplete = null;
                  item.img = null; // no need to store image element after it's added

                  _shout('imageLoadComplete', index, item);
                };

                if (framework.features.transform) {
                  var placeholderClassName = 'pswp__img pswp__img--placeholder';
                  placeholderClassName += item.msrc ? '' : ' pswp__img--placeholder--blank';
                  var placeholder = framework.createEl(placeholderClassName, item.msrc ? 'img' : '');

                  if (item.msrc) {
                    placeholder.src = item.msrc;
                  }

                  _setImageSize(item, placeholder);

                  baseDiv.appendChild(placeholder);
                  item.placeholder = placeholder;
                }

                if (!item.loading) {
                  _preloadImage(item);
                }

                if (self.allowProgressiveImg()) {
                  // just append image
                  if (!_initialContentSet && _features.transform) {
                    _imagesToAppendPool.push({
                      item: item,
                      baseDiv: baseDiv,
                      img: item.img,
                      index: index,
                      holder: holder
                    });
                  } else {
                    _appendImage(index, item, baseDiv, item.img, true, true);
                  }
                }
              } else if (item.src && !item.loadError) {
                // image object is created every time, due to bugs of image loading & delay when switching images
                img = framework.createEl('pswp__img', 'img');
                img.style.opacity = 1;
                img.src = item.src;

                _setImageSize(item, img);

                _appendImage(index, item, baseDiv, img);
              }

              if (!_initialContentSet && index === _currentItemIndex) {
                _currZoomElementStyle = baseDiv.style;

                _showOrHide(item, img || item.img);
              } else {
                _applyZoomPanToItem(item);
              }

              holder.el.innerHTML = '';
              holder.el.appendChild(baseDiv);
            },
            cleanSlide: function cleanSlide(item) {
              if (item.img) {
                item.img.onload = item.img.onerror = null;
              }

              item.loaded = item.loading = item.img = item.imageAppended = false;
            }
          }
        });
        /*>>items-controller*/

        /*>>tap*/

        /**
         * tap.js:
         *
         * Displatches tap and double-tap events.
         * 
         */


        var tapTimer,
            tapReleasePoint = {},
            _dispatchTapEvent = function _dispatchTapEvent(origEvent, releasePoint, pointerType) {
          var e = document.createEvent('CustomEvent'),
              eDetail = {
            origEvent: origEvent,
            target: origEvent.target,
            releasePoint: releasePoint,
            pointerType: pointerType || 'touch'
          };
          e.initCustomEvent('pswpTap', true, true, eDetail);
          origEvent.target.dispatchEvent(e);
        };

        _registerModule('Tap', {
          publicMethods: {
            initTap: function initTap() {
              _listen('firstTouchStart', self.onTapStart);

              _listen('touchRelease', self.onTapRelease);

              _listen('destroy', function () {
                tapReleasePoint = {};
                tapTimer = null;
              });
            },
            onTapStart: function onTapStart(touchList) {
              if (touchList.length > 1) {
                clearTimeout(tapTimer);
                tapTimer = null;
              }
            },
            onTapRelease: function onTapRelease(e, releasePoint) {
              if (!releasePoint) {
                return;
              }

              if (!_moved && !_isMultitouch && !_numAnimations) {
                var p0 = releasePoint;

                if (tapTimer) {
                  clearTimeout(tapTimer);
                  tapTimer = null; // Check if taped on the same place

                  if (_isNearbyPoints(p0, tapReleasePoint)) {
                    _shout('doubleTap', p0);

                    return;
                  }
                }

                if (releasePoint.type === 'mouse') {
                  _dispatchTapEvent(e, releasePoint, 'mouse');

                  return;
                }

                var clickedTagName = e.target.tagName.toUpperCase(); // avoid double tap delay on buttons and elements that have class pswp__single-tap

                if (clickedTagName === 'BUTTON' || framework.hasClass(e.target, 'pswp__single-tap')) {
                  _dispatchTapEvent(e, releasePoint);

                  return;
                }

                _equalizePoints(tapReleasePoint, p0);

                tapTimer = setTimeout(function () {
                  _dispatchTapEvent(e, releasePoint);

                  tapTimer = null;
                }, 300);
              }
            }
          }
        });
        /*>>tap*/

        /*>>desktop-zoom*/

        /**
         *
         * desktop-zoom.js:
         *
         * - Binds mousewheel event for paning zoomed image.
         * - Manages "dragging", "zoomed-in", "zoom-out" classes.
         *   (which are used for cursors and zoom icon)
         * - Adds toggleDesktopZoom function.
         * 
         */


        var _wheelDelta;

        _registerModule('DesktopZoom', {
          publicMethods: {
            initDesktopZoom: function initDesktopZoom() {
              if (_oldIE) {
                // no zoom for old IE (<=8)
                return;
              }

              if (_likelyTouchDevice) {
                // if detected hardware touch support, we wait until mouse is used,
                // and only then apply desktop-zoom features
                _listen('mouseUsed', function () {
                  self.setupDesktopZoom();
                });
              } else {
                self.setupDesktopZoom(true);
              }
            },
            setupDesktopZoom: function setupDesktopZoom(onInit) {
              _wheelDelta = {};
              var events = 'wheel mousewheel DOMMouseScroll';

              _listen('bindEvents', function () {
                framework.bind(template, events, self.handleMouseWheel);
              });

              _listen('unbindEvents', function () {
                if (_wheelDelta) {
                  framework.unbind(template, events, self.handleMouseWheel);
                }
              });

              self.mouseZoomedIn = false;

              var hasDraggingClass,
                  updateZoomable = function updateZoomable() {
                if (self.mouseZoomedIn) {
                  framework.removeClass(template, 'pswp--zoomed-in');
                  self.mouseZoomedIn = false;
                }

                if (_currZoomLevel < 1) {
                  framework.addClass(template, 'pswp--zoom-allowed');
                } else {
                  framework.removeClass(template, 'pswp--zoom-allowed');
                }

                removeDraggingClass();
              },
                  removeDraggingClass = function removeDraggingClass() {
                if (hasDraggingClass) {
                  framework.removeClass(template, 'pswp--dragging');
                  hasDraggingClass = false;
                }
              };

              _listen('resize', updateZoomable);

              _listen('afterChange', updateZoomable);

              _listen('pointerDown', function () {
                if (self.mouseZoomedIn) {
                  hasDraggingClass = true;
                  framework.addClass(template, 'pswp--dragging');
                }
              });

              _listen('pointerUp', removeDraggingClass);

              if (!onInit) {
                updateZoomable();
              }
            },
            handleMouseWheel: function handleMouseWheel(e) {
              if (_currZoomLevel <= self.currItem.fitRatio) {
                if (_options.modal) {
                  if (!_options.closeOnScroll || _numAnimations || _isDragging) {
                    e.preventDefault();
                  } else if (_transformKey && Math.abs(e.deltaY) > 2) {
                    // close PhotoSwipe
                    // if browser supports transforms & scroll changed enough
                    _closedByScroll = true;
                    self.close();
                  }
                }

                return true;
              } // allow just one event to fire


              e.stopPropagation(); // https://developer.mozilla.org/en-US/docs/Web/Events/wheel

              _wheelDelta.x = 0;

              if ('deltaX' in e) {
                if (e.deltaMode === 1
                /* DOM_DELTA_LINE */
                ) {
                    // 18 - average line height
                    _wheelDelta.x = e.deltaX * 18;
                    _wheelDelta.y = e.deltaY * 18;
                  } else {
                  _wheelDelta.x = e.deltaX;
                  _wheelDelta.y = e.deltaY;
                }
              } else if ('wheelDelta' in e) {
                if (e.wheelDeltaX) {
                  _wheelDelta.x = -0.16 * e.wheelDeltaX;
                }

                if (e.wheelDeltaY) {
                  _wheelDelta.y = -0.16 * e.wheelDeltaY;
                } else {
                  _wheelDelta.y = -0.16 * e.wheelDelta;
                }
              } else if ('detail' in e) {
                _wheelDelta.y = e.detail;
              } else {
                return;
              }

              _calculatePanBounds(_currZoomLevel, true);

              var newPanX = _panOffset.x - _wheelDelta.x,
                  newPanY = _panOffset.y - _wheelDelta.y; // only prevent scrolling in nonmodal mode when not at edges

              if (_options.modal || newPanX <= _currPanBounds.min.x && newPanX >= _currPanBounds.max.x && newPanY <= _currPanBounds.min.y && newPanY >= _currPanBounds.max.y) {
                e.preventDefault();
              } // TODO: use rAF instead of mousewheel?


              self.panTo(newPanX, newPanY);
            },
            toggleDesktopZoom: function toggleDesktopZoom(centerPoint) {
              centerPoint = centerPoint || {
                x: _viewportSize.x / 2 + _offset.x,
                y: _viewportSize.y / 2 + _offset.y
              };

              var doubleTapZoomLevel = _options.getDoubleTapZoom(true, self.currItem);

              var zoomOut = _currZoomLevel === doubleTapZoomLevel;
              self.mouseZoomedIn = !zoomOut;
              self.zoomTo(zoomOut ? self.currItem.initialZoomLevel : doubleTapZoomLevel, centerPoint, 333);
              framework[(!zoomOut ? 'add' : 'remove') + 'Class'](template, 'pswp--zoomed-in');
            }
          }
        });
        /*>>desktop-zoom*/

        /*>>history*/

        /**
         *
         * history.js:
         *
         * - Back button to close gallery.
         * 
         * - Unique URL for each slide: example.com/&pid=1&gid=3
         *   (where PID is picture index, and GID and gallery index)
         *   
         * - Switch URL when slides change.
         * 
         */


        var _historyDefaultOptions = {
          history: true,
          galleryUID: 1
        };

        var _historyUpdateTimeout,
            _hashChangeTimeout,
            _hashAnimCheckTimeout,
            _hashChangedByScript,
            _hashChangedByHistory,
            _hashReseted,
            _initialHash,
            _historyChanged,
            _closedFromURL,
            _urlChangedOnce,
            _windowLoc,
            _supportsPushState,
            _getHash = function _getHash() {
          return _windowLoc.hash.substring(1);
        },
            _cleanHistoryTimeouts = function _cleanHistoryTimeouts() {
          if (_historyUpdateTimeout) {
            clearTimeout(_historyUpdateTimeout);
          }

          if (_hashAnimCheckTimeout) {
            clearTimeout(_hashAnimCheckTimeout);
          }
        },
            // pid - Picture index
        // gid - Gallery index
        _parseItemIndexFromURL = function _parseItemIndexFromURL() {
          var hash = _getHash(),
              params = {};

          if (hash.length < 5) {
            // pid=1
            return params;
          }

          var i,
              vars = hash.split('&');

          for (i = 0; i < vars.length; i++) {
            if (!vars[i]) {
              continue;
            }

            var pair = vars[i].split('=');

            if (pair.length < 2) {
              continue;
            }

            params[pair[0]] = pair[1];
          }

          if (_options.galleryPIDs) {
            // detect custom pid in hash and search for it among the items collection
            var searchfor = params.pid;
            params.pid = 0; // if custom pid cannot be found, fallback to the first item

            for (i = 0; i < _items.length; i++) {
              if (_items[i].pid === searchfor) {
                params.pid = i;
                break;
              }
            }
          } else {
            params.pid = parseInt(params.pid, 10) - 1;
          }

          if (params.pid < 0) {
            params.pid = 0;
          }

          return params;
        },
            _updateHash = function _updateHash() {
          if (_hashAnimCheckTimeout) {
            clearTimeout(_hashAnimCheckTimeout);
          }

          if (_numAnimations || _isDragging) {
            // changing browser URL forces layout/paint in some browsers, which causes noticable lag during animation
            // that's why we update hash only when no animations running
            _hashAnimCheckTimeout = setTimeout(_updateHash, 500);
            return;
          }

          if (_hashChangedByScript) {
            clearTimeout(_hashChangeTimeout);
          } else {
            _hashChangedByScript = true;
          }

          var pid = _currentItemIndex + 1;

          var item = _getItemAt(_currentItemIndex);

          if (item.hasOwnProperty('pid')) {
            // carry forward any custom pid assigned to the item
            pid = item.pid;
          }

          var newHash = _initialHash + '&' + 'gid=' + _options.galleryUID + '&' + 'pid=' + pid;

          if (!_historyChanged) {
            if (_windowLoc.hash.indexOf(newHash) === -1) {
              _urlChangedOnce = true;
            } // first time - add new hisory record, then just replace

          }

          var newURL = _windowLoc.href.split('#')[0] + '#' + newHash;

          if (_supportsPushState) {
            if ('#' + newHash !== window.location.hash) {
              history[_historyChanged ? 'replaceState' : 'pushState']('', document.title, newURL);
            }
          } else {
            if (_historyChanged) {
              _windowLoc.replace(newURL);
            } else {
              _windowLoc.hash = newHash;
            }
          }

          _historyChanged = true;
          _hashChangeTimeout = setTimeout(function () {
            _hashChangedByScript = false;
          }, 60);
        };

        _registerModule('History', {
          publicMethods: {
            initHistory: function initHistory() {
              framework.extend(_options, _historyDefaultOptions, true);

              if (!_options.history) {
                return;
              }

              _windowLoc = window.location;
              _urlChangedOnce = false;
              _closedFromURL = false;
              _historyChanged = false;
              _initialHash = _getHash();
              _supportsPushState = 'pushState' in history;

              if (_initialHash.indexOf('gid=') > -1) {
                _initialHash = _initialHash.split('&gid=')[0];
                _initialHash = _initialHash.split('?gid=')[0];
              }

              _listen('afterChange', self.updateURL);

              _listen('unbindEvents', function () {
                framework.unbind(window, 'hashchange', self.onHashChange);
              });

              var returnToOriginal = function returnToOriginal() {
                _hashReseted = true;

                if (!_closedFromURL) {
                  if (_urlChangedOnce) {
                    history.back();
                  } else {
                    if (_initialHash) {
                      _windowLoc.hash = _initialHash;
                    } else {
                      if (_supportsPushState) {
                        // remove hash from url without refreshing it or scrolling to top
                        history.pushState('', document.title, _windowLoc.pathname + _windowLoc.search);
                      } else {
                        _windowLoc.hash = '';
                      }
                    }
                  }
                }

                _cleanHistoryTimeouts();
              };

              _listen('unbindEvents', function () {
                if (_closedByScroll) {
                  // if PhotoSwipe is closed by scroll, we go "back" before the closing animation starts
                  // this is done to keep the scroll position
                  returnToOriginal();
                }
              });

              _listen('destroy', function () {
                if (!_hashReseted) {
                  returnToOriginal();
                }
              });

              _listen('firstUpdate', function () {
                _currentItemIndex = _parseItemIndexFromURL().pid;
              });

              var index = _initialHash.indexOf('pid=');

              if (index > -1) {
                _initialHash = _initialHash.substring(0, index);

                if (_initialHash.slice(-1) === '&') {
                  _initialHash = _initialHash.slice(0, -1);
                }
              }

              setTimeout(function () {
                if (_isOpen) {
                  // hasn't destroyed yet
                  framework.bind(window, 'hashchange', self.onHashChange);
                }
              }, 40);
            },
            onHashChange: function onHashChange() {
              if (_getHash() === _initialHash) {
                _closedFromURL = true;
                self.close();
                return;
              }

              if (!_hashChangedByScript) {
                _hashChangedByHistory = true;
                self.goTo(_parseItemIndexFromURL().pid);
                _hashChangedByHistory = false;
              }
            },
            updateURL: function updateURL() {
              // Delay the update of URL, to avoid lag during transition, 
              // and to not to trigger actions like "refresh page sound" or "blinking favicon" to often
              _cleanHistoryTimeouts();

              if (_hashChangedByHistory) {
                return;
              }

              if (!_historyChanged) {
                _updateHash(); // first time

              } else {
                _historyUpdateTimeout = setTimeout(_updateHash, 800);
              }
            }
          }
        });
        /*>>history*/


        framework.extend(self, publicMethods);
      };

      return PhotoSwipe;
    });
  });

  function _typeof$1(obj) {
    if (typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol") {
      _typeof$1 = function _typeof$1(obj) {
        return _typeof(obj);
      };
    } else {
      _typeof$1 = function _typeof$1(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof(obj);
      };
    }

    return _typeof$1(obj);
  } // This is not really a perfect check, but works fine.
  // From http://stackoverflow.com/questions/384286


  var HAS_DOM_2 = (typeof HTMLElement === "undefined" ? "undefined" : _typeof$1(HTMLElement)) === "object";
  function isDOMElement(obj) {
    return HAS_DOM_2 ? obj instanceof HTMLElement : obj && _typeof$1(obj) === "object" && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === "string";
  }
  function addClasses(el, classNames) {
    classNames.forEach(function (className) {
      el.classList.add(className);
    });
  }
  function removeClasses(el, classNames) {
    classNames.forEach(function (className) {
      el.classList.remove(className);
    });
  }

  /* UNMINIFIED RULES

  const RULES = `
  @keyframes noop {
    0% { zoom: 1; }
  }

  @-webkit-keyframes noop {
    0% { zoom: 1; }
  }

  .drift-zoom-pane.drift-open {
    display: block;
  }

  .drift-zoom-pane.drift-opening, .drift-zoom-pane.drift-closing {
    animation: noop 1ms;
    -webkit-animation: noop 1ms;
  }

  .drift-zoom-pane {
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
  }

  .drift-zoom-pane-loader {
    display: none;
  }

  .drift-zoom-pane img {
    position: absolute;
    display: block;
    max-width: none;
    max-height: none;
  }

  .drift-bounding-box {
    position: absolute;
    pointer-events: none;
  }
  `;

  */
  var RULES = ".drift-bounding-box,.drift-zoom-pane{position:absolute;pointer-events:none}@keyframes noop{0%{zoom:1}}@-webkit-keyframes noop{0%{zoom:1}}.drift-zoom-pane.drift-open{display:block}.drift-zoom-pane.drift-closing,.drift-zoom-pane.drift-opening{animation:noop 1ms;-webkit-animation:noop 1ms}.drift-zoom-pane{overflow:hidden;width:100%;height:100%;top:0;left:0}.drift-zoom-pane-loader{display:none}.drift-zoom-pane img{position:absolute;display:block;max-width:none;max-height:none}";
  function injectBaseStylesheet() {
    if (document.querySelector(".drift-base-styles")) {
      return;
    }

    var styleEl = document.createElement("style");
    styleEl.type = "text/css";
    styleEl.classList.add("drift-base-styles");
    styleEl.appendChild(document.createTextNode(RULES));
    var head = document.head;
    head.insertBefore(styleEl, head.firstChild);
  }

  function throwIfMissing() {
    throw new Error("Missing parameter");
  }

  function _classCallCheck$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties$1(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass$1(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$1(Constructor, staticProps);
    return Constructor;
  }

  var BoundingBox = /*#__PURE__*/function () {
    function BoundingBox(options) {
      _classCallCheck$1(this, BoundingBox);

      this.isShowing = false;
      var _options$namespace = options.namespace,
          namespace = _options$namespace === void 0 ? null : _options$namespace,
          _options$zoomFactor = options.zoomFactor,
          zoomFactor = _options$zoomFactor === void 0 ? throwIfMissing() : _options$zoomFactor,
          _options$containerEl = options.containerEl,
          containerEl = _options$containerEl === void 0 ? throwIfMissing() : _options$containerEl;
      this.settings = {
        namespace: namespace,
        zoomFactor: zoomFactor,
        containerEl: containerEl
      };
      this.openClasses = this._buildClasses("open");

      this._buildElement();
    }

    _createClass$1(BoundingBox, [{
      key: "_buildClasses",
      value: function _buildClasses(suffix) {
        var classes = ["drift-".concat(suffix)];
        var ns = this.settings.namespace;

        if (ns) {
          classes.push("".concat(ns, "-").concat(suffix));
        }

        return classes;
      }
    }, {
      key: "_buildElement",
      value: function _buildElement() {
        this.el = document.createElement("div");
        addClasses(this.el, this._buildClasses("bounding-box"));
      }
    }, {
      key: "show",
      value: function show(zoomPaneWidth, zoomPaneHeight) {
        this.isShowing = true;
        this.settings.containerEl.appendChild(this.el);
        var style = this.el.style;
        style.width = "".concat(Math.round(zoomPaneWidth / this.settings.zoomFactor), "px");
        style.height = "".concat(Math.round(zoomPaneHeight / this.settings.zoomFactor), "px");
        addClasses(this.el, this.openClasses);
      }
    }, {
      key: "hide",
      value: function hide() {
        if (this.isShowing) {
          this.settings.containerEl.removeChild(this.el);
        }

        this.isShowing = false;
        removeClasses(this.el, this.openClasses);
      }
    }, {
      key: "setPosition",
      value: function setPosition(percentageOffsetX, percentageOffsetY, triggerRect) {
        var pageXOffset = window.pageXOffset;
        var pageYOffset = window.pageYOffset;
        var inlineLeft = triggerRect.left + percentageOffsetX * triggerRect.width - this.el.clientWidth / 2 + pageXOffset;
        var inlineTop = triggerRect.top + percentageOffsetY * triggerRect.height - this.el.clientHeight / 2 + pageYOffset;

        if (inlineLeft < triggerRect.left + pageXOffset) {
          inlineLeft = triggerRect.left + pageXOffset;
        } else if (inlineLeft + this.el.clientWidth > triggerRect.left + triggerRect.width + pageXOffset) {
          inlineLeft = triggerRect.left + triggerRect.width - this.el.clientWidth + pageXOffset;
        }

        if (inlineTop < triggerRect.top + pageYOffset) {
          inlineTop = triggerRect.top + pageYOffset;
        } else if (inlineTop + this.el.clientHeight > triggerRect.top + triggerRect.height + pageYOffset) {
          inlineTop = triggerRect.top + triggerRect.height - this.el.clientHeight + pageYOffset;
        }

        this.el.style.left = "".concat(inlineLeft, "px");
        this.el.style.top = "".concat(inlineTop, "px");
      }
    }]);

    return BoundingBox;
  }();

  function _classCallCheck$2(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties$2(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass$2(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$2(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$2(Constructor, staticProps);
    return Constructor;
  }

  var Trigger = /*#__PURE__*/function () {
    function Trigger() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck$2(this, Trigger);

      this._show = this._show.bind(this);
      this._hide = this._hide.bind(this);
      this._handleEntry = this._handleEntry.bind(this);
      this._handleMovement = this._handleMovement.bind(this);
      var _options$el = options.el,
          el = _options$el === void 0 ? throwIfMissing() : _options$el,
          _options$zoomPane = options.zoomPane,
          zoomPane = _options$zoomPane === void 0 ? throwIfMissing() : _options$zoomPane,
          _options$sourceAttrib = options.sourceAttribute,
          sourceAttribute = _options$sourceAttrib === void 0 ? throwIfMissing() : _options$sourceAttrib,
          _options$handleTouch = options.handleTouch,
          handleTouch = _options$handleTouch === void 0 ? throwIfMissing() : _options$handleTouch,
          _options$onShow = options.onShow,
          onShow = _options$onShow === void 0 ? null : _options$onShow,
          _options$onHide = options.onHide,
          onHide = _options$onHide === void 0 ? null : _options$onHide,
          _options$hoverDelay = options.hoverDelay,
          hoverDelay = _options$hoverDelay === void 0 ? 0 : _options$hoverDelay,
          _options$touchDelay = options.touchDelay,
          touchDelay = _options$touchDelay === void 0 ? 0 : _options$touchDelay,
          _options$hoverBoundin = options.hoverBoundingBox,
          hoverBoundingBox = _options$hoverBoundin === void 0 ? throwIfMissing() : _options$hoverBoundin,
          _options$touchBoundin = options.touchBoundingBox,
          touchBoundingBox = _options$touchBoundin === void 0 ? throwIfMissing() : _options$touchBoundin,
          _options$namespace = options.namespace,
          namespace = _options$namespace === void 0 ? null : _options$namespace,
          _options$zoomFactor = options.zoomFactor,
          zoomFactor = _options$zoomFactor === void 0 ? throwIfMissing() : _options$zoomFactor,
          _options$boundingBoxC = options.boundingBoxContainer,
          boundingBoxContainer = _options$boundingBoxC === void 0 ? throwIfMissing() : _options$boundingBoxC;
      this.settings = {
        el: el,
        zoomPane: zoomPane,
        sourceAttribute: sourceAttribute,
        handleTouch: handleTouch,
        onShow: onShow,
        onHide: onHide,
        hoverDelay: hoverDelay,
        touchDelay: touchDelay,
        hoverBoundingBox: hoverBoundingBox,
        touchBoundingBox: touchBoundingBox,
        namespace: namespace,
        zoomFactor: zoomFactor,
        boundingBoxContainer: boundingBoxContainer
      };

      if (this.settings.hoverBoundingBox || this.settings.touchBoundingBox) {
        this.boundingBox = new BoundingBox({
          namespace: this.settings.namespace,
          zoomFactor: this.settings.zoomFactor,
          containerEl: this.settings.boundingBoxContainer
        });
      }

      this.enabled = true;

      this._bindEvents();
    }

    _createClass$2(Trigger, [{
      key: "_preventDefault",
      value: function _preventDefault(event) {
        event.preventDefault();
      }
    }, {
      key: "_preventDefaultAllowTouchScroll",
      value: function _preventDefaultAllowTouchScroll(event) {
        if (!this.settings.touchDelay || !this._isTouchEvent(event) || this.isShowing) {
          event.preventDefault();
        }
      }
    }, {
      key: "_isTouchEvent",
      value: function _isTouchEvent(event) {
        return !!event.touches;
      }
    }, {
      key: "_bindEvents",
      value: function _bindEvents() {
        this.settings.el.addEventListener("mouseenter", this._handleEntry, false);
        this.settings.el.addEventListener("mouseleave", this._hide, false);
        this.settings.el.addEventListener("mousemove", this._handleMovement, false);

        if (this.settings.handleTouch) {
          this.settings.el.addEventListener("touchstart", this._handleEntry, false);
          this.settings.el.addEventListener("touchend", this._hide, false);
          this.settings.el.addEventListener("touchmove", this._handleMovement, false);
        } else {
          this.settings.el.addEventListener("touchstart", this._preventDefault, false);
          this.settings.el.addEventListener("touchend", this._preventDefault, false);
          this.settings.el.addEventListener("touchmove", this._preventDefault, false);
        }
      }
    }, {
      key: "_unbindEvents",
      value: function _unbindEvents() {
        this.settings.el.removeEventListener("mouseenter", this._handleEntry, false);
        this.settings.el.removeEventListener("mouseleave", this._hide, false);
        this.settings.el.removeEventListener("mousemove", this._handleMovement, false);

        if (this.settings.handleTouch) {
          this.settings.el.removeEventListener("touchstart", this._handleEntry, false);
          this.settings.el.removeEventListener("touchend", this._hide, false);
          this.settings.el.removeEventListener("touchmove", this._handleMovement, false);
        } else {
          this.settings.el.removeEventListener("touchstart", this._preventDefault, false);
          this.settings.el.removeEventListener("touchend", this._preventDefault, false);
          this.settings.el.removeEventListener("touchmove", this._preventDefault, false);
        }
      }
    }, {
      key: "_handleEntry",
      value: function _handleEntry(e) {
        this._preventDefaultAllowTouchScroll(e);

        this._lastMovement = e;

        if (e.type == "mouseenter" && this.settings.hoverDelay) {
          this.entryTimeout = setTimeout(this._show, this.settings.hoverDelay);
        } else if (this.settings.touchDelay) {
          this.entryTimeout = setTimeout(this._show, this.settings.touchDelay);
        } else {
          this._show();
        }
      }
    }, {
      key: "_show",
      value: function _show() {
        if (!this.enabled) {
          return;
        }

        var onShow = this.settings.onShow;

        if (onShow && typeof onShow === "function") {
          onShow();
        }

        this.settings.zoomPane.show(this.settings.el.getAttribute(this.settings.sourceAttribute), this.settings.el.clientWidth, this.settings.el.clientHeight);

        if (this._lastMovement) {
          var touchActivated = this._lastMovement.touches;

          if (touchActivated && this.settings.touchBoundingBox || !touchActivated && this.settings.hoverBoundingBox) {
            this.boundingBox.show(this.settings.zoomPane.el.clientWidth, this.settings.zoomPane.el.clientHeight);
          }
        }

        this._handleMovement();
      }
    }, {
      key: "_hide",
      value: function _hide(e) {
        if (e) {
          this._preventDefaultAllowTouchScroll(e);
        }

        this._lastMovement = null;

        if (this.entryTimeout) {
          clearTimeout(this.entryTimeout);
        }

        if (this.boundingBox) {
          this.boundingBox.hide();
        }

        var onHide = this.settings.onHide;

        if (onHide && typeof onHide === "function") {
          onHide();
        }

        this.settings.zoomPane.hide();
      }
    }, {
      key: "_handleMovement",
      value: function _handleMovement(e) {
        if (e) {
          this._preventDefaultAllowTouchScroll(e);

          this._lastMovement = e;
        } else if (this._lastMovement) {
          e = this._lastMovement;
        } else {
          return;
        }

        var movementX;
        var movementY;

        if (e.touches) {
          var firstTouch = e.touches[0];
          movementX = firstTouch.clientX;
          movementY = firstTouch.clientY;
        } else {
          movementX = e.clientX;
          movementY = e.clientY;
        }

        var el = this.settings.el;
        var rect = el.getBoundingClientRect();
        var offsetX = movementX - rect.left;
        var offsetY = movementY - rect.top;
        var percentageOffsetX = offsetX / this.settings.el.clientWidth;
        var percentageOffsetY = offsetY / this.settings.el.clientHeight;

        if (this.boundingBox) {
          this.boundingBox.setPosition(percentageOffsetX, percentageOffsetY, rect);
        }

        this.settings.zoomPane.setPosition(percentageOffsetX, percentageOffsetY, rect);
      }
    }, {
      key: "isShowing",
      get: function get() {
        return this.settings.zoomPane.isShowing;
      }
    }]);

    return Trigger;
  }();

  function _classCallCheck$3(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties$3(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass$3(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$3(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$3(Constructor, staticProps);
    return Constructor;
  }
  // account for, just in case.

  var divStyle = document.createElement("div").style;
  var HAS_ANIMATION = typeof document === "undefined" ? false : "animation" in divStyle || "webkitAnimation" in divStyle;

  var ZoomPane = /*#__PURE__*/function () {
    function ZoomPane() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck$3(this, ZoomPane);

      this._completeShow = this._completeShow.bind(this);
      this._completeHide = this._completeHide.bind(this);
      this._handleLoad = this._handleLoad.bind(this);
      this.isShowing = false;
      var _options$container = options.container,
          container = _options$container === void 0 ? null : _options$container,
          _options$zoomFactor = options.zoomFactor,
          zoomFactor = _options$zoomFactor === void 0 ? throwIfMissing() : _options$zoomFactor,
          _options$inline = options.inline,
          inline = _options$inline === void 0 ? throwIfMissing() : _options$inline,
          _options$namespace = options.namespace,
          namespace = _options$namespace === void 0 ? null : _options$namespace,
          _options$showWhitespa = options.showWhitespaceAtEdges,
          showWhitespaceAtEdges = _options$showWhitespa === void 0 ? throwIfMissing() : _options$showWhitespa,
          _options$containInlin = options.containInline,
          containInline = _options$containInlin === void 0 ? throwIfMissing() : _options$containInlin,
          _options$inlineOffset = options.inlineOffsetX,
          inlineOffsetX = _options$inlineOffset === void 0 ? 0 : _options$inlineOffset,
          _options$inlineOffset2 = options.inlineOffsetY,
          inlineOffsetY = _options$inlineOffset2 === void 0 ? 0 : _options$inlineOffset2,
          _options$inlineContai = options.inlineContainer,
          inlineContainer = _options$inlineContai === void 0 ? document.body : _options$inlineContai;
      this.settings = {
        container: container,
        zoomFactor: zoomFactor,
        inline: inline,
        namespace: namespace,
        showWhitespaceAtEdges: showWhitespaceAtEdges,
        containInline: containInline,
        inlineOffsetX: inlineOffsetX,
        inlineOffsetY: inlineOffsetY,
        inlineContainer: inlineContainer
      };
      this.openClasses = this._buildClasses("open");
      this.openingClasses = this._buildClasses("opening");
      this.closingClasses = this._buildClasses("closing");
      this.inlineClasses = this._buildClasses("inline");
      this.loadingClasses = this._buildClasses("loading");

      this._buildElement();
    }

    _createClass$3(ZoomPane, [{
      key: "_buildClasses",
      value: function _buildClasses(suffix) {
        var classes = ["drift-".concat(suffix)];
        var ns = this.settings.namespace;

        if (ns) {
          classes.push("".concat(ns, "-").concat(suffix));
        }

        return classes;
      }
    }, {
      key: "_buildElement",
      value: function _buildElement() {
        this.el = document.createElement("div");
        addClasses(this.el, this._buildClasses("zoom-pane"));
        var loaderEl = document.createElement("div");
        addClasses(loaderEl, this._buildClasses("zoom-pane-loader"));
        this.el.appendChild(loaderEl);
        this.imgEl = document.createElement("img");
        this.el.appendChild(this.imgEl);
      }
    }, {
      key: "_setImageURL",
      value: function _setImageURL(imageURL) {
        this.imgEl.setAttribute("src", imageURL);
      }
    }, {
      key: "_setImageSize",
      value: function _setImageSize(triggerWidth, triggerHeight) {
        this.imgEl.style.width = "".concat(triggerWidth * this.settings.zoomFactor, "px");
        this.imgEl.style.height = "".concat(triggerHeight * this.settings.zoomFactor, "px");
      } // `percentageOffsetX` and `percentageOffsetY` must be percentages
      // expressed as floats between `0' and `1`.

    }, {
      key: "setPosition",
      value: function setPosition(percentageOffsetX, percentageOffsetY, triggerRect) {
        var imgElWidth = this.imgEl.offsetWidth;
        var imgElHeight = this.imgEl.offsetHeight;
        var elWidth = this.el.offsetWidth;
        var elHeight = this.el.offsetHeight;
        var centreOfContainerX = elWidth / 2;
        var centreOfContainerY = elHeight / 2;
        var targetImgXToBeCentre = imgElWidth * percentageOffsetX;
        var targetImgYToBeCentre = imgElHeight * percentageOffsetY;
        var left = centreOfContainerX - targetImgXToBeCentre;
        var top = centreOfContainerY - targetImgYToBeCentre;
        var differenceBetweenContainerWidthAndImgWidth = elWidth - imgElWidth;
        var differenceBetweenContainerHeightAndImgHeight = elHeight - imgElHeight;
        var isContainerLargerThanImgX = differenceBetweenContainerWidthAndImgWidth > 0;
        var isContainerLargerThanImgY = differenceBetweenContainerHeightAndImgHeight > 0;
        var minLeft = isContainerLargerThanImgX ? differenceBetweenContainerWidthAndImgWidth / 2 : 0;
        var minTop = isContainerLargerThanImgY ? differenceBetweenContainerHeightAndImgHeight / 2 : 0;
        var maxLeft = isContainerLargerThanImgX ? differenceBetweenContainerWidthAndImgWidth / 2 : differenceBetweenContainerWidthAndImgWidth;
        var maxTop = isContainerLargerThanImgY ? differenceBetweenContainerHeightAndImgHeight / 2 : differenceBetweenContainerHeightAndImgHeight;

        if (this.el.parentElement === this.settings.inlineContainer) {
          // This may be needed in the future to deal with browser event
          // inconsistencies, but it's difficult to tell for sure.
          // let scrollX = isTouch ? 0 : window.scrollX;
          // let scrollY = isTouch ? 0 : window.scrollY;
          var scrollX = window.pageXOffset;
          var scrollY = window.pageYOffset;
          var inlineLeft = triggerRect.left + percentageOffsetX * triggerRect.width - elWidth / 2 + this.settings.inlineOffsetX + scrollX;
          var inlineTop = triggerRect.top + percentageOffsetY * triggerRect.height - elHeight / 2 + this.settings.inlineOffsetY + scrollY;

          if (this.settings.containInline) {
            if (inlineLeft < triggerRect.left + scrollX) {
              inlineLeft = triggerRect.left + scrollX;
            } else if (inlineLeft + elWidth > triggerRect.left + triggerRect.width + scrollX) {
              inlineLeft = triggerRect.left + triggerRect.width - elWidth + scrollX;
            }

            if (inlineTop < triggerRect.top + scrollY) {
              inlineTop = triggerRect.top + scrollY;
            } else if (inlineTop + elHeight > triggerRect.top + triggerRect.height + scrollY) {
              inlineTop = triggerRect.top + triggerRect.height - elHeight + scrollY;
            }
          }

          this.el.style.left = "".concat(inlineLeft, "px");
          this.el.style.top = "".concat(inlineTop, "px");
        }

        if (!this.settings.showWhitespaceAtEdges) {
          if (left > minLeft) {
            left = minLeft;
          } else if (left < maxLeft) {
            left = maxLeft;
          }

          if (top > minTop) {
            top = minTop;
          } else if (top < maxTop) {
            top = maxTop;
          }
        }

        this.imgEl.style.transform = "translate(".concat(left, "px, ").concat(top, "px)");
        this.imgEl.style.webkitTransform = "translate(".concat(left, "px, ").concat(top, "px)");
      }
    }, {
      key: "_removeListenersAndResetClasses",
      value: function _removeListenersAndResetClasses() {
        this.el.removeEventListener("animationend", this._completeShow, false);
        this.el.removeEventListener("animationend", this._completeHide, false);
        this.el.removeEventListener("webkitAnimationEnd", this._completeShow, false);
        this.el.removeEventListener("webkitAnimationEnd", this._completeHide, false);
        removeClasses(this.el, this.openClasses);
        removeClasses(this.el, this.closingClasses);
      }
    }, {
      key: "show",
      value: function show(imageURL, triggerWidth, triggerHeight) {
        this._removeListenersAndResetClasses();

        this.isShowing = true;
        addClasses(this.el, this.openClasses);

        if (this.imgEl.getAttribute("src") != imageURL) {
          addClasses(this.el, this.loadingClasses);
          this.imgEl.addEventListener("load", this._handleLoad, false);

          this._setImageURL(imageURL);
        }

        this._setImageSize(triggerWidth, triggerHeight);

        if (this._isInline) {
          this._showInline();
        } else {
          this._showInContainer();
        }

        if (HAS_ANIMATION) {
          this.el.addEventListener("animationend", this._completeShow, false);
          this.el.addEventListener("webkitAnimationEnd", this._completeShow, false);
          addClasses(this.el, this.openingClasses);
        }
      }
    }, {
      key: "_showInline",
      value: function _showInline() {
        this.settings.inlineContainer.appendChild(this.el);
        addClasses(this.el, this.inlineClasses);
      }
    }, {
      key: "_showInContainer",
      value: function _showInContainer() {
        this.settings.container.appendChild(this.el);
      }
    }, {
      key: "hide",
      value: function hide() {
        this._removeListenersAndResetClasses();

        this.isShowing = false;

        if (HAS_ANIMATION) {
          this.el.addEventListener("animationend", this._completeHide, false);
          this.el.addEventListener("webkitAnimationEnd", this._completeHide, false);
          addClasses(this.el, this.closingClasses);
        } else {
          removeClasses(this.el, this.openClasses);
          removeClasses(this.el, this.inlineClasses);
        }
      }
    }, {
      key: "_completeShow",
      value: function _completeShow() {
        this.el.removeEventListener("animationend", this._completeShow, false);
        this.el.removeEventListener("webkitAnimationEnd", this._completeShow, false);
        removeClasses(this.el, this.openingClasses);
      }
    }, {
      key: "_completeHide",
      value: function _completeHide() {
        this.el.removeEventListener("animationend", this._completeHide, false);
        this.el.removeEventListener("webkitAnimationEnd", this._completeHide, false);
        removeClasses(this.el, this.openClasses);
        removeClasses(this.el, this.closingClasses);
        removeClasses(this.el, this.inlineClasses);
        this.el.setAttribute("style", ""); // The window could have been resized above or below `inline`
        // limits since the ZoomPane was shown. Because of this, we
        // can't rely on `this._isInline` here.

        if (this.el.parentElement === this.settings.container) {
          this.settings.container.removeChild(this.el);
        } else if (this.el.parentElement === this.settings.inlineContainer) {
          this.settings.inlineContainer.removeChild(this.el);
        }
      }
    }, {
      key: "_handleLoad",
      value: function _handleLoad() {
        this.imgEl.removeEventListener("load", this._handleLoad, false);
        removeClasses(this.el, this.loadingClasses);
      }
    }, {
      key: "_isInline",
      get: function get() {
        var inline = this.settings.inline;
        return inline === true || typeof inline === "number" && window.innerWidth <= inline;
      }
    }]);

    return ZoomPane;
  }();

  function _classCallCheck$4(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties$4(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass$4(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$4(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$4(Constructor, staticProps);
    return Constructor;
  }

  var Drift = /*#__PURE__*/function () {
    function Drift(triggerEl) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck$4(this, Drift);

      this.VERSION = "1.4.0";
      this.triggerEl = triggerEl;
      this.destroy = this.destroy.bind(this);

      if (!isDOMElement(this.triggerEl)) {
        throw new TypeError("`new Drift` requires a DOM element as its first argument.");
      } // Prefix for generated element class names (e.g. `my-ns` will
      // result in classes such as `my-ns-pane`. Default `drift-`
      // prefixed classes will always be added as well.


      var namespace = options["namespace"] || null; // Whether the ZoomPane should show whitespace when near the edges.

      var showWhitespaceAtEdges = options["showWhitespaceAtEdges"] || false; // Whether the inline ZoomPane should stay inside
      // the bounds of its image.

      var containInline = options["containInline"] || false; // How much to offset the ZoomPane from the
      // interaction point when inline.

      var inlineOffsetX = options["inlineOffsetX"] || 0;
      var inlineOffsetY = options["inlineOffsetY"] || 0; // A DOM element to append the inline ZoomPane to

      var inlineContainer = options["inlineContainer"] || document.body; // Which trigger attribute to pull the ZoomPane image source from.

      var sourceAttribute = options["sourceAttribute"] || "data-zoom"; // How much to magnify the trigger by in the ZoomPane.
      // (e.g., `zoomFactor: 3` will result in a 900 px wide ZoomPane imag
      // if the trigger is displayed at 300 px wide)

      var zoomFactor = options["zoomFactor"] || 3; // A DOM element to append the non-inline ZoomPane to.
      // Required if `inlinePane !== true`.

      var paneContainer = options["paneContainer"] === undefined ? document.body : options["paneContainer"]; // When to switch to an inline ZoomPane. This can be a boolean or
      // an integer. If `true`, the ZoomPane will always be inline,
      // if `false`, it will switch to inline when `windowWidth <= inlinePane`

      var inlinePane = options["inlinePane"] || 375; // If `true`, touch events will trigger the zoom, like mouse events.

      var handleTouch = "handleTouch" in options ? !!options["handleTouch"] : true; // If present (and a function), this will be called
      // whenever the ZoomPane is shown.

      var onShow = options["onShow"] || null; // If present (and a function), this will be called
      // whenever the ZoomPane is hidden.

      var onHide = options["onHide"] || null; // Add base styles to the page. See the "Theming"
      // section of README.md for more information.

      var injectBaseStyles = "injectBaseStyles" in options ? !!options["injectBaseStyles"] : true; // An optional number that determines how long to wait before
      // showing the ZoomPane because of a `mouseenter` event.

      var hoverDelay = options["hoverDelay"] || 0; // An optional number that determines how long to wait before
      // showing the ZoomPane because of a `touchstart` event.
      // It's unlikely that you would want to use this option, since
      // "tap and hold" is much more intentional than a hover event.

      var touchDelay = options["touchDelay"] || 0; // If true, a bounding box will show the area currently being previewed
      // during mouse hover

      var hoverBoundingBox = options["hoverBoundingBox"] || false; // If true, a bounding box will show the area currently being previewed
      // during touch events

      var touchBoundingBox = options["touchBoundingBox"] || false; // A DOM element to append the bounding box to.

      var boundingBoxContainer = options["boundingBoxContainer"] || document.body;

      if (inlinePane !== true && !isDOMElement(paneContainer)) {
        throw new TypeError("`paneContainer` must be a DOM element when `inlinePane !== true`");
      }

      if (!isDOMElement(inlineContainer)) {
        throw new TypeError("`inlineContainer` must be a DOM element");
      }

      this.settings = {
        namespace: namespace,
        showWhitespaceAtEdges: showWhitespaceAtEdges,
        containInline: containInline,
        inlineOffsetX: inlineOffsetX,
        inlineOffsetY: inlineOffsetY,
        inlineContainer: inlineContainer,
        sourceAttribute: sourceAttribute,
        zoomFactor: zoomFactor,
        paneContainer: paneContainer,
        inlinePane: inlinePane,
        handleTouch: handleTouch,
        onShow: onShow,
        onHide: onHide,
        injectBaseStyles: injectBaseStyles,
        hoverDelay: hoverDelay,
        touchDelay: touchDelay,
        hoverBoundingBox: hoverBoundingBox,
        touchBoundingBox: touchBoundingBox,
        boundingBoxContainer: boundingBoxContainer
      };

      if (this.settings.injectBaseStyles) {
        injectBaseStylesheet();
      }

      this._buildZoomPane();

      this._buildTrigger();
    }

    _createClass$4(Drift, [{
      key: "_buildZoomPane",
      value: function _buildZoomPane() {
        this.zoomPane = new ZoomPane({
          container: this.settings.paneContainer,
          zoomFactor: this.settings.zoomFactor,
          showWhitespaceAtEdges: this.settings.showWhitespaceAtEdges,
          containInline: this.settings.containInline,
          inline: this.settings.inlinePane,
          namespace: this.settings.namespace,
          inlineOffsetX: this.settings.inlineOffsetX,
          inlineOffsetY: this.settings.inlineOffsetY,
          inlineContainer: this.settings.inlineContainer
        });
      }
    }, {
      key: "_buildTrigger",
      value: function _buildTrigger() {
        this.trigger = new Trigger({
          el: this.triggerEl,
          zoomPane: this.zoomPane,
          handleTouch: this.settings.handleTouch,
          onShow: this.settings.onShow,
          onHide: this.settings.onHide,
          sourceAttribute: this.settings.sourceAttribute,
          hoverDelay: this.settings.hoverDelay,
          touchDelay: this.settings.touchDelay,
          hoverBoundingBox: this.settings.hoverBoundingBox,
          touchBoundingBox: this.settings.touchBoundingBox,
          namespace: this.settings.namespace,
          zoomFactor: this.settings.zoomFactor,
          boundingBoxContainer: this.settings.boundingBoxContainer
        });
      }
    }, {
      key: "setZoomImageURL",
      value: function setZoomImageURL(imageURL) {
        this.zoomPane._setImageURL(imageURL);
      }
    }, {
      key: "disable",
      value: function disable() {
        this.trigger.enabled = false;
      }
    }, {
      key: "enable",
      value: function enable() {
        this.trigger.enabled = true;
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.trigger._hide();

        this.trigger._unbindEvents();
      }
    }, {
      key: "isShowing",
      get: function get() {
        return this.zoomPane.isShowing;
      }
    }, {
      key: "zoomFactor",
      get: function get() {
        return this.settings.zoomFactor;
      },
      set: function set(zf) {
        this.settings.zoomFactor = zf;
        this.zoomPane.settings.zoomFactor = zf;
        this.trigger.settings.zoomFactor = zf;
        this.boundingBox.settings.zoomFactor = zf;
      }
    }]);

    return Drift;
  }(); // Public API
  Object.defineProperty(Drift.prototype, "isShowing", {
    get: function get() {
      return this.isShowing;
    }
  });
  Object.defineProperty(Drift.prototype, "zoomFactor", {
    get: function get() {
      return this.zoomFactor;
    },
    set: function set(value) {
      this.zoomFactor = value;
    }
  });
  Drift.prototype["setZoomImageURL"] = Drift.prototype.setZoomImageURL;
  Drift.prototype["disable"] = Drift.prototype.disable;
  Drift.prototype["enable"] = Drift.prototype.enable;
  Drift.prototype["destroy"] = Drift.prototype.destroy;
  /* eslint-enable no-self-assign */

  var ProductGallery = /*#__PURE__*/function () {
    function ProductGallery(element, options) {
      _classCallCheck(this, ProductGallery);

      this.element = element;
      this.delegateElement = new Delegate(this.element);
      this.viewInSpaceElement = this.element.querySelector('[data-shopify-xr]');
      this.options = options; // The media property will hold all the media manages by the gallery so we can easily turn them off. They are
      // indexed by the media ID

      this.media = {};
      this.previouslySelectedMedia = null;

      this._createCarousel();

      this._createZoom();

      this._attachListeners();
    }

    _createClass(ProductGallery, [{
      key: "destroy",
      value: function destroy() {
        if (this.flickityInstance) {
          this.flickityInstance.destroy();
        }

        for (var mediaId in this.media) {
          if (this.media.hasOwnProperty(mediaId)) {
            this.media[mediaId].destroy();
          }
        }
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        var _this = this;

        this.delegateElement.on('model:played', this._disableDrag.bind(this));
        this.delegateElement.on('video:played', this._disableDrag.bind(this));
        this.delegateElement.on('model:paused', this._enableDrag.bind(this));
        this.delegateElement.on('video:paused', this._enableDrag.bind(this));

        if (this.options['enableImageZoom']) {
          window.addEventListener('resize', this._handleZoomForMediaQuery.bind(this));
          this.delegateElement.on('click', '.product-gallery__image', this._openMobileZoom.bind(this));
          this.delegateElement.on('click', '.pswp__button', this._doPswpAction.bind(this));
        }

        var lastWidth = window.innerWidth;
        window.addEventListener('resize', function () {
          if (window.innerWidth !== lastWidth && _this.flickityInstance) {
            _this.flickityInstance.resize();

            lastWidth = window.innerWidth;
          }
        });
      }
      /**
       * This method must be called whenever the variant is changed
       */

    }, {
      key: "variantHasChanged",
      value: function variantHasChanged(newVariant) {
        var _this2 = this;

        // We may have selected a variant that will cause the set of images to change completely. To do that we need to iterate through all images,
        // check for the attribute "data-group-name" and verify if some images need to be filtered or not
        var shouldReload = false;
        fastdom.mutate(function () {
          _this2.productGalleryCellsElements.forEach(function (cell, imageIndex) {
            if (cell.hasAttribute('data-group-name')) {
              // If it has an attribute, we get the group name, and match it against the option
              var groupName = cell.getAttribute('data-group-name');

              _this2.options['productOptions'].forEach(function (option, optionIndex) {
                if (option.toLowerCase() === groupName) {
                  // groupName from attribute is already lowercased in Liquid
                  // Now we compare the value: if it's the same or that the image is part of the variant we keep it, otherwise we filter it
                  if (newVariant["option".concat(optionIndex + 1)].toLowerCase() === cell.getAttribute('data-group-value') || newVariant['featured_media'] && newVariant['featured_media']['id'] === parseInt(cell.getAttribute('data-media-id'))) {
                    cell.classList.remove('is-filtered');

                    _this2.productThumbnailsCellsElements[imageIndex].classList.remove('is-filtered');
                  } else {
                    cell.classList.add('is-filtered');

                    _this2.productThumbnailsCellsElements[imageIndex].classList.add('is-filtered');
                  }
                }
              });

              shouldReload = true;
            }
          });

          if (shouldReload) {
            _this2.flickityInstance.deactivate();

            _this2.flickityInstance.activate();
          }

          if (Responsive.matchesBreakpoint('lap-and-up')) {
            var slides = _this2.element.querySelectorAll('.product-gallery__carousel-item');

            slides.forEach(function (slide) {
              slide.classList.remove('product-gallery__carousel-item--hidden');
            });
          }

          if (_this2.flickityInstance && newVariant && newVariant['featured_media']) {
            _this2.flickityInstance.selectCell("[data-media-id=\"".concat(newVariant['featured_media']['id'], "\"]"));
          }
        });
      }
    }, {
      key: "_createCarousel",
      value: function _createCarousel() {
        var _this3 = this;

        this.productGalleryElement = this.element.querySelector('.product-gallery__carousel');
        this.productGalleryCellsElements = this.productGalleryElement ? this.productGalleryElement.querySelectorAll('.product-gallery__carousel-item') : [];

        if (this.productGalleryElement) {
          // We need to create a list of media (for now we only handle video and model a bit differently)
          this.productGalleryCellsElements.forEach(function (item) {
            switch (item.getAttribute('data-media-type')) {
              case 'external_video':
              case 'video':
                _this3.media[item.getAttribute('data-media-id')] = new ProductVideo(item, _this3.options['enableVideoLooping']);
                break;

              case 'model':
                _this3.media[item.getAttribute('data-media-id')] = new ProductModel(item);
                break;
            }
          });

          if (parseInt(this.productGalleryElement.getAttribute('data-media-count')) > 1) {
            // Due to the fact that some images may be filtered, we have to do additional logic to compute the initial index
            var filteredCells = [].slice.call(this.productGalleryCellsElements).filter(function (item) {
              return !item.classList.contains('is-filtered');
            });
            var initialIndex = 0;
            filteredCells.forEach(function (item, index) {
              if (item.getAttribute('data-media-id') === _this3.productGalleryElement.getAttribute('data-initial-media-id')) {
                initialIndex = index;
              }
            }); // For some reason (and I have spent hours trying to understand), Flickity set a zero height at start, before
            // replacing it with the correct height. Unfortunately this cause the carousel to jump, which is detrimental
            // to both user experience and PageSpeed score. As a consequence, I am pre-setting the height

            var firstSlide = filteredCells[initialIndex];
            firstSlide.classList.add('is-selected');
            this.productGalleryElement.style.height = "".concat(firstSlide.clientHeight, "px");
            this.flickityInstance = new flickityFade(this.productGalleryElement, {
              accessibility: false,
              prevNextButtons: false,
              pageDots: false,
              resize: false,
              adaptiveHeight: true,
              draggable: !Responsive.matchesBreakpoint('supports-hover'),
              fade: this.options['galleryTransitionEffect'] === 'fade',
              cellSelector: '.product-gallery__carousel-item:not(.is-filtered)',
              initialIndex: initialIndex,
              on: {
                ready: function ready() {
                  // Remove the pre-set height (that was used to pre-allocate the space) so that it can react properly to
                  // changes of height.
                  setTimeout(function () {
                    _this3.productGalleryElement.style.height = null;
                  }, 1000);
                }
              }
            });
          }
        } // If there are thumbnails, we need to synchronize the thumbnails


        this.productThumbnailsListElement = this.element.querySelector('.product-gallery__thumbnail-list');
        this.delegateElement.on('click', '.product-gallery__thumbnail', this._onThumbnailClicked.bind(this));

        if (this.productThumbnailsListElement && this.flickityInstance) {
          this.productThumbnailsCellsElements = this.productThumbnailsListElement.querySelectorAll('.product-gallery__thumbnail');
          this.flickityInstance.on('select', this._onGallerySlideChanged.bind(this));

          if (this.options['galleryTransitionEffect'] === 'fade') {
            this.flickityInstance.on('select', this._onGallerySlideSettled.bind(this));
          } else {
            this.flickityInstance.on('settle', this._onGallerySlideSettled.bind(this));
          }

          this._onGallerySlideChanged(false); // We call it once initially to force adjust the thumbnails


          this._onGallerySlideSettled();
        }
      }
    }, {
      key: "_createZoom",
      value: function _createZoom() {
        var _this4 = this;

        if (!this.options['enableImageZoom']) {
          return;
        } // On desktop, we uses Drift to power the zoom


        if (Responsive.matchesBreakpoint('lap-and-up')) {
          this.driftObjects = [];
          var zoomWrapper = this.element.querySelector('.product__zoom-wrapper');
          this.element.querySelectorAll('.product-gallery__image').forEach(function (image) {
            _this4.driftObjects.push(new Drift(image, {
              containInline: _this4.options['zoomEffect'] === 'outside',
              inlinePane: window.innerWidth < 1024 ? true : _this4.options['zoomEffect'] !== 'outside',
              hoverBoundingBox: _this4.options['zoomEffect'] === 'outside',
              handleTouch: false,
              inlineOffsetY: window.innerWidth < 1024 ? -85 : 0,
              paneContainer: zoomWrapper
            }));
          });
        }
      }
    }, {
      key: "_openMobileZoom",
      value: function _openMobileZoom() {
        var _this5 = this;

        // On mobile, we use instead PhotoSwipe
        var pswpElement = this.element.querySelector('.pswp');

        if (!pswpElement || !Responsive.matchesBreakpoint('pocket')) {
          return;
        }

        var filteredItems = this.element.querySelectorAll('.product-gallery__carousel-item:not(.is-filtered)[data-media-type="image"]'),
            defaultIndex = 0,
            items = [];
        filteredItems.forEach(function (filteredItem, index) {
          var image = filteredItem.querySelector('.product-gallery__image');
          items.push({
            src: image.getAttribute('data-zoom'),
            w: parseInt(image.getAttribute('data-zoom-width')),
            h: parseInt(image.getAttribute('data-zoom-width')) * (image.height / image.width),
            msrc: image.currentSrc
          });

          if (filteredItem.classList.contains('is-selected')) {
            defaultIndex = index;
          }
        });
        var prevNextElement = pswpElement.querySelector('.pswp__prev-next');
        prevNextElement.style.display = items.length > 1 ? 'flex' : 'none'; // Initializes and opens PhotoSwipe
        // Initializes and opens PhotoSwipe

        this.photoSwipeInstance = new photoswipe(pswpElement, false, items, {
          index: defaultIndex,
          closeOnVerticalDrag: false,
          closeOnScroll: false,
          history: false,
          showHideOpacity: true,
          pinchToClose: false,
          maxSpreadZoom: 1,
          showAnimationDuration: false,
          allowPanToNext: false
        }); // We need to patch PhotoSwipe update size to solve iOS 15 issue

        var originalUpdateSize = this.photoSwipeInstance.updateSize,
            lastWidth = null;

        this.photoSwipeInstance.updateSize = function () {
          if (lastWidth === null || lastWidth !== window.innerWidth) {
            originalUpdateSize(this, arguments);
          }

          lastWidth = window.innerWidth;
        };

        this.photoSwipeInstance.listen('destroy', function () {
          _this5.photoSwipeInstance = null;
        });
        this.photoSwipeInstance.listen('beforeChange', function () {
          var currentItem = _this5.element.querySelector('.pswp__pagination-current'),
              paginationCount = _this5.element.querySelector('.pswp__pagination-count');

          currentItem.textContent = _this5.photoSwipeInstance.getCurrentIndex() + 1;
          paginationCount.textContent = _this5.photoSwipeInstance.options.getNumItemsFn();
        });
        this.photoSwipeInstance.init();
      }
    }, {
      key: "_doPswpAction",
      value: function _doPswpAction(event, element) {
        if (!this.photoSwipeInstance) {
          return;
        }

        if (element.classList.contains('pswp__button--close')) {
          this.photoSwipeInstance.close();
        } else if (element.classList.contains('pswp__button--arrow--left')) {
          this.photoSwipeInstance.prev();
        } else if (element.classList.contains('pswp__button--arrow--right')) {
          this.photoSwipeInstance.next();
        }
      }
    }, {
      key: "_handleZoomForMediaQuery",
      value: function _handleZoomForMediaQuery() {
        if (Responsive.matchesBreakpoint('lap-and-up') && this.photoSwipeInstance) {
          this.photoSwipeInstance.close();
          this.photoSwipeInstance = null;
        }
      }
    }, {
      key: "_onGallerySlideChanged",
      value: function _onGallerySlideChanged() {
        var _this6 = this;

        var animate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var previousNavElement = null,
            newNavElement = null;
        this.productThumbnailsCellsElements.forEach(function (item) {
          if (item.classList.contains('is-nav-selected')) {
            previousNavElement = item;
          }

          if (item.getAttribute('data-media-id') === _this6.flickityInstance.selectedElement.getAttribute('data-media-id')) {
            newNavElement = item;
          }
        });
        previousNavElement.classList.remove('is-nav-selected');
        newNavElement.classList.add('is-nav-selected'); // We animate to move the selected nav item

        if (Responsive.matchesBreakpoint('pocket')) {
          var scrollX = newNavElement.offsetLeft - (this.productThumbnailsListElement.parentNode.clientWidth - newNavElement.clientWidth) / 2;
          this.productThumbnailsListElement.parentNode.scrollTo({
            left: scrollX,
            behavior: animate ? 'smooth' : 'auto'
          });
        } else {
          var scrollY = newNavElement.offsetTop - (this.productThumbnailsListElement.clientHeight - newNavElement.clientHeight) / 2;
          this.productThumbnailsListElement.scrollTo({
            top: scrollY,
            behavior: animate ? 'smooth' : 'auto'
          });
        }
      }
      /**
       * The difference with "change" is that this function is called after the item has transitioned
       */

    }, {
      key: "_onGallerySlideSettled",
      value: function _onGallerySlideSettled() {
        this._handleMedia(this.flickityInstance.selectedElement);

        if (Responsive.matchesBreakpoint('lap-and-up')) {
          var slides = this.element.querySelectorAll('.product-gallery__carousel-item:not(.is-selected)');
          slides.forEach(function (slide) {
            slide.classList.add('product-gallery__carousel-item--hidden');
          });
        }
      }
    }, {
      key: "_onThumbnailClicked",
      value: function _onThumbnailClicked(event, target) {
        event.preventDefault();

        if (this.flickityInstance) {
          this.flickityInstance.selectCell("[data-media-id=\"".concat(target.getAttribute('data-media-id'), "\"]"));

          if (Responsive.matchesBreakpoint('lap-and-up')) {
            var slides = this.element.querySelectorAll('.product-gallery__carousel-item');
            slides.forEach(function (slide) {
              slide.classList.remove('product-gallery__carousel-item--hidden');
            });
          }
        }
      }
    }, {
      key: "_disableDrag",
      value: function _disableDrag() {
        this.flickityInstance.options.draggable = false;
        this.flickityInstance.updateDraggable();
      }
    }, {
      key: "_enableDrag",
      value: function _enableDrag() {
        this.flickityInstance.options.draggable = !Responsive.matchesBreakpoint('supports-hover');
        this.flickityInstance.updateDraggable();
      }
      /**
       * This method will handle the given media (for now model and video) to do the appropriate actions (such as launching
       * a video for instance)
       */

    }, {
      key: "_handleMedia",
      value: function _handleMedia(item) {
        var isInitialLoading = this.previouslySelectedMedia === null; // First, we need to turn off the previous media (if any)

        if (this.previouslySelectedMedia && this.previouslySelectedMedia !== item) {
          switch (this.previouslySelectedMedia.getAttribute('data-media-type')) {
            case 'video':
            case 'external_video':
            case 'model':
              this.media[this.previouslySelectedMedia.getAttribute('data-media-id')].hasBeenDeselected();
          } // If the previous media was a model, we need to adjust the "view in space" button to go back to initial value


          if (this.previouslySelectedMedia.getAttribute('data-media-type') === 'model' && this.viewInSpaceElement) {
            this.viewInSpaceElement.setAttribute('data-shopify-model3d-id', this.viewInSpaceElement.getAttribute('data-shopify-model3d-default-id'));
          }
        } // Then, we have to handle the currently selected media


        switch (item.getAttribute('data-media-type')) {
          case 'video':
          case 'external_video':
          case 'model':
            this.media[item.getAttribute('data-media-id')].hasBeenSelected(isInitialLoading);
            this.element.querySelector('.product-gallery__carousel').classList.remove('product-gallery__carousel--zoomable');
            break;

          case 'image':
            this.element.querySelector('.product-gallery__carousel').classList.add('product-gallery__carousel--zoomable');
            break;
        } // If the media is a model, we need to adjust the "view in space" button


        if (item.getAttribute('data-media-type') === 'model' && this.viewInSpaceElement) {
          this.viewInSpaceElement.setAttribute('data-shopify-model3d-id', item.getAttribute('data-media-id'));
        } // We set the previously selected media to the currently new one, so that when it changes it can be properly accounted


        this.previouslySelectedMedia = item;
      }
    }]);

    return ProductGallery;
  }();

  var QuantityPicker = /*#__PURE__*/function () {
    function QuantityPicker(element) {
      _classCallCheck(this, QuantityPicker);

      if (!element) {
        return;
      }

      this.element = element;
      this.inputElement = this.element.querySelector('[name="quantity"]');
      this.delegateElement = new Delegate(this.element);

      this._attachListeners();
    }

    _createClass(QuantityPicker, [{
      key: "_attachListeners",
      value: function _attachListeners() {
        this.delegateElement.on('click', '[data-action="decrease-picker-quantity"]', this._onDecrease.bind(this));
        this.delegateElement.on('click', '[data-action="increase-picker-quantity"]', this._onIncrease.bind(this));
        this.delegateElement.on('keyup', this._onInputValueChanged.bind(this));
        this.delegateElement.on('focusout', this._onInputFocusOut.bind(this));
      }
    }, {
      key: "_onDecrease",
      value: function _onDecrease() {
        this.inputElement.value = Math.max(1, parseInt(this.inputElement.value) - 1);
      }
    }, {
      key: "_onIncrease",
      value: function _onIncrease() {
        this.inputElement.value = parseInt(this.inputElement.value) + 1;
      }
    }, {
      key: "_onInputValueChanged",
      value: function _onInputValueChanged(event) {
        var value = event.target.value;

        if (value !== '' && isNaN(value)) {
          event.target.value = Math.max(1, parseInt(value) || 1);
        }
      }
    }, {
      key: "_onInputFocusOut",
      value: function _onInputFocusOut(event) {
        event.target.value = Math.max(1, parseInt(event.target.value) || 1);
      }
    }]);

    return QuantityPicker;
  }();

  var ShippingEstimator = /*#__PURE__*/function () {
    function ShippingEstimator(element, options) {
      _classCallCheck(this, ShippingEstimator);

      this.element = element;
      this.delegateElement = new Delegate(this.element);
      this.options = options;
      this.countrySelector = new CountrySelector(this.element.querySelector('[name="country"]'), this.element.querySelector('[name="province"]'));

      this._attachListeners();
    }

    _createClass(ShippingEstimator, [{
      key: "destroy",
      value: function destroy() {
        this.delegateElement.off('click');
        this.countrySelector.destroy();
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this.delegateElement.on('click', '[data-action="estimate-shipping"]', this._fetchRates.bind(this));
      }
    }, {
      key: "_fetchRates",
      value: function _fetchRates() {
        document.dispatchEvent(new CustomEvent('theme:loading:start'));

        if (this.options['singleProduct']) {
          this._fetchRatesForProduct();
        } else {
          this._fetchRatesForCart();
        }
      }
    }, {
      key: "_fetchRatesForCart",
      value: function _fetchRatesForCart() {
        var _this = this;

        var country = this.element.querySelector('[name="country"]').value,
            province = this.element.querySelector('[name="province"]').value,
            zip = this.element.querySelector('[name="zip"]').value;
        fetch("".concat(window.routes.cartUrl, "/shipping_rates.json?shipping_address[zip]=").concat(zip, "&shipping_address[country]=").concat(country, "&shipping_address[province]=").concat(province), {
          credentials: 'same-origin',
          method: 'GET'
        }).then(function (response) {
          document.dispatchEvent(new CustomEvent('theme:loading:end'));
          response.json().then(function (result) {
            _this._formatResults(response.ok, result);
          });
        });
      }
      /**
       * Technique is coming from this website: https://freakdesign.com.au/blogs/news/get-shipping-estimates-on-a-product-page
       */

    }, {
      key: "_fetchRatesForProduct",
      value: function _fetchRatesForProduct() {
        var _this2 = this;

        // grab the current cookie for the cart and we store it
        var cartCookie = this._getCookie('cart'),
            tempCookieValue = 'temp-cart-cookie___' + Date.now() + parseInt(Math.random() * 1000),
            fakeCookieValue = 'fake-cart-cookie___' + Date.now() + parseInt(Math.random() * 1000); // if not found, make a new temp cookie


        if (!cartCookie) {
          this._updateCartCookie(tempCookieValue);

          cartCookie = this._getCookie('cart');
        } // if found but has a weird length, bail


        if (cartCookie.length < 32) {
          return;
        } // change the cookie value to a new 32 character value


        this._updateCartCookie(fakeCookieValue); // add the product to our fake cart


        var formElement = document.querySelector('form[action*="/cart/add"]');
        fetch("".concat(window.routes.cartAddUrl, ".js"), {
          body: JSON.stringify(Form.serialize(formElement)),
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest' // This is needed as currently there is a bug in Shopify that assumes this header

          },
          method: 'POST'
        }).then(function (response) {
          response.json().then(function () {
            var country = _this2.element.querySelector('[name="country"]').value,
                province = _this2.element.querySelector('[name="province"]').value,
                zip = _this2.element.querySelector('[name="zip"]').value;

            fetch("".concat(window.routes.cartUrl, "/shipping_rates.json?shipping_address[zip]=").concat(zip, "&shipping_address[country]=").concat(country, "&shipping_address[province]=").concat(province), {
              credentials: 'same-origin',
              method: 'GET'
            }).then(function (response) {
              document.dispatchEvent(new CustomEvent('theme:loading:end'));
              response.json().then(function (result) {
                _this2._formatResults(response.ok, result);
              });

              _this2._updateCartCookie(cartCookie); // We can restore the cookie

            })["catch"](function () {
              _this2._updateCartCookie(cartCookie);
            });
          })["catch"](function () {
            // We have error so we have to reset cookie
            _this2._updateCartCookie(cartCookie);

            document.dispatchEvent(new CustomEvent('theme:loading:end'));
          });
        });
      }
    }, {
      key: "_formatResults",
      value: function _formatResults(isOk, results) {
        var resultsElement = this.element.querySelector('.shipping-estimator__results');
        resultsElement.innerHTML = '';

        if (isOk) {
          var shippingRates = results['shipping_rates'];

          if (shippingRates.length === 0) {
            resultsElement.innerHTML = "<p>".concat(window.languages.shippingEstimatorNoResults, "</p>");
          } else {
            if (shippingRates.length === 1) {
              resultsElement.innerHTML = "<p>".concat(window.languages.shippingEstimatorOneResult, "</p>");
            } else {
              resultsElement.innerHTML = "<p>".concat(window.languages.shippingEstimatorMultipleResults.replace('{{count}}', shippingRates.length), "</p>");
            }

            var listRatesHtml = '';
            shippingRates.forEach(function (item) {
              listRatesHtml += "<li>".concat(item['name'], ": ").concat(Currency.formatMoney(parseInt(item['price'] * 100), window.theme.moneyFormat), "</li>");
            });
            resultsElement.innerHTML += "<ul>".concat(listRatesHtml, "</ul>");
          }
        } else {
          resultsElement.innerHTML = "<p>".concat(window.languages.shippingEstimatorErrors, "</p>");
          var errorHtml = '';
          Object.keys(results).forEach(function (key) {
            errorHtml += "<li class=\"alert__list-item\">".concat(key, " ").concat(results[key], "</li>");
          });
          resultsElement.innerHTML += "<ul>".concat(errorHtml, "</ul>");
        }

        resultsElement.style.display = 'block';
      }
    }, {
      key: "_getCookie",
      value: function _getCookie(name) {
        var value = "; ".concat(document.cookie),
            parts = value.split('; ' + name + '=');

        if (parts.length === 2) {
          return parts.pop().split(';').shift();
        }
      }
    }, {
      key: "_updateCartCookie",
      value: function _updateCartCookie(value) {
        var date = new Date();
        date.setTime(date.getTime() + 14 * 86400000);
        document.cookie = "cart=".concat(value, "; expires=").concat(date.toUTCString(), "; path=/");
      }
    }]);

    return ShippingEstimator;
  }();

  /**
   * The given ID must be the value picker itself (the element that contains the class "value-picker", not the button that toggles it
   */

  var ValuePicker = /*#__PURE__*/function () {
    function ValuePicker(id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, ValuePicker);

      this.id = id;
      this.delegateRoot = new Delegate(document.documentElement);
      this.isOpen = false;
      this.togglerElement = document.querySelector("[data-action=\"open-value-picker\"][aria-controls=\"".concat(this.id, "\"]"));

      this.onSelect = options['onValueSelect'] || function () {};

      this._attachListeners();
    }

    _createClass(ValuePicker, [{
      key: "destroy",
      value: function destroy() {
        this.delegateRoot.off();
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this.delegateRoot.on('click', "[data-action=\"open-value-picker\"][aria-controls=\"".concat(this.id, "\"]"), this._toggle.bind(this));
        this.delegateRoot.on('click', "[data-action=\"close-value-picker\"][aria-controls=\"".concat(this.id, "\"]"), this._toggle.bind(this));
        this.delegateRoot.on('click', "#".concat(this.id, " [data-action=\"select-value\"]"), this._selectValue.bind(this));
        this.delegateRoot.on('click', this._detectOutsideClick.bind(this), true);
        this.delegateRoot.on('focusout', "#".concat(this.id), this._onFocusOut.bind(this));
      }
    }, {
      key: "_toggle",
      value: function _toggle(event) {
        if (this.isOpen) {
          this._close(event);
        } else {
          this._open(event);
        }
      }
    }, {
      key: "_open",
      value: function _open() {
        document.querySelector("[data-action=\"open-value-picker\"][aria-controls=\"".concat(this.id, "\"]")).setAttribute('aria-expanded', 'true');
        document.getElementById(this.id).setAttribute('aria-hidden', 'false'); // This is quite ugly, but in order to avoid an issue with the header that has a higher z-index, we have to temporarily reduce
        // it while we have the element open

        if (Responsive.matchesBreakpoint('phone')) {
          var headerElement = document.querySelector('.shopify-section__header');
          headerElement.style.zIndex = '3';
        }

        this.isOpen = true;
        document.body.classList.add('no-mobile-scroll');
      }
    }, {
      key: "_close",
      value: function _close() {
        document.querySelector("[data-action=\"open-value-picker\"][aria-controls=\"".concat(this.id, "\"]")).setAttribute('aria-expanded', 'false');
        document.getElementById(this.id).setAttribute('aria-hidden', 'true'); // This is quite ugly, but in order to avoid an issue with the header that has a higher z-index, we have to temporarily reduce
        // it while we have the element open

        var headerElement = document.querySelector('.shopify-section__header');
        headerElement.style.zIndex = '';
        this.isOpen = false;
        document.body.classList.remove('no-mobile-scroll');
      }
    }, {
      key: "_selectValue",
      value: function _selectValue(event, target) {
        this.onSelect(target.getAttribute('data-value'));

        this._close();
      }
    }, {
      key: "_onFocusOut",
      value: function _onFocusOut(event) {
        var container = document.getElementById(this.id); // If the element that get the new focus is not contains within the value picker, we close it

        if (!container.contains(event.relatedTarget)) {
          this._close();
        }
      }
    }, {
      key: "_detectOutsideClick",
      value: function _detectOutsideClick(event) {
        // If already closed, nothing to do
        if (!this.isOpen || this.togglerElement === event.target || this.togglerElement.contains(event.target)) {
          return;
        }

        if (!event.target.closest('.value-picker__inner') && this.isOpen) {
          this._close(event);
        }
      }
    }]);

    return ValuePicker;
  }();

  var AccountSection = /*#__PURE__*/function () {
    function AccountSection(element) {
      _classCallCheck(this, AccountSection);

      this.element = element;
      this.domDelegate = new Delegate(this.element);
      this.element.querySelectorAll('[action*="/account/addresses"]').forEach(function (addressForm) {
        new CountrySelector(addressForm.querySelector('[name="address[country]"]'), addressForm.querySelector('[name="address[province]"]'));
      });
      this.pageSelector = new ValuePicker('account-selector');
    }

    _createClass(AccountSection, [{
      key: "_onUnload",
      value: function _onUnload() {
        this.pageSelector.destroy();
      }
    }]);

    return AccountSection;
  }();

  var AnnouncementBarSection = /*#__PURE__*/function () {
    function AnnouncementBarSection(element) {
      _classCallCheck(this, AnnouncementBarSection);

      this.element = element;
      this.domDelegate = new Delegate(this.element);
      this.options = JSON.parse(this.element.getAttribute('data-section-settings'));
      this.isOpen = false; // We set the new width of the announcement bar button if any

      if (this.options['showNewsletter']) {
        document.documentElement.style.setProperty('--announcement-bar-button-width', this.element.querySelector('.announcement-bar__button').clientWidth + 'px');
      } else {
        document.documentElement.style.removeProperty('--announcement-bar-button-width');
      }

      this._attachListeners();
    }

    _createClass(AnnouncementBarSection, [{
      key: "onSelect",
      value: function onSelect() {
        if (this.options['showNewsletter'] && !this.isOpen) {
          this._toggleNewsletter();
        }
      }
    }, {
      key: "onDeselect",
      value: function onDeselect() {
        if (this.options['showNewsletter'] && this.isOpen) {
          this._toggleNewsletter();
        }
      }
    }, {
      key: "onUnload",
      value: function onUnload() {
        this.domDelegate.off();
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this.domDelegate.on('click', '[data-action="toggle-newsletter"]', this._toggleNewsletter.bind(this));
        this.domDelegate.on('keyup', this._handleKey.bind(this));
      }
    }, {
      key: "_toggleNewsletter",
      value: function _toggleNewsletter() {
        var togglerElement = this.element.querySelector('.announcement-bar__button'),
            newsletterElement = this.element.querySelector('.announcement-bar__newsletter');

        if (togglerElement.getAttribute('aria-expanded') === 'false') {
          togglerElement.setAttribute('aria-expanded', 'true');
          newsletterElement.setAttribute('aria-hidden', 'false');
          Animation.slideDown(newsletterElement, function () {
            Accessibility.trapFocus(newsletterElement, 'announcement-bar');
          });
        } else {
          togglerElement.setAttribute('aria-expanded', 'false');
          newsletterElement.setAttribute('aria-hidden', 'true');
          Animation.slideUp(newsletterElement);
          Accessibility.removeTrapFocus(newsletterElement, 'announcement-bar');
        }

        this.isOpen = !this.isOpen;
      }
    }, {
      key: "_handleKey",
      value: function _handleKey(event) {
        if (event.key === 'Escape' && this.isOpen) {
          this._toggleNewsletter();
        }
      }
    }]);

    return AnnouncementBarSection;
  }();

  var BlogSection = /*#__PURE__*/function () {
    function BlogSection(element) {
      _classCallCheck(this, BlogSection);

      this.element = element;
      this.blogTagSelector = new ValuePicker('blog-tag-selector');

      if (Shopify.designMode) {
        var elementToAdd = this.element.querySelector('.page__header');

        if (elementToAdd) {
          document.querySelector('.blog-container').previousElementSibling.remove();
          document.querySelector('.blog-container').insertAdjacentElement('beforebegin', elementToAdd);
        }
      }
    }

    _createClass(BlogSection, [{
      key: "onUnload",
      value: function onUnload() {
        this.blogTagSelector.destroy();
      }
    }]);

    return BlogSection;
  }();

  var BlogPostSection = function BlogPostSection(element) {
    _classCallCheck(this, BlogPostSection);

    this.element = element;

    if (Shopify.designMode) {
      var elementToAdd = this.element.querySelector('.page__header');

      if (elementToAdd) {
        document.querySelector('.blog-container').previousElementSibling.remove();
        document.querySelector('.blog-container').insertAdjacentElement('beforebegin', elementToAdd);
      }
    }
  };

  var BlogSidebarSection = /*#__PURE__*/function () {
    function BlogSidebarSection(element) {
      _classCallCheck(this, BlogSidebarSection);

      this.element = element;

      if (window.theme.pageType === 'blog') {
        this._fixItemsPerRow();
      }
    }
    /**
     * If sidebar is not visible, then we must do some adjustments to the grid of article (especially, we must change how many items per row are displayed).
     * Because Shopify sections are independent, I didn't find a better approach than changing it in JavaScript
     */


    _createClass(BlogSidebarSection, [{
      key: "_fixItemsPerRow",
      value: function _fixItemsPerRow() {
        var blocks = this.element.querySelectorAll('.blog-sidebar__item');

        if (blocks.length === 0) {
          document.querySelector('.blog-container').classList.add('blog-container--without-sidebar');
          document.querySelectorAll('.shopify-section__blog-posts .block-list__item').forEach(function (item) {
            if (item.classList.contains('1/2--lap-and-up')) {
              item.classList.remove('1/2--lap-and-up');
              item.classList.add('1/3--lap-and-up');
            }
          });
        } else {
          document.querySelector('.blog-container').classList.remove('blog-container--without-sidebar');
          document.querySelectorAll('.shopify-section__blog-posts .block-list__item').forEach(function (item) {
            if (item.classList.contains('1/3--lap-and-up')) {
              item.classList.remove('1/3--lap-and-up');
              item.classList.add('1/2--lap-and-up');
            }
          });
        }
      }
    }]);

    return BlogSidebarSection;
  }();

  var ProductSection = /*#__PURE__*/function () {
    function ProductSection(element) {
      var _this = this;

      _classCallCheck(this, ProductSection);

      this.element = element;
      this.delegateElement = new Delegate(this.element);
      this.options = JSON.parse(this.element.getAttribute('data-section-settings'));
      this.productGallery = new ProductGallery(this.element, this.options);

      this._initShopifyReviews(); // If loaded by quick view, we need to do various initialization stuff


      if (this.options['isQuickView'] && this.options['showPaymentButton'] && window.Shopify.PaymentButton) {
        Shopify.PaymentButton.init();
      }

      this.productVariants = new ProductVariants(this.element, this.options);

      if (this.options['showShippingEstimator']) {
        this.shippingEstimator = new ShippingEstimator(this.element.querySelector('.shipping-estimator'), {
          singleProduct: true
        });
      }

      if (this.options['showQuantitySelector']) {
        var quantityPickerElement = this.element.querySelector('.quantity-selector--product');

        if (quantityPickerElement) {
          this.quantityPicker = new QuantityPicker(quantityPickerElement);
        }
      }

      var productInfoElement = this.element.querySelector('.product-block-list__item--info .card');

      if (productInfoElement) {
        this.element.querySelector('.product-block-list__wrapper').style.minHeight = "".concat(productInfoElement.clientHeight, "px");

        if (window.ResizeObserver) {
          this.productInfoResizeObserver = new ResizeObserver(function (event) {
            if (event[0].contentBoxSize) {
              _this.element.querySelector('.product-block-list__wrapper').style.minHeight = "".concat(event[0].contentBoxSize[0].blockSize, "px");
            } else {
              _this.element.querySelector('.product-block-list__wrapper').style.minHeight = "".concat(event[0].contentRect.height, "px");
            }
          });
          this.productInfoResizeObserver.observe(productInfoElement);
        }

        if (this.options['infoOverflowScroll']) {
          this.infoOverflowScroller = new OverflowScroller(productInfoElement, {
            offsetTop: document.documentElement.style.getPropertyValue('--header-is-sticky') * parseInt(document.documentElement.style.getPropertyValue('--header-height') + 30),
            offsetBottom: 30
          });
        }
      }

      this._attachListeners();
    }

    _createClass(ProductSection, [{
      key: "onUnload",
      value: function onUnload() {
        this.productVariants.destroy();
        this.productGallery.destroy();

        if (this.options['showShippingEstimator']) {
          this.shippingEstimator.destroy();
        }

        if (this.options['infoOverflowScroll']) {
          this.infoOverflowScroller.destroy();
        }

        if (window.ResizeObserver && this.productInfoResizeObserver) {
          this.productInfoResizeObserver.disconnect();
        }

        this.delegateElement.off();
        this.element.removeEventListener('variant:changed', this._onVariantChangedListener);
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this._onVariantChangedListener = this._onVariantChanged.bind(this);
        this.element.addEventListener('variant:changed', this._onVariantChangedListener);
      }
      /**
       * Shopify Reviews app is quite funky and hard to extend... excuse this code
       */

    }, {
      key: "_initShopifyReviews",
      value: function _initShopifyReviews() {
        var _this2 = this;

        if (Shopify.designMode && window.SPR) {
          window.SPR.initDomEls();
          window.SPR.loadProducts();
        }

        window.SPRCallbacks = {}; // This allows us to add some class to adjust the styling

        window.SPRCallbacks.onFormSuccess = function () {
          _this2.element.querySelector('#shopify-product-reviews .spr-form').classList.add('spr-form-submitted');
        }; // If loaded by quick view, we need to do various initialization stuff


        if (this.options['isQuickView'] && this.options['showPaymentButton'] && window.Shopify.PaymentButton) {
          Shopify.PaymentButton.init();
        }
      }
      /**
       * This method is called when the variant is changed due to option
       */

    }, {
      key: "_onVariantChanged",
      value: function _onVariantChanged(event) {
        this.productGallery.variantHasChanged(event.detail.variant);
      }
    }]);

    return ProductSection;
  }();

  var CartSection = /*#__PURE__*/function () {
    function CartSection(element) {
      _classCallCheck(this, CartSection);

      this.element = element;
      this.domDelegate = new Delegate(this.element);
      this.delegateRoot = new Delegate(document.documentElement);
      this.options = JSON.parse(this.element.getAttribute('data-section-settings'));

      if (this.options['showShippingEstimator']) {
        this.shippingEstimator = new ShippingEstimator(this.element.querySelector('.shipping-estimator'), {
          singleProduct: false
        });
      }

      this._attachListeners();

      this._enforceMinimumHeight();
    }

    _createClass(CartSection, [{
      key: "onUnload",
      value: function onUnload() {
        if (this.options['showShippingEstimator']) {
          this.shippingEstimator.destroy();
        }
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this.domDelegate.on('click', '[data-action="add-to-cart"]', this._addToCart.bind(this));
        this.domDelegate.on('click', '[data-action="save-note"]', this._saveNote.bind(this));
        this.domDelegate.on('click', '[data-secondary-action="open-quick-view"]', this._openQuickView.bind(this));
        this.delegateRoot.on('cart:rerendered', this._onCartRerendered.bind(this));
      }
    }, {
      key: "_saveNote",
      value: function _saveNote() {
        var noteValue = this.element.querySelector('[name="note"]').value;
        fetch("".concat(window.routes.cartUrl, "/update.js"), {
          body: JSON.stringify({
            note: noteValue
          }),
          credentials: 'same-origin',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest' // This is needed as currently there is a bug in Shopify that assumes this header

          }
        }); // Hide or show the note edit button depending on content

        this.element.querySelector('.cart-recap__note-edit').classList.toggle('is-visible', noteValue !== ''); // Close the button by sending a global event

        document.dispatchEvent(new CustomEvent('collapsible:toggle', {
          detail: {
            id: 'order-note'
          }
        }));
      }
    }, {
      key: "_addToCart",
      value: function _addToCart(event, target) {
        var _this = this;

        if (window.theme.cartType === 'page') {
          return; // When using a cart type of page, we just simply redirect to the cart page
        }

        event.preventDefault(); // Prevent form to be submitted

        event.stopPropagation(); // First, we switch the status of the button

        target.setAttribute('disabled', 'disabled');
        document.dispatchEvent(new CustomEvent('theme:loading:start')); // Then we add the product in Ajax

        var formElement = target.closest('form[action*="/cart/add"]');
        fetch("".concat(window.routes.cartAddUrl, ".js"), {
          body: JSON.stringify(Form.serialize(formElement)),
          credentials: 'same-origin',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest' // This is needed as currently there is a bug in Shopify that assumes this header

          }
        }).then(function (response) {
          if (response.ok) {
            target.removeAttribute('disabled'); // We simply trigger an event so the mini-cart can re-render

            _this.element.dispatchEvent(new CustomEvent('product:added', {
              bubbles: true,
              detail: {
                variant: null,
                quantity: parseInt(formElement.querySelector('[name="quantity"]').value)
              }
            }));
          } else {
            target.removeAttribute('disabled');
          }
        });
        event.preventDefault();
      }
    }, {
      key: "_openQuickView",
      value: function _openQuickView(event, target) {
        var modal = document.getElementById(target.getAttribute('aria-controls'));
        modal.classList.add('is-loading');
        fetch("".concat(target.getAttribute('data-product-url'), "?view=quick-view"), {
          credentials: 'same-origin',
          method: 'GET'
        }).then(function (response) {
          response.text().then(function (content) {
            modal.querySelector('.modal__inner').innerHTML = content;
            modal.classList.remove('is-loading'); // Register a new section to power the JS

            var modalProductSection = new ProductSection(modal.querySelector('[data-section-type="product"]')); // We set a listener so we can cleanup on close

            var doCleanUp = function doCleanUp() {
              modalProductSection.onUnload();
              modal.removeEventListener('modal:closed', doCleanUp);
            };

            modal.addEventListener('modal:closed', doCleanUp);
          });
        });
      }
      /**
       * On desktop we need to enforce a minimum height for the cart-wrapper
       */

    }, {
      key: "_enforceMinimumHeight",
      value: function _enforceMinimumHeight() {
        var cartWrapperElement = this.element.querySelector('.cart-wrapper'),
            cartRecapScrollerElement = this.element.querySelector('.cart-recap__scroller');

        if (cartWrapperElement && cartRecapScrollerElement) {
          cartWrapperElement.style.minHeight = "".concat(cartRecapScrollerElement.clientHeight, "px");

          if (window.ResizeObserver) {
            var resizeObserver = new ResizeObserver(function (entries) {
              var _iterator = _createForOfIteratorHelper(entries),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var entry = _step.value;
                  cartWrapperElement.style.minHeight = "".concat(parseInt(entry.contentRect.height), "px");
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            });
            resizeObserver.observe(cartRecapScrollerElement);
          }
        }
      }
      /* When the cart re-render, we have some operations to do */

    }, {
      key: "_onCartRerendered",
      value: function _onCartRerendered() {
        // For now the only thing we have to do is re-create the shipping estimator
        if (this.options['showShippingEstimator']) {
          this.shippingEstimator.destroy();
          this.shippingEstimator = new ShippingEstimator(this.element.querySelector('.shipping-estimator'), {
            singleProduct: false
          });
        }

        this._enforceMinimumHeight();
      }
    }]);

    return CartSection;
  }();

  var CollectionListSection = /*#__PURE__*/function () {
    function CollectionListSection(element) {
      var _this = this;

      _classCallCheck(this, CollectionListSection);

      this.element = element;
      var collectionListElement = this.element.querySelector('.collection-list');
      this.flickityInstance = new js(collectionListElement, {
        watchCSS: true,
        prevNextButtons: true,
        draggable: !window.matchMedia('(-moz-touch-enabled: 0), (hover: hover)').matches,
        pageDots: false,
        resize: false,
        cellAlign: collectionListElement.childElementCount < 6 ? 'center' : 'left',
        contain: true,
        groupCells: true
      });
      var lastWidth = window.innerWidth;
      window.addEventListener('resize', function () {
        if (window.innerWidth !== lastWidth) {
          _this.flickityInstance.resize();

          lastWidth = window.innerWidth;
        }
      });
    }

    _createClass(CollectionListSection, [{
      key: "onUnload",
      value: function onUnload() {
        this.flickityInstance.destroy();
      }
    }, {
      key: "onBlockSelect",
      value: function onBlockSelect(event) {
        if (this.flickityInstance.isActive) {
          this.flickityInstance.selectCell(parseInt(event.target.getAttribute('data-collection-index')), null, event.detail.load);
        }
      }
    }]);

    return CollectionListSection;
  }();

  var CollectionSection = /*#__PURE__*/function () {
    function CollectionSection(element) {
      var _this = this;

      _classCallCheck(this, CollectionSection);

      this.element = element;
      this.delegateElement = new Delegate(this.element);
      this.options = JSON.parse(this.element.getAttribute('data-section-settings'));
      this.currentUrl = new URL(window.location.href);
      this.mobileFilterDrawer = new CollectionFilterDrawer(this.options);
      this.displayByValuePicker = new ValuePicker('display-by-selector', {
        onValueSelect: this._showingCountChanged.bind(this)
      });
      this.sortByValuePicker = new ValuePicker('sort-by-selector', {
        onValueSelect: this._sortByChanged.bind(this)
      });
      this.productItemColorSwatch = new ProductItemColorSwatch(this.element); // If we are in the template search and that we are supposed to show pages and blog posts, we do more work

      if (window.theme.pageType === 'search') {
        this._loadContentResults();
      }

      window.addEventListener('popstate', function () {
        _this.currentUrl = new URL(window.location.href);

        _this._reload(false);
      });

      this._attachListeners();
    }

    _createClass(CollectionSection, [{
      key: "onUnload",
      value: function onUnload() {
        this.delegateElement.off();
        this.mobileFilterDrawer.destroy();
        this.displayByValuePicker.destroy();
        this.sortByValuePicker.destroy();
        this.productItemColorSwatch.destroy();
      }
    }, {
      key: "onSelect",
      value: function onSelect(event) {
        if (Shopify.designMode && event.detail.load) {
          // We also force the layout and number of items per page in the editor, no matter if you have choose an explicit mode
          this.element.querySelector(".collection__layout-button[data-layout-mode=\"".concat(this.options['defaultLayout'], "\"]")).click();

          this._showingCountChanged(this.options['defaultProductsPerPage']);
        }
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this.delegateElement.on('click', '[data-action="change-layout"]', this._changeLayout.bind(this));
        this.delegateElement.on('change', '#mobile-sort-by, #desktop-sort-by', this._sortByChanged.bind(this));
        this.delegateElement.on('change', '#showing-count', this._showingCountChanged.bind(this));
        this.delegateElement.on('click', '.pagination [data-page]', this._paginationPageChanged.bind(this));
        this.delegateElement.on('click', '[data-secondary-action="open-quick-view"]', this._openQuickView.bind(this));
        this.delegateElement.on('click', '[data-action="add-to-cart"]', this._addToCart.bind(this));
        this.delegateElement.on('change', '[name^="filter."]', this._onFilterChanged.bind(this));
        this.delegateElement.on('click', '[data-action="clear-filters"]', this._onFiltersCleared.bind(this));
      }
    }, {
      key: "_openQuickView",
      value: function _openQuickView(event, target) {
        var productUrl = new URL("".concat(window.location.origin).concat(target.getAttribute('data-product-url'))); // If we are on mobile or tablet, we redirect to product page directly

        if (Responsive.matchesBreakpoint('phone') || Responsive.matchesBreakpoint('tablet')) {
          window.location.href = productUrl.href;
          return false;
        }

        var modal = document.getElementById(target.getAttribute('aria-controls'));
        modal.classList.add('is-loading');
        productUrl.searchParams.set('view', 'quick-view');
        fetch(productUrl.href, {
          credentials: 'same-origin',
          method: 'GET'
        }).then(function (response) {
          response.text().then(function (content) {
            modal.querySelector('.modal__inner').innerHTML = content;
            modal.classList.remove('is-loading'); // Register a new section to power the JS

            var modalProductSection = new ProductSection(modal.querySelector('[data-section-type="product"]')); // We set a listener so we can cleanup on close

            var doCleanUp = function doCleanUp() {
              modalProductSection.onUnload();
              modal.removeEventListener('modal:closed', doCleanUp);
            };

            modal.addEventListener('modal:closed', doCleanUp);
          });
        });
      }
      /**
       * Switch layout mode
       */

    }, {
      key: "_changeLayout",
      value: function _changeLayout(event, target) {
        var _this2 = this;

        if (target.classList.contains('is-selected')) {
          return;
        }

        var newLayoutMode = target.getAttribute('data-layout-mode'); // We save the new attribute so that we can select the appropriate mode without causing reflow

        fetch("".concat(window.routes.cartUrl, "/update.js"), {
          body: JSON.stringify({
            attributes: {
              'collection_layout': newLayoutMode
            }
          }),
          credentials: 'same-origin',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest' // This is needed as currently there is a bug in Shopify that assumes this header

          }
        }); // Finally, we change everything!

        fastdom.mutate(function () {
          Dom.getSiblings(target, '.is-selected').forEach(function (button) {
            return button.classList.remove('is-selected');
          });
          target.classList.add('is-selected');

          _this2.element.querySelectorAll('.product-item').forEach(function (item) {
            if (newLayoutMode === 'grid') {
              item.className = "product-item product-item--vertical ".concat(_this2.options['gridClasses']);
            } else {
              item.className = 'product-item product-item--list';
            }
          }); // Reload the swatches


          _this2.productItemColorSwatch.recalculateSwatches();
        });
      }
      /**
       * Update the URL and reload products
       */

    }, {
      key: "_sortByChanged",
      value: function _sortByChanged(value) {
        this.currentUrl.searchParams.set('sort_by', value);
        this.currentUrl.searchParams["delete"]('page');

        this._reload(true);
      }
      /**
       * When the number of items has changed
       */

    }, {
      key: "_showingCountChanged",
      value: function _showingCountChanged(value) {
        var _this3 = this;

        this.currentUrl.searchParams["delete"]('page'); // We save the new value as a cart attribute, so it can be retrieved in Liquid easily :)

        fetch("".concat(window.routes.cartUrl, "/update.js"), {
          body: JSON.stringify({
            attributes: {
              'collection_products_per_page': value
            }
          }),
          credentials: 'same-origin',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest' // This is needed as currently there is a bug in Shopify that assumes this header

          }
        }).then(function () {
          _this3._reload(true);
        });
      }
      /**
       * When the page has changed
       */

    }, {
      key: "_paginationPageChanged",
      value: function _paginationPageChanged(event, target) {
        event.preventDefault();
        this.currentUrl.searchParams.set('page', parseInt(target.getAttribute('data-page')));

        this._reload(true);
      }
    }, {
      key: "_onFilterChanged",
      value: function _onFilterChanged(event, target) {
        var formData = new FormData(target.closest('form'));
        var searchParamsAsString = new URLSearchParams(formData).toString();
        this.currentUrl = new URL("".concat(window.location.pathname, "?").concat(searchParamsAsString), window.location.origin);

        this._reload(true);
      }
    }, {
      key: "_onFiltersCleared",
      value: function _onFiltersCleared(event, target) {
        this.currentUrl = new URL(target.getAttribute('data-url'), window.location.origin);

        this._reload(true);
      }
      /**
       * Reload all products from the current URL
       *
       * @private
       */

    }, {
      key: "_reload",
      value: function _reload(pushState) {
        var _this4 = this;

        if (this.abortController) {
          this.abortController.abort();
        } // Then, we replace the URL


        if (pushState) {
          window.history.pushState({
            path: this.currentUrl.toString()
          }, '', this.currentUrl.toString());
        }

        document.dispatchEvent(new CustomEvent('theme:loading:start')); // We scroll to the top

        var computedStyles = window.getComputedStyle(document.documentElement); // To load the content we use the newly introduced "Sections API", which also to get data much more efficiently

        var sectionUrl = '';

        if (this.currentUrl.search) {
          sectionUrl = "".concat(this.currentUrl.pathname, "/").concat(this.currentUrl.search, "&section_id=").concat(this.element.getAttribute('data-section-id'));
        } else {
          sectionUrl = "".concat(this.currentUrl.pathname, "?section_id=").concat(this.element.getAttribute('data-section-id'));
        }

        try {
          this.abortController = new AbortController();
          return fetch(sectionUrl, {
            credentials: 'same-origin',
            method: 'GET',
            signal: this.abortController.signal
          }).then(function (response) {
            response.text().then(function (content) {
              var tempElement = document.createElement('div');
              tempElement.innerHTML = content;
              _this4.element.querySelector('.collection__dynamic-part').innerHTML = tempElement.querySelector('.collection__dynamic-part').innerHTML;

              var desktopFilters = _this4.element.querySelector('#desktop-filters-form'),
                  mobileFilters = _this4.element.querySelector('#mobile-collection-filters'),
                  previousMobileScrollTop = 0;

              if (mobileFilters) {
                previousMobileScrollTop = mobileFilters.querySelector('.collection-drawer__inner').scrollTop;
              } // A given collection may not have any filters


              if (desktopFilters) {
                Array.from(_this4.element.querySelectorAll('.collection__filter-group-name[aria-controls]')).forEach(function (groupName) {
                  // Get the corresponding group from new filters
                  var newGroup = tempElement.querySelector("[aria-controls=\"".concat(groupName.getAttribute('aria-controls'), "\"]"));

                  if (groupName.getAttribute('aria-expanded') === 'true') {
                    newGroup.setAttribute('aria-expanded', 'true');
                    newGroup.nextElementSibling.setAttribute('aria-hidden', 'false');
                    newGroup.nextElementSibling.style.height = 'auto';
                    newGroup.nextElementSibling.style.overflow = 'visible';
                  } else {
                    newGroup.setAttribute('aria-expanded', 'false');
                    newGroup.nextElementSibling.setAttribute('aria-hidden', 'true');
                    newGroup.nextElementSibling.style = '';
                  }
                });
                desktopFilters.innerHTML = tempElement.querySelector('#desktop-filters-form').innerHTML;
                mobileFilters.innerHTML = tempElement.querySelector('#mobile-collection-filters').innerHTML;
                mobileFilters.querySelector('.collection-drawer__inner').scrollTop = previousMobileScrollTop;

                _this4.mobileFilterDrawer._computeDrawerHeight();
              } // Reload the swatches


              _this4.productItemColorSwatch.recalculateSwatches();

              var elementOffset = _this4.element.querySelector('.collection').getBoundingClientRect().top - 25 - parseInt(computedStyles.getPropertyValue('--header-is-sticky')) * parseInt(computedStyles.getPropertyValue('--header-height'));

              if (elementOffset < 0) {
                window.scrollBy({
                  top: elementOffset,
                  behavior: 'smooth'
                });
              } // Reload the product count


              var countJson = JSON.parse(tempElement.querySelector('[data-collection-products-count]').innerHTML);

              var showingProductsCount = _this4.element.querySelector('.collection__products-count-showing');

              if (showingProductsCount) {
                showingProductsCount.innerHTML = countJson['showingCount'];
              }

              _this4.element.querySelector('.collection__products-count-total').innerHTML = countJson['productsCount']; // Finally, we scroll to the element

              document.dispatchEvent(new CustomEvent('theme:loading:end'));
            });
          });
        } catch (e) {// Ignore the exception
        }
      }
      /**
       * ---------------------------------------------------------------------------------------------------
       * SEARCH PAGE SPECIFIC METHOD
       * ---------------------------------------------------------------------------------------------------
       */

    }, {
      key: "_loadContentResults",
      value: function _loadContentResults() {
        var _this5 = this;

        var currentUrl = new URL(window.location.href);
        fetch("".concat(window.routes.searchUrl, "?section_id=search-content&q=").concat(currentUrl.searchParams.get('q'), "&type=article,page"), {
          credentials: 'same-origin'
        }).then(function (response) {
          response.text().then(function (content) {
            var linkSearchResults = _this5.element.querySelector('.link-search-results'),
                fakeDiv = document.createElement('div');

            fakeDiv.innerHTML = content;

            if (linkSearchResults && content.trim() !== '') {
              linkSearchResults.innerHTML = fakeDiv.firstElementChild.innerHTML;
              linkSearchResults.style.display = 'block';
            }
          });
        });
      }
      /**
       * ---------------------------------------------------------------------------------------------------
       * INTERNAL CODE THAT HANDLE PRODUCT ADD TO CART
       * ---------------------------------------------------------------------------------------------------
       */

    }, {
      key: "_addToCart",
      value: function _addToCart(event, target) {
        var _this6 = this;

        if (window.theme.cartType === 'page') {
          return; // When using a cart type of page, we just simply redirect to the cart page
        }

        event.preventDefault(); // Prevent form to be submitted

        event.stopPropagation(); // First, we switch the status of the button

        target.setAttribute('disabled', 'disabled');
        document.dispatchEvent(new CustomEvent('theme:loading:start')); // Then we add the product in Ajax

        var formElement = target.closest('form[action*="/cart/add"]');
        fetch("".concat(window.routes.cartAddUrl, ".js"), {
          body: JSON.stringify(Form.serialize(formElement)),
          credentials: 'same-origin',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest' // This is needed as currently there is a bug in Shopify that assumes this header

          }
        }).then(function (response) {
          target.removeAttribute('disabled');

          if (response.ok) {
            // We simply trigger an event so the mini-cart can re-render
            _this6.element.dispatchEvent(new CustomEvent('product:added', {
              bubbles: true,
              detail: {
                button: target,
                variant: null,
                quantity: parseInt(formElement.querySelector('[name="quantity"]').value)
              }
            }));
          } else {
            document.dispatchEvent(new CustomEvent('theme:loading:end'));
          }
        });
        event.preventDefault();
      }
    }]);

    return CollectionSection;
  }();

  var FeaturedCollectionSection = /*#__PURE__*/function () {
    function FeaturedCollectionSection(element) {
      var _this = this;

      _classCallCheck(this, FeaturedCollectionSection);

      this.element = element;
      this.delegateElement = new Delegate(this.element);
      this.options = JSON.parse(this.element.getAttribute('data-section-settings'));

      if (!this.options['stackable']) {
        this.flickityInstance = new js(this.element.querySelector('.product-list'), {
          watchCSS: true,
          pageDots: false,
          prevNextButtons: true,
          contain: true,
          resize: false,
          groupCells: true,
          cellAlign: 'left',
          draggable: !window.matchMedia('(-moz-touch-enabled: 0), (hover: hover)').matches
        });
        var lastWidth = window.innerWidth;
        window.addEventListener('resize', function () {
          if (window.innerWidth !== lastWidth) {
            _this.flickityInstance.resize();

            lastWidth = window.innerWidth;
          }
        });
      }

      this.productItemColorSwatch = new ProductItemColorSwatch(this.element);

      this._fixSafari();

      this._attachListeners();
    }

    _createClass(FeaturedCollectionSection, [{
      key: "onUnload",
      value: function onUnload() {
        if (!this.options['stackable']) {
          this.flickityInstance.destroy();
        }

        window.removeEventListener('resize', this._fixSafariListener);
        this.delegateElement.off('change');
        this.productItemColorSwatch.destroy();

        if (this.resizeObserver) {
          this.resizeObserver.disconnect();
        }
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        var _this2 = this;

        this._fixSafariListener = this._fixSafari.bind(this);
        window.addEventListener('resize', this._fixSafariListener);
        this.delegateElement.on('click', '[data-action="add-to-cart"]', this._addToCart.bind(this));
        this.delegateElement.on('click', '[data-secondary-action="open-quick-view"]', this._openQuickView.bind(this)); // If the browser supports ResizeObserver we use it to detect when the size of the items in the carousel change,
        // and if that's the case we force Flickity to resize

        if (window.ResizeObserver && this.flickityInstance) {
          this.resizeObserver = new ResizeObserver(function () {
            _this2.flickityInstance.resize();
          });
          this.element.querySelectorAll('.product-item').forEach(function (item) {
            _this2.resizeObserver.observe(item);
          });
        }
      }
      /**
       * On Safari 11.1 and lower, the browser incorrectly calculate the height of flex and grid items due to a bug
       * on how padding percentage is calculated (that we use for allocating image space). This is solved in Safari 11.1 and higher.
       *
       * For those browsers, we fix that in JavaScript by setting the height directly for each aspect ratio image
       *
       * @private
       */

    }, {
      key: "_fixSafari",
      value: function _fixSafari() {
        var userAgent = window.navigator.userAgent.toLowerCase();

        if (userAgent.includes('safari') && (userAgent.includes('version/10.1') || userAgent.includes('version/10.3') || userAgent.includes('version/11.0'))) {
          var isPhone = Responsive.matchesBreakpoint('phone');
          this.element.querySelectorAll('.product-item__image-wrapper .aspect-ratio, .product-item__image-wrapper .placeholder-svg').forEach(function (image) {
            if (isPhone) {
              image.parentNode.style.height = null;
            } else {
              image.parentNode.style.height = "".concat(image.clientHeight, "px");
            }
          });
        }
      }
    }, {
      key: "_openQuickView",
      value: function _openQuickView(event, target) {
        var productUrl = new URL("".concat(window.location.origin).concat(target.getAttribute('data-product-url'))); // If we are on mobile or tablet, we redirect to product page directly

        if (Responsive.matchesBreakpoint('phone') || Responsive.matchesBreakpoint('tablet')) {
          window.location.href = productUrl.href;
          return false;
        }

        var modal = document.getElementById(target.getAttribute('aria-controls'));
        modal.classList.add('is-loading');
        productUrl.searchParams.set('view', 'quick-view');
        fetch(productUrl.href, {
          credentials: 'same-origin',
          method: 'GET'
        }).then(function (response) {
          response.text().then(function (content) {
            modal.querySelector('.modal__inner').innerHTML = content;
            modal.classList.remove('is-loading'); // Register a new section to power the JS

            var modalProductSection = new ProductSection(modal.querySelector('[data-section-type="product"]')); // We set a listener so we can cleanup on close

            var doCleanUp = function doCleanUp() {
              modalProductSection.onUnload();
              modal.removeEventListener('modal:closed', doCleanUp);
            };

            modal.addEventListener('modal:closed', doCleanUp);
          });
        });
      }
      /**
       * ---------------------------------------------------------------------------------------------------
       * INTERNAL CODE THAT HANDLE PRODUCT ADD TO CART
       * ---------------------------------------------------------------------------------------------------
       */

    }, {
      key: "_addToCart",
      value: function _addToCart(event, target) {
        var _this3 = this;

        if (window.theme.cartType === 'page') {
          return; // When using a cart type of page, we just simply redirect to the cart page
        }

        event.preventDefault(); // Prevent form to be submitted

        event.stopPropagation(); // First, we switch the status of the button

        target.setAttribute('disabled', 'disabled');
        document.dispatchEvent(new CustomEvent('theme:loading:start')); // Then we add the product in Ajax

        var formElement = target.closest('form[action*="/cart/add"]');
        fetch("".concat(window.routes.cartAddUrl, ".js"), {
          body: JSON.stringify(Form.serialize(formElement)),
          credentials: 'same-origin',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest' // This is needed as currently there is a bug in Shopify that assumes this header

          }
        }).then(function (response) {
          target.removeAttribute('disabled');

          if (response.ok) {
            // We simply trigger an event so the mini-cart can re-render
            _this3.element.dispatchEvent(new CustomEvent('product:added', {
              bubbles: true,
              detail: {
                button: target,
                variant: null,
                quantity: parseInt(formElement.querySelector('[name="quantity"]').value)
              }
            }));
          } else {
            document.dispatchEvent(new CustomEvent('theme:loading:end'));
          }
        });
        event.preventDefault();
      }
    }]);

    return FeaturedCollectionSection;
  }();

  var GiftCardSection = /*#__PURE__*/function () {
    function GiftCardSection(container) {
      _classCallCheck(this, GiftCardSection);

      this.element = container;
      this.delegateElement = new Delegate(this.element);

      this._createQrCode();

      this._attachListeners();
    }

    _createClass(GiftCardSection, [{
      key: "onUnload",
      value: function onUnload() {
        this.delegateElement.off();
      }
    }, {
      key: "_createQrCode",
      value: function _createQrCode() {
        var qrCodeElements = document.querySelectorAll('.gift-card__qr');
        qrCodeElements.forEach(function (qrCodeElement) {
          new QRCode(qrCodeElement, {
            text: qrCodeElement.getAttribute('data-identifier'),
            width: 200,
            height: 200
          });
        });
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this.delegateElement.on('click', '[data-action="print"]', this._print.bind(this));
        this.delegateElement.on('click', '[data-action="select-code"]', this._selectCode.bind(this));
      }
    }, {
      key: "_print",
      value: function _print() {
        window.print();
      }
    }, {
      key: "_selectCode",
      value: function _selectCode(event, element) {
        element.select();
      }
    }]);

    return GiftCardSection;
  }();

  var FooterSection = /*#__PURE__*/function () {
    function FooterSection(element) {
      _classCallCheck(this, FooterSection);

      this.element = element;
      this.localeValuePicker = new ValuePicker('footer-locale-picker');
      this.currencyValuePicker = new ValuePicker('footer-currency-picker');

      this._setupCollapsibles();

      this._attachListeners();
    }

    _createClass(FooterSection, [{
      key: "onUnload",
      value: function onUnload() {
        window.removeEventListener('resize', this._setupCollapsiblesListener);
        this.localeValuePicker.destroy();
        this.currencyValuePicker.destroy();
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this._setupCollapsiblesListener = this._setupCollapsibles.bind(this);
        window.addEventListener('resize', this._setupCollapsiblesListener);
      }
      /**
       * On mobile, some block items are collapsed, so we must slightly edit their HTML
       */

    }, {
      key: "_setupCollapsibles",
      value: function _setupCollapsibles() {
        var collapsibleToggles = this.element.querySelectorAll('[data-action="toggle-collapsible"]'),
            isPhone = Responsive.matchesBreakpoint('phone');
        collapsibleToggles.forEach(function (collapsibleToggle) {
          if (isPhone) {
            collapsibleToggle.removeAttribute('disabled');
          } else {
            collapsibleToggle.setAttribute('disabled', 'disabled');
            document.getElementById(collapsibleToggle.getAttribute('aria-controls')).style.height = '';
          }
        });
      }
    }]);

    return FooterSection;
  }();

  var SearchBar = /*#__PURE__*/function () {
    function SearchBar(element) {
      _classCallCheck(this, SearchBar);

      this.element = element;
      this.delegateElement = new Delegate(this.element);
      this.headerElement = this.element.closest('.header');
      this.searchBarElement = this.element.querySelector('.search-bar');
      this.inputElement = this.element.querySelector('[name="q"]');
      this.searchMenuElement = this.element.querySelector('.search-bar__menu-wrapper');
      this.searchResultsElement = this.element.querySelector('.search-bar__results');
      this.closeButtonElement = this.element.querySelector('.search-bar__close-button');
      this.productTypeFilter = '';
      this.isSearchOpen = false;

      this._attachListeners();
    }

    _createClass(SearchBar, [{
      key: "destroy",
      value: function destroy() {
        this.delegateElement.off();
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this.delegateElement.on('click', '[data-action="clear-input"]', this._clearInput.bind(this));
        this.delegateElement.on('click', '[data-action="unfix-search"]', this._unfixMobileSearch.bind(this));
        this.delegateElement.on('focusin', '[name="q"]', this._onInputFocus.bind(this));
        document.addEventListener('click', this._onFocusOut.bind(this));
        this.delegateElement.on('keydown', '[name="q"]', this._handleTab.bind(this));
        this.delegateElement.on('input', '[name="q"]', this._debounce(this._doSearch.bind(this), 250));
        this.delegateElement.on('change', '#search-product-type', this._productTypeChanged.bind(this));
        this.delegateElement.on('submit', this._onFormSubmit.bind(this));
      }
      /**
       * Toggle the mobile search (only applicable if the show condensed search is shown)
       */

    }, {
      key: "toggleMobileSearch",
      value: function toggleMobileSearch() {
        if (this.isSearchOpen) {
          this.headerElement.classList.remove('header--search-expanded');
          this.element.classList.remove('is-visible');
        } else {
          this.headerElement.classList.add('header--search-expanded');
          this.element.classList.add('is-visible');
        }

        this.isSearchOpen = !this.isSearchOpen;
      }
    }, {
      key: "_unfixMobileSearch",
      value: function _unfixMobileSearch() {
        this.element.classList.remove('is-fixed');
        this.closeButtonElement.style.width = '';
        this.searchBarElement.classList.remove('is-expanded');
        this.searchResultsElement.setAttribute('aria-hidden', 'true');
        this.inputElement.classList.remove('is-filled');
        document.body.classList.remove('no-mobile-scroll');

        if (this.searchMenuElement) {
          this.searchMenuElement.setAttribute('aria-hidden', 'true');
        }
      }
      /**
       * Only on mobile
       */

    }, {
      key: "_clearInput",
      value: function _clearInput() {
        this.inputElement.value = '';
        this.inputElement.classList.remove('is-filled');
        this.searchResultsElement.setAttribute('aria-hidden', 'true');

        if (this.searchMenuElement) {
          this.searchMenuElement.setAttribute('aria-hidden', 'false');
        }
      }
      /**
       * When the input get focus, we display the quick links if they were specified by the merchant, or we open results if
       * results were previously loaded
       */

    }, {
      key: "_onInputFocus",
      value: function _onInputFocus() {
        this.element.classList.add('is-fixed');
        this.closeButtonElement.style.width = "".concat(this.closeButtonElement.firstElementChild.offsetWidth, "px");
        document.body.classList.add('no-mobile-scroll');

        if (this.inputElement.value === '') {
          if (this.searchMenuElement) {
            this.searchMenuElement.setAttribute('aria-hidden', 'false');
          }

          this.searchResultsElement.setAttribute('aria-hidden', 'true');
        } else {
          if (this.searchMenuElement) {
            this.searchMenuElement.setAttribute('aria-hidden', 'true');
          }

          this.searchResultsElement.setAttribute('aria-hidden', 'false');
          this.inputElement.classList.add('is-filled');
          this.searchBarElement.classList.add('is-expanded');
        }

        if (this.searchMenuElement) {
          this.searchBarElement.classList.add('is-expanded');
        }
      }
      /**
       * Whenever the focus leaves the search, we close everything (both search results and quick links)
       */

    }, {
      key: "_onFocusOut",
      value: function _onFocusOut(event) {
        var _this = this;

        // On phone, nothing happens on focus out
        if (Responsive.matchesBreakpoint('phone')) {
          return;
        }

        if (Responsive.matchesBreakpoint('phone') || event.target.classList.contains('search-bar__input') || event.target.closest('.search-bar__inner')) {
          return;
        }

        setTimeout(function () {
          _this.element.classList.remove('is-fixed');

          document.body.classList.remove('no-mobile-scroll');

          if (!_this.element.contains(event.relatedTarget)) {
            if (_this.searchMenuElement) {
              _this.searchMenuElement.setAttribute('aria-hidden', 'true');
            }

            _this.searchResultsElement.setAttribute('aria-hidden', 'true');

            _this.searchBarElement.classList.remove('is-expanded');
          }
        }, 150);
      }
      /**
       * This allows to slightly improve the accessibility and user experience by directly focusing on the first search results (if any)
       */

    }, {
      key: "_handleTab",
      value: function _handleTab(event) {
        if (event.key !== 'Tab') {
          return;
        } // Try to get the first link into the results to give focus to this element


        var firstFocusableElement = this.searchResultsElement.querySelector('a');

        if (firstFocusableElement) {
          firstFocusableElement.focus();
          event.preventDefault();
        }
      }
      /**
       * Fire the different Ajax requests
       */

    }, {
      key: "_doSearch",
      value: function _doSearch() {
        var _this2 = this;

        // Unfortunately, fetch does not support as of today cancelling a request. As a consequence what we do is that we manually
        // keep track of sent requests, and only use the results of the last one
        var currentInput = this.inputElement.value;
        this.lastInputValue = currentInput;

        if (currentInput === '') {
          if (this.searchMenuElement) {
            this.searchMenuElement.setAttribute('aria-hidden', 'false');
          } else {
            this.searchBarElement.classList.remove('is-expanded');
          }

          this.searchResultsElement.setAttribute('aria-hidden', 'true');
        } else {
          if (this.searchMenuElement) {
            this.searchMenuElement.setAttribute('aria-hidden', 'true');
          }

          this.searchResultsElement.setAttribute('aria-hidden', 'false');
          this.searchBarElement.classList.add('is-expanded', 'is-loading');
          var queryOptions = {
            method: 'GET',
            credentials: 'same-origin'
          },
              url = "".concat(window.Shopify.routes.root, "search").concat(this._supportsPredictiveApi() ? '/suggest' : ''),
              productQuery = "".concat(this.productTypeFilter !== '' ? "product_type:".concat(this.productTypeFilter, " AND ") : '').concat(encodeURIComponent(this.lastInputValue)),
              queries = [fetch("".concat(url, "?section_id=predictive-search&q=").concat(productQuery, "&resources[limit]=3&resources[limit_scope]=each&resources[options][fields]=title,product_type,variants.title,variants.sku,vendor"), queryOptions)];
          Promise.all(queries).then(function (responses) {
            // If we receive the result for a query that is not the last one, we simply do not process the result
            if (_this2.lastInputValue !== currentInput) {
              return;
            }

            Promise.all(responses.map(function (response) {
              return response.text().then(function (responseAsText) {
                var div = document.createElement('div');
                div.innerHTML = responseAsText;
                return div.querySelector('.search-ajax').innerHTML;
              });
            })).then(function (contents) {
              _this2.searchBarElement.classList.remove('is-loading');

              var searchContent = document.createElement('div');
              searchContent.innerHTML = contents.join('').trim(); // If there is a "view all" button, we move it at the end of the results

              var viewAll = searchContent.querySelector('.search-bar__view-all');

              if (viewAll) {
                searchContent.insertAdjacentElement('beforeend', viewAll);
              }

              _this2.searchBarElement.querySelector('.search-bar__results-inner').innerHTML = searchContent.innerHTML;
            });
          });
        }
      }
    }, {
      key: "_supportsPredictiveApi",
      value: function _supportsPredictiveApi() {
        return JSON.parse(document.getElementById('shopify-features').innerHTML)['predictiveSearch'];
      }
      /**
       * Warehouse allows to display a filter by type. When its value change, we re-do a new search to get the new data
       */

    }, {
      key: "_productTypeChanged",
      value: function _productTypeChanged(event, target) {
        target.closest('.search-bar__filter').querySelector('.search-bar__filter-active').innerText = target.options[target.selectedIndex].innerText;
        this.productTypeFilter = target.value;

        if (this.inputElement.value !== '') {
          this._doSearch();
        }
      }
      /**
       * Called when the form is submitted using the Enter key. We have to capture it and transform the query to include the wildcard
       */

    }, {
      key: "_onFormSubmit",
      value: function _onFormSubmit(event) {
        var cloneNode = this.inputElement.cloneNode();
        cloneNode.setAttribute('type', 'hidden');
        cloneNode.value = '';

        if (this.productTypeFilter !== '') {
          cloneNode.value += "product_type:".concat(this.productTypeFilter);

          if (this.inputElement.value !== '') {
            cloneNode.value += ' AND ';
          }
        }

        cloneNode.value += this.inputElement.value; // We remove the "q" attribute on existing node so it's not submitted

        this.inputElement.removeAttribute('name'); // And we insert it into the DOM

        this.inputElement.insertAdjacentElement('afterend', cloneNode);
      }
      /**
       * Simple function that allows to debounce
       */

    }, {
      key: "_debounce",
      value: function _debounce(fn, delay) {
        var _this3 = this;

        var timer = null;
        return function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          clearTimeout(timer);
          timer = setTimeout(function () {
            fn.apply(_this3, args);
          }, delay);
        };
      }
    }]);

    return SearchBar;
  }();

  var HeaderSection = /*#__PURE__*/function () {
    function HeaderSection(element) {
      _classCallCheck(this, HeaderSection);

      this.element = element;
      this.delegateElement = new Delegate(this.element);
      this.options = JSON.parse(this.element.getAttribute('data-section-settings'));
      this.searchBar = new SearchBar(this.element.querySelector('.header__search-bar-wrapper'));
      this.cart = new Cart(this.element.querySelector('.header__action-item--cart'), {
        useStickyHeader: this.options['useStickyHeader']
      }); // We create the desktop and mobile navigation conditionally as we've found that some merchants may have no menu

      var desktopNavigationElement = this.element.querySelector(this.options['navigationLayout'] === 'inline' ? '.nav-bar' : '.header__desktop-nav');

      if (desktopNavigationElement) {
        this.desktopNavigation = new DesktopNavigation(desktopNavigationElement, this.options['navigationLayout'], this.options['desktopOpenTrigger']);
      }

      var mobileNavigationElement = this.element.querySelector('.header__mobile-nav');

      if (mobileNavigationElement) {
        this.mobileNavigation = new MobileNavigation(mobileNavigationElement);
      }

      this._setupCssVariables();

      this._attachListeners();
    }

    _createClass(HeaderSection, [{
      key: "onUnload",
      value: function onUnload() {
        this.searchBar.destroy();
        this.cart.destroy();

        if (this.desktopNavigation) {
          this.desktopNavigation.destroy();
        }

        if (this.mobileNavigation) {
          this.mobileNavigation.destroy();
        }

        window.removeEventListener('resize', this._setupCssVariablesListener);
      }
    }, {
      key: "onBlockSelect",
      value: function onBlockSelect(event) {
        if (this.desktopNavigation) {
          this.desktopNavigation.onBlockSelect(event);
        }
      }
    }, {
      key: "onBlockDeselect",
      value: function onBlockDeselect(event) {
        if (this.desktopNavigation) {
          this.desktopNavigation.onBlockDeselect(event);
        }
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this._setupCssVariablesListener = this._setupCssVariables.bind(this);
        window.addEventListener('resize', this._setupCssVariablesListener);
        this.delegateElement.on('click', '[data-action="toggle-search"]', this._toggleMobileSearch.bind(this));
      }
      /**
       * We have some positioning that is based on the CSS variables, so we must make sure to update them whenever
       * the section is reloaded into the editor
       */

    }, {
      key: "_setupCssVariables",
      value: function _setupCssVariables() {
        document.documentElement.style.setProperty('--header-height', this.element.parentNode.clientHeight + 'px');
      }
      /**
       * Toggle the mobile search
       */

    }, {
      key: "_toggleMobileSearch",
      value: function _toggleMobileSearch(event) {
        this.searchBar.toggleMobileSearch();
        event.preventDefault();
      }
    }]);

    return HeaderSection;
  }();

  var LoginSection = /*#__PURE__*/function () {
    function LoginSection(element) {
      _classCallCheck(this, LoginSection);

      this.element = element;
      this.domDelegate = new Delegate(this.element);
      this.customerLoginForm = this.element.querySelector('#customer_login');
      this.recoverPasswordForm = this.element.querySelector('#recover_customer_password');
      this.domDelegate.on('click', '[data-action="toggle-login-form"]', this._showRecoverPassword.bind(this));
    }

    _createClass(LoginSection, [{
      key: "_showRecoverPassword",
      value: function _showRecoverPassword() {
        var isLoginActive = this.customerLoginForm.style.display === 'block';

        if (isLoginActive) {
          this.customerLoginForm.style.display = 'none';
          this.recoverPasswordForm.style.display = 'block';
        } else {
          this.customerLoginForm.style.display = 'block';
          this.recoverPasswordForm.style.display = 'none';
        }
      }
    }]);

    return LoginSection;
  }();

  var MapSection = /*#__PURE__*/function () {
    function MapSection(element) {
      _classCallCheck(this, MapSection);

      this.element = element;
      this.delegateElement = new Delegate(this.element);
      this.options = JSON.parse(element.getAttribute('data-section-settings'));
      this.mapPositions = [];
      this.desktopMarkers = [];
      this.desktopMapElement = null;
      this.mobileMarkers = [];
      this.mobileMapElements = [];

      if (this.options['apiKey'] && this.options['mapAddresses'].length > 0) {
        this._loadScript().then(this._initMaps.bind(this));
      }

      this._attachListeners();
    }

    _createClass(MapSection, [{
      key: "onUnload",
      value: function onUnload() {
        this.delegateElement.off('click');

        if (this.options['apiKey'] && this.options['mapAddresses'].length > 0) {
          google.maps.event.clearInstanceListeners(window);
        }
      }
    }, {
      key: "onBlockSelect",
      value: function onBlockSelect(event) {
        this._showStore(event.target);
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        var _this = this;

        this.delegateElement.on('click', '[data-action="toggle-store"]', function (event, target) {
          _this._showStore(target.closest('.map__store-item'));
        });
      }
    }, {
      key: "_showStore",
      value: function _showStore(storeItem) {
        var _this2 = this;

        var toggleButton = storeItem.querySelector('[data-action="toggle-store"]'); // If already open, we do nothing unless we are on mobile (as we need at least one store visible on desktop)

        if (Responsive.getCurrentBreakpoint() !== 'phone' && toggleButton.getAttribute('aria-expanded') === 'true') {
          return;
        } // Otherwise, we activate it


        if (toggleButton.getAttribute('aria-expanded') === 'true') {
          toggleButton.setAttribute('aria-expanded', 'false');
          Animation.slideUp(storeItem.querySelector('.map__store-collapsible'));
        } else {
          toggleButton.setAttribute('aria-expanded', 'true');
          Animation.slideDown(storeItem.querySelector('.map__store-collapsible'));
        } // Finally, we close the other ones (if any is open)


        Dom.getSiblings(storeItem).forEach(function (storeItemToClose) {
          storeItemToClose.querySelector('[data-action="toggle-store"]').setAttribute('aria-expanded', 'false');
          Animation.slideUp(storeItemToClose.querySelector('.map__store-collapsible'));
        }); // We need to move the map to the new center, and we need to change its color to make it active

        var storeIndex = parseInt(storeItem.getAttribute('data-store-index'));
        this.desktopMapElement.panTo(this.mapPositions[storeIndex]);
        this.desktopMarkers.forEach(function (marker, index) {
          marker.setMap(_this2.desktopMapElement);

          if (index === storeIndex) {
            marker.icon.fillColor = _this2.options['markerActiveColor'];
          } else {
            marker.icon.fillColor = _this2.options['markerColor'];
          }
        });
      }
    }, {
      key: "_loadScript",
      value: function _loadScript() {
        var _this3 = this;

        return new Promise(function (resolve, reject) {
          var script = document.createElement('script');
          document.body.appendChild(script);
          script.onload = resolve;
          script.onerror = reject;
          script.async = true;
          script.src = "https://maps.googleapis.com/maps/api/js?key=".concat(_this3.options['apiKey']);
        });
      }
    }, {
      key: "_initMaps",
      value: function _initMaps() {
        var _this4 = this;

        // First, we gather all the maps (desktop and mobile)
        var mapOptions = {
          zoom: this.options['zoom'],
          draggable: this.options['draggableMap'],
          clickableIcons: false,
          scrollwheel: this.options['draggableMap'],
          disableDoubleClickZoom: true,
          disableDefaultUI: !this.options['showMapControls'],
          styles: JSON.parse(this.element.querySelector('[data-gmap-style]').innerHTML)
        };
        this.desktopMapElement = new google.maps.Map(this.element.querySelector('.map__map-container--desktop .map__gmap'), mapOptions);
        this.mobileMapElements = [];
        this.element.querySelectorAll('.map__map-container--mobile .map__gmap').forEach(function (item, index) {
          _this4.mobileMapElements[index] = new google.maps.Map(item, mapOptions);
        }); // Then we geocode all addresses

        this._geocodeAddresses(); // Make sure we attach the listeners so that it's properly resized


        google.maps.event.addDomListener(window, 'resize', function () {
          var desktopCenter = _this4.desktopMapElement.getCenter();

          google.maps.event.trigger(_this4.desktopMapElement, 'resize');

          _this4.desktopMapElement.setCenter(desktopCenter);

          _this4.mobileMapElements.forEach(function (mobileMap) {
            var mobileCenter = mobileMap.getCenter();
            google.maps.event.trigger(mobileMap, 'resize');
            mobileMap.setCenter(mobileCenter);
          });
        });
      }
    }, {
      key: "_onMarkerClicked",
      value: function _onMarkerClicked(address) {
        window.open("https://www.google.com/maps/search/?api=1&query=".concat(address), '_blank');
      }
    }, {
      key: "_geocodeAddresses",
      value: function _geocodeAddresses() {
        var _this5 = this;

        // Then, we geocode all the addresses, and place them on the map
        var geocoder = new google.maps.Geocoder();
        this.options['mapAddresses'].forEach(function (address, index) {
          geocoder.geocode({
            address: address
          }, function (results, status) {
            if (status !== google.maps.GeocoderStatus.OK) {
              if (Shopify.designMode) ;
            } else {
              var position = results[0].geometry.location;
              _this5.mapPositions[index] = position; // The desktop map holds all the markers, so we add it to the desktop global map.

              _this5.desktopMarkers[index] = new google.maps.Marker({
                map: index === 0 ? _this5.desktopMapElement : null,
                position: position,
                icon: {
                  path: 'M12.5,0 C6.388889,0 0,4.7304348 0,12.5217391 C0,19.8956522 11.111111,31.1652174 11.527778,31.5826087 C11.805556,31.8608696 12.083333,32 12.5,32 C12.916667,32 13.194444,31.8608696 13.472222,31.5826087 C13.888889,31.1652174 25,19.8956522 25,12.5217391 C25,4.7304348 18.611111,0 12.5,0 Z M12,16 C9.733333,16 8,14.2666667 8,12 C8,9.7333333 9.733333,8 12,8 C14.266667,8 16,9.7333333 16,12 C16,14.2666667 14.266667,16 12,16 Z',
                  fillColor: index === 0 ? _this5.options['markerActiveColor'] : _this5.options['markerColor'],
                  fillOpacity: 1,
                  anchor: new google.maps.Point(12, 30),
                  strokeWeight: 0
                }
              }); // We then add it on the corresponding mobile map

              _this5.mobileMarkers[index] = new google.maps.Marker({
                map: _this5.mobileMapElements[index],
                position: position,
                icon: {
                  path: 'M12.5,0 C6.388889,0 0,4.7304348 0,12.5217391 C0,19.8956522 11.111111,31.1652174 11.527778,31.5826087 C11.805556,31.8608696 12.083333,32 12.5,32 C12.916667,32 13.194444,31.8608696 13.472222,31.5826087 C13.888889,31.1652174 25,19.8956522 25,12.5217391 C25,4.7304348 18.611111,0 12.5,0 Z M12,16 C9.733333,16 8,14.2666667 8,12 C8,9.7333333 9.733333,8 12,8 C14.266667,8 16,9.7333333 16,12 C16,14.2666667 14.266667,16 12,16 Z',
                  fillColor: _this5.options['markerActiveColor'],
                  fillOpacity: 1,
                  anchor: new google.maps.Point(12, 30),
                  strokeWeight: 0
                }
              });

              _this5.desktopMarkers[index].addListener('click', _this5._onMarkerClicked.bind(_this5, address));

              _this5.mobileMarkers[index].addListener('click', _this5._onMarkerClicked.bind(_this5, address));

              if (index === 0) {
                _this5.desktopMapElement.setCenter(position);
              }

              _this5.mobileMapElements[index].setCenter(position);
            }
          });
        });
      }
    }]);

    return MapSection;
  }();

  var MinimalHeaderSection = /*#__PURE__*/function () {
    function MinimalHeaderSection(element) {
      _classCallCheck(this, MinimalHeaderSection);

      this.element = element;

      this._setupCssVariables();

      this._attachListeners();
    }

    _createClass(MinimalHeaderSection, [{
      key: "onUnload",
      value: function onUnload() {
        window.removeEventListener('resize', this._setupCssVariablesListener);
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this._setupCssVariablesListener = this._setupCssVariables.bind(this);
        window.addEventListener('resize', this._setupCssVariablesListener);
      }
      /**
       * We have some positioning that is based on the CSS variables, so we must make sure to update them whenever
       * the section is reloaded into the editor
       */

    }, {
      key: "_setupCssVariables",
      value: function _setupCssVariables() {
        document.documentElement.style.setProperty('--header-height', this.element.parentNode.clientHeight + 'px');
      }
    }]);

    return MinimalHeaderSection;
  }();

  var QuickLinksSection = function QuickLinksSection(element) {
    _classCallCheck(this, QuickLinksSection);

    this.element = element; // Make sure that the section is always visible in the editor, even if the option to hide it on desktop is checked

    if (Shopify.designMode) {
      this.element.classList.remove('hidden-lap-and-up');
    }
  };

  /**
   * This class handles both the newsletter popup and exit popup
   */

  var PopupsSection = /*#__PURE__*/function () {
    function PopupsSection(element) {
      var _this = this;

      _classCallCheck(this, PopupsSection);

      element.querySelectorAll('[data-popup-type]').forEach(function (popup) {
        if (popup.getAttribute('data-popup-type') === 'exit') {
          _this.exitPopup = new ExitPopup(popup);
        } else if (popup.getAttribute('data-popup-type') === 'newsletter') {
          _this.newsletterPopup = new NewsletterPopup(popup);
        }
      });
    }

    _createClass(PopupsSection, [{
      key: "onUnload",
      value: function onUnload() {
        if (this.exitPopup) {
          this.exitPopup.destroy();
        }

        if (this.newsletterPopup) {
          this.newsletterPopup.destroy();
        }
      }
    }, {
      key: "onBlockSelect",
      value: function onBlockSelect(event) {
        if (event.target.getAttribute('data-popup-type') === 'exit' && this.exitPopup) {
          this.exitPopup._openPopup();
        } else if (event.target.getAttribute('data-popup-type') === 'newsletter' && this.newsletterPopup) {
          this.newsletterPopup._openPopup();
        }
      }
    }, {
      key: "onBlockDeselect",
      value: function onBlockDeselect() {
        if (this.exitPopup) {
          this.exitPopup._closePopup();
        }

        if (this.newsletterPopup) {
          this.newsletterPopup._closePopup();
        }
      }
    }]);

    return PopupsSection;
  }();

  var ProductRecommendationsSection = /*#__PURE__*/function () {
    function ProductRecommendationsSection(element) {
      _classCallCheck(this, ProductRecommendationsSection);

      this.element = element;
      this.delegateElement = new Delegate(this.element);
      this.options = JSON.parse(this.element.getAttribute('data-section-settings'));

      if (this.options['useRecommendations']) {
        this._loadRecommendations().then(this._createSlideshow.bind(this));
      } else {
        this._createSlideshow();
      }

      this.productItemColorSwatch = new ProductItemColorSwatch(this.element);

      this._fixSafari();

      this._attachListeners();
    }

    _createClass(ProductRecommendationsSection, [{
      key: "onUnload",
      value: function onUnload() {
        if (!this.options['stackable']) {
          this.flickityInstance.destroy();
        }

        window.removeEventListener('resize', this._fixSafariListener);
        this.delegateElement.off('change');
        this.productItemColorSwatch.destroy();

        if (this.resizeObserver) {
          this.resizeObserver.disconnect();
        }
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this._fixSafariListener = this._fixSafari.bind(this);
        window.addEventListener('resize', this._fixSafariListener);
        this.delegateElement.on('click', '[data-action="add-to-cart"]', this._addToCart.bind(this));
        this.delegateElement.on('click', '[data-secondary-action="open-quick-view"]', this._openQuickView.bind(this));
      }
      /**
       * On Safari 11.1 and lower, the browser incorrectly calculate the height of flex and grid items due to a bug
       * on how padding percentage is calculated (that we use for allocating image space). This is solved in Safari 11.1 and higher.
       *
       * For those browsers, we fix that in JavaScript by setting the height directly for each aspect ratio image
       *
       * @private
       */

    }, {
      key: "_fixSafari",
      value: function _fixSafari() {
        var userAgent = window.navigator.userAgent.toLowerCase();

        if (userAgent.includes('safari') && (userAgent.includes('version/10.1') || userAgent.includes('version/10.3') || userAgent.includes('version/11.0'))) {
          var isPhone = Responsive.matchesBreakpoint('phone');
          this.element.querySelectorAll('.product-item__image-wrapper .aspect-ratio, .product-item__image-wrapper .placeholder-svg').forEach(function (image) {
            if (isPhone) {
              image.parentNode.style.height = null;
            } else {
              image.parentNode.style.height = "".concat(image.clientHeight, "px");
            }
          });
        }
      }
      /**
       * This section uses the native product recommendations feature of Shopify (https://help.shopify.com/en/themes/liquid/objects/recommendations)
       */

    }, {
      key: "_loadRecommendations",
      value: function _loadRecommendations() {
        var _this = this;

        var url = "".concat(window.routes.productRecommendationsUrl, "?section_id=").concat(this.element.getAttribute('data-section-id'), "&product_id=").concat(this.options['productId'], "&limit=").concat(this.options['recommendationsCount']);
        return fetch(url).then(function (response) {
          return response.text().then(function (content) {
            var container = document.createElement('div');
            container.innerHTML = content;
            _this.element.querySelector('.product-recommendations').innerHTML = container.querySelector('.product-recommendations').innerHTML;

            _this.productItemColorSwatch.recalculateSwatches();
          });
        });
      }
    }, {
      key: "_createSlideshow",
      value: function _createSlideshow() {
        var _this2 = this;

        if (!this.options['stackable']) {
          this.flickityInstance = new js(this.element.querySelector('.product-list'), {
            watchCSS: true,
            pageDots: false,
            prevNextButtons: true,
            contain: true,
            resize: false,
            groupCells: true,
            cellAlign: 'left',
            draggable: !window.matchMedia('(-moz-touch-enabled: 0), (hover: hover)').matches
          });
          var lastWidth = window.innerWidth;
          window.addEventListener('resize', function () {
            if (window.innerWidth !== lastWidth) {
              _this2.flickityInstance.resize();

              lastWidth = window.innerWidth;
            }
          });
        } // If the browser supports ResizeObserver we use it to detect when the size of the items in the carousel change,
        // and if that's the case we force Flickity to resize


        if (window.ResizeObserver && this.flickityInstance) {
          this.resizeObserver = new ResizeObserver(function () {
            _this2.flickityInstance.resize();
          });
          this.element.querySelectorAll('.product-item').forEach(function (item) {
            _this2.resizeObserver.observe(item);
          });
        }
      }
    }, {
      key: "_openQuickView",
      value: function _openQuickView(event, target) {
        var productUrl = new URL("".concat(window.location.origin).concat(target.getAttribute('data-product-url'))); // If we are on mobile or tablet, we redirect to product page directly

        if (Responsive.matchesBreakpoint('phone') || Responsive.matchesBreakpoint('tablet')) {
          window.location.href = productUrl.href;
          return false;
        }

        var modal = document.getElementById(target.getAttribute('aria-controls'));
        modal.classList.add('is-loading');
        productUrl.searchParams.set('view', 'quick-view');
        fetch(productUrl.href, {
          credentials: 'same-origin',
          method: 'GET'
        }).then(function (response) {
          response.text().then(function (content) {
            modal.querySelector('.modal__inner').innerHTML = content;
            modal.classList.remove('is-loading'); // Register a new section to power the JS

            var modalProductSection = new ProductSection(modal.querySelector('[data-section-type="product"]')); // We set a listener so we can cleanup on close

            var doCleanUp = function doCleanUp() {
              modalProductSection.onUnload();
              modal.removeEventListener('modal:closed', doCleanUp);
            };

            modal.addEventListener('modal:closed', doCleanUp);
          });
        });
      }
      /**
       * ---------------------------------------------------------------------------------------------------
       * INTERNAL CODE THAT HANDLE PRODUCT ADD TO CART
       * ---------------------------------------------------------------------------------------------------
       */

    }, {
      key: "_addToCart",
      value: function _addToCart(event, target) {
        var _this3 = this;

        if (window.theme.cartType === 'page') {
          return; // When using a cart type of page, we just simply redirect to the cart page
        }

        event.preventDefault(); // Prevent form to be submitted

        event.stopPropagation(); // First, we switch the status of the button

        target.setAttribute('disabled', 'disabled');
        document.dispatchEvent(new CustomEvent('theme:loading:start')); // Then we add the product in Ajax

        var formElement = target.closest('form[action*="/cart/add"]');
        fetch("".concat(window.routes.cartAddUrl, ".js"), {
          body: JSON.stringify(Form.serialize(formElement)),
          credentials: 'same-origin',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest' // This is needed as currently there is a bug in Shopify that assumes this header

          }
        }).then(function (response) {
          target.removeAttribute('disabled');

          if (response.ok) {
            // We simply trigger an event so the mini-cart can re-render
            _this3.element.dispatchEvent(new CustomEvent('product:added', {
              bubbles: true,
              detail: {
                button: target,
                variant: null,
                quantity: parseInt(formElement.querySelector('[name="quantity"]').value)
              }
            }));
          } else {
            document.dispatchEvent(new CustomEvent('theme:loading:end'));
          }
        });
        event.preventDefault();
      }
    }]);

    return ProductRecommendationsSection;
  }();

  var RecentlyViewedProductsSection = /*#__PURE__*/function () {
    function RecentlyViewedProductsSection(element) {
      _classCallCheck(this, RecentlyViewedProductsSection);

      this.element = element;
      this.delegateElement = new Delegate(this.element);
      this.options = JSON.parse(this.element.getAttribute('data-section-settings'));
      this.productItemColorSwatch = new ProductItemColorSwatch(this.element);

      this._fetchProducts();

      this._attachListeners();
    }

    _createClass(RecentlyViewedProductsSection, [{
      key: "onUnload",
      value: function onUnload() {
        if (this.flickityInstance) {
          this.flickityInstance.destroy();
        }

        this.productItemColorSwatch.destroy();

        if (this.resizeObserver) {
          this.resizeObserver.disconnect();
        }
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this.delegateElement.on('click', '[data-action="add-to-cart"]', this._addToCart.bind(this));
        this.delegateElement.on('click', '[data-secondary-action="open-quick-view"]', this._openQuickView.bind(this));
      }
      /**
       * In order to get the products to display, we hit the search template with the given IDs.
       */

    }, {
      key: "_fetchProducts",
      value: function _fetchProducts() {
        var _this = this;

        var queryString = this._getSearchQueryString();

        if (queryString === '') {
          return;
        }

        fetch("".concat(window.routes.searchUrl, "?section_id=").concat(this.element.getAttribute('data-section-id'), "&type=product&q=").concat(queryString), {
          credentials: 'same-origin',
          method: 'GET'
        }).then(function (response) {
          response.text().then(function (content) {
            var tempElement = document.createElement('div');
            tempElement.innerHTML = content; // Set the content

            _this.element.querySelector('.recently-viewed-products-placeholder').innerHTML = tempElement.querySelector('[data-section-type="recently-viewed-products"] .recently-viewed-products-placeholder').innerHTML; // By default the section hide the products, so we force the section to be visible

            _this.element.parentNode.style.display = 'block';

            _this.productItemColorSwatch.recalculateSwatches(); // Create the slideshow


            _this.flickityInstance = new js(_this.element.querySelector('.product-list'), {
              watchCSS: true,
              pageDots: false,
              prevNextButtons: true,
              contain: true,
              resize: false,
              groupCells: true,
              cellAlign: 'left',
              draggable: !window.matchMedia('(-moz-touch-enabled: 0), (hover: hover)').matches
            });
            var lastWidth = window.innerWidth;
            window.addEventListener('resize', function () {
              if (window.innerWidth !== lastWidth) {
                _this.flickityInstance.resize();

                lastWidth = window.innerWidth;
              }
            }); // If the browser supports ResizeObserver we use it to detect when the size of the items in the carousel change,
            // and if that's the case we force Flickity to resize

            if (window.ResizeObserver && _this.flickityInstance) {
              _this.resizeObserver = new ResizeObserver(function () {
                _this.flickityInstance.resize();
              });

              _this.element.querySelectorAll('.product-item').forEach(function (item) {
                _this.resizeObserver.observe(item);
              });
            }
          });
        });
      }
    }, {
      key: "_getSearchQueryString",
      value: function _getSearchQueryString() {
        var items = JSON.parse(localStorage.getItem('recentlyViewedProducts') || '[]'); // If we are on a product template, we make sure to remove the main product from the related product

        if (items.includes(this.options['currentProductId'])) {
          items.splice(items.indexOf(this.options['currentProductId']), 1);
        }

        return items.map(function (item) {
          return 'id:' + item;
        }).join(' OR ');
      }
    }, {
      key: "_openQuickView",
      value: function _openQuickView(event, target) {
        var productUrl = new URL("".concat(window.location.origin).concat(target.getAttribute('data-product-url'))); // If we are on mobile or tablet, we redirect to product page directly

        if (Responsive.matchesBreakpoint('phone') || Responsive.matchesBreakpoint('tablet')) {
          window.location.href = productUrl.href;
          return false;
        }

        var modal = document.getElementById(target.getAttribute('aria-controls'));
        modal.classList.add('is-loading');
        productUrl.searchParams.set('view', 'quick-view');
        fetch(productUrl.href, {
          credentials: 'same-origin',
          method: 'GET'
        }).then(function (response) {
          response.text().then(function (content) {
            modal.querySelector('.modal__inner').innerHTML = content;
            modal.classList.remove('is-loading'); // Register a new section to power the JS

            var modalProductSection = new ProductSection(modal.querySelector('[data-section-type="product"]')); // We set a listener so we can cleanup on close

            var doCleanUp = function doCleanUp() {
              modalProductSection.onUnload();
              modal.removeEventListener('modal:closed', doCleanUp);
            };

            modal.addEventListener('modal:closed', doCleanUp);
          });
        });
      }
      /**
       * ---------------------------------------------------------------------------------------------------
       * INTERNAL CODE THAT HANDLE PRODUCT ADD TO CART
       * ---------------------------------------------------------------------------------------------------
       */

    }, {
      key: "_addToCart",
      value: function _addToCart(event, target) {
        var _this2 = this;

        if (window.theme.cartType === 'page') {
          return; // When using a cart type of page, we just simply redirect to the cart page
        }

        event.preventDefault(); // Prevent form to be submitted

        event.stopPropagation(); // First, we switch the status of the button

        target.setAttribute('disabled', 'disabled');
        document.dispatchEvent(new CustomEvent('theme:loading:start')); // Then we add the product in Ajax

        var formElement = target.closest('form[action*="/cart/add"]');
        fetch("".concat(window.routes.cartAddUrl, ".js"), {
          body: JSON.stringify(Form.serialize(formElement)),
          credentials: 'same-origin',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest' // This is needed as currently there is a bug in Shopify that assumes this header

          }
        }).then(function (response) {
          target.removeAttribute('disabled');

          if (response.ok) {
            // We simply trigger an event so the mini-cart can re-render
            _this2.element.dispatchEvent(new CustomEvent('product:added', {
              bubbles: true,
              detail: {
                button: target,
                variant: null,
                quantity: parseInt(formElement.querySelector('[name="quantity"]').value)
              }
            }));
          } else {
            document.dispatchEvent(new CustomEvent('theme:loading:end'));
          }
        });
        event.preventDefault();
      }
    }]);

    return RecentlyViewedProductsSection;
  }();

  /**
   * This code is extracted from Slate
   */
  var SectionContainer = /*#__PURE__*/function () {
    function SectionContainer() {
      _classCallCheck(this, SectionContainer);

      this.constructors = [];
      this.instances = [];

      this._attachListeners();
    }

    _createClass(SectionContainer, [{
      key: "_attachListeners",
      value: function _attachListeners() {
        document.addEventListener('shopify:section:load', this._onSectionLoad.bind(this));
        document.addEventListener('shopify:section:unload', this._onSectionUnload.bind(this));
        document.addEventListener('shopify:section:select', this._onSelect.bind(this));
        document.addEventListener('shopify:section:deselect', this._onDeselect.bind(this));
        document.addEventListener('shopify:section:reorder', this._onReorder.bind(this));
        document.addEventListener('shopify:block:select', this._onBlockSelect.bind(this));
        document.addEventListener('shopify:block:deselect', this._onBlockDeselect.bind(this));
      }
    }, {
      key: "register",
      value: function register(type, constructor) {
        var _this = this;

        this.constructors[type] = constructor;
        document.querySelectorAll("[data-section-type=".concat(type, "]")).forEach(function (container) {
          _this._createInstance(container, constructor);
        });
      }
      /**
       * Return an object from an array of objects that matches the provided key and value
       */

    }, {
      key: "_findInstance",
      value: function _findInstance(array, key, value) {
        for (var i = 0; i < array.length; i++) {
          if (array[i][key] === value) {
            return array[i];
          }
        }
      }
      /**
       * Remove an object from an array of objects by matching the provided key and value
       */

    }, {
      key: "_removeInstance",
      value: function _removeInstance(array, key, value) {
        var i = array.length;

        while (i--) {
          if (array[i][key] === value) {
            array.splice(i, 1);
            break;
          }
        }

        return array;
      }
    }, {
      key: "_onSectionLoad",
      value: function _onSectionLoad(event) {
        var container = event.target.querySelector('[data-section-id]');

        if (container) {
          this._createInstance(container);
        }
      }
    }, {
      key: "_onSectionUnload",
      value: function _onSectionUnload(event) {
        var instance = this._findInstance(this.instances, 'id', event.detail.sectionId);

        if (!instance) {
          return;
        }

        if (typeof instance.onUnload === 'function') {
          instance.onUnload(event);
        }

        this.instances = this._removeInstance(this.instances, 'id', event.detail.sectionId);
      }
    }, {
      key: "_onSelect",
      value: function _onSelect(event) {
        var instance = this._findInstance(this.instances, 'id', event.detail.sectionId);

        if (instance && typeof instance.onSelect === 'function') {
          instance.onSelect(event);
        }
      }
    }, {
      key: "_onDeselect",
      value: function _onDeselect(event) {
        var instance = this._findInstance(this.instances, 'id', event.detail.sectionId);

        if (instance && typeof instance.onDeselect === 'function') {
          instance.onDeselect(event);
        }
      }
    }, {
      key: "_onReorder",
      value: function _onReorder(event) {
        var instance = this._findInstance(this.instances, 'id', event.detail.sectionId);

        if (instance && typeof instance.onReorder === 'function') {
          instance.onReorder(event);
        }
      }
    }, {
      key: "_onBlockSelect",
      value: function _onBlockSelect(event) {
        var instance = this._findInstance(this.instances, 'id', event.detail.sectionId);

        if (instance && typeof instance.onBlockSelect === 'function') {
          instance.onBlockSelect(event);
        }
      }
    }, {
      key: "_onBlockDeselect",
      value: function _onBlockDeselect(event) {
        var instance = this._findInstance(this.instances, 'id', event.detail.sectionId);

        if (instance && typeof instance.onBlockDeselect === 'function') {
          instance.onBlockDeselect(event);
        }
      }
    }, {
      key: "_createInstance",
      value: function _createInstance(container, constructor) {
        var id = container.getAttribute('data-section-id'),
            type = container.getAttribute('data-section-type');
        constructor = constructor || this.constructors[type];

        if (typeof constructor === 'undefined') {
          return;
        }

        var instance = Object.assign(new constructor(container), {
          id: id,
          type: type,
          container: container
        });
        this.instances.push(instance);
      }
    }]);

    return SectionContainer;
  }();

  var SlideshowSection = /*#__PURE__*/function () {
    function SlideshowSection(element) {
      var _this = this;

      _classCallCheck(this, SlideshowSection);

      this.element = element;
      this.options = JSON.parse(this.element.getAttribute('data-section-settings'));
      this.flickityInstance = new flickityFade(element.querySelector('.slideshow'), {
        pageDots: this.options['pageDots'],
        prevNextButtons: this.options['prevNextButtons'],
        wrapAround: true,
        dragThreshold: 12,
        resize: false,
        draggable: '>1',
        fade: this.options['transitionEffect'] === 'fade',
        setGallerySize: this.options['setGallerySize'],
        adaptiveHeight: this.options['adaptiveHeight'],
        autoPlay: this.options['autoPlay'] ? this.options['cycleSpeed'] : false
      });
      var lastWidth = window.innerWidth;
      window.addEventListener('resize', function () {
        if (window.innerWidth !== lastWidth) {
          _this.flickityInstance.resize();

          lastWidth = window.innerWidth;
        }
      });
    }

    _createClass(SlideshowSection, [{
      key: "onUnload",
      value: function onUnload() {
        this.flickityInstance.destroy();
      }
    }, {
      key: "onBlockSelect",
      value: function onBlockSelect(event) {
        if (this.flickityInstance.isActive) {
          this.flickityInstance.selectCell(parseInt(event.target.getAttribute('data-block-index')), false, event.detail.load);
          this.flickityInstance.pausePlayer();
        }
      }
    }, {
      key: "onBlockDeselect",
      value: function onBlockDeselect() {
        if (this.flickityInstance.isActive) {
          this.flickityInstance.unpausePlayer();
        }
      }
    }]);

    return SlideshowSection;
  }();

  var TextWithIconsSection = /*#__PURE__*/function () {
    function TextWithIconsSection(element) {
      var _this = this;

      _classCallCheck(this, TextWithIconsSection);

      this.flickityInstance = new js(element.querySelector('.text-with-icons'), {
        pageDots: true,
        prevNextButtons: false,
        wrapAround: true,
        autoPlay: 5000,
        resize: false,
        watchCSS: true
      });
      var lastWidth = window.innerWidth;
      window.addEventListener('resize', function () {
        if (window.innerWidth !== lastWidth) {
          _this.flickityInstance.resize();

          lastWidth = window.innerWidth;
        }
      });
    }

    _createClass(TextWithIconsSection, [{
      key: "onUnload",
      value: function onUnload() {
        this.flickityInstance.destroy();
      }
    }, {
      key: "onBlockSelect",
      value: function onBlockSelect(event) {
        if (this.flickityInstance.isActive) {
          this.flickityInstance.selectCell(parseInt(event.target.getAttribute('data-block-index')), false, event.detail.load);
          this.flickityInstance.pausePlayer();
        }
      }
    }, {
      key: "onBlockDeselect",
      value: function onBlockDeselect() {
        if (this.flickityInstance.isActive) {
          this.flickityInstance.unpausePlayer();
        }
      }
    }]);

    return TextWithIconsSection;
  }();

  var VideoSection = /*#__PURE__*/function () {
    function VideoSection(element) {
      _classCallCheck(this, VideoSection);

      this.element = element;
      this.domDelegate = new Delegate(this.element);
      this.options = JSON.parse(this.element.getAttribute('data-section-settings'));

      this._attachListeners();
    }

    _createClass(VideoSection, [{
      key: "onUnload",
      value: function onUnload() {
        this.domDelegate.off('click');
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this.domDelegate.on('click', '[data-action="play-video"]', this._playVideo.bind(this));
      }
    }, {
      key: "_playVideo",
      value: function _playVideo(event, target) {
        // To start the video, we simply replace the iframe source
        var iframe = target.querySelector('iframe');
        iframe.src = iframe.getAttribute('data-src');
        target.classList.add('is-playing');
      }
    }]);

    return VideoSection;
  }();

  var smoothscroll = createCommonjsModule(function (module, exports) {
    /* smoothscroll v0.4.4 - 2019 - Dustan Kasten, Jeremias Menichelli - MIT License */
    (function () {

      function polyfill() {
        // aliases
        var w = window;
        var d = document; // return if scroll behavior is supported and polyfill is not forced

        if ('scrollBehavior' in d.documentElement.style && w.__forceSmoothScrollPolyfill__ !== true) {
          return;
        } // globals


        var Element = w.HTMLElement || w.Element;
        var SCROLL_TIME = 468; // object gathering original scroll methods

        var original = {
          scroll: w.scroll || w.scrollTo,
          scrollBy: w.scrollBy,
          elementScroll: Element.prototype.scroll || scrollElement,
          scrollIntoView: Element.prototype.scrollIntoView
        }; // define timing method

        var now = w.performance && w.performance.now ? w.performance.now.bind(w.performance) : Date.now;
        /**
         * indicates if a the current browser is made by Microsoft
         * @method isMicrosoftBrowser
         * @param {String} userAgent
         * @returns {Boolean}
         */

        function isMicrosoftBrowser(userAgent) {
          var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];
          return new RegExp(userAgentPatterns.join('|')).test(userAgent);
        }
        /*
         * IE has rounding bug rounding down clientHeight and clientWidth and
         * rounding up scrollHeight and scrollWidth causing false positives
         * on hasScrollableSpace
         */


        var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;
        /**
         * changes scroll position inside an element
         * @method scrollElement
         * @param {Number} x
         * @param {Number} y
         * @returns {undefined}
         */

        function scrollElement(x, y) {
          this.scrollLeft = x;
          this.scrollTop = y;
        }
        /**
         * returns result of applying ease math function to a number
         * @method ease
         * @param {Number} k
         * @returns {Number}
         */


        function ease(k) {
          return 0.5 * (1 - Math.cos(Math.PI * k));
        }
        /**
         * indicates if a smooth behavior should be applied
         * @method shouldBailOut
         * @param {Number|Object} firstArg
         * @returns {Boolean}
         */


        function shouldBailOut(firstArg) {
          if (firstArg === null || _typeof(firstArg) !== 'object' || firstArg.behavior === undefined || firstArg.behavior === 'auto' || firstArg.behavior === 'instant') {
            // first argument is not an object/null
            // or behavior is auto, instant or undefined
            return true;
          }

          if (_typeof(firstArg) === 'object' && firstArg.behavior === 'smooth') {
            // first argument is an object and behavior is smooth
            return false;
          } // throw error when behavior is not supported


          throw new TypeError('behavior member of ScrollOptions ' + firstArg.behavior + ' is not a valid value for enumeration ScrollBehavior.');
        }
        /**
         * indicates if an element has scrollable space in the provided axis
         * @method hasScrollableSpace
         * @param {Node} el
         * @param {String} axis
         * @returns {Boolean}
         */


        function hasScrollableSpace(el, axis) {
          if (axis === 'Y') {
            return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
          }

          if (axis === 'X') {
            return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
          }
        }
        /**
         * indicates if an element has a scrollable overflow property in the axis
         * @method canOverflow
         * @param {Node} el
         * @param {String} axis
         * @returns {Boolean}
         */


        function canOverflow(el, axis) {
          var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];
          return overflowValue === 'auto' || overflowValue === 'scroll';
        }
        /**
         * indicates if an element can be scrolled in either axis
         * @method isScrollable
         * @param {Node} el
         * @param {String} axis
         * @returns {Boolean}
         */


        function isScrollable(el) {
          var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
          var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');
          return isScrollableY || isScrollableX;
        }
        /**
         * finds scrollable parent of an element
         * @method findScrollableParent
         * @param {Node} el
         * @returns {Node} el
         */


        function findScrollableParent(el) {
          while (el !== d.body && isScrollable(el) === false) {
            el = el.parentNode || el.host;
          }

          return el;
        }
        /**
         * self invoked function that, given a context, steps through scrolling
         * @method step
         * @param {Object} context
         * @returns {undefined}
         */


        function step(context) {
          var time = now();
          var value;
          var currentX;
          var currentY;
          var elapsed = (time - context.startTime) / SCROLL_TIME; // avoid elapsed times higher than one

          elapsed = elapsed > 1 ? 1 : elapsed; // apply easing to elapsed time

          value = ease(elapsed);
          currentX = context.startX + (context.x - context.startX) * value;
          currentY = context.startY + (context.y - context.startY) * value;
          context.method.call(context.scrollable, currentX, currentY); // scroll more if we have not reached our destination

          if (currentX !== context.x || currentY !== context.y) {
            w.requestAnimationFrame(step.bind(w, context));
          }
        }
        /**
         * scrolls window or element with a smooth behavior
         * @method smoothScroll
         * @param {Object|Node} el
         * @param {Number} x
         * @param {Number} y
         * @returns {undefined}
         */


        function smoothScroll(el, x, y) {
          var scrollable;
          var startX;
          var startY;
          var method;
          var startTime = now(); // define scroll context

          if (el === d.body) {
            scrollable = w;
            startX = w.scrollX || w.pageXOffset;
            startY = w.scrollY || w.pageYOffset;
            method = original.scroll;
          } else {
            scrollable = el;
            startX = el.scrollLeft;
            startY = el.scrollTop;
            method = scrollElement;
          } // scroll looping over a frame


          step({
            scrollable: scrollable,
            method: method,
            startTime: startTime,
            startX: startX,
            startY: startY,
            x: x,
            y: y
          });
        } // ORIGINAL METHODS OVERRIDES
        // w.scroll and w.scrollTo


        w.scroll = w.scrollTo = function () {
          // avoid action when no arguments are passed
          if (arguments[0] === undefined) {
            return;
          } // avoid smooth behavior if not required


          if (shouldBailOut(arguments[0]) === true) {
            original.scroll.call(w, arguments[0].left !== undefined ? arguments[0].left : _typeof(arguments[0]) !== 'object' ? arguments[0] : w.scrollX || w.pageXOffset, // use top prop, second argument if present or fallback to scrollY
            arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : w.scrollY || w.pageYOffset);
            return;
          } // LET THE SMOOTHNESS BEGIN!


          smoothScroll.call(w, d.body, arguments[0].left !== undefined ? ~~arguments[0].left : w.scrollX || w.pageXOffset, arguments[0].top !== undefined ? ~~arguments[0].top : w.scrollY || w.pageYOffset);
        }; // w.scrollBy


        w.scrollBy = function () {
          // avoid action when no arguments are passed
          if (arguments[0] === undefined) {
            return;
          } // avoid smooth behavior if not required


          if (shouldBailOut(arguments[0])) {
            original.scrollBy.call(w, arguments[0].left !== undefined ? arguments[0].left : _typeof(arguments[0]) !== 'object' ? arguments[0] : 0, arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : 0);
            return;
          } // LET THE SMOOTHNESS BEGIN!


          smoothScroll.call(w, d.body, ~~arguments[0].left + (w.scrollX || w.pageXOffset), ~~arguments[0].top + (w.scrollY || w.pageYOffset));
        }; // Element.prototype.scroll and Element.prototype.scrollTo


        Element.prototype.scroll = Element.prototype.scrollTo = function () {
          // avoid action when no arguments are passed
          if (arguments[0] === undefined) {
            return;
          } // avoid smooth behavior if not required


          if (shouldBailOut(arguments[0]) === true) {
            // if one number is passed, throw error to match Firefox implementation
            if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
              throw new SyntaxError('Value could not be converted');
            }

            original.elementScroll.call(this, // use left prop, first number argument or fallback to scrollLeft
            arguments[0].left !== undefined ? ~~arguments[0].left : _typeof(arguments[0]) !== 'object' ? ~~arguments[0] : this.scrollLeft, // use top prop, second argument or fallback to scrollTop
            arguments[0].top !== undefined ? ~~arguments[0].top : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop);
            return;
          }

          var left = arguments[0].left;
          var top = arguments[0].top; // LET THE SMOOTHNESS BEGIN!

          smoothScroll.call(this, this, typeof left === 'undefined' ? this.scrollLeft : ~~left, typeof top === 'undefined' ? this.scrollTop : ~~top);
        }; // Element.prototype.scrollBy


        Element.prototype.scrollBy = function () {
          // avoid action when no arguments are passed
          if (arguments[0] === undefined) {
            return;
          } // avoid smooth behavior if not required


          if (shouldBailOut(arguments[0]) === true) {
            original.elementScroll.call(this, arguments[0].left !== undefined ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, arguments[0].top !== undefined ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop);
            return;
          }

          this.scroll({
            left: ~~arguments[0].left + this.scrollLeft,
            top: ~~arguments[0].top + this.scrollTop,
            behavior: arguments[0].behavior
          });
        }; // Element.prototype.scrollIntoView


        Element.prototype.scrollIntoView = function () {
          // avoid smooth behavior if not required
          if (shouldBailOut(arguments[0]) === true) {
            original.scrollIntoView.call(this, arguments[0] === undefined ? true : arguments[0]);
            return;
          } // LET THE SMOOTHNESS BEGIN!


          var scrollableParent = findScrollableParent(this);
          var parentRects = scrollableParent.getBoundingClientRect();
          var clientRects = this.getBoundingClientRect();

          if (scrollableParent !== d.body) {
            // reveal element inside parent
            smoothScroll.call(this, scrollableParent, scrollableParent.scrollLeft + clientRects.left - parentRects.left, scrollableParent.scrollTop + clientRects.top - parentRects.top); // reveal parent in viewport unless is fixed

            if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
              w.scrollBy({
                left: parentRects.left,
                top: parentRects.top,
                behavior: 'smooth'
              });
            }
          } else {
            // reveal element in viewport
            w.scrollBy({
              left: clientRects.left,
              top: clientRects.top,
              behavior: 'smooth'
            });
          }
        };
      }

      {
        // commonjs
        module.exports = {
          polyfill: polyfill
        };
      }
    })();
  });

  /*! instant.page v5.1.0 - (C) 2019-2020 Alexandre Dieulot - https://instant.page/license */
  var mouseoverTimer;
  var lastTouchTimestamp;
  var prefetches = new Set();
  var prefetchElement = document.createElement('link');
  var isSupported = prefetchElement.relList && prefetchElement.relList.supports && prefetchElement.relList.supports('prefetch') && window.IntersectionObserver && 'isIntersecting' in IntersectionObserverEntry.prototype;
  var allowQueryString = ('instantAllowQueryString' in document.body.dataset);
  var allowExternalLinks = ('instantAllowExternalLinks' in document.body.dataset);
  var useWhitelist = ('instantWhitelist' in document.body.dataset);
  var mousedownShortcut = ('instantMousedownShortcut' in document.body.dataset);
  var DELAY_TO_NOT_BE_CONSIDERED_A_TOUCH_INITIATED_ACTION = 1111;
  var delayOnHover = 65;
  var useMousedown = false;
  var useMousedownOnly = false;
  var useViewport = false;

  if ('instantIntensity' in document.body.dataset) {
    var intensity = document.body.dataset.instantIntensity;

    if (intensity.substr(0, 'mousedown'.length) == 'mousedown') {
      useMousedown = true;

      if (intensity == 'mousedown-only') {
        useMousedownOnly = true;
      }
    } else if (intensity.substr(0, 'viewport'.length) == 'viewport') {
      if (!(navigator.connection && (navigator.connection.saveData || navigator.connection.effectiveType && navigator.connection.effectiveType.includes('2g')))) {
        if (intensity == "viewport") {
          /* Biggest iPhone resolution (which we want): 414 × 896 = 370944
           * Small 7" tablet resolution (which we don’t want): 600 × 1024 = 614400
           * Note that the viewport (which we check here) is smaller than the resolution due to the UI’s chrome */
          if (document.documentElement.clientWidth * document.documentElement.clientHeight < 450000) {
            useViewport = true;
          }
        } else if (intensity == "viewport-all") {
          useViewport = true;
        }
      }
    } else {
      var milliseconds = parseInt(intensity);

      if (!isNaN(milliseconds)) {
        delayOnHover = milliseconds;
      }
    }
  }

  if (isSupported) {
    var eventListenersOptions = {
      capture: true,
      passive: true
    };

    if (!useMousedownOnly) {
      document.addEventListener('touchstart', touchstartListener, eventListenersOptions);
    }

    if (!useMousedown) {
      document.addEventListener('mouseover', mouseoverListener, eventListenersOptions);
    } else if (!mousedownShortcut) {
      document.addEventListener('mousedown', mousedownListener, eventListenersOptions);
    }

    if (mousedownShortcut) {
      document.addEventListener('mousedown', mousedownShortcutListener, eventListenersOptions);
    }

    if (useViewport) {
      var triggeringFunction;

      if (window.requestIdleCallback) {
        triggeringFunction = function triggeringFunction(callback) {
          requestIdleCallback(callback, {
            timeout: 1500
          });
        };
      } else {
        triggeringFunction = function triggeringFunction(callback) {
          callback();
        };
      }

      triggeringFunction(function () {
        var intersectionObserver = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              var linkElement = entry.target;
              intersectionObserver.unobserve(linkElement);
              preload(linkElement.href);
            }
          });
        });
        document.querySelectorAll('a').forEach(function (linkElement) {
          if (isPreloadable(linkElement)) {
            intersectionObserver.observe(linkElement);
          }
        });
      });
    }
  }

  function touchstartListener(event) {
    /* Chrome on Android calls mouseover before touchcancel so `lastTouchTimestamp`
     * must be assigned on touchstart to be measured on mouseover. */
    lastTouchTimestamp = performance.now();
    var linkElement = event.target.closest('a');

    if (!isPreloadable(linkElement)) {
      return;
    }

    preload(linkElement.href);
  }

  function mouseoverListener(event) {
    if (performance.now() - lastTouchTimestamp < DELAY_TO_NOT_BE_CONSIDERED_A_TOUCH_INITIATED_ACTION) {
      return;
    }

    var linkElement = event.target.closest('a');

    if (!isPreloadable(linkElement)) {
      return;
    }

    linkElement.addEventListener('mouseout', mouseoutListener, {
      passive: true
    });
    mouseoverTimer = setTimeout(function () {
      preload(linkElement.href);
      mouseoverTimer = undefined;
    }, delayOnHover);
  }

  function mousedownListener(event) {
    var linkElement = event.target.closest('a');

    if (!isPreloadable(linkElement)) {
      return;
    }

    preload(linkElement.href);
  }

  function mouseoutListener(event) {
    if (event.relatedTarget && event.target.closest('a') == event.relatedTarget.closest('a')) {
      return;
    }

    if (mouseoverTimer) {
      clearTimeout(mouseoverTimer);
      mouseoverTimer = undefined;
    }
  }

  function mousedownShortcutListener(event) {
    if (performance.now() - lastTouchTimestamp < DELAY_TO_NOT_BE_CONSIDERED_A_TOUCH_INITIATED_ACTION) {
      return;
    }

    var linkElement = event.target.closest('a');

    if (event.which > 1 || event.metaKey || event.ctrlKey) {
      return;
    }

    if (!linkElement) {
      return;
    }

    linkElement.addEventListener('click', function (event) {
      if (event.detail == 1337) {
        return;
      }

      event.preventDefault();
    }, {
      capture: true,
      passive: false,
      once: true
    });
    var customEvent = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: false,
      detail: 1337
    });
    linkElement.dispatchEvent(customEvent);
  }

  function isPreloadable(linkElement) {
    if (!linkElement || !linkElement.href) {
      return;
    }

    if (useWhitelist && !('instant' in linkElement.dataset)) {
      return;
    }

    if (!allowExternalLinks && linkElement.origin != location.origin && !('instant' in linkElement.dataset)) {
      return;
    }

    if (!['http:', 'https:'].includes(linkElement.protocol)) {
      return;
    }

    if (linkElement.protocol == 'http:' && location.protocol == 'https:') {
      return;
    }

    if (!allowQueryString && linkElement.search && !('instant' in linkElement.dataset)) {
      return;
    }

    if (linkElement.hash && linkElement.pathname + linkElement.search == location.pathname + location.search) {
      return;
    }

    if ('noInstant' in linkElement.dataset) {
      return;
    }

    return true;
  }

  function preload(url) {
    if (prefetches.has(url)) {
      return;
    }

    var prefetcher = document.createElement('link');
    prefetcher.rel = 'prefetch';
    prefetcher.href = url;
    document.head.appendChild(prefetcher);
    prefetches.add(url);
  }

  var PriceRange = /*#__PURE__*/function (_HTMLElement) {
    _inherits(PriceRange, _HTMLElement);

    var _super = _createSuper(PriceRange);

    function PriceRange() {
      _classCallCheck(this, PriceRange);

      return _super.apply(this, arguments);
    }

    _createClass(PriceRange, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this = this;

        this.rangeLowerBound = this.querySelector('.price-range__range-group input:first-child');
        this.rangeHigherBound = this.querySelector('.price-range__range-group input:last-child');
        this.textInputLowerBound = this.querySelector('.price-range__input:first-child input');
        this.textInputHigherBound = this.querySelector('.price-range__input:last-child input'); // Select whole text on focus for text field to improve user experience

        this.textInputLowerBound.addEventListener('focus', function () {
          return _this.textInputLowerBound.select();
        });
        this.textInputHigherBound.addEventListener('focus', function () {
          return _this.textInputHigherBound.select();
        }); // Keep in sync the range with the text input fields

        this.textInputLowerBound.addEventListener('change', function (event) {
          event.target.value = Math.max(Math.min(parseInt(event.target.value), parseInt(_this.textInputHigherBound.value || event.target.max) - 1), event.target.min);
          _this.rangeLowerBound.value = event.target.value;

          _this.rangeLowerBound.parentElement.style.setProperty('--range-min', "".concat(parseInt(_this.rangeLowerBound.value) / parseInt(_this.rangeLowerBound.max) * 100, "%"));
        });
        this.textInputHigherBound.addEventListener('change', function (event) {
          event.target.value = Math.min(Math.max(parseInt(event.target.value), parseInt(_this.textInputLowerBound.value || event.target.min) + 1), event.target.max);
          _this.rangeHigherBound.value = event.target.value;

          _this.rangeHigherBound.parentElement.style.setProperty('--range-max', "".concat(parseInt(_this.rangeHigherBound.value) / parseInt(_this.rangeHigherBound.max) * 100, "%"));
        });
        this.rangeLowerBound.addEventListener('change', function (event) {
          _this.textInputLowerBound.value = event.target.value;

          _this.textInputLowerBound.dispatchEvent(new Event('change', {
            bubbles: true
          }));
        });
        this.rangeHigherBound.addEventListener('change', function (event) {
          _this.textInputHigherBound.value = event.target.value;

          _this.textInputHigherBound.dispatchEvent(new Event('change', {
            bubbles: true
          }));
        }); // We also have to bound the two range sliders

        this.rangeLowerBound.addEventListener('input', function (event) {
          _this.dispatchEvent(new CustomEvent('collection:abort-loading', {
            bubbles: true
          }));

          event.target.value = Math.min(parseInt(event.target.value), parseInt(_this.textInputHigherBound.value || event.target.max) - 1); // Bound the value

          event.target.parentElement.style.setProperty('--range-min', "".concat(parseInt(event.target.value) / parseInt(event.target.max) * 100, "%"));
          _this.textInputLowerBound.value = event.target.value;
        });
        this.rangeHigherBound.addEventListener('input', function (event) {
          _this.dispatchEvent(new CustomEvent('collection:abort-loading', {
            bubbles: true
          }));

          event.target.value = Math.max(parseInt(event.target.value), parseInt(_this.textInputLowerBound.value || event.target.min) + 1); // Bound the value

          event.target.parentElement.style.setProperty('--range-max', "".concat(parseInt(event.target.value) / parseInt(event.target.max) * 100, "%"));
          _this.textInputHigherBound.value = event.target.value;
        });
      }
    }]);

    return PriceRange;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
  window.customElements.define('price-range', PriceRange);

  var ProductRecommendations = /*#__PURE__*/function (_HTMLElement) {
    _inherits(ProductRecommendations, _HTMLElement);

    var _super = _createSuper(ProductRecommendations);

    function ProductRecommendations() {
      var _this;

      _classCallCheck(this, ProductRecommendations);

      _this = _super.call(this);
      _this._isLoaded = false;
      _this.delegateElement = new Delegate(_assertThisInitialized(_this));

      _this.delegateElement.on('click', '[data-action="add-to-cart"]', _this._addToCart.bind(_assertThisInitialized(_this)));

      return _this;
    }

    _createClass(ProductRecommendations, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        this._loadRecommendations();
      }
    }, {
      key: "_loadRecommendations",
      value: function _loadRecommendations() {
        var _this2 = this;

        if (this._isLoaded) {
          return;
        }

        this._isLoaded = true;
        var section = this.closest('.shopify-section'),
            intent = this.getAttribute('intent') || 'related',
            url = "".concat(Shopify.routes.root, "recommendations/products?product_id=").concat(this.getAttribute('product'), "&limit=").concat(this.getAttribute('limit') || 4, "&section_id=").concat(this.getAttribute('section-id'), "&intent=").concat(intent);
        fetch(url).then(function (response) {
          response.text().then(function (text) {
            var tempDiv = new DOMParser().parseFromString(text, 'text/html'),
                productRecommendationsElement = tempDiv.querySelector('product-recommendations');

            if (productRecommendationsElement.childElementCount > 0) {
              _this2.replaceChildren.apply(_this2, _toConsumableArray(document.importNode(productRecommendationsElement, true).childNodes)); // Create Flickity slider


              _this2.flickityInstance = new flickityFade(_this2.querySelector('.complementary-product-list'), {
                pageDots: false,
                watchCSS: true,
                groupCells: 2,
                cellAlign: 'left',
                prevNextButtons: true,
                wrapAround: true,
                dragThreshold: 12,
                percentPosition: true,
                resize: false,
                draggable: '>1'
              });
            } else {
              if (intent === 'related') {
                section.remove();
              } else {
                _this2.remove();
              }
            }
          });
        });
      }
      /**
       * ---------------------------------------------------------------------------------------------------
       * INTERNAL CODE THAT HANDLE PRODUCT ADD TO CART
       * ---------------------------------------------------------------------------------------------------
       */

    }, {
      key: "_addToCart",
      value: function _addToCart(event, target) {
        var _this3 = this;

        if (window.theme.cartType === 'page') {
          return; // When using a cart type of page, we just simply redirect to the cart page
        }

        event.preventDefault(); // Prevent form to be submitted

        event.stopPropagation(); // First, we switch the status of the button

        target.setAttribute('disabled', 'disabled');
        document.dispatchEvent(new CustomEvent('theme:loading:start')); // Then we add the product in Ajax

        var formElement = target.closest('form[action*="/cart/add"]');
        fetch("".concat(window.routes.cartAddUrl, ".js"), {
          body: JSON.stringify(Form.serialize(formElement)),
          credentials: 'same-origin',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest' // This is needed as currently there is a bug in Shopify that assumes this header

          }
        }).then(function (response) {
          target.removeAttribute('disabled');

          if (response.ok) {
            // We simply trigger an event so the mini-cart can re-render
            _this3.dispatchEvent(new CustomEvent('product:added', {
              bubbles: true,
              detail: {
                button: target,
                variant: null,
                quantity: parseInt(formElement.querySelector('[name="quantity"]').value)
              }
            }));
          } else {
            document.dispatchEvent(new CustomEvent('theme:loading:end'));
          }
        });
        event.preventDefault();
      }
    }]);

    return ProductRecommendations;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

  if (!window.customElements.get('product-recommendations')) {
    window.customElements.define('product-recommendations', ProductRecommendations);
  }

  var PrivacyBanner = /*#__PURE__*/function (_HTMLElement) {
    _inherits(PrivacyBanner, _HTMLElement);

    var _super = _createSuper(PrivacyBanner);

    function PrivacyBanner() {
      var _this;

      _classCallCheck(this, PrivacyBanner);

      _this = _super.call(this);
      _this.domDelegate = new Delegate(_assertThisInitialized(_this));
      window.Shopify.loadFeatures([{
        name: 'consent-tracking-api',
        version: '0.1',
        onLoad: _this._setupCookieBar.bind(_assertThisInitialized(_this))
      }]);

      _this.domDelegate.on('click', '[data-action="accept-terms"]', _this._acceptCookieBarTerms.bind(_assertThisInitialized(_this)));

      _this.domDelegate.on('click', '[data-action="decline-terms"]', _this._declineCookieBarTerms.bind(_assertThisInitialized(_this)));

      return _this;
    }

    _createClass(PrivacyBanner, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this2 = this;

        this.closest('.shopify-section').addEventListener('shopify:section:select', function () {
          return _this2.setAttribute('aria-hidden', 'false');
        });
        this.closest('.shopify-section').addEventListener('shopify:section:deselect', function () {
          return _this2.setAttribute('aria-hidden', 'true');
        });
      }
    }, {
      key: "_setupCookieBar",
      value: function _setupCookieBar() {
        // We check if we should make it visible
        try {
          if (window.Shopify.customerPrivacy.shouldShowGDPRBanner()) {
            this.setAttribute('aria-hidden', 'false');
          }
        } catch (e) {// Adblockers may prevent the customerPrivacy API from being loaded, so we catch errors here.
        }
      }
    }, {
      key: "_acceptCookieBarTerms",
      value: function _acceptCookieBarTerms() {
        var _this3 = this;

        window.Shopify.customerPrivacy.setTrackingConsent(true, function () {
          return _this3.setAttribute('aria-hidden', 'true');
        });
      }
    }, {
      key: "_declineCookieBarTerms",
      value: function _declineCookieBarTerms() {
        var _this4 = this;

        window.Shopify.customerPrivacy.setTrackingConsent(false, function () {
          return _this4.setAttribute('aria-hidden', 'true');
        });
      }
    }]);

    return PrivacyBanner;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

  if (!window.customElements.get('privacy-banner')) {
    window.customElements.define('privacy-banner', PrivacyBanner);
  }

  /**
   * This component must appear within a product form, and allows a customer to add extra information to the
   *
   */
  var GiftCardRecipient = /*#__PURE__*/function (_HTMLElement) {
    _inherits(GiftCardRecipient, _HTMLElement);

    var _super = _createSuper(GiftCardRecipient);

    function GiftCardRecipient() {
      _classCallCheck(this, GiftCardRecipient);

      return _super.apply(this, arguments);
    }

    _createClass(GiftCardRecipient, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this$recipientCheckb;

        var properties = Array.from(this.querySelectorAll('[name*="properties"]')),
            checkboxPropertyName = 'properties[__shopify_send_gift_card_to_recipient]';
        this.recipientCheckbox = properties.find(function (input) {
          return input.name === checkboxPropertyName;
        });
        this.recipientOtherProperties = properties.filter(function (input) {
          return input.name !== checkboxPropertyName;
        });
        this.recipientFieldsContainer = this.querySelector('.gift-card-recipient__fields');
        (_this$recipientCheckb = this.recipientCheckbox) === null || _this$recipientCheckb === void 0 ? void 0 : _this$recipientCheckb.addEventListener('change', this._synchronizeProperties.bind(this));

        this._synchronizeProperties();
      }
    }, {
      key: "_synchronizeProperties",
      value: function _synchronizeProperties() {
        var _this = this;

        this.recipientOtherProperties.forEach(function (property) {
          return property.disabled = !_this.recipientCheckbox.checked;
        });
        this.recipientFieldsContainer.classList.toggle('js:hidden', !this.recipientCheckbox.checked);
      }
    }]);

    return GiftCardRecipient;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

  if (!window.customElements.get('gift-card-recipient')) {
    window.customElements.define('gift-card-recipient', GiftCardRecipient);
  }

  (function () {
    var bootTheme = function bootTheme() {
      // Some polyfills not provided yet by polyfills.io
      if (window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = function (callback, thisArg) {
          thisArg = thisArg || window;

          for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
          }
        };
      } // Use for the smooth scroll polyfill


      smoothscroll.polyfill(); // Instantiate global plugins

      new CollapsibleManager();
      new LoadingBar();
      new ModalManager();
      new PopoverManager(); // Then, we instantiate specific sections that may appear in all pages, and then only the template specific sections

      var sections = new SectionContainer();
      sections.register('account', AccountSection);
      sections.register('announcement-bar', AnnouncementBarSection);
      sections.register('blog', BlogSection);
      sections.register('blog-sidebar', BlogSidebarSection);
      sections.register('blog-post', BlogPostSection);
      sections.register('cart', CartSection);
      sections.register('collection-list', CollectionListSection);
      sections.register('collection', CollectionSection);
      sections.register('featured-collection', FeaturedCollectionSection);
      sections.register('footer', FooterSection);
      sections.register('gift-card', GiftCardSection);
      sections.register('header', HeaderSection);
      sections.register('login', LoginSection);
      sections.register('map', MapSection);
      sections.register('minimal-header', MinimalHeaderSection);
      sections.register('popups', PopupsSection);
      sections.register('product-recommendations', ProductRecommendationsSection);
      sections.register('product', ProductSection);
      sections.register('quick-links', QuickLinksSection);
      sections.register('recently-viewed-products', RecentlyViewedProductsSection);
      sections.register('slideshow', SlideshowSection);
      sections.register('text-with-icons', TextWithIconsSection);
      sections.register('video', VideoSection);
      /**
       * ----------------------------------------------------------------------------
       * RTE
       * ----------------------------------------------------------------------------
       */

      (function () {
        // We wrap each RTE table by a specific class to allow wrapping
        document.querySelectorAll('.rte table').forEach(function (table) {
          table.outerHTML = '<div class="table-wrapper">' + table.outerHTML + '</div>';
        });
        document.querySelectorAll('.rte iframe').forEach(function (iframe) {
          // We scope the wrapping only for YouTube and Vimeo
          if (iframe.src.indexOf('youtube') !== -1 || iframe.src.indexOf('youtu.be') !== -1 || iframe.src.indexOf('vimeo') !== -1) {
            iframe.outerHTML = '<div class="video-wrapper">' + iframe.outerHTML + '</div>'; // Re-set the src attribute on each iframe after page load for Chrome's "incorrect iFrame content on 'back'" bug.
            // https://code.google.com/p/chromium/issues/detail?id=395791. Need to specifically target video and admin bar

            iframe.src = iframe.src;
          }
        });
      })();
      /**
       * ----------------------------------------------------------------------------
       * FLICKITY
       *
       * Starting from iOS 11, Safari on iOS is experiencing a bug that prevents
       * event.preventDefault to be called on dynamically added listeners, which is
       * what Flickity is using.
       *
       * The bug is coming from iOS but it impacts indirectly Flickity. A temporary
       * fix has been suggested here: https://github.com/metafizzy/flickity/issues/740
       * and that we are using here as a temporary workaround, that should be removed
       * once the bug is fixed on iOS
       * ----------------------------------------------------------------------------
       */


      (function () {
        var touchingCarousel = false,
            touchStartCoords;
        document.body.addEventListener('touchstart', function (e) {
          var flickitySliderElement = e.target.closest('.flickity-slider');

          if (flickitySliderElement) {
            var flickity = js.data(flickitySliderElement.closest('.flickity-enabled'));

            if (flickity.isDraggable) {
              touchingCarousel = true;
            } else {
              touchingCarousel = false;
              return;
            }
          } else {
            touchingCarousel = false;
            return;
          }

          touchStartCoords = {
            x: e.touches[0].pageX,
            y: e.touches[0].pageY
          };
        });
        document.body.addEventListener('touchmove', function (e) {
          if (!(touchingCarousel && e.cancelable)) {
            return;
          }

          var moveVector = {
            x: e.touches[0].pageX - touchStartCoords.x,
            y: e.touches[0].pageY - touchStartCoords.y
          };
          if (Math.abs(moveVector.x) > 8) e.preventDefault();
        }, {
          passive: false
        });
      })();
      /**
       * ----------------------------------------------------------------------------
       * UTILS
       * ----------------------------------------------------------------------------
       */

      /**
       * NOTE: I'm really not satisfied with the way this is handled, but this has been asked by design at the very
       *       end of the process. This should be abstracted at some point to make it easier to re-use and with slightly
       *       cleaner code!
       */


      (function () {
        // In card, elements that have a "card__section" with a [aria-expanded] attribute can be clickable to open the content
        // of the card itself
        var documentDelegate = new Delegate(document.body);
        documentDelegate.on('click', '.expandable-content__toggle', function (item, expandableButton) {
          var parentSection = expandableButton.closest('.expandable-content');

          if (parentSection.getAttribute('aria-expanded') === 'true') {
            // Previously expanded, so we have to close it
            parentSection.setAttribute('aria-expanded', 'false');
            parentSection.style['max-height'] = "".concat(parentSection.offsetHeight, "px");
            parentSection.offsetHeight; // Use to force a redraw

            parentSection.style['max-height'] = null; // Remove the attribute to let the CSS decide the max-height

            var expandableText = expandableButton.querySelector('.expandable-content__toggle-text');
            expandableText.innerHTML = expandableText.getAttribute('data-view-more'); // We also have to scroll back to the top to preserve scroll position

            var parentCard = parentSection.closest('.card');

            if (parentCard) {
              var amountToScroll = parentCard.getBoundingClientRect().top - 15 - parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height'));
              window.scrollBy({
                top: amountToScroll,
                behavior: 'smooth'
              });
            }
          } else {
            // Previously collapsed, so we have to open it
            parentSection.setAttribute('aria-expanded', 'true'); // Because the expandable button is still positioned absolutely, we need to add margin to the sibling
            // text to account the button. It's a bit ugly and hacky but this was the simplest I've found

            if (expandableButton.previousElementSibling) {
              expandableButton.previousElementSibling.style['margin-bottom'] = "".concat(parseInt(expandableButton.clientHeight), "px");
            }

            Animation.slideDown(parentSection, null, 'max-height');

            var _expandableText = expandableButton.querySelector('.expandable-content__toggle-text');

            _expandableText.innerHTML = _expandableText.getAttribute('data-view-less');
          }
        });

        var processCollapsibles = function processCollapsibles() {
          document.querySelectorAll('.expandable-content[aria-expanded]').forEach(function (item) {
            if (item.scrollHeight > item.clientHeight) {
              item.classList.add('expandable-content--expandable');
            } else {
              item.setAttribute('aria-expanded', 'true');
            }
          });
        };

        document.addEventListener('shopify:section:load', function (event) {
          processCollapsibles();
        });
        processCollapsibles();
      })();

      (function () {
        // Mobile browsers (like iOS) do not support opening keyboard, so we simply prevent the autofocus by unblurring
        // all the fields
        if (Responsive.getCurrentBreakpoint() === 'phone') {
          var autoFocusedElements = document.querySelectorAll('input[autofocus]');

          for (var i = 0; i < autoFocusedElements.length; i++) {
            autoFocusedElements[i].blur();
            autoFocusedElements[i].removeAttribute('autofocus');
          }
        }
      })();

      (function () {
        var documentDelegate = new Delegate(document.body);
        documentDelegate.on('click', '[href^="#"], [data-href]', function (event, target) {
          var selector = target.hasAttribute('href') ? target.getAttribute('href') : target.getAttribute('data-href');

          if (selector === '#' || selector === '#main') {
            return;
          }

          var element = null;

          try {
            element = document.querySelector(selector);
          } catch (exception) {
            // We may have an invalid selector, so if we catch it we just return
            return;
          }

          var offset = parseInt(target.getAttribute('data-offset') || 0),
              toTop = 0;

          while (element.offsetParent.tagName !== 'BODY') {
            toTop += element.offsetTop;
            element = element.offsetParent;
          }

          toTop += element.offsetTop;
          window.scrollTo({
            behavior: 'smooth',
            top: toTop - offset
          });
          event.preventDefault();
        });
      })();

      (function () {
        function handleFirstTab(event) {
          if (event.key === 'Tab') {
            document.body.classList.add('is-tabbing');
            window.removeEventListener('keydown', handleFirstTab);
          }
        }

        window.addEventListener('keydown', handleFirstTab);
      })();

      (function () {
        var documentDelegate = new Delegate(document.body);
        documentDelegate.on('keyup', 'input, textarea', function (event, target) {
          target.classList.toggle('is-filled', target.value !== '');
        });
        documentDelegate.on('change', 'select', function (event, target) {
          target.parentNode.classList.toggle('is-filled', target.value !== '');
        });
      })(); // This snippet allows to automatically adds a target="_blank" to any link that is external. This is actually
      // somewhat always desired by merchant and will allow to reduce support


      (function () {
        var links = document.links;
        fastdom.mutate(function () {
          for (var i = 0, linksLength = links.length; i < linksLength; i++) {
            if (links[i].hostname !== window.location.hostname) {
              links[i].target = '_blank';
              links[i].relList.add('noopener');
              links[i].setAttribute('aria-describedby', 'a11y-new-window-message');
            }
          }
        });
      })();
    }; // In order to prevent loading polyfills on modern browser, we first detect if the browser support fetch and assign (if
    // it does then it supports actually all the features we need). If that's not the case we first load the polyfill from
    // polyfill.io and then boot the theme, otherwise we can skip this step completely


    if ('fetch' in window && 'assign' in Object) {
      bootTheme();
    } else {
      var scriptEl = document.createElement('script');
      scriptEl.src = '//cdn.polyfill.io/v3/polyfill.min.js?unknown=polyfill&features=fetch,Element.prototype.closest,Element.prototype.matches,Element.prototype.remove,Element.prototype.classList,Array.prototype.includes,String.prototype.includes,Object.assign,CustomEvent,URL,DOMTokenList';
      scriptEl.async = false;

      scriptEl.onload = function () {
        bootTheme();
      };

      document.head.appendChild(scriptEl);
    }
  })();

})));
