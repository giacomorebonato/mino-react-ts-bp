webpackHotUpdate(0,{

/***/ 407:
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(6), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var React = __webpack_require__(0);
var mobx_react_1 = __webpack_require__(38);
var components_1 = __webpack_require__(60);
var Toolbox = __webpack_require__(463);
var Button = Toolbox.Button, Input = Toolbox.Input;
var FormGroup = components_1.FormHelpers.FormGroup, Label = components_1.FormHelpers.Label;
var SignupForm = (function (_super) {
    __extends(SignupForm, _super);
    function SignupForm() {
        _super.apply(this, arguments);
    }
    SignupForm.prototype.render = function () {
        var authStore = this.context.stores.authStore;
        var signupForm = authStore.signupForm;
        var email = signupForm.email, password = signupForm.password;
        return (React.createElement("form", {className: 'max-width-2 mx-auto', onSubmit: function (e) {
            e.preventDefault();
            authStore.signup(email, password);
        }}, 
            React.createElement(FormGroup, null, 
                React.createElement(Label, null, "Email"), 
                React.createElement(Input, {onChange: function (e) {
                    var input = e.target;
                    authStore.changeSignupEmail(input.value);
                }, type: 'email', value: email})), 
            React.createElement("br", null), 
            React.createElement(FormGroup, null, 
                React.createElement(Label, null, "Password"), 
                React.createElement(Input, {type: 'password', onChange: function (e) {
                    var input = e.target;
                    authStore.changeSignupPassword(input.value);
                }, value: password})), 
            React.createElement("div", {className: 'flex justify-end'}, 
                React.createElement(Button, null, "Submit")
            )));
    };
    SignupForm.contextTypes = {
        stores: React.PropTypes.object
    };
    SignupForm = __decorate([
        mobx_react_1.observer, 
        __metadata('design:paramtypes', [])
    ], SignupForm);
    return SignupForm;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SignupForm;


/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(12); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "SignupForm.tsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ }

})
//# sourceMappingURL=0.2a3a348004da0e3258cc.hot-update.js.map