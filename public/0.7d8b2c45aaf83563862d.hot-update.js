webpackHotUpdate(0,{

/***/ 432:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(5);
	var CSSModules = __webpack_require__(333);
	var styles = __webpack_require__(431);
	var Dashboard = (function (_super) {
	    __extends(Dashboard, _super);
	    function Dashboard() {
	        _super.apply(this, arguments);
	    }
	    Dashboard.prototype.render = function () {
	        return (React.createElement("div", null, React.createElement("h1", {styleName: 'title'}, "Dashboard")));
	    };
	    return Dashboard;
	}(React.Component));
	exports.Dashboard = Dashboard;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = CSSModules(Dashboard, styles);


/***/ },

/***/ 433:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Dashboard_1 = __webpack_require__(432);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Dashboard_1.default;


/***/ }

})