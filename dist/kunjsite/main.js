(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/i4f":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/sidebartoggle.service.ts ***!
  \**********************************************************/
/*! exports provided: SidebartoggleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebartoggleService", function() { return SidebartoggleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class SidebartoggleService {
    constructor() {
        this.drawerToggleSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.drawerToggleObservable = this.drawerToggleSubject.asObservable();
    }
    toggleSidebar(sidbarstatus) {
        this.drawerToggleSubject.next(sidbarstatus);
    }
}
SidebartoggleService.ɵfac = function SidebartoggleService_Factory(t) { return new (t || SidebartoggleService)(); };
SidebartoggleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SidebartoggleService, factory: SidebartoggleService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebartoggleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular Apps\kunjsite\src\main.ts */"zUnb");


/***/ }),

/***/ "0VLA":
/*!**************************************************!*\
  !*** ./src/app/aboutpage/aboutpage.component.ts ***!
  \**************************************************/
/*! exports provided: AboutpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutpageComponent", function() { return AboutpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_allconst_Aboutme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/allconst/Aboutme */ "QwAb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_toolbar_text_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/toolbar-text.service */ "Wz0B");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-animate-on-scroll */ "wR1u");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function AboutpageComponent_div_18_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item2_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item2_r5);
} }
function AboutpageComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AboutpageComponent_div_18_div_8_Template, 3, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r2.year, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r2.fields, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r2.clgname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r2.description);
} }
function AboutpageComponent_div_24_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item2_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item2_r10);
} }
function AboutpageComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AboutpageComponent_div_24_div_8_Template, 3, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r7.current ? "rigthContentdataActive" : "rigthContentdata");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r7.current ? "blocktilelineActive" : "blocktileline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r7.year, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r7.fields, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r7.jobname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r7.description);
} }
class AboutpageComponent {
    constructor(router, toolbarTextChage, scrollDispatcher) {
        this.router = router;
        this.toolbarTextChage = toolbarTextChage;
        this.scrollDispatcher = scrollDispatcher;
        this.aboumedata = _shared_allconst_Aboutme__WEBPACK_IMPORTED_MODULE_1__["AboutMe"].data;
    }
    ngOnInit() { }
    gotoskill() {
        this.router.navigateByUrl('/Skill');
        this.toolbarTextChage.toolBarTextChange('Skill');
    }
}
AboutpageComponent.ɵfac = function AboutpageComponent_Factory(t) { return new (t || AboutpageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_toolbar_text_service__WEBPACK_IMPORTED_MODULE_3__["ToolbarTextService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollDispatcher"])); };
AboutpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutpageComponent, selectors: [["app-aboutpage"]], decls: 35, vars: 5, consts: [[1, "maincontent"], [1, "row", "row-no-margin", "row_100"], [1, "col-md-6", "imagbox"], ["animateOnScroll", "", "animationName", "animate__animated animate__zoomIn ", "src", "../../assets/img/faces/face.jpg", 1, "imgfacepic"], [1, "col-md-6", "aboutmesection"], [1, "aboutsectiontextdiv"], ["animateOnScroll", "", "animationName", "animate__animated animate__backInRight animate__delay-1s", 1, "mat-display-1", "h1style"], ["animateOnScroll", "", "animationName", "animate__animated animate__zoomIn animate__delay-1s", 1, "title", "subbodycss", "h1style", "margin_top_5"], ["animateOnScroll", "", "animationName", "animate__animated animate__zoomIn animate__delay-1s psize", 1, "margin_top_5"], [1, "row", "row-no-margin", 2, "margin-bottom", "15px"], [1, "col-md-6"], [1, "row", "row-no-margin", "titleodeducation"], [1, "educationtitile"], [1, "row", "row-no-margin", 2, "padding-left", "10%"], ["class", "col-12 rigthContentdata", "style", "color: white", 4, "ngFor", "ngForOf"], ["class", "col-12", "style", "color: white", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "row", "row-no-margin", 2, "margin-bottom", "10%", "text-align", "center", "margin-top", "10%"], ["animateOnScroll", "", "animationName", "animated animate__animated animate__zoomIn", 1, "block2", "title", "h1style", "margin_top_5", "hide-on-init"], [2, "width", "100%", "margin-top", "2%"], ["animateOnScroll", "", "animationName", "animated animate__animated animate__zoomIn", 1, "subbodycolor", "psize", "hide-on-init"], [2, "width", "100%", "margin-bottom", "5%"], ["animateOnScroll", "", "animationName", "animated animate__animated animate__zoomIn", 1, "raise", "contactmebtn", "hide-on-init", 3, "click"], [1, "col-12", "rigthContentdata", 2, "color", "white"], [1, "titlebox", 2, "margin-top", "10%"], ["animateOnScroll", "", "animationName", "animated animate__animated animate__flipInX", 1, "blocktileline", "hide-on-init"], ["animateOnScroll", "", "animationName", "animated animate__animated animate__backInLeft", 1, "blocktileline2", "hide-on-init"], ["class", "descriptionblock hide-on-init", "animateOnScroll", "", "animationName", "animated animate__animated animate__zoomIn", 4, "ngFor", "ngForOf"], ["animateOnScroll", "", "animationName", "animated animate__animated animate__zoomIn", 1, "descriptionblock", "hide-on-init"], [1, "psize"], [1, "col-12", 2, "color", "white", 3, "ngClass"], ["animateOnScroll", "", "animationName", "animated animate__animated animate__flipInX", 1, "hide-on-init", 3, "ngClass"]], template: function AboutpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " To know about gained course exposure, Scroll down. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AboutpageComponent_div_18_Template, 9, 4, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AboutpageComponent_div_24_Template, 9, 6, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " To Know More About Skill And Projects click here.. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutpageComponent_Template_button_click_33_listener() { return ctx.gotoskill(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Skills ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.aboumedata.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.aboumedata.subBody, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.aboumedata.Education);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.aboumedata.Experince);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.aboumedata.endbody, " ");
    } }, directives: [ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5__["AnimateOnScrollDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Quantico:ital,wght@1,700&display=swap\");\n.h1style[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  margin: 0% !important;\n}\n.maincontent[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  top: 64px;\n  bottom: 0%;\n}\n.bodycontent[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  top: 100vh;\n  color: #FFFFFF;\n}\n.imgfacepic[_ngcontent-%COMP%] {\n  width: 500px;\n}\n.contactmebtn[_ngcontent-%COMP%] {\n  color: #B80F0A;\n  background-color: transparent;\n  font-size: 15px;\n  font-family: \"Open Sans\";\n  border: 1px solid #B80F0A;\n  font-family: \"Quantico\";\n  padding: 8px;\n  padding-right: 25px;\n  padding-left: 25px;\n}\n.contactmebtn[_ngcontent-%COMP%]:hover, .contactmebtn[_ngcontent-%COMP%]:focus {\n  border-color: #B80F0A;\n  color: #B80F0A;\n}\n.yearbox[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n}\n.raise[_ngcontent-%COMP%]:hover, .raise[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0.7em 0.7em -0.4em #B80F0A;\n  transform: translateY(-0.25em);\n}\n.imagbox[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.titleodeducation[_ngcontent-%COMP%] {\n  display: flex;\n  color: #FFFFFF;\n  justify-content: center;\n}\n.educationtitile[_ngcontent-%COMP%] {\n  font-family: \"Quantico\";\n}\n.row-no-margin[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: 0px !important;\n  margin-right: 0px !important;\n}\n.blocktileline[_ngcontent-%COMP%] {\n  font-family: \"Quantico\";\n  color: #676767;\n  position: static;\n  font-size: 50px;\n}\n.blocktilelineActive[_ngcontent-%COMP%] {\n  font-family: \"Quantico\";\n  color: #676767;\n  position: static;\n  font-size: 50px;\n}\n.descriptionblock[_ngcontent-%COMP%] {\n  border-left: 1px solid #676767;\n  padding-left: 2%;\n  margin-left: 3%;\n  color: #676767;\n}\n.titlebox[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100px;\n}\n.blocktileline2[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 18px;\n  opacity: 0.8;\n  font-size: 20px;\n}\n.blockline3[_ngcontent-%COMP%] {\n  position: static;\n}\n.rigthContentdata[_ngcontent-%COMP%] {\n  border-left: 1px solid #B80F0A;\n}\n.rigthContentdataActive[_ngcontent-%COMP%] {\n  border-left: 1px solid #355E3B;\n}\n.blocktileline[_ngcontent-%COMP%]::before {\n  width: 10px;\n  height: 10px;\n  top: 10px;\n  left: -21px;\n  position: absolute;\n  content: \"\";\n  border: 2px solid #B80F0A;\n  background-color: #FFFFFF;\n}\n.blocktilelineActive[_ngcontent-%COMP%]::before {\n  width: 10px;\n  height: 10px;\n  top: 10px;\n  left: -21px;\n  position: absolute;\n  content: \"\";\n  border: 2px solid #355E3B;\n  background-color: #FFFFFF;\n}\n.col[_ngcontent-%COMP%] {\n  flex: 1;\n  \n}\n.yearboxdata[_ngcontent-%COMP%] {\n  height: 100% !important;\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  text-align: center;\n  justify-content: center;\n}\n.row_100[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.aboutmesection[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: #FFFFFF;\n}\n.margin_top_5[_ngcontent-%COMP%] {\n  margin-top: 5% !important;\n}\n.animated[_ngcontent-%COMP%] {\n  visibility: visible !important;\n}\n.hide-on-init[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.aboutsectiontextdiv[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.block2[_ngcontent-%COMP%] {\n  padding-left: 5%;\n  padding-right: 5%;\n  font-size: 18px !important;\n}\n.margin_2[_ngcontent-%COMP%] {\n  margin-top: 2%;\n}\n.subbodycolor[_ngcontent-%COMP%] {\n  color: #676767;\n}\n.subbodycss[_ngcontent-%COMP%] {\n  font-size: 20px !important;\n}\n.psize[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n}\n@media only screen and (max-width: 600px) {\n  .imgfacepic[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .imagbox[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    padding-right: 0%;\n    padding-left: 0%;\n  }\n\n  .row-no-margin[_ngcontent-%COMP%] {\n    height: auto !important;\n    margin-left: 0px !important;\n    margin-right: 0px !important;\n  }\n\n  .aboutsectiontextdiv[_ngcontent-%COMP%] {\n    margin-top: 10%;\n    width: 95%;\n  }\n\n  .subbodycss[_ngcontent-%COMP%] {\n    font-size: 13px !important;\n  }\n\n  .psize[_ngcontent-%COMP%] {\n    font-size: 12px !important;\n  }\n}\n@media only screen and (max-width: 1400px) {\n  .subbodycss[_ngcontent-%COMP%] {\n    font-size: 13px !important;\n  }\n\n  .psize[_ngcontent-%COMP%] {\n    font-size: 13px !important;\n  }\n\n  .blocktileline[_ngcontent-%COMP%] {\n    font-family: \"Quantico\";\n    color: #676767;\n    position: static;\n    font-size: 30px !important;\n  }\n\n  .h1style[_ngcontent-%COMP%] {\n    color: #FFFFFF;\n    margin: 0% !important;\n    font-size: 17px;\n  }\n\n  .imgfacepic[_ngcontent-%COMP%] {\n    width: 400px;\n  }\n\n  .block2[_ngcontent-%COMP%] {\n    padding-left: 3%;\n    padding-right: 3%;\n    font-size: 13px !important;\n  }\n\n  .blocktileline2[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 11px;\n    opacity: 0.8;\n    font-size: 15px;\n  }\n\n  .educationtitile[_ngcontent-%COMP%] {\n    font-family: \"Quantico\";\n    font-size: 20px;\n  }\n\n  .contactmebtn[_ngcontent-%COMP%] {\n    color: #B80F0A;\n    background-color: transparent;\n    font-size: 12px;\n    font-family: \"Open Sans\";\n    border: 1px solid #B80F0A;\n    font-family: \"Quantico\";\n    padding: 6px;\n    padding-right: 25px;\n    padding-left: 25px;\n  }\n  .contactmebtn[_ngcontent-%COMP%]:hover, .contactmebtn[_ngcontent-%COMP%]:focus {\n    border-color: #B80F0A;\n    color: #B80F0A;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaGFyZWRcXGNzc3ZhclxcdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFxhYm91dHBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsOEVBQUE7QUFDQSw2RkFBQTtBQ0FSO0VBQ0ksY0RHTztFQ0ZQLHFCQUFBO0FBRUo7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBRUo7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxjRFpPO0FDY1g7QUFDQTtFQUNJLFlBQUE7QUFFSjtBQUNBO0VBQ0ksY0RyQlM7RUNzQlQsNkJBQUE7RUFDQSxlQUFBO0VBQ0Esd0JEbkJhO0VDb0JiLHlCQUFBO0VBQ0EsdUJEdEJXO0VDdUJYLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRUo7QUFESTtFQUVJLHFCRGhDSztFQ2lDTCxjRGpDSztBQ21DYjtBQUVBO0VBQ0ksY0RyQ087QUNzQ1g7QUFFQTs7RUFFSSx3Q0FBQTtFQUNBLDhCQUFBO0FBQ0o7QUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUVBO0VBQ0ksYUFBQTtFQUNBLGNEdkRPO0VDd0RQLHVCQUFBO0FBQ0o7QUFFQTtFQUNJLHVCRHpEVztBQzBEZjtBQUVBO0VBQ0ksV0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUFDSjtBQUVBO0VBQ0ksdUJEbkVXO0VDb0VYLGNEdEVLO0VDdUVMLGdCQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQ0E7RUFDSSx1QkR6RVc7RUMwRVgsY0Q1RUs7RUM2RUwsZ0JBQUE7RUFDQSxlQUFBO0FBRUo7QUFDQTtFQUNJLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0RyRks7QUN1RlQ7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtBQUVKO0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUVKO0FBQ0E7RUFDSSxnQkFBQTtBQUVKO0FBQ0E7RUFDSSw4QkFBQTtBQUVKO0FBQUE7RUFDSSw4QkFBQTtBQUdKO0FBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkR4SE87QUMySFg7QUFEQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHlCRGxJTztBQ3NJWDtBQURBO0VBQ0ksT0FBQTtFQUNBLDhCQUFBO0FBSUo7QUFEQTtFQUNJLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBSUo7QUFEQTtFQUNJLFlBQUE7QUFJSjtBQURBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNENUpPO0FDZ0tYO0FBREE7RUFDSSx5QkFBQTtBQUlKO0FBRkE7RUFDSSw4QkFBQTtBQUtKO0FBSEE7RUFDSSxrQkFBQTtBQU1KO0FBSEE7RUFDSSxVQUFBO0FBTUo7QUFIQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQU1KO0FBSEE7RUFDSSxjQUFBO0FBTUo7QUFIQTtFQUNJLGNEdkxLO0FDNkxUO0FBSkE7RUFDSSwwQkFBQTtBQU9KO0FBTEE7RUFDSSwwQkFBQTtBQVFKO0FBTEE7RUFDSTtJQUNJLFdBQUE7RUFRTjs7RUFORTtJQUNJLGFBQUE7SUFDQSxzQkFBQTtJQUNBLHNCQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtFQVNOOztFQVBFO0lBQ0ksdUJBQUE7SUFDQSwyQkFBQTtJQUNBLDRCQUFBO0VBVU47O0VBUkU7SUFDSSxlQUFBO0lBQ0EsVUFBQTtFQVdOOztFQVRFO0lBQ0ksMEJBQUE7RUFZTjs7RUFWRTtJQUNJLDBCQUFBO0VBYU47QUFDRjtBQVZBO0VBQ0k7SUFDSSwwQkFBQTtFQVlOOztFQVZFO0lBQ0ksMEJBQUE7RUFhTjs7RUFYRTtJQUNJLHVCRGxPTztJQ21PUCxjRHJPQztJQ3NPRCxnQkFBQTtJQUNBLDBCQUFBO0VBY047O0VBWkU7SUFDSSxjRDNPRztJQzRPSCxxQkFBQTtJQUNBLGVBQUE7RUFlTjs7RUFiRTtJQUNJLFlBQUE7RUFnQk47O0VBYkU7SUFDSSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsMEJBQUE7RUFnQk47O0VBYkU7SUFDSSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtFQWdCTjs7RUFkRTtJQUNJLHVCRDdQTztJQzhQUCxlQUFBO0VBaUJOOztFQWZFO0lBQ0ksY0RyUUs7SUNzUUwsNkJBQUE7SUFDQSxlQUFBO0lBQ0Esd0JEblFTO0lDb1FULHlCQUFBO0lBQ0EsdUJEdFFPO0lDdVFQLFlBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0VBa0JOO0VBakJNO0lBRUkscUJEaFJDO0lDaVJELGNEalJDO0VDbVNYO0FBQ0YiLCJmaWxlIjoiYWJvdXRwYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1RdWFudGljbzppdGFsLHdnaHRAMSw3MDAmZGlzcGxheT1zd2FwJyk7XHJcbiRiYWNncm91bmRfZGFyazojMTAxODIwRkY7XHJcbiRzdXJmYWNlX2JhY2dyb3VuZF9kYXJrOiMyQjMwM0Q7XHJcbiRwcmltYXJ5X3JlZDojQjgwRjBBO1xyXG4kbWFpbnRpdGxlOiNGRkZGRkY7XHJcbiRzdWJib2R5OiM2NzY3Njc7XHJcbiRzdWJib2R5bGlnaHQ6I0QwRDBEMDtcclxuJGZvbnRzdHlsZW1haW46J1F1YW50aWNvJztcclxuJGZvbnRzdHlsZXNlY29uZDonT3BlbiBTYW5zJztcclxuJHByaW1hcnlfZ3JlZW46IzM1NUUzQjtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIkBpbXBvcnQgXCIuLi9zaGFyZWQvY3NzdmFyL3ZhcmlhYmxlcy5zY3NzXCI7XHJcbi5oMXN0eWxlIHtcclxuICAgIGNvbG9yOiAkbWFpbnRpdGxlO1xyXG4gICAgbWFyZ2luOiAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWFpbmNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0b3A6IDY0cHg7XHJcbiAgICBib3R0b206IDAlO1xyXG59XHJcblxyXG4uYm9keWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0b3A6IDEwMHZoO1xyXG4gICAgY29sb3I6ICRtYWludGl0bGU7XHJcbn1cclxuXHJcbi5pbWdmYWNlcGljIHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxufVxyXG5cclxuLmNvbnRhY3RtZWJ0biB7XHJcbiAgICBjb2xvcjogJHByaW1hcnlfcmVkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnRzdHlsZXNlY29uZDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5X3JlZDtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udHN0eWxlbWFpbjtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgICAmOmhvdmVyLFxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeV9yZWQ7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5X3JlZDtcclxuICAgIH1cclxufVxyXG5cclxuLnllYXJib3gge1xyXG4gICAgY29sb3I6ICRtYWludGl0bGU7XHJcbn1cclxuXHJcbi5yYWlzZTpob3ZlcixcclxuLnJhaXNlOmZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMC43ZW0gMC43ZW0gLTAuNGVtICRwcmltYXJ5X3JlZDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yNWVtKTtcclxufVxyXG5cclxuLmltYWdib3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aXRsZW9kZWR1Y2F0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBjb2xvcjogJG1haW50aXRsZTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZWR1Y2F0aW9udGl0aWxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udHN0eWxlbWFpbjtcclxufVxyXG5cclxuLnJvdy1uby1tYXJnaW4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmxvY2t0aWxlbGluZSB7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnRzdHlsZW1haW47XHJcbiAgICBjb2xvcjogJHN1YmJvZHk7XHJcbiAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG59XHJcbi5ibG9ja3RpbGVsaW5lQWN0aXZlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udHN0eWxlbWFpbjtcclxuICAgIGNvbG9yOiAkc3ViYm9keTtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbmJsb2NrIHtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgJHN1YmJvZHk7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xyXG4gICAgY29sb3I6ICRzdWJib2R5O1xyXG59XHJcblxyXG4udGl0bGVib3gge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLmJsb2NrdGlsZWxpbmUyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMThweDtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmJsb2NrbGluZTMge1xyXG4gICAgcG9zaXRpb246IHN0YXRpYztcclxufVxyXG5cclxuLnJpZ3RoQ29udGVudGRhdGEge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAkcHJpbWFyeV9yZWQ7XHJcbn1cclxuLnJpZ3RoQ29udGVudGRhdGFBY3RpdmUge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAkcHJpbWFyeV9ncmVlbjtcclxufVxyXG5cclxuLmJsb2NrdGlsZWxpbmU6OmJlZm9yZSB7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIHRvcDogMTBweDtcclxuICAgIGxlZnQ6IC0yMXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICRwcmltYXJ5X3JlZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWludGl0bGU7XHJcbn1cclxuLmJsb2NrdGlsZWxpbmVBY3RpdmU6OmJlZm9yZSB7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIHRvcDogMTBweDtcclxuICAgIGxlZnQ6IC0yMXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICRwcmltYXJ5X2dyZWVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW50aXRsZTtcclxufVxyXG5cclxuLmNvbCB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgLyogYWRkaXRpb25hbGx5LCBlcXVhbCB3aWR0aCAqL1xyXG59XHJcblxyXG4ueWVhcmJveGRhdGEge1xyXG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ucm93XzEwMCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5hYm91dG1lc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAkbWFpbnRpdGxlO1xyXG59XHJcblxyXG4ubWFyZ2luX3RvcF81IHtcclxuICAgIG1hcmdpbi10b3A6IDUlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmFuaW1hdGVkIHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcclxufVxyXG4uaGlkZS1vbi1pbml0IHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLmFib3V0c2VjdGlvbnRleHRkaXYge1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLmJsb2NrMiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gICAgcGFkZGluZy1yaWdodDogNSU7XHJcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hcmdpbl8yIHtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG59XHJcblxyXG4uc3ViYm9keWNvbG9yIHtcclxuICAgIGNvbG9yOiAkc3ViYm9keTtcclxufVxyXG4uc3ViYm9keWNzc3tcclxuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5wc2l6ZXtcclxuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuaW1nZmFjZXBpYyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2JveCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMCU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwJTtcclxuICAgIH1cclxuICAgIC5yb3ctbm8tbWFyZ2luIHtcclxuICAgICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5hYm91dHNlY3Rpb250ZXh0ZGl2IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgIH1cclxuICAgIC5zdWJib2R5Y3Nze1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnBzaXple1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MDBweCkge1xyXG4gICAgLnN1YmJvZHljc3N7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAucHNpemV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuYmxvY2t0aWxlbGluZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250c3R5bGVtYWluO1xyXG4gICAgICAgIGNvbG9yOiAkc3ViYm9keTtcclxuICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmgxc3R5bGUge1xyXG4gICAgICAgIGNvbG9yOiAkbWFpbnRpdGxlO1xyXG4gICAgICAgIG1hcmdpbjogMCUgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICB9XHJcbiAgICAuaW1nZmFjZXBpYyB7XHJcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ibG9jazIge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMyU7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMyU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5ibG9ja3RpbGVsaW5lMiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMTFweDtcclxuICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLmVkdWNhdGlvbnRpdGlsZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250c3R5bGVtYWluO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIC5jb250YWN0bWVidG4ge1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeV9yZWQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udHN0eWxlc2Vjb25kO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5X3JlZDtcclxuICAgICAgICBmb250LWZhbWlseTogJGZvbnRzdHlsZW1haW47XHJcbiAgICAgICAgcGFkZGluZzogNnB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgICAgICY6aG92ZXIsXHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnlfcmVkO1xyXG4gICAgICAgICAgICBjb2xvcjogJHByaW1hcnlfcmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutpageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-aboutpage',
                templateUrl: './aboutpage.component.html',
                styleUrls: ['./aboutpage.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_toolbar_text_service__WEBPACK_IMPORTED_MODULE_3__["ToolbarTextService"] }, { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollDispatcher"] }]; }, null); })();


/***/ }),

/***/ "4iOu":
/*!***********************************************!*\
  !*** ./src/app/services/contactme.service.ts ***!
  \***********************************************/
/*! exports provided: ContactmeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactmeService", function() { return ContactmeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




class ContactmeService {
    constructor(db, datepipe) {
        this.db = db;
        this.datepipe = datepipe;
        this.dbPath = '/Contacts';
        this.contactref = db.list(this.dbPath);
    }
    create(contact) {
        console.log(contact);
        let latest_date = this.datepipe.transform(new Date(), 'yyyy-MM-dd hh:mm a');
        contact.date = latest_date;
        return this.contactref.push(contact);
    }
}
ContactmeService.ɵfac = function ContactmeService_Factory(t) { return new (t || ContactmeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"])); };
ContactmeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContactmeService, factory: ContactmeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactmeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] }]; }, null); })();


/***/ }),

/***/ "4zdL":
/*!**********************************************!*\
  !*** ./src/app/toolbar/toolbar.component.ts ***!
  \**********************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_sidebartoggle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/sidebartoggle.service */ "/i4f");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_toolbar_text_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/toolbar-text.service */ "Wz0B");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");










function ToolbarComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToolbarComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.toggleSidenav(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ToolbarComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToolbarComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.CloseBtn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "arrow_back_ios");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ToolbarComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToolbarComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.gotohome(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "home");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ToolbarComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToolbarComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.openFullscreen(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "fullscreen");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ToolbarComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToolbarComponent_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.closeFullscreen(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "fullscreen_exit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ToolbarComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToolbarComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.CloseBtn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "cancel_presentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ToolbarComponent {
    constructor(document, toggleService, router, toolbarTitle) {
        this.document = document;
        this.toggleService = toggleService;
        this.router = router;
        this.toolbarTitle = toolbarTitle;
        this.openSidnav = false;
        this.title = 'Home';
        this.isClose = false;
    }
    ngOnInit() {
        this.chkScreenMode();
        this.elem = document.documentElement;
        console.log(this.router.routerState.snapshot.url);
        this.toggleSubscription = this.toggleService.drawerToggleObservable.subscribe((data) => {
            if (data === 'open') {
                this.openSidnav = true;
            }
            else {
                this.openSidnav = false;
            }
        });
        this.toolbarSubscription = this.toolbarTitle.toolbarTextObservable.subscribe((data) => {
            this.closeCheck(data);
            this.title = data;
        });
    }
    chkScreenMode() {
        if (document.fullscreenElement) {
            //fullscreen
            this.isFullScreen = true;
        }
        else {
            //not in full screen
            this.isFullScreen = false;
        }
    }
    CloseBtn() {
        this.router.navigateByUrl('/Projects');
        this.toolbarTitle.toolBarTextChange('Projects');
    }
    closeCheck(data) {
        if (data != 'Home' && data != "About" && data != "Skill" && data != "Projects" && data != "Contact Me") {
            this.isClose = true;
        }
        else {
            this.isClose = false;
        }
    }
    openFullscreen() {
        if (this.elem.requestFullscreen) {
            this.elem.requestFullscreen();
        }
        else if (this.elem.mozRequestFullScreen) {
            /* Firefox */
            this.elem.mozRequestFullScreen();
        }
        else if (this.elem.webkitRequestFullscreen) {
            /* Chrome, Safari and Opera */
            this.elem.webkitRequestFullscreen();
        }
        else if (this.elem.msRequestFullscreen) {
            /* IE/Edge */
            this.elem.msRequestFullscreen();
        }
    }
    closeFullscreen() {
        if (this.document.exitFullscreen) {
            this.document.exitFullscreen();
        }
        else if (this.document.mozCancelFullScreen) {
            /* Firefox */
            this.document.mozCancelFullScreen();
        }
        else if (this.document.webkitExitFullscreen) {
            /* Chrome, Safari and Opera */
            this.document.webkitExitFullscreen();
        }
        else if (this.document.msExitFullscreen) {
            /* IE/Edge */
            this.document.msExitFullscreen();
        }
    }
    gotohome() {
        this.router.navigateByUrl('/Home');
        this.toolbarTitle.toolBarTextChange('Home');
    }
    toggleSidenav() {
        this.openSidnav = !this.openSidnav;
        if (this.openSidnav) {
            this.toggleService.toggleSidebar("open");
        }
        else {
            this.toggleService.toggleSidebar("close");
        }
    }
}
ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) { return new (t || ToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_sidebartoggle_service__WEBPACK_IMPORTED_MODULE_2__["SidebartoggleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_toolbar_text_service__WEBPACK_IMPORTED_MODULE_4__["ToolbarTextService"])); };
ToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ToolbarComponent, selectors: [["app-toolbar"]], hostBindings: function ToolbarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("fullscreenchange", function ToolbarComponent_fullscreenchange_HostBindingHandler($event) { return ctx.chkScreenMode($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"])("webkitfullscreenchange", function ToolbarComponent_webkitfullscreenchange_HostBindingHandler($event) { return ctx.chkScreenMode($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"])("mozfullscreenchange", function ToolbarComponent_mozfullscreenchange_HostBindingHandler($event) { return ctx.chkScreenMode($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"])("MSFullscreenChange", function ToolbarComponent_MSFullscreenChange_HostBindingHandler($event) { return ctx.chkScreenMode($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
    } }, decls: 13, vars: 7, consts: [[1, "toolbar"], [1, "toolbarparent"], ["mat-icon-button", "", "class", "example-icon", "aria-label", "Example icon-button with menu icon", 3, "click", 4, "ngIf"], [1, "toolbartitle"], ["mat-icon-button", "", "class", "example-icon", "aria-label", "Example icon-button with heart icon", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "class", "example-icon", "aria-label", "Example icon-button with share icon", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "class", "example-icon closeBtn", "aria-label", "Example icon-button with heart icon", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "aria-label", "Example icon-button with menu icon", 1, "example-icon", 3, "click"], [1, "iconsize"], ["mat-icon-button", "", "aria-label", "Example icon-button with heart icon", 1, "example-icon", 3, "click"], ["mat-icon-button", "", "aria-label", "Example icon-button with share icon", 1, "example-icon", 3, "click"], ["mat-icon-button", "", "aria-label", "Example icon-button with heart icon", 1, "example-icon", "closeBtn", 3, "click"]], template: function ToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ToolbarComponent_button_3_Template, 3, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ToolbarComponent_button_4_Template, 3, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ToolbarComponent_button_5_Template, 3, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ToolbarComponent_button_10_Template, 3, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ToolbarComponent_button_11_Template, 3, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ToolbarComponent_button_12_Template, 3, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isClose);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isClose);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.title != "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isFullScreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isFullScreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isClose);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Quantico:ital,wght@1,700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Quantico:ital,wght@1,700&display=swap\");\nbody[_ngcontent-%COMP%] {\n  background-color: #101820FF !important;\n}\n.mainbox[_ngcontent-%COMP%] {\n  background-color: #101820FF;\n  height: 100vh;\n}\n.toolbar[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #B80F0A;\n  min-height: 64px;\n  max-height: 64px;\n}\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n.toolbartitle[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-family: \"Quantico\";\n}\n.toolbarparent[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  position: fixed;\n  z-index: 1000;\n  padding-right: 25px;\n}\n@media only screen and (max-width: 600px) {\n  .toolbartitle[_ngcontent-%COMP%] {\n    color: #FFFFFF;\n    font-family: \"Quantico\";\n    font-size: 15px;\n  }\n\n  .iconsize[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n@media only screen and (max-width: 1400px) {\n  .toolbartitle[_ngcontent-%COMP%] {\n    color: #FFFFFF;\n    font-family: \"Quantico\";\n    font-size: 15px;\n  }\n\n  .iconsize[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaGFyZWRcXGNzc3ZhclxcdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcdG9vbGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSw4RUFBQTtBQUNBLDZGQUFBO0FBREEsOEVBQUE7QUFDQSw2RkFBQTtBQ0FSO0VBQ0ksc0NBQUE7QUNJSjtBRERBO0VBQ0ksMkJESlk7RUNLWixhQUFBO0FDSUo7QUFUQTtFQUNJLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFZSjtBQVRBO0VBQ0ksY0FBQTtBQVlKO0FBVEE7RUFDSSxjRlRPO0VFVVAsdUJGUFc7QUVtQmY7QUFUQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBWUo7QUFWQTtFQUNJO0lBQ0ksY0Z6Qkc7SUUwQkgsdUJGdkJPO0lFd0JQLGVBQUE7RUFhTjs7RUFYRTtJQUNJLGVBQUE7RUFjTjtBQUNGO0FBWEE7RUFDSTtJQUNJLGNGcENHO0lFcUNILHVCRmxDTztJRW1DUCxlQUFBO0VBYU47O0VBWEU7SUFDSSxlQUFBO0VBY047QUFDRiIsImZpbGUiOiJ0b29sYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1RdWFudGljbzppdGFsLHdnaHRAMSw3MDAmZGlzcGxheT1zd2FwJyk7XHJcbiRiYWNncm91bmRfZGFyazojMTAxODIwRkY7XHJcbiRzdXJmYWNlX2JhY2dyb3VuZF9kYXJrOiMyQjMwM0Q7XHJcbiRwcmltYXJ5X3JlZDojQjgwRjBBO1xyXG4kbWFpbnRpdGxlOiNGRkZGRkY7XHJcbiRzdWJib2R5OiM2NzY3Njc7XHJcbiRzdWJib2R5bGlnaHQ6I0QwRDBEMDtcclxuJGZvbnRzdHlsZW1haW46J1F1YW50aWNvJztcclxuJGZvbnRzdHlsZXNlY29uZDonT3BlbiBTYW5zJztcclxuJHByaW1hcnlfZ3JlZW46IzM1NUUzQjtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIkBpbXBvcnQgXCIuLi9hcHAvc2hhcmVkL2Nzc3Zhci92YXJpYWJsZXMuc2Nzc1wiO1xyXG5ib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNncm91bmRfZGFyayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWFpbmJveCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFjZ3JvdW5kX2Rhcms7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FucyZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UXVhbnRpY286aXRhbCx3Z2h0QDEsNzAwJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnMmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVF1YW50aWNvOml0YWwsd2dodEAxLDcwMCZkaXNwbGF5PXN3YXBcIik7XG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwMTgyMEZGICFpbXBvcnRhbnQ7XG59XG5cbi5tYWluYm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwMTgyMEZGO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4udG9vbGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI0I4MEYwQTtcbiAgbWluLWhlaWdodDogNjRweDtcbiAgbWF4LWhlaWdodDogNjRweDtcbn1cblxuLmV4YW1wbGUtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi50b29sYmFydGl0bGUge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1mYW1pbHk6IFwiUXVhbnRpY29cIjtcbn1cblxuLnRvb2xiYXJwYXJlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTAwMDtcbiAgcGFkZGluZy1yaWdodDogMjVweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAudG9vbGJhcnRpdGxlIHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LWZhbWlseTogXCJRdWFudGljb1wiO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuXG4gIC5pY29uc2l6ZSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MDBweCkge1xuICAudG9vbGJhcnRpdGxlIHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LWZhbWlseTogXCJRdWFudGljb1wiO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuXG4gIC5pY29uc2l6ZSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-toolbar',
                templateUrl: './toolbar.component.html',
                styleUrls: ['./toolbar.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }] }, { type: _shared_services_sidebartoggle_service__WEBPACK_IMPORTED_MODULE_2__["SidebartoggleService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services_toolbar_text_service__WEBPACK_IMPORTED_MODULE_4__["ToolbarTextService"] }]; }, { chkScreenMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['document:fullscreenchange', ['$event']]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['document:webkitfullscreenchange', ['$event']]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['document:mozfullscreenchange', ['$event']]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['document:MSFullscreenChange', ['$event']]
        }] }); })();


/***/ }),

/***/ "7IZA":
/*!*********************************************!*\
  !*** ./src/app/shared/allconst/Projects.ts ***!
  \*********************************************/
/*! exports provided: ProjectsData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsData", function() { return ProjectsData; });
const ProjectsData = {
    data: [
        {
            year: '2021',
            allprojects: [
                {
                    projectName: 'Work Track',
                    iconUrl: '../../assets/img/clockify-logo.png',
                    description: 'This application focuses on  tracking the total time-period(as the name suggested) of the jobs on which the registered user has been working. At the end of their salary timestamp the salary log is generated and stored in the app which can be retrieved at any time.The major features of the application are as followed.',
                    technologies: [
                        {
                            name: "Android",
                            valueIcon: "devicon-android-plain"
                        },
                        {
                            name: "Firebase",
                            valueIcon: "devicon-firebase-plain"
                        }
                    ],
                    features: [
                        {
                            title: "Real Time Hours Calculate",
                            mockupurl: "../../assets/img/worktrack2.png",
                            type: "mobile",
                            description: "Registered users are able to punch in and punch out with the application, which in return gives users a specific and accurate total time period for the time the user has been working."
                        },
                        {
                            title: "Add More Then One Job",
                            mockupurl: "../../assets/img/worktrack6.png",
                            type: "mobile",
                            description: "Our application focuses on part time workers, if any registered user has more than one-part time job, they can easily add it on the app."
                        },
                        {
                            title: "Reports For Your Salary And Hours",
                            mockupurl: "../../assets/img/worktrack3.png",
                            type: "mobile",
                            description: "Monthly accurate salary reports are generated to users for the jobs which they have been working on. Registered users can retrieve any salary logs for any specific mentioned time period at any time."
                        },
                        {
                            title: "Modern Dark Theme",
                            mockupurl: "../../assets/img/Worktrack7.png",
                            type: "mobile",
                            description: "The application is developed in a modern dark theme which is visually appealing and makes it easier for users to understand the interface."
                        }
                    ]
                },
                {
                    projectName: 'Service Hub',
                    iconUrl: '../../assets/img/Service_Hub.png',
                    description: 'This third party application allows the users i.e. clients to communicate and book their desired service providers without any interruption with local service providers. The application has so many features but some of them are as followed',
                    technologies: [
                        {
                            name: "Android",
                            valueIcon: "devicon-android-plain"
                        },
                        {
                            name: "Nodejs",
                            valueIcon: "devicon-nodejs-plain"
                        },
                        {
                            name: "Firebase",
                            valueIcon: "devicon-firebase-plain"
                        },
                        {
                            name: "MongoDb",
                            valueIcon: "devicon-mongodb-plain"
                        }
                    ],
                    features: [
                        {
                            title: "Add Availability",
                            mockupurl: "../../assets/img/servicehub1.png",
                            type: "mobile",
                            description: "This feature gives the service provider the flexibility they need for working, any service provider can manage and update their availability hours solemnly by themselves."
                        },
                        {
                            title: "Time Allocation",
                            mockupurl: "../../assets/img/servicehub2.png",
                            type: "mobile",
                            description: "The allocation of time required to complete the job is given to the clients after analysing the problem by the service providers."
                        },
                        {
                            title: "Real Time Chat",
                            mockupurl: "../../assets/img/servicehub3.png",
                            type: "mobile",
                            description: "This feature includes chat which can be accessible from the period of the service has been booked until the service last, client and the service provider can able to chat to one another regarding any service details."
                        },
                        {
                            title: "Bi-directional Rating And Comment",
                            mockupurl: "../../assets/img/servicehub4.png",
                            type: "mobile",
                            description: "To make the service more transparent, the application contains the feature to rate and comment on the service, ratings and comments can be given by any side of the service whether the service provider or the clients."
                        },
                        {
                            title: "Glassmorphism Theme",
                            mockupurl: "../../assets/img/servicehub5.png",
                            type: "mobile",
                            description: "This application is developed in the latest glass morphism theme-2021 which is visually appealing."
                        }
                    ]
                },
                {
                    projectName: 'Tec Galaxy',
                    iconUrl: '../../assets/img/teclogo2.png',
                    description: 'This website is a basic ecommerce website to sell hardware technical components. Users can get registered and customize their own machine within the website, that can get delivered to their doorsteps. This Ecommerce website has all the basic features which any ecommerce website can have such as filters through products, search bar, add to cart etc. Some of the major features are as followed.',
                    technologies: [
                        {
                            name: "Angular",
                            valueIcon: "devicon-angularjs-plain"
                        },
                        {
                            name: "Firebase",
                            valueIcon: "devicon-firebase-plain"
                        }
                    ],
                    features: [
                        {
                            title: "AI Advisor",
                            mockupurl: "../../assets/img/tec3 (3).png",
                            type: "web",
                            description: "If users do not have any knowledge regarding which machine to buy, All they need to do is to simply fill out one easy AI form which can lead them to the list of machines/hardware they are probably going to need. They can purchase any of the hardware within the list directly."
                        },
                        {
                            title: "Assembly",
                            mockupurl: "../../assets/img/tec3 (2).png",
                            type: "web",
                            description: "If users need their machine to have specific features per component, they can get this done using the assembly feature of the website, this feature allows users to choose from a variety of components of  the specific machine/hardware they asked for. They can choose each of the components separately and make their own machine as they required."
                        },
                        {
                            title: "Admin control",
                            mockupurl: "../../assets/img/tec3 (1).png",
                            type: "web",
                            description: "This website solemnly controls through the powerful admin panel, which is designed to customize and handle any products, deals which are online/offline, categories etc."
                        }
                    ]
                }
            ]
        },
        {
            year: '2018',
            allprojects: [
                {
                    projectName: 'LinkShare',
                    iconUrl: '../../assets/img/link.png',
                    description: 'This website is useful to store and share links privately as well as publicly within the website i.e. website has a private and a public lockers to store the links.The features of the website are as followed.',
                    technologies: [
                        {
                            name: "Angular",
                            valueIcon: "devicon-angularjs-plain"
                        },
                        {
                            name: "Firebase",
                            valueIcon: "devicon-firebase-plain"
                        }
                    ],
                    features: [
                        {
                            title: "Filtered with categories",
                            mockupurl: "../../assets/img/linkshare1.png",
                            type: "web",
                            description: "Users can either generate new categories to add links or can use the previously added category to add more links into it. While retrieving, it will get easier to find any link using the categories"
                        },
                        {
                            title: "Global locker",
                            mockupurl: "../../assets/img/linkshare2.png",
                            type: "web",
                            description: "Users can have globally i.e. publicly accessible links which are on their username but can be accessed with their username by anyone using the website."
                        },
                        {
                            title: "Private locker",
                            mockupurl: "../../assets/img/linkshare3.PNG",
                            type: "web",
                            description: "Users can login to store their links privately, which can only be accessed by them."
                        }
                    ]
                }
            ]
        },
        {
            year: '2016',
            allprojects: [
                {
                    projectName: 'QrDash',
                    iconUrl: '../../assets/img/qrdash.png',
                    description: 'The whole idea of this application is focused to have all the necessity documents at the single place.This application is to store and retrieve any medical or the government documents easily within the single QR code scan.The features are as followed',
                    technologies: [
                        {
                            name: "Android",
                            valueIcon: "devicon-android-plain"
                        },
                        {
                            name: "Firebase",
                            valueIcon: "devicon-firebase-plain"
                        }
                    ],
                    features: [
                        {
                            title: "Retrieving of the documents",
                            mockupurl: "../../assets/img/qrdash3.PNG",
                            type: "web",
                            description: "The single QR code scan with our qr code scanner within the application will allow user i.e. doctors to have all their medical data at a single scan."
                        },
                        {
                            title: "Accessing the personal basic data",
                            mockupurl: "../../assets/img/qrdash4.png",
                            type: "mobile",
                            description: "Users can add their basic personal data by themselves, which can be retrieved at any QRcode scanner regardless of our application platform."
                        },
                        {
                            title: "Adding the data",
                            mockupurl: "../../assets/img/qrdash1.png",
                            type: "mobile",
                            description: "To make it more secure only the doctors can upload the prescriptions and reports of the patients on their specific accounts using their QR code."
                        }
                    ]
                }
            ]
        },
    ]
};


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyB9ibd58CDTmaSPHbRlLTHoLoBsaezObsA",
        authDomain: "kunjtechwebsite.firebaseapp.com",
        databaseURL: "https://kunjtechwebsite-default-rtdb.firebaseio.com",
        projectId: "kunjtechwebsite",
        storageBucket: "kunjtechwebsite.appspot.com",
        messagingSenderId: "155667875659",
        appId: "1:155667875659:web:4b677d72e87a0d58ddcace"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "C+I3":
/*!************************************************************!*\
  !*** ./src/app/single-project/single-project.component.ts ***!
  \************************************************************/
/*! exports provided: SingleProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleProjectComponent", function() { return SingleProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_allconst_Projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/allconst/Projects */ "7IZA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_toolbar_text_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/toolbar-text.service */ "Wz0B");
/* harmony import */ var ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-animate-on-scroll */ "wR1u");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function SingleProjectComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const technologies_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", technologies_r2.valueIcon, " colored  iconcss");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", technologies_r2.name);
} }
function SingleProjectComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function SingleProjectComponent_div_10_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const feature_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", feature_r3.mockupurl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", feature_r3.type == "web" ? "featuresimageweb" : "featuresimage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", feature_r3.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", feature_r3.description, " ");
} }
function SingleProjectComponent_div_10_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const feature_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", feature_r3.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", feature_r3.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", feature_r3.mockupurl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", feature_r3.type == "web" ? "featuresimageweb" : "featuresimage");
} }
const _c0 = function (a0) { return { "margin_top_5 ": a0 }; };
function SingleProjectComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SingleProjectComponent_div_10_div_1_Template, 1, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SingleProjectComponent_div_10_ng_template_2_Template, 7, 4, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SingleProjectComponent_div_10_ng_template_4_Template, 7, 4, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const feature_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, feature_r3.type === "web"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r4 % 2 == 0)("ngIfThen", _r6)("ngIfElse", _r8);
} }
class SingleProjectComponent {
    constructor(route, router, toolbarTextChage) {
        this.route = route;
        this.router = router;
        this.toolbarTextChage = toolbarTextChage;
        this.projectName = "";
    }
    ngOnInit() {
        const routeParams = this.route.snapshot.paramMap;
        this.projectName = routeParams.get('ProjectName') || "";
        this.ProjectData = this.getProjectData(this.projectName);
    }
    gotoconatctme(data) {
        this.router.navigateByUrl('/ContactMe');
        this.toolbarTextChage.toolBarTextChange('Contact Me');
    }
    getProjectData(projectNamedata) {
        console.log(projectNamedata);
        const projectdata = _shared_allconst_Projects__WEBPACK_IMPORTED_MODULE_1__["ProjectsData"].data;
        for (let index = 0; index < projectdata.length; index++) {
            const yearObject = projectdata[index].allprojects;
            const yourproject = yearObject.filter(project => project.projectName === projectNamedata);
            if (yourproject.length !== 0) {
                return yourproject[0];
            }
        }
        return null;
    }
}
SingleProjectComponent.ɵfac = function SingleProjectComponent_Factory(t) { return new (t || SingleProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_toolbar_text_service__WEBPACK_IMPORTED_MODULE_3__["ToolbarTextService"])); };
SingleProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SingleProjectComponent, selectors: [["app-single-project"]], decls: 19, vars: 5, consts: [[1, "maincontent"], [1, "row", "row-no-margin", "row_100"], [1, "col-md-12", "imagbox"], ["animateOnScroll", "", "animationName", "animate__animated animate__zoomIn ", 1, "imgfacepic", 3, "src"], ["animateOnScroll", "", "animationName", "animate__animated animate__zoomIn animate__delay-1s", 1, "h1style", "margin_top_2", "sizecss2"], ["animateOnScroll", "", "animationName", "animate__animated animate__zoomIn animate__delay-1s", 1, "ptagtitledescription"], [1, "plateformlist"], ["class", "platformcss", 4, "ngFor", "ngForOf"], ["class", "row row-no-margin", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "contactmefelxdiv", "card"], [1, "contactchilddiv"], [1, "psize", 2, "padding", "0%", "margin-top", "10px"], ["animateOnScroll", "", "animationName", "animate__animated animate__zoomIn", 1, "raise", "margin_top_5", "contactmebtn", 3, "click"], [1, "platformcss"], ["animateOnScroll", "", "animationName", "animate__animated animate__zoomIn animate__delay-1s", 3, "title"], [1, "row", "row-no-margin", 3, "ngClass"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["leftside", ""], ["rightside", ""], [1, "col-md-6", "featuresimagesdiv"], ["animateOnScroll", "", "animationName", "animated animate__animated animate__fadeInLeftBig", 1, "hide-on-init", 3, "ngClass", "src"], [1, "col-md-6", "featuresContentdiv"], ["animateOnScroll", "", "animationName", "animated animate__animated animate__fadeInRightBig", 1, "h1style", "margin_top_2", "featuretitle", "hide-on-init"], ["animateOnScroll", "", "animationName", "animated animate__animated animate__fadeInRightBig", 1, "featureContentDescription", "hide-on-init"], ["animateOnScroll", "", "animationName", "animated animate__animated animate__fadeInLeftBig", 1, "h1style", "margin_top_2", "featuretitle", "hide-on-init"], ["animateOnScroll", "", "animationName", "animated animate__animated animate__fadeInLeftBig", 1, "featureContentDescription", "hide-on-init"], ["animateOnScroll", "", "animationName", "animated animate__animated animate__fadeInRightBig", 1, "hide-on-init", 3, "ngClass", "src"]], template: function SingleProjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SingleProjectComponent_div_9_Template, 2, 4, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SingleProjectComponent_div_10_Template, 6, 6, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Enough about this project now let's talk about yours. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleProjectComponent_Template_button_click_17_listener() { return ctx.gotoconatctme("Conatct"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Contact Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.ProjectData.iconUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.ProjectData.projectName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.ProjectData.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ProjectData.technologies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ProjectData.features);
    } }, directives: [ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_4__["AnimateOnScrollDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Quantico:ital,wght@1,700&display=swap\");\n.h1style[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  margin: 0% !important;\n  font-family: \"Quantico\";\n}\n.maincontent[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  top: 64px;\n  bottom: 0%;\n}\n.animated[_ngcontent-%COMP%] {\n  visibility: visible !important;\n}\n.hide-on-init[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.row-no-margin[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: 0px !important;\n  margin-right: 0px !important;\n}\n.row-no-margin2[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: 25px !important;\n  margin-right: 25px !important;\n}\n.imgfacepic[_ngcontent-%COMP%] {\n  width: 150px;\n}\n.raise[_ngcontent-%COMP%]:hover, .raise[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0.7em 0.7em -0.4em #B80F0A;\n  transform: translateY(-0.25em);\n}\n.margin_top_5[_ngcontent-%COMP%] {\n  margin-top: 5% !important;\n}\n.contactmebtn[_ngcontent-%COMP%] {\n  color: #B80F0A;\n  background-color: transparent;\n  font-size: 15px;\n  font-family: \"Open Sans\";\n  border: 1px solid #B80F0A;\n  font-family: \"Quantico\";\n  padding: 8px;\n  padding-right: 25px;\n  padding-left: 25px;\n}\n.contactmebtn[_ngcontent-%COMP%]:hover, .contactmebtn[_ngcontent-%COMP%]:focus {\n  border-color: #B80F0A;\n  color: #B80F0A;\n}\n.card[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 18px;\n  background: rgba(255, 255, 255, 0.1);\n  box-shadow: 0 8px 32px 0 rgba(16, 54, 32, 0.37);\n  border-right: 1px solid rgba(255, 255, 255, 0.2);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  transition: 2s ease;\n  animation: bounce-in 1.5s linear;\n  padding: 15px;\n}\n.margin_top_5[_ngcontent-%COMP%] {\n  margin-top: 5% !important;\n}\n.featuresimagesdiv[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n.featuresContentdiv[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.featuresimage[_ngcontent-%COMP%] {\n  width: 325px;\n  max-width: 100%;\n}\n.featuresimageweb[_ngcontent-%COMP%] {\n  margin-top: 3%;\n  width: 600px;\n  min-height: 400px;\n  max-width: 100%;\n}\n.margin_top_2[_ngcontent-%COMP%] {\n  margin-top: 2% !important;\n}\n.aboutsectiontextdiv[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.row_100[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.imagbox[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.aboutmesection[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: #FFFFFF;\n}\n.featureContentDescription[_ngcontent-%COMP%] {\n  color: #676767;\n  font-family: #FFFFFF;\n  text-align: center;\n  width: 90%;\n  margin-top: 20px;\n  font-size: 18px;\n}\n.contactchilddiv[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: ro;\n}\n.contactmefelxdiv[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  column-gap: 25px;\n}\n.card_box[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  padding: 5%;\n  background: rgba(255, 255, 255, 0.1);\n  box-shadow: 0 5px 5px 0 rgba(103, 119, 109, 0.37);\n  transition: 2s ease;\n}\n.ptagtitledescription[_ngcontent-%COMP%] {\n  color: #676767;\n  font-family: #FFFFFF;\n  width: 60%;\n  text-align: center;\n  margin-top: 60px;\n  margin-bottom: 25px;\n  font-size: 18px;\n}\n.aboutsectiontextdiv[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.plateformlist[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n.platformcss[_ngcontent-%COMP%]:hover {\n  \n  \n  transform: scale(1.5);\n}\n.platformcss[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: #676767;\n  padding-left: 15px;\n  transition: transform 0.2s ease;\n}\n.iconcss[_ngcontent-%COMP%] {\n  font-size: 25px;\n  align-items: center;\n  transition: transform 0.5s ease;\n  opacity: 0.5;\n}\n.featuretitle[_ngcontent-%COMP%] {\n  font-size: 20px !important;\n}\n.sizecss2[_ngcontent-%COMP%] {\n  font-size: 25px !important;\n}\n.psize[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n}\n@media only screen and (max-width: 600px) {\n  .imgfacepic[_ngcontent-%COMP%] {\n    width: 100px;\n  }\n\n  .imagbox[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    padding-right: 0%;\n    padding-left: 0%;\n  }\n\n  .row-no-margin[_ngcontent-%COMP%] {\n    height: auto !important;\n    margin-left: 0px !important;\n    margin-right: 0px !important;\n  }\n\n  .aboutsectiontextdiv[_ngcontent-%COMP%] {\n    margin-top: 10%;\n    width: 95%;\n  }\n\n  .ptagtitledescription[_ngcontent-%COMP%] {\n    color: #676767;\n    font-family: \"Quantico\";\n    width: 95%;\n    text-align: center;\n    margin-top: 30px;\n    margin-bottom: 25px;\n    font-size: 15px;\n  }\n\n  .featuresimage[_ngcontent-%COMP%] {\n    width: 225px;\n    max-width: 100%;\n  }\n\n  .featuresimageweb[_ngcontent-%COMP%] {\n    margin-top: 3%;\n    width: 400px;\n    min-height: 200px;\n    max-width: 100%;\n  }\n\n  .featuretitle[_ngcontent-%COMP%] {\n    font-size: 18px !important;\n  }\n\n  .featureContentDescription[_ngcontent-%COMP%] {\n    color: #676767;\n    font-family: #FFFFFF;\n    text-align: center;\n    width: 90%;\n    margin-top: 18px;\n    font-size: 16px;\n  }\n\n  .sizecss2[_ngcontent-%COMP%] {\n    font-size: 18px !important;\n  }\n\n  .psize[_ngcontent-%COMP%] {\n    font-size: 12px !important;\n  }\n\n  .contactmebtn[_ngcontent-%COMP%] {\n    color: #B80F0A;\n    background-color: transparent;\n    font-size: 12px;\n    font-family: \"Open Sans\";\n    border: 1px solid #B80F0A;\n    font-family: \"Quantico\";\n    padding: 6px;\n    padding-right: 25px;\n    padding-left: 25px;\n  }\n  .contactmebtn[_ngcontent-%COMP%]:hover, .contactmebtn[_ngcontent-%COMP%]:focus {\n    border-color: #B80F0A;\n    color: #B80F0A;\n  }\n}\n@media (min-width: 1000px) and (max-width: 1400px) {\n  .imgfacepic[_ngcontent-%COMP%] {\n    width: 100px;\n  }\n\n  .featuresimage[_ngcontent-%COMP%] {\n    width: 225px;\n    max-width: 100%;\n  }\n\n  .featuresimageweb[_ngcontent-%COMP%] {\n    margin-top: 3%;\n    width: 400px;\n    min-height: 200px;\n    max-width: 100%;\n  }\n\n  .psize[_ngcontent-%COMP%] {\n    font-size: 12px !important;\n  }\n\n  .featuretitle[_ngcontent-%COMP%] {\n    font-size: 18px !important;\n  }\n\n  .ptagtitledescription[_ngcontent-%COMP%] {\n    color: #676767;\n    font-family: \"Quantico\";\n    width: 80%;\n    text-align: center;\n    margin-top: 30px;\n    margin-bottom: 25px;\n    font-size: 16px;\n  }\n\n  .featureContentDescription[_ngcontent-%COMP%] {\n    color: #676767;\n    font-family: #FFFFFF;\n    text-align: center;\n    width: 90%;\n    margin-top: 18px;\n    font-size: 15px;\n  }\n\n  .sizecss2[_ngcontent-%COMP%] {\n    font-size: 18px !important;\n  }\n\n  .contactmebtn[_ngcontent-%COMP%] {\n    color: #B80F0A;\n    background-color: transparent;\n    font-size: 12px;\n    font-family: \"Open Sans\";\n    border: 1px solid #B80F0A;\n    font-family: \"Quantico\";\n    padding: 6px;\n    padding-right: 25px;\n    padding-left: 25px;\n  }\n  .contactmebtn[_ngcontent-%COMP%]:hover, .contactmebtn[_ngcontent-%COMP%]:focus {\n    border-color: #B80F0A;\n    color: #B80F0A;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaGFyZWRcXGNzc3ZhclxcdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFxzaW5nbGUtcHJvamVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSw4RUFBQTtBQUNBLDZGQUFBO0FDQVI7RUFDSSxjREdPO0VDRlAscUJBQUE7RUFDQSx1QkRJVztBQ0ZmO0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUVKO0FBQ0E7RUFDSSw4QkFBQTtBQUVKO0FBQUE7RUFDSSxrQkFBQTtBQUdKO0FBQUE7RUFDSSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQUdKO0FBQUE7RUFDSSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQUdKO0FBQUE7RUFDSSxZQUFBO0FBR0o7QUFBQTs7RUFFSSx3Q0FBQTtFQUNBLDhCQUFBO0FBR0o7QUFBQTtFQUNJLHlCQUFBO0FBR0o7QUFBQTtFQUNJLGNENUNTO0VDNkNULDZCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCRDFDYTtFQzJDYix5QkFBQTtFQUNBLHVCRDdDVztFQzhDWCxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUdKO0FBRkk7RUFFSSxxQkR2REs7RUN3REwsY0R4REs7QUMyRGI7QUFDQTtFQUNJLGNENURPO0VDNkRQLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLCtDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxpREFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtBQUVKO0FBQ0E7RUFDSSx5QkFBQTtBQUVKO0FBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUVKO0FBQ0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRUo7QUFDQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBRUo7QUFDQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBRUo7QUFHQTtFQUNJLHlCQUFBO0FBQUo7QUFHQTtFQUNJLFVBQUE7QUFBSjtBQUdBO0VBQ0ksWUFBQTtBQUFKO0FBR0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQUo7QUFHQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjRGpJTztBQ2lJWDtBQUdBO0VBQ0ksY0RwSUs7RUNxSUwsb0JEdElPO0VDdUlQLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUFKO0FBR0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFHQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUdBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxpREFBQTtFQUNBLG1CQUFBO0FBQUo7QUFHQTtFQUNJLGNEbktLO0VDb0tMLG9CRHJLTztFQ3NLUCxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUFKO0FBR0E7RUFDSSxVQUFBO0FBQUo7QUFHQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQUo7QUFHQTtFQUVJLFNBQUE7RUFFQSxlQUFBO0VBQ0EscUJBQUE7QUFBSjtBQUdBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNEak1LO0VDa01MLGtCQUFBO0VBQ0EsK0JBQUE7QUFBSjtBQUdBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0FBQUo7QUFFQTtFQUNJLDBCQUFBO0FBQ0o7QUFDQTtFQUNJLDBCQUFBO0FBRUo7QUFBQTtFQUNJLDBCQUFBO0FBR0o7QUFBQTtFQUNJO0lBQ0ksWUFBQTtFQUdOOztFQURFO0lBQ0ksYUFBQTtJQUNBLHNCQUFBO0lBQ0Esc0JBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0VBSU47O0VBRkU7SUFDSSx1QkFBQTtJQUNBLDJCQUFBO0lBQ0EsNEJBQUE7RUFLTjs7RUFIRTtJQUNJLGVBQUE7SUFDQSxVQUFBO0VBTU47O0VBSkU7SUFDSSxjRDNPQztJQzRPRCx1QkQxT087SUMyT1AsVUFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7RUFPTjs7RUFMRTtJQUNJLFlBQUE7SUFDQSxlQUFBO0VBUU47O0VBTEU7SUFDSSxjQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtFQVFOOztFQUxFO0lBQ0ksMEJBQUE7RUFRTjs7RUFORTtJQUNJLGNEblFDO0lDb1FELG9CRHJRRztJQ3NRSCxrQkFBQTtJQUNBLFVBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7RUFTTjs7RUFQRTtJQUNJLDBCQUFBO0VBVU47O0VBUkU7SUFDSSwwQkFBQTtFQVdOOztFQVRFO0lBQ0ksY0RuUks7SUNvUkwsNkJBQUE7SUFDQSxlQUFBO0lBQ0Esd0JEalJTO0lDa1JULHlCQUFBO0lBQ0EsdUJEcFJPO0lDcVJQLFlBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0VBWU47RUFYTTtJQUVJLHFCRDlSQztJQytSRCxjRC9SQztFQzJTWDtBQUNGO0FBVEE7RUFDSTtJQUNJLFlBQUE7RUFXTjs7RUFURTtJQUNJLFlBQUE7SUFDQSxlQUFBO0VBWU47O0VBVEU7SUFDSSxjQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtFQVlOOztFQVRFO0lBQ0ksMEJBQUE7RUFZTjs7RUFWRTtJQUNJLDBCQUFBO0VBYU47O0VBWEU7SUFDSSxjRHhUQztJQ3lURCx1QkR2VE87SUN3VFAsVUFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7RUFjTjs7RUFaRTtJQUNJLGNEalVDO0lDa1VELG9CRG5VRztJQ29VSCxrQkFBQTtJQUNBLFVBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7RUFlTjs7RUFiRTtJQUNJLDBCQUFBO0VBZ0JOOztFQWRFO0lBQ0ksY0Q5VUs7SUMrVUwsNkJBQUE7SUFDQSxlQUFBO0lBQ0Esd0JENVVTO0lDNlVULHlCQUFBO0lBQ0EsdUJEL1VPO0lDZ1ZQLFlBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0VBaUJOO0VBaEJNO0lBRUkscUJEelZDO0lDMFZELGNEMVZDO0VDMldYO0FBQ0YiLCJmaWxlIjoic2luZ2xlLXByb2plY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnMmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVF1YW50aWNvOml0YWwsd2dodEAxLDcwMCZkaXNwbGF5PXN3YXAnKTtcclxuJGJhY2dyb3VuZF9kYXJrOiMxMDE4MjBGRjtcclxuJHN1cmZhY2VfYmFjZ3JvdW5kX2Rhcms6IzJCMzAzRDtcclxuJHByaW1hcnlfcmVkOiNCODBGMEE7XHJcbiRtYWludGl0bGU6I0ZGRkZGRjtcclxuJHN1YmJvZHk6IzY3Njc2NztcclxuJHN1YmJvZHlsaWdodDojRDBEMEQwO1xyXG4kZm9udHN0eWxlbWFpbjonUXVhbnRpY28nO1xyXG4kZm9udHN0eWxlc2Vjb25kOidPcGVuIFNhbnMnO1xyXG4kcHJpbWFyeV9ncmVlbjojMzU1RTNCO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiQGltcG9ydCBcIi4uL3NoYXJlZC9jc3N2YXIvdmFyaWFibGVzLnNjc3NcIjtcclxuLmgxc3R5bGUge1xyXG4gICAgY29sb3I6ICRtYWludGl0bGU7XHJcbiAgICBtYXJnaW46IDAlICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnRzdHlsZW1haW47XHJcbn1cclxuXHJcbi5tYWluY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRvcDogNjRweDtcclxuICAgIGJvdHRvbTogMCU7XHJcbn1cclxuXHJcbi5hbmltYXRlZCB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmhpZGUtb24taW5pdCB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5yb3ctbm8tbWFyZ2luIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJvdy1uby1tYXJnaW4yIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogMjVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW1nZmFjZXBpYyB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbi5yYWlzZTpob3ZlcixcclxuLnJhaXNlOmZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMC43ZW0gMC43ZW0gLTAuNGVtICRwcmltYXJ5X3JlZDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yNWVtKTtcclxufVxyXG5cclxuLm1hcmdpbl90b3BfNSB7XHJcbiAgICBtYXJnaW4tdG9wOiA1JSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29udGFjdG1lYnRuIHtcclxuICAgIGNvbG9yOiAkcHJpbWFyeV9yZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udHN0eWxlc2Vjb25kO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJHByaW1hcnlfcmVkO1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250c3R5bGVtYWluO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxuICAgICY6aG92ZXIsXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRwcmltYXJ5X3JlZDtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnlfcmVkO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBjb2xvcjogJG1haW50aXRsZTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAxNiwgNTQsIDMyLCAwLjM3KTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiAycyBlYXNlO1xyXG4gICAgYW5pbWF0aW9uOiBib3VuY2UtaW4gMS41cyBsaW5lYXI7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG4ubWFyZ2luX3RvcF81IHtcclxuICAgIG1hcmdpbi10b3A6IDUlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mZWF0dXJlc2ltYWdlc2RpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmZlYXR1cmVzQ29udGVudGRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmZlYXR1cmVzaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDMyNXB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZmVhdHVyZXNpbWFnZXdlYiB7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG4ubWFyZ2luX3RvcF8yIHtcclxuICAgIG1hcmdpbi10b3A6IDIlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hYm91dHNlY3Rpb250ZXh0ZGl2IHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5yb3dfMTAwIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmltYWdib3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hYm91dG1lc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAkbWFpbnRpdGxlO1xyXG59XHJcblxyXG4uZmVhdHVyZUNvbnRlbnREZXNjcmlwdGlvbiB7XHJcbiAgICBjb2xvcjogJHN1YmJvZHk7XHJcbiAgICBmb250LWZhbWlseTogJG1haW50aXRsZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uY29udGFjdGNoaWxkZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm87XHJcbn1cclxuXHJcbi5jb250YWN0bWVmZWx4ZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjb2x1bW4tZ2FwOiAyNXB4O1xyXG59XHJcblxyXG4uY2FyZF9ib3gge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggNXB4IDAgcmdiYSgxMDMsIDExOSwgMTA5LCAwLjM3KTtcclxuICAgIHRyYW5zaXRpb246IDJzIGVhc2U7XHJcbn1cclxuXHJcbi5wdGFndGl0bGVkZXNjcmlwdGlvbiB7XHJcbiAgICBjb2xvcjogJHN1YmJvZHk7XHJcbiAgICBmb250LWZhbWlseTogJG1haW50aXRsZTtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmFib3V0c2VjdGlvbnRleHRkaXYge1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLnBsYXRlZm9ybWxpc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnBsYXRmb3JtY3NzOmhvdmVyIHtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuNSk7XHJcbiAgICAvKiBJRSA5ICovXHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS41KTtcclxuICAgIC8qIFNhZmFyaSAzLTggKi9cclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcclxufVxyXG5cclxuLnBsYXRmb3JtY3NzIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBjb2xvcjogJHN1YmJvZHk7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5pY29uY3NzIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzIGVhc2U7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuLmZlYXR1cmV0aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5zaXplY3NzMntcclxuICAgIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50OyBcclxufVxyXG4ucHNpemV7XHJcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmltZ2ZhY2VwaWMge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgIH1cclxuICAgIC5pbWFnYm94IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwJTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAlO1xyXG4gICAgfVxyXG4gICAgLnJvdy1uby1tYXJnaW4ge1xyXG4gICAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmFib3V0c2VjdGlvbnRleHRkaXYge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgfVxyXG4gICAgLnB0YWd0aXRsZWRlc2NyaXB0aW9uIHtcclxuICAgICAgICBjb2xvcjogJHN1YmJvZHk7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250c3R5bGVtYWluO1xyXG4gICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuZmVhdHVyZXNpbWFnZSB7XHJcbiAgICAgICAgd2lkdGg6IDIyNXB4O1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmZlYXR1cmVzaW1hZ2V3ZWIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAuZmVhdHVyZXRpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmZlYXR1cmVDb250ZW50RGVzY3JpcHRpb24ge1xyXG4gICAgICAgIGNvbG9yOiAkc3ViYm9keTtcclxuICAgICAgICBmb250LWZhbWlseTogJG1haW50aXRsZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxOHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICAgIC5zaXplY3NzMntcclxuICAgICAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDsgXHJcbiAgICB9XHJcbiAgICAucHNpemV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuY29udGFjdG1lYnRuIHtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnlfcmVkO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LWZhbWlseTogJGZvbnRzdHlsZXNlY29uZDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkcHJpbWFyeV9yZWQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250c3R5bGVtYWluO1xyXG4gICAgICAgIHBhZGRpbmc6IDZweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxuICAgICAgICAmOmhvdmVyLFxyXG4gICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICRwcmltYXJ5X3JlZDtcclxuICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5X3JlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6MTAwMHB4KSBhbmQgKG1heC13aWR0aDoxNDAwcHgpICB7XHJcbiAgICAuaW1nZmFjZXBpYyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgfVxyXG4gICAgLmZlYXR1cmVzaW1hZ2Uge1xyXG4gICAgICAgIHdpZHRoOiAyMjVweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5mZWF0dXJlc2ltYWdld2ViIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLnBzaXple1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmZlYXR1cmV0aXRsZXtcclxuICAgICAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5wdGFndGl0bGVkZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgY29sb3I6ICRzdWJib2R5O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udHN0eWxlbWFpbjtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgLmZlYXR1cmVDb250ZW50RGVzY3JpcHRpb24ge1xyXG4gICAgICAgIGNvbG9yOiAkc3ViYm9keTtcclxuICAgICAgICBmb250LWZhbWlseTogJG1haW50aXRsZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxOHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIH1cclxuICAgIC5zaXplY3NzMntcclxuICAgICAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDsgXHJcbiAgICB9XHJcbiAgICAuY29udGFjdG1lYnRuIHtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnlfcmVkO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LWZhbWlseTogJGZvbnRzdHlsZXNlY29uZDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkcHJpbWFyeV9yZWQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250c3R5bGVtYWluO1xyXG4gICAgICAgIHBhZGRpbmc6IDZweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxuICAgICAgICAmOmhvdmVyLFxyXG4gICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICRwcmltYXJ5X3JlZDtcclxuICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5X3JlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SingleProjectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-single-project',
                templateUrl: './single-project.component.html',
                styleUrls: ['./single-project.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_toolbar_text_service__WEBPACK_IMPORTED_MODULE_3__["ToolbarTextService"] }]; }, null); })();


/***/ }),

/***/ "Jjks":
/*!**********************************************!*\
  !*** ./src/app/sidenav/sidenav.component.ts ***!
  \**********************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_animations_slideanimation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/animations/slideanimation */ "m8nh");
/* harmony import */ var _shared_services_sidebartoggle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/sidebartoggle.service */ "/i4f");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_toolbar_text_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/toolbar-text.service */ "Wz0B");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../toolbar/toolbar.component */ "4zdL");








const _c0 = ["drawer"];
class SidenavComponent {
    constructor(toggleService, router, toolbarTextChage) {
        this.toggleService = toggleService;
        this.router = router;
        this.toolbarTextChage = toolbarTextChage;
        this.showFiller = false;
    }
    ngOnInit() {
        this.toggleSubscription = this.toggleService.drawerToggleObservable.subscribe((data) => {
            this.sidenavtoggele(data);
        });
    }
    closeSideNav() {
        this.toggleService.toggleSidebar("close");
    }
    closeSideNavRoute(page) {
        this.toggleService.toggleSidebar("close");
        switch (page) {
            case 'Home':
                this.router.navigateByUrl('/Home');
                this.toolbarTextChage.toolBarTextChange('Home');
                break;
            case 'About':
                this.router.navigateByUrl('/About');
                this.toolbarTextChage.toolBarTextChange('About');
                break;
            case 'Skill':
                this.router.navigateByUrl('/Skill');
                this.toolbarTextChage.toolBarTextChange('Skill');
                break;
            case 'Projects':
                this.router.navigateByUrl('/Projects');
                this.toolbarTextChage.toolBarTextChange('Projects');
                break;
            case 'Conatct':
                this.router.navigateByUrl('/ContactMe');
                this.toolbarTextChage.toolBarTextChange('Contact Me');
                break;
        }
    }
    sidenavtoggele(data) {
        if (data === "open") {
            this.drawer.open();
        }
        else {
            this.drawer.close();
        }
    }
    prepareRoute(outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
    }
    onActivate(event) {
        const scrollElem = document.querySelector('#moveTop');
        if (scrollElem) {
            scrollElem.scrollIntoView();
        }
    }
}
SidenavComponent.ɵfac = function SidenavComponent_Factory(t) { return new (t || SidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_sidebartoggle_service__WEBPACK_IMPORTED_MODULE_2__["SidebartoggleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_toolbar_text_service__WEBPACK_IMPORTED_MODULE_4__["ToolbarTextService"])); };
SidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidenavComponent, selectors: [["app-sidenav"]], viewQuery: function SidenavComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.drawer = _t.first);
    } }, decls: 60, vars: 1, consts: [[1, "example-container", "mainbox"], ["mode", "side", 1, "example-sidenav"], ["drawer", ""], [1, "flex-sidebar-parent"], [1, "flip-card"], [1, "flip-card-inner"], [1, "flip-card-front"], [1, "material-icons-outlined", "md-32"], [1, "flip-card-back", 3, "click"], [1, "material-icons-outlined", "md-32", "iconcolor"], [1, "fontsizesmall"], [1, "example-sidenav-content", "mainbox"], ["id", "moveTop"], [1, "mainRoute", 3, "click"], [3, "activate"], ["outlet", "outlet"]], template: function SidenavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-drawer-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-drawer", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_div_click_9_listener() { return ctx.closeSideNavRoute("Home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "perm_identity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_div_click_19_listener() { return ctx.closeSideNavRoute("About"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "perm_identity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "grade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_div_click_29_listener() { return ctx.closeSideNavRoute("Skill"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "grade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_div_click_39_listener() { return ctx.closeSideNavRoute("Projects"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "call");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_div_click_49_listener() { return ctx.closeSideNavRoute("Conatct"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "call");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Conatct Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "app-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_div_click_57_listener() { return ctx.closeSideNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "router-outlet", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activate", function SidenavComponent_Template_router_outlet_activate_58_listener($event) { return ctx.onActivate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routeAnimations", ctx.prepareRoute(_r1));
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatDrawer"], _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_6__["ToolbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Quantico:ital,wght@1,700&display=swap\");\nbody[_ngcontent-%COMP%] {\n  background-color: #101820FF !important;\n}\n.mainbox[_ngcontent-%COMP%] {\n  background-color: #101820FF;\n  height: 100vh;\n}\n.example-sidenav[_ngcontent-%COMP%] {\n  width: 8%;\n  background-color: #101820FF;\n  box-shadow: 2px 2px #000000;\n}\n.row-no-margin[_ngcontent-%COMP%] {\n  margin-left: 0px !important;\n  margin-right: 0px !important;\n}\n.flex-sidebar-parent[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100%;\n  color: #FFFFFF;\n}\n.cardicon[_ngcontent-%COMP%] {\n  background-color: #101820FF;\n  color: #FFFFFF;\n  display: flex;\n  margin-top: 20px;\n  width: 70%;\n  height: 10%;\n  box-shadow: 4px 4px #000000;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.flip-card[_ngcontent-%COMP%] {\n  background-color: transparent;\n  width: 70%;\n  height: 10%;\n  margin-top: 10%;\n  perspective: 1000px;\n}\n.flip-card-inner[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: transform 0.6s;\n  transform-style: preserve-3d;\n  box-shadow: 0 4px 8px 0 #000000;\n}\n.iconcolor[_ngcontent-%COMP%] {\n  color: #B80F0A;\n}\n.flip-card[_ngcontent-%COMP%]:hover   .flip-card-inner[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n}\n.flip-card-front[_ngcontent-%COMP%], .flip-card-back[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.flip-card-front[_ngcontent-%COMP%] {\n  background-color: #101820FF;\n  color: #FFFFFF;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.flip-card-back[_ngcontent-%COMP%] {\n  background-color: #101820FF;\n  color: #FFFFFF;\n  display: flex;\n  border-bottom: 1px solid #B80F0A;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  transform: rotateY(180deg);\n}\n.fontsizesmall[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n@media only screen and (max-width: 600px) {\n  .example-sidenav[_ngcontent-%COMP%] {\n    width: 35%;\n    background-color: #101820FF;\n  }\n\n  .cardicon[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n\n  .flip-card-inner[_ngcontent-%COMP%] {\n    transform: rotateY(180deg);\n  }\n\n  .iconcolor[_ngcontent-%COMP%] {\n    color: #FFFFFF;\n  }\n}\n@media only screen and (max-width: 1400px) {\n  .fontsizesmall[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaGFyZWRcXGNzc3ZhclxcdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFxzaWRlbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDhFQUFBO0FBQ0EsNkZBQUE7QUNBUjtFQUNJLHNDQUFBO0FBRUo7QUFDQTtFQUNJLDJCREpZO0VDS1osYUFBQTtBQUVKO0FBQ0E7RUFDSSxTQUFBO0VBQ0EsMkJEVlk7RUNXWiwyQkFBQTtBQUVKO0FBQ0E7RUFDSSwyQkFBQTtFQUNBLDRCQUFBO0FBRUo7QUFDQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGNEdkJPO0FDeUJYO0FBQ0E7RUFDSSwyQkQ5Qlk7RUNnQ1osY0Q3Qk87RUM4QlAsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBRUE7RUFDSSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtBQUNKO0FBRUE7RUFDSSxjRDVEUztBQzZEYjtBQUVBO0VBQ0ksMEJBQUE7QUFDSjtBQUVBOztFQUVJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtFQUNBLDJCQUFBO0FBQ0o7QUFFQTtFQUNJLDJCRC9FWTtFQ2dGWixjRDdFTztFQzhFUCxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFFQTtFQUNJLDJCRHhGWTtFQ3lGWixjRHRGTztFQ3VGUCxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBQUNKO0FBQ0E7RUFDSSxlQUFBO0FBRUo7QUFDQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLDJCRHhHUTtFQzBHZDs7RUFBRTtJQUNJLFVBQUE7RUFHTjs7RUFERTtJQUNJLDBCQUFBO0VBSU47O0VBRkU7SUFDSSxjRDlHRztFQ21IVDtBQUNGO0FBSEE7RUFDSTtJQUNJLGVBQUE7RUFLTjtBQUNGIiwiZmlsZSI6InNpZGVuYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnMmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVF1YW50aWNvOml0YWwsd2dodEAxLDcwMCZkaXNwbGF5PXN3YXAnKTtcclxuJGJhY2dyb3VuZF9kYXJrOiMxMDE4MjBGRjtcclxuJHN1cmZhY2VfYmFjZ3JvdW5kX2Rhcms6IzJCMzAzRDtcclxuJHByaW1hcnlfcmVkOiNCODBGMEE7XHJcbiRtYWludGl0bGU6I0ZGRkZGRjtcclxuJHN1YmJvZHk6IzY3Njc2NztcclxuJHN1YmJvZHlsaWdodDojRDBEMEQwO1xyXG4kZm9udHN0eWxlbWFpbjonUXVhbnRpY28nO1xyXG4kZm9udHN0eWxlc2Vjb25kOidPcGVuIFNhbnMnO1xyXG4kcHJpbWFyeV9ncmVlbjojMzU1RTNCO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiQGltcG9ydCBcIi4uL3NoYXJlZC9jc3N2YXIvdmFyaWFibGVzLnNjc3NcIjtcclxuYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFjZ3JvdW5kX2RhcmsgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1haW5ib3gge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2dyb3VuZF9kYXJrO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmV4YW1wbGUtc2lkZW5hdiB7XHJcbiAgICB3aWR0aDogOCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFjZ3JvdW5kX2Rhcms7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4ICMwMDAwMDA7XHJcbn1cclxuXHJcbi5yb3ctbm8tbWFyZ2luIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LXNpZGViYXItcGFyZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6ICRtYWludGl0bGU7XHJcbn1cclxuXHJcbi5jYXJkaWNvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFjZ3JvdW5kX2Rhcms7XHJcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAkcHJpbWFyeV9yZWQ7XHJcbiAgICBjb2xvcjogJG1haW50aXRsZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGhlaWdodDogMTAlO1xyXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCAjMDAwMDAwO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmZsaXAtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBoZWlnaHQ6IDEwJTtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIHBlcnNwZWN0aXZlOiAxMDAwcHg7XHJcbn1cclxuXHJcbi5mbGlwLWNhcmQtaW5uZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cztcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCAjMDAwMDAwO1xyXG59XHJcblxyXG4uaWNvbmNvbG9yIHtcclxuICAgIGNvbG9yOiAkcHJpbWFyeV9yZWQ7XHJcbn1cclxuXHJcbi5mbGlwLWNhcmQ6aG92ZXIgLmZsaXAtY2FyZC1pbm5lciB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxufVxyXG5cclxuLmZsaXAtY2FyZC1mcm9udCxcclxuLmZsaXAtY2FyZC1iYWNrIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5mbGlwLWNhcmQtZnJvbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2dyb3VuZF9kYXJrO1xyXG4gICAgY29sb3I6ICRtYWludGl0bGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmZsaXAtY2FyZC1iYWNrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNncm91bmRfZGFyaztcclxuICAgIGNvbG9yOiAkbWFpbnRpdGxlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkcHJpbWFyeV9yZWQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbn1cclxuLmZvbnRzaXplc21hbGx7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5leGFtcGxlLXNpZGVuYXYge1xyXG4gICAgICAgIHdpZHRoOiAzNSU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2dyb3VuZF9kYXJrO1xyXG4gICAgfVxyXG4gICAgLmNhcmRpY29uIHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgfVxyXG4gICAgLmZsaXAtY2FyZC1pbm5lciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgICB9XHJcbiAgICAuaWNvbmNvbG9yIHtcclxuICAgICAgICBjb2xvcjogJG1haW50aXRsZTtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MDBweCkge1xyXG4gICAgLmZvbnRzaXplc21hbGx7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG59Il19 */"], data: { animation: [_shared_animations_slideanimation__WEBPACK_IMPORTED_MODULE_1__["slideInAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidenavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidenav',
                templateUrl: './sidenav.component.html',
                styleUrls: ['./sidenav.component.scss'],
                animations: [_shared_animations_slideanimation__WEBPACK_IMPORTED_MODULE_1__["slideInAnimation"]]
            }]
    }], function () { return [{ type: _shared_services_sidebartoggle_service__WEBPACK_IMPORTED_MODULE_2__["SidebartoggleService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services_toolbar_text_service__WEBPACK_IMPORTED_MODULE_4__["ToolbarTextService"] }]; }, { drawer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['drawer']
        }] }); })();


/***/ }),

/***/ "Oh3b":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_toolbar_text_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/toolbar-text.service */ "Wz0B");
/* harmony import */ var ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-animate-on-scroll */ "wR1u");





class HomepageComponent {
    constructor(router, toolbarTextChage) {
        this.router = router;
        this.toolbarTextChage = toolbarTextChage;
    }
    ngOnInit() {
    }
    gotoaboutme(data) {
        this.router.navigateByUrl('/About');
        this.toolbarTextChage.toolBarTextChange('About');
    }
    onScroll(event) {
        debugger;
        // visible height + pixel scrolled >= total height 
        if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
            console.log("End");
        }
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_toolbar_text_service__WEBPACK_IMPORTED_MODULE_2__["ToolbarTextService"])); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 23, vars: 0, consts: [[1, "homecontent"], [1, "row", "row-no-margin"], [1, "col-md-6", "titleFlex"], [1, "haderdata"], [1, "h1style", "sizecss", "animate__animated", "animate__zoomIn"], [1, "h1style", "sizecss", "animate__animated", "animate__zoomIn", 2, "padding-top", "3%"], [1, "spancolor"], [1, "h1style", "sizecss2", "animate__animated", "animate__zoomIn"], [1, "title", "animate__animated", "animate__zoomIn", "bodycolor", 2, "padding-top", "2%"], ["animateOnScroll", "", "animationName", "animate__animated animate__zoomIn", 1, "raise", "margin_top_5", "contactmebtn", 3, "click"], [1, "col-md-6", "titleFlex2"], ["src", "../../assets/img/home3.png", 1, "animationimg"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Hi... I am ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "K");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "unj ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "P");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "atel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Full stack developer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Welcome you to my work website. Click here for a tour and learn more. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_Template_button_click_19_listener() { return ctx.gotoaboutme("About"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " About Me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_3__["AnimateOnScrollDirective"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Quantico:ital,wght@1,700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Quantico:ital,wght@1,700&display=swap\");\nbody[_ngcontent-%COMP%] {\n  background-color: #101820FF !important;\n}\n.mainbox[_ngcontent-%COMP%] {\n  background-color: #101820FF;\n  height: 100vh;\n}\n.h1style[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  margin: 0% !important;\n}\n.bodycolor[_ngcontent-%COMP%] {\n  color: #676767;\n  margin: 0% !important;\n}\n.homecontent[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  top: 64px;\n  bottom: 0%;\n}\n.row-no-margin[_ngcontent-%COMP%] {\n  height: 100%;\n  margin-left: 0px !important;\n  margin-right: 0px !important;\n}\n.mat-display-1[_ngcontent-%COMP%] {\n  --animate-delay: 0.5s;\n}\n.titleFlex[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.titleFlex2[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animationimg[_ngcontent-%COMP%] {\n  animation: upNdown 2s infinite linear;\n  width: 500px;\n}\n.raise[_ngcontent-%COMP%]:hover, .raise[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0.7em 0.7em -0.4em #B80F0A;\n  transform: translateY(-0.25em);\n}\n.margin_top_5[_ngcontent-%COMP%] {\n  margin-top: 5% !important;\n}\n.contactmebtn[_ngcontent-%COMP%] {\n  color: #B80F0A;\n  background-color: transparent;\n  font-size: 15px;\n  font-family: \"Open Sans\";\n  border: 1px solid #B80F0A;\n  font-family: \"Quantico\";\n  padding: 8px;\n  padding-right: 25px;\n  padding-left: 25px;\n}\n.contactmebtn[_ngcontent-%COMP%]:hover, .contactmebtn[_ngcontent-%COMP%]:focus {\n  border-color: #B80F0A;\n  color: #B80F0A;\n}\n.sizecss[_ngcontent-%COMP%] {\n  font-size: 45px !important;\n}\n.sizecss2[_ngcontent-%COMP%] {\n  font-size: 30px !important;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 20px !important;\n}\n.spancolor[_ngcontent-%COMP%] {\n  color: #B80F0A;\n}\n@keyframes upNdown {\n  50% {\n    transform: translateY(-20px);\n  }\n}\n.haderdata[_ngcontent-%COMP%] {\n  width: 70%;\n}\n@media only screen and (max-width: 600px) {\n  .sizecss[_ngcontent-%COMP%] {\n    font-size: 25px !important;\n  }\n\n  .sizecss2[_ngcontent-%COMP%] {\n    font-size: 15px !important;\n  }\n\n  .title[_ngcontent-%COMP%] {\n    font-size: 12px !important;\n  }\n\n  .raise[_ngcontent-%COMP%]:hover, .raise[_ngcontent-%COMP%]:focus {\n    box-shadow: 0 0.7em 0.7em -0.4em #B80F0A;\n    transform: translateY(-0.25em);\n  }\n\n  .margin_top_5[_ngcontent-%COMP%] {\n    margin-top: 5% !important;\n  }\n\n  .contactmebtn[_ngcontent-%COMP%] {\n    color: #B80F0A;\n    background-color: transparent;\n    font-size: 12px;\n    font-family: \"Open Sans\";\n    border: 1px solid #B80F0A;\n    font-family: \"Quantico\";\n    padding: 6px;\n    padding-right: 25px;\n    padding-left: 25px;\n  }\n  .contactmebtn[_ngcontent-%COMP%]:hover, .contactmebtn[_ngcontent-%COMP%]:focus {\n    border-color: #B80F0A;\n    color: #B80F0A;\n  }\n\n  .animationimg[_ngcontent-%COMP%] {\n    animation: upNdown 2s infinite linear;\n    max-width: 250px;\n  }\n}\n@media only screen and (max-width: 1400px) {\n  .sizecss[_ngcontent-%COMP%] {\n    font-size: 35px !important;\n  }\n\n  .sizecss2[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n  }\n\n  .title[_ngcontent-%COMP%] {\n    font-size: 15px !important;\n  }\n\n  .raise[_ngcontent-%COMP%]:hover, .raise[_ngcontent-%COMP%]:focus {\n    box-shadow: 0 0.7em 0.7em -0.4em #B80F0A;\n    transform: translateY(-0.25em);\n  }\n\n  .margin_top_5[_ngcontent-%COMP%] {\n    margin-top: 5% !important;\n  }\n\n  .contactmebtn[_ngcontent-%COMP%] {\n    color: #B80F0A;\n    background-color: transparent;\n    font-size: 12px;\n    font-family: \"Open Sans\";\n    border: 1px solid #B80F0A;\n    font-family: \"Quantico\";\n    padding: 6px;\n    padding-right: 25px;\n    padding-left: 25px;\n  }\n  .contactmebtn[_ngcontent-%COMP%]:hover, .contactmebtn[_ngcontent-%COMP%]:focus {\n    border-color: #B80F0A;\n    color: #B80F0A;\n  }\n\n  .animationimg[_ngcontent-%COMP%] {\n    animation: upNdown 2s infinite linear;\n    width: 350px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaGFyZWRcXGNzc3ZhclxcdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcaG9tZXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsOEVBQUE7QUFDQSw2RkFBQTtBQURBLDhFQUFBO0FBQ0EsNkZBQUE7QUNBUjtFQUNJLHNDQUFBO0FDSUo7QUREQTtFQUNJLDJCREpZO0VDS1osYUFBQTtBQ0lKO0FBVEE7RUFDSSxjRkVPO0VFRFAscUJBQUE7QUFZSjtBQVZBO0VBQ0ksY0ZESztFRUVMLHFCQUFBO0FBYUo7QUFWQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBYUo7QUFWQTtFQUNJLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FBYUo7QUFWQTtFQUNJLHFCQUFBO0FBYUo7QUFWQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFhSjtBQVZBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWFKO0FBVkE7RUFFSSxxQ0FBQTtFQUNBLFlBQUE7QUFhSjtBQVZBOztFQUVJLHdDQUFBO0VBQ0EsOEJBQUE7QUFhSjtBQVZBO0VBQ0kseUJBQUE7QUFhSjtBQVZBO0VBQ0ksY0Z2RFM7RUV3RFQsNkJBQUE7RUFDQSxlQUFBO0VBQ0Esd0JGckRhO0VFc0RiLHlCQUFBO0VBQ0EsdUJGeERXO0VFeURYLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBYUo7QUFaSTtFQUVJLHFCRmxFSztFRW1FTCxjRm5FSztBRWdGYjtBQVZBO0VBQ0ksMEJBQUE7QUFhSjtBQVhBO0VBQ0ksMEJBQUE7QUFjSjtBQVpBO0VBQ0ksMEJBQUE7QUFlSjtBQVpBO0VBQ0ksY0ZqRlM7QUVnR2I7QUFKQTtFQUVJO0lBQ0ksNEJBQUE7RUFXTjtBQUNGO0FBUEE7RUFDSSxVQUFBO0FBU0o7QUFOQTtFQUNJO0lBQ0ksMEJBQUE7RUFTTjs7RUFQRTtJQUNJLDBCQUFBO0VBVU47O0VBUkU7SUFDSSwwQkFBQTtFQVdOOztFQVRFOztJQUVBLHdDQUFBO0lBQ0EsOEJBQUE7RUFZRjs7RUFURjtJQUNJLHlCQUFBO0VBWUY7O0VBVEY7SUFDSSxjRjdIUztJRThIVCw2QkFBQTtJQUNBLGVBQUE7SUFDQSx3QkYzSGE7SUU0SGIseUJBQUE7SUFDQSx1QkY5SFc7SUUrSFgsWUFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7RUFZRjtFQVhFO0lBRUkscUJGeElLO0lFeUlMLGNGeklLO0VFcUpYOztFQVRFO0lBRUkscUNBQUE7SUFDQSxnQkFBQTtFQVlOO0FBQ0Y7QUFSQTtFQUNJO0lBQ0ksMEJBQUE7RUFVTjs7RUFSRTtJQUNJLDBCQUFBO0VBV047O0VBVEU7SUFDSSwwQkFBQTtFQVlOOztFQVZFOztJQUVBLHdDQUFBO0lBQ0EsOEJBQUE7RUFhRjs7RUFWRjtJQUNJLHlCQUFBO0VBYUY7O0VBVkY7SUFDSSxjRnpLUztJRTBLVCw2QkFBQTtJQUNBLGVBQUE7SUFDQSx3QkZ2S2E7SUV3S2IseUJBQUE7SUFDQSx1QkYxS1c7SUUyS1gsWUFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7RUFhRjtFQVpFO0lBRUkscUJGcExLO0lFcUxMLGNGckxLO0VFa01YOztFQVZFO0lBRUkscUNBQUE7SUFDQSxZQUFBO0VBYU47QUFDRiIsImZpbGUiOiJob21lcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FucyZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UXVhbnRpY286aXRhbCx3Z2h0QDEsNzAwJmRpc3BsYXk9c3dhcCcpO1xyXG4kYmFjZ3JvdW5kX2Rhcms6IzEwMTgyMEZGO1xyXG4kc3VyZmFjZV9iYWNncm91bmRfZGFyazojMkIzMDNEO1xyXG4kcHJpbWFyeV9yZWQ6I0I4MEYwQTtcclxuJG1haW50aXRsZTojRkZGRkZGO1xyXG4kc3ViYm9keTojNjc2NzY3O1xyXG4kc3ViYm9keWxpZ2h0OiNEMEQwRDA7XHJcbiRmb250c3R5bGVtYWluOidRdWFudGljbyc7XHJcbiRmb250c3R5bGVzZWNvbmQ6J09wZW4gU2Fucyc7XHJcbiRwcmltYXJ5X2dyZWVuOiMzNTVFM0I7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJAaW1wb3J0IFwiLi4vYXBwL3NoYXJlZC9jc3N2YXIvdmFyaWFibGVzLnNjc3NcIjtcclxuYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFjZ3JvdW5kX2RhcmsgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1haW5ib3gge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2dyb3VuZF9kYXJrO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnMmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVF1YW50aWNvOml0YWwsd2dodEAxLDcwMCZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1RdWFudGljbzppdGFsLHdnaHRAMSw3MDAmZGlzcGxheT1zd2FwXCIpO1xuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMDE4MjBGRiAhaW1wb3J0YW50O1xufVxuXG4ubWFpbmJveCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMDE4MjBGRjtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmgxc3R5bGUge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgbWFyZ2luOiAwJSAhaW1wb3J0YW50O1xufVxuXG4uYm9keWNvbG9yIHtcbiAgY29sb3I6ICM2NzY3Njc7XG4gIG1hcmdpbjogMCUgIWltcG9ydGFudDtcbn1cblxuLmhvbWVjb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiA2NHB4O1xuICBib3R0b206IDAlO1xufVxuXG4ucm93LW5vLW1hcmdpbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWRpc3BsYXktMSB7XG4gIC0tYW5pbWF0ZS1kZWxheTogMC41cztcbn1cblxuLnRpdGxlRmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGl0bGVGbGV4MiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYW5pbWF0aW9uaW1nIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IHVwTmRvd24gMnMgaW5maW5pdGUgbGluZWFyO1xuICBhbmltYXRpb246IHVwTmRvd24gMnMgaW5maW5pdGUgbGluZWFyO1xuICB3aWR0aDogNTAwcHg7XG59XG5cbi5yYWlzZTpob3Zlcixcbi5yYWlzZTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMC43ZW0gMC43ZW0gLTAuNGVtICNCODBGMEE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yNWVtKTtcbn1cblxuLm1hcmdpbl90b3BfNSB7XG4gIG1hcmdpbi10b3A6IDUlICFpbXBvcnRhbnQ7XG59XG5cbi5jb250YWN0bWVidG4ge1xuICBjb2xvcjogI0I4MEYwQTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNCODBGMEE7XG4gIGZvbnQtZmFtaWx5OiBcIlF1YW50aWNvXCI7XG4gIHBhZGRpbmc6IDhweDtcbiAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xufVxuLmNvbnRhY3RtZWJ0bjpob3ZlciwgLmNvbnRhY3RtZWJ0bjpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogI0I4MEYwQTtcbiAgY29sb3I6ICNCODBGMEE7XG59XG5cbi5zaXplY3NzIHtcbiAgZm9udC1zaXplOiA0NXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zaXplY3NzMiB7XG4gIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLnNwYW5jb2xvciB7XG4gIGNvbG9yOiAjQjgwRjBBO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgdXBOZG93biB7XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgfVxufVxuQGtleWZyYW1lcyB1cE5kb3duIHtcbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuICB9XG59XG4uaGFkZXJkYXRhIHtcbiAgd2lkdGg6IDcwJTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuc2l6ZWNzcyB7XG4gICAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuc2l6ZWNzczIge1xuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5yYWlzZTpob3Zlcixcbi5yYWlzZTpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogMCAwLjdlbSAwLjdlbSAtMC40ZW0gI0I4MEYwQTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMjVlbSk7XG4gIH1cblxuICAubWFyZ2luX3RvcF81IHtcbiAgICBtYXJnaW4tdG9wOiA1JSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmNvbnRhY3RtZWJ0biB7XG4gICAgY29sb3I6ICNCODBGMEE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNCODBGMEE7XG4gICAgZm9udC1mYW1pbHk6IFwiUXVhbnRpY29cIjtcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gIH1cbiAgLmNvbnRhY3RtZWJ0bjpob3ZlciwgLmNvbnRhY3RtZWJ0bjpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiAjQjgwRjBBO1xuICAgIGNvbG9yOiAjQjgwRjBBO1xuICB9XG5cbiAgLmFuaW1hdGlvbmltZyB7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IHVwTmRvd24gMnMgaW5maW5pdGUgbGluZWFyO1xuICAgIGFuaW1hdGlvbjogdXBOZG93biAycyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIHtcbiAgLnNpemVjc3Mge1xuICAgIGZvbnQtc2l6ZTogMzVweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnNpemVjc3MyIHtcbiAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucmFpc2U6aG92ZXIsXG4ucmFpc2U6Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IDAgMC43ZW0gMC43ZW0gLTAuNGVtICNCODBGMEE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjI1ZW0pO1xuICB9XG5cbiAgLm1hcmdpbl90b3BfNSB7XG4gICAgbWFyZ2luLXRvcDogNSUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5jb250YWN0bWVidG4ge1xuICAgIGNvbG9yOiAjQjgwRjBBO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQjgwRjBBO1xuICAgIGZvbnQtZmFtaWx5OiBcIlF1YW50aWNvXCI7XG4gICAgcGFkZGluZzogNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICB9XG4gIC5jb250YWN0bWVidG46aG92ZXIsIC5jb250YWN0bWVidG46Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogI0I4MEYwQTtcbiAgICBjb2xvcjogI0I4MEYwQTtcbiAgfVxuXG4gIC5hbmltYXRpb25pbWcge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiB1cE5kb3duIDJzIGluZmluaXRlIGxpbmVhcjtcbiAgICBhbmltYXRpb246IHVwTmRvd24gMnMgaW5maW5pdGUgbGluZWFyO1xuICAgIHdpZHRoOiAzNTBweDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-homepage',
                templateUrl: './homepage.component.html',
                styleUrls: ['./homepage.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_toolbar_text_service__WEBPACK_IMPORTED_MODULE_2__["ToolbarTextService"] }]; }, null); })();


/***/ }),

/***/ "QwAb":
/*!********************************************!*\
  !*** ./src/app/shared/allconst/Aboutme.ts ***!
  \********************************************/
/*! exports provided: AboutMe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMe", function() { return AboutMe; });
const AboutMe = {
    data: {
        title: '',
        endbody: 'Throughout these years I have tried  my hand on resolving problems and improving customer satisfaction by providing them with efficient  solutions and satisfactory results. This has made me capable of handling  any part of a project with ease and now I am a confident full stack developer who can work with customers to identify and deploy solutions. ',
        subBody: "I am Kunj Patel, a full stack developer from India. I grew up in Gujarat, western region of the country. Computers and Technology has always been a subject of interest since childhood and I decided to pursue it as a  profession by gaining a bachelor's degree in computer science and engineering. To put my learned skills and knowledge into practice I worked with one small scale tech company for two years. A desire of exploring more aspects of this field accrued while navigating through work life, which led me to do my post graduation in ACE-mobile application development from Cégep de la Gaspésie et des Îles, Montreal, QC Canada.",
        Education: [
            {
                year: '2014-17',
                current: false,
                clgname: 'Gujarat Technology University',
                fields: 'BE in Computer Science and Engineering',
                description: [
                    'During these 4 years I have developed basic logical thinking and logic making skills, analytical and critical thinking while learning the various courses. All the basic knowledge of the technologies I learned within these years. To summarize, I started preparing myself for what I want to become during these years.',
                ],
            },
            {
                year: '2019-21',
                clgname: 'Cégep de la Gaspésie et des Îles',
                current: false,
                fields: 'Mobile Application Development (ACE)',
                description: [
                    'I chose the course I was interested in learning and I have not regretted it. Have even learned to produce some basic designing logos and videos for the marking purpose, furthermore developed a more sophisticated way to represent myself with the clients. Worked on various technologies such as angular, nodejs, react, firebase, APIs. Developed some basic knowledge on mysql relational databases.',
                ],
            },
        ],
        Experince: [
            {
                year: '2017-19',
                jobname: 'Fullstack devloper',
                fields: 'Me and My Tech',
                current: false,
                description: [
                    'Started off as a junior developer, has developed skills to handle the client meetings and gather all the necessary resources in order to complete the tasks successfully with client satisfaction within a given time period.Work my way upto the senior developer maintaining my team and the deadlines with up to more than  95% successful ratio. I had worked with various technologies such as ionic, angular, android etc.'
                ],
            },
            {
                year: '2021-..',
                jobname: 'Fullstack devloper',
                fields: 'Collège de Bois-de-Boulogne',
                current: true,
                description: [
                    'Recently I am involved in a project which enlightens my programming skills on react, python and flask.'
                ],
            },
        ],
    },
};


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_animations_slideanimation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/animations/slideanimation */ "m8nh");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ "9a8T");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "Jjks");






class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'kunjsite';
    }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_2__["init"]();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "unicorn-dark-theme", "mainbox"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sidenav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_4__["SidenavComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Quantico:ital,wght@1,700&display=swap\");\nbody[_ngcontent-%COMP%] {\n  background-color: #101820FF !important;\n}\n.mainbox[_ngcontent-%COMP%] {\n  background-color: #101820FF;\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcc2hhcmVkXFxjc3N2YXJcXHZhcmlhYmxlcy5zY3NzIiwiLi5cXC4uXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsOEVBQUE7QUFDQSw2RkFBQTtBQ0FSO0VBQ0ksc0NBQUE7QUFFSjtBQUNBO0VBQ0ksMkJESlk7RUNLWixhQUFBO0FBRUoiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1RdWFudGljbzppdGFsLHdnaHRAMSw3MDAmZGlzcGxheT1zd2FwJyk7XHJcbiRiYWNncm91bmRfZGFyazojMTAxODIwRkY7XHJcbiRzdXJmYWNlX2JhY2dyb3VuZF9kYXJrOiMyQjMwM0Q7XHJcbiRwcmltYXJ5X3JlZDojQjgwRjBBO1xyXG4kbWFpbnRpdGxlOiNGRkZGRkY7XHJcbiRzdWJib2R5OiM2NzY3Njc7XHJcbiRzdWJib2R5bGlnaHQ6I0QwRDBEMDtcclxuJGZvbnRzdHlsZW1haW46J1F1YW50aWNvJztcclxuJGZvbnRzdHlsZXNlY29uZDonT3BlbiBTYW5zJztcclxuJHByaW1hcnlfZ3JlZW46IzM1NUUzQjtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIkBpbXBvcnQgXCIuLi9hcHAvc2hhcmVkL2Nzc3Zhci92YXJpYWJsZXMuc2Nzc1wiO1xyXG5ib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNncm91bmRfZGFyayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWFpbmJveCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFjZ3JvdW5kX2Rhcms7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59Il19 */"], data: { animation: [_shared_animations_slideanimation__WEBPACK_IMPORTED_MODULE_1__["slideInAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                animations: [_shared_animations_slideanimation__WEBPACK_IMPORTED_MODULE_1__["slideInAnimation"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "Wz0B":
/*!**************************************************!*\
  !*** ./src/app/services/toolbar-text.service.ts ***!
  \**************************************************/
/*! exports provided: ToolbarTextService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarTextService", function() { return ToolbarTextService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class ToolbarTextService {
    constructor() {
        this.toolbarTextSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.toolbarTextObservable = this.toolbarTextSubject.asObservable();
    }
    toolBarTextChange(text) {
        this.toolbarTextSubject.next(text);
    }
}
ToolbarTextService.ɵfac = function ToolbarTextService_Factory(t) { return new (t || ToolbarTextService)(); };
ToolbarTextService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ToolbarTextService, factory: ToolbarTextService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarTextService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _shared_module_material_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/module/material/material.module */ "n/v3");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "4zdL");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./homepage/homepage.component */ "Oh3b");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "Jjks");
/* harmony import */ var _shared_services_sidebartoggle_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/services/sidebartoggle.service */ "/i4f");
/* harmony import */ var _aboutpage_aboutpage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./aboutpage/aboutpage.component */ "0VLA");
/* harmony import */ var _skillpage_skillpage_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./skillpage/skillpage.component */ "sM7m");
/* harmony import */ var _contacmepage_contacmepage_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contacmepage/contacmepage.component */ "r4Ws");
/* harmony import */ var _projectpage_projectpage_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./projectpage/projectpage.component */ "iZQh");
/* harmony import */ var ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng2-animate-on-scroll */ "wR1u");
/* harmony import */ var _single_project_single_project_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./single-project/single-project.component */ "C+I3");
/* harmony import */ var _services_toolbar_text_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/toolbar-text.service */ "Wz0B");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_contactme_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/contactme.service */ "4iOu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ "ofXK");



























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _shared_services_sidebartoggle_service__WEBPACK_IMPORTED_MODULE_12__["SidebartoggleService"],
        _services_toolbar_text_service__WEBPACK_IMPORTED_MODULE_19__["ToolbarTextService"],
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_22__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_22__["HashLocationStrategy"] },
        _services_contactme_service__WEBPACK_IMPORTED_MODULE_21__["ContactmeService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_22__["DatePipe"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _shared_module_material_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"],
            ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_17__["AnimateOnScrollModule"].forRoot(),
            _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebase),
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabaseModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_9__["ToolbarComponent"],
        _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_10__["HomepageComponent"],
        _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_11__["SidenavComponent"],
        _aboutpage_aboutpage_component__WEBPACK_IMPORTED_MODULE_13__["AboutpageComponent"],
        _skillpage_skillpage_component__WEBPACK_IMPORTED_MODULE_14__["SkillpageComponent"],
        _contacmepage_contacmepage_component__WEBPACK_IMPORTED_MODULE_15__["ContacmepageComponent"],
        _projectpage_projectpage_component__WEBPACK_IMPORTED_MODULE_16__["ProjectpageComponent"],
        _single_project_single_project_component__WEBPACK_IMPORTED_MODULE_18__["SingleProjectComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        _shared_module_material_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"], ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_17__["AnimateOnScrollModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabaseModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_9__["ToolbarComponent"],
                    _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_10__["HomepageComponent"],
                    _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_11__["SidenavComponent"],
                    _aboutpage_aboutpage_component__WEBPACK_IMPORTED_MODULE_13__["AboutpageComponent"],
                    _skillpage_skillpage_component__WEBPACK_IMPORTED_MODULE_14__["SkillpageComponent"],
                    _contacmepage_contacmepage_component__WEBPACK_IMPORTED_MODULE_15__["ContacmepageComponent"],
                    _projectpage_projectpage_component__WEBPACK_IMPORTED_MODULE_16__["ProjectpageComponent"],
                    _single_project_single_project_component__WEBPACK_IMPORTED_MODULE_18__["SingleProjectComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                    _shared_module_material_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"],
                    ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_17__["AnimateOnScrollModule"].forRoot(),
                    _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebase),
                    _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabaseModule"],
                ],
                providers: [
                    _shared_services_sidebartoggle_service__WEBPACK_IMPORTED_MODULE_12__["SidebartoggleService"],
                    _services_toolbar_text_service__WEBPACK_IMPORTED_MODULE_19__["ToolbarTextService"],
                    { provide: _angular_common__WEBPACK_IMPORTED_MODULE_22__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_22__["HashLocationStrategy"] },
                    _services_contactme_service__WEBPACK_IMPORTED_MODULE_21__["ContactmeService"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_22__["DatePipe"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "iZQh":
/*!******************************************************!*\
  !*** ./src/app/projectpage/projectpage.component.ts ***!
  \******************************************************/
/*! exports provided: ProjectpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectpageComponent", function() { return ProjectpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_allconst_Projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/allconst/Projects */ "7IZA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_toolbar_text_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/toolbar-text.service */ "Wz0B");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-animate-on-scroll */ "wR1u");







function ProjectpageComponent_div_2_div_6_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const technologies_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", technologies_r7.valueIcon, " colored  iconcss");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", technologies_r7.name);
} }
function ProjectpageComponent_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectpageComponent_div_2_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const singleProject_r4 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.openSingleProject(singleProject_r4.projectName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProjectpageComponent_div_2_div_6_div_11_Template, 2, 4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const singleProject_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", singleProject_r4.iconUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](singleProject_r4.projectName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](singleProject_r4.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", singleProject_r4.technologies);
} }
function ProjectpageComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProjectpageComponent_div_2_div_6_Template, 12, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.year, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r1.allprojects);
} }
class ProjectpageComponent {
    constructor(router, toolbarTextChage) {
        this.router = router;
        this.toolbarTextChage = toolbarTextChage;
        this.name = 'devicon-android-plain';
    }
    ngOnInit() {
        this.allProjectsdata = _shared_allconst_Projects__WEBPACK_IMPORTED_MODULE_1__["ProjectsData"].data;
    }
    openSingleProject(projectName) {
        this.router.navigateByUrl(`SingleProject/${projectName}`);
        this.toolbarTextChage.toolBarTextChange(projectName);
    }
}
ProjectpageComponent.ɵfac = function ProjectpageComponent_Factory(t) { return new (t || ProjectpageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_toolbar_text_service__WEBPACK_IMPORTED_MODULE_3__["ToolbarTextService"])); };
ProjectpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectpageComponent, selectors: [["app-projectpage"]], decls: 3, vars: 1, consts: [[1, "row", "row-no-margin", 2, "padding-bottom", "50px"], [1, "row", "row-no-margin", 2, "padding-left", "5%", "padding-right", "5%"], ["class", "col-12 rigthContentdata", "style", "color: white;", 4, "ngFor", "ngForOf"], [1, "col-12", "rigthContentdata", 2, "color", "white"], [1, "titlebox"], ["animateOnScroll", "", "animationName", "animate__animated animate__flipInX", 1, "blocktileline"], [1, "descriptionblock"], [1, "girdcontainer"], ["class", "card girdcardbox", "animateOnScroll", "", "animationName", "animate__animated animate__zoomIn", 3, "click", 4, "ngFor", "ngForOf"], ["animateOnScroll", "", "animationName", "animate__animated animate__zoomIn", 1, "card", "girdcardbox", 3, "click"], [1, "imagebox"], [1, "imagediv"], [1, "imgcss", 3, "src"], [1, "appnamecss"], [1, "projectdata"], [1, "projectdescription"], [1, "plateformlist"], ["class", "platformcss", 4, "ngFor", "ngForOf"], [1, "platformcss"], [3, "title"]], template: function ProjectpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProjectpageComponent_div_2_Template, 7, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allProjectsdata);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5__["AnimateOnScrollDirective"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Quantico:ital,wght@1,700&display=swap\");\n.row-no-margin[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: 0px !important;\n  margin-right: 0px !important;\n}\n.titleodeducation[_ngcontent-%COMP%] {\n  display: flex;\n  color: #FFFFFF;\n  justify-content: center;\n}\n.educationtitile[_ngcontent-%COMP%] {\n  font-family: \"Quantico\";\n}\n.blocktileline[_ngcontent-%COMP%] {\n  font-family: \"Quantico\";\n  color: #676767;\n  position: static;\n  font-size: 50px;\n}\n.descriptionblock[_ngcontent-%COMP%] {\n  border-left: 1px solid #676767;\n  padding-left: 2%;\n  margin-left: 3%;\n}\n.girdcontainer[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  column-gap: 30px;\n  row-gap: 30px;\n}\n.titlebox[_ngcontent-%COMP%] {\n  position: relative;\n  height: 70px;\n  margin-top: 5%;\n}\n.blocktileline2[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 18px;\n  opacity: 0.8;\n}\n.blockline3[_ngcontent-%COMP%] {\n  position: static;\n}\n.girdcardbox[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 25fr 65fr 10fr;\n  column-gap: 20px;\n}\n.card[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  color: #FFFFFF;\n  font-size: 18px;\n  padding: 5%;\n  background: rgba(255, 255, 255, 0.1);\n  box-shadow: 0 5px 5px 0 rgba(103, 119, 109, 0.37);\n  transition: 1s ease;\n}\n.card[_ngcontent-%COMP%]:hover {\n  border: 1px solid #B80F0A;\n  margin-bottom: -3%;\n  margin-top: -3%;\n}\n.animated[_ngcontent-%COMP%] {\n  visibility: visible !important;\n}\n.hide-on-init[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.plateformlist[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: center;\n  padding-left: 15px;\n}\n.rigthContentdata[_ngcontent-%COMP%] {\n  border-left: 2px solid #B80F0A;\n}\n.blocktileline[_ngcontent-%COMP%]::before {\n  width: 10px;\n  height: 10px;\n  top: 10px;\n  left: -21px;\n  position: absolute;\n  content: \"\";\n  border: 2px solid #B80F0A;\n  background-color: #FFFFFF;\n}\n.iconcss[_ngcontent-%COMP%] {\n  font-size: 25px;\n  align-items: center;\n  transition: transform 0.5s ease;\n  opacity: 0.5;\n}\n.iconcss[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.imagediv[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.imgcss[_ngcontent-%COMP%] {\n  max-width: 70px;\n  max-height: 80px;\n  transition: transform 0.3s ease;\n}\n.imgcss[_ngcontent-%COMP%]:hover {\n  \n  \n  transform: scale(1.4);\n}\n.imagebox[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n}\n.projectdata[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.projectdescription[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 15px;\n}\n.appnamecss[_ngcontent-%COMP%] {\n  font-family: \"Quantico\";\n  color: #FFFFFF;\n  margin-top: 25px;\n  font-size: 15px;\n}\n.platformcss[_ngcontent-%COMP%]:hover {\n  \n  \n  transform: scale(1.5);\n}\n.platformcss[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: #676767;\n  transition: transform 0.2s ease;\n}\n@media only screen and (max-width: 800px) {\n  .girdcontainer[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr;\n    column-gap: 20px;\n    row-gap: 20px;\n  }\n\n  .titlebox[_ngcontent-%COMP%] {\n    position: relative;\n    height: 70px;\n    margin-top: 15%;\n  }\n\n  .girdcardbox[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr;\n    column-gap: 20px;\n    row-gap: 20px;\n  }\n\n  .plateformlist[_ngcontent-%COMP%] {\n    flex-direction: row;\n    width: 100%;\n  }\n}\n@media (min-width: 1000px) and (max-width: 1400px) {\n  .projectdescription[_ngcontent-%COMP%] {\n    color: #FFFFFF;\n    font-size: 12px;\n  }\n\n  .appnamecss[_ngcontent-%COMP%] {\n    font-family: \"Quantico\";\n    color: #FFFFFF;\n    margin-top: 15px;\n    font-size: 12px;\n  }\n\n  .imgcss[_ngcontent-%COMP%] {\n    max-width: 50px;\n    max-height: 50px;\n    transition: transform 0.3s ease;\n  }\n\n  .imagediv[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .blocktileline[_ngcontent-%COMP%] {\n    font-family: \"Quantico\";\n    color: #676767;\n    position: static;\n    font-size: 30px;\n  }\n\n  .girdcontainer[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    column-gap: 20px;\n    row-gap: 20px;\n  }\n\n  .titlebox[_ngcontent-%COMP%] {\n    position: relative;\n    height: 70px;\n    margin-top: 5%;\n  }\n\n  .girdcardbox[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 25fr 65fr 10fr;\n    column-gap: 20px;\n  }\n\n  .plateformlist[_ngcontent-%COMP%] {\n    flex-direction: column;\n    width: 100%;\n  }\n\n  .card[_ngcontent-%COMP%]:hover {\n    border: 1px solid #B80F0A;\n    margin-bottom: -2%;\n    margin-top: -2%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaGFyZWRcXGNzc3ZhclxcdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFxwcm9qZWN0cGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSw4RUFBQTtBQUNBLDZGQUFBO0FDQUo7RUFDSSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQUVSO0FBQ0k7RUFDSSxhQUFBO0VBQ0EsY0RKRztFQ0tILHVCQUFBO0FBRVI7QUFDSTtFQUNJLHVCRE5PO0FDUWY7QUFDSTtFQUNJLHVCRFZPO0VDV1AsY0RiQztFQ2NELGdCQUFBO0VBQ0EsZUFBQTtBQUVSO0FBQ0k7RUFDSSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUVSO0FBQ0k7RUFDSSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFFUjtBQUNJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUVSO0FBQ0k7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBRVI7QUFDSTtFQUNJLGdCQUFBO0FBRVI7QUFDSTtFQUNJLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0FBRVI7QUFDSTtFQUNJLG1CQUFBO0VBQ0EsY0R4REc7RUN5REgsZUFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLGlEQUFBO0VBQ0EsbUJBQUE7QUFFUjtBQUNJO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFFUjtBQUFJO0VBQ0ksOEJBQUE7QUFHUjtBQURJO0VBQ0ksa0JBQUE7QUFJUjtBQURJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFJUjtBQURJO0VBQ0ksOEJBQUE7QUFJUjtBQURJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJEaEdHO0FDb0dYO0FBREk7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7QUFJUjtBQURJO0VBQ0ksVUFBQTtBQUlSO0FBRkk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBS1I7QUFGSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FBS1I7QUFGSTtFQUVJLFNBQUE7RUFFQSxlQUFBO0VBQ0EscUJBQUE7QUFLUjtBQUZJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBS1I7QUFGSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBS1I7QUFGSTtFQUNJLGNEbkpHO0VDb0pILGVBQUE7QUFLUjtBQUZJO0VBQ0ksdUJEckpPO0VDc0pQLGNEekpHO0VDMEpILGdCQUFBO0VBQ0EsZUFBQTtBQUtSO0FBRkk7RUFFSSxTQUFBO0VBRUEsZUFBQTtFQUNBLHFCQUFBO0FBS1I7QUFGSTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjRHhLQztFQ3lLRCwrQkFBQTtBQUtSO0FBRkk7RUFDSTtJQUNJLGFBQUE7SUFDQSwwQkFBQTtJQUNBLGdCQUFBO0lBQ0EsYUFBQTtFQUtWOztFQUhNO0lBQ0ksa0JBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtFQU1WOztFQUpNO0lBQ0ksYUFBQTtJQUNBLDBCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxhQUFBO0VBT1Y7O0VBTE07SUFDSSxtQkFBQTtJQUNBLFdBQUE7RUFRVjtBQUNGO0FBSEk7RUFDSTtJQUNJLGNEek1EO0lDME1DLGVBQUE7RUFLVjs7RUFITTtJQUNJLHVCRDFNRztJQzJNSCxjRDlNRDtJQytNQyxnQkFBQTtJQUNBLGVBQUE7RUFNVjs7RUFKTTtJQUNJLGVBQUE7SUFDQSxnQkFBQTtJQUNBLCtCQUFBO0VBT1Y7O0VBTE07SUFDSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0VBUVY7O0VBTk07SUFDSSx1QkQ1Tkc7SUM2TkgsY0QvTkg7SUNnT0csZ0JBQUE7SUFDQSxlQUFBO0VBU1Y7O0VBUE07SUFDSSxhQUFBO0lBQ0EsOEJBQUE7SUFDQSxnQkFBQTtJQUNBLGFBQUE7RUFVVjs7RUFSTTtJQUNJLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7RUFXVjs7RUFUTTtJQUNJLGFBQUE7SUFDQSxxQ0FBQTtJQUNBLGdCQUFBO0VBWVY7O0VBVk07SUFDSSxzQkFBQTtJQUNBLFdBQUE7RUFhVjs7RUFYTTtJQUNJLHlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0VBY1Y7QUFDRiIsImZpbGUiOiJwcm9qZWN0cGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FucyZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UXVhbnRpY286aXRhbCx3Z2h0QDEsNzAwJmRpc3BsYXk9c3dhcCcpO1xyXG4kYmFjZ3JvdW5kX2Rhcms6IzEwMTgyMEZGO1xyXG4kc3VyZmFjZV9iYWNncm91bmRfZGFyazojMkIzMDNEO1xyXG4kcHJpbWFyeV9yZWQ6I0I4MEYwQTtcclxuJG1haW50aXRsZTojRkZGRkZGO1xyXG4kc3ViYm9keTojNjc2NzY3O1xyXG4kc3ViYm9keWxpZ2h0OiNEMEQwRDA7XHJcbiRmb250c3R5bGVtYWluOidRdWFudGljbyc7XHJcbiRmb250c3R5bGVzZWNvbmQ6J09wZW4gU2Fucyc7XHJcbiRwcmltYXJ5X2dyZWVuOiMzNTVFM0I7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCIgICAgQGltcG9ydCBcIi4uL3NoYXJlZC9jc3N2YXIvdmFyaWFibGVzLnNjc3NcIjtcclxuICAgIC5yb3ctbm8tbWFyZ2luIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRpdGxlb2RlZHVjYXRpb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgY29sb3I6ICRtYWludGl0bGU7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5lZHVjYXRpb250aXRpbGUge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udHN0eWxlbWFpbjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJsb2NrdGlsZWxpbmUge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udHN0eWxlbWFpbjtcclxuICAgICAgICBjb2xvcjogJHN1YmJvZHk7XHJcbiAgICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5kZXNjcmlwdGlvbmJsb2NrIHtcclxuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICRzdWJib2R5O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMiU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZ2lyZGNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xyXG4gICAgICAgIGNvbHVtbi1nYXA6IDMwcHg7XHJcbiAgICAgICAgcm93LWdhcDogMzBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRpdGxlYm94IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYmxvY2t0aWxlbGluZTIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDE4cHg7XHJcbiAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYmxvY2tsaW5lMyB7XHJcbiAgICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmdpcmRjYXJkYm94IHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjVmciA2NWZyIDEwZnI7XHJcbiAgICAgICAgY29sdW1uLWdhcDogMjBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNhcmQge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgY29sb3I6ICRtYWludGl0bGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDVweCA1cHggMCByZ2JhKDEwMywgMTE5LCAxMDksIDAuMzcpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDFzIGVhc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQ6aG92ZXJ7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHByaW1hcnlfcmVkO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IC0zJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMyU7XHJcbiAgICB9XHJcbiAgICAuYW5pbWF0ZWQge1xyXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5oaWRlLW9uLWluaXQge1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnBsYXRlZm9ybWxpc3Qge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucmlndGhDb250ZW50ZGF0YSB7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAkcHJpbWFyeV9yZWQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5ibG9ja3RpbGVsaW5lOjpiZWZvcmUge1xyXG4gICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgbGVmdDogLTIxcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHByaW1hcnlfcmVkO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWludGl0bGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5pY29uY3NzIHtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzIGVhc2U7XHJcbiAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaWNvbmNzczpob3ZlciB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgIC5pbWFnZWRpdntcclxuICAgICAgICB3aWR0aDogNzBweDtcclxuICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaW1nY3NzIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDcwcHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogODBweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5pbWdjc3M6aG92ZXIge1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuNSk7XHJcbiAgICAgICAgLyogSUUgOSAqL1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG4gICAgICAgIC8qIFNhZmFyaSAzLTggKi9cclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5pbWFnZWJveCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucHJvamVjdGRhdGEge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnByb2plY3RkZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgY29sb3I6ICRtYWludGl0bGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYXBwbmFtZWNzcyB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250c3R5bGVtYWluO1xyXG4gICAgICAgIGNvbG9yOiAkbWFpbnRpdGxlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucGxhdGZvcm1jc3M6aG92ZXIge1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuNSk7XHJcbiAgICAgICAgLyogSUUgOSAqL1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG4gICAgICAgIC8qIFNhZmFyaSAzLTggKi9cclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wbGF0Zm9ybWNzcyB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgY29sb3I6ICRzdWJib2R5O1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnMgZWFzZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgICAgIC5naXJkY29udGFpbmVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgICAgIGNvbHVtbi1nYXA6IDIwcHg7XHJcbiAgICAgICAgICAgIHJvdy1nYXA6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50aXRsZWJveCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5naXJkY2FyZGJveCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICAgICAgICBjb2x1bW4tZ2FwOiAyMHB4O1xyXG4gICAgICAgICAgICByb3ctZ2FwOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucGxhdGVmb3JtbGlzdCB7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuIFxyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOjEwMDBweCkgYW5kIChtYXgtd2lkdGg6MTQwMHB4KSAge1xyXG4gICAgICAgIC5wcm9qZWN0ZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICBjb2xvcjogJG1haW50aXRsZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYXBwbmFtZWNzcyB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udHN0eWxlbWFpbjtcclxuICAgICAgICAgICAgY29sb3I6ICRtYWludGl0bGU7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmltZ2NzcyB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNTBweDtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBlYXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW1hZ2VkaXZ7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYmxvY2t0aWxlbGluZSB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udHN0eWxlbWFpbjtcclxuICAgICAgICAgICAgY29sb3I6ICRzdWJib2R5O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5naXJkY29udGFpbmVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgICAgICAgICBjb2x1bW4tZ2FwOiAyMHB4O1xyXG4gICAgICAgICAgICByb3ctZ2FwOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGl0bGVib3gge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5naXJkY2FyZGJveCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjVmciA2NWZyIDEwZnI7XHJcbiAgICAgICAgICAgIGNvbHVtbi1nYXA6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wbGF0ZWZvcm1saXN0IHtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJkOmhvdmVye1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkcHJpbWFyeV9yZWQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0yJTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTIlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectpageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projectpage',
                templateUrl: './projectpage.component.html',
                styleUrls: ['./projectpage.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_toolbar_text_service__WEBPACK_IMPORTED_MODULE_3__["ToolbarTextService"] }]; }, null); })();


/***/ }),

/***/ "m8nh":
/*!*****************************************************!*\
  !*** ./src/app/shared/animations/slideanimation.ts ***!
  \*****************************************************/
/*! exports provided: slideInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInAnimation", function() { return slideInAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

function slideTo(direction) {
    const optional = { optional: true };
    return [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                [direction]: 0,
                height: '100%',
                width: '100%'
            })
        ], optional),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ [direction]: '-100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('900ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ [direction]: '100%' }))
            ], optional),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('900ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ [direction]: '0%' }))
            ])
        ]),
        // Normalize the page style... Might not be necessary
        // Required only if you have child animations on the page
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ];
}
const slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':increment', slideTo('right')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':decrement', slideTo('left'))
]);


/***/ }),

/***/ "n/v3":
/*!***********************************************************!*\
  !*** ./src/app/shared/module/material/material.module.ts ***!
  \***********************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");










class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["ScrollingModule"]
        ], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["ScrollingModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["ScrollingModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["ScrollingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["ScrollingModule"]
                ],
                exports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["ScrollingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "r4Ws":
/*!********************************************************!*\
  !*** ./src/app/contacmepage/contacmepage.component.ts ***!
  \********************************************************/
/*! exports provided: ContacmepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContacmepageComponent", function() { return ContacmepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_contactme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/contactme.service */ "4iOu");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ContacmepageComponent_div_51_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "First Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContacmepageComponent_div_51_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContacmepageComponent_div_51_div_10_div_1_Template, 3, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.firstname.errors.required);
} }
function ContacmepageComponent_div_51_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Last Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContacmepageComponent_div_51_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContacmepageComponent_div_51_div_15_div_1_Template, 3, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f.lastname.errors.required);
} }
function ContacmepageComponent_div_51_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContacmepageComponent_div_51_div_20_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Enter valid email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContacmepageComponent_div_51_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContacmepageComponent_div_51_div_20_div_1_Template, 3, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContacmepageComponent_div_51_div_20_div_2_Template, 3, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.f.email.errors.pattern);
} }
function ContacmepageComponent_div_51_div_25_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Organisation name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContacmepageComponent_div_51_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContacmepageComponent_div_51_div_25_div_1_Template, 3, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.f.organisation.errors.required);
} }
function ContacmepageComponent_div_51_div_30_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Subject is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContacmepageComponent_div_51_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContacmepageComponent_div_51_div_30_div_1_Template, 3, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.f.subject.errors.required);
} }
function ContacmepageComponent_div_51_div_35_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Comment is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContacmepageComponent_div_51_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContacmepageComponent_div_51_div_35_div_1_Template, 3, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.f.comment.errors.required);
} }
function ContacmepageComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContacmepageComponent_div_51_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Drop Me A Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "First Name *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ContacmepageComponent_div_51_div_10_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Last Name *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ContacmepageComponent_div_51_div_15_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Email *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ContacmepageComponent_div_51_div_20_Template, 3, 2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Organisation Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ContacmepageComponent_div_51_div_25_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Subject *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ContacmepageComponent_div_51_div_30_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Comment *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "textarea", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ContacmepageComponent_div_51_div_35_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Send");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.contactform);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f.firstname.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f.lastname.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f.email.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f.organisation.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f.subject.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f.comment.errors);
} }
function ContacmepageComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Thank you for your Messgae. I will try to reach you as soon as possible ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ContacmepageComponent {
    constructor(formbulider, conatservice) {
        this.formbulider = formbulider;
        this.conatservice = conatservice;
        this.submitted = false;
        this.datasend = false;
    }
    ngOnInit() {
        this.contactform = this.formbulider.group({
            firstname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^(?=[^@]*[A-Za-z])([a-zA-Z0-9])(([a-zA-Z0-9])*([\._-])?([a-zA-Z0-9]))*@(([a-zA-Z0-9\-])+(\.))+([a-zA-Z]{2,4})+$/),
                ]],
            subject: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            organisation: [null],
            comment: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    get f() {
        return this.contactform.controls;
    }
    filedownload() {
        let link = document.createElement("a");
        link.download = "Kunj_Patel_Resume";
        link.href = "assets/img/Kunj_Patel_Resume.pdf";
        link.click();
    }
    onSubmit() {
        this.submitted = true;
        if (this.contactform.invalid) {
            return;
        }
        this.conatservice.create(this.contactform.value).then(() => {
            console.log('Created new item successfully!');
            this.datasend = true;
        });
        // this.insertdata.postCompany(this.insertdataform.value).subscribe((data:any) => {
        //     if(data["Status Code"] == 201){
        //       this._snackBar.open("Data Inserted", "Successfully", {
        //         duration: 3000,
        //       });
        //       this.insertdataform.reset();
        //       this.submitted = false;
        //     }
        // });
    }
}
ContacmepageComponent.ɵfac = function ContacmepageComponent_Factory(t) { return new (t || ContacmepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_contactme_service__WEBPACK_IMPORTED_MODULE_2__["ContactmeService"])); };
ContacmepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContacmepageComponent, selectors: [["app-contacmepage"]], decls: 53, vars: 2, consts: [[1, "row", "row-no-margin", "mainDivSkill"], [1, "col-md-6", "mainDivSkill", "flexdiv2"], [1, "innerdivflex"], [1, "h2css"], [1, "contactdiv", "margintop"], [1, "maticoncolor"], [1, "contactdiv"], [1, "innerdivflex", 2, "margin-top", "50px"], [1, "linkCssdiv", 2, "margin-top", "25px"], [1, "linkdincssflexdiv"], ["href", "https://www.linkedin.com/in/kunj-patel-87a828198/", "target", "_blank"], [1, "devicon-linkedin-plain", "iconcss"], [1, "maticoncolor2", 2, "margin-top", "15px"], [1, "innerdivflex", 2, "margin-top", "30px"], [1, "downloadicon", 3, "click"], [1, "maticoncolor2", 2, "margin-top", "5px"], ["class", "col-md-6 card mainDivSkill flexdiv", 4, "ngIf"], [1, "col-md-6", "card", "mainDivSkill", "flexdiv"], [1, "formcss", 3, "formGroup", "ngSubmit"], [1, "row", "h2div"], [1, "h2css", "centerh2"], [1, "row", 2, "margin-top", "2%"], [1, "form-group", "col-md-6", "mb-3"], [1, "lablecss"], ["type", "text ", "formControlName", "firstname", 1, "form-control", "inputcss"], ["style", "color: red", 4, "ngIf"], ["type", "text ", "formControlName", "lastname", 1, "form-control", "inputcss"], [1, "form-group", "col-md-12", "mb-3"], ["type", "text ", "formControlName", "email", 1, "form-control", "inputcss"], ["type", "text ", "formControlName", "organisation", 1, "form-control", "inputcss"], ["type", "text ", "formControlName", "subject", 1, "form-control", "inputcss"], ["formControlName", "comment", "cols", "40 ", "rows", "6 ", 1, "form-control", "inputcss"], [1, "text-center"], [1, "raise", "margin_top_5", "contactmebtn"], [2, "color", "red"], [4, "ngIf"], [1, "errormsgcss"], ["src", "../../assets/img/source.gif", "width", "250px"]], template: function ContacmepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Where I am ? and how to reach me?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "place");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Monteral , Canada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "call");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "+1 (514) 895-5084");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Kunjd96@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Visit Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Linkedin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Download Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContacmepageComponent_Template_mat_icon_click_46_listener() { return ctx.filedownload(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "file_download");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, ContacmepageComponent_div_51_Template, 39, 7, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, ContacmepageComponent_div_52_Template, 5, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.datasend);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.datasend);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Quantico:ital,wght@1,700&display=swap\");\n.row-no-margin[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: 0px !important;\n  margin-right: 0px !important;\n}\n.bordercss[_ngcontent-%COMP%] {\n  border: 1px solid #676767;\n}\n.mainDivSkill[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 64px);\n}\n.h2css[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Quantico\";\n  align-items: center;\n}\n.paddingcss[_ngcontent-%COMP%] {\n  padding: 25px;\n}\n.errormsgcss[_ngcontent-%COMP%] {\n  color: red;\n  font-family: \"Open Sans\";\n  font-size: 14px;\n}\n.raise[_ngcontent-%COMP%]:hover, .raise[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0.7em 0.7em -0.4em #B80F0A;\n  transform: translateY(-0.25em);\n}\n.downloadicon[_ngcontent-%COMP%] {\n  color: #D0D0D0;\n  font-size: 25px;\n}\n.downloadicon[_ngcontent-%COMP%]:hover {\n  color: #B80F0A;\n}\n.card[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 18px;\n  background: rgba(255, 255, 255, 0.1);\n  box-shadow: 0 8px 32px 0 rgba(16, 54, 32, 0.37);\n  border-right: 1px solid rgba(255, 255, 255, 0.2);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  transition: 1s ease;\n}\n.contactmebtn[_ngcontent-%COMP%] {\n  color: #B80F0A;\n  background-color: transparent;\n  font-size: 18px;\n  font-family: \"Open Sans\";\n  border: 1px solid #B80F0A;\n  font-family: \"Quantico\";\n  padding: 8px;\n  padding-right: 25px;\n  padding-left: 25px;\n}\n.contactmebtn[_ngcontent-%COMP%]:hover, .contactmebtn[_ngcontent-%COMP%]:focus {\n  border-color: #B80F0A;\n  color: #B80F0A;\n}\n.maticoncolor[_ngcontent-%COMP%] {\n  color: #D0D0D0;\n  margin-left: 25px;\n}\n.maticoncolor2[_ngcontent-%COMP%] {\n  color: #D0D0D0;\n}\n.formcss[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.flexdiv[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.flexdiv2[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.innerdivflex[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.linkdincssflexdiv[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.iconcss[_ngcontent-%COMP%] {\n  font-size: 25px;\n  color: white;\n}\n.iconcss[_ngcontent-%COMP%]:hover {\n  font-size: 25px;\n  color: #B80F0A;\n}\n.margintop[_ngcontent-%COMP%] {\n  margin-top: 10%;\n}\n.contactdiv[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n.inputcss[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  color: #FFFFFF;\n  border: 1px solid #676767;\n}\n.lablecss[_ngcontent-%COMP%] {\n  color: #D0D0D0;\n}\n.animated[_ngcontent-%COMP%] {\n  visibility: visible !important;\n}\n.hide-on-init[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.linkCssdiv[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  column-gap: 25px;\n}\n@media only screen and (max-width: 1400px) {\n  .h2css[_ngcontent-%COMP%] {\n    color: white;\n    font-family: \"Quantico\";\n    align-items: center;\n    font-size: 15px !important;\n  }\n\n  .lablecss[_ngcontent-%COMP%] {\n    color: #D0D0D0;\n    font-size: 12px !important;\n  }\n\n  .inputcss[_ngcontent-%COMP%] {\n    background: rgba(255, 255, 255, 0.1);\n    color: #FFFFFF;\n    border: 1px solid #676767;\n    font-size: 12px;\n  }\n\n  .contactmebtn[_ngcontent-%COMP%] {\n    color: #B80F0A;\n    background-color: transparent;\n    font-size: 16px;\n    font-family: \"Open Sans\";\n    border: 1px solid #B80F0A;\n    font-family: \"Quantico\";\n    padding: 6px;\n    padding-right: 25px;\n    padding-left: 25px;\n  }\n  .contactmebtn[_ngcontent-%COMP%]:hover, .contactmebtn[_ngcontent-%COMP%]:focus {\n    border-color: #B80F0A;\n    color: #B80F0A;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaGFyZWRcXGNzc3ZhclxcdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFxjb250YWNtZXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsOEVBQUE7QUFDQSw2RkFBQTtBQ0FSO0VBQ0ksV0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUFFSjtBQUNBO0VBQ0kseUJBQUE7QUFFSjtBQUNBO0VBQ0ksOEJBQUE7QUFFSjtBQUNBO0VBQ0ksWUFBQTtFQUNBLHVCRFRXO0VDVVgsbUJBQUE7QUFFSjtBQUNBO0VBQ0ksYUFBQTtBQUVKO0FBQ0E7RUFDSSxVQUFBO0VBQ0Esd0JEbEJhO0VDbUJiLGVBQUE7QUFFSjtBQUNBOztFQUVJLHdDQUFBO0VBQ0EsOEJBQUE7QUFFSjtBQUNBO0VBQ0ksY0QvQlU7RUNnQ1YsZUFBQTtBQUVKO0FBQ0E7RUFDSSxjRHZDUztBQ3lDYjtBQUNBO0VBQ0ksY0QxQ087RUMyQ1AsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsK0NBQUE7RUFDQSxnREFBQTtFQUNBLGlEQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLG1CQUFBO0FBRUo7QUFDQTtFQUNJLGNEdERTO0VDdURULDZCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCRHBEYTtFQ3FEYix5QkFBQTtFQUNBLHVCRHZEVztFQ3dEWCxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUVKO0FBREk7RUFFSSxxQkRqRUs7RUNrRUwsY0RsRUs7QUNvRWI7QUFFQTtFQUNJLGNEcEVVO0VDcUVWLGlCQUFBO0FBQ0o7QUFFQTtFQUNJLGNEekVVO0FDMEVkO0FBRUE7RUFDSSxVQUFBO0FBQ0o7QUFFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBRUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFFQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBQ0o7QUFDQTtFQUNJLGVBQUE7RUFDQSxjRHBIUztBQ3NIYjtBQUNBO0VBQ0ksZUFBQTtBQUVKO0FBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUVKO0FBQ0E7RUFDSSxvQ0FBQTtFQUNBLGNEbElPO0VDbUlQLHlCQUFBO0FBRUo7QUFDQTtFQUNJLGNEcklVO0FDdUlkO0FBQUE7RUFDSSw4QkFBQTtBQUdKO0FBREE7RUFDSSxrQkFBQTtBQUlKO0FBREE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFJSjtBQUZBO0VBQ0k7SUFDSSxZQUFBO0lBQ0EsdUJEdkpPO0lDd0pQLG1CQUFBO0lBQ0EsMEJBQUE7RUFLTjs7RUFIRTtJQUNJLGNEN0pNO0lDOEpOLDBCQUFBO0VBTU47O0VBSkU7SUFDSSxvQ0FBQTtJQUNBLGNEcEtHO0lDcUtILHlCQUFBO0lBQ0EsZUFBQTtFQU9OOztFQUxFO0lBQ0ksY0QxS0s7SUMyS0wsNkJBQUE7SUFDQSxlQUFBO0lBQ0Esd0JEeEtTO0lDeUtULHlCQUFBO0lBQ0EsdUJEM0tPO0lDNEtQLFlBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0VBUU47RUFQTTtJQUVJLHFCRHJMQztJQ3NMRCxjRHRMQztFQzhMWDtBQUNGIiwiZmlsZSI6ImNvbnRhY21lcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FucyZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UXVhbnRpY286aXRhbCx3Z2h0QDEsNzAwJmRpc3BsYXk9c3dhcCcpO1xyXG4kYmFjZ3JvdW5kX2Rhcms6IzEwMTgyMEZGO1xyXG4kc3VyZmFjZV9iYWNncm91bmRfZGFyazojMkIzMDNEO1xyXG4kcHJpbWFyeV9yZWQ6I0I4MEYwQTtcclxuJG1haW50aXRsZTojRkZGRkZGO1xyXG4kc3ViYm9keTojNjc2NzY3O1xyXG4kc3ViYm9keWxpZ2h0OiNEMEQwRDA7XHJcbiRmb250c3R5bGVtYWluOidRdWFudGljbyc7XHJcbiRmb250c3R5bGVzZWNvbmQ6J09wZW4gU2Fucyc7XHJcbiRwcmltYXJ5X2dyZWVuOiMzNTVFM0I7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJAaW1wb3J0IFwiLi4vc2hhcmVkL2Nzc3Zhci92YXJpYWJsZXMuc2Nzc1wiO1xyXG4ucm93LW5vLW1hcmdpbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ib3JkZXJjc3Mge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJHN1YmJvZHk7XHJcbn1cclxuXHJcbi5tYWluRGl2U2tpbGwge1xyXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xyXG59XHJcblxyXG4uaDJjc3Mge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250c3R5bGVtYWluO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnBhZGRpbmdjc3Mge1xyXG4gICAgcGFkZGluZzogMjVweDtcclxufVxyXG5cclxuLmVycm9ybXNnY3NzIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnRzdHlsZXNlY29uZDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnJhaXNlOmhvdmVyLFxyXG4ucmFpc2U6Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzogMCAwLjdlbSAwLjdlbSAtMC40ZW0gJHByaW1hcnlfcmVkO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjI1ZW0pO1xyXG59XHJcblxyXG4uZG93bmxvYWRpY29uIHtcclxuICAgIGNvbG9yOiAkc3ViYm9keWxpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG4uZG93bmxvYWRpY29uOmhvdmVyIHtcclxuICAgIGNvbG9yOiAkcHJpbWFyeV9yZWQ7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIGNvbG9yOiAkbWFpbnRpdGxlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoMTYsIDU0LCAzMiwgMC4zNyk7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogMXMgZWFzZTtcclxufVxyXG5cclxuLmNvbnRhY3RtZWJ0biB7XHJcbiAgICBjb2xvcjogJHByaW1hcnlfcmVkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnRzdHlsZXNlY29uZDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5X3JlZDtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udHN0eWxlbWFpbjtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgICAmOmhvdmVyLFxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeV9yZWQ7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5X3JlZDtcclxuICAgIH1cclxufVxyXG5cclxuLm1hdGljb25jb2xvciB7XHJcbiAgICBjb2xvcjogJHN1YmJvZHlsaWdodDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG59XHJcblxyXG4ubWF0aWNvbmNvbG9yMiB7XHJcbiAgICBjb2xvcjogJHN1YmJvZHlsaWdodDtcclxufVxyXG5cclxuLmZvcm1jc3Mge1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLmZsZXhkaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmZsZXhkaXYyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaW5uZXJkaXZmbGV4IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubGlua2RpbmNzc2ZsZXhkaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pY29uY3NzIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uaWNvbmNzczpob3ZlciB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBjb2xvcjogJHByaW1hcnlfcmVkO1xyXG59XHJcblxyXG4ubWFyZ2ludG9wIHtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxufVxyXG5cclxuLmNvbnRhY3RkaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmlucHV0Y3NzIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICAgIGNvbG9yOiAkbWFpbnRpdGxlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJHN1YmJvZHk7XHJcbn1cclxuXHJcbi5sYWJsZWNzcyB7XHJcbiAgICBjb2xvcjogJHN1YmJvZHlsaWdodDtcclxufVxyXG4uYW5pbWF0ZWQge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG59XHJcbi5oaWRlLW9uLWluaXQge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4ubGlua0Nzc2RpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbHVtbi1nYXA6IDI1cHg7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIHtcclxuICAgIC5oMmNzcyB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udHN0eWxlbWFpbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmxhYmxlY3NzIHtcclxuICAgICAgICBjb2xvcjogJHN1YmJvZHlsaWdodDtcclxuICAgICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5pbnB1dGNzcyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gICAgICAgIGNvbG9yOiAkbWFpbnRpdGxlO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRzdWJib2R5O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICAgIC5jb250YWN0bWVidG4ge1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeV9yZWQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udHN0eWxlc2Vjb25kO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5X3JlZDtcclxuICAgICAgICBmb250LWZhbWlseTogJGZvbnRzdHlsZW1haW47XHJcbiAgICAgICAgcGFkZGluZzogNnB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgICAgICY6aG92ZXIsXHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnlfcmVkO1xyXG4gICAgICAgICAgICBjb2xvcjogJHByaW1hcnlfcmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContacmepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contacmepage',
                templateUrl: './contacmepage.component.html',
                styleUrls: ['./contacmepage.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_contactme_service__WEBPACK_IMPORTED_MODULE_2__["ContactmeService"] }]; }, null); })();


/***/ }),

/***/ "sM7m":
/*!**************************************************!*\
  !*** ./src/app/skillpage/skillpage.component.ts ***!
  \**************************************************/
/*! exports provided: SkillpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillpageComponent", function() { return SkillpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_allconst_skill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/allconst/skill */ "yj5t");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_toolbar_text_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/toolbar-text.service */ "Wz0B");
/* harmony import */ var ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-animate-on-scroll */ "wR1u");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = function (a0) { return { "stroke": a0 }; };
function SkillpageComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "image", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("stroke-dasharray", "", item_r2.percentage, ", 100");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, item_r2.colorCode));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", item_r2.valueIcon, null, "xlink");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.skillName);
} }
const _c1 = function (a0, a1) { return { "width": a0, "background-color": a1 }; };
function SkillpageComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.skillName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c1, item_r4.percentage + "%", item_r4.colorCode));
} }
class SkillpageComponent {
    constructor(router, toolbarTextChage) {
        this.router = router;
        this.toolbarTextChage = toolbarTextChage;
        this.htmlSkill = 60;
        this.angularSkill = 70;
        this.androidskill = 70;
        this.nodejsSkill = 60;
        this.ionic = 40;
        this.skill = _shared_allconst_skill__WEBPACK_IMPORTED_MODULE_1__["Skill"];
        debugger;
    }
    ngOnInit() {
    }
    gotoAllProjects() {
        this.router.navigateByUrl('/Projects');
        this.toolbarTextChage.toolBarTextChange('Projects');
    }
}
SkillpageComponent.ɵfac = function SkillpageComponent_Factory(t) { return new (t || SkillpageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_toolbar_text_service__WEBPACK_IMPORTED_MODULE_3__["ToolbarTextService"])); };
SkillpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillpageComponent, selectors: [["app-skillpage"]], decls: 16, vars: 4, consts: [[1, "row", "row-no-margin", "mainDivSkill"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-6", "skillbarmaindiv", "padding_left_rigth"], [1, "mobilecssskill"], ["animateOnScroll", "", "animationName", "animate__animated animate__backInLeft animate__delay-1s", 1, "skillLableh1"], ["animateOnScroll", "", "animationName", "animate__animated animate__zoomIn animate__delay-1s", 1, "title", "skillLableh2"], ["animateOnScroll", "", "animationName", "animate__animated animate__zoomIn animate__delay-1s", 1, "raise", "margin_top_5", "contactmebtn", 3, "click"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-6", "mainDivSkill"], [1, "row", "row-no-margin"], [1, "gridSkill", "padding_left_rigth", "marginTopcss"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "skillDivGrid", "padding_left_rigth", "marginTopcss"], ["class", "Skill", 4, "ngFor", "ngForOf"], [1, "card"], [1, "card-content"], [1, "single-chart"], ["viewBox", "0 0 36 36", 1, "circular-chart", "orange"], ["d", "M18 2.0845\n                                    a 15.9155 15.9155 0 0 1 0 31.831\n                                    a 15.9155 15.9155 0 0 1 0 -31.831", 1, "circle-bg"], ["d", "M18 2.0845\n                                    a 15.9155 15.9155 0 0 1 0 31.831\n                                    a 15.9155 15.9155 0 0 1 0 -31.831", 1, "circle", 3, "ngStyle"], ["x", "12", "y", "12", "width", "12", "height", "12", 1, "percentage"], [1, "skillcardptag"], [1, "Skill"], [1, "skilllablesize", 2, "color", "white"], [1, "skillbarparent"], [1, "htmlskill", 3, "ngStyle"]], template: function SkillpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillpageComponent_Template_button_click_7_listener() { return ctx.gotoAllProjects(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "All Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SkillpageComponent_div_12_Template, 10, 6, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SkillpageComponent_div_15_Template, 5, 5, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.skill.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.skill.subBody);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skill.allCardSkill);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skill.allSkillBar);
    } }, directives: [ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_4__["AnimateOnScrollDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Quantico:ital,wght@1,700&display=swap\");\n.single-chart[_ngcontent-%COMP%] {\n  width: 70%;\n}\n.padding_left_rigth[_ngcontent-%COMP%] {\n  padding-left: 5%;\n  padding-right: 5%;\n}\n.row-no-margin[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: 0px !important;\n  margin-right: 0px !important;\n}\n.gridSkill[_ngcontent-%COMP%] {\n  display: grid;\n  width: 100%;\n  grid-template-columns: 1fr 1fr 1fr;\n}\n.raise[_ngcontent-%COMP%]:hover, .raise[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0.7em 0.7em -0.4em #B80F0A;\n  transform: translateY(-0.25em);\n}\n.margin_top_5[_ngcontent-%COMP%] {\n  margin-top: 5% !important;\n}\n.contactmebtn[_ngcontent-%COMP%] {\n  color: #B80F0A;\n  background-color: transparent;\n  font-size: 15px;\n  font-family: \"Open Sans\";\n  border: 1px solid #B80F0A;\n  font-family: \"Quantico\";\n  padding: 8px;\n  padding-right: 25px;\n  padding-left: 25px;\n}\n.contactmebtn[_ngcontent-%COMP%]:hover, .contactmebtn[_ngcontent-%COMP%]:focus {\n  border-color: #B80F0A;\n  color: #B80F0A;\n}\n.card-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.Skill[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.iconcss[_ngcontent-%COMP%] {\n  font-size: 25px;\n  align-items: center;\n  transition: transform 0.5s ease;\n  opacity: 0.5;\n}\n.mainDivSkill[_ngcontent-%COMP%] {\n  height: calc(100vh - 64px);\n}\n.skillbarparent[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 5px;\n  background-color: #676767;\n}\n.htmlskill[_ngcontent-%COMP%] {\n  text-align: right;\n  color: #FFFFFF;\n  position: relative;\n  animation: load 2s 0s;\n  transition: width 1s ease-in-out;\n  background-color: #B80F0A;\n  height: 5px;\n}\n.animated[_ngcontent-%COMP%] {\n  visibility: visible !important;\n}\n.hide-on-init[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.skillpercentagelable[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: -20px;\n  font-size: 15px;\n}\n.skillbarmaindiv[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  height: 100%;\n}\n.skillDivGrid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  row-gap: 30%;\n  column-gap: 10%;\n  width: 100%;\n}\n.skillLableh1[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-family: \"Quantico\";\n  margin: 0 0 20px !important;\n}\n.skillLableh2[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  margin: 0 0 20px !important;\n}\n.skillsubbody[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n}\n.marginTopcss[_ngcontent-%COMP%] {\n  margin-top: 10%;\n}\n@keyframes load {\n  from {\n    width: 0%;\n  }\n}\n.row_100[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.card[_ngcontent-%COMP%] {\n  margin: 15px;\n  border-radius: 20px;\n  color: #FFFFFF;\n  font-size: 18px;\n  padding: 5%;\n  background: rgba(255, 255, 255, 0.1);\n  box-shadow: 0 8px 32px 0 rgba(16, 54, 32, 0.37);\n  border-right: 1px solid rgba(255, 255, 255, 0.2);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  transition: 2s ease;\n  animation: bounce-in 1.5s linear;\n}\n.circular-chart[_ngcontent-%COMP%] {\n  display: block;\n  margin: 10px auto;\n  max-width: 80%;\n  max-height: 250px;\n}\n.circle-bg[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: #676767;\n  stroke-width: 1;\n}\n.skilllablesize[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.card[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 0.0555555556s;\n}\n.card[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.1111111111s;\n}\n.card[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.1666666667s;\n}\n.card[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 0.2222222222s;\n}\n@keyframes bounce-in {\n  0% {\n    opacity: 0;\n    transform: scale(0.3);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(1.05);\n  }\n  70% {\n    transform: scale(0.9);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.circle[_ngcontent-%COMP%] {\n  fill: none;\n  stroke-width: 1;\n  stroke-linecap: round;\n  animation: progress 2.5s ease-out forwards;\n}\n@keyframes card-in {\n  0% {\n    opacity: 0;\n    top: 100px;\n  }\n  100% {\n    opacity: 1;\n    top: 0px;\n  }\n}\n@keyframes progress {\n  0% {\n    stroke-dasharray: 0 100;\n  }\n}\n.skillcardptag[_ngcontent-%COMP%] {\n  font-family: \"Quantico\";\n  margin-top: 40%;\n}\n.circular-chart.orange[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  stroke: #B80F0A;\n}\n.percentage[_ngcontent-%COMP%] {\n  fill: #666;\n  font-family: \"Quantico\";\n  font-size: 0.5em;\n  text-anchor: middle;\n}\n@media only screen and (max-width: 600px) {\n  .skillbarmaindiv[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    height: auto;\n  }\n\n  .mobilecssskill[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-top: 5%;\n  }\n\n  .gridSkill[_ngcontent-%COMP%] {\n    display: grid;\n    width: 100%;\n    grid-template-columns: 1fr;\n  }\n\n  .single-chart[_ngcontent-%COMP%] {\n    width: 55%;\n  }\n\n  .skillcardptag[_ngcontent-%COMP%] {\n    font-family: \"Quantico\";\n    margin-top: 18% !important;\n    font-size: 15px !important;\n  }\n\n  .skilllablesize[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n\n  .skillbarparent[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 3px;\n    background-color: #676767;\n  }\n\n  .htmlskill[_ngcontent-%COMP%] {\n    text-align: right;\n    color: #FFFFFF;\n    position: relative;\n    animation: load 2s 0s;\n    transition: width 1s ease-in-out;\n    background-color: #B80F0A;\n    height: 3px;\n  }\n\n  .skillpercentagelable[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0;\n    top: -20px;\n    font-size: 13px;\n  }\n\n  .psize[_ngcontent-%COMP%] {\n    font-size: 12px !important;\n  }\n\n  .contactmebtn[_ngcontent-%COMP%] {\n    color: #B80F0A;\n    background-color: transparent;\n    font-size: 12px;\n    font-family: \"Open Sans\";\n    border: 1px solid #B80F0A;\n    font-family: \"Quantico\";\n    padding: 6px;\n    padding-right: 25px;\n    padding-left: 25px;\n  }\n  .contactmebtn[_ngcontent-%COMP%]:hover, .contactmebtn[_ngcontent-%COMP%]:focus {\n    border-color: #B80F0A;\n    color: #B80F0A;\n  }\n}\n@media only screen and (max-width: 1400px) {\n  .psize[_ngcontent-%COMP%] {\n    font-size: 12px !important;\n  }\n\n  .single-chart[_ngcontent-%COMP%] {\n    width: 55%;\n  }\n\n  .skillbarparent[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 3px;\n    background-color: #676767;\n  }\n\n  .skillcardptag[_ngcontent-%COMP%] {\n    font-family: \"Quantico\";\n    margin-top: 18% !important;\n    font-size: 15px !important;\n  }\n\n  .skilllablesize[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n\n  .skillpercentagelable[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0;\n    top: -20px;\n    font-size: 13px;\n  }\n\n  .htmlskill[_ngcontent-%COMP%] {\n    text-align: right;\n    color: #FFFFFF;\n    position: relative;\n    animation: load 2s 0s;\n    transition: width 1s ease-in-out;\n    background-color: #B80F0A;\n    height: 3px;\n  }\n\n  .contactmebtn[_ngcontent-%COMP%] {\n    color: #B80F0A;\n    background-color: transparent;\n    font-size: 12px;\n    font-family: \"Open Sans\";\n    border: 1px solid #B80F0A;\n    font-family: \"Quantico\";\n    padding: 6px;\n    padding-right: 25px;\n    padding-left: 25px;\n  }\n  .contactmebtn[_ngcontent-%COMP%]:hover, .contactmebtn[_ngcontent-%COMP%]:focus {\n    border-color: #B80F0A;\n    color: #B80F0A;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaGFyZWRcXGNzc3ZhclxcdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFxza2lsbHBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsOEVBQUE7QUFDQSw2RkFBQTtBQ0FSO0VBQ0ksVUFBQTtBQUVKO0FBQ0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FBRUo7QUFDQTtFQUNJLFdBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FBRUo7QUFDQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0NBQUE7QUFFSjtBQUNBOztFQUVJLHdDQUFBO0VBQ0EsOEJBQUE7QUFFSjtBQUNBO0VBQ0kseUJBQUE7QUFFSjtBQUNBO0VBQ0ksY0Q3QlM7RUM4QlQsNkJBQUE7RUFDQSxlQUFBO0VBQ0Esd0JEM0JhO0VDNEJiLHlCQUFBO0VBQ0EsdUJEOUJXO0VDK0JYLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRUo7QUFESTtFQUVJLHFCRHhDSztFQ3lDTCxjRHpDSztBQzJDYjtBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBRUE7RUFDSSxXQUFBO0FBQ0o7QUFFQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtBQUNKO0FBRUE7RUFDSSwwQkFBQTtBQUNKO0FBRUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCRHBFSztBQ3FFVDtBQUVBO0VBQ0ksaUJBQUE7RUFDQSxjRDFFTztFQzJFUCxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5QkQvRVM7RUNnRlQsV0FBQTtBQUNKO0FBRUE7RUFDSSw4QkFBQTtBQUNKO0FBQ0E7RUFDSSxrQkFBQTtBQUVKO0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQUVKO0FBQ0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7QUFFSjtBQUNBO0VBQ0ksYUFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBRUo7QUFDQTtFQUNJLGNEaEhPO0VDaUhQLHVCRDlHVztFQytHWCwyQkFBQTtBQUVKO0FBQ0E7RUFDSSxjRHRITztFQ3VIUCwyQkFBQTtBQUVKO0FBQ0E7RUFDSSxjRDNITztBQzZIWDtBQUNBO0VBQ0ksZUFBQTtBQUVKO0FBQ0E7RUFDSTtJQUNJLFNBQUE7RUFFTjtBQUNGO0FBQ0E7RUFDSSxZQUFBO0FBQ0o7QUFFQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNEL0lPO0VDZ0pQLGVBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSwrQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsaURBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQUNKO0FBRUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUVBO0VBQ0ksVUFBQTtFQUNBLGVEbktLO0VDb0tMLGVBQUE7QUFDSjtBQUNBO0VBQ0ksZUFBQTtBQUVKO0FBSVE7RUFFSSw4QkFBQTtBQUZaO0FBQVE7RUFFSSw4QkFBQTtBQUVaO0FBSlE7RUFFSSw4QkFBQTtBQU1aO0FBUlE7RUFFSSw4QkFBQTtBQVVaO0FBTEE7RUFDSTtJQUNJLFVBQUE7SUFDQSxxQkFBQTtFQVFOO0VBTkU7SUFDSSxVQUFBO0lBQ0Esc0JBQUE7RUFRTjtFQU5FO0lBQ0kscUJBQUE7RUFRTjtFQU5FO0lBQ0ksVUFBQTtJQUNBLG1CQUFBO0VBUU47QUFDRjtBQUxBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLDBDQUFBO0FBT0o7QUFKQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLFVBQUE7RUFPTjtFQUxFO0lBQ0ksVUFBQTtJQUNBLFFBQUE7RUFPTjtBQUNGO0FBSkE7RUFDSTtJQUNJLHVCQUFBO0VBTU47QUFDRjtBQUhBO0VBQ0ksdUJEN05XO0VDOE5YLGVBQUE7QUFLSjtBQUZBO0VBQ0ksZUR0T1M7QUMyT2I7QUFGQTtFQUNJLFVBQUE7RUFDQSx1QkR2T1c7RUN3T1gsZ0JBQUE7RUFDQSxtQkFBQTtBQUtKO0FBREE7RUFDSTtJQUNJLGFBQUE7SUFDQSxzQkFBQTtJQUNBLDZCQUFBO0lBQ0EsWUFBQTtFQUlOOztFQUZFO0lBQ0ksYUFBQTtJQUNBLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtJQUNBLGNBQUE7RUFLTjs7RUFGRTtJQUNJLGFBQUE7SUFDQSxXQUFBO0lBQ0EsMEJBQUE7RUFLTjs7RUFIRTtJQUNJLFVBQUE7RUFNTjs7RUFKRTtJQUNJLHVCRHJRTztJQ3NRUCwwQkFBQTtJQUNBLDBCQUFBO0VBT047O0VBTEU7SUFDSSxlQUFBO0VBUU47O0VBTkU7SUFDSSxXQUFBO0lBQ0EsV0FBQTtJQUNBLHlCRGpSQztFQzBSUDs7RUFQRTtJQUNJLGlCQUFBO0lBQ0EsY0R0Ukc7SUN1Ukgsa0JBQUE7SUFDQSxxQkFBQTtJQUNBLGdDQUFBO0lBQ0EseUJEM1JLO0lDNFJMLFdBQUE7RUFVTjs7RUFSRTtJQUNJLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFVBQUE7SUFDQSxlQUFBO0VBV047O0VBVEU7SUFDSSwwQkFBQTtFQVlOOztFQVZFO0lBQ0ksY0R4U0s7SUN5U0wsNkJBQUE7SUFDQSxlQUFBO0lBQ0Esd0JEdFNTO0lDdVNULHlCQUFBO0lBQ0EsdUJEelNPO0lDMFNQLFlBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0VBYU47RUFaTTtJQUVJLHFCRG5UQztJQ29URCxjRHBUQztFQ2lVWDtBQUNGO0FBVkE7RUFDSTtJQUNJLDBCQUFBO0VBWU47O0VBVkU7SUFDSSxVQUFBO0VBYU47O0VBWEU7SUFDSSxXQUFBO0lBQ0EsV0FBQTtJQUNBLHlCRGhVQztFQzhVUDs7RUFaRTtJQUNJLHVCRGpVTztJQ2tVUCwwQkFBQTtJQUNBLDBCQUFBO0VBZU47O0VBYkU7SUFDSSxlQUFBO0VBZ0JOOztFQWRFO0lBQ0ksa0JBQUE7SUFDQSxRQUFBO0lBQ0EsVUFBQTtJQUNBLGVBQUE7RUFpQk47O0VBZkU7SUFDSSxpQkFBQTtJQUNBLGNEblZHO0lDb1ZILGtCQUFBO0lBQ0EscUJBQUE7SUFDQSxnQ0FBQTtJQUNBLHlCRHhWSztJQ3lWTCxXQUFBO0VBa0JOOztFQWhCRTtJQUNJLGNENVZLO0lDNlZMLDZCQUFBO0lBQ0EsZUFBQTtJQUNBLHdCRDFWUztJQzJWVCx5QkFBQTtJQUNBLHVCRDdWTztJQzhWUCxZQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtFQW1CTjtFQWxCTTtJQUVJLHFCRHZXQztJQ3dXRCxjRHhXQztFQzJYWDtBQUNGIiwiZmlsZSI6InNraWxscGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FucyZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UXVhbnRpY286aXRhbCx3Z2h0QDEsNzAwJmRpc3BsYXk9c3dhcCcpO1xyXG4kYmFjZ3JvdW5kX2Rhcms6IzEwMTgyMEZGO1xyXG4kc3VyZmFjZV9iYWNncm91bmRfZGFyazojMkIzMDNEO1xyXG4kcHJpbWFyeV9yZWQ6I0I4MEYwQTtcclxuJG1haW50aXRsZTojRkZGRkZGO1xyXG4kc3ViYm9keTojNjc2NzY3O1xyXG4kc3ViYm9keWxpZ2h0OiNEMEQwRDA7XHJcbiRmb250c3R5bGVtYWluOidRdWFudGljbyc7XHJcbiRmb250c3R5bGVzZWNvbmQ6J09wZW4gU2Fucyc7XHJcbiRwcmltYXJ5X2dyZWVuOiMzNTVFM0I7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJAaW1wb3J0IFwiLi4vc2hhcmVkL2Nzc3Zhci92YXJpYWJsZXMuc2Nzc1wiO1xyXG4uc2luZ2xlLWNoYXJ0IHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbn1cclxuXHJcbi5wYWRkaW5nX2xlZnRfcmlndGgge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG59XHJcblxyXG4ucm93LW5vLW1hcmdpbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ncmlkU2tpbGwge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcclxufVxyXG5cclxuLnJhaXNlOmhvdmVyLFxyXG4ucmFpc2U6Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzogMCAwLjdlbSAwLjdlbSAtMC40ZW0gJHByaW1hcnlfcmVkO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjI1ZW0pO1xyXG59XHJcblxyXG4ubWFyZ2luX3RvcF81IHtcclxuICAgIG1hcmdpbi10b3A6IDUlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb250YWN0bWVidG4ge1xyXG4gICAgY29sb3I6ICRwcmltYXJ5X3JlZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250c3R5bGVzZWNvbmQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkcHJpbWFyeV9yZWQ7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnRzdHlsZW1haW47XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgJjpob3ZlcixcclxuICAgICY6Zm9jdXMge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnlfcmVkO1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeV9yZWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5Ta2lsbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmljb25jc3Mge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXMgZWFzZTtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLm1haW5EaXZTa2lsbCB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KTtcclxufVxyXG5cclxuLnNraWxsYmFycGFyZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3ViYm9keTtcclxufVxyXG5cclxuLmh0bWxza2lsbCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGNvbG9yOiAkbWFpbnRpdGxlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYW5pbWF0aW9uOiBsb2FkIDJzIDBzO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeV9yZWQ7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxufVxyXG5cclxuLmFuaW1hdGVkIHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcclxufVxyXG4uaGlkZS1vbi1pbml0IHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLnNraWxscGVyY2VudGFnZWxhYmxlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAtMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLnNraWxsYmFybWFpbmRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc2tpbGxEaXZHcmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIHJvdy1nYXA6IDMwJTtcclxuICAgIGNvbHVtbi1nYXA6IDEwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2tpbGxMYWJsZWgxIHtcclxuICAgIGNvbG9yOiAkbWFpbnRpdGxlO1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250c3R5bGVtYWluO1xyXG4gICAgbWFyZ2luOiAwIDAgMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2tpbGxMYWJsZWgyIHtcclxuICAgIGNvbG9yOiAkbWFpbnRpdGxlO1xyXG4gICAgbWFyZ2luOiAwIDAgMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2tpbGxzdWJib2R5IHtcclxuICAgIGNvbG9yOiAkbWFpbnRpdGxlXHJcbn1cclxuXHJcbi5tYXJnaW5Ub3Bjc3Mge1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGxvYWQge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgd2lkdGg6IDAlXHJcbiAgICB9XHJcbn1cclxuXHJcbi5yb3dfMTAwIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGNvbG9yOiAkbWFpbnRpdGxlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgcGFkZGluZzogNSU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMTYsIDU0LCAzMiwgMC4zNyk7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogMnMgZWFzZTtcclxuICAgIGFuaW1hdGlvbjogYm91bmNlLWluIDEuNXMgbGluZWFyO1xyXG59XHJcblxyXG4uY2lyY3VsYXItY2hhcnQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgbWF4LWhlaWdodDogMjUwcHg7XHJcbn1cclxuXHJcbi5jaXJjbGUtYmcge1xyXG4gICAgZmlsbDogbm9uZTtcclxuICAgIHN0cm9rZTogJHN1YmJvZHk7XHJcbiAgICBzdHJva2Utd2lkdGg6IDE7XHJcbn1cclxuLnNraWxsbGFibGVzaXple1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG5AZm9yICRpIGZyb20gMSB0aHJvdWdoIDQge1xyXG4gICAgLmNhcmQge1xyXG4gICAgICAgIC8vIDpudGgtY2hpbGQoMS05KSBcclxuICAgICAgICAmOm50aC1jaGlsZCgjeyRpfSkge1xyXG4gICAgICAgICAgICAvLyBEZWxheSB0aGUgYW5pbWF0aW9uLiBEZWxheSBpbmNyZWFzZXMgYXMgaXRlbXMgbG9vcC5cclxuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAkaSAqICgxcyAvIDE4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYm91bmNlLWluIHtcclxuICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjMpO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICB9XHJcbiAgICA3MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjkpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2lyY2xlIHtcclxuICAgIGZpbGw6IG5vbmU7XHJcbiAgICBzdHJva2Utd2lkdGg6IDE7XHJcbiAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7XHJcbiAgICBhbmltYXRpb246IHByb2dyZXNzIDIuNXMgZWFzZS1vdXQgZm9yd2FyZHM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgY2FyZC1pbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0b3A6IDEwMHB4O1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0b3A6IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBwcm9ncmVzcyB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMCAxMDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5za2lsbGNhcmRwdGFnIHtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udHN0eWxlbWFpbjtcclxuICAgIG1hcmdpbi10b3A6IDQwJTtcclxufVxyXG5cclxuLmNpcmN1bGFyLWNoYXJ0Lm9yYW5nZSAuY2lyY2xlIHtcclxuICAgIHN0cm9rZTogJHByaW1hcnlfcmVkO1xyXG59XHJcblxyXG4ucGVyY2VudGFnZSB7XHJcbiAgICBmaWxsOiAjNjY2O1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250c3R5bGVtYWluO1xyXG4gICAgZm9udC1zaXplOiAwLjVlbTtcclxuICAgIHRleHQtYW5jaG9yOiBtaWRkbGU7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuc2tpbGxiYXJtYWluZGl2IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLm1vYmlsZWNzc3NraWxse1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgfVxyXG4gICBcclxuICAgIC5ncmlkU2tpbGwge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICB9XHJcbiAgICAuc2luZ2xlLWNoYXJ0IHtcclxuICAgICAgICB3aWR0aDogNTUlO1xyXG4gICAgfVxyXG4gICAgLnNraWxsY2FyZHB0YWcge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udHN0eWxlbWFpbjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxOCUgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5za2lsbGxhYmxlc2l6ZXtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgICAuc2tpbGxiYXJwYXJlbnQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogM3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzdWJib2R5O1xyXG4gICAgfVxyXG4gICAgLmh0bWxza2lsbCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgY29sb3I6ICRtYWludGl0bGU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGFuaW1hdGlvbjogbG9hZCAycyAwcztcclxuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAxcyBlYXNlLWluLW91dDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeV9yZWQ7XHJcbiAgICAgICAgaGVpZ2h0OiAzcHg7XHJcbiAgICB9XHJcbiAgICAuc2tpbGxwZXJjZW50YWdlbGFibGUge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IC0yMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIH1cclxuICAgIC5wc2l6ZXtcclxuICAgICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5jb250YWN0bWVidG4ge1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeV9yZWQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udHN0eWxlc2Vjb25kO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5X3JlZDtcclxuICAgICAgICBmb250LWZhbWlseTogJGZvbnRzdHlsZW1haW47XHJcbiAgICAgICAgcGFkZGluZzogNnB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgICAgICY6aG92ZXIsXHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnlfcmVkO1xyXG4gICAgICAgICAgICBjb2xvcjogJHByaW1hcnlfcmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MDBweCkge1xyXG4gICAgLnBzaXple1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnNpbmdsZS1jaGFydCB7XHJcbiAgICAgICAgd2lkdGg6IDU1JTtcclxuICAgIH1cclxuICAgIC5za2lsbGJhcnBhcmVudCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHN1YmJvZHk7XHJcbiAgICB9XHJcbiAgICAuc2tpbGxjYXJkcHRhZyB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250c3R5bGVtYWluO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE4JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnNraWxsbGFibGVzaXple1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICAgIC5za2lsbHBlcmNlbnRhZ2VsYWJsZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogLTIwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgfVxyXG4gICAgLmh0bWxza2lsbCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgY29sb3I6ICRtYWludGl0bGU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGFuaW1hdGlvbjogbG9hZCAycyAwcztcclxuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAxcyBlYXNlLWluLW91dDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeV9yZWQ7XHJcbiAgICAgICAgaGVpZ2h0OiAzcHg7XHJcbiAgICB9XHJcbiAgICAuY29udGFjdG1lYnRuIHtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnlfcmVkO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LWZhbWlseTogJGZvbnRzdHlsZXNlY29uZDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkcHJpbWFyeV9yZWQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250c3R5bGVtYWluO1xyXG4gICAgICAgIHBhZGRpbmc6IDZweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxuICAgICAgICAmOmhvdmVyLFxyXG4gICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICRwcmltYXJ5X3JlZDtcclxuICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5X3JlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillpageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skillpage',
                templateUrl: './skillpage.component.html',
                styleUrls: ['./skillpage.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_toolbar_text_service__WEBPACK_IMPORTED_MODULE_3__["ToolbarTextService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _aboutpage_aboutpage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aboutpage/aboutpage.component */ "0VLA");
/* harmony import */ var _contacmepage_contacmepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contacmepage/contacmepage.component */ "r4Ws");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./homepage/homepage.component */ "Oh3b");
/* harmony import */ var _projectpage_projectpage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projectpage/projectpage.component */ "iZQh");
/* harmony import */ var _single_project_single_project_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./single-project/single-project.component */ "C+I3");
/* harmony import */ var _skillpage_skillpage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./skillpage/skillpage.component */ "sM7m");










const routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'Home', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"], data: { animation: 0 } },
    { path: 'About', component: _aboutpage_aboutpage_component__WEBPACK_IMPORTED_MODULE_2__["AboutpageComponent"], data: { animation: 1 } },
    { path: 'Skill', component: _skillpage_skillpage_component__WEBPACK_IMPORTED_MODULE_7__["SkillpageComponent"], data: { animation: 2 } },
    { path: 'Contact', component: _contacmepage_contacmepage_component__WEBPACK_IMPORTED_MODULE_3__["ContacmepageComponent"], data: { animation: 3 } },
    { path: 'Projects', component: _projectpage_projectpage_component__WEBPACK_IMPORTED_MODULE_5__["ProjectpageComponent"], data: { animation: 4 } },
    { path: 'SingleProject/:ProjectName', component: _single_project_single_project_component__WEBPACK_IMPORTED_MODULE_6__["SingleProjectComponent"], data: { animation: 5 } },
    { path: 'ContactMe', component: _contacmepage_contacmepage_component__WEBPACK_IMPORTED_MODULE_3__["ContacmepageComponent"], data: { animation: 6 } },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { anchorScrolling: 'enabled' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { anchorScrolling: 'enabled' })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "yj5t":
/*!******************************************!*\
  !*** ./src/app/shared/allconst/skill.ts ***!
  \******************************************/
/*! exports provided: Skill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Skill", function() { return Skill; });
const Skill = {
    title: 'Skill',
    subBody: 'The technical skills I have are mentioned here accurately, If you are interested in knowing the projects I have worked on, please click below',
    allCardSkill: [
        {
            skillName: 'React',
            percentage: 70,
            colorCode: '#61DBFB',
            valueIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        },
        {
            skillName: 'Angular',
            percentage: 70,
            colorCode: '#B13138',
            valueIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
        },
        {
            skillName: 'NodeJs',
            percentage: 60,
            colorCode: '#3C873A',
            valueIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        }
    ],
    allSkillBar: [
        {
            skillName: 'Android',
            percentage: 70,
            colorCode: '#a4c639',
        },
        {
            skillName: 'Html/Css',
            percentage: 70,
            colorCode: '#e34c26'
        },
        {
            skillName: 'Java',
            percentage: 60,
            colorCode: '#B80F0A'
        },
        {
            skillName: 'Ionic',
            percentage: 50,
            colorCode: '#108FF6'
        },
        {
            skillName: 'Python + Flask',
            percentage: 50,
            colorCode: '#4B8BBE'
        },
        {
            skillName: 'SQL',
            percentage: 60,
            colorCode: '#047481'
        }
    ]
};


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map