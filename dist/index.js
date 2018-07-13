"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var ReactCSSTransitionGroup = require("react-addons-css-transition-group");
require("./SamModal.css");
var SamModal = /** @class */ (function (_super) {
    __extends(SamModal, _super);
    function SamModal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // only respond to click on element (avoid bubbling through foreground layers)
        _this.handleMouseClick = function (e) {
            if (e.currentTarget === e.target) {
                _this.props.hideCb();
            }
        };
        // only respond to ESC press
        _this.handleKeyPress = function (e) {
            if (e.keyCode === 27) {
                _this.props.hideCb();
            }
        };
        return _this;
    }
    SamModal.prototype.componentDidMount = function () {
        var _this = this;
        document.addEventListener('keydown', function (e) { return _this.handleKeyPress(e); }, false);
    };
    SamModal.prototype.componentWillUnmount = function () {
        document.removeEventListener('keydown', this.props.hideCb, false);
    };
    // do not render modal inside app react DOM
    SamModal.prototype.render = function () {
        var _a = this.props, htmlContent = _a.htmlContent, hideCb = _a.hideCb, heightPct = _a.heightPct, widthPct = _a.widthPct, children = _a.children;
        var distVerticalPct = (100 - (heightPct ? heightPct : 60)) / 2; // defaults to 60
        var distHorizontalPct = (100 - (widthPct ? widthPct : 60)) / 2; // defaults to 60
        return ReactDOM.createPortal(React.createElement("div", { className: "Modal" },
            React.createElement("div", { className: "Modal__overlay", onClick: this.handleMouseClick },
                React.createElement(ReactCSSTransitionGroup, { transitionName: "modal", transitionAppear: true, transitionAppearTimeout: 0, transitionEnterTimeout: 0, transitionLeaveTimeout: 0 },
                    React.createElement("div", { className: "Modal__box", style: {
                            top: distVerticalPct + "%",
                            bottom: distVerticalPct + "%",
                            left: distHorizontalPct + "%",
                            right: distHorizontalPct + "%",
                        } },
                        React.createElement("div", { className: "Modal__close" },
                            React.createElement("i", { className: "Modal__close__icon fa fa-times", onClick: hideCb })),
                        React.createElement("div", { className: "Modal__content" },
                            children,
                            htmlContent && (React.createElement("div", { className: "Modal__content--html-content", dangerouslySetInnerHTML: { __html: htmlContent } }))))))), document.getElementById('ModalPortal'));
    };
    return SamModal;
}(React.Component));
exports.default = SamModal;
//# sourceMappingURL=index.js.map