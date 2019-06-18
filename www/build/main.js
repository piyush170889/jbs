webpackJsonp([29],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceListingSettingsPopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the InvoiceListingSettingsPopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InvoiceListingSettingsPopoverPage = /** @class */ (function () {
    function InvoiceListingSettingsPopoverPage(navCtrl, navParams, viewController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewController = viewController;
    }
    InvoiceListingSettingsPopoverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InvoiceListingSettingsPopoverPage');
    };
    InvoiceListingSettingsPopoverPage.prototype.dismissPopOver = function (data) {
        this.viewController.dismiss(data);
    };
    InvoiceListingSettingsPopoverPage.prototype.showLedgerReport = function () {
        console.log('showLedgerReport InvoiceListingSettingsPopoverPage');
        this.dismissPopOver({
            showLedger: true
        });
    };
    InvoiceListingSettingsPopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-invoice-listing-settings-popover',template:/*ion-inline-start:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\invoice-listing-settings-popover\invoice-listing-settings-popover.html"*/'<!--\n  Generated template for the InvoiceListingSettingsPopoverPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content no-padding>\n\n  <ion-list text-center>\n    <button color="bgcolor" ion-item (click)="showLedgerReport()">\n      <p>Ledger Report</p>\n    </button>\n  </ion-list>\n\n  <!-- <div class="pdfDiv" style="display:none">\n    <div text-center>\n      <h4>JAGTAP BUILDING SOLUTIONS</h4>\n      <p>Asthavinayak Soc, Opp Bharat Jyoti Stop,</p>\n      <p>Bibwewadi , Pune - 411037</p>\n      <p>Tel No. : (O) 24216162, 9822610611</p>\n      <p>Phone no. : 02024216162</p>\n      <p>Pin code : 411037</p>\n      <p>GSTIN : 27AFJPJ8271L1ZV</p>\n      <p>E-Mail : jagtapbsolutions@gmail.com</p>\n    </div>\n\n    <div style="margin:5% 0;" text-center>\n      <p>{{customer.customerDetails.cardName}}</p>\n      <p *ngIf="invoicesListing.length > 0">{{invoicesListing[0].invoiceItemsList[0].partyCity}}</p>\n    </div>\n\n    <div text-center>\n      <p>Ledger Report</p>\n      <p>01 Apr 19 - 31 Mar 20</p>\n      <p>Date {{currentDate | date: \'dd MMM yy\'}}</p>\n    </div>\n\n    <div style="margin-top:5%">\n\n      <table style="border:1px solid #000;border-collapse: collapse; width:100%;">\n        <tr>\n          <td style="border:1px solid #000;">\n            Date\n          </td>\n          <td style="border:1px solid #000;">\n            Type\n          </td>\n          <td style="border:1px solid #000;">\n            Invoice No.\n          </td>\n          <td style="border:1px solid #000;">\n            Debit\n          </td>\n          <td style="border:1px solid #000;">\n            Credit\n          </td>\n          <td style="border:1px solid #000;">\n            Balance\n          </td>\n        </tr>\n        <tr>\n          <td style="border:1px solid #000;">\n          </td>\n          <td style="border:1px solid #000;">\n            Opening Balance\n          </td>\n          <td style="border:1px solid #000;">\n          </td>\n          <td style="border:1px solid #000;">\n            572280.9\n          </td>\n          <td style="border:1px solid #000;">\n          </td>\n          <td style="border:1px solid #000;">\n          </td>\n        </tr>\n        <tr *ngFor="let i of [1,2,3]">\n          <td style="border:1px solid #000;">\n            03 Apr 19\n          </td>\n          <td style="border:1px solid #000;">\n            AR IN\n          </td>\n          <td style="border:1px solid #000;">\n            {{i}}\n          </td>\n          <td style="border:1px solid #000;">\n          </td>\n          <td style="border:1px solid #000;">\n            103000\n          </td>\n          <td style="border:1px solid #000;">\n            469260.9Cr\n          </td>\n        </tr>\n\n        <tr>\n          <td style="border:1px solid #000;">\n          </td>\n          <td style="border:1px solid #000;">\n          </td>\n          <td style="border:1px solid #000;">\n          </td>\n          <td style="border:1px solid #000;">\n            572260.9\n          </td>\n          <td style="border:1px solid #000;">\n            239500\n          </td>\n          <td style="border:1px solid #000;">\n          </td>\n        </tr>\n\n        <tr>\n          <td style="border:1px solid #000;">\n          </td>\n          <td style="border:1px solid #000;">\n            Closing Balance\n          </td>\n          <td style="border:1px solid #000;">\n          </td>\n          <td style="border:1px solid #000;">\n            332760.9\n          </td>\n          <td style="border:1px solid #000;">\n          </td>\n          <td style="border:1px solid #000;">\n          </td>\n        </tr>\n\n      </table>\n    </div>\n  </div> -->\n\n</ion-content>'/*ion-inline-end:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\invoice-listing-settings-popover\invoice-listing-settings-popover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */]])
    ], InvoiceListingSettingsPopoverPage);
    return InvoiceListingSettingsPopoverPage;
}());

//# sourceMappingURL=invoice-listing-settings-popover.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_utility_common_utility__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_restservice_restservice__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__authorizaton_settings_authorizaton_settings__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_diagnostic__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_constants_constants__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_database_database__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_location_tracker_location_tracker__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, formBuilder, commonUtility, restService, platform, diagnostic, databaseProvider, locationTracker) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.commonUtility = commonUtility;
        this.restService = restService;
        this.platform = platform;
        this.diagnostic = diagnostic;
        this.databaseProvider = databaseProvider;
        this.locationTracker = locationTracker;
        this.tagId = '';
        this.locationTracker.stopTracking();
        this.commonUtility.clearStorage();
        this.credentials = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    /*doLogin() {
        this.platform.ready().then(() => {
            this.diagnostic.isLocationEnabled().then((available) => {
                if (available) {
                    if (this.commonUtility.isNetworkAvailable()) {
                        this.loader = this.commonUtility.createLoader();
                        this.loader.present().then(
                            () => {
                                let inputUsername = this.credentials.controls['username'].value;
                                let inputPassword = this.credentials.controls['password'].value;

                                console.log("Username From Ctrl - " + inputUsername + ", Password From Ctrl - " + inputPassword);

                                this.restService.doLoginRequest(inputUsername, inputPassword)
                                    .subscribe((response) => {
                                        this.loader.dismiss();
                                        if (response) {
                                            this.navCtrl.setRoot(AuthorizatonSettingsPage);
                                        } else {
                                            console.log('An server error occurred.');
                                        }
                                    }, (err) => {
                                        this.loader.dismiss();
                                        console.log(err)
                                    });

                            });
                    }
                } else {
                    this.diagnostic.switchToLocationSettings();
                }
            });
        });
    }*/
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.diagnostic.isLocationEnabled().then(function (available) {
                if (available) {
                    if (_this.commonUtility.isNetworkAvailable()) {
                        _this.loader = _this.commonUtility.createLoader();
                        _this.loader.present().then(function () {
                            var inputUsername = _this.credentials.controls['username'].value;
                            var inputPassword = _this.credentials.controls['password'].value;
                            console.log("Username From Ctrl - " + inputUsername + ", Password From Ctrl - " + inputPassword);
                            _this.restService.doLoginRequest(inputUsername, inputPassword)
                                .subscribe(function (response) {
                                _this.loader.dismiss();
                                if (response) {
                                    // this.navCtrl.setRoot(AuthorizatonSettingsPage);
                                    var userRolesApiEndpoint = __WEBPACK_IMPORTED_MODULE_7__providers_constants_constants__["a" /* ConstantsProvider */].API_BASE_URL +
                                        __WEBPACK_IMPORTED_MODULE_7__providers_constants_constants__["a" /* ConstantsProvider */].API_ENDPOINT_ROLES;
                                    _this.restService.getDetails(userRolesApiEndpoint)
                                        .subscribe(function (response) {
                                        console.log(JSON.stringify(response));
                                        //Extract REquired Data
                                        var rolesArray = response.response.roles;
                                        var userDetails = response.response.userDetails;
                                        //Set Data in LocalStorage
                                        _this.databaseProvider.setItem('roles', JSON.stringify(rolesArray));
                                        _this.databaseProvider.setItem('isRolesUpdated', '1');
                                        _this.databaseProvider.setItem('userDetails', JSON.stringify(userDetails));
                                        // localStorage.setItem('roles', JSON.stringify(rolesArray));
                                        // localStorage.setItem('isRolesUpdated', '1');
                                        // localStorage.setItem('userDetails', JSON.stringify(userDetails));
                                        _this.syncCustomerData(__WEBPACK_IMPORTED_MODULE_5__authorizaton_settings_authorizaton_settings__["a" /* AuthorizatonSettingsPage */]);
                                    });
                                }
                                else {
                                    console.log('An server error occurred.');
                                }
                            }, function (err) {
                                _this.loader.dismiss();
                                console.log(err);
                            });
                        });
                    }
                }
                else {
                    _this.diagnostic.switchToLocationSettings();
                }
            });
        });
    };
    LoginPage.prototype.syncCustomerData = function (componentToNavigate) {
        var _this = this;
        var customersDetailsApiEndpoint = __WEBPACK_IMPORTED_MODULE_7__providers_constants_constants__["a" /* ConstantsProvider */].API_BASE_URL
            + __WEBPACK_IMPORTED_MODULE_7__providers_constants_constants__["a" /* ConstantsProvider */].API_ENDPOINT_CUST_DTLS + __WEBPACK_IMPORTED_MODULE_7__providers_constants_constants__["a" /* ConstantsProvider */].URL_SEPARATOR
            + __WEBPACK_IMPORTED_MODULE_7__providers_constants_constants__["a" /* ConstantsProvider */].API_ENDPOINT_SYNC;
        this.restService.getDetails(customersDetailsApiEndpoint)
            .subscribe(function (response) {
            console.log('Customers Data = ' + JSON.stringify(response.response));
            var customersDetailsList = response.response;
            _this.databaseProvider.initializeSqlLiteDb().then(function (db) {
                db.executeSql('SELECT data from metadata where configname=?', [__WEBPACK_IMPORTED_MODULE_7__providers_constants_constants__["a" /* ConstantsProvider */].CONFIG_NM_CUST_DATA])
                    .then(function (res) {
                    if (res.rows.length > 0) {
                        _this.updateCustomerDetailsFromApi(customersDetailsList, componentToNavigate);
                    }
                    else {
                        db.executeSql('INSERT INTO metadata(configname, data) VALUES(?,?)', [__WEBPACK_IMPORTED_MODULE_7__providers_constants_constants__["a" /* ConstantsProvider */].CONFIG_NM_CUST_DATA, ''])
                            .then(function (res) {
                            console.log('Inserted Empty Customer Record');
                            _this.updateCustomerDetailsFromApi(customersDetailsList, componentToNavigate);
                        })
                            .catch(function (e) { return console.log(JSON.stringify(e)); });
                    }
                });
            })
                .catch(function (e) {
                console.log(JSON.stringify(e));
            });
        });
    };
    LoginPage.prototype.updateCustomerDetailsFromApi = function (customersDetailsList, componentToNavigate) {
        var _this = this;
        this.databaseProvider.initializeSqlLiteDb().then(function (db) {
            db.executeSql('UPDATE metadata set data=? WHERE configname=?', [JSON.stringify(customersDetailsList),
                __WEBPACK_IMPORTED_MODULE_7__providers_constants_constants__["a" /* ConstantsProvider */].CONFIG_NM_CUST_DATA])
                .then(function (res) {
                console.log('Updated Customer Record');
                db.executeSql('SELECT data from metadata where configname=?', [__WEBPACK_IMPORTED_MODULE_7__providers_constants_constants__["a" /* ConstantsProvider */].CONFIG_NM_LAST_UPDATED_TS])
                    .then(function (res) {
                    if (res.rows.length > 0) {
                        _this.updateLastUpdatedTs(componentToNavigate);
                    }
                    else {
                        db.executeSql('INSERT INTO metadata(configname, data) VALUES(?,?)', [__WEBPACK_IMPORTED_MODULE_7__providers_constants_constants__["a" /* ConstantsProvider */].CONFIG_NM_LAST_UPDATED_TS, ''])
                            .then(function (res) {
                            console.log('Inserted Empty Customer Record');
                            _this.updateLastUpdatedTs(componentToNavigate);
                        })
                            .catch(function (e) { return console.log(JSON.stringify(e)); });
                    }
                });
            })
                .catch(function (e) {
                console.log(JSON.stringify(e));
            });
        })
            .catch(function (e) {
            console.log(JSON.stringify(e));
        });
    };
    LoginPage.prototype.updateLastUpdatedTs = function (componentToNavigate) {
        var _this = this;
        this.databaseProvider.initializeSqlLiteDb().then(function (db) {
            db.executeSql('UPDATE metadata set data=? WHERE configname=?', [new Date().toISOString(),
                __WEBPACK_IMPORTED_MODULE_7__providers_constants_constants__["a" /* ConstantsProvider */].CONFIG_NM_LAST_UPDATED_TS])
                .then(function (res) {
                console.log('Updated Last Updated Ts');
                _this.navCtrl.setRoot(componentToNavigate);
            })
                .catch(function (e) {
                console.log(JSON.stringify(e));
            });
        })
            .catch(function (e) {
            console.log(JSON.stringify(e));
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n\n    <ion-grid>\n\n        <!-- Logo -->\n        <ion-row>\n            <ion-col col-12 padding class="logo">\n                <!-- <h4 text-center><span class="headline">DEMO APP</span></h4> -->\n                <img src="assets/imgs/icon.png" />\n            </ion-col>\n        </ion-row>\n\n        <!-- Login Form -->\n        <form [formGroup]="credentials" style="margin-top:3%;">\n\n            <ion-row>\n                <ion-col col-12 padding>\n                    <ion-item>\n                        <!-- <ion-label floating class="pj-floating-label">Username</ion-label> -->\n                        <button ion-button clear color="primary" style="font-size: 2rem;margin: 0;" type="button"\n                            item-right>\n                            <ion-icon name="ios-person-outline"> </ion-icon>\n                        </button>\n                        <ion-input type="text" text-center placeholder="Username" formControlName="username">\n                        </ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n\n            <ion-row style="margin-bottom:8%;">\n                <ion-col col-12 padding>\n                    <ion-item>\n                        <!-- <ion-label floating class="pj-floating-label">Password</ion-label> -->\n                        <ion-input type="password" text-center placeholder="Password" formControlName="password">\n                        </ion-input>\n                        <button ion-button clear color="primary" style="font-size: 2rem;margin: 0;" type="button"\n                            item-right>\n                            <ion-icon name="ios-lock-outline"> </ion-icon>\n                        </button>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-col col-12 padding>\n                    <!-- <button ion-button class="pj-button" type="button" (click)="doLogin()" [disabled]="!credentials.valid">SIGN IN</button> -->\n                    <button ion-button class="pj-button" type="button" (click)="doLogin()">SIGN IN</button>\n                </ion-col>\n            </ion-row>\n\n        </form>\n\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_utility_common_utility__["a" /* CommonUtilityProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_restservice_restservice__["a" /* RestserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_diagnostic__["a" /* Diagnostic */],
            __WEBPACK_IMPORTED_MODULE_8__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_location_tracker_location_tracker__["a" /* LocationTrackerProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConstantsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
Generated class for the ConstantsProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
var ConstantsProvider = /** @class */ (function () {
    function ConstantsProvider(http) {
        this.http = http;
        console.log('Hello ConstantsProvider Provider');
    }
    ConstantsProvider_1 = ConstantsProvider;
    //Common API Constants
    // LOCAL
    // public static API_BASE_URL: string = "http://127.0.0.1:8080/sapbasemodule/v1/";
    //DEV
    // public static API_BASE_URL: string = "http://116.75.129.27:8089/sapbaseapitest/v1/";
    // public static API_BASE_URL: string = "http://67.211.220.180:8080/sapbaseapi/v1/";
    // STAGING
    // public static API_BASE_URL: string = "http://116.75.129.27:8089/sapbaseapitest/v1/";
    // PRODUCTION
    ConstantsProvider.API_BASE_URL = "http://116.75.129.27:8089/sapbaseapi/v1/";
    //API Endpoints
    ConstantsProvider.API_ENDPOINT_ACTIVATE_DEACTIVATE = "activate-deactivate";
    ConstantsProvider.API_ENDPOINT_USERS = "users";
    ConstantsProvider.API_ENDPOINT_TAGS = "tags";
    ConstantsProvider.URL_SEPARATOR = "/";
    ConstantsProvider.URL_PARAM_PAGE_NO = "pageNo=";
    ConstantsProvider.API_ENDPOINT_OAUTH = "oauth/token";
    ConstantsProvider.URL_PARAM_LIMIT = "&limit=";
    ConstantsProvider.LOCATION_TRACKING_URL = "ext/location";
    //API Endpoints
    ConstantsProvider.API_ENDPOINT_ROLES = ConstantsProvider_1.API_ENDPOINT_USERS
        + ConstantsProvider_1.URL_SEPARATOR + "roles";
    ConstantsProvider.API_ENDPOINT_VERIFY_PSSWD = ConstantsProvider_1.API_ENDPOINT_USERS
        + ConstantsProvider_1.URL_SEPARATOR + "validate-password";
    ConstantsProvider.API_ENDPOINT_ORDERS = "orders";
    ConstantsProvider.API_ENDPOINT_CHANGE_PASS = "change-password";
    ConstantsProvider.API_ENDPOINT_ADMIN_USERS = "admin-users";
    ConstantsProvider.API_ENDPOINT_TRACKING_HISTORY = 'tracking-history?track-date=';
    ConstantsProvider.API_ENDPOINT_USER_CHNG_PWD = "user-change-password";
    ConstantsProvider.API_ENDPOINT_CUST_DTLS = "customers";
    ConstantsProvider.API_ENDPOINT_CUSTOMER_MGMT = 'customers' + '?' + ConstantsProvider_1.URL_PARAM_PAGE_NO;
    ConstantsProvider.API_ENDPOINT_SEND_OTP = "send-otp";
    ConstantsProvider.API_ENDPOINT_VERIFY_OTP = "verify-otp";
    ConstantsProvider.API_ENDPOINT_AGING_REPORT = "aging-report";
    ConstantsProvider.API_ENDPOINT_LEDGER_REPORT = "ledger-report";
    ConstantsProvider.API_ENDPOINT_LEDGER_REPORT_NEW = 'new-ledger-report';
    ConstantsProvider.API_ENDPOINT_ITEM_DTLS = "items";
    ConstantsProvider.API_ENDPOINT_BOOKED_ORDERS = "booked-orders";
    ConstantsProvider.API_ENDPOINT_PENDING_INVOICES = 'pending-invoices';
    ConstantsProvider.API_ENDPOINT_CUST_ALL_INVOICES = "all-invoices";
    ConstantsProvider.API_ENDPOINT_SYNC = "sync";
    //Master Data JSON key names
    ConstantsProvider.MD_UOM = "uom";
    ConstantsProvider.APP_DATE_LOCALE = 'en-US';
    ConstantsProvider.REPORTS_DATE_FORMAT = 'DD MMM YYYY';
    ConstantsProvider.APP_DATETIME_DISPLAY_FORMAT = 'DD MMM YY hh:mm A';
    // DB Constants
    ConstantsProvider.APP_DB_NM = 'jbs_app_db.db';
    ConstantsProvider.APP_DB_LOC = 'default';
    ConstantsProvider.APP_DB_IOS_LOC = 'Library';
    //ROLES Constants
    ConstantsProvider.ROLE_ADMIN = 'ROLE_ADMIN';
    ConstantsProvider.ROLE_USER = 'ROLE_USER';
    ConstantsProvider.ROLE_SALES = 'ROLE_SALES';
    //CONFIG Constants
    ConstantsProvider.SW_VER = '2.4.5';
    ConstantsProvider.BASIC_AUTH_TOKEN = 'c2FwYmFzZW1vZHVsZTpzYXBiYXNlbW9kdWxlLXNlY3JldA==';
    ConstantsProvider.CONFIG_NM_CUST_DATA = 'customer_data';
    ConstantsProvider.CONFIG_NM_LAST_UPDATED_TS = "last_updated_ts";
    ConstantsProvider.CONFIG_DS_IMG_PATH = 'assets/imgs/stamp.jpg';
    ConstantsProvider.CONFIG_NM_REFRESH_TOKEN = 'refresh-token';
    ConstantsProvider.CONFIG_NM_ACCESS_TOKEN = 'token';
    ConstantsProvider = ConstantsProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], ConstantsProvider);
    return ConstantsProvider;
    var ConstantsProvider_1;
}());

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationTrackerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__restservice_restservice__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_constants__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment_timezone__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment_timezone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_background_geolocation__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_network__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__database_database__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var LocationTrackerProvider = /** @class */ (function () {
    function LocationTrackerProvider(zone, geolocation, restService, toastCtrl, backgroundGeolocation, http, network, databaseProvider, events) {
        this.zone = zone;
        this.geolocation = geolocation;
        this.restService = restService;
        this.toastCtrl = toastCtrl;
        this.backgroundGeolocation = backgroundGeolocation;
        this.http = http;
        this.network = network;
        this.databaseProvider = databaseProvider;
        this.events = events;
        this.lat = 0;
        this.lng = 0;
        this.momentjs = __WEBPACK_IMPORTED_MODULE_7_moment_timezone__;
        this.minFrequency = 60 * 1000;
        this.lastUpdateTime = new Date();
    }
    LocationTrackerProvider.prototype.startTracking = function () {
        var _this = this;
        this.backgroundGeolocation.configure({
            locationProvider: __WEBPACK_IMPORTED_MODULE_8__ionic_native_background_geolocation__["c" /* BackgroundGeolocationLocationProvider */].ACTIVITY_PROVIDER,
            desiredAccuracy: 100,
            stationaryRadius: 10,
            debug: false,
            distanceFilter: 10,
            stopOnTerminate: false,
            interval: 1000,
            fastestInterval: 1000,
            activitiesInterval: 1000,
            // notificationsEnabled: false,
            notificationTitle: 'JBS',
            notificationText: ''
        });
        this.backgroundGeolocation.on(__WEBPACK_IMPORTED_MODULE_8__ionic_native_background_geolocation__["b" /* BackgroundGeolocationEvents */].location)
            .subscribe(function (response) {
            console.log('Current Location Response = ' + JSON.stringify(response));
            _this.updateLocationToServerForeground(response.latitude, response.longitude);
        });
        this.backgroundGeolocation.on(__WEBPACK_IMPORTED_MODULE_8__ionic_native_background_geolocation__["b" /* BackgroundGeolocationEvents */].stationary)
            .subscribe(function (response) {
            console.log('Stationary Response = ' + JSON.stringify(response));
            _this.updateLocationToServerBackground(response.latitude, response.longitude);
        });
        this.backgroundGeolocation.on(__WEBPACK_IMPORTED_MODULE_8__ionic_native_background_geolocation__["b" /* BackgroundGeolocationEvents */].error)
            .subscribe(function (response) {
            console.log('Error Response = ' + JSON.stringify(response));
        });
        this.backgroundGeolocation.on(__WEBPACK_IMPORTED_MODULE_8__ionic_native_background_geolocation__["b" /* BackgroundGeolocationEvents */].background)
            .subscribe(function (response) {
            console.log('[INFO] App is in background');
            // you can also reconfigure service (changes will be applied immediately)
            // this.backgroundGeolocation.configure({ debug: true });
        });
        this.backgroundGeolocation.on(__WEBPACK_IMPORTED_MODULE_8__ionic_native_background_geolocation__["b" /* BackgroundGeolocationEvents */].foreground)
            .subscribe(function (response) {
            console.log('Foreground Response = ' + JSON.stringify(response));
            console.log('[INFO] App is in foreground');
            _this.backgroundGeolocation.configure({ debug: false });
        });
        this.backgroundGeolocation.on(__WEBPACK_IMPORTED_MODULE_8__ionic_native_background_geolocation__["b" /* BackgroundGeolocationEvents */].start)
            .subscribe(function (response) {
            console.log('Start Response = ' + JSON.stringify(response));
            console.log('[INFO] BackgroundGeolocation service has been started');
        });
        this.backgroundGeolocation.on(__WEBPACK_IMPORTED_MODULE_8__ionic_native_background_geolocation__["b" /* BackgroundGeolocationEvents */].stop)
            .subscribe(function (response) {
            console.log('[INFO] BackgroundGeolocation service has been stopped');
            console.log('Stop Response = ' + JSON.stringify(response));
        });
        this.backgroundGeolocation.checkStatus().then(function (serviceStatus) {
            console.log('[INFO] BackgroundGeolocation service is running', serviceStatus.isRunning);
            console.log('[INFO] BackgroundGeolocation services enabled', serviceStatus.locationServicesEnabled);
            console.log('[INFO] BackgroundGeolocation auth status: ' + serviceStatus.authorization);
            // you don't need to check status before start (this is just the example)
            if (!serviceStatus.isRunning) {
                _this.backgroundGeolocation.start(); //triggers start on start event
            }
        });
        //Background Geolocation Configs
        this.backgroundGeolocation.getConfig().then(function (config) {
            console.log('Background Geolocation Configs = ' + JSON.stringify(config));
        });
        // Background tracking
        var options = {
            enableHighAccuracy: false,
            timeout: 10000
        };
        this.watch = this.geolocation.watchPosition(options).filter(function (p) { return p.code === undefined; })
            .subscribe(function (position) {
            var now = new Date();
            console.log('Watch Position Calling run on zone');
            console.log('this.lastUpdateTime = ' + _this.momentjs(_this.lastUpdateTime).format('HHmmss')
                + ', Now = ' + _this.momentjs(now).format('HHmmss'));
            if (_this.lastUpdateTime && (now.getTime() - _this.lastUpdateTime.getTime() > _this.minFrequency)) {
                _this.lastUpdateTime = now;
                _this.zone.run(function () {
                    _this.updateLocationToServerForeground(position.coords.latitude, position.coords.longitude);
                });
            }
        });
    };
    LocationTrackerProvider.prototype.updateLocationToServerForeground = function (latitude, longitude) {
        console.log('Sending Location In Foreground');
        this.updateLocation(latitude, longitude);
    };
    LocationTrackerProvider.prototype.updateLocationToServerBackground = function (latitude, longitude) {
        console.log('Sending Location In Background');
        this.updateLocation(latitude, longitude);
    };
    LocationTrackerProvider.prototype.updateLocation = function (latitude, longitude) {
        var _this = this;
        this.databaseProvider.getItem('userDetails')
            .then(function (res) {
            if (res.rows.length > 0) {
                var rowData = res.rows.item(0).data;
                var userDetails = null != rowData ? JSON.parse(rowData) : null;
                if (userDetails) {
                    console.log('Logged In Username = ' + userDetails.username);
                    _this.lat = latitude;
                    _this.lng = longitude;
                    var body = {
                        imei: userDetails.username,
                        latitude: _this.lat,
                        longitude: _this.lng,
                        utcDt: _this.momentjs(new Date()).format('DDMMYY'),
                        utcTm: _this.momentjs(new Date()).format('HHmmss'),
                    };
                    _this.putLocationDetails(__WEBPACK_IMPORTED_MODULE_5__constants_constants__["a" /* ConstantsProvider */].API_BASE_URL
                        + __WEBPACK_IMPORTED_MODULE_5__constants_constants__["a" /* ConstantsProvider */].LOCATION_TRACKING_URL, body).subscribe(function (response) {
                        console.log('After Location send to server Foreground : ', response);
                    });
                }
                else {
                    console.log('Publishing unauthorized:requestError event');
                    _this.events.publish("unauthorized:requestError");
                }
            }
            else {
                console.log('Publishing unauthorized:requestError event');
                _this.events.publish("unauthorized:requestError");
            }
        });
    };
    LocationTrackerProvider.prototype.stopTracking = function () {
        console.log('Logging Background = ' + JSON.stringify(typeof this.backgroundGeolocation));
        try {
            this.backgroundGeolocation.stop(); //triggers start on start event
            this.watch.unsubscribe();
        }
        catch (e) {
            console.log('e = ' + JSON.stringify(e));
        }
    };
    LocationTrackerProvider.prototype.putLocationDetails = function (url, data) {
        console.log('Put URL -> ' + url);
        console.log('Put Data -> ' + JSON.stringify(data));
        if (this.network.type != "unknown" && this.network.type != "none" && this.network.type != undefined) {
            return this.http.put(url, data)
                .map(function (response) {
                return response;
            })
                .catch(function (err) {
                console.log("Error - " + JSON.stringify(err));
                return __WEBPACK_IMPORTED_MODULE_11_rxjs__["Observable"].throw(err);
            });
        }
    };
    LocationTrackerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4__restservice_restservice__["a" /* RestserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */],
            __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_12__database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["d" /* Events */]])
    ], LocationTrackerProvider);
    return LocationTrackerProvider;
}());

//# sourceMappingURL=location-tracker.js.map

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonUtilityProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_constants__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_opener__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment_timezone__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment_timezone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__database_database__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var CommonUtilityProvider = /** @class */ (function () {
    function CommonUtilityProvider(toastCtrl, alertCtrl, events, loadingCtrl, network, callNumberNative, databaseProvider, fileOpener, platform) {
        var _this = this;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.network = network;
        this.callNumberNative = callNumberNative;
        this.databaseProvider = databaseProvider;
        this.fileOpener = fileOpener;
        this.platform = platform;
        this.momentjs = __WEBPACK_IMPORTED_MODULE_8_moment_timezone__;
        this.isNetworkAvailableFlag = true;
        this.imgPath = '';
        this.isAsynchTaskCompleted = false;
        console.log('Hello CommonUtilityProvider Provider');
        this.platform.ready().then(function () {
            _this.imgPath = cordova.file.applicationDirectory + 'www/' + __WEBPACK_IMPORTED_MODULE_4__constants_constants__["a" /* ConstantsProvider */].CONFIG_DS_IMG_PATH;
        });
    }
    // isNetworkAvailable() {
    //     if (!this.isNetworkAvailableFlag) {
    //         let alert = this.alertCtrl.create({
    //             subTitle: 'No Internet Connection',
    //             enableBackdropDismiss: false,
    //             buttons: [
    //                 {
    //                     text: 'OK',
    //                     handler: () => {
    //                         this.isNetworkAvailable();
    //                     }
    //                 }
    //             ]
    //         });
    //         alert.present();
    //     }
    //     return this.isNetworkAvailableFlag;
    // }
    CommonUtilityProvider.prototype.isNetworkAvailable = function () {
        var _this = this;
        if (this.network.type == "unknown" || this.network.type == "none" || this.network.type == undefined) {
            var alert_1 = this.alertCtrl.create({
                subTitle: 'No Internet Connection',
                enableBackdropDismiss: false,
                buttons: [
                    {
                        text: 'OK',
                        handler: function () {
                            _this.isNetworkAvailable();
                        }
                    }
                ]
            });
            alert_1.present();
            return false;
        }
        else {
            return true;
        }
    };
    CommonUtilityProvider.prototype.callNumber = function (numberToCall, bypassAppChooser) {
        // this.callNumberNative.isCallSupported()
        //     .then(function (response) {
        //         if (response == true) {
        //             this.callNumberNative.callNumber(numberToCall, bypassAppChooser);
        //         }
        //         else {
        //             this.presentErrorToast('No Calling Service Available');
        //         }
        //     });
        this.callNumberNative.callNumber(numberToCall, bypassAppChooser);
    };
    CommonUtilityProvider.prototype.hasRoleInArray = function (rolesArray, role) {
        // console.log('rolesArray = ' + JSON.stringify(rolesArray));
        var isRolePresent = false;
        if (null != rolesArray && rolesArray.length != 0) {
            var rolesArrayLength = rolesArray.length;
            for (var j = 0; j < rolesArrayLength; j++) {
                if (role == rolesArray[j]) {
                    isRolePresent = true;
                }
            }
        }
        return isRolePresent;
    };
    CommonUtilityProvider.prototype.createLoader = function (message) {
        if (message === void 0) { message = "Please wait..."; }
        return this.loadingCtrl.create({
            content: message
        });
    };
    CommonUtilityProvider.prototype.presentToast = function (messageContent, messageDuration) {
        var toast = this.toastCtrl.create({
            message: messageContent,
            duration: messageDuration
        });
        toast.present();
    };
    CommonUtilityProvider.prototype.presentErrorToast = function (error) {
        var toast = this.toastCtrl.create({
            message: error,
            duration: 5000
        });
        toast.present();
    };
    CommonUtilityProvider.prototype.createBasicAuthHeaderOptions = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpHeaders */]({
            "Authorization": "Basic " + __WEBPACK_IMPORTED_MODULE_4__constants_constants__["a" /* ConstantsProvider */].BASIC_AUTH_TOKEN
        });
        console.log("Login Header Options - " + JSON.stringify(headers.get("Authorization")));
        return headers;
    };
    CommonUtilityProvider.prototype.clearStorage = function () {
        localStorage.clear();
        // this.databaseProvider.clearDatabase();
    };
    CommonUtilityProvider.prototype.setTokenInStorage = function (data) {
        console.log('Access Token = ' + data.access_token);
        console.log('Refresh Token = ' + data.refresh_token);
        localStorage.setItem('token', data.access_token);
        localStorage.setItem('refresh-token', data.refresh_token);
        localStorage.setItem('isLoggedIn', '1');
    };
    CommonUtilityProvider.prototype.hasRole = function () {
        var _this = this;
        var rolesToCheck = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rolesToCheck[_i] = arguments[_i];
        }
        console.log('rolesToCheck = ' + rolesToCheck);
        // let rolesArray = JSON.parse(localStorage.getItem('roles'));
        var isRolePresent = false;
        this.isAsynchTaskCompleted = false;
        // this.databaseProvider.getItem('roles')
        this.getRolesFromDb()
            .then(function (res) {
            console.log('Roles Fetch Res = ' + JSON.stringify(res));
            var rolesArray = null;
            if (res.rows.length > 0) {
                var rowData = res.rows.item(0).data;
                rolesArray = JSON.parse(rowData);
                console.log('rolesArray = ' + JSON.stringify(rolesArray));
            }
            if (null != rolesArray && rolesArray.length != 0) {
                var rolesToCheckLength = rolesToCheck.length;
                var rolesArrayLength = rolesArray.length;
                for (var i = 0; i < rolesToCheckLength; i++) {
                    var roleInCheck = rolesToCheck[i];
                    console.log('roleInCheck = ' + roleInCheck);
                    for (var j = 0; j < rolesArrayLength; j++) {
                        if (roleInCheck == rolesArray[j]) {
                            isRolePresent = true;
                        }
                    }
                }
            }
            else {
                _this.events.publish("unauthorized:requestError");
            }
            _this.isAsynchTaskCompleted = true;
            // return isRolePresent;
        }, function (err) {
            console.log(JSON.stringify(err));
            _this.isAsynchTaskCompleted = true;
            // return isRolePresent;
        });
        console.log('Returning Now');
        return isRolePresent;
    };
    CommonUtilityProvider.prototype.getDocDefination = function (reportyType, datePeriod, custCity, custName, body) {
        var description = {
            content: [
                { text: 'JAGTAP BUILDING SOLUTIONS', style: 'header' },
                { text: 'Asthavinayak Soc, Opp Bharat Jyoti Stop', alignment: 'center' },
                { text: 'Bibwewadi , Pune - 411037', alignment: 'center' },
                { text: 'Tel No. : (O) 24216162, 9822610611', alignment: 'center' },
                { text: 'Phone no. : 02024216162', alignment: 'center' },
                { text: 'Pin code : 411037', alignment: 'center' },
                { text: 'GSTIN : 27AFJPJ8271L1ZV', alignment: 'center' },
                { text: 'E-Mail : jagtapbsolutions@gmail.com', alignment: 'center' },
                { text: custName, style: 'subheader' },
                // { text: custCity },
                { text: reportyType, style: 'subheader' },
                { text: '' },
                { text: datePeriod, style: 'story' },
                { text: 'Report Date: ' + new __WEBPACK_IMPORTED_MODULE_5__angular_common__["d" /* DatePipe */]('en-US').transform(new Date().toISOString(), 'dd MMM yy'), style: 'story' },
                { text: '' },
                {
                    table: {
                        widths: '*',
                        body: body
                    }
                }
            ],
            styles: {
                header: {
                    fontSize: 18,
                    bold: true,
                    alignment: 'center'
                },
                cardname: {
                    margin: [5, 0, 5, 0]
                },
                subheader: {
                    fontSize: 14,
                    bold: true,
                    margin: [0, 15, 0, 0],
                    alignment: 'center'
                },
                story: {
                    italic: true,
                    alignment: 'center',
                    width: '50%',
                }
            }
        };
        return description;
        // const ROOT_DIRECTORY = this.file.dataDirectory;
        // const downloadFolderName = 'tempJBSDownload';
        // const imageName = 'stamp.jpg';
        // //Create a folder in memory location
        // this.file.createDir(ROOT_DIRECTORY, downloadFolderName, true)
        //     .then((entries) => {
        //         //Copy our asset/img/FreakyJolly.jpg to folder we created
        //         this.file.copyFile(this.file.applicationDirectory + "www/assets/imgs/", imageName,
        //             ROOT_DIRECTORY + downloadFolderName + '//', imageName)
        //             .then((entries) => {
        //                 this.imgPath = ROOT_DIRECTORY + downloadFolderName + "/" + imageName;
        //                 let description = {
        //                     content: [
        //                         { text: 'JAGTAP BUILDING SOLUTIONS', style: 'header' },
        //                         { text: 'Asthavinayak Soc, Opp Bharat Jyoti Stop', alignment: 'center' },
        //                         { text: 'Bibwewadi , Pune - 411037', alignment: 'center' },
        //                         { text: 'Tel No. : (O) 24216162, 9822610611', alignment: 'center' },
        //                         { text: 'Phone no. : 02024216162', alignment: 'center' },
        //                         { text: 'Pin code : 411037', alignment: 'center' },
        //                         { text: 'GSTIN : 27AFJPJ8271L1ZV', alignment: 'center' },
        //                         { text: 'E-Mail : jagtapbsolutions@gmail.com', alignment: 'center' },
        //                         { text: custName, style: 'subheader' },
        //                         // { text: custCity },
        //                         { text: reportyType, style: 'subheader' },
        //                         { text: '' },
        //                         { text: datePeriod, style: 'story' },
        //                         { text: 'Report Date: ' + new DatePipe('en-US').transform(new Date().toISOString(), 'dd MMM yy'), style: 'story' },
        //                         { text: '' },
        //                         {
        //                             table: {
        //                                 widths: '*',
        //                                 body: body
        //                             }
        //                         },
        //                         { image: this.imgPath, alignment: 'right' }
        //                     ],
        //                     styles: {
        //                         header: {
        //                             fontSize: 18,
        //                             bold: true,
        //                             alignment: 'center'
        //                         },
        //                         cardname: {
        //                             margin: [5, 0, 5, 0]
        //                         },
        //                         subheader: {
        //                             fontSize: 14,
        //                             bold: true,
        //                             margin: [0, 15, 0, 0],
        //                             alignment: 'center'
        //                         },
        //                         story: {
        //                             italic: true,
        //                             alignment: 'center',
        //                             width: '50%',
        //                         }
        //                     }
        //                 }
        //                 return description;
        //             })
        //             .catch((error) => {
        //                 alert('error ' + JSON.stringify(error));
        //             });
        //     })
        //     .catch((error) => {
        //         alert('error ' + JSON.stringify(error));
        //     });
    };
    CommonUtilityProvider.prototype.getDocDefinationPendingInvoices = function (reportyType, datePeriod, custCity, custName, body, totalPendingAmount) {
        var description = {
            content: [
                { text: 'Hello,' },
                {
                    text: 'This is a reminder that your account balance of ' + totalPendingAmount + ' was overdue as of ' + datePeriod + '.'
                        + ' Please find the Receivable for your reference. If you have any queries regarding this account, please contact ' +
                        'our office as soon as possible.'
                },
                { text: custName, style: 'subheader' },
                { text: custCity },
                { text: reportyType, style: 'subheader' },
                { text: datePeriod, style: 'story' },
                { text: 'Report Date: ' + new __WEBPACK_IMPORTED_MODULE_5__angular_common__["d" /* DatePipe */]('en-US').transform(new Date().toISOString(), 'dd MMM yy'), style: 'story' },
                {
                    table: {
                        body: body
                    }
                },
                { text: 'Regards,', style: 'greetings' },
                { text: 'JAGTAP BUILDING SOLUTIONS', style: 'header' },
                { text: 'Asthavinayak Soc, Opp Bharat Jyoti Stop' },
                { text: 'Bibwewadi , Pune - 411037' },
                { text: 'Tel No. : (O) 24216162, 9822610611' },
                { text: 'Phone no. : 02024216162' },
                { text: 'Pin code : 411037' },
                { text: 'GSTIN : 27AFJPJ8271L1ZV' },
                { text: 'E-Mail : jagtapbsolutions@gmail.com' },
            ],
            styles: {
                header: {
                    fontSize: 18,
                    bold: true,
                },
                cardname: {
                    margin: [5, 0, 5, 0]
                },
                subheader: {
                    fontSize: 14,
                    bold: true,
                    margin: [0, 15, 0, 0],
                    alignment: 'center'
                },
                greetings: {
                    fontSize: 14,
                    bold: true,
                    margin: [0, 15, 0, 15]
                },
                story: {
                    italic: true,
                    alignment: 'center',
                    width: '50%',
                }
            }
        };
        return description;
    };
    CommonUtilityProvider.prototype.getCurrentDate = function (format) {
        console.log('format = ' + format);
        var transformedDate = new __WEBPACK_IMPORTED_MODULE_5__angular_common__["d" /* DatePipe */]('en-US').transform(new Date().toISOString(), format);
        console.log('transformedDate = ' + transformedDate);
        return transformedDate;
    };
    CommonUtilityProvider.prototype.calculateDiffInDays = function (startDate, endDate) {
        //Get 1 day in milliseconds
        var one_day = 1000 * 60 * 60 * 24;
        // Convert both dates to milliseconds
        var date1_ms = startDate.getTime();
        var date2_ms = endDate.getTime();
        // Calculate the difference in milliseconds
        var difference_ms = date2_ms - date1_ms;
        // Convert back to days and return
        var diff = Math.round(difference_ms / one_day);
        console.log('diff = ' + diff);
        return diff;
    };
    CommonUtilityProvider.prototype.calculateDiffInMins = function (startDate, endDate) {
        //Get 1 day in milliseconds
        var one_day = 1000 * 60;
        // Convert both dates to milliseconds
        var date1_ms = startDate.getTime();
        var date2_ms = endDate.getTime();
        // Calculate the difference in milliseconds
        var difference_ms = date2_ms - date1_ms;
        // Convert back to days and return
        var diff = Math.round(difference_ms / one_day);
        console.log('diff In Mins = ' + diff);
        return diff;
    };
    CommonUtilityProvider.prototype.getRolesFromDb = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Rnning');
                        return [4 /*yield*/, this.databaseProvider.initializeSqlLiteDb().then(function (db) {
                                return db.executeSql('SELECT data FROM metadata WHERE configname=?', ['roles']);
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CommonUtilityProvider.prototype.formatDate = function (dateToFormat, format) {
        return this.momentjs(dateToFormat).format(format);
    };
    CommonUtilityProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_9__database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_opener__["a" /* FileOpener */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */]])
    ], CommonUtilityProvider);
    return CommonUtilityProvider;
}());

//# sourceMappingURL=common-utility.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminUsersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__custom_base_component__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_utility_common_utility__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_constants_constants__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modal_au_admin_users_modal_au_admin_users__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_restservice_restservice__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tracking_tracking__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common___ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tracking_history_tracking_history__ = __webpack_require__(228);
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the AdminUsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminUsersPage = /** @class */ (function (_super) {
    __extends(AdminUsersPage, _super);
    function AdminUsersPage(navCtrl, navParams, commonUtility, http, modal, restService, alertCtrl) {
        var _this = _super.call(this, __WEBPACK_IMPORTED_MODULE_5__providers_constants_constants__["a" /* ConstantsProvider */].API_ENDPOINT_USERS + __WEBPACK_IMPORTED_MODULE_5__providers_constants_constants__["a" /* ConstantsProvider */].URL_SEPARATOR
            + __WEBPACK_IMPORTED_MODULE_5__providers_constants_constants__["a" /* ConstantsProvider */].API_ENDPOINT_ADMIN_USERS, commonUtility, http, null) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.commonUtility = commonUtility;
        _this.http = http;
        _this.modal = modal;
        _this.restService = restService;
        _this.alertCtrl = alertCtrl;
        _this.adminUsersList = [];
        _this.originalAdminUsersList = [];
        _this.myInput = '';
        _this.isUsersLoaded = false;
        _this.verifyPasswordUrl = __WEBPACK_IMPORTED_MODULE_5__providers_constants_constants__["a" /* ConstantsProvider */].API_BASE_URL
            + __WEBPACK_IMPORTED_MODULE_5__providers_constants_constants__["a" /* ConstantsProvider */].API_ENDPOINT_VERIFY_PSSWD;
        _this.getAllPaginated(1)
            .subscribe(function (response) {
            _this.adminUsersList = response.usersList;
            _this.originalAdminUsersList = _this.adminUsersList;
            console.log('Admin Users = ' + JSON.stringify(_this.adminUsersList));
            _this.isUsersLoaded = true;
        });
        return _this;
    }
    AdminUsersPage_1 = AdminUsersPage;
    AdminUsersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminUsersPage');
    };
    AdminUsersPage.prototype.isAdmin = function (adminUsers) {
        var roleArray = adminUsers.roles;
        var rolesToPass = [];
        roleArray.forEach(function (roleElem) {
            rolesToPass.push(roleElem.rolesMasterDtlsId);
        });
        if (this.commonUtility.hasRoleInArray(rolesToPass, __WEBPACK_IMPORTED_MODULE_5__providers_constants_constants__["a" /* ConstantsProvider */].ROLE_ADMIN))
            return true;
        else
            return false;
    };
    AdminUsersPage.prototype.isSales = function (adminUsers) {
        var roleArray = adminUsers.roles;
        var rolesToPass = [];
        roleArray.forEach(function (roleElem) {
            rolesToPass.push(roleElem.rolesMasterDtlsId);
        });
        if (this.commonUtility.hasRoleInArray(rolesToPass, __WEBPACK_IMPORTED_MODULE_5__providers_constants_constants__["a" /* ConstantsProvider */].ROLE_SALES))
            return true;
        else
            return false;
    };
    AdminUsersPage.prototype.udpateAdminUser = function (adminUsers) {
        console.log('udpateAdminUser called');
        var roleArray = adminUsers.roles;
        var rolesToPass;
        roleArray.forEach(function (roleElem) {
            if (roleElem.rolesMasterDtlsId != __WEBPACK_IMPORTED_MODULE_5__providers_constants_constants__["a" /* ConstantsProvider */].ROLE_USER)
                rolesToPass = roleElem.rolesMasterDtlsId;
        });
        var adminUserDetails = {
            userLoginDtlsId: adminUsers.userLoginDtlsId,
            userDtlsId: adminUsers.userDtl.userDtlsId,
            contactNum: adminUsers.contactNum,
            firstName: adminUsers.userDtl.firstName,
            lastName: adminUsers.userDtl.lastName,
            password: adminUsers.password,
            rolesMasterDtlsId: rolesToPass,
            emailId: ''
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__modal_au_admin_users_modal_au_admin_users__["a" /* ModalAuAdminUsersPage */], {
            adminUserDetails: adminUserDetails,
            isAddOperation: false
        });
    };
    AdminUsersPage.prototype.changeAdminUserPassword = function (adminUsers) {
        var _this = this;
        console.log('changeAdminUserPassword called');
        var confirm = this.alertCtrl.create({
            title: 'Reset password',
            message: 'Enter New Password For This User',
            inputs: [
                {
                    name: 'password',
                    placeholder: 'Password',
                    type: 'password'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Proceed',
                    handler: function (data) {
                        console.log('Proceed clicked. Password Entered: '
                            + data.password);
                        var resetPasswordUrl = __WEBPACK_IMPORTED_MODULE_5__providers_constants_constants__["a" /* ConstantsProvider */].API_BASE_URL + __WEBPACK_IMPORTED_MODULE_5__providers_constants_constants__["a" /* ConstantsProvider */].API_ENDPOINT_USERS
                            + __WEBPACK_IMPORTED_MODULE_5__providers_constants_constants__["a" /* ConstantsProvider */].URL_SEPARATOR + __WEBPACK_IMPORTED_MODULE_5__providers_constants_constants__["a" /* ConstantsProvider */].API_ENDPOINT_USER_CHNG_PWD;
                        var resetPasswordData = {
                            userLoginDtlsId: adminUsers.userLoginDtlsId,
                            password: data.password
                        };
                        // this.getAllSubResource(this.tagDtls.tagDtlsId)
                        _this.restService.postDetails(resetPasswordUrl, resetPasswordData)
                            .subscribe(function () {
                            _this.commonUtility.presentToast('Password Reset Successfully', 5000);
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    AdminUsersPage.prototype.addAdminUser = function () {
        // this.createAdminUserModal(true, null);
        var adminUserModalData = null;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__modal_au_admin_users_modal_au_admin_users__["a" /* ModalAuAdminUsersPage */], {
            adminUserDetails: adminUserModalData,
            isAddOperation: true
        });
    };
    AdminUsersPage.prototype.updateAdminUser = function (adminUser) {
        // this.createAdminUserModal(false, adminUser);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__modal_au_admin_users_modal_au_admin_users__["a" /* ModalAuAdminUsersPage */], {
            adminUserDetails: adminUser,
            isAddOperation: false
        });
    };
    AdminUsersPage.prototype.createAdminUserModal = function (isAddOperation, adminUserDetails) {
        var _this = this;
        var adminUserModalData = null;
        if (adminUserDetails != null) {
            var roleToPassModal = void 0;
            if (this.isSales(adminUserDetails))
                roleToPassModal = __WEBPACK_IMPORTED_MODULE_5__providers_constants_constants__["a" /* ConstantsProvider */].ROLE_SALES;
            else if (this.isAdmin(adminUserDetails))
                roleToPassModal = __WEBPACK_IMPORTED_MODULE_5__providers_constants_constants__["a" /* ConstantsProvider */].ROLE_ADMIN;
            adminUserModalData = {
                userLoginDtlsId: adminUserDetails.userLoginDtlsId,
                userDtlsId: adminUserDetails.userDtl.userDtlsId,
                contactNum: adminUserDetails.contactNum,
                firstName: adminUserDetails.userDtl.firstName,
                lastName: adminUserDetails.userDtl.lastName,
                rolesMasterDtlsId: roleToPassModal
            };
        }
        var adminDetailsModal = this.modal.create(__WEBPACK_IMPORTED_MODULE_6__modal_au_admin_users_modal_au_admin_users__["a" /* ModalAuAdminUsersPage */], {
            adminUserDetails: adminUserModalData,
            isAddOperation: isAddOperation
        });
        adminDetailsModal.present();
        adminDetailsModal.onDidDismiss(function (adminUserDetailsModalData) {
            console.log('Data = ' + JSON.stringify(adminUserDetailsModalData));
            if (adminUserDetailsModalData.isAdded) {
                // this.initializeAdminDetails();
                var adminUserDetailsFromModal = adminUserDetailsModalData.adminUserDetails;
                var rolesToSubmit = [];
                rolesToSubmit.push(__WEBPACK_IMPORTED_MODULE_5__providers_constants_constants__["a" /* ConstantsProvider */].ROLE_USER);
                rolesToSubmit.push(adminUserDetailsFromModal.rolesMasterDtlsId);
                var dataForCreate = {
                    userLoginDtlsId: adminUserDetailsFromModal.userLoginDtlsId,
                    userDtlsId: adminUserDetailsFromModal.userDtlsId,
                    contactNum: adminUserDetailsFromModal.contactNum,
                    firstName: adminUserDetailsFromModal.firstName,
                    lastName: adminUserDetailsFromModal.lastName,
                    rolesMasterDtlsId: rolesToSubmit
                };
                if (isAddOperation) {
                    _this.create(dataForCreate)
                        .subscribe(function () {
                        _this.navCtrl.pop();
                        _this.navCtrl.push(AdminUsersPage_1);
                    });
                }
                else {
                    _this.update(dataForCreate)
                        .subscribe(function () {
                        _this.navCtrl.pop();
                        _this.navCtrl.push(AdminUsersPage_1);
                    });
                }
            }
        });
    };
    AdminUsersPage.prototype.onInput = function () {
        console.log('searchTerm = ' + this.myInput);
        var searchVal = this.myInput;
        // if the value is an empty string don't filter the items
        if (searchVal && searchVal.trim() != '') {
            this.adminUsersList = this.originalAdminUsersList.filter(function (userDetails) {
                var searchValLowerCase = searchVal.toLowerCase();
                if (userDetails.userDtl.firstName.toLowerCase().indexOf(searchValLowerCase) > -1
                    || (userDetails.userDtl.lastName != null && userDetails.userDtl.lastName.toLowerCase().indexOf(searchValLowerCase) > -1))
                    return true;
                else
                    return false;
            });
            console.log('User List Length = ' + this.adminUsersList.length);
        }
        else {
            this.adminUsersList = this.originalAdminUsersList;
        }
    };
    AdminUsersPage.prototype.navigateToTrackingView = function (adminUser) {
        console.log('Admin User' + JSON.stringify(adminUser));
        if (this.commonUtility.isNetworkAvailable()) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__tracking_tracking__["a" /* TrackingPage */], {
                firebaseId: adminUser.firebaseId,
                // firebaseId: '-LO25JjhKHcpEHRpK448',
                adminUser: adminUser
            });
        }
    };
    AdminUsersPage.prototype.showFirebaseIdNotPresentAlert = function () {
        this.commonUtility.presentToast('No Tracking Data Associated With This User.', 3000);
    };
    AdminUsersPage.prototype.showTodaysTrackingRecord = function (adminUser) {
        var pipe = new __WEBPACK_IMPORTED_MODULE_9__angular_common___["d" /* DatePipe */]('en-US'); // Use your own locale
        var now = Date.now();
        var myFormattedDate = pipe.transform(now, 'yyyy-MM-dd');
        console.log('myFormattedDate = ' + myFormattedDate);
        if (this.commonUtility.isNetworkAvailable()) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__tracking_history_tracking_history__["a" /* TrackingHistoryPage */], {
                adminUser: adminUser,
                trackDate: myFormattedDate
            });
        }
    };
    AdminUsersPage = AdminUsersPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin-users',template:/*ion-inline-start:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\admin-users\admin-users.html"*/'<!--\n  Generated template for the AdminUsersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="navbar" text-center>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      App Users\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-searchbar *ngIf="adminUsersList.length > 0 || isUsersLoaded" [(ngModel)]="myInput" (ionChange)="onInput()"\n    placeholder="Search By Name">\n  </ion-searchbar>\n\n  <div *ngIf="adminUsersList.length==0 && isUsersLoaded" class="pj-empty-page" style="margin-top: 40%;">\n    <ion-icon name="ios-contact-outline"></ion-icon>\n    <h4>No Users To Show</h4>\n\n    <ion-row>\n      <ion-col col-12>\n        <button ion-button class="pj-button" type="button" (click)="addAdminUser()">ADD ONE ?</button>\n      </ion-col>\n    </ion-row>\n\n  </div>\n\n  <ion-card *ngFor="let adminUsers of adminUsersList">\n\n    <ion-card-header>\n      <ion-row>\n        <ion-col col-12>\n          <strong>{{adminUsers.userDtl.firstName}} {{adminUsers.userDtl.lastName}}</strong>\n        </ion-col>\n      </ion-row>\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-row>\n        <ion-col col-5>\n          UserName\n        </ion-col>\n        <ion-col col-7>\n          {{adminUsers.contactNum}}\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="isSales(adminUsers)">\n        <ion-col col-5>\n          Role\n        </ion-col>\n        <ion-col col-7>\n          Sales Executive\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row *ngIf="isAdmin(adminUsers)">\n        <ion-col col-5>\n          Role\n        </ion-col>\n        <ion-col col-7>\n          Admin\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="isSales(adminUsers)">\n        <ion-col col-5>\n          Todays Travel\n        </ion-col>\n        <ion-col col-5>\n          {{adminUsers.distanceTravelled}} Km\n        </ion-col>\n        <ion-col col-2 (click)="showTodaysTrackingRecord(adminUsers)">\n          <ion-icon name="ios-pin-outline"></ion-icon>\n        </ion-col>\n      </ion-row>\n\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col col-4 text-center (click)="udpateAdminUser(adminUsers)">\n        <ion-icon name="md-create" color="primary"></ion-icon>\n      </ion-col>\n      <ion-col col-4 text-center (click)="changeAdminUserPassword(adminUsers)">\n        <ion-icon name="md-lock" color="primary"></ion-icon>\n      </ion-col>\n\n      <ion-col col-4 text-center >\n          <!-- <ion-icon name="ios-navigate" color="primary" (click)="navigateToTrackingView(adminUsers)"></ion-icon> -->\n          <ion-icon *ngIf="adminUsers?.firebaseId != null"  name="ios-navigate" color="primary" (click)="navigateToTrackingView(adminUsers)"></ion-icon>\n          <ion-icon *ngIf="adminUsers?.firebaseId == null" (click)="showFirebaseIdNotPresentAlert()" name="ios-navigate" color="light"></ion-icon>\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n  <!-- Infinite Scroll Content -->\n  <!-- <ion-infinite-scroll (ionInfinite)="getRecordsPaginated($event)">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading Users...">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll> -->\n\n\n  <!-- Add Product Button -->\n  <ion-fab *ngIf="adminUsersList.length > 0" bottom right (click)="addAdminUser()">\n    <button color="primary" ion-fab>\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\admin-users\admin-users.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_utility_common_utility__["a" /* CommonUtilityProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_restservice_restservice__["a" /* RestserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], AdminUsersPage);
    return AdminUsersPage;
    var AdminUsersPage_1;
}(__WEBPACK_IMPORTED_MODULE_2__custom_base_component__["a" /* BaseComponent */]));

//# sourceMappingURL=admin-users.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgingFilterPopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AgingFilterPopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AgingFilterPopoverPage = /** @class */ (function () {
    function AgingFilterPopoverPage(navCtrl, navParams, viewController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewController = viewController;
        this.agingperiod = 0;
        this.agingperiod = this.navParams.get('agingperiod');
    }
    AgingFilterPopoverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AgingFilterPopoverPage');
    };
    AgingFilterPopoverPage.prototype.dismissPopOver = function (data) {
        this.viewController.dismiss(data);
    };
    AgingFilterPopoverPage.prototype.showAgingReport = function (agingPeriod) {
        console.log('showAgingReport AgingFilterPopoverPage');
        this.dismissPopOver({
            showAging: true,
            agingPeriod: agingPeriod
        });
    };
    AgingFilterPopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aging-filter-popover',template:/*ion-inline-start:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\aging-filter-popover\aging-filter-popover.html"*/'<!--\n  Generated template for the AgingFilterPopoverPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content no-padding>\n\n  <ion-list text-center>\n    <button text-center color="bgcolor" ion-item (click)="showAgingReport(0)">\n      <p [class.activeagingperiod]="agingperiod == 0"> > 0</p>\n    </button>\n    <button text-center color="bgcolor" ion-item (click)="showAgingReport(30)">\n      <p [class.activeagingperiod]="agingperiod == 30"> > 30</p>\n    </button>\n    <button text-center color="bgcolor" ion-item (click)="showAgingReport(40)">\n      <p [class.activeagingperiod]="agingperiod == 40"> > 40</p>\n    </button>\n    <button text-center color="bgcolor" ion-item (click)="showAgingReport(50)">\n      <p [class.activeagingperiod]="agingperiod == 50"> > 50</p>\n    </button>\n    <button text-center color="bgcolor" ion-item (click)="showAgingReport(60)">\n      <p [class.activeagingperiod]="agingperiod == 60"> > 60</p>\n    </button>\n    <button text-center color="bgcolor" ion-item (click)="showAgingReport(90)">\n      <p [class.activeagingperiod]="agingperiod == 90"> > 90</p>\n    </button>\n    <button text-center color="bgcolor" ion-item (click)="showAgingReport(120)">\n      <p [class.activeagingperiod]="agingperiod == 120"> > 120</p>\n    </button>\n    <button text-center color="bgcolor" ion-item (click)="showAgingReport(180)">\n      <p [class.activeagingperiod]="agingperiod == 180"> > 180</p>\n    </button>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\aging-filter-popover\aging-filter-popover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */]])
    ], AgingFilterPopoverPage);
    return AgingFilterPopoverPage;
}());

//# sourceMappingURL=aging-filter-popover.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverSortFiltersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PopoverSortFiltersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PopoverSortFiltersPage = /** @class */ (function () {
    function PopoverSortFiltersPage(navCtrl, navParams, viewController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewController = viewController;
        this.sortOrder = 0;
        this.isCustMgmt = false;
        this.sortOrder = Number.parseInt(this.navParams.get('sortOrder'));
        this.isCustMgmt = this.navParams.get('isCustMgmt') == null || this.navParams.get('isCustMgmt') == undefined ? false : this.navParams.get('isCustMgmt');
        console.log('Sort Order = ' + this.sortOrder + ', isCustMgmt : ' + this.isCustMgmt);
    }
    PopoverSortFiltersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PopoverSortFiltersPage');
    };
    PopoverSortFiltersPage.prototype.dismissPopOver = function (data) {
        this.viewController.dismiss(data);
    };
    PopoverSortFiltersPage.prototype.sortData = function (sortOrder) {
        console.log('sortData PopoverSortFilterPage');
        this.dismissPopOver({
            sortData: true,
            sortOrder: sortOrder
        });
    };
    PopoverSortFiltersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-popover-sort-filters',template:/*ion-inline-start:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\popover-sort-filters\popover-sort-filters.html"*/'<!--\n  Generated template for the PopoverSortFiltersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content no-padding>\n\n  <ion-list text-center>\n    <button text-center color="bgcolor" ion-item (click)="sortData(2)">\n      <p [class.activesortingfilter]="sortOrder == 2">Amount (High - Low)</p>\n    </button>\n    <button text-center color="bgcolor" ion-item (click)="sortData(1)">\n      <p [class.activesortingfilter]="sortOrder == 1">Amount (Low - High)</p>\n    </button>\n    <button *ngIf="!isCustMgmt" text-center color="bgcolor" ion-item (click)="sortData(4)">\n      <p [class.activesortingfilter]="sortOrder == 4">Due Days (High - Low)</p>\n    </button>\n    <button *ngIf="!isCustMgmt" text-center color="bgcolor" ion-item (click)="sortData(3)">\n      <p [class.activesortingfilter]="sortOrder == 3">Due Days (Low - High)</p>\n    </button>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\popover-sort-filters\popover-sort-filters.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */]])
    ], PopoverSortFiltersPage);
    return PopoverSortFiltersPage;
}());

//# sourceMappingURL=popover-sort-filters.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorizatonSettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_constants_constants__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_utility_common_utility__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__change_password_change_password__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__customer_mgmt_customer_mgmt__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_diagnostic__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_location_tracker_location_tracker__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_database_database__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AuthorizatonSettingsPage = /** @class */ (function () {
    function AuthorizatonSettingsPage(navCtrl, navParams, commonUtility, http, events, diagnostic, platform, locationTracker, databaseProvider) {
        // private geolocation: Geolocation) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.commonUtility = commonUtility;
        this.http = http;
        this.events = events;
        this.diagnostic = diagnostic;
        this.platform = platform;
        this.locationTracker = locationTracker;
        this.databaseProvider = databaseProvider;
        // export class AuthorizatonSettingsPage extends BaseComponent {
        this.rolesArray = [];
        this.userDetails = null;
        // super(ConstantsProvider.API_ENDPOINT_ROLES, commonUtility, http, null);
        // this.getAll()
        //     .subscribe(
        //         (response) => {
        //             console.log(JSON.stringify(response));
        //             this.rolesArray = response.response.roles;
        //             this.userDetails = response.response.userDetails
        //             localStorage.setItem('roles', JSON.stringify(this.rolesArray));
        //             localStorage.setItem('isRolesUpdated', '1');
        //             localStorage.setItem('userDetails', JSON.stringify(this.userDetails));
        //             console.log('this.rolesArray = ' + JSON.stringify(this.rolesArray));
        //             if (this.userDetails.isPasswordChanged == 0) {
        //                 if (this.rolesArray.indexOf(ConstantsProvider.ROLE_SALES) > -1) {
        //                     // this.trackUserLocation();
        //                     // this.navCtrl.setRoot(CustomerMgmtPage);
        //                     this.databaseProvider.syncCustomerDataInBackground();
        //                     this.navCtrl.setRoot(CustomerMgmtPage);
        //                 } else if (this.rolesArray.indexOf(ConstantsProvider.ROLE_ADMIN) > -1) {
        //                     // this.navCtrl.setRoot(CustomerMgmtPage);
        //                     this.databaseProvider.syncCustomerDataInBackground();
        //                     this.navCtrl.setRoot(CustomerMgmtPage);
        //                 }
        //             } else {
        //                 this.navCtrl.setRoot(ChangePasswordPage, {
        //                     isForceChange: true
        //                 });
        //             }
        //             this.events.publish("rolesUpdated");
        //         }
        //     );
        //Get RolesArray And UserDetails From Storage
        this.databaseProvider.getItem('roles')
            .then(function (res) {
            console.log('roles DB Call Response = ' + JSON.stringify(res));
            if (res.rows.length > 0) {
                var rowData = res.rows.item(0).data;
                _this.rolesArray = null != rowData ? JSON.parse(rowData) : null;
            }
            else
                _this.rolesArray = null;
            _this.databaseProvider.getItem('userDetails')
                .then(function (res) {
                if (res.rows.length > 0) {
                    var rowData = res.rows.item(0).data;
                    _this.userDetails = null != rowData ? JSON.parse(rowData) : null;
                }
                else
                    _this.userDetails = null;
                console.log('this.rolesArray = ' + JSON.stringify(_this.rolesArray));
                if (null != _this.userDetails && null != _this.rolesArray) {
                    if (_this.userDetails.isPasswordChanged == 0) {
                        if (_this.rolesArray.indexOf(__WEBPACK_IMPORTED_MODULE_2__providers_constants_constants__["a" /* ConstantsProvider */].ROLE_SALES) > -1) {
                            _this.trackUserLocation();
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__customer_mgmt_customer_mgmt__["a" /* CustomerMgmtPage */]);
                        }
                        else if (_this.rolesArray.indexOf(__WEBPACK_IMPORTED_MODULE_2__providers_constants_constants__["a" /* ConstantsProvider */].ROLE_ADMIN) > -1) {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__customer_mgmt_customer_mgmt__["a" /* CustomerMgmtPage */]);
                        }
                    }
                    else {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__change_password_change_password__["a" /* ChangePasswordPage */], {
                            isForceChange: true
                        });
                    }
                    _this.events.publish("rolesUpdated");
                }
                else {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__login_login__["a" /* LoginPage */]);
                }
            });
        });
        // this.rolesArray = null != localStorage.getItem('roles') ? JSON.parse(localStorage.getItem('roles')) : null;
        // this.userDetails = null != localStorage.getItem('userDetails') ? JSON.parse(localStorage.getItem('userDetails')) : null;
    }
    AuthorizatonSettingsPage.prototype.trackUserLocation = function () {
        var _this = this;
        // Location Tracking
        this.platform.ready().then(function () {
            _this.diagnostic.isLocationEnabled().then(function (available) {
                if (available) {
                    _this.locationTracker.startTracking();
                }
                else {
                    _this.diagnostic.switchToLocationSettings();
                }
            });
        });
        // End of Location Tracking
    };
    ;
    AuthorizatonSettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AuthorizatonSettingsPage');
    };
    AuthorizatonSettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-authorizaton-settings',template:/*ion-inline-start:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\authorizaton-settings\authorizaton-settings.html"*/'<!--\n  Generated template for the AuthorizatonSettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="navbar">\n    <ion-title></ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\authorizaton-settings\authorizaton-settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_utility_common_utility__["a" /* CommonUtilityProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_diagnostic__["a" /* Diagnostic */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_8__providers_location_tracker_location_tracker__["a" /* LocationTrackerProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_database_database__["a" /* DatabaseProvider */]])
    ], AuthorizatonSettingsPage);
    return AuthorizatonSettingsPage;
}());

//# sourceMappingURL=authorizaton-settings.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_restservice_restservice__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_constants_constants__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_utility_common_utility__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ChangePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangePasswordPage = /** @class */ (function () {
    function ChangePasswordPage(navCtrl, navParams, restService, commonUtility) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restService = restService;
        this.commonUtility = commonUtility;
        this.isForceChange = false;
        this.newPassword = '';
        this.isForceChange = this.navParams.get('isForceChange');
    }
    ChangePasswordPage.prototype.changePassword = function () {
        var _this = this;
        console.log('newPassword = ' + this.newPassword);
        var changePasswordUrl = __WEBPACK_IMPORTED_MODULE_3__providers_constants_constants__["a" /* ConstantsProvider */].API_BASE_URL + __WEBPACK_IMPORTED_MODULE_3__providers_constants_constants__["a" /* ConstantsProvider */].API_ENDPOINT_USERS +
            __WEBPACK_IMPORTED_MODULE_3__providers_constants_constants__["a" /* ConstantsProvider */].URL_SEPARATOR + __WEBPACK_IMPORTED_MODULE_3__providers_constants_constants__["a" /* ConstantsProvider */].API_ENDPOINT_CHANGE_PASS;
        var changePasswordData = {
            password: this.newPassword
        };
        this.restService.postDetails(changePasswordUrl, changePasswordData)
            .subscribe(function () {
            _this.commonUtility.presentToast('Password Changed SuccessFully', 5000);
            setTimeout(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
            }, 2000);
        });
    };
    ChangePasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangePasswordPage');
    };
    ChangePasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-change-password',template:/*ion-inline-start:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\change-password\change-password.html"*/'<!--\n  Generated template for the ChangePasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="navbar" text-center>\n    <ion-title>\n      Change Password\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-grid no-padding>\n\n    <ion-row style="margin-top:45%;">\n      <ion-col col-12 padding text-center style="font-style: italic;" *ngIf="isForceChange">\n        Please change your password on your first login for security purpose. Enter new password below and save.\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-12>\n        <ion-item>\n          <ion-label floating class="pj-floating-label">New Password*</ion-label>\n          <ion-input type="password" [(ngModel)]="newPassword"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-12>\n        <button ion-button class="pj-button" type="button" [disabled]="newPassword == \'\'" (click)="changePassword()">SAVE</button>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\change-password\change-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_restservice_restservice__["a" /* RestserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common_utility_common_utility__["a" /* CommonUtilityProvider */]])
    ], ChangePasswordPage);
    return ChangePasswordPage;
}());

//# sourceMappingURL=change-password.js.map

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestserviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_constants__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { DatabaseProvider } from '../database/database';
/*
  Generated class for the RestserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestserviceProvider = /** @class */ (function () {
    function RestserviceProvider(http, events, loadingCtrl, network, toastCtrl, alertCtrl) {
        this.http = http;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        console.log('Hello RestserviceProvider Provider');
    }
    RestserviceProvider.prototype.doLoginRequest = function (userName, password) {
        var _this = this;
        // let header = this.commonUtility.createBasicAuthHeaderOptions();
        var header = this.createBasicAuthHeaderOptions();
        var loginUrl = __WEBPACK_IMPORTED_MODULE_4__constants_constants__["a" /* ConstantsProvider */].API_BASE_URL + __WEBPACK_IMPORTED_MODULE_4__constants_constants__["a" /* ConstantsProvider */].API_ENDPOINT_OAUTH
            + '?username=' + userName + '&password=' + password + '&grant_type=password';
        return this.http.post(loginUrl, '', { headers: header })
            .map(function (response) {
            console.log("In login" + JSON.stringify(response));
            _this.setTokenInStorage(response);
            // this.commonUtility.setTokenInStorage(response);
            // TODO: Update Logic For Synchronous Execution
            // this.databaseProvider.setTokenInDb(response);
            return true;
        })
            .catch(function (err) {
            var loginDetails = err;
            console.log("login Error - " + JSON.stringify(loginDetails));
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(loginDetails);
        });
    };
    RestserviceProvider.prototype.getDetails = function (url) {
        var _this = this;
        console.log('Get URL -> ' + url);
        if (this.isNetworkAvailable()) {
            // if (this.commonUtility.isNetworkAvailable()) {
            this.loader = this.createLoader();
            // this.loader = this.commonUtility.createLoader();
            this.loader.present();
            return this.http.get(url)
                .map(function (response) {
                _this.loader.dismiss();
                return response;
            })
                .catch(function (err) {
                _this.loader.dismiss();
                console.log("Error - " + JSON.stringify(err));
                // this.commonUtility.presentErrorToast(err);
                _this.presentErrorToast(err);
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(err);
            });
        }
    };
    RestserviceProvider.prototype.getDetailsWithoutLoader = function (url) {
        var _this = this;
        console.log('Get URL -> ' + url);
        if (this.isNetworkAvailable()) {
            // if (this.commonUtility.isNetworkAvailable()) {
            return this.http.get(url)
                .map(function (response) {
                return response;
            })
                .catch(function (err) {
                console.log("Error - " + JSON.stringify(err));
                _this.presentErrorToast(err);
                // this.commonUtility.presentErrorToast(err);
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(err);
            });
        }
    };
    RestserviceProvider.prototype.postDetails = function (url, data) {
        var _this = this;
        console.log('Post URL -> ' + url);
        console.log('Post Data -> ' + JSON.stringify(data));
        if (this.isNetworkAvailable()) {
            // if (this.commonUtility.isNetworkAvailable()) {
            this.loader = this.createLoader();
            // this.loader = this.commonUtility.createLoader();
            this.loader.present();
            return this.http.post(url, data)
                .map(function (response) {
                _this.loader.dismiss();
                return response;
            })
                .catch(function (err) {
                _this.loader.dismiss();
                console.log("Error - " + JSON.stringify(err));
                _this.presentErrorToast(err);
                // this.commonUtility.presentErrorToast(err);
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(err);
            });
        }
    };
    RestserviceProvider.prototype.putDetails = function (url, data) {
        var _this = this;
        console.log('Put URL -> ' + url);
        console.log('Put Data -> ' + JSON.stringify(data));
        // if (this.commonUtility.isNetworkAvailable()) {
        if (this.isNetworkAvailable()) {
            this.loader = this.createLoader();
            // this.loader = this.commonUtility.createLoader();
            this.loader.present();
            return this.http.put(url, data)
                .map(function (response) {
                _this.loader.dismiss();
                return response;
            })
                .catch(function (err) {
                _this.loader.dismiss();
                console.log("Error - " + JSON.stringify(err));
                _this.presentErrorToast(err);
                // this.commonUtility.presentErrorToast(err);
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(err);
            });
        }
    };
    RestserviceProvider.prototype.putLocationDetails = function (url, data) {
        console.log('Put URL -> ' + url);
        console.log('Put Data -> ' + JSON.stringify(data));
        if (this.isNetworkAvailable()) {
            // if (this.commonUtility.isNetworkAvailable()) {
            // this.loader = this.commonUtility.createLoader();
            // this.loader.present();
            return this.http.put(url, data)
                .map(function (response) {
                // this.loader.dismiss();
                return response;
            })
                .catch(function (err) {
                // this.loader.dismiss();
                console.log("Error - " + JSON.stringify(err));
                // this.commonUtility.presentErrorToast(err);
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(err);
            });
        }
    };
    RestserviceProvider.prototype.deleteDetails = function (url, data) {
        var _this = this;
        console.log('Delete URL -> ' + url);
        console.log('Delete Data -> ' + JSON.stringify(data));
        if (this.isNetworkAvailable()) {
            // if (this.commonUtility.isNetworkAvailable()) {
            this.loader = this.createLoader();
            // this.loader = this.commonUtility.createLoader();
            this.loader.present();
            return this.http.delete(url, data)
                .map(function (response) {
                _this.loader.dismiss();
                return response;
            })
                .catch(function (err) {
                _this.loader.dismiss();
                console.log("Error - " + JSON.stringify(err));
                _this.presentErrorToast(err);
                // this.commonUtility.presentErrorToast(err);
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(err);
            });
        }
    };
    /* HELPER METHODS */
    RestserviceProvider.prototype.setTokenInStorage = function (data) {
        console.log('Access Token = ' + data.access_token);
        console.log('Refresh Token = ' + data.refresh_token);
        localStorage.setItem('token', data.access_token);
        localStorage.setItem('refresh-token', data.refresh_token);
        localStorage.setItem('isLoggedIn', '1');
    };
    // isNetworkAvailable() {
    //     if (!this.isNetworkAvailableFlag) {
    //         let alert = this.alertCtrl.create({
    //             subTitle: 'No Internet Connection',
    //             enableBackdropDismiss: false,
    //             buttons: [
    //                 {
    //                     text: 'OK',
    //                     handler: () => {
    //                         this.isNetworkAvailable();
    //                     }
    //                 }
    //             ]
    //         });
    //         alert.present();
    //     }
    //     return this.isNetworkAvailableFlag;
    // }
    RestserviceProvider.prototype.isNetworkAvailable = function () {
        var _this = this;
        if (this.network.type == "unknown" || this.network.type == "none" || this.network.type == undefined) {
            var alert_1 = this.alertCtrl.create({
                subTitle: 'No Internet Connection',
                enableBackdropDismiss: false,
                buttons: [
                    {
                        text: 'OK',
                        handler: function () {
                            _this.isNetworkAvailable();
                        }
                    }
                ]
            });
            alert_1.present();
            return false;
        }
        else {
            return true;
        }
    };
    RestserviceProvider.prototype.createBasicAuthHeaderOptions = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpHeaders */]({
            "Authorization": "Basic " + __WEBPACK_IMPORTED_MODULE_4__constants_constants__["a" /* ConstantsProvider */].BASIC_AUTH_TOKEN
        });
        console.log("Login Header Options - " + JSON.stringify(headers.get("Authorization")));
        return headers;
    };
    RestserviceProvider.prototype.presentToast = function (messageContent, messageDuration) {
        var toast = this.toastCtrl.create({
            message: messageContent,
            duration: messageDuration
        });
        toast.present();
    };
    RestserviceProvider.prototype.presentErrorToast = function (error) {
        var toast = this.toastCtrl.create({
            message: error,
            duration: 5000
        });
        toast.present();
    };
    RestserviceProvider.prototype.createLoader = function (message) {
        if (message === void 0) { message = "Please wait..."; }
        return this.loadingCtrl.create({
            content: message
        });
    };
    RestserviceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */]])
    ], RestserviceProvider);
    return RestserviceProvider;
}());

//# sourceMappingURL=restservice.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalAuAdminUsersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_users_admin_users__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__custom_base_component__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_constants_constants__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_utility_common_utility__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(37);
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the ModalAuAdminUsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalAuAdminUsersPage = /** @class */ (function (_super) {
    __extends(ModalAuAdminUsersPage, _super);
    function ModalAuAdminUsersPage(navCtrl, navParams, formBuilder, view, commonUtility, http) {
        var _this = _super.call(this, __WEBPACK_IMPORTED_MODULE_5__providers_constants_constants__["a" /* ConstantsProvider */].API_ENDPOINT_USERS + __WEBPACK_IMPORTED_MODULE_5__providers_constants_constants__["a" /* ConstantsProvider */].URL_SEPARATOR
            + __WEBPACK_IMPORTED_MODULE_5__providers_constants_constants__["a" /* ConstantsProvider */].API_ENDPOINT_ADMIN_USERS, commonUtility, http, null) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.formBuilder = formBuilder;
        _this.view = view;
        _this.commonUtility = commonUtility;
        _this.http = http;
        _this.adminUserDetails = _this.navParams.get('adminUserDetails');
        _this.isAddOperation = _this.navParams.get('isAddOperation');
        if (null == _this.adminUserDetails) {
            _this.initializeAdminUsers();
        }
        _this.adminUserFormGroup = _this.formBuilder.group({
            contactNum: [_this.adminUserDetails.contactNum, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            firstName: [_this.adminUserDetails.firstName, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            lastName: [_this.adminUserDetails.lastName, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            rolesMasterDtlsId: [_this.adminUserDetails.rolesMasterDtlsId, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            password: ['']
        });
        return _this;
    }
    ModalAuAdminUsersPage.prototype.initializeAdminUsers = function () {
        this.adminUserDetails = {
            userLoginDtlsId: '',
            userDtlsId: '',
            contactNum: '',
            firstName: '',
            lastName: '',
            password: '',
            rolesMasterDtlsId: '',
            emailId: ''
        };
    };
    ModalAuAdminUsersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalAuAdminUsersPage');
    };
    // dismissModal() {
    //   const modalData = {
    //     isAdded: false
    //   };
    //   this.view.dismiss(modalData);
    // }
    ModalAuAdminUsersPage.prototype.dismissModal = function () {
        this.navCtrl.pop();
    };
    ModalAuAdminUsersPage.prototype.saveAdminUsers = function () {
        var _this = this;
        this.adminUserDetails.contactNum = this.adminUserFormGroup.controls['contactNum'].value;
        this.adminUserDetails.firstName = this.adminUserFormGroup.controls['firstName'].value;
        this.adminUserDetails.lastName = this.adminUserFormGroup.controls['lastName'].value;
        var roles = [];
        roles.push(__WEBPACK_IMPORTED_MODULE_5__providers_constants_constants__["a" /* ConstantsProvider */].ROLE_USER);
        roles.push(this.adminUserFormGroup.controls['rolesMasterDtlsId'].value);
        this.adminUserDetails.rolesMasterDtlsId = roles;
        // if (this.isAddOperation)
        //   this.adminUserDetails.password = this.adminUserFormGroup.controls['password'].value;
        // const modalData = {
        //   isAdded: true,
        //   adminUserDetails: this.adminUserDetails
        // };
        // this.view.dismiss(modalData);
        if (this.isAddOperation) {
            this.adminUserDetails.password = this.adminUserFormGroup.controls['password'].value;
            this.create(this.adminUserDetails)
                .subscribe(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__admin_users_admin_users__["a" /* AdminUsersPage */]);
                _this.commonUtility.presentToast('User Added Successfully', 3000);
            });
        }
        else {
            this.update(this.adminUserDetails)
                .subscribe(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__admin_users_admin_users__["a" /* AdminUsersPage */]);
                _this.commonUtility.presentToast('User Updated Successfully', 3000);
            });
        }
    };
    ModalAuAdminUsersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-au-admin-users',template:/*ion-inline-start:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\modal-au-admin-users\modal-au-admin-users.html"*/'<!--\n  Generated template for the ModalAuAdminUsersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="navbar" text-center>\n    <ion-title>\n      Add Admin Users\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-grid no-padding>\n\n    <form [formGroup]="adminUserFormGroup">\n      <ion-row>\n\n        <ion-col col-6>\n          <ion-item>\n            <ion-label floating class="pj-floating-label">First Name*</ion-label>\n            <ion-input type="text" formControlName="firstName"></ion-input>\n          </ion-item>\n        </ion-col>\n\n        <ion-col col-6>\n          <ion-item>\n            <ion-label floating class="pj-floating-label">Last Name*</ion-label>\n            <ion-input type="text" formControlName="lastName"></ion-input>\n          </ion-item>\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n          <ion-item>\n            <ion-label floating class="pj-floating-label">UserName*</ion-label>\n            <ion-input type="text" formControlName="contactNum"></ion-input>\n          </ion-item>\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="isAddOperation">\n\n        <ion-col col-12>\n          <ion-item>\n            <ion-label floating class="pj-floating-label">Password*</ion-label>\n            <ion-input type="password" formControlName="password"></ion-input>\n          </ion-item>\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-12>\n          <ion-item class="pj-floating-label">\n            <ion-label>Role*</ion-label>\n            <ion-select formControlName="rolesMasterDtlsId">\n              <ion-option value="ROLE_SALES">Sales Executive</ion-option>\n              <ion-option value="ROLE_ADMIN">Admin</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-6>\n          <button ion-button class="pj-button-danger" type="button" (click)="dismissModal()">CANCEL</button>\n        </ion-col>\n        <ion-col col-6>\n          <button ion-button class="pj-button" type="button" [disabled]="!adminUserFormGroup.valid" (click)="saveAdminUsers()">SAVE</button>\n        </ion-col>\n      </ion-row>\n\n    </form>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\modal-au-admin-users\modal-au-admin-users.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_common_utility_common_utility__["a" /* CommonUtilityProvider */],
            __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClient */]])
    ], ModalAuAdminUsersPage);
    return ModalAuAdminUsersPage;
}(__WEBPACK_IMPORTED_MODULE_4__custom_base_component__["a" /* BaseComponent */]));

//# sourceMappingURL=modal-au-admin-users.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Firebase__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_Firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_geocoder_geocoder__ = __webpack_require__(535);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import SlidingMarker from 'marker-animate-unobtrusive';

var TrackingPage = /** @class */ (function () {
    function TrackingPage(navCtrl, navParams, platform, geocoderProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.geocoderProvider = geocoderProvider;
        this.latitude = '0';
        this.longitude = '0';
        this.index = 1;
        this.nodeName = 'aaditInfra/';
        this.map = null;
        this.image = 'assets/imgs/loc-marker.png';
        this.markers = [];
        this.marker = null;
        this.adminUserName = '';
        this.firebaseId = this.navParams.get('firebaseId');
        // this.firebaseId = '-LPQ6hb8cXTSUnwz7ejX';
        this.adminUser = this.navParams.get('adminUser');
        this.adminUserName = this.adminUser.userDtl.firstName + ' ' + this.adminUser.userDtl.lastName;
        console.log('Admin User Name = ' + this.adminUserName
            + ", firebaseId = " + this.firebaseId);
        this.ref = __WEBPACK_IMPORTED_MODULE_2_Firebase__["database"]().ref(this.nodeName + this.firebaseId);
        platform.ready().then(function () {
            _this.ref.on('value', function (resp) {
                console.log('Getting Value From FCM');
                var data = resp.val();
                _this.latitude = data.latitude;
                _this.longitude = data.longitude;
                _this.lastUpdatedTs = data.updatedTs;
                if (null != _this.latitude && '0' != _this.latitude && '' != _this.latitude && null != _this.longitude
                    && '' != _this.longitude && '0' != _this.longitude) {
                    _this.geocoderProvider.reverseGeocode(_this.latitude, _this.longitude)
                        .subscribe(function (response) {
                        _this.address = response;
                    });
                }
                else {
                    _this.address = 'Address Not Available';
                }
                // this.address = 'Address Not Available';
                console.log(_this.index + " : " + " Latitude = " + data.latitude + ", Longitude = " + data.longitude
                    + ", Key = " + resp.key + ", Updated Ts - " + _this.lastUpdatedTs);
                if (_this.map != null) {
                    var locationOnMap = new google.maps.LatLng(_this.latitude, _this.longitude);
                    if (_this.marker != null) {
                        console.log('map bounds result = ' + _this.map.getBounds().contains(locationOnMap));
                        _this.marker.setPosition(locationOnMap);
                        if (!_this.map.getBounds().contains(locationOnMap)) {
                            console.log('Location not within Boundary. Centering Map with new location');
                            _this.map.setCenter(locationOnMap);
                        }
                    }
                    else {
                        console.log('No Marker found. Adding new one');
                        _this.addMarker(locationOnMap, _this.image);
                    }
                    console.log('Added marker On Map');
                }
                else {
                    console.log('Initializing Map');
                    _this.initMap(_this.latitude, _this.longitude);
                    console.log('Initialized Map');
                }
                console.log('Completed On Value ');
            });
        });
    }
    TrackingPage.prototype.initMap = function (latitude, longitude) {
        var locationOnMap = new google.maps.LatLng(latitude, longitude);
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            zoom: 14,
            center: locationOnMap,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        this.addMarker(locationOnMap, this.image);
    };
    TrackingPage.prototype.addMarker = function (location, image) {
        //Create New Marker on Map
        // this.marker = new SlidingMarker({
        this.marker = new google.maps.Marker({
            position: location,
            map: this.map,
            // title: "I'm sliding marker",
            // label: 'I am test label',
            icon: image,
            easing: "easeOutExpo"
        });
        // this.marker.setDuration(TrackingPage.DEFAULT_MARKER_ANIMATE_DURATION);
        // marker.setEasing('linear');
    };
    TrackingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TrackingPage');
    };
    TrackingPage.DEFAULT_MARKER_ANIMATE_DURATION = 2000;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], TrackingPage.prototype, "mapElement", void 0);
    TrackingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tracking',template:/*ion-inline-start:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\tracking\tracking.html"*/'<!--\n  Generated template for the TrackingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="navbar" text-center>\n    <ion-title>{{adminUserName}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card style="position: absolute; bottom: 1rem; z-index: 99999; margin:0;">\n    <ion-card-content>\n      <ion-row>\n        <ion-col col-5 class="pj-sub-title">\n          Last Updated\n        </ion-col>\n        <ion-col col-6 class="pj-sub-title">\n          {{lastUpdatedTs | date : \'dd MMM yyyy hh:mm a\' }}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        {{address}}\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n  <div #map id="map"></div>\n\n\n</ion-content>'/*ion-inline-end:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\tracking\tracking.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__providers_geocoder_geocoder__["a" /* GeocoderProvider */]])
    ], TrackingPage);
    return TrackingPage;
}());

//# sourceMappingURL=tracking.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackingHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_constants_constants__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_restservice_restservice__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import SlidingMarker from 'marker-animate-unobtrusive';


var TrackingHistoryPage = /** @class */ (function () {
    function TrackingHistoryPage(navCtrl, navParams, platform, restService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.restService = restService;
        this.map = null;
        this.image = 'assets/imgs/loc-marker.png';
        this.markers = [];
        this.marker = null;
        this.polyOptions = {
            strokeColor: '#4986E7',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            geodesic: true,
        };
        this.latLongList = [];
        this.min = 0;
        this.rangeVal = 0;
        this.currentDate = new Date().toISOString();
        this.trackDate = this.navParams.get('trackDate');
        this.adminUser = this.navParams.get('adminUser');
        this.adminUserName = this.adminUser.userDtl.firstName + ' ' + this.adminUser.userDtl.lastName;
        this.getTrackingHistoryForTheDay();
    }
    TrackingHistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TrackingHistoryPage');
    };
    TrackingHistoryPage.prototype.getTrackingHistoryUrl = function () {
        return __WEBPACK_IMPORTED_MODULE_2__providers_constants_constants__["a" /* ConstantsProvider */].API_BASE_URL + __WEBPACK_IMPORTED_MODULE_2__providers_constants_constants__["a" /* ConstantsProvider */].API_ENDPOINT_USERS
            + __WEBPACK_IMPORTED_MODULE_2__providers_constants_constants__["a" /* ConstantsProvider */].URL_SEPARATOR + this.adminUser.contactNum
            // + ConstantsProvider.URL_SEPARATOR + this.adminUser.userDtl.userDtlsId 
            + __WEBPACK_IMPORTED_MODULE_2__providers_constants_constants__["a" /* ConstantsProvider */].URL_SEPARATOR + __WEBPACK_IMPORTED_MODULE_2__providers_constants_constants__["a" /* ConstantsProvider */].API_ENDPOINT_TRACKING_HISTORY + this.trackDate;
        // return '';
    };
    TrackingHistoryPage.prototype.getTrackingHistoryForTheDay = function () {
        var _this = this;
        var trackingHistoryUrl = this.getTrackingHistoryUrl();
        console.log('trackingHistoryUrl = ' + trackingHistoryUrl);
        this.restService.getDetails(trackingHistoryUrl)
            .subscribe(function (response) {
            _this.distanceTravelled = response.response.distanceTravelled;
            _this.latLongList = response.response.trackingData;
            if (_this.latLongList.length > 0) {
                _this.max = _this.latLongList.length - 1;
                _this.minTime = _this.latLongList[0].time;
                _this.maxTime = _this.latLongList[_this.max].time;
                _this.time = _this.latLongList[0].time;
                _this.initializeAll();
            }
            console.log("Time - " + _this.time + ', Min Time = ' + _this.minTime
                + ', maxTime = ' + _this.maxTime + ', min = ' + _this.min + ', max = ' + _this.max);
        });
        // TODO: Remove This
        // TEST DATA
        // let response = {
        //   response: this.fillDummyData()
        // }
        // this.distanceTravelled = response.response.distanceTravelled;
        // this.latLongList = response.response.trackingData;
        // if (this.latLongList.length > 0) {
        //   this.max = this.latLongList.length - 1;
        //   this.minTime = this.latLongList[0].time;
        //   this.maxTime = this.latLongList[this.max].time;
        //   this.time = this.latLongList[0].time;
        //   this.initializeAll();
        // }
        // console.log("Time - " + this.time + ', Min Time = ' + this.minTime
        //   + ', maxTime = ' + this.maxTime + ', min = ' + this.min + ', max = ' + this.max);
    };
    TrackingHistoryPage.prototype.initializeAll = function () {
        var _this = this;
        this.platform.ready().then(function () {
            if (_this.map != null) {
                var locationOnMap = new google.maps.LatLng(_this.latLongList[0].latitude, _this.latLongList[0].longitude);
                if (_this.marker != null) {
                    console.log('map bounds result = ' + _this.map.getBounds().contains(locationOnMap));
                    _this.marker.setPosition(locationOnMap);
                    if (!_this.map.getBounds().contains(locationOnMap)) {
                        console.log('Location not within Boundary. Centering Map with new location');
                        _this.map.setCenter(locationOnMap);
                    }
                }
                else {
                    console.log('No Marker found. Adding new one');
                    _this.addMarker(locationOnMap, _this.image);
                }
                console.log('Added marker On Map');
            }
            else {
                console.log('Initializing Map');
                _this.initMap(_this.latLongList[0].latitude, _this.latLongList[0].longitude);
                console.log('Initialized Map');
            }
            console.log('Completed On Value ');
        });
    };
    TrackingHistoryPage.prototype.initMap = function (latitude, longitude) {
        var locationOnMap = new google.maps.LatLng(latitude, longitude);
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            zoom: 10,
            center: locationOnMap,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        this.addMarker(locationOnMap, this.image);
        //Initialize Polyline
        this.polyLine = new google.maps.Polyline(this.polyOptions);
        this.polyLine.setMap(this.map);
        var path = this.polyLine.getPath();
        path.push(locationOnMap);
    };
    TrackingHistoryPage.prototype.addMarker = function (location, image) {
        //Create New Marker on Map
        // this.marker = new SlidingMarker({
        this.marker = new google.maps.Marker({
            position: location,
            map: this.map,
            // title: "I'm sliding marker",
            // label: 'I am test label',
            icon: image,
        });
        // this.marker.setDuration(TrackingHistoryPage.DEFAULT_MARKER_ANIMATE_DURATION);
        // marker.setEasing('linear');
    };
    TrackingHistoryPage.prototype.updatePath = function () {
        console.log('updatePath() called');
        //Step 1: Redraw polyline from start point to current point through all intermediate points
        var path = this.polyLine.getPath();
        var pathLength = path.length;
        var rangeValToCompare = Number.parseInt(this.rangeVal.toString()) + 1;
        console.log('this.rangeVal = ' + this.rangeVal + 'pathLength = ' + pathLength
            + ', rangeValToCompare = ' + rangeValToCompare);
        if (pathLength != rangeValToCompare) {
            if (pathLength < rangeValToCompare) {
                for (var i = pathLength; i <= this.rangeVal; i++) {
                    var latitude = this.latLongList[i].latitude;
                    var longitude = this.latLongList[i].longitude;
                    console.log('Latitude = ' + latitude + ', longitude = ' + longitude);
                    var locationOnMap = new google.maps.LatLng(latitude, longitude);
                    path.setAt(i, locationOnMap);
                }
            }
            else {
                for (var i = rangeValToCompare; i < pathLength; i++) {
                    path.removeAt(i);
                }
            }
            var currentLatLongSelected = this.latLongList[this.rangeVal];
            var markerLocation = new google.maps.LatLng(currentLatLongSelected.latitude, currentLatLongSelected.longitude);
            this.time = currentLatLongSelected.time;
            //Step 2: Set Marker Position to the latest
            this.marker.setPosition(markerLocation);
            if (!this.map.getBounds().contains(markerLocation)) {
                console.log('Location not within Boundary. Centering Map with new location');
                this.map.setCenter(markerLocation);
            }
        }
    };
    TrackingHistoryPage.prototype.updatePath1 = function () {
        //Step 1: Redraw polyline from start point to current point through all intermediate points
        var path = this.polyLine.getPath();
        var pathLength = path.length;
        var rangeValToCompare = Number.parseInt(this.rangeVal.toString()) + 1;
        console.log('this.rangeVal = ' + this.rangeVal + 'pathLength = ' + pathLength
            + ', rangeValToCompare = ' + rangeValToCompare);
        if (pathLength != rangeValToCompare) {
            if (pathLength < rangeValToCompare) {
                for (var i = pathLength; i <= this.rangeVal; i++) {
                    var latitude = this.latLongList[i].latitude;
                    var longitude = this.latLongList[i].longitude;
                    console.log('Latitude = ' + latitude + ', longitude = ' + longitude);
                    var locationOnMap = new google.maps.LatLng(latitude, longitude);
                    path.setAt(i, locationOnMap);
                }
            }
            else {
                for (var i = rangeValToCompare; i < pathLength; i++) {
                    path.removeAt(i);
                }
            }
            var currentLatLongSelected = this.latLongList[this.rangeVal];
            var markerLocation = new google.maps.LatLng(currentLatLongSelected.latitude, currentLatLongSelected.longitude);
            this.time = currentLatLongSelected.time;
            //Step 2: Set Marker Position to the latest
            this.marker.setPosition(markerLocation);
            if (!this.map.getBounds().contains(markerLocation)) {
                console.log('Location not within Boundary. Centering Map with new location');
                this.map.setCenter(markerLocation);
            }
        }
        //Set the Path Stroke Color
        // var poly = new google.maps.Polyline({ map: map, strokeColor: '#4986E7' });
        //Loop and Draw Path Route between the Points on MAP
        // for (var i = 0; i < lat_lng.length; i++) {
        //   if ((i + 1) < lat_lng.length) {
        //     let src = lat_lng[i];
        //     var des = lat_lng[i + 1];
        //     path.push(src);
        //     poly.setPath(path);
        //     service.route({
        //       origin: src,
        //       destination: des,
        //       travelMode: google.maps.DirectionsTravelMode.DRIVING
        //     }, function (result, status) {
        //       if (status == google.maps.DirectionsStatus.OK) {
        //         for (var i = 0, len = result.routes[0].overview_path.length; i < len; i++) {
        //           path.push(result.routes[0].overview_path[i]);
        //         }
        //       }
        //     });
        //   }
        // }
        // }
    };
    TrackingHistoryPage.prototype.getTrackingData = function () {
        console.log('getTrackingData() called');
        console.log('trackDate = ' + this.trackDate);
        this.getTrackingHistoryForTheDay();
    };
    TrackingHistoryPage.prototype.fillDummyData = function () {
        var response = {
            "trackingDate": "2018-12-07",
            "distanceTravelled": "96.9",
            "trackingData": [
                {
                    "time": "12:00 AM",
                    "address": "",
                    "ignition": "0",
                    "latitude": 18.104732,
                    "longitude": 73.989112,
                    "utcDate": "061218",
                    "utcTime": "183003"
                },
                {
                    "time": "12:00 AM",
                    "address": "",
                    "ignition": "0",
                    "latitude": 18.104732,
                    "longitude": 73.989112,
                    "utcDate": "061218",
                    "utcTime": "183040"
                },
                {
                    "time": "12:01 AM",
                    "address": "",
                    "ignition": "0",
                    "latitude": 18.104732,
                    "longitude": 73.989112,
                    "utcDate": "061218",
                    "utcTime": "183100"
                },
                {
                    "time": "12:01 AM",
                    "address": "",
                    "ignition": "0",
                    "latitude": 18.104732,
                    "longitude": 73.989112,
                    "utcDate": "061218",
                    "utcTime": "183110"
                },
                {
                    "time": "12:01 AM",
                    "address": "",
                    "ignition": "0",
                    "latitude": 18.104732,
                    "longitude": 73.989112,
                    "utcDate": "061218",
                    "utcTime": "183120"
                },
                {
                    "time": "12:01 AM",
                    "address": "",
                    "ignition": "0",
                    "latitude": 18.104732,
                    "longitude": 73.989112,
                    "utcDate": "061218",
                    "utcTime": "183134"
                },
                {
                    "time": "12:01 AM",
                    "address": "",
                    "ignition": "0",
                    "latitude": 18.104732,
                    "longitude": 73.989112,
                    "utcDate": "061218",
                    "utcTime": "183146"
                },
                {
                    "time": "12:01 AM",
                    "address": "",
                    "ignition": "0",
                    "latitude": 18.104732,
                    "longitude": 73.989112,
                    "utcDate": "061218",
                    "utcTime": "183157"
                },
                {
                    "time": "12:02 AM",
                    "address": "",
                    "ignition": "0",
                    "latitude": 18.104732,
                    "longitude": 73.989112,
                    "utcDate": "061218",
                    "utcTime": "183209"
                },
                {
                    "time": "12:02 AM",
                    "address": "",
                    "ignition": "0",
                    "latitude": 18.104732,
                    "longitude": 73.989112,
                    "utcDate": "061218",
                    "utcTime": "183219"
                },
                {
                    "time": "12:02 AM",
                    "address": "",
                    "ignition": "0",
                    "latitude": 18.104732,
                    "longitude": 73.989112,
                    "utcDate": "061218",
                    "utcTime": "183231"
                },
                {
                    "time": "12:02 AM",
                    "address": "",
                    "ignition": "0",
                    "latitude": 18.104732,
                    "longitude": 73.989112,
                    "utcDate": "061218",
                    "utcTime": "183245"
                },
                {
                    "time": "12:02 AM",
                    "address": "",
                    "ignition": "0",
                    "latitude": 18.104732,
                    "longitude": 73.989112,
                    "utcDate": "061218",
                    "utcTime": "183255"
                },
                {
                    "time": "12:03 AM",
                    "address": "",
                    "ignition": "0",
                    "latitude": 18.104732,
                    "longitude": 73.989112,
                    "utcDate": "061218",
                    "utcTime": "183305"
                },
                {
                    "time": "12:03 AM",
                    "address": "",
                    "ignition": "0",
                    "latitude": 18.104732,
                    "longitude": 73.989112,
                    "utcDate": "061218",
                    "utcTime": "183321"
                },
                {
                    "time": "12:03 AM",
                    "address": "",
                    "ignition": "0",
                    "latitude": 18.104732,
                    "longitude": 73.989112,
                    "utcDate": "061218",
                    "utcTime": "183330"
                },
                {
                    "time": "12:03 AM",
                    "address": "",
                    "ignition": "0",
                    "latitude": 18.104732,
                    "longitude": 73.989112,
                    "utcDate": "061218",
                    "utcTime": "183343"
                },
                {
                    "time": "12:03 AM",
                    "address": "",
                    "ignition": "0",
                    "latitude": 18.104732,
                    "longitude": 73.989112,
                    "utcDate": "061218",
                    "utcTime": "183353"
                },
                {
                    "time": "12:04 AM",
                    "address": "",
                    "ignition": "0",
                    "latitude": 18.104732,
                    "longitude": 73.989112,
                    "utcDate": "061218",
                    "utcTime": "183409"
                },
                {
                    "time": "12:04 AM",
                    "address": "",
                    "ignition": "0",
                    "latitude": 18.104732,
                    "longitude": 73.989112,
                    "utcDate": "061218",
                    "utcTime": "183420"
                },
                {
                    "time": "12:04 AM",
                    "address": "",
                    "ignition": "0",
                    "latitude": 18.104732,
                    "longitude": 73.989112,
                    "utcDate": "061218",
                    "utcTime": "183431"
                },
                {
                    "time": "12:04 AM",
                    "address": "",
                    "ignition": "0",
                    "latitude": 18.104732,
                    "longitude": 73.989112,
                    "utcDate": "061218",
                    "utcTime": "183442"
                },
                {
                    "time": "12:04 AM",
                    "address": "",
                    "ignition": "0",
                    "latitude": 18.104732,
                    "longitude": 73.989112,
                    "utcDate": "061218",
                    "utcTime": "183452"
                },
                {
                    "time": "12:05 AM",
                    "address": "",
                    "ignition": "0",
                    "latitude": 18.104732,
                    "longitude": 73.989112,
                    "utcDate": "061218",
                    "utcTime": "183513"
                },
                {
                    "time": "12:05 AM",
                    "address": "",
                    "ignition": "0",
                    "latitude": 18.104732,
                    "longitude": 73.989112,
                    "utcDate": "061218",
                    "utcTime": "183523"
                }
            ]
        };
        return response;
    };
    TrackingHistoryPage.DEFAULT_MARKER_ANIMATE_DURATION = 2000;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], TrackingHistoryPage.prototype, "mapElement", void 0);
    TrackingHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tracking-history',template:/*ion-inline-start:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\tracking-history\tracking-history.html"*/'<!--\n  Generated template for the TrackingHistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="navbar" text-center>\n    <ion-title>\n      {{adminUserName}}\n    </ion-title>\n  </ion-navbar>\n\n  <!-- <script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyBshSrAhk_5uO903g1yp6wlgVAaF67ET5s&libraries=places"></script> -->\n\n</ion-header>\n\n<ion-content no-padding>\n\n  <div style="top:0rem;z-index: 999; margin:0;width: 100%;height:8%">\n    <ion-row>\n      <ion-col col-12>\n        <ion-datetime text-center [(ngModel)]="trackDate" [max]="currentDate" displayFormat="DD-MM-YYYY" (ionChange)="getTrackingData()"></ion-datetime>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div *ngIf="latLongList.length > 0" style="position: fixed; bottom: 0rem; z-index: 99999; margin:10% 0;width: 100%;height:20%">\n    <ion-card no-padding>\n      <ion-card-content>\n\n        <ion-row>\n          <ion-col col-5 class="fm-sub-title">\n            {{trackDate | date : \'dd MMM yyyy\' }}\n          </ion-col>\n          <ion-col col-7 style="font-size: 1.4rem !important" color="semidark">\n            {{time }}\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-item no-padding>\n            <ion-range [min]="min" [max]="max" step="1" snaps="true" [(ngModel)]="rangeVal" color="secondary"\n              (ionChange)="updatePath()">\n              <ion-label range-left style="font-size: 1rem !important" color="light">{{minTime}}</ion-label>\n              <ion-label range-right style="font-size: 1rem !important" color="light">{{maxTime}}</ion-label>\n            </ion-range>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-5 class="fm-sub-title">\n            Distance\n          </ion-col>\n          <ion-col col-6 style="font-size: 1.4rem !important" color="semidark">\n            {{distanceTravelled}} Kms\n          </ion-col>\n          <ion-col col-1></ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  \n  <div *ngIf="latLongList.length == 0" class="pj-empty-page" style="margin-top: 40%;">\n    <ion-icon name="ios-pin-outline"></ion-icon>\n    <h4>No Tracking History For <strong>{{trackDate | date: \'dd MMM yyyy\'}}</strong>.</h4>\n    <h4>Please Select Other Date from Above To View Tracking Data.</h4>\n  </div>\n\n  <div style="height: 70%;" [class.mapDisplay]="latLongList.length == 0" >\n    <div #map id="map"></div>\n  </div>\n\n\n</ion-content>'/*ion-inline-end:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\tracking-history\tracking-history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__providers_restservice_restservice__["a" /* RestserviceProvider */]])
    ], TrackingHistoryPage);
    return TrackingHistoryPage;
}());

//# sourceMappingURL=tracking-history.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgingReportFiltersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customer_aging_report_customer_aging_report__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_utility_common_utility__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AgingReportFiltersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AgingReportFiltersPage = /** @class */ (function () {
    function AgingReportFiltersPage(navCtrl, navParams, formBuilder, commonUtility) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.commonUtility = commonUtility;
        this.maxTime = new Date().toISOString();
        this.customer = this.navParams.get('customer');
        this.agingReportFilterFormGroup = this.formBuilder.group({
            // noOfDays: ['', Validators.required],
            fromDate: [this.commonUtility.getCurrentDate('yyyy-MM-dd'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    AgingReportFiltersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AgingReportFiltersPage');
    };
    AgingReportFiltersPage.prototype.showReport = function () {
        console.log('showReport AgingReportsFiltersPage');
        console.log('FromDate = ' + this.agingReportFilterFormGroup.controls['fromDate'].value);
        // + ', No Of Days = ' + this.agingReportFilterFormGroup.controls['noOfDays'].value);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__customer_aging_report_customer_aging_report__["a" /* CustomerAgingReportPage */], {
            customer: this.customer,
            fromDate: this.agingReportFilterFormGroup.controls['fromDate'].value,
        });
    };
    AgingReportFiltersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aging-report-filters',template:/*ion-inline-start:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\aging-report-filters\aging-report-filters.html"*/'<!--\n  Generated template for the AgingReportFiltersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navbar" text-center>\n    <ion-title>Aging Report Filters</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-row>\n    <ion-col col-12>\n      <strong>{{customer.customerDetails.cardCode}} - {{customer.customerDetails.cardName}}</strong>\n    </ion-col>\n  </ion-row>\n\n  <form [formGroup]="agingReportFilterFormGroup">\n\n    <ion-row>\n      <ion-col col-12>\n        <ion-item class="pj-card-floating-label">\n          <ion-label floating>Date*</ion-label>\n          <ion-datetime formControlName="fromDate" [max]="maxTime" displayFormat="DD-MMM-YYYY"></ion-datetime>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <!-- <ion-row>\n      <ion-col col-12>\n        <ion-item class="pj-card-floating-label">\n          <ion-label>No. Of Days</ion-label>\n          <ion-select formControlName="noOfDays">\n            <ion-option value="30">0-30 Days</ion-option>\n            <ion-option value="60">30-60 Days</ion-option>\n            <ion-option value="90">60-90 Days</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row> -->\n\n    <ion-row>\n      <ion-col col-12 padding>\n        <button ion-button class="pj-button" type="submit" [disabled]="!agingReportFilterFormGroup.valid" (click)="showReport()">APPLY\n          FILTERS</button>\n      </ion-col>\n    </ion-row>\n\n  </form>\n\n\n</ion-content>'/*ion-inline-end:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\aging-report-filters\aging-report-filters.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__providers_common_utility_common_utility__["a" /* CommonUtilityProvider */]])
    ], AgingReportFiltersPage);
    return AgingReportFiltersPage;
}());

//# sourceMappingURL=aging-report-filters.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerAgingReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_restservice_restservice__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_constants_constants__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__invoices_listing_invoices_listing__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_utility_common_utility__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__customer_details_customer_details__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_opener__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_pdfmake_build_pdfmake__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_pdfmake_build_pdfmake___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_pdfmake_build_pdfmake__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_pdfmake_build_vfs_fonts__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_pdfmake_build_vfs_fonts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_pdfmake_build_vfs_fonts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__invoice_listing_settings_popover_invoice_listing_settings_popover__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














__WEBPACK_IMPORTED_MODULE_10_pdfmake_build_pdfmake___default.a.vfs = __WEBPACK_IMPORTED_MODULE_11_pdfmake_build_vfs_fonts___default.a.pdfMake.vfs;
var CustomerAgingReportPage = /** @class */ (function () {
    function CustomerAgingReportPage(navCtrl, navParams, popOverController, restService, commonUtility, modal, alertCtrl, file, fileOpener, socialSharing) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popOverController = popOverController;
        this.restService = restService;
        this.commonUtility = commonUtility;
        this.modal = modal;
        this.alertCtrl = alertCtrl;
        this.file = file;
        this.fileOpener = fileOpener;
        this.socialSharing = socialSharing;
        // agingReportList: any[] = [];
        this.agingReportDetails = {};
        this.ledgerOpeningBalance = 0;
        this.ledgerClosingBalance = 0;
        this.totalLedgerInvoiceBalance = 0;
        this.totalInvoiceBalance = 0;
        this.ledgerInvoiceList = [];
        this.openingBalanceInvoice = null;
        this.agingAmount = 0;
        this.pdfObj = null;
        this.firstQInvoicesList = [];
        this.secondQInvoicesList = [];
        this.thirdQInvoicesList = [];
        this.fourthQInvoicesList = [];
        this.otherQInvoicesList = [];
        this.customer = this.navParams.get('customer');
        this.fromDate = this.navParams.get('fromDate');
        // this.currentDate = new DatePipe('en-Us').transform(new Date().toISOString(), 'dd-MMM-yyy hh:mm a');
        // console.log('Current Date = ' + this.currentDate);
        var agingReportApiEndpoint = __WEBPACK_IMPORTED_MODULE_3__providers_constants_constants__["a" /* ConstantsProvider */].API_BASE_URL
            + __WEBPACK_IMPORTED_MODULE_3__providers_constants_constants__["a" /* ConstantsProvider */].API_ENDPOINT_CUST_DTLS + __WEBPACK_IMPORTED_MODULE_3__providers_constants_constants__["a" /* ConstantsProvider */].URL_SEPARATOR
            + this.customer.customerDetails.cardCode + __WEBPACK_IMPORTED_MODULE_3__providers_constants_constants__["a" /* ConstantsProvider */].URL_SEPARATOR
            + __WEBPACK_IMPORTED_MODULE_3__providers_constants_constants__["a" /* ConstantsProvider */].API_ENDPOINT_AGING_REPORT + "?from-date=" + this.fromDate;
        console.log('agingReport = ' + agingReportApiEndpoint);
        this.restService.getDetails(agingReportApiEndpoint)
            .subscribe(function (response) {
            console.log('Response = ' + JSON.stringify(response.response));
            // this.agingReportList = response.response;
            _this.agingReportDetails = response.response.agingDetails;
            _this.firstQInvoicesList = response.response.firstQInvoicesList;
            _this.secondQInvoicesList = response.response.secondQInvoicesList;
            _this.thirdQInvoicesList = response.response.thirdQInvoicesList;
            _this.fourthQInvoicesList = response.response.fourthQInvoicesList;
            _this.otherQInvoicesList = response.response.otherQInvoicesList;
        });
    }
    CustomerAgingReportPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustomerAgingReportPage');
    };
    CustomerAgingReportPage.prototype.downloadReport = function () {
        console.log('downloadPdf');
        var page = document.getElementById('pdfDiv');
        cordova.plugins.printer.print(page, 'Aging_Report.pdf');
    };
    CustomerAgingReportPage.prototype.viewBills = function (noOfDays) {
        console.log('viewBills CustomerAgingReportPage');
        var agingAmount = 0;
        var invoicesListToPass = [];
        switch (noOfDays) {
            case '-30':
                console.log('Here in ' + noOfDays);
                agingAmount = this.agingReportDetails.firstQ;
                invoicesListToPass = this.firstQInvoicesList;
                break;
            case '-60':
                agingAmount = this.agingReportDetails.secondQ;
                invoicesListToPass = this.secondQInvoicesList;
                break;
            case '-90':
                agingAmount = this.agingReportDetails.thirdQ;
                invoicesListToPass = this.thirdQInvoicesList;
                break;
            case '-120':
                agingAmount = this.agingReportDetails.fourthQ;
                invoicesListToPass = this.fourthQInvoicesList;
                break;
            case '-365':
                agingAmount = this.agingReportDetails.otherQ;
                invoicesListToPass = this.otherQInvoicesList;
                break;
        }
        console.log('fromDate = ' + this.fromDate + ', noOfDays = ' + noOfDays + ", agingAmount = " + agingAmount
            + ', invoicesListToPass = ' + JSON.stringify(invoicesListToPass));
        if (invoicesListToPass.length > 0) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__invoices_listing_invoices_listing__["a" /* InvoicesListingPage */], {
                customer: this.customer,
                fromDate: this.fromDate,
                noOfDays: noOfDays,
                agingAmount: agingAmount,
                invoicesListing: invoicesListToPass
            });
        }
        else {
            this.commonUtility.presentErrorToast('No Aging Details Present To Show');
        }
    };
    CustomerAgingReportPage.prototype.callCust = function () {
        console.log('Calling Customer on : ' + this.customer.customerDetails.cellular);
        this.commonUtility.callNumber(this.customer.customerDetails.cellular, true);
    };
    CustomerAgingReportPage.prototype.viewCustInfo = function () {
        var customerDetailsModal = this.modal.create(__WEBPACK_IMPORTED_MODULE_6__customer_details_customer_details__["a" /* CustomerDetailsPage */], {
            customer: this.customer,
            isModalData: true
        });
        customerDetailsModal.present();
    };
    CustomerAgingReportPage.prototype.presentPopover = function (event) {
        var _this = this;
        var popOver = this.popOverController.create(__WEBPACK_IMPORTED_MODULE_13__invoice_listing_settings_popover_invoice_listing_settings_popover__["a" /* InvoiceListingSettingsPopoverPage */], {
            customer: this.customer
        });
        popOver.present();
        popOver.onDidDismiss(function (data) {
            if (data && data.showLedger) {
                var ledgerBalanceApiEndpoint = __WEBPACK_IMPORTED_MODULE_3__providers_constants_constants__["a" /* ConstantsProvider */].API_BASE_URL + __WEBPACK_IMPORTED_MODULE_3__providers_constants_constants__["a" /* ConstantsProvider */].API_ENDPOINT_CUST_DTLS
                    + __WEBPACK_IMPORTED_MODULE_3__providers_constants_constants__["a" /* ConstantsProvider */].URL_SEPARATOR + _this.customer.customerDetails.cardCode
                    + __WEBPACK_IMPORTED_MODULE_3__providers_constants_constants__["a" /* ConstantsProvider */].URL_SEPARATOR + __WEBPACK_IMPORTED_MODULE_3__providers_constants_constants__["a" /* ConstantsProvider */].API_ENDPOINT_LEDGER_REPORT;
                console.log('ledgerBalanceApiEndpoint = ' + ledgerBalanceApiEndpoint);
                _this.restService.getDetails(ledgerBalanceApiEndpoint)
                    .subscribe(function (response) {
                    console.log('Response = ' + JSON.stringify(response.response));
                    _this.ledgerInvoiceList = response.response;
                    // let invoiceIdsToSpliceLedgerArr: any[] = [];
                    // this.ledgerInvoiceList.forEach(
                    //   (ledgerInvoice) => {
                    //     console.log('Ledger Invoice Type = ' + ledgerInvoice.type);
                    //     if (ledgerInvoice.type == 'OB') {
                    //       this.ledgerOpeningBalance = ledgerInvoice.grossTotal;
                    //       invoiceIdsToSpliceLedgerArr.push(ledgerInvoice.invoiceNo);
                    //     } else if (ledgerInvoice.type == 'A/R Inv') {
                    //       this.totalLedgerInvoiceBalance = this.totalLedgerInvoiceBalance
                    //         + Number.parseFloat(ledgerInvoice.grossTotal);
                    //     } else if (ledgerInvoice.type != 'A/R Inv') {
                    //       invoiceIdsToSpliceLedgerArr.push(ledgerInvoice.invoiceNo);
                    //     }
                    //   }
                    // );
                    // console.log('invoiceIdsToSpliceLedger = ' + JSON.stringify(invoiceIdsToSpliceLedgerArr));
                    // invoiceIdsToSpliceLedgerArr.forEach(
                    //   (invoiceIdsToSpliceLedger) => {
                    //     console.log('Splicing Invoice no = ' + invoiceIdsToSpliceLedger);
                    //     if (invoiceIdsToSpliceLedger != null) {
                    //       this.ledgerInvoiceList.forEach(
                    //         (ledgerInvoiceInCheck) => {
                    //           if (ledgerInvoiceInCheck.invoiceNo == invoiceIdsToSpliceLedger) {
                    //             this.ledgerInvoiceList.splice(this.ledgerInvoiceList.indexOf(ledgerInvoiceInCheck), 1);
                    //           }
                    //         }
                    //       );
                    //     }
                    //   }
                    // );
                    _this.ledgerInvoiceList.forEach(function (ledgerInvoice) {
                        console.log('Ledger Invoice Type = ' + ledgerInvoice.type);
                        if (ledgerInvoice.type == 'OB') {
                            _this.ledgerOpeningBalance = ledgerInvoice.grossTotal;
                        }
                        _this.totalLedgerInvoiceBalance = _this.totalLedgerInvoiceBalance
                            + Number.parseFloat(ledgerInvoice.grossTotal);
                    });
                    console.log('Ledger Invoice Final List = ' + JSON.stringify(_this.ledgerInvoiceList));
                    _this.showLedgerShareOptions();
                });
            }
        });
    };
    CustomerAgingReportPage.prototype.showLedgerShareOptions = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Show Ledger',
            subTitle: 'Do you want to Share the ledger?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Ok clicked');
                        // this.downloadLedgerReport();
                        _this.createLedgerPdfAndShare();
                    }
                }
            ]
        });
        alert.present();
    };
    CustomerAgingReportPage.prototype.createLedgerPdfAndShare = function () {
        // alert('Creating Ledger PDF And Sharing');
        var body = [];
        // body.push(['Date', 'Due Date', 'Type', 'Invoice No.', 'Status', 'Balance']);
        // body.push(['', '', 'Opening Balance', '', '', this.ledgerOpeningBalance]);
        body.push(['Date', 'Due Date', 'Type', 'Invoice No.', 'Balance']);
        body.push(['', '', 'Opening Balance', '', this.ledgerOpeningBalance]);
        this.ledgerInvoiceList.forEach(function (ledgerInvoice) {
            if (ledgerInvoice.type != 'OB') {
                body.push([new __WEBPACK_IMPORTED_MODULE_12__angular_common__["d" /* DatePipe */]('en-US').transform(ledgerInvoice.invoiceDate),
                    new __WEBPACK_IMPORTED_MODULE_12__angular_common__["d" /* DatePipe */]('en-US').transform(ledgerInvoice.dueDate), ledgerInvoice.type,
                    ledgerInvoice.invoiceNo == '0' ? '' : ledgerInvoice.invoiceNo,
                    // ledgerInvoice.invoiceNo == '0' ? '' : ledgerInvoice.invoiceNo , ledgerInvoice.isPaid == 'O' ? 'Open' : 'Close',
                    ledgerInvoice.grossTotal]);
            }
        });
        // body.push(['', '', '', '', 'Total', this.totalLedgerInvoiceBalance]);
        body.push(['', '', '', 'Total', this.totalLedgerInvoiceBalance]);
        // alert(JSON.stringify(body));
        /*    let docDefinition = this.commonUtility.getDocDefination('Ledger Report', '01 Apr 19 - 31 Mar 20',
              this.invoicesListing[0].invoiceItemsList[0].partyCity, this.customer.customerDetails.cardName, body);*/
        var docDefinition = this.commonUtility.getDocDefination('Ledger Report', '01 Apr 19 - 31 Mar 20', '', this.customer.customerDetails.cardName, body);
        this.pdfObj = __WEBPACK_IMPORTED_MODULE_10_pdfmake_build_pdfmake___default.a.createPdf(docDefinition);
        this.downloadPdf('JBSLedgerReport_' + this.customer.customerDetails.cardName + '.pdf');
    };
    CustomerAgingReportPage.prototype.downloadPdf = function (fileName) {
        var _this = this;
        this.pdfObj.getBuffer(function (buffer) {
            var blob = new Blob([buffer], { type: 'application/pdf' });
            // Save the PDF to the data Directory of our App
            _this.file.writeFile(_this.file.dataDirectory, fileName, blob, { replace: true }).then(function (fileEntry) {
                // Open the PDf with the correct OS tools
                // this.fileOpener.open(this.file.dataDirectory + fileName, 'application/pdf');
                _this.pdf = _this.file.dataDirectory + fileName;
                _this.share();
            });
        });
    };
    CustomerAgingReportPage.prototype.share = function () {
        //alert('Sharing Message');
        this.socialSharing.share('', '', this.pdf, null).then(function () {
            // alert('Successfully Shared The File');
        }).catch(function (e) {
            alert('Error : ' + JSON.stringify(e));
        });
    };
    CustomerAgingReportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-customer-aging-report',template:/*ion-inline-start:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\customer-aging-report\customer-aging-report.html"*/'<!--\n  Generated template for the CustomerAgingReportPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="navbar" text-center>\n\n    <ion-title>\n      Customer Aging Report\n    </ion-title>\n\n    <ion-buttons end>\n\n      <!-- <button (click)="downloadAgingReport()" ion-button item-end style="background-color: #1c2431; font-size: 20px;">\n          <ion-icon name="ios-cloud-download-outline" color="primary"></ion-icon>\n        </button> -->\n\n      <button ion-button item-end (click)="presentPopover($event)" style="background-color: #1c2431; font-size: 20px;">\n        <ion-icon name="md-more"></ion-icon>\n      </button>\n\n    </ion-buttons>\n\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n\n  <ion-row padding>\n    <ion-col col-12 text-center>\n      <strong>{{customer.customerDetails.cardCode}} - {{customer.customerDetails.cardName}}</strong>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-4></ion-col>\n    <ion-col style="font-size:1.3em" col-2 (click)="callCust()" *ngIf="customer.customerDetails.cellular != null && customer.customerDetails.cellular != \'\'">\n      <ion-icon name="md-call"></ion-icon>\n    </ion-col>\n    <ion-col style="font-size:1.3em" col-2 (click)="viewCustInfo()">\n      <ion-icon name="ios-information-circle-outline"></ion-icon>\n    </ion-col>\n    <ion-col col-4></ion-col>\n  </ion-row>\n\n  <ion-row padding>\n    <ion-col col-12 text-center>\n      <span style="font-size:4rem;"><strong><i class="fa fa-rupee"></i> {{customer.customerDetails.balance}}</strong></span>\n      <p style="color:#AFAFAF;font-size:10px;">(Balance As Of {{fromDate | date : \'dd MMM yy\'}})</p>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-10 class="pj-full-width-border" no-margin>\n      <ion-label>0 - 30 Days</ion-label>\n    </ion-col>\n    <ion-col col-2 (click)="viewBills(\'-30\')" class="pj-full-width-border" no-margin style="padding-top: 5%;">\n      <ion-icon color="primary" name="arrow-forward"></ion-icon>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-12>\n      <p text-center style="color: #fff;font-size: 4rem;"><i class="fa fa-rupee"></i> {{agingReportDetails.firstQ}}</p>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-10 class="pj-full-width-border" no-margin>\n      <ion-label>31 - 60 Days</ion-label>\n    </ion-col>\n    <ion-col col-2 (click)="viewBills(\'-60\')" class="pj-full-width-border" no-margin style="padding-top: 5%;">\n      <ion-icon color="primary" name="arrow-forward"></ion-icon>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-12>\n      <p text-center style="color: #fff;font-size: 4rem;"><i class="fa fa-rupee"></i> {{agingReportDetails.secondQ}}</p>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-row>\n    <ion-col col-10 class="pj-full-width-border" no-margin>\n      <ion-label>61 - 90 Days</ion-label>\n    </ion-col>\n    <ion-col col-2 (click)="viewBills(\'-90\')" class="pj-full-width-border" no-margin style="padding-top: 5%;">\n      <ion-icon color="primary" name="arrow-forward"></ion-icon>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-12>\n      <p text-center style="color: #fff;font-size: 4rem;"><i class="fa fa-rupee"></i> {{agingReportDetails.thirdQ}}</p>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-row>\n    <ion-col col-10 class="pj-full-width-border" no-margin>\n      <ion-label>91 - 120 Days</ion-label>\n    </ion-col>\n    <ion-col col-2 (click)="viewBills(\'-120\')" class="pj-full-width-border" no-margin style="padding-top: 5%;">\n      <ion-icon color="primary" name="arrow-forward"></ion-icon>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-12>\n      <p text-center style="color: #fff;font-size: 4rem;"><i class="fa fa-rupee"></i> {{agingReportDetails.fourthQ}}</p>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-row>\n    <ion-col col-10 class="pj-full-width-border" no-margin>\n      <ion-label>121+ Days</ion-label>\n    </ion-col>\n    <ion-col col-2 (click)="viewBills(\'-365\')" class="pj-full-width-border" no-margin style="padding-top: 5%;">\n      <ion-icon color="primary" name="arrow-forward"></ion-icon>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-12>\n      <p text-center style="color: #fff;font-size: 4rem;"><i class="fa fa-rupee"></i> {{agingReportDetails.otherQ}}</p>\n    </ion-col>\n  </ion-row>\n\n  <!-- <div class="scroll-table-div">\n    <table>\n      <tr>\n        <th class="headcol">Posting Date</th>\n        <td class="long bold-heading">Due Date</td>\n        <td class="long bold-heading">Blanket Agreement</td>\n        <td class="long bold-heading">Type</td>\n        <td class="long bold-heading">Doc. No.</td>\n        <td class="long bold-heading">Instal. No.</td>\n        <td class="long bold-heading">BP Ref. No.</td>\n        <td class="long bold-heading">Balance Due(INR)</td>\n        <td class="long bold-heading">Future Remit(INR)</td>\n        <td class="long bold-heading" *ngIf="agingReport != null && agingReport != undefined && agingReport.noOfDays == 30">0\n          - 30</td>\n        <td class="long bold-heading" *ngIf="agingReport != null && agingReport != undefined && agingReport.noOfDays == 60">30\n          - 60</td>\n        <td class="long bold-heading" *ngIf="agingReport != null && agingReport != undefined && agingReport.noOfDays == 30">60\n          - 90</td>\n        <td class="long bold-heading" *ngIf="agingReport == null || agingReport == undefined">0 - 30</td>\n        <td class="long bold-heading">Payment Method Code</td>\n      </tr>\n      <tr *ngFor="let agingReport of agingReportList">\n        <th class="headcol">{{agingReport.postingDate}}</th>\n        <td class="long">{{agingReport.dueDate}}</td>\n        <td class="long">{{agingReport.blanketAgreement}}</td>\n        <td class="long">{{agingReport.type}}</td>\n        <td class="long">{{agingReport.docNo}}</td>\n        <td class="long">{{agingReport.installationNo}}</td>\n        <td class="long">{{agingReport.bpRefNo}}</td>\n        <td class="long">Rs. {{agingReport.balanceDue}}</td>\n        <td class="long">Rs. {{agingReport.futureRemit}}</td>\n        <td class="long">{{agingReport.noOfDays}}</td>\n        <td class="long">{{agingReport.paymentMethodCode}}</td>\n      </tr>\n    </table>\n  </div>\n\n  <div id="pdfDiv" style="display: none">\n    <h4>Report Date - {{currentDate}}</h4>\n    <h4>Customer Code - {{customer.customerDetails.cardCode}}</h4>\n    <h4>Customer Name - {{customer.customerDetails.cardName}}</h4>\n    <table style="width:100%;border-collapse: collapse; margin-top: 5%;">\n      <tr>\n        <td style="border: 1px solid black;border-collapse: collapse;">Posting Date</td>\n        <td style="border: 1px solid black;border-collapse: collapse;">Due Date</td>\n        <td style="border: 1px solid black;border-collapse: collapse;">Blanket Agreement</td>\n        <td style="border: 1px solid black;border-collapse: collapse;">Type</td>\n        <td style="border: 1px solid black;border-collapse: collapse;">Doc. No.</td>\n        <td style="border: 1px solid black;border-collapse: collapse;">Instal. No.</td>\n        <td style="border: 1px solid black;border-collapse: collapse;">BP Ref. No.</td>\n        <td style="border: 1px solid black;border-collapse: collapse;">Balance Due(INR)</td>\n        <td style="border: 1px solid black;border-collapse: collapse;">Future Remit(INR)</td>\n        <td style="border: 1px solid black;border-collapse: collapse;">Payment Method Code</td>\n        <td style="border: 1px solid black;border-collapse: collapse;" *ngIf="agingReport == null || agingReport == undefined">0\n          - 30</td>\n        <td style="border: 1px solid black;border-collapse: collapse;" *ngIf="agingReport != null && agingReport != undefined && agingReport.noOfDays == 30">0\n          - 30</td>\n        <td style="border: 1px solid black;border-collapse: collapse;" *ngIf="agingReport != null && agingReport != undefined && agingReport.noOfDays == 60">30\n          - 60</td>\n        <td style="border: 1px solid black;border-collapse: collapse;" *ngIf="agingReport != null && agingReport != undefined && agingReport.noOfDays == 30">60\n          - 90</td>\n      </tr>\n      <tr *ngFor="let agingReport of agingReportList">\n        <td style="border: 1px solid black;border-collapse: collapse;">{{agingReport.postingDate}}</td>\n        <td style="border: 1px solid black;border-collapse: collapse;">{{agingReport.dueDate}}</td>\n        <td style="border: 1px solid black;border-collapse: collapse;">{{agingReport.blanketAgreement}}</td>\n        <td style="border: 1px solid black;border-collapse: collapse;">{{agingReport.type}}</td>\n        <td style="border: 1px solid black;border-collapse: collapse;">{{agingReport.docNo}}</td>\n        <td style="border: 1px solid black;border-collapse: collapse;">{{agingReport.installationNo}}</td>\n        <td style="border: 1px solid black;border-collapse: collapse;">{{agingReport.bpRefNo}}</td>\n        <td style="border: 1px solid black;border-collapse: collapse;">{{agingReport.balanceDue}}</td>\n        <td style="border: 1px solid black;border-collapse: collapse;">{{agingReport.futureRemit}}</td>\n        <td style="border: 1px solid black;border-collapse: collapse;">{{agingReport.paymentMethodCode}}</td>\n        <td style="border: 1px solid black;border-collapse: collapse;" *ngIf="agingReport != null && agingReport != undefined && agingReport.noOfDays == 30">0\n          - 30</td>\n        <td style="border: 1px solid black;border-collapse: collapse;" *ngIf="agingReport != null && agingReport != undefined && agingReport.noOfDays == 60">30\n          - 60</td>\n        <td style="border: 1px solid black;border-collapse: collapse;" *ngIf="agingReport != null && agingReport != undefined && agingReport.noOfDays == 90">60\n          - 90</td>\n        <td style="border: 1px solid black;border-collapse: collapse;" *ngIf="agingReport == null || agingReport == undefined"></td>\n      </tr>\n    </table>\n  </div> -->\n\n</ion-content>'/*ion-inline-end:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\customer-aging-report\customer-aging-report.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_restservice_restservice__["a" /* RestserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common_utility_common_utility__["a" /* CommonUtilityProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_opener__["a" /* FileOpener */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], CustomerAgingReportPage);
    return CustomerAgingReportPage;
}());

//# sourceMappingURL=customer-aging-report.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoicesListingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_restservice_restservice__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__invoice_details_invoice_details__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_constants_constants__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__invoice_listing_settings_popover_invoice_listing_settings_popover__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_utility_common_utility__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_opener__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_pdfmake_build_pdfmake__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_pdfmake_build_pdfmake___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_pdfmake_build_pdfmake__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_pdfmake_build_vfs_fonts__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_pdfmake_build_vfs_fonts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_pdfmake_build_vfs_fonts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__customer_details_customer_details__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















__WEBPACK_IMPORTED_MODULE_10_pdfmake_build_pdfmake___default.a.vfs = __WEBPACK_IMPORTED_MODULE_11_pdfmake_build_vfs_fonts___default.a.pdfMake.vfs;
var InvoicesListingPage = /** @class */ (function () {
    function InvoicesListingPage(navCtrl, navParams, restService, popOverController, alertCtrl, commonUtility, file, fileOpener, socialSharing, modal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restService = restService;
        this.popOverController = popOverController;
        this.alertCtrl = alertCtrl;
        this.commonUtility = commonUtility;
        this.file = file;
        this.fileOpener = fileOpener;
        this.socialSharing = socialSharing;
        this.modal = modal;
        this.fromDate = '';
        this.customer = {};
        this.noOfDays = '0';
        this.invoicesListing = [];
        this.currentDate = new Date().toISOString();
        this.ledgerBalanceList = [];
        this.ledgerOpeningBalance = 0;
        this.ledgerClosingBalance = 0;
        this.totalLedgerInvoiceBalance = 0;
        this.totalInvoiceBalance = 0;
        this.ledgerInvoiceList = [];
        this.openingBalanceInvoice = null;
        this.agingAmount = 0;
        this.pdfObj = null;
        this.shareMessage = '';
        this.shareSubject = '';
        this.customer = this.navParams.get('customer');
        this.fromDate = this.navParams.get('fromDate');
        this.noOfDays = this.navParams.get('noOfDays');
        this.agingAmount = this.navParams.get('agingAmount');
        this.invoicesListing = this.navParams.get('invoicesListing');
        this.updateInvoicesDetailsFromInvoiceListing();
        // let invoiceListingApiEndpoint: string = ConstantsProvider.API_BASE_URL + ConstantsProvider.API_ENDPOINT_CUST_DTLS
        //   + ConstantsProvider.URL_SEPARATOR + this.customer.customerDetails.cardCode
        //   + ConstantsProvider.URL_SEPARATOR + "invoices?due-date=" + this.fromDate + "&no-of-days=" + this.noOfDays;
        // console.log('invoiceListingApiEndpoint = ' + invoiceListingApiEndpoint);
        // this.restService.getDetails(invoiceListingApiEndpoint)
        //   .subscribe(
        //     (response) => {
        //       this.invoicesListing = response.response;
        //       console.log('Response = ' + JSON.stringify(this.invoicesListing));
        //       this.updateInvoicesDetailsFromInvoiceListing();
        //     }
        //   );
    }
    InvoicesListingPage.prototype.updateInvoicesDetailsFromInvoiceListing = function () {
        // let indexToSplice: any = null;
        var _this = this;
        // this.invoicesListing.forEach(
        //   (invoice) => {
        //     console.log('Invoice Date = ' + JSON.stringify(invoice));
        //     if (invoice.type != 'OB')
        //       this.totalInvoiceBalance = this.totalInvoiceBalance + Number.parseFloat(invoice.grossTotal);
        //     else {
        //       this.openingBalanceInvoice = invoice;
        //       indexToSplice = this.invoicesListing.indexOf(invoice);
        //     }
        //   }
        // );
        // console.log('indexToSplice = ' + indexToSplice + ', openingBalanceInvoice = '
        //   + JSON.stringify(this.openingBalanceInvoice) + ', totalInvoiceBalance = ' + this.totalInvoiceBalance);
        // if (indexToSplice != null)
        //   this.invoicesListing.splice(indexToSplice, 1);
        this.invoicesListing.forEach(function (invoice) {
            _this.totalInvoiceBalance = _this.totalInvoiceBalance + Number.parseFloat(invoice.grossTotal);
        });
    };
    InvoicesListingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InvoicesListingPage');
    };
    InvoicesListingPage.prototype.showInvoiceDetails = function (invoice) {
        console.log('showInvoiceDetails InvoiceListingPage');
        console.log('invoice.invoiceItemsList = ' + invoice.invoiceItemsList);
        if (invoice.type == 'A/R Inv') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__invoice_details_invoice_details__["a" /* InvoiceDetailsPage */], {
                customer: this.customer,
                fromDate: this.fromDate,
                invoice: invoice
            });
        }
        else {
            var mssgToDisplay = 'This is an ' + invoice.type + ' type Entry and does not have any order items associated with it.';
            var alert_1 = this.alertCtrl.create({
                title: 'General Entry',
                subTitle: mssgToDisplay,
                buttons: ['OK']
            });
            alert_1.present();
        }
    };
    InvoicesListingPage.prototype.presentPopover = function (event) {
        var _this = this;
        var popOver = this.popOverController.create(__WEBPACK_IMPORTED_MODULE_5__invoice_listing_settings_popover_invoice_listing_settings_popover__["a" /* InvoiceListingSettingsPopoverPage */], {
            customer: this.customer
        });
        popOver.present();
        popOver.onDidDismiss(function (data) {
            if (data && data.showLedger) {
                var ledgerBalanceApiEndpoint = __WEBPACK_IMPORTED_MODULE_4__providers_constants_constants__["a" /* ConstantsProvider */].API_BASE_URL + __WEBPACK_IMPORTED_MODULE_4__providers_constants_constants__["a" /* ConstantsProvider */].API_ENDPOINT_CUST_DTLS
                    + __WEBPACK_IMPORTED_MODULE_4__providers_constants_constants__["a" /* ConstantsProvider */].URL_SEPARATOR + _this.customer.customerDetails.cardCode
                    + __WEBPACK_IMPORTED_MODULE_4__providers_constants_constants__["a" /* ConstantsProvider */].URL_SEPARATOR + __WEBPACK_IMPORTED_MODULE_4__providers_constants_constants__["a" /* ConstantsProvider */].API_ENDPOINT_LEDGER_REPORT;
                console.log('ledgerBalanceApiEndpoint = ' + ledgerBalanceApiEndpoint);
                _this.restService.getDetails(ledgerBalanceApiEndpoint)
                    .subscribe(function (response) {
                    console.log('Response = ' + JSON.stringify(response.response));
                    _this.ledgerInvoiceList = response.response;
                    // let invoiceIdsToSpliceLedgerArr: any[] = [];
                    // this.ledgerInvoiceList.forEach(
                    //   (ledgerInvoice) => {
                    //     console.log('Ledger Invoice Type = ' + ledgerInvoice.type);
                    //     if (ledgerInvoice.type == 'OB') {
                    //       this.ledgerOpeningBalance = ledgerInvoice.grossTotal;
                    //       invoiceIdsToSpliceLedgerArr.push(ledgerInvoice.invoiceNo);
                    //     } else if (ledgerInvoice.type == 'A/R Inv') {
                    //       this.totalLedgerInvoiceBalance = this.totalLedgerInvoiceBalance
                    //         + Number.parseFloat(ledgerInvoice.grossTotal);
                    //     } else if (ledgerInvoice.type != 'A/R Inv') {
                    //       invoiceIdsToSpliceLedgerArr.push(ledgerInvoice.invoiceNo);
                    //     }
                    //   }
                    // );
                    // console.log('invoiceIdsToSpliceLedger = ' + JSON.stringify(invoiceIdsToSpliceLedgerArr));
                    // invoiceIdsToSpliceLedgerArr.forEach(
                    //   (invoiceIdsToSpliceLedger) => {
                    //     console.log('Splicing Invoice no = ' + invoiceIdsToSpliceLedger);
                    //     if (invoiceIdsToSpliceLedger != null) {
                    //       this.ledgerInvoiceList.forEach(
                    //         (ledgerInvoiceInCheck) => {
                    //           if (ledgerInvoiceInCheck.invoiceNo == invoiceIdsToSpliceLedger) {
                    //             this.ledgerInvoiceList.splice(this.ledgerInvoiceList.indexOf(ledgerInvoiceInCheck), 1);
                    //           }
                    //         }
                    //       );
                    //     }
                    //   }
                    // );
                    _this.ledgerInvoiceList.forEach(function (ledgerInvoice) {
                        console.log('Ledger Invoice Type = ' + ledgerInvoice.type);
                        if (ledgerInvoice.type == 'OB') {
                            _this.ledgerOpeningBalance = ledgerInvoice.grossTotal;
                        }
                        else {
                            _this.totalLedgerInvoiceBalance = _this.totalLedgerInvoiceBalance
                                + Number.parseFloat(ledgerInvoice.grossTotal);
                        }
                    });
                    console.log('Ledger Invoice Final List = ' + JSON.stringify(_this.ledgerInvoiceList));
                    _this.showLedgerShareOptions();
                });
            }
        });
    };
    InvoicesListingPage.prototype.showLedgerShareOptions = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Show Ledger',
            subTitle: 'Do you want to Share the ledger?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Ok clicked');
                        // this.downloadLedgerReport();
                        _this.createLedgerPdfAndShare();
                    }
                }
            ]
        });
        alert.present();
    };
    InvoicesListingPage.prototype.downloadLedgerReport = function () {
        console.log('downloadReport InvoiceListingPage');
        var page = document.getElementById('pdfDivLedger');
        cordova.plugins.printer.print(page, 'Ledger_Report.pdf');
    };
    InvoicesListingPage.prototype.downloadAgingReport = function () {
        console.log('downloadAgingReport InvoiceListingPage');
        var page = document.getElementById('pdfDivAging');
        cordova.plugins.printer.print(page, 'Aging_Report.pdf');
    };
    InvoicesListingPage.prototype.createAgingPDFAndShare = function () {
        if (null != this.invoicesListing && this.invoicesListing.length > 0) {
            console.log('shareAgingReport InvoiceListingPage');
            var body_1 = [];
            // body.push(['Date', 'Type', 'Invoice No.', 'Overdue By Days', 'Status', 'Amount']);
            body_1.push(['Date', 'Type', 'Due Date', 'Invoice No.', 'Overdue By Days', 'Amount']);
            this.invoicesListing.forEach(function (invoice) {
                body_1.push([
                    new __WEBPACK_IMPORTED_MODULE_12__angular_common__["d" /* DatePipe */](__WEBPACK_IMPORTED_MODULE_4__providers_constants_constants__["a" /* ConstantsProvider */].APP_DATE_LOCALE).transform(invoice.invoiceDate, __WEBPACK_IMPORTED_MODULE_4__providers_constants_constants__["a" /* ConstantsProvider */].REPORTS_DATE_FORMAT),
                    invoice.type, invoice.dueDate, invoice.invoiceNo,
                    (invoice.dueDateInDays + '').indexOf("-") > -1 ? (invoice.dueDateInDays + '').replace("-", "") : '-' + invoice.dueDateInDays,
                    invoice.grossTotal
                ]);
                // invoice.isPaid == 'O' ? 'Open' : 'Close', invoice.grossTotal]);
            });
            body_1.push(['', '', '', '', 'Total', this.totalInvoiceBalance]);
            var agingPeriod = '';
            if (this.noOfDays != '-360') {
                agingPeriod = '>' + (Number.parseInt(this.noOfDays.replace('-', '')) - 30) + ' Days';
            }
            else if (this.noOfDays == '-360') {
                agingPeriod = '121+ Days';
            }
            var datePeriod = new __WEBPACK_IMPORTED_MODULE_12__angular_common__["d" /* DatePipe */](__WEBPACK_IMPORTED_MODULE_4__providers_constants_constants__["a" /* ConstantsProvider */].APP_DATE_LOCALE).transform(this.fromDate, __WEBPACK_IMPORTED_MODULE_4__providers_constants_constants__["a" /* ConstantsProvider */].REPORTS_DATE_FORMAT)
                + ' | ' + agingPeriod;
            var docDefinition = this.commonUtility.getDocDefination('Aging Report', datePeriod, '', this.customer.customerDetails.cardName, body_1);
            this.pdfObj = __WEBPACK_IMPORTED_MODULE_10_pdfmake_build_pdfmake___default.a.createPdf(docDefinition);
            this.downloadPdf('JBSAgingReport_' + this.customer.customerDetails.cardName + '.pdf');
        }
        else {
            this.commonUtility.presentToast('No Aging Records Found', 5000);
        }
    };
    InvoicesListingPage.prototype.createLedgerPdfAndShare = function () {
        // alert('Creating Ledger PDF And Sharing');
        var body = [];
        // body.push(['Date', 'Due Date', 'Type', 'Invoice No.', 'Status', 'Balance']);
        // body.push(['', '', 'Opening Balance', '', '', this.ledgerOpeningBalance]);
        body.push(['Date', 'Due Date', 'Type', 'Invoice No.', 'Balance']);
        body.push(['', '', 'Opening Balance', '', this.ledgerOpeningBalance]);
        this.ledgerInvoiceList.forEach(function (ledgerInvoice) {
            if (ledgerInvoice.type != 'OB') {
                body.push([new __WEBPACK_IMPORTED_MODULE_12__angular_common__["d" /* DatePipe */]('en-US').transform(ledgerInvoice.invoiceDate),
                    new __WEBPACK_IMPORTED_MODULE_12__angular_common__["d" /* DatePipe */]('en-US').transform(ledgerInvoice.dueDate), ledgerInvoice.type,
                    ledgerInvoice.invoiceNo == '0' ? '' : ledgerInvoice.invoiceNo,
                    // ledgerInvoice.invoiceNo == '0' ? '' : ledgerInvoice.invoiceNo , ledgerInvoice.isPaid == 'O' ? 'Open' : 'Close',
                    ledgerInvoice.grossTotal]);
            }
        });
        // body.push(['', '', '', '', 'Total', this.totalLedgerInvoiceBalance]);
        body.push(['', '', '', 'Total', this.totalLedgerInvoiceBalance]);
        // alert(JSON.stringify(body));
        /*    let docDefinition = this.commonUtility.getDocDefination('Ledger Report', '01 Apr 19 - 31 Mar 20',
              this.invoicesListing[0].invoiceItemsList[0].partyCity, this.customer.customerDetails.cardName, body);*/
        var docDefinition = this.commonUtility.getDocDefination('Ledger Report', '01 Apr 19 - 31 Mar 20', '', this.customer.customerDetails.cardName, body);
        this.pdfObj = __WEBPACK_IMPORTED_MODULE_10_pdfmake_build_pdfmake___default.a.createPdf(docDefinition);
        this.downloadPdf('JBSLedgerReport_' + this.customer.customerDetails.cardName + '.pdf');
    };
    InvoicesListingPage.prototype.downloadPdf = function (fileName) {
        var _this = this;
        this.pdfObj.getBuffer(function (buffer) {
            var blob = new Blob([buffer], { type: 'application/pdf' });
            // Save the PDF to the data Directory of our App
            _this.file.writeFile(_this.file.dataDirectory, fileName, blob, { replace: true }).then(function (fileEntry) {
                // Open the PDf with the correct OS tools
                // this.fileOpener.open(this.file.dataDirectory + fileName, 'application/pdf');
                _this.pdf = _this.file.dataDirectory + fileName;
                _this.share();
            });
        });
    };
    InvoicesListingPage.prototype.share = function () {
        //alert('Sharing Message');
        this.socialSharing.share(this.shareMessage, this.shareSubject, this.pdf, null).then(function () {
            // alert('Successfully Shared The File');
        }).catch(function (e) {
            alert('Error : ' + JSON.stringify(e));
        });
    };
    InvoicesListingPage.prototype.callCust = function () {
        console.log('Calling Customer on : ' + this.customer.customerDetails.cellular);
        this.commonUtility.callNumber(this.customer.customerDetails.cellular, true);
    };
    InvoicesListingPage.prototype.viewCustInfo = function () {
        var customerDetailsModal = this.modal.create(__WEBPACK_IMPORTED_MODULE_13__customer_details_customer_details__["a" /* CustomerDetailsPage */], {
            customer: this.customer,
            isModalData: true
        });
        customerDetailsModal.present();
    };
    InvoicesListingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-invoices-listing',template:/*ion-inline-start:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\invoices-listing\invoices-listing.html"*/'<!--\n  Generated template for the InvoicesListingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navbar" text-center>\n    <ion-title>Invoice Listing</ion-title>\n\n    <!-- <ion-buttons end>\n\n      <button (click)="downloadAgingReport()" ion-button item-end style="background-color: #1c2431; font-size: 20px;">\n        <ion-icon name="ios-cloud-download-outline" color="primary"></ion-icon>\n      </button>\n\n      <button ion-button item-end (click)="presentPopover($event)" style="background-color: #1c2431; font-size: 20px;">\n        <ion-icon name="md-more"></ion-icon>\n      </button>\n\n    </ion-buttons> -->\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding>\n\n  <ion-row padding>\n    <ion-col col-12 text-center>\n      <strong>{{customer.customerDetails.cardCode}} - {{customer.customerDetails.cardName}}</strong>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-row>\n    <ion-col col-4></ion-col>\n    <ion-col style="font-size:1.3em" col-2 (click)="callCust()" *ngIf="customer.customerDetails.cellular != null && customer.customerDetails.cellular != \'\'">\n      <ion-icon name="md-call"></ion-icon>\n    </ion-col>\n    <ion-col style="font-size:1.3em" col-2 (click)="viewCustInfo()">\n      <ion-icon name="ios-information-circle-outline"></ion-icon>\n    </ion-col>\n    <ion-col col-4></ion-col>\n  </ion-row>\n\n  <ion-row padding>\n    <ion-col col-12 text-center>\n      <strong><span style="font-size:4rem;"><i class="fa fa-rupee"></i> {{agingAmount}}</span></strong>\n      <!-- <p style="color:#AFAFAF;font-size: 10px;">(Balance As Of {{fromDate | date: \'dd MMM yyyy\'}})</p> -->\n      <p style="color:#AFAFAF;font-size: 10px;" *ngIf="noOfDays == \'-30\'">(Balance As Of {{fromDate | date: \'dd MMM\n        yy\'}} | >0 Days)</p>\n      <p style="color:#AFAFAF;font-size: 10px;" *ngIf="noOfDays == \'-60\'">(Balance As Of {{fromDate | date: \'dd MMM\n        yy\'}} | >30 Days)</p>\n      <p style="color:#AFAFAF;font-size: 10px;" *ngIf="noOfDays == \'-90\'">(Balance As Of {{fromDate | date: \'dd MMM\n        yy\'}} | >60 Days)</p>\n      <p style="color:#AFAFAF;font-size: 10px;" *ngIf="noOfDays == \'-120\'">(Balance As Of {{fromDate | date: \'dd MMM\n        yy\'}} | >90 Days)</p>\n      <p style="color:#AFAFAF;font-size: 10px;" *ngIf="noOfDays == \'-360\'">(Balance As Of {{fromDate | date: \'dd MMM\n        yy\'}} | 121+ Days)</p>\n    </ion-col>\n  </ion-row>\n\n  <ion-row style="margin-bottom:2%;">\n    <ion-col col-8 class="pj-full-width-border" no-margin>\n      <ion-label>Invoices</ion-label>\n    </ion-col>\n    <ion-col col-2 class="pj-full-width-border" no-margin>\n      <button (click)="createAgingPDFAndShare()" ion-button item-end style="background-color: #1c2431; font-size: 18px;">\n        <ion-icon name="share" color="primary"></ion-icon>\n      </button>\n    </ion-col>\n    <ion-col col-2 class="pj-full-width-border" no-margin>\n      <button (click)="downloadAgingReport()" ion-button item-end style="background-color: #1c2431; font-size: 18px;">\n        <ion-icon name="ios-cloud-download-outline" color="primary"></ion-icon>\n      </button>\n    </ion-col>\n  </ion-row>\n\n  <!-- <ion-card *ngIf="openingBalanceInvoice != null">\n    <ion-card-content>\n      <ion-row>\n        <ion-col col-12 text-center color="primary">\n          <strong>Opening Balance</strong>\n          <p style="color:#AFAFAF;font-size: 15px;">{{openingBalanceInvoice.grossTotal}}</p>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card> -->\n\n  <ion-list>\n    <button color="bgcolor" ion-item *ngFor="let invoice of invoicesListing" (click)="showInvoiceDetails(invoice)">\n      <ion-row>\n        <ion-col col-9>\n          <p color="light"><strong>{{invoice.invoiceNo}}</strong></p>\n          <span *ngIf="invoice.invoiceItemsList != null" style="font-size:10px; color:#AFAFAF">{{invoice.invoiceDate |\n            date: \'dd MMM\'}} |\n            {{invoice.dueDateInDays}} Days | Due: {{invoice.dueDate | date: \'dd MMM\'}}</span>\n          <span *ngIf="invoice.invoiceItemsList == null" style="font-size:10px; color:#AFAFAF">{{invoice.invoiceDate |\n            date: \'dd MMM\'}}</span>\n        </ion-col>\n        <ion-col col-3>\n          <p><i class="fa fa-rupee"></i>{{invoice.grossTotal}}</p>\n          <!-- <p *ngIf="invoice.isPaid != \'O\' && invoice.type == \'A/R Inv\'" class="pj-paid-inv"><i class="fa fa-rupee"></i>\n            {{invoice.grossTotal}}</p>\n          <p *ngIf="invoice.isPaid == \'O\' && invoice.type == \'A/R Inv\'" class="pj-unpaid-inv"><i class="fa fa-rupee"></i>\n            {{invoice.grossTotal}}</p>\n          <p *ngIf="invoice.type != \'A/R Inv\'"><i class="fa fa-rupee"></i> {{invoice.grossTotal}}</p> -->\n          <span class="pj-bill-status">{{invoice.type}}</span>\n        </ion-col>\n      </ion-row>\n    </button>\n  </ion-list>\n\n  <div id="pdfDivLedger" style="display:none">\n    <!-- <div class="pdfDiv"> -->\n    <div text-center>\n      <h4>JAGTAP BUILDING SOLUTIONS</h4>\n      <p>Asthavinayak Soc, Opp Bharat Jyoti Stop,</p>\n      <p>Bibwewadi , Pune - 411037</p>\n      <p>Tel No. : (O) 24216162, 9822610611</p>\n      <p>Phone no. : 02024216162</p>\n      <p>Pin code : 411037</p>\n      <p>GSTIN : 27AFJPJ8271L1ZV</p>\n      <p>E-Mail : jagtapbsolutions@gmail.com</p>\n    </div>\n\n    <div style="margin:5% 0;" text-center>\n      <p>{{customer.customerDetails.cardName}}</p>\n      <!-- <p *ngIf="null != invoicesListing && invoicesListing.length > 0 && invoicesListing[0].invoiceItemsList.length != null">{{invoicesListing[0].invoiceItemsList[0].partyCity}}</p> -->\n    </div>\n\n    <div text-center>\n      <p>Ledger Report</p>\n      <p>01 Apr 19 - 31 Mar 20</p>\n      <p>Date {{currentDate | date: \'dd MMM yy\'}}</p>\n    </div>\n\n    <div style="margin-top:5%">\n\n      <table style="border:1px solid #000;border-collapse: collapse; width:100%;">\n        <tr>\n          <td style="border:1px solid #000;">\n            Date\n          </td>\n          <td style="border:1px solid #000;">\n            Due Date\n          </td>\n          <td style="border:1px solid #000;">\n            Type\n          </td>\n          <td style="border:1px solid #000;">\n            Invoice No.\n          </td>\n          <!-- <td style="border:1px solid #000;">\n            Status\n          </td> -->\n          <td style="border:1px solid #000;">\n            Balance\n          </td>\n        </tr>\n        <tr>\n          <td style="border:1px solid #000;">\n          </td>\n          <td style="border:1px solid #000;">\n          </td>\n          <td style="border:1px solid #000;">\n            Opening Balance\n          </td>\n          <td style="border:1px solid #000;">\n          </td>\n          <td style="border:1px solid #000;">\n          </td>\n          <td style="border:1px solid #000;">\n            {{ledgerOpeningBalance}}\n          </td>\n        </tr>\n        <tr *ngFor="let ledgerInvoice of ledgerInvoiceList">\n          <td style="border:1px solid #000;">\n            {{ledgerInvoice.invoiceDate | date : \'dd MMM yy\'}}\n          </td>\n          <td style="border:1px solid #000;">\n            {{ledgerInvoice.dueDate | date : \'dd MMM yy\'}}\n          </td>\n          <td style="border:1px solid #000;">\n            {{ledgerInvoice.type}}\n          </td>\n          <td style="border:1px solid #000;">\n            {{ledgerInvoice.invoiceNo}}\n          </td>\n          <!-- <td style="border:1px solid #000;">\n            {{ledgerInvoice.isPaid == \'O\' ? \'Open\' : \'Close\' }}\n          </td> -->\n          <td style="border:1px solid #000;">\n            {{ledgerInvoice.grossTotal}}\n          </td>\n        </tr>\n\n        <tr>\n          <td colspan=4>\n            Total\n          </td>\n          <td>\n            {{totalLedgerInvoiceBalance}}\n          </td>\n        </tr>\n      </table>\n    </div>\n  </div>\n\n\n  <div id="pdfDivAging" style="display:none">\n    <!-- <div class="pdfDiv"> -->\n    <div text-center>\n      <h4>JAGTAP BUILDING SOLUTIONS</h4>\n      <p>Asthavinayak Soc, Opp Bharat Jyoti Stop,</p>\n      <p>Bibwewadi , Pune - 411037</p>\n      <p>Tel No. : (O) 24216162, 9822610611</p>\n      <p>Phone no. : 02024216162</p>\n      <p>Pin code : 411037</p>\n      <p>GSTIN : 27AFJPJ8271L1ZV</p>\n      <p>E-Mail : jagtapbsolutions@gmail.com</p>\n    </div>\n\n    <div style="margin:5% 0;" text-center>\n      <p>{{customer.customerDetails.cardName}}</p>\n      <!-- <p *ngIf="null != invoicesListing && invoicesListing.length > 0">{{invoicesListing[0].invoiceItemsList[0].partyCity}}</p> -->\n    </div>\n\n    <div text-center>\n      <p>Aging Report</p>\n      <p *ngIf="noOfDays == \'-30\'">{{fromDate | date: \'dd MMM yy\'}} | >0 Days</p>\n      <p *ngIf="noOfDays == \'-60\'">{{fromDate | date: \'dd MMM yy\'}} | >30 Days</p>\n      <p *ngIf="noOfDays == \'-90\'">{{fromDate | date: \'dd MMM yy\'}} | >60 Days</p>\n      <p *ngIf="noOfDays == \'-120\'">{{fromDate | date: \'dd MMM yy\'}} | >120 Days</p>\n      <p *ngIf="noOfDays == \'-360\'">{{fromDate | date: \'dd MMM yy\'}} | 121+ Days</p>\n      <p>Date {{currentDate | date: \'dd MMM yy\'}}</p>\n    </div>\n\n    <div style="margin-top:5%">\n\n      <table style="border:1px solid #000;border-collapse: collapse; width:100%;">\n        <tr>\n          <td style="border:1px solid #000;">\n            Date\n          </td>\n          <td style="border:1px solid #000;">\n            Type\n          </td>\n          <td style="border:1px solid #000;">\n            Invoice No.\n          </td>\n          <td style="border:1px solid #000;">\n            Overdue By Days\n          </td>\n          <!-- <td style="border:1px solid #000;">\n            Status\n          </td> -->\n          <td style="border:1px solid #000;">\n            Amount\n          </td>\n        </tr>\n        <tr *ngFor="let invoice of invoicesListing">\n          <td style="border:1px solid #000;">\n            {{invoice.invoiceDate | date: \'dd MMM yyyy\'}}\n          </td>\n          <td style="border:1px solid #000;">\n            {{invoice.type }}\n          </td>\n          <td style="border:1px solid #000;">\n            {{invoice.invoiceNo }}\n          </td>\n          <td style="border:1px solid #000;">\n            {{(invoice.dueDateInDays + \'\').indexOf("-") > -1 ?\n            (invoice.dueDateInDays + \'\').replace("-", "") : \'-\' + invoice.dueDateInDays}}\n            <!-- {{invoice.dueDateInDays}} -->\n          </td>\n          <!-- <td style="border:1px solid #000;">\n            {{invoice.isPaid == \'O\' ? \'Open\' : \'Close\' }}\n          </td> -->\n          <td style="border:1px solid #000;">\n            {{invoice.grossTotal}}\n          </td>\n        </tr>\n\n        <tr>\n          <td colspan=4 style="border:1px solid #000;">\n            Total\n          </td>\n          <td style="border:1px solid #000;">\n            {{totalInvoiceBalance}}\n          </td>\n        </tr>\n      </table>\n    </div>\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\invoices-listing\invoices-listing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_restservice_restservice__["a" /* RestserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_common_utility_common_utility__["a" /* CommonUtilityProvider */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_opener__["a" /* FileOpener */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]])
    ], InvoicesListingPage);
    return InvoicesListingPage;
}());

//# sourceMappingURL=invoices-listing.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export OrderDetails */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common_utility_common_utility__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_constants_constants__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_restservice_restservice__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the OrderDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderDetails = /** @class */ (function () {
    function OrderDetails() {
        this.orderPrefix = "OR";
        this.transNet = 0;
        this.transTaxPerc = 0;
        this.transTaxVal = 0;
        this.transTaxGross = 0;
        this.pnfNet = 0;
        this.pnfTaxPerc = 0;
        this.pnfTaxVal = 0;
        this.pnfTaxGross = 0;
        this.freightNet = 0;
        this.freightTaxPerc = 0;
        this.freightTaxVal = 0;
        this.freightTaxGross = 0;
        this.subTotal = 0;
        this.totalTax = 0;
        this.grandTotal = 0;
        this.discount = 0;
        this.orderItemsList = [];
    }
    return OrderDetails;
}());

var OrderDetailsPage = /** @class */ (function () {
    function OrderDetailsPage(navCtrl, navParams, commonUtility, 
        // public http: HttpClient) {
        restService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.commonUtility = commonUtility;
        this.restService = restService;
        // orderDetails: OrderDetails = new OrderDetails();
        this.orderDetails = {};
        this.orderItems = [];
        this.showToast = false;
        // super(ConstantsProvider.API_ENDPOINT_ORDERS, commonUtility, http, null);
        this.orderDtlsId = this.navParams.get("orderDtlsId");
        this.passedOrderDtls = this.navParams.get('orderDtls');
        // this.getById(this.orderDtlsId)
        //   .subscribe(
        //   (response) => {
        //     console.log('Response = ' + JSON.stringify(response));
        //     this.orderDetails = response.response.orderDtls;
        //     this.extractCustomerData(response.response.orderDtls.custDtl);
        //     this.orderDetails.areaText = this.commonUtility.getAreaNameByAreaDtlsId(this.orderDetails.areaId);
        //     this.orderDetails.cityText = this.commonUtility.getCityNameDtlByCityId(this.orderDetails.cityId);
        //     this.orderDetails.stateText = this.commonUtility.getStateNameDtlByStateId(this.orderDetails.stateId);
        //     this.orderDetails.createdByName = this.orderDetails.createdBy == null ? '' : this.orderDetails.createdBy.firstName + ' ' + this.orderDetails.createdBy.lastName
        //     console.log('Area Name = ' + this.orderDetails.areaText + ", City Text = " + this.orderDetails.cityText +
        //       ', State = ' + this.orderDetails.stateText + ', created By = ' + this.orderDetails.createdByName)
        //     console.log('Order Details = ' + JSON.stringify(this.orderDetails));
        //     this.orderItems = response.response.orderItemDtlList;
        //     console.log('Order Items = ' + JSON.stringify(this.orderItems));
        //     this.toastMessage = this.navParams.get('toastMessage');
        //     this.showToast = this.navParams.get("showToast");
        //     if (this.showToast) {
        //       this.commonUtility.presentToast(this.toastMessage, 3000);
        //     }
        //   }
        //   );
        var orderDetailsApiEndpoint = __WEBPACK_IMPORTED_MODULE_3__providers_constants_constants__["a" /* ConstantsProvider */].API_BASE_URL +
            __WEBPACK_IMPORTED_MODULE_3__providers_constants_constants__["a" /* ConstantsProvider */].API_ENDPOINT_ORDERS + __WEBPACK_IMPORTED_MODULE_3__providers_constants_constants__["a" /* ConstantsProvider */].URL_SEPARATOR + this.orderDtlsId;
        this.restService.getDetails(orderDetailsApiEndpoint)
            .subscribe(function (response) {
            console.log('Order Details = ' + JSON.stringify(response));
            _this.orderDetails = response.response;
            _this.orderItems = _this.orderDetails.orderItemsList;
        });
        // //Dummy Data
        //   this.orderItems.push({
        //     discount: 0,
        //     grandTotal: 100,
        //     itemDesc: 'This is a test Description for the item',
        //     itemDtlsId: 0,
        //     itemNo: 'ITM001',
        //     itemQty: 9,
        //     itemUom: 'KG',
        //     reqDt: '1537018561000',
        //     subTotal: 90,
        //     taxValue: 10,
        //     unitPrice: 10 
        //   },
        //   {
        //     discount: 0,
        //     grandTotal: 100,
        //     itemDesc: 'This is a test Description for the item',
        //     itemDtlsId: 0,
        //     itemNo: 'ITM002',
        //     itemQty: 9,
        //     itemUom: 'KG',
        //     reqDt: '1537018561000',
        //     subTotal: 90,
        //     taxValue: 10,
        //     unitPrice: 10 
        //   });
        // this.orderDetails = {
        //   orderDtlsId : this.orderDtlsId,
        //   orderPrefix: 'OR',
        //   orderNo : '001',
        //   quotationPrefix : 'QR',
        //   quotationNo : '001',
        //   enquiryNo : '001',
        //   orderDtls : {
        //     orderPrefix : 'OR',
        //     orderNo : '001'
        //   },
        //   custNo : '',
        //   custGSTNo : '27MAHPIYUSH',
        //   custNm : 'Piyush Jadhav',
        //   custEmail : 'piyush.jadhav@repleteinc.com',
        //   cntcPerNm : 'Piyush Jadhav',
        //   cntcPerNo : '9096409749',
        //   addrNm : 'Addr Name',
        //   stAddr : 'Job Site Street Address',
        //   landmark : 'Job Site Landmark',
        //   areaId : 1,
        //   areaText : 'jobSiteAreaText',
        //   cityId : 1,
        //   cityText : 'jobSiteCityText',
        //   stateId : 1,
        //   stateText : 'jobSiteStateText',
        //   custDtlsId : 'sjds78wey97wvew97weruy239',
        //   freightNet : 200,
        //   freightTaxGross : 220,
        //   freightTaxPerc : 10,
        //   freightTaxVal : 20,
        //   pnfNet : 200,
        //   pnfTaxGross : 220,
        //   pnfTaxPerc : 10,
        //   pnfTaxVal : 20,
        //   transNet : 200,
        //   transTaxGross : 220,
        //   transTaxPerc : 10,
        //   transTaxVal : 20,
        //   subTotal : 2000,
        //   totalTax : 500,
        //   grandTotal : 2500,
        //   discount : 0,
        //   validity : '1537018561000',
        //   isActive : 1,
        //   createdTs : '1537018561000'
        // };
    }
    OrderDetailsPage.prototype.extractCustomerData = function (custData) {
        this.orderDetails.custDtlsId = custData.userDtlsId;
        // this.orderDetails.custEmail = custData.emailId;
        this.orderDetails.custGSTNo = custData.gstin;
        this.orderDetails.custNm = custData.firstName + ' ' + custData.lastName;
        this.orderDetails.custNo = custData.userPrefix + custData.userCode;
    };
    OrderDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EnquiryDetailsPage');
    };
    OrderDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-order-details',template:/*ion-inline-start:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\order-details\order-details.html"*/'<!--\n  Generated template for the OrderDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="navbar">\n        <ion-title text-center>Order Details</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding>\n\n    <ion-card>\n        <ion-card-content>\n\n            <ion-row>\n                <ion-col col-6>\n                    <!-- <p class="pj-card-label-primary">{{ orderDetails.orderPrefix }}{{ orderDetails.orderNo }}</p> -->\n                    <p>{{ orderDetails.docNum }} </p>\n                </ion-col>\n                <!-- <ion-col col-6>\n                    <p class="pj-date-and-status" style="color: #ccc;">\n                        {{ orderDetails.createdTs | date: \'dd MMM yyyy H:mm a\' }}\n                    </p>\n                </ion-col> -->\n            </ion-row>\n\n            <!-- <ion-row>\n                <ion-col col-6>\n                    <p class="pj-card-label-primary">Quotation No</p>\n                    <p class="pj-card-label-primary">{{ orderDetails.quotationPrefix }}{{ orderDetails.quotationNo }}</p>\n                </ion-col>\n                <ion-col col-6>\n                    <p class="pj-card-label-primary">Customer No*</p>\n                    <p class="pj-card-label-light" *ngIf="orderDetails.custNo != null || orderDetails.custNo != \'\'">{{ orderDetails.custNo }}</p>\n                    <p class="pj-card-label-light" *ngIf="orderDetails.custNo == null || orderDetails.custNo == \'\'">Unregistered Customer</p>\n                </ion-col>\n            </ion-row> -->\n\n            <ion-row>\n                <ion-col col-12>\n                    <p>{{orderDetails.cardCode}} - {{ orderDetails.cardName }}</p>\n                </ion-col>\n            </ion-row>\n\n            <!-- Sale Order Quantity Details -->\n            <ion-row>\n                <ion-col col-8 class="semidark-color-imp">\n                    <p>Sales Order Qty</p>\n                    <p>Sales Order Opening Qty</p>\n                    <p>Sales Order Delivery Qty</p>\n                    <p>Sales Order Pending Qty</p>\n                </ion-col>\n                <ion-col col-4 class="semidark-color-imp">\n                    <p>{{ orderDetails.quantity }}</p>\n                    <p>{{ orderDetails.openQuantity }}</p>\n                    <p>{{ orderDetails.deliveredQuantity }}</p>\n                    <p>{{ orderDetails.openQuantity }}</p>\n                </ion-col>\n            </ion-row>\n\n            <!-- <ion-row>\n                <ion-col col-8 class="pj-card-label-light">\n                    Sales Order Opening Qty\n                </ion-col>\n                <ion-col col-4 class="pj-sub-title">\n                    500 Cum\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-col col-6>\n                    Sales Order Delivery Qty\n                </ion-col>\n                <ion-col col-6>\n                    50 Cum\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-col col-6>\n                    Sales Order Pending Qty\n                </ion-col>\n                <ion-col col-6>\n                    450 Cum\n                </ion-col>\n            </ion-row> -->\n\n            <!-- \n            <ion-row>\n                <ion-col col-12>\n                    <p class="pj-card-label-primary">GST No.*</p>\n                    <p class="pj-card-label-light">{{ orderDetails.custGSTNo}}</p>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-col col-8>\n                    <p class="pj-card-label-primary">Contact Person</p>\n                    <p class="pj-card-label-light">{{ orderDetails.cntcPerNm }}</p>\n                </ion-col>\n                <ion-col col-4>\n                    <p class="pj-card-label-primary">Contact No.*</p>\n                    <p class="pj-card-label-light">{{ orderDetails.cntcPerNo }}</p>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-col col-12>\n                    <p class="pj-card-label-primary">Customer Email*</p>\n                    <p class="pj-card-label-light">{{ orderDetails.custEmail }}</p>\n                </ion-col>\n            </ion-row> \n-->\n\n            <!-- Delivery Address -->\n            <ion-row>\n                <ion-col col-12 text-center class="pj-underline-heading">\n                    Delivery Address\n                </ion-col>\n            </ion-row>\n\n            <ion-row center>\n\n                <div>\n                    <!-- <ion-row>\n                        <ion-col col-12>\n                            <h3 class="pj-card-label-light">{{ orderDetails.addrNm }}</h3>\n                        </ion-col>\n                    </ion-row> -->\n                    <ion-row>\n                        <ion-col col-12 class="semidark-color-imp">\n                            <!-- <h4 class="pj-sub-title">{{ orderDetails.stAddr }}, {{ orderDetails.landmark }}, {{\n                                orderDetails.areaText }}, {{ orderDetails.cityText\n                                }}, {{ orderDetails.stateText }}\n                            </h4> -->\n                            {{ orderDetails.shipToCode }}\n                        </ion-col>\n                    </ion-row>\n                </div>\n\n            </ion-row>\n            <!-- ./Delivery Address -->\n\n            <!--Billing Details-->\n            <!-- <ion-row class="pj-underline-title">\n                <ion-col col-12>\n                    <h4>Billing Details</h4>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-col col-6>\n                    <p class="pj-sub-title">SubTotal</p>\n                </ion-col>\n                <ion-col col-6>\n                    <p class="pj-sub-title">Rs. {{orderDetails.subTotal}}</p>\n                </ion-col>\n                <ion-col col-6>\n                    <p class="pj-sub-title">Total Taxes</p>\n                </ion-col>\n                <ion-col col-6>\n                    <p class="pj-sub-title">Rs. {{orderDetails.totalTax}}</p>\n                </ion-col>\n                <ion-col col-6>\n                    <p class="pj-sub-title">Total Discount</p>\n                </ion-col>\n                <ion-col col-6>\n                    <p class="pj-sub-title">Rs. {{orderDetails.discount}}</p>\n                </ion-col>\n                <ion-col col-6>\n                    <p class="pj-sub-title">Grand Total</p>\n                </ion-col>\n                <ion-col col-6>\n                    <p class="pj-sub-title">Rs. {{orderDetails.grandTotal}}</p>\n                </ion-col>\n            </ion-row> -->\n            <!--Billing Details-->\n\n\n            <ion-row class="pj-underline-heading">\n                <ion-col col-10>\n                    Order Items\n                </ion-col>\n            </ion-row>\n\n\n            <div *ngIf="orderItems.length==0" class="pj-empty-page">\n                <ion-icon name="ios-cart-outline"></ion-icon>\n                <h4>No Item Added To Show</h4>\n            </div>\n\n            <ion-row>\n                <ion-col col-12>\n                    <ion-list>\n\n                        <button color="dark" ion-item *ngFor="let orderItem of orderItems; let i of index">\n                            <ion-row>\n                                <ion-col col-12>\n                                    <!-- <h4 class="pj-card-label-primary">{{ orderItem.itemDtlsId.itemNo }} - {{\n                                        (orderItem.itemDtlsId.itemName == \'\' || orderItem.itemDtlsId.itemName == null)\n                                        ? \'Description Not Available\' : orderItem.itemDtlsId.itemName }}</h4> -->\n                                    {{ orderItem.itemCode }} - {{ orderItem.dscription }}\n                                </ion-col>\n                            </ion-row>\n                            <!-- <ion-row>\n                                <ion-col col-12>\n                                    <h3 class="pj-label-level-2">Grade</h3>\n                                    <p class="pj-sub-title">{{ (orderItem.itemDtlsId.itemName == \'\' || orderItem.itemDtlsId.itemName == null) ? \'Description Not Available\' : orderItem.itemDtlsId.itemName }}</p>\n                                </ion-col>\n                            </ion-row> -->\n\n                            <ion-row>\n                                <ion-col col-8>\n                                    <p>Required Qty</p>\n                                    <p>Delivered Qty</p>\n                                    <p>Pending Qty</p>\n                                </ion-col>\n                                <ion-col col-4>\n                                    <p>{{ orderItem.quantity }}</p>\n                                    <p>{{ orderItem.delivrdQty }}</p>\n                                    <p>{{ orderItem.openQty }}</p>\n                                </ion-col>\n                            </ion-row>\n\n                            <!-- <ion-row>\n                                <ion-col col-6>\n                                    <h3 class="pj-label-level-2">Quantity</h3>\n                                </ion-col>\n                                <ion-col col-6>\n                                    <p class="pj-sub-title">{{ orderItem.quantity }} {{ orderItem.itemDtlsId.uom }}</p>\n                                </ion-col>\n                            </ion-row>\n                            <ion-row>\n                                <ion-col col-12>\n                                    <h3 class="pj-sub-title">Rs. {{ orderItem.grandTotal }}</h3>\n                                </ion-col>\n                            </ion-row> -->\n                            <!-- <ion-icon name="ios-arrow-forward" color="primary" item-end></ion-icon> -->\n                        </button>\n\n                    </ion-list>\n\n                </ion-col>\n            </ion-row>\n            <!--<ion-card *ngFor="let orderItem of orderItems; let i of index">\n\n                <ion-card-header>\n\n                    <ion-row>\n                        <ion-col col-8>\n                            <h3 class="pj-title">\n                                {{ orderItem.itemDtlsId.itemNo }}\n                            </h3>\n                        </ion-col>\n                    </ion-row>\n\n                </ion-card-header>\n\n                <ion-card-content>\n\n                    <ion-row>\n                        <ion-col col-12>\n                            <p class="pj-title">Item Description</p>\n                            <p class="pj-sub-title">{{ orderItem.itemDtlsId.itemDesc }}</p>\n                        </ion-col>\n                    </ion-row>\n\n                    <ion-row>\n                        <ion-col col-12>\n                            <p class="pj-title">Required Date - <span class="pj-sub-title">{{ orderItem.reqDate | date: \'dd MMM yyyy\' }}</span></p>\n                        </ion-col>\n                    </ion-row>\n\n                    <ion-row>\n                        <ion-col col-6>\n                            <p class="pj-title">Quantity - <span class="pj-sub-title">{{ orderItem.quantity }} {{ orderItem.itemDtlsId.uom }}</span></p>\n                        </ion-col>\n                        <ion-col col-6>\n                            <p class="pj-title">Unit Price - <span class="pj-sub-title">{{ orderItem.unitPrice }}</span></p>\n                        </ion-col>\n                    </ion-row>\n\n                    <ion-row>\n                        <ion-col col-6>\n                            <p class="pj-title">Sub Total - <span class="pj-sub-title">{{ orderItem.subTotal }}</span></p>\n                        </ion-col>\n                        <ion-col col-6>\n                            <p class="pj-title">Tax (Rs.) - <span class="pj-sub-title">{{ orderItem.taxValue }}</span></p>\n                        </ion-col>\n                    </ion-row>\n\n                    <ion-row>\n                        <ion-col col-6>\n                            <p class="pj-title">Discount - <span class="pj-sub-title">{{ orderItem.discount }}</span></p>\n                        </ion-col>\n                        <ion-col col-6>\n                            <p class="pj-title">Total (Rs.) - <span class="pj-sub-title">{{ orderItem.grandTotal }}</span></p>\n                        </ion-col>\n                    </ion-row>\n\n                </ion-card-content>\n            </ion-card>-->\n\n        </ion-card-content>\n    </ion-card>\n\n    <!--<ion-fab bottom right>\n        <button class="add-button" color="primary" ion-fab (click)="naviagteToOrderUpdatePage()">\n          <ion-icon name="create"></ion-icon>\n      </button>\n    </ion-fab>-->\n\n</ion-content>'/*ion-inline-end:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\order-details\order-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_common_utility_common_utility__["a" /* CommonUtilityProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_restservice_restservice__["a" /* RestserviceProvider */]])
    ], OrderDetailsPage);
    return OrderDetailsPage;
}());

//# sourceMappingURL=order-details.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_restservice_restservice__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_constants_constants__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_add_item_modal_add_item__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_utility_common_utility__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__order_mgmt_order_mgmt__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the OrderAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderAddPage = /** @class */ (function () {
    function OrderAddPage(navCtrl, navParams, restService, modal, commonUtility) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restService = restService;
        this.modal = modal;
        this.commonUtility = commonUtility;
        this.custAddress = null;
        this.orderItemsList = [];
        this.itemsList = [];
        this.customer = this.navParams.get('customer');
        console.log('Customer = ' + JSON.stringify(this.customer));
        var itemsListApiEndpoint = __WEBPACK_IMPORTED_MODULE_3__providers_constants_constants__["a" /* ConstantsProvider */].API_BASE_URL
            + __WEBPACK_IMPORTED_MODULE_3__providers_constants_constants__["a" /* ConstantsProvider */].API_ENDPOINT_ITEM_DTLS;
        this.restService.getDetails(itemsListApiEndpoint)
            .subscribe(function (response) {
            console.log('Items List = ' + JSON.stringify(response.response));
            _this.itemsList = response.response;
        });
        // this.populateDummyData();
    }
    OrderAddPage.prototype.populateDummyData = function () {
        this.itemsList.push({
            itemCode: 'ITM001',
            itemName: 'Itm Dscrption One'
        }, {
            itemCode: 'ITM002',
            itemName: 'Itm Dscrption Two'
        });
    };
    OrderAddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderAddPage');
    };
    OrderAddPage.prototype.addOrderItem = function () {
        console.log('addOrderItem OrderAddPage');
        this.createOrderItemModal(true, null);
    };
    OrderAddPage.prototype.createOrderItemModal = function (isAddOperation, itemData) {
        var _this = this;
        var orderItemModal = this.modal.create(__WEBPACK_IMPORTED_MODULE_4__modal_add_item_modal_add_item__["a" /* ModalAddItemPage */], {
            isAddOperation: isAddOperation,
            itemData: itemData,
            itemsList: this.itemsList
        });
        orderItemModal.present();
        orderItemModal.onDidDismiss(function (addOrderItemModalData) {
            console.log('Data = ' + JSON.stringify(addOrderItemModalData));
            if (addOrderItemModalData.isAdded) {
                console.log('isAdded = ' + addOrderItemModalData.isAdded + ' so going ahead');
                console.log('isAddOperation = ' + addOrderItemModalData.isAddOperation);
                if (addOrderItemModalData.isAddOperation) {
                    _this.orderItemsList.push(addOrderItemModalData.itemData);
                    console.log('this.orderItemsList added = ' + JSON.stringify(_this.orderItemsList));
                }
                else {
                    var index = _this.orderItemsList.indexOf(itemData);
                    if (index > -1)
                        _this.orderItemsList[index] = addOrderItemModalData.itemData;
                }
            }
        });
    };
    OrderAddPage.prototype.createOrder = function () {
        var _this = this;
        console.log('custAddress = ' + this.custAddress
            + ', Order Items = ' + JSON.stringify(this.orderItemsList));
        if (this.custAddress == null || this.orderItemsList.length <= 0)
            this.commonUtility.presentErrorToast('Please provide required details');
        else {
            var orderData = {
                cardCode: this.customer.customerDetails.cardCode,
                cardName: this.customer.customerDetails.cardName,
                shipToCode: this.customer.customerAddressesList[this.custAddress].address,
                itemsList: this.orderItemsList
            };
            console.log('orderData = ' + JSON.stringify(orderData));
            var orderApiEndpoint = __WEBPACK_IMPORTED_MODULE_3__providers_constants_constants__["a" /* ConstantsProvider */].API_BASE_URL + __WEBPACK_IMPORTED_MODULE_3__providers_constants_constants__["a" /* ConstantsProvider */].API_ENDPOINT_ORDERS;
            if (this.commonUtility.isNetworkAvailable()) {
                this.restService.postDetails(orderApiEndpoint, orderData)
                    .subscribe(function (response) {
                    console.log('Response = ' + JSON.stringify(response.response));
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__order_mgmt_order_mgmt__["a" /* OrderMgmtPage */]);
                    _this.commonUtility.presentToast('Successfully Booked Order', 5000);
                });
            }
        }
    };
    OrderAddPage.prototype.removeOrderItem = function (orderItem) {
        var index = this.orderItemsList.indexOf(orderItem);
        if (index > -1)
            this.orderItemsList.splice(index, 1);
    };
    OrderAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-order-add',template:/*ion-inline-start:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\order-add\order-add.html"*/'<!--\n  Generated template for the OrderAddPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navbar">\n    <ion-title text-center>Order Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <!-- Customer Basic Details -->\n  <!-- <ion-card>\n\n    <ion-card-header> -->\n  <ion-row>\n    <ion-col col-12 text-center>\n      <strong>{{customer.customerDetails.cardCode}} - {{customer.customerDetails.cardName}}</strong>\n    </ion-col>\n  </ion-row>\n  <!-- </ion-card-header>\n\n    <ion-card-content> -->\n\n  <ion-row padding class="semidark-color-imp" style="margin-top:5%;">\n    <ion-col col-5>\n      Contact No.\n    </ion-col>\n    <ion-col col-7>\n      {{customer.customerDetails.cellular == null || customer.customerDetails.cellular == \'\' ? \'Not Available\' :\n      customer.customerDetails.cellular }}\n    </ion-col>\n  </ion-row>\n\n  <ion-row padding class="semidark-color-imp">\n    <ion-col col-12>\n      Email\n      <br /><br />\n      {{customer.customerDetails.eMail == null || customer.customerDetails.eMail == \'\' ? \'Not Available\' :\n      customer.customerDetails.eMail }}\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-12 text-center style="border-bottom: 1px solid #FFCB08; margin-top: 5%;">\n      Shipping Addresses\n    </ion-col>\n  </ion-row>\n\n  <ion-row no-padding>\n    <ion-col col-12>\n      <ion-list radio-group [(ngModel)]="custAddress">\n        <ion-item *ngFor="let custAddressObj of customer.customerAddressesList; let i = index">\n          <ion-radio [value]="i"></ion-radio>\n          <ion-label>{{custAddressObj.street == null ? \'\' : (custAddressObj.street + \', \')}}\n            {{custAddressObj.address2 == null ? \'\' : (custAddressObj.address2 + \', \')}}\n            {{custAddressObj.address3 == null ? \'\' : (custAddressObj.address3 + \', \')}}\n            {{custAddressObj.city}}\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n\n  <ion-row style="border-bottom: 1px solid #FFCB08; margin-top: 5%;">\n    <ion-col col-10>\n      Order Items\n    </ion-col>\n    <ion-col col-1 (click)="addOrderItem()">\n      <ion-icon name="ios-add-circle" color="primary"></ion-icon>\n    </ion-col>\n  </ion-row>\n\n  <div *ngIf="orderItemsList.length==0" class="pj-empty-page">\n    <ion-icon name="ios-contact-outline"></ion-icon>\n    <h4>No Order Items To Show</h4>\n  </div>\n\n  <ion-row *ngIf="orderItemsList.length > 0">\n    <ion-col col-12>\n\n      <ion-card *ngFor="let orderItem of orderItemsList">\n\n        <ion-card-content>\n\n          <ion-row>\n            <ion-col col-12>\n              {{orderItem.itemCode}} - {{orderItem.itemName}}\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-10>\n              Quantity - {{orderItem.qty}}\n            </ion-col>\n            <ion-col col-2 text-center>\n              <button icon-only ion-button clear (click)="removeOrderItem(orderItem)">\n                <ion-icon ios="ios-close-circle" md="md-close-circle" color="danger"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-12>\n      <button ion-button class="pj-button" type="button" (click)="createOrder()">PLACE ORDER</button>\n    </ion-col>\n  </ion-row>\n\n</ion-content>'/*ion-inline-end:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\order-add\order-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_restservice_restservice__["a" /* RestserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common_utility_common_utility__["a" /* CommonUtilityProvider */]])
    ], OrderAddPage);
    return OrderAddPage;
}());

//# sourceMappingURL=order-add.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalAddItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_utility_common_utility__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ModalAddItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalAddItemPage = /** @class */ (function () {
    function ModalAddItemPage(navCtrl, navParams, formBuilder, view, commonUtility) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.view = view;
        this.commonUtility = commonUtility;
        this.itemData = null;
        this.itemsList = [];
        this.itemSelected = '';
        this.qty = 0;
        this.itemsList = this.navParams.get('itemsList');
        this.itemSelected = this.navParams.get('itemData');
        this.isAddOperation = this.navParams.get('isAddOperation');
        if (null != this.itemSelected)
            this.qty = this.itemSelected.qty;
        else {
            this.itemSelected = {
                itemCode: '',
                itemName: ''
            };
        }
    }
    ModalAddItemPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalAddItemPage');
    };
    ModalAddItemPage.prototype.dismissModal = function () {
        var modalData = {
            isAdded: false
        };
        this.view.dismiss(modalData);
    };
    ModalAddItemPage.prototype.addItem = function () {
        if (this.itemSelected == null || this.itemSelected.itemCode == '' || this.qty <= 0) {
            this.commonUtility.presentErrorToast('Please Fill Valid Details');
        }
        else {
            this.intializeItemData();
            this.itemData.itemCode = this.itemSelected.itemCode;
            this.itemData.itemName = this.itemSelected.itemName;
            this.itemData.qty = this.qty;
            var addItemModalData = {
                itemData: this.itemData,
                isAddOperation: this.isAddOperation,
                isAdded: true,
            };
            this.view.dismiss(addItemModalData);
        }
    };
    ModalAddItemPage.prototype.intializeItemData = function () {
        if (null == this.itemData) {
            this.itemData = {
                itemCode: '',
                itemName: '',
                qty: 0
            };
        }
    };
    ModalAddItemPage.prototype.itemChange = function (event) {
        var selectedItem = event.value;
        console.log('selectedItem = ', selectedItem);
    };
    ModalAddItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-add-item',template:/*ion-inline-start:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\modal-add-item\modal-add-item.html"*/'<!--\n  Generated template for the ModalAddItemPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navbar">\n    <ion-title>Item Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-row>\n    <ion-col col-12 color="bgcolor">\n      <ion-item>\n        <ion-label>Item</ion-label>\n        <!-- <ionic-selectable item-content [canSearch]="true" name="itemSelected" [(ngModel)]="itemSelected" [items]="itemsList"\n          itemValueField="itemCode" itemTextField="itemName" (onChange)="itemChange($event)" [ngModelOptions]="{standalone : true}">\n        </ionic-selectable> -->\n        <ionic-selectable item-content [canSearch]="true" name="itemSelected" [(ngModel)]="itemSelected" [items]="itemsList"\n          itemValueField="itemCode" itemTextField="itemName" [ngModelOptions]="{standalone : true}">\n        </ionic-selectable>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-12>\n      <ion-item class="pj-card-floating-label">\n        <ion-label floating>Quantity*</ion-label>\n        <ion-input type="number" [(ngModel)]="qty"></ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-row>\n    <ion-col col-6>\n      <button ion-button class="pj-button-danger" type="button" (click)="dismissModal()">CANCEL</button>\n    </ion-col>\n    <ion-col col-6>\n      <button ion-button class="pj-button" type="button" (click)="addItem()">SAVE</button>\n    </ion-col>\n  </ion-row>\n\n</ion-content>'/*ion-inline-end:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\modal-add-item\modal-add-item.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_utility_common_utility__["a" /* CommonUtilityProvider */]])
    ], ModalAddItemPage);
    return ModalAddItemPage;
}());

//# sourceMappingURL=modal-add-item.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersBookedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_restservice_restservice__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_constants_constants__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the OrdersBookedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrdersBookedPage = /** @class */ (function () {
    function OrdersBookedPage(navCtrl, navParams, restService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restService = restService;
        this.bookedOrdersList = [];
        var bookedOrderApiEndPoint = __WEBPACK_IMPORTED_MODULE_3__providers_constants_constants__["a" /* ConstantsProvider */].API_BASE_URL + __WEBPACK_IMPORTED_MODULE_3__providers_constants_constants__["a" /* ConstantsProvider */].API_ENDPOINT_ORDERS
            + __WEBPACK_IMPORTED_MODULE_3__providers_constants_constants__["a" /* ConstantsProvider */].URL_SEPARATOR + __WEBPACK_IMPORTED_MODULE_3__providers_constants_constants__["a" /* ConstantsProvider */].API_ENDPOINT_BOOKED_ORDERS;
        this.restService.getDetails(bookedOrderApiEndPoint)
            .subscribe(function (response) {
            console.log('Response = ' + JSON.stringify(response.response));
            _this.bookedOrdersList = response.response;
        });
        // this.bookedOrdersList.push({
        //   appOrderId: 1,
        //   cardCode: 'S001',
        //   cardName: 'Piyush Jadhav',
        //   shipToCode: 'Test Address',
        //   createdTs: '152645012',
        //   itemsList: [{
        //     itemCode: 'ITM001',
        //     itemName: 'RMC-001',
        //     qty: 1
        //   },
        //   {
        //     itemCode: 'ITM002',
        //     itemName: 'RMC-002',
        //     qty: 12
        //   }]
        // }, {
        //     appOrderId: 2,
        //     cardCode: 'NR005',
        //     cardName: 'Sanket Jadhav',
        //     shipToCode: 'Test Address 2',
        //     createdTs: '152645012',
        //     itemsList: [{
        //       itemCode: 'ITM001',
        //       itemName: 'RMC-001',
        //       qty: 1
        //     },
        //     {
        //       itemCode: 'ITM002',
        //       itemName: 'RMC-002',
        //       qty: 12
        //     }]
        //   });
    }
    OrdersBookedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrdersBookedPage');
    };
    OrdersBookedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-orders-booked',template:/*ion-inline-start:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\orders-booked\orders-booked.html"*/'<!--\n  Generated template for the OrdersBookedPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navbar">\n\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title text-center>Booked Orders</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content no-padding>\n\n  <!-- <ion-searchbar [(ngModel)]="myInput" (ionChange)="onInput()" placeholder="Search By Customer Name, Order No.">\n  </ion-searchbar> -->\n\n  <div *ngIf="bookedOrdersList.length==0" class="pj-empty-page" style="margin-top: 40%;">\n    <ion-icon name="ios-cart-outline"></ion-icon>\n    <h4>No Booked Orders To Show</h4>\n  </div>\n\n  <ion-card *ngFor="let orderDetails of bookedOrdersList">\n\n    <ion-card-header>\n      <ion-row>\n        <ion-col col-4>\n          <strong>{{ orderDetails.appOrdrId }} </strong>\n        </ion-col>\n        <ion-col col-8>\n          <p class="pj-date-and-status" style="color: #ccc;">\n            {{ orderDetails.createdTs | date: \'dd MMM yyyy hh:mm a\' }}\n          </p>\n        </ion-col>\n      </ion-row>\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-row>\n        <ion-col col-12>\n          <strong>{{ orderDetails.cardCode }} - {{ orderDetails.cardName }}</strong>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="orderDetails.itemsList.length > 0">\n        <h4 class="order-items">Order Items</h4>\n        <ion-col col-12 *ngFor="let items of orderDetails.itemsList">\n          <!-- <p style="border-bottom: 1px solid #cececc; color: #fff;"> -->\n          <p class="pj-date-and-status" style="color: #ccc; float: left; \n          border-bottom: 1px solid #555;width: 100%; padding-bottom: 6px;">\n            {{items.itemCode }} - {{items.itemName}} <br />Quantity - {{items.qty}}\n          </p>\n        </ion-col>\n      </ion-row>\n\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\orders-booked\orders-booked.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_restservice_restservice__["a" /* RestserviceProvider */]])
    ], OrdersBookedPage);
    return OrdersBookedPage;
}());

//# sourceMappingURL=orders-booked.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendingInvoicesFilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pending_invoices_pending_invoices__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_utility_common_utility__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PendingInvoicesFilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PendingInvoicesFilterPage = /** @class */ (function () {
    function PendingInvoicesFilterPage(navCtrl, navParams, commonUtility) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.commonUtility = commonUtility;
        this.fromDate = '2019-04-01';
        this.currentDate = new Date().toISOString();
        this.toDate = new Date().toISOString();
        this.customer = {};
        this.customer = this.navParams.get('customer');
    }
    PendingInvoicesFilterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PendingInvoicesFilterPage');
    };
    PendingInvoicesFilterPage.prototype.showPendingInvoices = function () {
        console.log('fromDate = ' + this.fromDate + ', toDate = ' + this.toDate);
        if (this.commonUtility.isNetworkAvailable()) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pending_invoices_pending_invoices__["a" /* PendingInvoicesPage */], {
                fromDate: this.fromDate,
                toDate: this.toDate,
                customer: this.customer
            });
        }
    };
    PendingInvoicesFilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pending-invoices-filter',template:/*ion-inline-start:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\pending-invoices-filter\pending-invoices-filter.html"*/'<!--\n  Generated template for the PendingInvoicesFilterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navbar" text-center>\n    <ion-title>Pending Invoices Filter</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-row>\n    <ion-col col-12>\n      <ion-item class="pj-card-floating-label">\n        <ion-label floating>From Date*</ion-label>\n        <ion-datetime [(ngModel)]="fromDate" [max]="currentDate" displayFormat="DD-MMM-YYYY"></ion-datetime>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-12>\n      <ion-item class="pj-card-floating-label">\n        <ion-label floating>To Date*</ion-label>\n        <ion-datetime [(ngModel)]="toDate" [max]="currentDate" displayFormat="DD-MMM-YYYY"></ion-datetime>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-row>\n    <ion-col col-12 padding>\n      <button ion-button class="pj-button" type="submit" (click)="showPendingInvoices()">APPLY FILTERS</button>\n    </ion-col>\n  </ion-row>\n\n</ion-content>'/*ion-inline-end:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\pending-invoices-filter\pending-invoices-filter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_utility_common_utility__["a" /* CommonUtilityProvider */]])
    ], PendingInvoicesFilterPage);
    return PendingInvoicesFilterPage;
}());

//# sourceMappingURL=pending-invoices-filter.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendingInvoicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_restservice_restservice__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_constants_constants__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_utility_common_utility__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_opener__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_pdfmake_build_pdfmake__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_pdfmake_build_pdfmake___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_pdfmake_build_pdfmake__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_pdfmake_build_vfs_fonts__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_pdfmake_build_vfs_fonts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_pdfmake_build_vfs_fonts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











__WEBPACK_IMPORTED_MODULE_8_pdfmake_build_pdfmake___default.a.vfs = __WEBPACK_IMPORTED_MODULE_9_pdfmake_build_vfs_fonts___default.a.pdfMake.vfs;
/**
 * Generated class for the PendingInvoicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PendingInvoicesPage = /** @class */ (function () {
    function PendingInvoicesPage(navCtrl, navParams, restService, commonUtility, file, fileOpener, socialSharing) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restService = restService;
        this.commonUtility = commonUtility;
        this.file = file;
        this.fileOpener = fileOpener;
        this.socialSharing = socialSharing;
        this.pendingInvoicesList = [];
        this.pdfObj = null;
        this.openingBalance = 0;
        this.fromDate = this.navParams.get('fromDate');
        this.toDate = this.navParams.get('toDate');
        this.customer = this.navParams.get('customer');
        var pendingInvoicesApiEndpoint = __WEBPACK_IMPORTED_MODULE_3__providers_constants_constants__["a" /* ConstantsProvider */].API_BASE_URL + __WEBPACK_IMPORTED_MODULE_3__providers_constants_constants__["a" /* ConstantsProvider */].API_ENDPOINT_CUST_DTLS
            + __WEBPACK_IMPORTED_MODULE_3__providers_constants_constants__["a" /* ConstantsProvider */].URL_SEPARATOR + this.customer.customerDetails.cardCode
            + __WEBPACK_IMPORTED_MODULE_3__providers_constants_constants__["a" /* ConstantsProvider */].URL_SEPARATOR + __WEBPACK_IMPORTED_MODULE_3__providers_constants_constants__["a" /* ConstantsProvider */].API_ENDPOINT_PENDING_INVOICES
            + '?from-date=' + this.fromDate + '&to-date=' + this.toDate;
        this.restService.getDetails(pendingInvoicesApiEndpoint)
            .subscribe(function (response) {
            console.log('Pending Invoices = ' + JSON.stringify(response.response));
            _this.pendingInvoicesList = response.response;
            var indexToSplice = null;
            _this.pendingInvoicesList.forEach(function (pendingInvoice) {
                if (undefined != pendingInvoice.ob && pendingInvoice.ob != null && pendingInvoice.ob > 0) {
                    _this.openingBalance = Number.parseFloat(pendingInvoice.ob);
                    indexToSplice = _this.pendingInvoicesList.indexOf(pendingInvoice);
                }
            });
            console.log('indexToSplice = ' + indexToSplice);
            if (null != indexToSplice)
                _this.pendingInvoicesList.splice(indexToSplice, 1);
        });
    }
    PendingInvoicesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PendingInvoicesPage');
    };
    PendingInvoicesPage.prototype.showInvoiceDetails = function (invoice) {
        console.log('showInvoiceDetails');
    };
    PendingInvoicesPage.prototype.createPendingInvoicesPDFAndShare = function () {
        console.log('createPendingInvoicesPDFAndShare PendingInvoicesPage');
        var body = [];
        body.push(['Date', 'Ref No.', 'Credit Days', 'Billing Overdue Days', 'Opening Amt.',
            'Pending Amt.', 'Due On', 'Overdue By Days']);
        var openingAmountTotal = 0;
        var pendingAmountTotal = 0;
        body.push(['', '', '', 'Opening Balance', this.openingBalance, '', '', '']);
        this.pendingInvoicesList.forEach(function (pendingInvoice) {
            body.push([new __WEBPACK_IMPORTED_MODULE_10__angular_common__["d" /* DatePipe */]('en-US').transform(pendingInvoice.invDate, 'dd-MMM-yyyy'),
                pendingInvoice.refNo, pendingInvoice.dueDateOrCreditDays, pendingInvoice.overDueForBilling,
                pendingInvoice.openingAmount, pendingInvoice.pendingAmount,
                new __WEBPACK_IMPORTED_MODULE_10__angular_common__["d" /* DatePipe */]('en-US').transform(pendingInvoice.dueOn, 'dd-MMM-yyyy'), pendingInvoice.overDueDays]);
            openingAmountTotal = openingAmountTotal + Number.parseFloat(pendingInvoice.openingAmount);
            pendingAmountTotal = pendingAmountTotal + Number.parseFloat(pendingInvoice.pendingAmount);
        });
        body.push(['', '', '', '', openingAmountTotal, pendingAmountTotal,
            '', '']);
        var docDefinition = this.commonUtility.getDocDefinationPendingInvoices('Pending Invoices Report', new __WEBPACK_IMPORTED_MODULE_10__angular_common__["d" /* DatePipe */]('en-US').transform(this.fromDate, 'dd-MMM-yyyy') + ' To '
            + new __WEBPACK_IMPORTED_MODULE_10__angular_common__["d" /* DatePipe */]('en-US').transform(this.toDate, 'dd-MMM-yyyy'), '', this.customer.customerDetails.cardName, body, pendingAmountTotal);
        this.pdfObj = __WEBPACK_IMPORTED_MODULE_8_pdfmake_build_pdfmake___default.a.createPdf(docDefinition);
        this.downloadPdf('JBSPendingInvoicesReport_' + this.customer.customerDetails.cardName + '.pdf');
    };
    PendingInvoicesPage.prototype.downloadPdf = function (fileName) {
        var _this = this;
        this.pdfObj.getBuffer(function (buffer) {
            var blob = new Blob([buffer], { type: 'application/pdf' });
            // Save the PDF to the data Directory of our App
            _this.file.writeFile(_this.file.dataDirectory, fileName, blob, { replace: true }).then(function (fileEntry) {
                // Open the PDf with the correct OS tools
                // this.fileOpener.open(this.file.dataDirectory + fileName, 'application/pdf');
                _this.pdf = _this.file.dataDirectory + fileName;
                _this.share();
            });
        });
    };
    PendingInvoicesPage.prototype.share = function () {
        //alert('Sharing Message');
        this.socialSharing.share('', '', this.pdf, null).then(function () {
            // alert('Successfully Shared The File');
        }).catch(function (e) {
            alert('Error : ' + JSON.stringify(e));
        });
    };
    PendingInvoicesPage.prototype.callCust = function (custContactNumber) {
        console.log('Calling Customer on : ' + custContactNumber);
        this.commonUtility.callNumber(custContactNumber, true);
    };
    PendingInvoicesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pending-invoices',template:/*ion-inline-start:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\pending-invoices\pending-invoices.html"*/'<!--\n  Generated template for the PendingInvoicesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navbar" text-center>\n    <ion-title>Pending Invoices</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding>\n\n  <!-- Customer Basic Details -->\n  <ion-card>\n\n    <ion-card-header>\n      <ion-row>\n        <ion-col col-12>\n          <strong>{{customer.customerDetails.cardCode}} - {{customer.customerDetails.cardName}}</strong>\n        </ion-col>\n      </ion-row>\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-row>\n        <ion-col col-12>\n          Contact No.\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf="customer.customerDetails.cellular != null && customer.customerDetails.cellular != \'\'">\n        <ion-col col-11>\n          {{customer.customerDetails.cellular}}\n        </ion-col>\n        <ion-col col-1 color="primary" (click)="callCust(customer.customerDetails.cellular)">\n          <ion-icon name="md-call"></ion-icon>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="customer.customerDetails.phone1 != null && customer.customerDetails.phone1 != \'\'">\n        <ion-col col-11>\n          {{customer.customerDetails.phone1}}\n        </ion-col>\n        <ion-col col-1 color="primary" (click)="callCust(customer.customerDetails.phone1)">\n          <ion-icon name="md-call"></ion-icon>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="customer.customerDetails.phone2 != null && customer.customerDetails.phone2 != \'\'">\n        <ion-col col-11>\n          {{customer.customerDetails.phone2}}\n        </ion-col>\n        <ion-col col-1 color="primary" (click)="callCust(customer.customerDetails.phone2)">\n          <ion-icon name="md-call"></ion-icon>\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row>\n        <ion-col col-5>\n          Email\n        </ion-col>\n        <ion-col col-7>\n          {{customer.customerDetails.eMail == null || customer.customerDetails.eMail == \'\' ? \'Not Available\' :\n          customer.customerDetails.eMail }}\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-5>\n          Balance\n        </ion-col>\n        <ion-col col-7>\n          {{customer.customerDetails.balance == null || customer.customerDetails.balance == \'\' ? \'Not Available\' :\n          customer.customerDetails.balance }}\n        </ion-col>\n      </ion-row>\n\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-row style="margin-bottom:2%;">\n    <ion-col col-10 class="pj-full-width-border" no-margin>\n      <ion-label>Invoices</ion-label>\n    </ion-col>\n    <ion-col col-2 class="pj-full-width-border" no-margin>\n      <button (click)="createPendingInvoicesPDFAndShare()" ion-button item-end style="background-color: #1c2431; font-size: 18px;">\n        <ion-icon name="share" color="primary"></ion-icon>\n      </button>\n    </ion-col>\n    <!-- <ion-col col-2 class="pj-full-width-border" no-margin>\n        <button (click)="downloadPendingInvoicesPDFAndShare()" ion-button item-end style="background-color: #1c2431; font-size: 18px;">\n          <ion-icon name="ios-cloud-download-outline" color="primary"></ion-icon>\n        </button>\n      </ion-col> -->\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-12 text-center>\n      <strong>\n        <ion-label color="primary">{{fromDate | date : \'dd MMM yy\'}} To {{toDate | date : \'dd MMM yy\'}}</ion-label>\n      </strong>\n    </ion-col>\n  </ion-row>\n\n  <ion-card>\n    <ion-card-content>\n      <ion-row>\n        <ion-col col-12 text-center color="primary">\n          <strong>Opening Balance</strong>\n          <p style="color:#AFAFAF;font-size: 15px;">{{openingBalance}}</p>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-list>\n    <button color="bgcolor" ion-item *ngFor="let invoice of pendingInvoicesList">\n      <ion-row>\n        <ion-col col-9>\n          <p color="light"><strong>{{invoice.refNo}}</strong></p>\n          <span style="font-size:10px; color:#AFAFAF">\n            {{invoice.invDate | date: \'dd MMM\'}} | {{invoice.overDueForBilling}} Days | Due: {{invoice.dueOn | date:\n            \'dd MMM\'}}</span>\n        </ion-col>\n        <ion-col col-3>\n          <p><i class="fa fa-rupee"></i>{{invoice.pendingAmount}}</p>\n          <!-- <span class="pj-bill-status">{{invoice.type}}</span> -->\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          <p color="light"><strong>Opening Amount</strong></p>\n        </ion-col>\n        <ion-col col-6>\n          <p color="light"><strong>{{invoice.openingAmount}}</strong></p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          <p color="light"><strong>Credit Days</strong></p>\n        </ion-col>\n        <ion-col col-6>\n          <p color="light"><strong>{{invoice.dueDateOrCreditDays}}</strong></p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          <p color="light"><strong>Billing Overdue Days</strong></p>\n        </ion-col>\n        <ion-col col-6>\n          <p color="light"><strong>{{invoice.overDueForBilling}}</strong></p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          <p color="light"><strong>Overdue Days</strong></p>\n        </ion-col>\n        <ion-col col-6>\n          <p color="light"><strong>{{invoice.overDueDays}}</strong></p>\n        </ion-col>\n      </ion-row>\n    </button>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\pending-invoices\pending-invoices.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_restservice_restservice__["a" /* RestserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_common_utility_common_utility__["a" /* CommonUtilityProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_opener__["a" /* FileOpener */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], PendingInvoicesPage);
    return PendingInvoicesPage;
}());

//# sourceMappingURL=pending-invoices.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalLedgerOptionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ModalLedgerOptionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalLedgerOptionsPage = /** @class */ (function () {
    function ModalLedgerOptionsPage(navCtrl, navParams, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.optionSelected = '';
    }
    ModalLedgerOptionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalLedgerOptionsPage');
    };
    ModalLedgerOptionsPage.prototype.dismissModal = function () {
        var modalData = {
            isAdded: false
        };
        this.view.dismiss(modalData);
    };
    ModalLedgerOptionsPage.prototype.sendSelection = function (optionSelected) {
        console.log('Selected Option = ' + optionSelected);
        var modalData = {
            isAdded: true,
            optionSelected: optionSelected
        };
        this.view.dismiss(modalData);
    };
    ModalLedgerOptionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-ledger-options',template:/*ion-inline-start:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\modal-ledger-options\modal-ledger-options.html"*/'<!--\n  Generated template for the ModalLedgerOptionsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content no-padding style="background: rgba(0,0,0,0.7) !important">\n\n  <ion-row style="    background: #1c2431; padding: 6% 0; margin: 88% 5% 0 5%; font-weight: bold;">\n    <ion-col col-6 (click)="sendSelection(\'Share\')" style="border-right: 1px solid #f9c60a85;" text-center>\n      <ion-icon name="share" style="font-size: 5em;"></ion-icon><br />\n      Share Ledger\n    </ion-col>\n    <ion-col col-6 (click)="sendSelection(\'Print\')" text-center>\n      <ion-icon name="ios-document-outline" style="font-size: 5em"></ion-icon><br />\n      Print Ledger\n    </ion-col>\n  </ion-row>\n\n\n  <ion-fab bottom center (click)="dismissModal()">\n    <button color="primary" ion-fab>\n      <ion-icon name="ios-arrow-round-forward-outline"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\modal-ledger-options\modal-ledger-options.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */]])
    ], ModalLedgerOptionsPage);
    return ModalLedgerOptionsPage;
}());

//# sourceMappingURL=modal-ledger-options.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LedgerListingDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common_utility_common_utility__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment_timezone__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment_timezone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_constants_constants__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_opener__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_pdfmake_build_pdfmake__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_pdfmake_build_pdfmake___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_pdfmake_build_pdfmake__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_pdfmake_build_vfs_fonts__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_pdfmake_build_vfs_fonts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_pdfmake_build_vfs_fonts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__invoice_details_invoice_details__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ledger_date_selection_ledger_date_selection__ = __webpack_require__(240);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












__WEBPACK_IMPORTED_MODULE_8_pdfmake_build_pdfmake___default.a.vfs = __WEBPACK_IMPORTED_MODULE_9_pdfmake_build_vfs_fonts___default.a.pdfMake.vfs;
/**
 * Generated class for the LedgerListingDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LedgerListingDetailsPage = /** @class */ (function () {
    function LedgerListingDetailsPage(navCtrl, navParams, commonUtility, file, fileOpener, socialSharing, alertCtrl, modalController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.commonUtility = commonUtility;
        this.file = file;
        this.fileOpener = fileOpener;
        this.socialSharing = socialSharing;
        this.alertCtrl = alertCtrl;
        this.modalController = modalController;
        this.momentjs = __WEBPACK_IMPORTED_MODULE_3_moment_timezone__;
        this.totalLedgerBalanceDue = 0;
        this.ledgerInvoiceList = [];
        this.originalLedgerInvoiceList = [];
        this.customer = {
            customerDetails: {}
        };
        this.totalDebitBalance = 0;
        this.totalCreditBalance = 0;
        this.fromDate = '2019-04-01';
        this.tillDate = '2020-03-31';
        this.currDate = new Date().toISOString();
        this.imgPath = '';
        this.currentSortOrder = 0;
        this.pdfObj = null;
        this.imgPath = cordova.file.applicationDirectory + 'www/' + __WEBPACK_IMPORTED_MODULE_4__providers_constants_constants__["a" /* ConstantsProvider */].CONFIG_DS_IMG_PATH;
    }
    LedgerListingDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LedgerListingDetailsPage');
        // this.ledgerInvoiceList = this.navParams.get('ledgerInvoiceList');
        // this.originalLedgerInvoiceList = this.navParams.get('ledgerInvoiceList');
        // console.log('this.originalLedgerInvoiceList = ' + JSON.stringify(this.originalLedgerInvoiceList));
        // this.customer = this.navParams.get('customer');
        // this.updateLedgerList();
    };
    LedgerListingDetailsPage.prototype.ionViewDidEnter = function () {
        this.ledgerInvoiceList = this.navParams.get('ledgerInvoiceList');
        this.originalLedgerInvoiceList = this.navParams.get('ledgerInvoiceList');
        this.customer = this.navParams.get('customer');
        this.updateLedgerList();
    };
    LedgerListingDetailsPage.prototype.updateLedgerList = function () {
        var _this = this;
        this.totalCreditBalance = 0;
        this.totalDebitBalance = 0;
        var sortedList = [];
        if (null != this.originalLedgerInvoiceList && this.originalLedgerInvoiceList.length > 0) {
            this.originalLedgerInvoiceList.forEach(function (invoice) {
                console.log('invoiceDate = ' + invoice.invoiceDate + ', fromDate = ' + _this.fromDate + ', tillDate = ' + _this.tillDate);
                if (invoice.invoiceDate >= _this.fromDate && invoice.invoiceDate <= _this.tillDate) {
                    console.log("Pass: " + JSON.stringify('Invoice no = ' + invoice.invoiceNo));
                    sortedList.push(invoice);
                    _this.totalDebitBalance = _this.totalDebitBalance + Number.parseFloat(invoice.debit);
                    _this.totalCreditBalance = _this.totalCreditBalance + Number.parseFloat(invoice.credit);
                }
            });
        }
        this.ledgerInvoiceList = [];
        this.ledgerInvoiceList = sortedList;
        this.totalLedgerBalanceDue = Number.parseFloat((this.totalDebitBalance - this.totalCreditBalance).toFixed(2));
    };
    LedgerListingDetailsPage.prototype.downloadLedgerReport = function () {
        console.log('downloadLedgerReport InvoiceListingPage');
        this.updateLedgerList();
        setTimeout(function () {
            var page = document.getElementById('pdfDivLedger');
            cordova.plugins.printer.print(page, 'Ledger_Report.pdf');
        }, 2000);
    };
    LedgerListingDetailsPage.prototype.createLedgerPdfAndShare = function () {
        // alert('Creating Ledger PDF And Sharing');
        var _this = this;
        this.updateLedgerList();
        var body = [];
        body.push(['Post. Date', 'Trans.', 'Ref2', 'Source', 'Debit', 'Credit']);
        this.ledgerInvoiceList.forEach(function (ledgerInvoice) {
            body.push([
                _this.momentjs(ledgerInvoice.invoiceDate).format('DD MMM YYYY'),
                ledgerInvoice.transId, ledgerInvoice.ref2, ledgerInvoice.type,
                ledgerInvoice.debit == 0 ? '' : ledgerInvoice.debit,
                ledgerInvoice.credit == 0 ? '' : ledgerInvoice.credit
            ]);
            // ledgerInvoice.cumulativeBalance, ledgerInvoice.grossTotal]);
        });
        body.push(['', '', '', { text: 'Total', bold: true }, { text: this.totalDebitBalance.toFixed(2), bold: true }, { text: this.totalCreditBalance.toFixed(2), bold: true }]);
        body.push(['', '', '', { text: 'Total Due Balance', bold: true }, { text: (this.totalDebitBalance - this.totalCreditBalance).toFixed(2), colSpan: 2, bold: true }]);
        var docDefinition = this.commonUtility.getDocDefination('Ledger Report', this.momentjs(this.fromDate).format('DD MMM YYYY') + ' - ' + this.momentjs(this.tillDate).format('DD MMM YYYY'), '', this.customer.customerDetails.cardName, body);
        this.pdfObj = __WEBPACK_IMPORTED_MODULE_8_pdfmake_build_pdfmake___default.a.createPdf(docDefinition);
        this.downloadPdf('JBSLedgerReport_' + this.customer.customerDetails.cardName + '.pdf');
    };
    LedgerListingDetailsPage.prototype.downloadPdf = function (fileName) {
        var _this = this;
        console.log('Getting Buffer');
        this.pdfObj.getBuffer(function (buffer) {
            var blob = new Blob([buffer], { type: 'application/pdf' });
            // Save the PDF to the data Directory of our App
            console.log('Saving PDF, Data Directory = ' + _this.file.dataDirectory + ', fileName = ' + fileName);
            _this.file.writeFile(_this.file.dataDirectory, fileName, blob, { replace: true }).then(function (fileEntry) {
                // Open the PDf with the correct OS tools
                // this.fileOpener.open(this.file.dataDirectory + fileName, 'application/pdf');
                console.log('PDF Assigning');
                _this.pdf = _this.file.dataDirectory + fileName;
                console.log('Sharing PDF');
                _this.share();
            })
                .catch(function (e) {
                console.log('Error = ' + JSON.stringify(e));
            });
        });
    };
    LedgerListingDetailsPage.prototype.share = function () {
        //alert('Sharing Message');
        this.socialSharing.share("", "", this.pdf, null).then(function () {
            console.log('Shared PDF');
            // alert('Successfully Shared The File');
        }).catch(function (e) {
            alert('Error : ' + JSON.stringify(e));
        });
    };
    LedgerListingDetailsPage.prototype.showInvoiceDetails = function (invoice) {
        console.log('showInvoiceDetails CustomerDetailsPage');
        // console.log('invoice.invoiceItemsList = ' + invoice.invoiceItemsList);
        if (invoice.type == 'IN') {
            console.log('Navigating to Invoice Deatils Page');
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__invoice_details_invoice_details__["a" /* InvoiceDetailsPage */], {
                customer: this.customer,
                fromDate: this.tillDate,
                invoice: invoice
            });
        }
        else {
            var mssgToDisplay = 'This is an ' + invoice.type + ' type Entry and does not have any order items associated with it.';
            var alert_1 = this.alertCtrl.create({
                title: 'General Entry',
                subTitle: mssgToDisplay,
                buttons: ['OK']
            });
            alert_1.present();
        }
    };
    LedgerListingDetailsPage.prototype.openLedgerDateSelectionCriteria = function () {
        var _this = this;
        console.log('openLedgerDateSelectionCriteria Clicked');
        var ledgerDateSelectionModal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_11__ledger_date_selection_ledger_date_selection__["a" /* LedgerDateSelectionPage */], {
            fromDate: this.fromDate,
            tillDate: this.tillDate
        });
        ledgerDateSelectionModal.present();
        ledgerDateSelectionModal.onDidDismiss(function (ledgerDateSelectionData) {
            if (ledgerDateSelectionData.isAdded) {
                _this.fromDate = ledgerDateSelectionData.fromDate;
                _this.tillDate = ledgerDateSelectionData.tillDate;
                _this.updateLedgerList();
            }
        });
    };
    LedgerListingDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ledger-listing-details',template:/*ion-inline-start:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\ledger-listing-details\ledger-listing-details.html"*/'<!--\n  Generated template for the LedgerListingDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navbar" text-center>\n    <ion-title>Ledger Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content no-padding>\n\n  <!-- Customer Basic Details -->\n  <ion-card no-margin style="width:100%;">\n\n    <ion-card-header>\n      <ion-row>\n        <ion-col col-12 text-center>\n          <strong>{{customer.customerDetails.cardCode}} - {{customer.customerDetails.cardName}}</strong>\n        </ion-col>\n      </ion-row>\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-row>\n        <ion-col col-12 text-center>\n          <span style="font-size:4rem;">\n            <strong>\n              <i class="fa fa-rupee"></i>\n              {{ totalLedgerBalanceDue }}\n            </strong>\n          </span>\n          <p style="color:#E4EBED;font-size:10px;">( Total Ledger Balance )</p>\n        </ion-col>\n      </ion-row>\n\n    </ion-card-content>\n  </ion-card>\n\n  <!-- Customer All Invoices List-->\n  <ion-row style="margin-bottom:0%;">\n    <ion-col col-6 class="pj-full-width-border" no-margin>\n      <button ion-button (click)="createLedgerPdfAndShare()" style="background-color: #1c2431; font-size: 20px; color:#E4EBED;">\n        <ion-icon name="share"></ion-icon>\n      </button>\n    </ion-col>\n    <ion-col col-6 class="pj-full-width-border" no-margin>\n      <button ion-button (click)="downloadLedgerReport()" style="background-color: #1c2431; font-size: 20px; color:#E4EBED;">\n        <ion-icon name="ios-download-outline"></ion-icon>\n      </button>\n    </ion-col>\n    <!-- <ion-col col-4 class="pj-full-width-border" no-margin>\n      <button ion-button (click)="presentPopoverDataSorting($event)" style="background-color: #1c2431; font-size: 20px; color:#E4EBED;">\n        <ion-icon name="ios-funnel"></ion-icon>\n      </button>\n    </ion-col> -->\n  </ion-row>\n\n  <p class="ledger-date" (click)="openLedgerDateSelectionCriteria()">{{\n    momentjs(fromDate).format(\'DD MMM YY\') }} - {{\n    momentjs(tillDate).format(\'DD MMM YY\') }}</p>\n\n\n  <!-- Ledger Invoices List-->\n  <div *ngIf="null == ledgerInvoiceList || ledgerInvoiceList.length == 0" class="pj-empty-page" style="margin-top: 20%;">\n    <ion-icon name="ios-document-outline"></ion-icon>\n    <h4>No Invoices To Show</h4>\n  </div>\n\n  <ion-list>\n    <div *ngFor="let invoice of ledgerInvoiceList">\n      <button color="bgcolor" ion-item (click)="showInvoiceDetails(invoice)">\n        <ion-row>\n          <ion-col col-9>\n            <p color="light"><strong>{{invoice.invoiceNo}}</strong></p>\n            <span style="font-size:10px; color:#AFAFAF">{{momentjs(invoice.invoiceDate).format(\'DD MMM\')}} |\n              {{invoice.dueDateInDays}} Days | Due: {{momentjs(invoice.dueDate).format(\'DD MMM\')}}</span>\n          </ion-col>\n          <ion-col col-3>\n            <p><i class="fa fa-rupee"></i> {{invoice.grossTotal}}</p>\n            <span class="pj-bill-status">{{invoice.type}}</span>\n          </ion-col>\n        </ion-row>\n      </button>\n    </div>\n  </ion-list>\n  <!-- ./Ledger Invoices List-->\n\n\n\n  <div id="pdfDivLedger" style="visibility:hidden">\n    <!-- <div id="pdfDivLedger"> -->\n    <div style="text-align: center;">\n      <h4>JAGTAP BUILDING SOLUTIONS</h4>\n      <p>Asthavinayak Soc, Opp Bharat Jyoti Stop,</p>\n      <p>Bibwewadi , Pune - 411037</p>\n      <p>Tel No. : (O) 24216162, 9822610611</p>\n      <p>Phone no. : 02024216162</p>\n      <p>Pin code : 411037</p>\n      <p>GSTIN : 27AFJPJ8271L1ZV</p>\n      <p>E-Mail : jagtapbsolutions@gmail.com</p>\n    </div>\n\n    <div style="margin:5% 0;text-align: center; font-weight: bold">\n      <h4>{{customer.customerDetails.cardName}}</h4>\n    </div>\n\n    <div style="text-align: center;">\n      <h4>Ledger Report</h4>\n      <p>{{ momentjs(fromDate).format(\'DD MMM YY\') }} - momentjs(tillDate).format(\'DD MMM YY\')</p>\n      <p>Date {{ momentjs(currDate).format(\'DD MMM YY\') }}</p>\n    </div>\n\n    <div style="margin-top:5%">\n\n      <table style="border:1px solid #000;border-collapse: collapse; width:100%;">\n        <tr>\n          <td style="border:1px solid #000;">\n            Post. Date\n          </td>\n          <td style="border:1px solid #000;">\n            Trans.\n          </td>\n          <td style="border:1px solid #000;">\n            Ref2\n          </td>\n          <td style="border:1px solid #000;">\n            Source\n          </td>\n          <td style="border:1px solid #000;">\n            Debit\n          </td>\n          <td style="border:1px solid #000;">\n            Credit\n          </td>\n        </tr>\n        <tr *ngFor="let ledgerInvoice of ledgerInvoiceList">\n          <td style="border:1px solid #000;">\n            {{momentjs(ledgerInvoice.invoiceDate).format(\'DD MMM YY\')}}\n          </td>\n          <td style="border:1px solid #000;">\n            {{ ledgerInvoice.transId }}\n          </td>\n          <td style="border:1px solid #000;">\n            {{ledgerInvoice.ref2}}\n          </td>\n          <td style="border:1px solid #000;">\n            {{ ledgerInvoice.type }}\n          </td>\n          <td style="border:1px solid #000;">\n            {{ledgerInvoice.debit == 0 ? \'\' : ledgerInvoice.debit }}\n          </td>\n          <td style="border:1px solid #000;">\n            {{ledgerInvoice.credit == 0 ? \'\' : ledgerInvoice.credit}}\n          </td>\n        </tr>\n\n        <tr style="font-weight: bold;">\n          <td colspan=4 style="border:1px solid #000;">\n            Total\n          </td>\n          <td style="border:1px solid #000;">\n            {{totalDebitBalance}}\n          </td>\n          <td style="border:1px solid #000;">\n            {{totalCreditBalance}}\n          </td>\n        </tr>\n\n        <tr style="font-weight: bold;">\n          <td colspan=4 style="border:1px solid #000;">\n            Total Due Balance\n          </td>\n          <td colspan=2 style="border:1px solid #000;">\n            {{ totalLedgerBalanceDue }}\n          </td>\n        </tr>\n      </table>\n\n      <div style="margin-top: 5%; float:right;">\n        <img [src]="imgPath" style="width:100%;height:auto;" />\n      </div>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\ledger-listing-details\ledger-listing-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_common_utility_common_utility__["a" /* CommonUtilityProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_opener__["a" /* FileOpener */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]])
    ], LedgerListingDetailsPage);
    return LedgerListingDetailsPage;
}());

//# sourceMappingURL=ledger-listing-details.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LedgerDateSelectionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_utility_common_utility__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LedgerDateSelectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LedgerDateSelectionPage = /** @class */ (function () {
    function LedgerDateSelectionPage(navCtrl, navParams, view, formBuilder, commonUtility) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.formBuilder = formBuilder;
        this.commonUtility = commonUtility;
        this.fromDate = '';
        this.tillDate = '';
        this.currDate = '';
        this.fromDate = this.navParams.get('fromDate');
        this.tillDate = this.navParams.get('tillDate');
        this.currDate = new Date().toISOString();
        this.ledgerDateSelectionFormGroup = this.formBuilder.group({
            fromDate: [this.fromDate, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            tillDate: [this.tillDate, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    LedgerDateSelectionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LedgerDateSelectionPage');
    };
    LedgerDateSelectionPage.prototype.dismissModal = function () {
        var modalData = {
            isAdded: false
        };
        this.view.dismiss(modalData);
    };
    LedgerDateSelectionPage.prototype.filterLedgerInvoices = function () {
        console.log('filterLedgerInvoices() called');
        var modalData = {
            isAdded: true,
            fromDate: this.ledgerDateSelectionFormGroup.controls['fromDate'].value,
            tillDate: this.ledgerDateSelectionFormGroup.controls['tillDate'].value
        };
        this.view.dismiss(modalData);
    };
    LedgerDateSelectionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ledger-date-selection',template:/*ion-inline-start:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\ledger-date-selection\ledger-date-selection.html"*/'<!--\n  Generated template for the LedgerDateSelectionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="navbar" text-center>\n    <ion-title>\n      Ledger Date Selection\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-grid no-padding>\n\n    <form [formGroup]="ledgerDateSelectionFormGroup">\n\n      <ion-row>\n        <ion-col col-12>\n          <ion-item class="pj-card-floating-label">\n            <ion-label floating>From Date*</ion-label>\n            <ion-datetime formControlName="fromDate" [max]="tillDate" pickerFormat="DD-MMM-YYYY" displayFormat="DD-MMM-YYYY"></ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-12>\n          <ion-item class="pj-card-floating-label">\n            <ion-label floating>Till Date*</ion-label>\n            <ion-datetime formControlName="tillDate" [max]="currDate" pickerFormat="DD-MMM-YYYY" displayFormat="DD-MMM-YYYY"></ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-6>\n          <button ion-button class="pj-button-danger" type="button" (click)="dismissModal()">CANCEL</button>\n        </ion-col>\n        <ion-col col-6>\n          <button ion-button class="pj-button" type="button" [disabled]="!ledgerDateSelectionFormGroup.valid" (click)="filterLedgerInvoices()">FILTER</button>\n        </ion-col>\n      </ion-row>\n\n    </form>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\ledger-date-selection\ledger-date-selection.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_utility_common_utility__["a" /* CommonUtilityProvider */]])
    ], LedgerDateSelectionPage);
    return LedgerDateSelectionPage;
}());

//# sourceMappingURL=ledger-date-selection.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__change_password_change_password__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_constants_constants__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_restservice_restservice__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_utility_common_utility__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams, restService, alertCtrl, commonUtility) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restService = restService;
        this.alertCtrl = alertCtrl;
        this.commonUtility = commonUtility;
        this.verifyPasswordUrl = __WEBPACK_IMPORTED_MODULE_3__providers_constants_constants__["a" /* ConstantsProvider */].API_BASE_URL
            + __WEBPACK_IMPORTED_MODULE_3__providers_constants_constants__["a" /* ConstantsProvider */].API_ENDPOINT_VERIFY_PSSWD;
        this.isAdmin = false;
        this.doEnableNfc = false;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage.prototype.naviagteToChangePassword = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Reset Customer',
            message: 'To proceed please enter your password',
            inputs: [
                {
                    name: 'password',
                    type: 'password',
                    placeholder: 'Password'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Proceed',
                    handler: function (data) {
                        console.log('Password Entered : ' + data.password);
                        var dataTopass = {
                            password: data.password
                        };
                        _this.restService.postDetails(_this.verifyPasswordUrl, dataTopass)
                            .subscribe(function () {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__change_password_change_password__["a" /* ChangePasswordPage */], {
                                isForceChange: false
                            });
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\settings\settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="navbar" text-center>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Settings\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n  \n  <ion-list>\n    <button ion-item color="bgcolor" (click)="naviagteToChangePassword()">\n      <h6>Change Password</h6>\n      <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n    </button>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_restservice_restservice__["a" /* RestserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common_utility_common_utility__["a" /* CommonUtilityProvider */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 252:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 252;

/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/admin-users/admin-users.module": [
		992,
		28
	],
	"../pages/aging-filter-popover/aging-filter-popover.module": [
		993,
		27
	],
	"../pages/aging-report-filters/aging-report-filters.module": [
		994,
		26
	],
	"../pages/authorizaton-settings/authorizaton-settings.module": [
		995,
		25
	],
	"../pages/background-tracking/background-tracking.module": [
		996,
		0
	],
	"../pages/change-password/change-password.module": [
		997,
		24
	],
	"../pages/contact-update/contact-update.module": [
		998,
		23
	],
	"../pages/customer-aging-report/customer-aging-report.module": [
		999,
		22
	],
	"../pages/customer-details/customer-details.module": [
		1000,
		21
	],
	"../pages/customer-mgmt/customer-mgmt.module": [
		1001,
		20
	],
	"../pages/invoice-details/invoice-details.module": [
		1002,
		19
	],
	"../pages/invoice-listing-settings-popover/invoice-listing-settings-popover.module": [
		1003,
		18
	],
	"../pages/invoices-listing/invoices-listing.module": [
		1004,
		17
	],
	"../pages/ledger-date-selection/ledger-date-selection.module": [
		1005,
		16
	],
	"../pages/ledger-listing-details/ledger-listing-details.module": [
		1006,
		15
	],
	"../pages/login/login.module": [
		1007,
		14
	],
	"../pages/modal-add-item/modal-add-item.module": [
		1008,
		13
	],
	"../pages/modal-au-admin-users/modal-au-admin-users.module": [
		1009,
		12
	],
	"../pages/modal-ledger-options/modal-ledger-options.module": [
		1010,
		11
	],
	"../pages/order-add/order-add.module": [
		1011,
		10
	],
	"../pages/order-details/order-details.module": [
		1012,
		9
	],
	"../pages/order-mgmt/order-mgmt.module": [
		1013,
		8
	],
	"../pages/orders-booked/orders-booked.module": [
		1014,
		7
	],
	"../pages/pending-invoices-filter/pending-invoices-filter.module": [
		1015,
		6
	],
	"../pages/pending-invoices/pending-invoices.module": [
		1016,
		5
	],
	"../pages/popover-sort-filters/popover-sort-filters.module": [
		1017,
		4
	],
	"../pages/settings/settings.module": [
		1018,
		3
	],
	"../pages/tracking-history/tracking-history.module": [
		1019,
		2
	],
	"../pages/tracking/tracking.module": [
		1020,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 296;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_constants_constants__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);


var BaseComponent = /** @class */ (function () {
    function BaseComponent(endpointUrl, commonUtility, http, subResourceEndpointUrlToSet) {
        this.endpointUrl = endpointUrl;
        this.commonUtility = commonUtility;
        this.http = http;
        this.subResourceEndpointUrlToSet = subResourceEndpointUrlToSet;
        this.subResourceEndpointUrl = subResourceEndpointUrlToSet;
    }
    BaseComponent.prototype.setSubResourceUrl = function (subResourceEndpointUrl) {
        this.subResourceEndpointUrl = subResourceEndpointUrl;
    };
    BaseComponent.prototype.getAll = function () {
        var _this = this;
        var listUrl = __WEBPACK_IMPORTED_MODULE_0__providers_constants_constants__["a" /* ConstantsProvider */].API_BASE_URL + this.endpointUrl;
        console.log('List URL -> ' + listUrl);
        if (this.commonUtility.isNetworkAvailable()) {
            this.loader = this.commonUtility.createLoader();
            this.loader.present();
            return this.http.get(listUrl)
                .map(function (response) {
                _this.loader.dismiss();
                return response;
            })
                .catch(function (err) {
                _this.loader.dismiss();
                console.log("Error - " + JSON.stringify(err));
                _this.commonUtility.presentErrorToast(err);
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(err);
            });
        }
    };
    BaseComponent.prototype.getAllPaginated = function (pageNo) {
        var _this = this;
        var listUrl = __WEBPACK_IMPORTED_MODULE_0__providers_constants_constants__["a" /* ConstantsProvider */].API_BASE_URL + this.endpointUrl + "?" + __WEBPACK_IMPORTED_MODULE_0__providers_constants_constants__["a" /* ConstantsProvider */].URL_PARAM_PAGE_NO + pageNo;
        console.log('List URL -> ' + listUrl);
        if (this.commonUtility.isNetworkAvailable()) {
            this.loader = this.commonUtility.createLoader();
            this.loader.present();
            return this.http.get(listUrl)
                .map(function (response) {
                _this.loader.dismiss();
                return response;
            })
                .catch(function (err) {
                _this.loader.dismiss();
                console.log("Error - " + JSON.stringify(err));
                _this.commonUtility.presentErrorToast(err);
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(err);
            });
        }
    };
    BaseComponent.prototype.getById = function (id) {
        var _this = this;
        var getByIdUrl = __WEBPACK_IMPORTED_MODULE_0__providers_constants_constants__["a" /* ConstantsProvider */].API_BASE_URL + this.endpointUrl
            + __WEBPACK_IMPORTED_MODULE_0__providers_constants_constants__["a" /* ConstantsProvider */].URL_SEPARATOR + id;
        console.log('getById URL -> ' + getByIdUrl);
        if (this.commonUtility.isNetworkAvailable()) {
            this.loader = this.commonUtility.createLoader();
            this.loader.present();
            return this.http.get(getByIdUrl)
                .map(function (response) {
                _this.loader.dismiss();
                return response;
            })
                .catch(function (err) {
                _this.loader.dismiss();
                console.log("Error - " + JSON.stringify(err));
                _this.commonUtility.presentErrorToast(err);
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(err);
            });
        }
    };
    BaseComponent.prototype.create = function (data) {
        var _this = this;
        var createUrl = __WEBPACK_IMPORTED_MODULE_0__providers_constants_constants__["a" /* ConstantsProvider */].API_BASE_URL + this.endpointUrl;
        console.log('Create URL -> ' + createUrl);
        console.log('Create Data -> ' + JSON.stringify(data));
        if (this.commonUtility.isNetworkAvailable()) {
            this.loader = this.commonUtility.createLoader();
            this.loader.present();
            return this.http.post(createUrl, data)
                .map(function (response) {
                _this.loader.dismiss();
                return response;
            })
                .catch(function (err) {
                _this.loader.dismiss();
                console.log("Error - " + JSON.stringify(err));
                _this.commonUtility.presentErrorToast(err);
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(err);
            });
        }
    };
    BaseComponent.prototype.getAllSubResource = function (parentId) {
        var _this = this;
        var listUrl = __WEBPACK_IMPORTED_MODULE_0__providers_constants_constants__["a" /* ConstantsProvider */].API_BASE_URL + this.endpointUrl + __WEBPACK_IMPORTED_MODULE_0__providers_constants_constants__["a" /* ConstantsProvider */].URL_SEPARATOR
            + parentId + __WEBPACK_IMPORTED_MODULE_0__providers_constants_constants__["a" /* ConstantsProvider */].URL_SEPARATOR + this.subResourceEndpointUrl;
        console.log('List URL -> ' + listUrl);
        if (this.commonUtility.isNetworkAvailable()) {
            this.loader = this.commonUtility.createLoader();
            this.loader.present();
            return this.http.get(listUrl)
                .map(function (response) {
                _this.loader.dismiss();
                return response;
            })
                .catch(function (err) {
                _this.loader.dismiss();
                console.log("Error - " + JSON.stringify(err));
                _this.commonUtility.presentErrorToast(err);
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(err);
            });
        }
    };
    BaseComponent.prototype.getSubresourceById = function (parentId, subResourceId) {
        var _this = this;
        var getSubresourceByIdUrl = __WEBPACK_IMPORTED_MODULE_0__providers_constants_constants__["a" /* ConstantsProvider */].API_BASE_URL + this.endpointUrl
            + __WEBPACK_IMPORTED_MODULE_0__providers_constants_constants__["a" /* ConstantsProvider */].URL_SEPARATOR + parentId + __WEBPACK_IMPORTED_MODULE_0__providers_constants_constants__["a" /* ConstantsProvider */].URL_SEPARATOR
            + this.subResourceEndpointUrl + __WEBPACK_IMPORTED_MODULE_0__providers_constants_constants__["a" /* ConstantsProvider */].URL_SEPARATOR + subResourceId;
        console.log('getSubresourceByIdUrl URL -> ' + getSubresourceByIdUrl);
        if (this.commonUtility.isNetworkAvailable()) {
            this.loader = this.commonUtility.createLoader();
            this.loader.present();
            return this.http.get(getSubresourceByIdUrl)
                .map(function (response) {
                _this.loader.dismiss();
                return response;
            })
                .catch(function (err) {
                _this.loader.dismiss();
                console.log("Error - " + JSON.stringify(err));
                _this.commonUtility.presentErrorToast(err);
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(err);
            });
        }
    };
    BaseComponent.prototype.createSubResource = function (parentId, subResourceData) {
        var _this = this;
        var createSubResourceUrl = __WEBPACK_IMPORTED_MODULE_0__providers_constants_constants__["a" /* ConstantsProvider */].API_BASE_URL + this.endpointUrl + __WEBPACK_IMPORTED_MODULE_0__providers_constants_constants__["a" /* ConstantsProvider */].URL_SEPARATOR
            + parentId + __WEBPACK_IMPORTED_MODULE_0__providers_constants_constants__["a" /* ConstantsProvider */].URL_SEPARATOR + this.subResourceEndpointUrl;
        console.log('createSubResourceUrl = ' + createSubResourceUrl);
        console.log('createSubResourceUrl data= ' + JSON.stringify(subResourceData));
        if (this.commonUtility.isNetworkAvailable()) {
            this.loader = this.commonUtility.createLoader();
            this.loader.present();
            return this.http.post(createSubResourceUrl, subResourceData)
                .map(function (response) {
                _this.loader.dismiss();
                return response;
            })
                .catch(function (err) {
                _this.loader.dismiss();
                console.log("Error - " + JSON.stringify(err));
                _this.commonUtility.presentErrorToast(err);
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(err);
            });
        }
    };
    BaseComponent.prototype.update = function (data) {
        var _this = this;
        var updateUrl = __WEBPACK_IMPORTED_MODULE_0__providers_constants_constants__["a" /* ConstantsProvider */].API_BASE_URL + this.endpointUrl;
        console.log('Update URL -> ' + updateUrl);
        console.log('Update Data -> ' + JSON.stringify(data));
        if (this.commonUtility.isNetworkAvailable()) {
            this.loader = this.commonUtility.createLoader();
            this.loader.present();
            return this.http.put(updateUrl, data)
                .map(function (response) {
                _this.loader.dismiss();
                return response;
            })
                .catch(function (err) {
                _this.loader.dismiss();
                console.log("Error - " + JSON.stringify(err));
                _this.commonUtility.presentErrorToast(err);
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(err);
            });
        }
    };
    BaseComponent.prototype.updateSubResource = function (parentId, subResourceData) {
        var _this = this;
        var subResourceUpdateUrl = __WEBPACK_IMPORTED_MODULE_0__providers_constants_constants__["a" /* ConstantsProvider */].API_BASE_URL + this.endpointUrl + __WEBPACK_IMPORTED_MODULE_0__providers_constants_constants__["a" /* ConstantsProvider */].URL_SEPARATOR
            + parentId + __WEBPACK_IMPORTED_MODULE_0__providers_constants_constants__["a" /* ConstantsProvider */].URL_SEPARATOR + this.subResourceEndpointUrl;
        console.log('subResourceUpdateUrl -> ' + subResourceUpdateUrl);
        console.log('updateSubResourceUrl data= ' + JSON.stringify(subResourceData));
        if (this.commonUtility.isNetworkAvailable()) {
            this.loader = this.commonUtility.createLoader();
            this.loader.present();
            return this.http.put(subResourceUpdateUrl, subResourceData)
                .map(function (response) {
                _this.loader.dismiss();
                return response;
            })
                .catch(function (err) {
                _this.loader.dismiss();
                console.log("Error - " + JSON.stringify(err));
                _this.commonUtility.presentErrorToast(err);
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(err);
            });
        }
    };
    BaseComponent.prototype.deleteById = function (id) {
        var _this = this;
        var deleteUrl = __WEBPACK_IMPORTED_MODULE_0__providers_constants_constants__["a" /* ConstantsProvider */].API_BASE_URL + this.endpointUrl + __WEBPACK_IMPORTED_MODULE_0__providers_constants_constants__["a" /* ConstantsProvider */].URL_SEPARATOR + id;
        console.log('Delete URL -> ' + deleteUrl);
        if (this.commonUtility.isNetworkAvailable()) {
            this.loader = this.commonUtility.createLoader();
            this.loader.present();
            return this.http.delete(deleteUrl)
                .map(function (response) {
                _this.loader.dismiss();
                return response;
            })
                .catch(function (err) {
                _this.loader.dismiss();
                console.log("Error - " + JSON.stringify(err));
                _this.commonUtility.presentErrorToast(err);
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(err);
            });
        }
    };
    BaseComponent.prototype.deleteSubResourceById = function (parentId, subResourceId) {
        var _this = this;
        var deleteUrl = __WEBPACK_IMPORTED_MODULE_0__providers_constants_constants__["a" /* ConstantsProvider */].API_BASE_URL + this.endpointUrl + __WEBPACK_IMPORTED_MODULE_0__providers_constants_constants__["a" /* ConstantsProvider */].URL_SEPARATOR
            + parentId + __WEBPACK_IMPORTED_MODULE_0__providers_constants_constants__["a" /* ConstantsProvider */].URL_SEPARATOR + this.subResourceEndpointUrl
            + __WEBPACK_IMPORTED_MODULE_0__providers_constants_constants__["a" /* ConstantsProvider */].URL_SEPARATOR + subResourceId;
        console.log('Delete URL -> ' + deleteUrl);
        console.log('deleteSubResourceUrl data= ' + subResourceId);
        if (this.commonUtility.isNetworkAvailable()) {
            this.loader = this.commonUtility.createLoader();
            this.loader.present();
            return this.http.delete(deleteUrl)
                .map(function (response) {
                _this.loader.dismiss();
                return response;
            })
                .catch(function (err) {
                _this.loader.dismiss();
                console.log("Error - " + JSON.stringify(err));
                _this.commonUtility.presentErrorToast(err);
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(err);
            });
        }
    };
    BaseComponent.prototype.bulkDelete = function (data) {
        var _this = this;
        var bulkDeleteUrl = __WEBPACK_IMPORTED_MODULE_0__providers_constants_constants__["a" /* ConstantsProvider */].API_BASE_URL + this.endpointUrl;
        console.log('Bulk Delete URL -> ' + bulkDeleteUrl);
        if (this.commonUtility.isNetworkAvailable()) {
            this.loader = this.commonUtility.createLoader();
            this.loader.present();
            return this.http.delete(bulkDeleteUrl, data)
                .map(function (response) {
                _this.loader.dismiss();
                return response;
            })
                .catch(function (err) {
                _this.loader.dismiss();
                console.log("Error - " + JSON.stringify(err));
                _this.commonUtility.presentErrorToast(err);
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(err);
            });
        }
    };
    BaseComponent.prototype.setFormGroupDataFromJson = function (jsonData, formGroup) {
        var jsonKeys = Object.keys(jsonData);
        console.log('jsonKeys = ' + JSON.stringify(jsonKeys));
        jsonKeys.forEach(function (key) {
            if (formGroup.contains(key)) {
                formGroup.controls[key].setValue(jsonData[key]);
            }
        });
        // return formGroup;
    };
    return BaseComponent;
}());

//# sourceMappingURL=base-component.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeocoderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the GeocoderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GeocoderProvider = /** @class */ (function () {
    function GeocoderProvider(http, _GEOCODE) {
        this.http = http;
        this._GEOCODE = _GEOCODE;
        console.log('Hello GeocoderProvider Provider');
    }
    /**
      *
      * Perform reverseGeocoding operation and return address details
      *
      * @public
      * @method reverseGeocode
      * @return {Promise}
      *
      */
    GeocoderProvider.prototype.reverseGeocode = function (lat, lng) {
        // alert('Lat = ' + lat + ", Long = " + lng);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].fromPromise(this._GEOCODE.reverseGeocode(lat, lng)
            .then(function (results) {
            // alert('results = ' + JSON.stringify(results));
            var str = "The reverseGeocode address is " + results[0].locality + " in " + results[0].countryCode;
            var resolvedLocality = (results[0].locality == null || results[0].locality == '') ? '' : (results[0].locality + ', ');
            var resolvedAddress = resolvedLocality + results[0].thoroughfare + ', ' + results[0].subAdministrativeArea
                + ', ' + results[0].administrativeArea;
            // alert('resolvedAddress = ' + JSON.stringify(resolvedAddress));
            return resolvedAddress;
        })
            .catch(function (error) {
            alert(JSON.stringify(error));
            // reject(error);
            __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].throw(error);
        }));
    };
    GeocoderProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__["a" /* NativeGeocoder */]])
    ], GeocoderProvider);
    return GeocoderProvider;
}());

//# sourceMappingURL=geocoder.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_constants__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__restservice_restservice__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DatabaseProvider = /** @class */ (function () {
    function DatabaseProvider(http, sqlite, network, restService) {
        this.http = http;
        this.sqlite = sqlite;
        this.network = network;
        this.restService = restService;
        console.log('DatabaseProvider Provider');
    }
    DatabaseProvider.prototype.initializeSqlLiteDb = function () {
        return this.sqlite.create({
            name: __WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* ConstantsProvider */].APP_DB_NM,
            location: __WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* ConstantsProvider */].APP_DB_LOC
            // iosDatabaseLocation: ConstantsProvider.APP_DB_IOS_LOC
        });
    };
    DatabaseProvider.prototype.intializeDatabase = function () {
        this.initializeSqlLiteDb().then(function (db) {
            db.executeSql('CREATE TABLE IF NOT EXISTS metadata(configname TEXT, data TEXT)', [])
                .then(function (res) {
                console.log('Create Table metadata');
            })
                .catch(function (e) { return console.log(JSON.stringify(e)); });
        })
            .catch(function (e) { return console.log(JSON.stringify(e)); });
    };
    DatabaseProvider.prototype.getRefreshToken = function () {
        return __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].fromPromise(this.initializeSqlLiteDb().then(function (db) {
            return db.executeSql('SELECT data FROM metadata WHERE configname=?', [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* ConstantsProvider */].CONFIG_NM_REFRESH_TOKEN]);
        })
            .catch(function (e) {
            console.log(JSON.stringify(e));
            return __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].throw(e);
        }));
    };
    DatabaseProvider.prototype.getCustomerData = function () {
        return __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].fromPromise(this.initializeSqlLiteDb().then(function (db) {
            return db.executeSql('SELECT data FROM metadata WHERE configname=?', [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* ConstantsProvider */].CONFIG_NM_CUST_DATA]);
        })
            .catch(function (e) {
            console.log(JSON.stringify(e));
        }));
    };
    DatabaseProvider.prototype.getLastUpdatedTs = function () {
        return __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].fromPromise(this.initializeSqlLiteDb().then(function (db) {
            return db.executeSql('SELECT data FROM metadata WHERE configname=?', [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* ConstantsProvider */].CONFIG_NM_LAST_UPDATED_TS]);
        })
            .catch(function (e) {
            console.log(JSON.stringify(e));
        }));
    };
    DatabaseProvider.prototype.syncCustomerData = function () {
        var _this = this;
        if (this.network.type != "unknown" && this.network.type != "none" && this.network.type != undefined) {
            var customersDetailsApiEndpoint = __WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* ConstantsProvider */].API_BASE_URL + __WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* ConstantsProvider */].API_ENDPOINT_CUST_DTLS;
            this.restService.getDetails(customersDetailsApiEndpoint)
                .subscribe(function (response) {
                console.log('Customers Data = ' + JSON.stringify(response.response));
                var customersDetailsList = response.response;
                _this.initializeSqlLiteDb().then(function (db) {
                    db.executeSql('SELECT data from metadata where configname=?', [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* ConstantsProvider */].CONFIG_NM_CUST_DATA])
                        .then(function (res) {
                        if (res.rows.length > 0) {
                            db.executeSql('UPDATE metadata set data=? WHERE configname=?', [JSON.stringify(customersDetailsList),
                                __WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* ConstantsProvider */].CONFIG_NM_CUST_DATA])
                                .then(function (res) {
                                console.log('Updated Customer Record');
                                db.executeSql('UPDATE metadata set data=? WHERE configname=?', [new Date().toISOString(),
                                    __WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* ConstantsProvider */].CONFIG_NM_LAST_UPDATED_TS])
                                    .then(function (res) {
                                    console.log('Updated Last Updated Ts');
                                })
                                    .catch(function (e) {
                                    console.log(JSON.stringify(e));
                                });
                            })
                                .catch(function (e) {
                                console.log(JSON.stringify(e));
                            });
                        }
                        else {
                            db.executeSql('INSERT INTO metadata(configname, data) VALUES(?,?)', [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* ConstantsProvider */].CONFIG_NM_CUST_DATA, ''])
                                .then(function (res) {
                                console.log('Inserted Empty Customer Record');
                                _this.syncCustomerData();
                            })
                                .catch(function (e) { return console.log(JSON.stringify(e)); });
                        }
                    });
                })
                    .catch(function (e) {
                    console.log(JSON.stringify(e));
                });
            });
        }
    };
    DatabaseProvider.prototype.syncCustomerDataInBackground = function () {
        var _this = this;
        console.log('SynchingDataInBackgruond');
        this.initializeSqlLiteDb().then(function (db) {
            db.executeSql('SELECT data FROM metadata WHERE configname=?', [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* ConstantsProvider */].CONFIG_NM_LAST_UPDATED_TS])
                .then(function (res) {
                if (res.rows.length > 0) {
                    console.log('LastUpdatedTs = ' + res.rows.item(0).data);
                    var lastUpdatedTsData = res.rows.item(0).data;
                    if (lastUpdatedTsData != '') {
                        var lastUpdatedTs = new Date(lastUpdatedTsData);
                        var diffInMins = _this.calculateDiffInMins(lastUpdatedTs, new Date());
                        if (diffInMins >= 30) {
                            _this.syncCustomerData();
                        }
                    }
                    else {
                        _this.syncCustomerData();
                    }
                }
                else {
                    db.executeSql('INSERT INTO metadata(configname, data) VALUES(?,?)', [__WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* ConstantsProvider */].CONFIG_NM_LAST_UPDATED_TS, ''])
                        .then(function (res) {
                        console.log('Inserted Empty LastUpdatedTs Record');
                        _this.syncCustomerData();
                    })
                        .catch(function (e) { return console.log(JSON.stringify(e)); });
                }
            })
                .catch(function (e) {
                console.log(JSON.stringify(e));
            });
        })
            .catch(function (e) {
            console.log(JSON.stringify(e));
        });
    };
    // setTokenInDb(data: any) {
    //   console.log('Access Token = ' + data.access_token);
    //   console.log('Refresh Token = ' + data.refresh_token);
    //   this.initializeSqlLiteDb().then((db: SQLiteObject) => {
    //     // Store Refresh Token
    //     this.setItem(ConstantsProvider.CONFIG_NM_REFRESH_TOKEN, data.refresh_token);
    //     // Store Access Token
    //     db.executeSql('SELECT data FROM metadata WHERE configname=?', [ConstantsProvider.CONFIG_NM_ACCESS_TOKEN])
    //       .then(
    //         res => {
    //           if (res.rows.length > 0) {
    //             console.log('Fetched Access Token = ' + res.rows.item(0).data);
    //             db.executeSql('UPDATE metadata set data=? WHERE configname=?', [data.access_token,
    //             ConstantsProvider.CONFIG_NM_ACCESS_TOKEN])
    //               .then(
    //                 res => {
    //                   console.log('Updated Access Token');
    //                 }
    //               )
    //               .catch(e => {
    //                 console.log(JSON.stringify(e));
    //               })
    //           } else {
    //             db.executeSql('INSERT INTO metadata(configname, data) VALUES(?,?)',
    //               [ConstantsProvider.CONFIG_NM_ACCESS_TOKEN, data.access_token])
    //               .then(res => {
    //                 console.log('Inserted Access Token');
    //               })
    //               .catch(e => console.log(JSON.stringify(e)));
    //           }
    //         });
    //   })
    //     .catch(e => {
    //       console.log(JSON.stringify(e))
    //     });
    // }
    DatabaseProvider.prototype.setItem = function (configName, configValue) {
        console.log('Setting : ' + configName + ' = ' + configValue);
        this.initializeSqlLiteDb().then(function (db) {
            db.executeSql('SELECT data FROM metadata WHERE configname=?', [configName])
                .then(function (res) {
                if (res.rows.length > 0) {
                    console.log('Fetched ' + configName + ' = ' + res.rows.item(0).data);
                    db.executeSql('UPDATE metadata set data=? WHERE configname=?', [configValue, configName])
                        .then(function (res) {
                        console.log('Updated ' + configName);
                    })
                        .catch(function (e) {
                        console.log(JSON.stringify(e));
                    });
                }
                else {
                    db.executeSql('INSERT INTO metadata(configname, data) VALUES(?,?)', [configName, configValue])
                        .then(function (res) {
                        console.log('Inserted ' + configName);
                    })
                        .catch(function (e) { return console.log(JSON.stringify(e)); });
                }
            });
        })
            .catch(function (e) {
            console.log(JSON.stringify(e));
        });
    };
    DatabaseProvider.prototype.getItem = function (configName) {
        return this.initializeSqlLiteDb().then(function (db) {
            return db.executeSql('SELECT data FROM metadata WHERE configname=?', [configName]);
        })
            .catch(function (e) {
            console.log(JSON.stringify(e));
            // return Observable.throw(e);
        });
    };
    DatabaseProvider.prototype.getItemAsync = function (configName) {
        return __awaiter(this, void 0, void 0, function () {
            var db, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initializeSqlLiteDb()];
                    case 1:
                        db = _a.sent();
                        return [4 /*yield*/, db.executeSql('SELECT data FROM metadata WHERE configname=?', [configName])];
                    case 2:
                        res = _a.sent();
                        if (res.rows.length > 0) {
                            return [2 /*return*/, res.rows.item(0).data];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DatabaseProvider.prototype.calculateDiffInMins = function (startDate, endDate) {
        //Get 1 day in milliseconds
        var one_day = 1000 * 60;
        // Convert both dates to milliseconds
        var date1_ms = startDate.getTime();
        var date2_ms = endDate.getTime();
        // Calculate the difference in milliseconds
        var difference_ms = date2_ms - date1_ms;
        // Convert back to days and return
        var diff = Math.round(difference_ms / one_day);
        console.log('diff In Mins = ' + diff);
        return diff;
    };
    DatabaseProvider.prototype.clearDatabase = function () {
        this.sqlite.deleteDatabase({
            name: __WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* ConstantsProvider */].APP_DB_NM,
            location: __WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* ConstantsProvider */].APP_DB_LOC
            // iosDatabaseLocation: ConstantsProvider.APP_DB_IOS_LOC
        }).
            then(function (res) {
            console.log(JSON.stringify(res));
            console.log('Deleted Database');
        })
            .catch(function (err) {
            console.log(JSON.stringify(err));
            console.log('Cannot Delete Database');
        });
    };
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_6__restservice_restservice__["a" /* RestserviceProvider */]])
    ], DatabaseProvider);
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ }),

/***/ 580:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUpdatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_restservice_restservice__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_utility_common_utility__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_constants_constants__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ContactUpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactUpdatePage = /** @class */ (function () {
    function ContactUpdatePage(navCtrl, navParams, formBuilder, view, restService, commonUtility) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.view = view;
        this.restService = restService;
        this.commonUtility = commonUtility;
        this.isContactSubmitted = false;
        this.deviceInfo = 'STATIC_DATA';
        this.referrer = '';
        this.customer = this.navParams.get('customer');
        this.custCntcNum = this.customer.custCntcNum;
        this.referrer = this.navParams.get('referrer');
        console.log('referrer = ' + this.referrer);
        switch (this.referrer) {
            case 'CustomerContactUpdate':
                break;
            default:
                break;
        }
        this.contactUpdateFormGroup = this.formBuilder.group({
            contactNumber: [this.custCntcNum, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            otp: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    ContactUpdatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactUpdatePage');
    };
    ContactUpdatePage.prototype.updateContactAndSendOtp = function () {
        console.log('updateContactAndSendOtp called');
        if (this.commonUtility.isNetworkAvailable()) {
            var udpatedContactNumber = this.contactUpdateFormGroup.controls['contactNumber'].value;
            if (udpatedContactNumber == this.custCntcNum)
                this.commonUtility.presentErrorToast('Please submit the contact No. to update');
            else {
                this.sendOtp('OTP sent successfully to updated contact number', udpatedContactNumber);
            }
        }
    };
    ContactUpdatePage.prototype.sendOtp = function (mssg, contactNumber) {
        var _this = this;
        var sendOtpData = {
            cellnumber: contactNumber,
            deviceInfo: this.deviceInfo
        };
        var sendOtpUrl = __WEBPACK_IMPORTED_MODULE_5__providers_constants_constants__["a" /* ConstantsProvider */].API_BASE_URL + __WEBPACK_IMPORTED_MODULE_5__providers_constants_constants__["a" /* ConstantsProvider */].API_ENDPOINT_SEND_OTP;
        this.restService.postDetails(sendOtpUrl, sendOtpData)
            .subscribe(function () {
            _this.isContactSubmitted = true;
            _this.commonUtility.presentToast(mssg, 3000);
        });
    };
    ContactUpdatePage.prototype.updateContact = function () {
        var _this = this;
        console.log('updateContact called');
        if (this.commonUtility.isNetworkAvailable()) {
            var otpSubmitted = this.contactUpdateFormGroup.controls['otp'].value;
            var udpatedContactNumber_1 = this.contactUpdateFormGroup.controls['contactNumber'].value;
            console.log('conatctNum = ' + udpatedContactNumber_1 + ', otp = ' + otpSubmitted + ', custId = '
                + this.customer.custDtlsId);
            var verifyOtpData = {
                cellnumber: udpatedContactNumber_1,
                deviceInfo: this.deviceInfo,
                otp: otpSubmitted
            };
            var verifyOtpUrl = __WEBPACK_IMPORTED_MODULE_5__providers_constants_constants__["a" /* ConstantsProvider */].API_BASE_URL + __WEBPACK_IMPORTED_MODULE_5__providers_constants_constants__["a" /* ConstantsProvider */].API_ENDPOINT_CUST_DTLS
                + __WEBPACK_IMPORTED_MODULE_5__providers_constants_constants__["a" /* ConstantsProvider */].URL_SEPARATOR + this.customer.custDtlsId
                + __WEBPACK_IMPORTED_MODULE_5__providers_constants_constants__["a" /* ConstantsProvider */].URL_SEPARATOR + __WEBPACK_IMPORTED_MODULE_5__providers_constants_constants__["a" /* ConstantsProvider */].API_ENDPOINT_VERIFY_OTP;
            this.restService.postDetails(verifyOtpUrl, verifyOtpData)
                .subscribe(function () {
                _this.isContactSubmitted = true;
                switch (_this.referrer) {
                    case 'CustomerContactUpdate':
                        _this.commonUtility.presentToast('Contact Number Updated Successfully', 3000);
                        break;
                    default:
                        break;
                }
                var modalData = {
                    contactNumber: udpatedContactNumber_1,
                    isAdded: true
                };
                _this.view.dismiss(modalData);
            });
        }
    };
    ContactUpdatePage.prototype.dismissModal = function () {
        var modalData = {
            isAdded: false
        };
        this.view.dismiss(modalData);
    };
    ContactUpdatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact-update',template:/*ion-inline-start:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\contact-update\contact-update.html"*/'<!--\n  Generated template for the ContactUpdatePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="navbar" text-center>\n    <ion-title>\n      Update Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid no-padding style="margin-top: 45%;">\n\n    <ion-row *ngIf="!isContactSubmitted">\n      <ion-col col-12 padding text-center style="font-style: italic">\n        Enter the updated contact number to receive OTP\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf="isContactSubmitted">\n      <ion-col col-12 padding text-center style="font-style: italic">\n        Enter the OTP received on mentioned contact number\n      </ion-col>\n    </ion-row>\n\n    <form [formGroup]="contactUpdateFormGroup">\n\n      <ion-row>\n\n        <ion-col col-12>\n          <ion-item>\n            <ion-label floating class="pj-floating-label">Contact Number*</ion-label>\n            <ion-input type="number" [disabled]="isContactSubmitted" formControlName="contactNumber"></ion-input>\n          </ion-item>\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="isContactSubmitted">\n\n        <ion-col col-12>\n          <ion-item>\n            <ion-label floating class="pj-floating-label">OTP*</ion-label>\n            <ion-input type="number" formControlName="otp"></ion-input>\n          </ion-item>\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="!isContactSubmitted">\n        <ion-col col-6>\n          <button ion-button class="pj-button-danger" type="button" (click)="dismissModal()">CANCEL</button>\n        </ion-col>\n        <ion-col col-6>\n          <button ion-button class="pj-button" type="button" (click)="updateContactAndSendOtp()">SEND OTP</button>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="isContactSubmitted">\n        <ion-col col-6>\n          <button ion-button class="pj-button-danger" type="button" (click)="dismissModal()">CANCEL</button>\n        </ion-col>\n        <ion-col col-6>\n          <button ion-button class="pj-button" type="button" [disabled]="!contactUpdateFormGroup.valid" (click)="updateContact()">SUBMIT</button>\n        </ion-col>\n      </ion-row>\n\n    </form>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\contact-update\contact-update.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_restservice_restservice__["a" /* RestserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_common_utility_common_utility__["a" /* CommonUtilityProvider */]])
    ], ContactUpdatePage);
    return ContactUpdatePage;
}());

//# sourceMappingURL=contact-update.js.map

/***/ }),

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(586);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(989);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_common_utility_common_utility__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_interceptor_interceptor__ = __webpack_require__(990);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_restservice_restservice__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_constants_constants__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_authorizaton_settings_authorizaton_settings__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_change_password_change_password__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_settings_settings__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_admin_users_admin_users__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_modal_au_admin_users_modal_au_admin_users__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_contact_update_contact_update__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_tracking_tracking__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_tracking_history_tracking_history__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_geocoder_geocoder__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_native_geocoder__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_customer_mgmt_customer_mgmt__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_location_tracker_location_tracker__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_customer_details_customer_details__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_customer_aging_report_customer_aging_report__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_aging_report_filters_aging_report_filters__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_invoices_listing_invoices_listing__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_invoice_details_invoice_details__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_order_mgmt_order_mgmt__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_order_details_order_details__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_background_geolocation__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_invoice_listing_settings_popover_invoice_listing_settings_popover__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_social_sharing__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_file_opener__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_file__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_order_add_order_add__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_modal_add_item_modal_add_item__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_ionic_selectable__ = __webpack_require__(991);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_diagnostic__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ionic_native_call_number__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_orders_booked_orders_booked__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_pending_invoices_pending_invoices__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_pending_invoices_filter_pending_invoices_filter__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_aging_filter_popover_aging_filter_popover__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_popover_sort_filters_popover_sort_filters__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_modal_ledger_options_modal_ledger_options__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__ionic_native_sqlite__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__providers_database_database__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_ledger_listing_details_ledger_listing_details__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_ledger_date_selection_ledger_date_selection__ = __webpack_require__(240);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















































// import ‘intl’;
// import ‘intl/locale-data/jsonp/en’;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_authorizaton_settings_authorizaton_settings__["a" /* AuthorizatonSettingsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_change_password_change_password__["a" /* ChangePasswordPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_admin_users_admin_users__["a" /* AdminUsersPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_modal_au_admin_users_modal_au_admin_users__["a" /* ModalAuAdminUsersPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_contact_update_contact_update__["a" /* ContactUpdatePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_tracking_tracking__["a" /* TrackingPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_tracking_history_tracking_history__["a" /* TrackingHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_customer_mgmt_customer_mgmt__["a" /* CustomerMgmtPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_customer_details_customer_details__["a" /* CustomerDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_customer_aging_report_customer_aging_report__["a" /* CustomerAgingReportPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_aging_report_filters_aging_report_filters__["a" /* AgingReportFiltersPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_invoices_listing_invoices_listing__["a" /* InvoicesListingPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_invoice_details_invoice_details__["a" /* InvoiceDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_order_mgmt_order_mgmt__["a" /* OrderMgmtPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_order_details_order_details__["a" /* OrderDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_invoice_listing_settings_popover_invoice_listing_settings_popover__["a" /* InvoiceListingSettingsPopoverPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_order_add_order_add__["a" /* OrderAddPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_modal_add_item_modal_add_item__["a" /* ModalAddItemPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_orders_booked_orders_booked__["a" /* OrdersBookedPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_pending_invoices_filter_pending_invoices_filter__["a" /* PendingInvoicesFilterPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_pending_invoices_pending_invoices__["a" /* PendingInvoicesPage */],
                // TestPage,
                __WEBPACK_IMPORTED_MODULE_46__pages_aging_filter_popover_aging_filter_popover__["a" /* AgingFilterPopoverPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_popover_sort_filters_popover_sort_filters__["a" /* PopoverSortFiltersPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_modal_ledger_options_modal_ledger_options__["a" /* ModalLedgerOptionsPage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_ledger_listing_details_ledger_listing_details__["a" /* LedgerListingDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_ledger_date_selection_ledger_date_selection__["a" /* LedgerDateSelectionPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/admin-users/admin-users.module#AdminUsersPageModule', name: 'AdminUsersPage', segment: 'admin-users', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/aging-filter-popover/aging-filter-popover.module#AgingFilterPopoverPageModule', name: 'AgingFilterPopoverPage', segment: 'aging-filter-popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/aging-report-filters/aging-report-filters.module#AgingReportFiltersPageModule', name: 'AgingReportFiltersPage', segment: 'aging-report-filters', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/authorizaton-settings/authorizaton-settings.module#AuthorizatonSettingsPageModule', name: 'AuthorizatonSettingsPage', segment: 'authorizaton-settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/background-tracking/background-tracking.module#BackgroundTrackingPageModule', name: 'BackgroundTrackingPage', segment: 'background-tracking', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/change-password/change-password.module#ChangePasswordPageModule', name: 'ChangePasswordPage', segment: 'change-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact-update/contact-update.module#ContactUpdatePageModule', name: 'ContactUpdatePage', segment: 'contact-update', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/customer-aging-report/customer-aging-report.module#CustomerAgingReportPageModule', name: 'CustomerAgingReportPage', segment: 'customer-aging-report', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/customer-details/customer-details.module#CustomerDetailsPageModule', name: 'CustomerDetailsPage', segment: 'customer-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/customer-mgmt/customer-mgmt.module#CustomerMgmtPageModule', name: 'CustomerMgmtPage', segment: 'customer-mgmt', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/invoice-details/invoice-details.module#InvoiceDetailsPageModule', name: 'InvoiceDetailsPage', segment: 'invoice-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/invoice-listing-settings-popover/invoice-listing-settings-popover.module#InvoiceListingSettingsPopoverPageModule', name: 'InvoiceListingSettingsPopoverPage', segment: 'invoice-listing-settings-popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/invoices-listing/invoices-listing.module#InvoicesListingPageModule', name: 'InvoicesListingPage', segment: 'invoices-listing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ledger-date-selection/ledger-date-selection.module#LedgerDateSelectionPageModule', name: 'LedgerDateSelectionPage', segment: 'ledger-date-selection', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ledger-listing-details/ledger-listing-details.module#LedgerListingDetailsPageModule', name: 'LedgerListingDetailsPage', segment: 'ledger-listing-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-add-item/modal-add-item.module#ModalAddItemPageModule', name: 'ModalAddItemPage', segment: 'modal-add-item', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-au-admin-users/modal-au-admin-users.module#ModalAuAdminUsersPageModule', name: 'ModalAuAdminUsersPage', segment: 'modal-au-admin-users', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-ledger-options/modal-ledger-options.module#ModalLedgerOptionsPageModule', name: 'ModalLedgerOptionsPage', segment: 'modal-ledger-options', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order-add/order-add.module#OrderAddPageModule', name: 'OrderAddPage', segment: 'order-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order-details/order-details.module#OrderDetailsPageModule', name: 'OrderDetailsPage', segment: 'order-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order-mgmt/order-mgmt.module#OrderMgmtPageModule', name: 'OrderMgmtPage', segment: 'order-mgmt', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/orders-booked/orders-booked.module#OrdersBookedPageModule', name: 'OrdersBookedPage', segment: 'orders-booked', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pending-invoices-filter/pending-invoices-filter.module#PendingInvoicesFilterPageModule', name: 'PendingInvoicesFilterPage', segment: 'pending-invoices-filter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pending-invoices/pending-invoices.module#PendingInvoicesPageModule', name: 'PendingInvoicesPage', segment: 'pending-invoices', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popover-sort-filters/popover-sort-filters.module#PopoverSortFiltersPageModule', name: 'PopoverSortFiltersPage', segment: 'popover-sort-filters', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tracking-history/tracking-history.module#TrackingHistoryPageModule', name: 'TrackingHistoryPage', segment: 'tracking-history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tracking/tracking.module#TrackingPageModule', name: 'TrackingPage', segment: 'tracking', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_40_ionic_selectable__["a" /* IonicSelectableModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_authorizaton_settings_authorizaton_settings__["a" /* AuthorizatonSettingsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_change_password_change_password__["a" /* ChangePasswordPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_admin_users_admin_users__["a" /* AdminUsersPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_modal_au_admin_users_modal_au_admin_users__["a" /* ModalAuAdminUsersPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_contact_update_contact_update__["a" /* ContactUpdatePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_tracking_tracking__["a" /* TrackingPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_tracking_history_tracking_history__["a" /* TrackingHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_customer_mgmt_customer_mgmt__["a" /* CustomerMgmtPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_customer_details_customer_details__["a" /* CustomerDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_customer_aging_report_customer_aging_report__["a" /* CustomerAgingReportPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_aging_report_filters_aging_report_filters__["a" /* AgingReportFiltersPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_invoices_listing_invoices_listing__["a" /* InvoicesListingPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_invoice_details_invoice_details__["a" /* InvoiceDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_order_mgmt_order_mgmt__["a" /* OrderMgmtPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_order_details_order_details__["a" /* OrderDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_invoice_listing_settings_popover_invoice_listing_settings_popover__["a" /* InvoiceListingSettingsPopoverPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_order_add_order_add__["a" /* OrderAddPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_modal_add_item_modal_add_item__["a" /* ModalAddItemPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_orders_booked_orders_booked__["a" /* OrdersBookedPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_pending_invoices_filter_pending_invoices_filter__["a" /* PendingInvoicesFilterPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_pending_invoices_pending_invoices__["a" /* PendingInvoicesPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_aging_filter_popover_aging_filter_popover__["a" /* AgingFilterPopoverPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_popover_sort_filters_popover_sort_filters__["a" /* PopoverSortFiltersPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_modal_ledger_options_modal_ledger_options__["a" /* ModalLedgerOptionsPage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_ledger_listing_details_ledger_listing_details__["a" /* LedgerListingDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_ledger_date_selection_ledger_date_selection__["a" /* LedgerDateSelectionPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_restservice_restservice__["a" /* RestserviceProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_common_utility_common_utility__["a" /* CommonUtilityProvider */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_13__providers_constants_constants__["a" /* ConstantsProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_11__providers_interceptor_interceptor__["a" /* InterceptorProvider */], multi: true },
                __WEBPACK_IMPORTED_MODULE_22__providers_geocoder_geocoder__["a" /* GeocoderProvider */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_33__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */],
                __WEBPACK_IMPORTED_MODULE_25__providers_location_tracker_location_tracker__["a" /* LocationTrackerProvider */],
                __WEBPACK_IMPORTED_MODULE_35__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_36__ionic_native_file_opener__["a" /* FileOpener */],
                __WEBPACK_IMPORTED_MODULE_37__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_25__providers_location_tracker_location_tracker__["a" /* LocationTrackerProvider */],
                __WEBPACK_IMPORTED_MODULE_41__ionic_native_diagnostic__["a" /* Diagnostic */],
                __WEBPACK_IMPORTED_MODULE_42__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_49__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_50__providers_database_database__["a" /* DatabaseProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common_utility_common_utility__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__aging_report_filters_aging_report_filters__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__order_mgmt_order_mgmt__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_restservice_restservice__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_constants_constants__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_pdfmake_build_pdfmake__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_pdfmake_build_pdfmake___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_pdfmake_build_pdfmake__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_pdfmake_build_vfs_fonts__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_pdfmake_build_vfs_fonts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_pdfmake_build_vfs_fonts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_social_sharing__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_file_opener__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_file__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pending_invoices_filter_pending_invoices_filter__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__invoice_details_invoice_details__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__invoice_listing_settings_popover_invoice_listing_settings_popover__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__aging_filter_popover_aging_filter_popover__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__popover_sort_filters_popover_sort_filters__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__modal_ledger_options_modal_ledger_options__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_moment_timezone__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_moment_timezone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ledger_listing_details_ledger_listing_details__ = __webpack_require__(239);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















__WEBPACK_IMPORTED_MODULE_8_pdfmake_build_pdfmake___default.a.vfs = __WEBPACK_IMPORTED_MODULE_9_pdfmake_build_vfs_fonts___default.a.pdfMake.vfs;
var CustomerDetailsPage = /** @class */ (function () {
    function CustomerDetailsPage(navCtrl, navParams, commonUtility, view, restService, popOverController, alertCtrl, file, fileOpener, socialSharing, modalController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.commonUtility = commonUtility;
        this.view = view;
        this.restService = restService;
        this.popOverController = popOverController;
        this.alertCtrl = alertCtrl;
        this.file = file;
        this.fileOpener = fileOpener;
        this.socialSharing = socialSharing;
        this.modalController = modalController;
        this.momentjs = __WEBPACK_IMPORTED_MODULE_19_moment_timezone__;
        this.isModalData = false;
        this.ledgerInvoiceList = [];
        this.ledgerOpeningBalance = 0;
        this.totalLedgerInvoiceBalance = 0;
        this.pdfObj = null;
        this.customerAllInvoicesList = [];
        this.originalCustomerAllInvoicesList = [];
        this.tillDate = '';
        this.displayCriteria = '0';
        this.totalInvoiceBalance = 0;
        this.originalCustomerBalance = 0;
        this.currentSortOrder = 0;
        this.customerBalance = 0;
        this.totalDebitBalance = 0;
        this.totalCreditBalance = 0;
        this.currDate = new Date().toISOString();
        this.agingReportList = [];
        this.agingPeriod = '';
        this.datePeriod = '';
        this.imgPath = cordova.file.applicationDirectory + 'www/' + __WEBPACK_IMPORTED_MODULE_7__providers_constants_constants__["a" /* ConstantsProvider */].CONFIG_DS_IMG_PATH;
        console.log('Running Newest');
        this.tillDate = this.momentjs(new Date()).format('DD MMM YY');
        this.customer = this.navParams.get('customer');
        this.isModalData = this.navParams.get('isModalData') == undefined || this.navParams.get('isModalData') == null || this.navParams.get('isModalData') == '' ? false : this.navParams.get('isModalData');
        console.log('customer = ' + JSON.stringify(this.customer) + '\n Till Date = ' + this.tillDate);
        this.originalCustomerBalance = Number.parseFloat(this.customer.customerDetails.balance);
        console.log('Original Customer Balance = ' + this.originalCustomerBalance);
        // this.customerAllInvoicesList = this.customer.customerInvoicesList;
        // this.originalCustomerAllInvoicesList = this.customer.customerInvoicesList;
        // this.setCustomerBalanceAndDueDateInDays();
        // this.updateLedgerList();
        // let customerAllInvoicesApiEndpoint = ConstantsProvider.API_BASE_URL + ConstantsProvider.API_ENDPOINT_CUST_DTLS
        //   + ConstantsProvider.URL_SEPARATOR + this.customer.customerDetails.cardCode
        //   + ConstantsProvider.URL_SEPARATOR + ConstantsProvider.API_ENDPOINT_CUST_ALL_INVOICES
        //   + '?till-date=' + this.tillDate;
        // this.restService.getDetails(customerAllInvoicesApiEndpoint)
        //   .subscribe(
        //     (response) => {
        //       console.log('Customer ALl Invoices = ' + JSON.stringify(response.response));
        //       this.customerAllInvoicesList = response.response;
        //       this.originalCustomerAllInvoicesList = response.response;
        //       this.setCustomerBalanceAndDueDateInDays();
        //       this.updateLedgerList();
        //     }
        //   );
    }
    CustomerDetailsPage.prototype.setCustomerBalanceAndDueDateInDays = function () {
        var _this = this;
        this.customerBalance = 0;
        // let todaysDate: Date = new Date();
        if (null != this.customerAllInvoicesList && this.customerAllInvoicesList.length > 0) {
            this.customerAllInvoicesList.forEach(function (invoice) {
                if (invoice.type == 'IN' || invoice.type == 'OB' || invoice.type == 'JE') {
                    console.log('invoice.grossTotal = ' + invoice.grossTotal);
                    _this.customerBalance = _this.customerBalance + Number.parseFloat(invoice.grossTotal);
                }
                // this.commonUtility.calculateDiff(new Date(invoice.invoiceDate), todaysDate)
            });
        }
    };
    CustomerDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustomerDetailsPage');
        this.customerAllInvoicesList = this.customer.customerInvoicesList;
        this.originalCustomerAllInvoicesList = this.customer.customerInvoicesList;
        this.setCustomerBalanceAndDueDateInDays();
        this.updateLedgerList();
    };
    CustomerDetailsPage.prototype.dismissModal = function () {
        var modalData = {
            isAdded: false
        };
        this.view.dismiss(modalData);
    };
    CustomerDetailsPage.prototype.showAgingReport = function () {
        console.log('showAgingReport CustomerDetailsPage');
        if (this.commonUtility.isNetworkAvailable()) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__aging_report_filters_aging_report_filters__["a" /* AgingReportFiltersPage */], {
                customer: this.customer
            });
        }
    };
    CustomerDetailsPage.prototype.showOrders = function () {
        console.log('showOrders CustomerDetailsPage');
        // this.commonUtility.presentToast('Not Yet Implemented', 5000);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__order_mgmt_order_mgmt__["a" /* OrderMgmtPage */], {
            customer: this.customer
        });
    };
    CustomerDetailsPage.prototype.callCust = function (custContactNumber) {
        console.log('Calling Customer on : ' + custContactNumber);
        this.commonUtility.callNumber(custContactNumber, true);
    };
    CustomerDetailsPage.prototype.shareLedger = function () {
        // let ledgerBalanceApiEndpoint = ConstantsProvider.API_BASE_URL + ConstantsProvider.API_ENDPOINT_CUST_DTLS
        //   + ConstantsProvider.URL_SEPARATOR + this.customer.customerDetails.cardCode
        //   + ConstantsProvider.URL_SEPARATOR + ConstantsProvider.API_ENDPOINT_LEDGER_REPORT_NEW;
        // console.log('ledgerBalanceApiEndpoint = ' + ledgerBalanceApiEndpoint);
        // this.restService.getDetails(ledgerBalanceApiEndpoint)
        //   .subscribe(
        //     (response) => {
        //       console.log('Response = ' + JSON.stringify(response.response));
        //       this.ledgerInvoiceList = response.response;
        //       this.ledgerInvoiceList.forEach(
        //         (ledgerInvoice) => {
        //           this.totalLedgerInvoiceBalance = this.totalLedgerInvoiceBalance
        //             + Number.parseFloat(ledgerInvoice.balance);
        //         }
        //       );
        //       console.log('Ledger Invoice Final List = ' + JSON.stringify(this.ledgerInvoiceList));
        //       this.showLedgerShareOptions();
        //     }
        //   );
        // this.updateLedgerList();
        console.log('Ledger Invoice Final List = ' + JSON.stringify(this.ledgerInvoiceList));
        this.createLedgerPdfAndShare();
    };
    CustomerDetailsPage.prototype.updateLedgerList = function () {
        var _this = this;
        this.totalCreditBalance = 0;
        this.totalDebitBalance = 0;
        var sortedList = [];
        this.totalLedgerInvoiceBalance = 0;
        if (null != this.originalCustomerAllInvoicesList && this.originalCustomerAllInvoicesList.length > 0) {
            this.originalCustomerAllInvoicesList.forEach(function (invoice) {
                if (invoice.invoiceDate >= '2019-04-01') {
                    console.log("Pass: " + JSON.stringify('Invoice no = ' + invoice.invoiceNo));
                    sortedList.push(invoice);
                    _this.totalDebitBalance = _this.totalDebitBalance + Number.parseFloat(invoice.debit);
                    _this.totalCreditBalance = _this.totalCreditBalance + Number.parseFloat(invoice.credit);
                }
            });
        }
        this.ledgerInvoiceList = [];
        this.ledgerInvoiceList = sortedList;
    };
    CustomerDetailsPage.prototype.showLedgerShareOptions = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Show Ledger',
            subTitle: 'Do you want to Share the ledger?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Ok clicked');
                        // this.downloadLedgerReport();
                        _this.createLedgerPdfAndShare();
                    }
                }
            ]
        });
        alert.present();
    };
    CustomerDetailsPage.prototype.createLedgerPdfAndShare = function () {
        // alert('Creating Ledger PDF And Sharing');
        var _this = this;
        var body = [];
        // body.push(['Post. Date', 'Trans.', 'Source', 'Debit', 'Credit.', 'Cumulative Balance', 'Balance']);
        body.push(['Post. Date', 'Trans.', 'Ref2', 'Source', 'Debit', 'Credit']);
        this.ledgerInvoiceList.forEach(function (ledgerInvoice) {
            body.push([
                _this.momentjs(ledgerInvoice.invoiceDate).format('DD MMM YYYY'),
                ledgerInvoice.transId, ledgerInvoice.ref2, ledgerInvoice.type,
                ledgerInvoice.debit == 0 ? '' : ledgerInvoice.debit,
                ledgerInvoice.credit == 0 ? '' : ledgerInvoice.credit
            ]);
            // ledgerInvoice.cumulativeBalance, ledgerInvoice.grossTotal]);
        });
        body.push(['', '', '', { text: 'Total', bold: true }, { text: this.totalDebitBalance, bold: true }, { text: this.totalCreditBalance, bold: true }]);
        body.push(['', '', '', { text: 'Total Due Balance', bold: true }, { text: (this.totalDebitBalance - this.totalCreditBalance), colSpan: 2, bold: true }]);
        var docDefinition = this.commonUtility.getDocDefination('Ledger Report', '01 Apr 19 - 31 Mar 20', '', this.customer.customerDetails.cardName, body);
        this.pdfObj = __WEBPACK_IMPORTED_MODULE_8_pdfmake_build_pdfmake___default.a.createPdf(docDefinition);
        this.downloadPdf('JBSLedgerReport_' + this.customer.customerDetails.cardName + '.pdf');
    };
    CustomerDetailsPage.prototype.downloadPdf = function (fileName) {
        var _this = this;
        console.log('Getting Buffer');
        this.pdfObj.getBuffer(function (buffer) {
            var blob = new Blob([buffer], { type: 'application/pdf' });
            // Save the PDF to the data Directory of our App
            console.log('Saving PDF, Data Directory = ' + _this.file.dataDirectory + ', fileName = ' + fileName);
            _this.file.writeFile(_this.file.dataDirectory, fileName, blob, { replace: true }).then(function (fileEntry) {
                // Open the PDf with the correct OS tools
                // this.fileOpener.open(this.file.dataDirectory + fileName, 'application/pdf');
                console.log('PDF Assigning');
                _this.pdf = _this.file.dataDirectory + fileName;
                console.log('Sharing PDF');
                _this.share();
            })
                .catch(function (e) {
                console.log('Error = ' + JSON.stringify(e));
            });
        });
    };
    CustomerDetailsPage.prototype.share = function () {
        //alert('Sharing Message');
        this.socialSharing.share("", "", this.pdf, null).then(function () {
            console.log('Shared PDF');
            // alert('Successfully Shared The File');
        }).catch(function (e) {
            alert('Error : ' + JSON.stringify(e));
        });
    };
    CustomerDetailsPage.prototype.showPendingInvoicesFilter = function () {
        console.log('showPendingInvoicesFilter CustomerDetails');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__pending_invoices_filter_pending_invoices_filter__["a" /* PendingInvoicesFilterPage */], {
            customer: this.customer
        });
    };
    CustomerDetailsPage.prototype.showInvoiceDetails = function (invoice) {
        console.log('showInvoiceDetails CustomerDetailsPage');
        // console.log('invoice.invoiceItemsList = ' + invoice.invoiceItemsList);
        if (invoice.type == 'IN') {
            console.log('Navigating to Invoice Deatils Page');
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__invoice_details_invoice_details__["a" /* InvoiceDetailsPage */], {
                customer: this.customer,
                fromDate: this.tillDate,
                invoice: invoice
            });
        }
        else {
            var mssgToDisplay = 'This is an ' + invoice.type + ' type Entry and does not have any order items associated with it.';
            var alert_1 = this.alertCtrl.create({
                title: 'General Entry',
                subTitle: mssgToDisplay,
                buttons: ['OK']
            });
            alert_1.present();
        }
    };
    CustomerDetailsPage.prototype.presentPopover = function (event) {
        var _this = this;
        var popOver = this.popOverController.create(__WEBPACK_IMPORTED_MODULE_15__invoice_listing_settings_popover_invoice_listing_settings_popover__["a" /* InvoiceListingSettingsPopoverPage */], {
            customer: this.customer
        });
        popOver.present({
            ev: event
        });
        popOver.onDidDismiss(function (data) {
            if (data && data.showLedger) {
                // this.showLedgerShareOptions();
                _this.updateLedgerList();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_20__ledger_listing_details_ledger_listing_details__["a" /* LedgerListingDetailsPage */], {
                    ledgerInvoiceList: _this.ledgerInvoiceList,
                    customer: _this.customer
                });
            }
        });
    };
    CustomerDetailsPage.prototype.showLedgerOptions = function () {
        var _this = this;
        var modal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_18__modal_ledger_options_modal_ledger_options__["a" /* ModalLedgerOptionsPage */]);
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data.isAdded) {
                console.log('selected option = ' + data.optionSelected);
                _this.updateLedgerList();
                if (data.optionSelected == 'Share') {
                    _this.shareLedger();
                }
                else if (data.optionSelected == 'Print') {
                    _this.downloadLedgerReport();
                }
            }
            else
                console.log('Nothing Selected');
        });
    };
    CustomerDetailsPage.prototype.presentPopoverAging = function (event) {
        var _this = this;
        var popOver = this.popOverController.create(__WEBPACK_IMPORTED_MODULE_16__aging_filter_popover_aging_filter_popover__["a" /* AgingFilterPopoverPage */], {
            agingperiod: this.displayCriteria
        });
        popOver.present({
            ev: event
        });
        popOver.onDidDismiss(function (data) {
            if (data && data.showAging) {
                var selectedAgingPeriod = Number.parseInt(data.agingPeriod);
                if (selectedAgingPeriod == 0) {
                    _this.customerAllInvoicesList = _this.originalCustomerAllInvoicesList;
                }
                else {
                    var dateToCompare = new Date(_this.tillDate);
                    console.log('Active Date = ' + dateToCompare.toISOString() + ', selectedAgingPeriod = ' + selectedAgingPeriod);
                    dateToCompare.setDate(dateToCompare.getDate() - selectedAgingPeriod);
                    console.log('Date Back by selectedAGingPeriod Days = ' + dateToCompare.toISOString());
                    var dateToCompareFormatted_1 = new __WEBPACK_IMPORTED_MODULE_5__angular_common__["d" /* DatePipe */](__WEBPACK_IMPORTED_MODULE_7__providers_constants_constants__["a" /* ConstantsProvider */].APP_DATE_LOCALE).transform(dateToCompare.toISOString(), 'yyyy-MM-dd');
                    console.log('dateToCompareFormatted = ' + dateToCompareFormatted_1);
                    var sortedList_1 = [];
                    _this.originalCustomerAllInvoicesList.forEach(function (invoice) {
                        if (invoice.invoiceDate < dateToCompareFormatted_1) {
                            sortedList_1.push(invoice);
                            // if (invoice.type == 'IN' || invoice.type == 'OB')
                            //   customerBalance = customerBalance + Number.parseFloat(invoice.grossTotal);
                            // console.log("Pass: " + 'Invoice no = ' + invoice.invoiceNo +
                            //   ', Amount = ' + invoice.grossTotal);
                        }
                    });
                    _this.customerAllInvoicesList = sortedList_1;
                }
                // this.customer.customerDetails.balance = customerBalance;
                // console.log('Customer Updated balance = ' + customerBalance);
                _this.setCustomerBalanceAndDueDateInDays();
                _this.displayCriteria = selectedAgingPeriod;
            }
        });
    };
    CustomerDetailsPage.prototype.presentPopoverDataSorting = function (event) {
        var _this = this;
        var popOver = this.popOverController.create(__WEBPACK_IMPORTED_MODULE_17__popover_sort_filters_popover_sort_filters__["a" /* PopoverSortFiltersPage */], {
            sortOrder: this.currentSortOrder
        });
        popOver.present({
            ev: event
        });
        popOver.onDidDismiss(function (data) {
            if (data && data.sortData) {
                var selectedSortOrder = Number.parseInt(data.sortOrder);
                console.log('selectedSortOrder = ' + selectedSortOrder);
                switch (selectedSortOrder) {
                    // 1 = Amount (Low - High)
                    case 1:
                        _this.customerAllInvoicesList.sort(function (a, b) { return a.grossTotal <= b.grossTotal ? -1 : 1; });
                        _this.currentSortOrder = selectedSortOrder;
                        break;
                    // 2 = Amount (High - Low) 
                    case 2:
                        _this.customerAllInvoicesList.sort(function (a, b) { return a.grossTotal >= b.grossTotal ? -1 : 1; });
                        _this.currentSortOrder = selectedSortOrder;
                        break;
                    // 3 = Due Days (Low - High)
                    case 3:
                        _this.customerAllInvoicesList.sort(function (a, b) { return a.dueDateInDays <= b.dueDateInDays ? -1 : 1; });
                        _this.currentSortOrder = selectedSortOrder;
                        break;
                    // 4 = Due Days (High - Low)
                    case 4:
                        _this.customerAllInvoicesList.sort(function (a, b) { return a.dueDateInDays >= b.dueDateInDays ? -1 : 1; });
                        _this.currentSortOrder = selectedSortOrder;
                        break;
                    default:
                        break;
                }
            }
        });
    };
    CustomerDetailsPage.prototype.createAgingPDFAndShare = function () {
        var _this = this;
        if (null != this.customerAllInvoicesList && this.customerAllInvoicesList.length > 0) {
            console.log('shareAgingReport InvoiceListingPage');
            var body_1 = [];
            body_1.push(['Date', 'Type', 'Invoice No.', 'Amount', 'Due Date', 'Overdue By Days']);
            this.totalInvoiceBalance = 0;
            var todaysDate_1 = new Date();
            this.customerAllInvoicesList.forEach(function (invoice) {
                if ((invoice.type == 'JE' || invoice.type == 'IN' || invoice.type == 'OB')) {
                    var goAhead = true;
                    if (invoice.type == 'IN' && invoice.isPaid != 'O')
                        goAhead = false;
                    if (goAhead) {
                        body_1.push([
                            _this.momentjs(invoice.invoiceDate).format(__WEBPACK_IMPORTED_MODULE_7__providers_constants_constants__["a" /* ConstantsProvider */].REPORTS_DATE_FORMAT),
                            invoice.type,
                            invoice.invoiceNo,
                            invoice.grossTotal,
                            _this.momentjs(invoice.dueDate).format(__WEBPACK_IMPORTED_MODULE_7__providers_constants_constants__["a" /* ConstantsProvider */].REPORTS_DATE_FORMAT),
                            _this.commonUtility.calculateDiffInDays(new Date(invoice.invoiceDate), todaysDate_1)
                        ]);
                    }
                    _this.totalInvoiceBalance = _this.totalInvoiceBalance + Number.parseFloat(invoice.grossTotal);
                }
            });
            body_1.push(['', '', 'Total', this.totalInvoiceBalance, '', '']);
            var agingPeriod = '>' + this.displayCriteria;
            // let datePeriod = new DatePipe(ConstantsProvider.APP_DATE_LOCALE).transform(this.tillDate, ConstantsProvider.REPORTS_DATE_FORMAT)
            //   + ' | ' + agingPeriod;
            var datePeriod = this.momentjs(this.tillDate).format(__WEBPACK_IMPORTED_MODULE_7__providers_constants_constants__["a" /* ConstantsProvider */].REPORTS_DATE_FORMAT)
                + ' | ' + agingPeriod;
            var docDefinition = this.commonUtility.getDocDefination('Overdue Report', datePeriod, '', this.customer.customerDetails.cardName, body_1);
            console.log('Creating PDF');
            this.pdfObj = __WEBPACK_IMPORTED_MODULE_8_pdfmake_build_pdfmake___default.a.createPdf(docDefinition);
            console.log('Created PDF');
            console.log('Downloading PDF');
            this.downloadPdf('JBSOverdueReport_' + this.customer.customerDetails.cardName + '.pdf');
            console.log('Downloaded PDF');
        }
        else {
            this.commonUtility.presentToast('No Aging Records Found', 5000);
        }
    };
    CustomerDetailsPage.prototype.downloadLedgerReport = function () {
        console.log('downloadReport InvoiceListingPage');
        // this.updateLedgerList();
        var page = document.getElementById('pdfDivLedger');
        cordova.plugins.printer.print(page, 'Ledger_Report.pdf');
    };
    CustomerDetailsPage.prototype.downloadAgingReport = function () {
        var _this = this;
        this.totalInvoiceBalance = 0;
        var todaysDate = new Date();
        this.agingReportList = [];
        var i = 1;
        console.log('this.customerAllInvoicesList = ' + JSON.stringify(this.customerAllInvoicesList));
        if (null != this.customerAllInvoicesList && this.customerAllInvoicesList.length > 0) {
            this.customerAllInvoicesList.forEach(function (invoice) {
                console.log('i = ' + i);
                i++;
                if ((invoice.type == 'JE' || invoice.type == 'IN' || invoice.type == 'OB')) {
                    var goAhead = true;
                    if (invoice.type == 'IN' && invoice.isPaid != 'O')
                        goAhead = false;
                    if (goAhead) {
                        _this.agingReportList.push({
                            invoiceDate: _this.momentjs(invoice.invoiceDate).format(__WEBPACK_IMPORTED_MODULE_7__providers_constants_constants__["a" /* ConstantsProvider */].REPORTS_DATE_FORMAT),
                            // invoiceDate: new DatePipe(ConstantsProvider.APP_DATE_LOCALE).transform(invoice.invoiceDate, ConstantsProvider.REPORTS_DATE_FORMAT),
                            type: invoice.type,
                            invoiceNo: invoice.invoiceNo,
                            grossTotal: invoice.grossTotal,
                            dueDate: _this.momentjs(invoice.dueDate).format(__WEBPACK_IMPORTED_MODULE_7__providers_constants_constants__["a" /* ConstantsProvider */].REPORTS_DATE_FORMAT),
                            // dueDate: new DatePipe(ConstantsProvider.APP_DATE_LOCALE).transform(invoice.dueDate, ConstantsProvider.REPORTS_DATE_FORMAT),
                            overduedays: _this.commonUtility.calculateDiffInDays(new Date(invoice.invoiceDate), todaysDate)
                        });
                    }
                    _this.totalInvoiceBalance = _this.totalInvoiceBalance + Number.parseFloat(invoice.grossTotal);
                }
            });
        }
        console.log('final i = ' + i);
        this.agingReportList.push({
            invoiceDate: '', type: '', invoiceNo: 'Total', grossTotal: this.totalInvoiceBalance,
            dueDate: '', overduedays: ''
        });
        this.agingPeriod = '>' + this.displayCriteria;
        this.datePeriod = this.commonUtility.formatDate(this.tillDate, __WEBPACK_IMPORTED_MODULE_7__providers_constants_constants__["a" /* ConstantsProvider */].REPORTS_DATE_FORMAT)
            + ' | ' + this.agingPeriod;
        // this.datePeriod = new DatePipe(ConstantsProvider.APP_DATE_LOCALE).transform(this.tillDate, ConstantsProvider.REPORTS_DATE_FORMAT)
        // + ' | ' + this.agingPeriod;
        console.log('agingReportList = ' + JSON.stringify(this.agingReportList));
        setTimeout(function () {
            var page = document.getElementById('pdfDivAging');
            cordova.plugins.printer.print(page, 'Overdue_Report.pdf');
        }, 2000);
    };
    CustomerDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-customer-details',template:/*ion-inline-start:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\customer-details\customer-details.html"*/'<!--\n  Generated template for the CustomerDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navbar" text-center>\n    <ion-buttons end>\n      <button ion-button item-end (click)="presentPopover($event)" style="background-color: #1c2431; font-size: 20px; color:#E4EBED;">\n        <ion-icon name="md-more"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Customer Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding>\n\n  <!-- Customer Basic Details -->\n  <ion-card no-margin style="width:100%;">\n\n    <ion-card-header>\n      <ion-row>\n        <ion-col col-12 text-center>\n          <strong>{{customer.customerDetails.cardCode}} - {{customer.customerDetails.cardName}}</strong>\n        </ion-col>\n      </ion-row>\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-row>\n        <ion-col col-12 text-center>\n          <span style="font-size:4rem;">\n            <strong>\n              <i class="fa fa-rupee"></i>\n              {{customer.customerDetails.balance == null || customer.customerDetails.balance == \'\' ? \'0\' :\n              customer.customerDetails.balance }}\n            </strong>\n          </span>\n          <p style="color:#E4EBED;font-size:10px;">Total Due Balance</p>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n  <!-- Credit Limit And Deviation -->\n  <ion-row no-padding>\n    <ion-col padding text-center col-6 style="border-right: 1px solid #FFCB08">\n      <p color="primary"><strong>Credit Limit</strong></p>\n      <p color="primary"><i class="fa fa-rupee"></i> {{customer.customerDetails.creditLine}}</p>\n    </ion-col>\n    <ion-col col-6 padding text-center>\n      <p color="primary"><strong>Credit Deviation</strong></p>\n      <p color="primary"><i class="fa fa-rupee"></i> {{customer.customerDetails.creditDeviation}}</p>\n    </ion-col>\n  </ion-row>\n\n\n\n  <!-- Customer All Invoices List-->\n  <ion-row style="margin-bottom:2%;">\n    <!-- <ion-col col-10 class="pj-full-width-border" no-margin>\n      <ion-label>Invoices</ion-label>\n    </ion-col> -->\n    <ion-col col-3 class="pj-full-width-border" no-margin>\n      <button ion-button (click)="createAgingPDFAndShare()" style="background-color: #1c2431; font-size: 20px; color:#E4EBED;">\n        <ion-icon name="share"></ion-icon>\n      </button>\n    </ion-col>\n    <ion-col col-3 class="pj-full-width-border" no-margin>\n      <button ion-button (click)="downloadAgingReport()" style="background-color: #1c2431; font-size: 20px; color:#E4EBED;">\n        <ion-icon name="ios-download-outline"></ion-icon>\n      </button>\n    </ion-col>\n    <ion-col col-3 class="pj-full-width-border" no-margin>\n      <button ion-button (click)="presentPopoverAging($event)" style="background-color: #1c2431; font-size: 20px; color:#E4EBED;">\n        <ion-icon name="ios-list"></ion-icon>\n      </button>\n    </ion-col>\n    <ion-col col-3 class="pj-full-width-border" no-margin>\n      <button ion-button (click)="presentPopoverDataSorting($event)" style="background-color: #1c2431; font-size: 20px; color:#E4EBED;">\n        <ion-icon name="ios-funnel"></ion-icon>\n      </button>\n    </ion-col>\n  </ion-row>\n\n  <ion-card *ngIf="customerBalance != null">\n    <ion-card-content>\n      <ion-row>\n        <ion-col col-12 text-center color="primary">\n          <span style="font-size:4rem;">\n            <strong>\n              <i class="fa fa-rupee"></i> {{customerBalance}}\n            </strong>\n          </span>\n          <p style="color:#E4EBED;font-size:10px;">( Pending Invoice Balance As Of {{momentjs(tillDate).format(\'DD MMM YY\')}} |\n            > {{displayCriteria}} )</p>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n  <!-- Customer All Invoices List-->\n\n  <div *ngIf="null == customerAllInvoicesList || customerAllInvoicesList.length == 0" class="pj-empty-page" style="margin-top: 20%;">\n    <ion-icon name="ios-document-outline"></ion-icon>\n    <h4>No Invoices To Show</h4>\n  </div>\n\n  <ion-list>\n    <div *ngFor="let invoice of customerAllInvoicesList">\n\n      <!-- <button *ngIf="invoice.type == \'OB\'" color="bgcolor" ion-item (click)="showInvoiceDetails(invoice)">\n        <ion-row>\n          <ion-col col-9>\n            <p color="light"><strong>{{invoice.invoiceNo}}</strong></p>\n            <span style="font-size:10px; color:#AFAFAF">{{invoice.invoiceDate | date: \'dd MMM yy\' }}</span>\n          </ion-col>\n          <ion-col col-3>\n            <p><i class="fa fa-rupee"></i>{{invoice.grossTotal}}</p>\n            <span class="pj-bill-status">{{invoice.type}}</span>\n          </ion-col>\n        </ion-row>\n      </button> -->\n\n      <button *ngIf="invoice.type == \'JE\' || invoice.type == \'OB\' || (invoice.type == \'IN\' && invoice.isPaid == \'O\')"\n        color="bgcolor" ion-item (click)="showInvoiceDetails(invoice)">\n        <ion-row>\n          <ion-col col-9>\n            <p color="light"><strong>{{invoice.invoiceNo}}</strong></p>\n            <span style="font-size:10px; color:#AFAFAF">{{momentjs(invoice.invoiceDate).format(\'DD MMM\')}} | {{invoice.dueDateInDays}} Days | Due: {{momentjs(invoice.dueDate).format(\'DD MMM\')}}</span>\n            <!-- <span style="font-size:10px; color:#AFAFAF">{{invoice.invoiceDate |\n            date: \'dd MMM\'}}</span> -->\n          </ion-col>\n          <ion-col col-3>\n            <p><i class="fa fa-rupee"></i> {{invoice.grossTotal}}</p>\n            <span class="pj-bill-status">{{invoice.type}}</span>\n          </ion-col>\n        </ion-row>\n      </button>\n    </div>\n  </ion-list>\n  <!-- ./Customer All Invoices List-->\n\n\n  <ion-fab bottom center (click)="dismissModal()" *ngIf="isModalData">\n    <button color="primary" ion-fab>\n      <ion-icon name="ios-arrow-round-forward-outline"></ion-icon>\n    </button>\n  </ion-fab>\n\n  <div id="pdfDivLedger" style="display:none">\n    <!-- <div id="pdfDivLedger"> -->\n    <div style="text-align: center;">\n      <h4>JAGTAP BUILDING SOLUTIONS</h4>\n      <p>Asthavinayak Soc, Opp Bharat Jyoti Stop,</p>\n      <p>Bibwewadi , Pune - 411037</p>\n      <p>Tel No. : (O) 24216162, 9822610611</p>\n      <p>Phone no. : 02024216162</p>\n      <p>Pin code : 411037</p>\n      <p>GSTIN : 27AFJPJ8271L1ZV</p>\n      <p>E-Mail : jagtapbsolutions@gmail.com</p>\n    </div>\n\n    <div style="margin:5% 0;text-align: center; font-weight: bold">\n      <h4>{{customer.customerDetails.cardName}}</h4>\n    </div>\n\n    <div style="text-align: center;">\n      <h4>Ledger Report</h4>\n      <p>01 Apr 19 - 31 Mar 20</p>\n      <p>Date {{ momentjs(currDate).format(\'DD MMM YY\') }}</p>\n    </div>\n\n    <div style="margin-top:5%">\n\n      <table style="border:1px solid #000;border-collapse: collapse; width:100%;">\n        <tr>\n          <td style="border:1px solid #000;">\n            Post. Date\n          </td>\n          <td style="border:1px solid #000;">\n            Trans.\n          </td>\n          <td style="border:1px solid #000;">\n            Ref2\n          </td>\n          <td style="border:1px solid #000;">\n            Source\n          </td>\n          <td style="border:1px solid #000;">\n            Debit\n          </td>\n          <td style="border:1px solid #000;">\n            Credit\n          </td>\n        </tr>\n        <tr *ngFor="let ledgerInvoice of ledgerInvoiceList">\n          <td style="border:1px solid #000;">\n            {{momentjs(ledgerInvoice.invoiceDate).format(\'DD MMM YY\')}}\n          </td>\n          <td style="border:1px solid #000;">\n            {{ ledgerInvoice.transId }}\n          </td>\n          <td style="border:1px solid #000;">\n            {{ledgerInvoice.ref2}}\n          </td>\n          <td style="border:1px solid #000;">\n            {{ ledgerInvoice.type }}\n          </td>\n          <td style="border:1px solid #000;">\n            {{ledgerInvoice.debit == 0 ? \'\' : ledgerInvoice.debit }}\n          </td>\n          <td style="border:1px solid #000;">\n            {{ledgerInvoice.credit == 0 ? \'\' : ledgerInvoice.credit}}\n          </td>\n        </tr>\n\n        <tr style="font-weight: bold;">\n          <td colspan=4 style="border:1px solid #000;">\n            Total\n          </td>\n          <td style="border:1px solid #000;">\n            {{totalDebitBalance}}\n          </td>\n          <td style="border:1px solid #000;">\n            {{totalCreditBalance}}\n          </td>\n        </tr>\n\n        <tr style="font-weight: bold;">\n          <td colspan=4 style="border:1px solid #000;">\n            Total Due Balance\n          </td>\n          <td colspan=2 style="border:1px solid #000;">\n            {{ totalDebitBalance - totalCreditBalance }}\n          </td>\n        </tr>\n      </table>\n\n      <div style="margin-top: 5%; float:right;">\n        <img [src]="imgPath" style="width:100%;height:auto;" />\n      </div>\n    </div>\n  </div>\n\n\n  <div id="pdfDivAging" style="display:none">\n    <!-- <div id="pdfDivAging"> -->\n    <div style="text-align: center;">\n      <h4>JAGTAP BUILDING SOLUTIONS</h4>\n      <p>Asthavinayak Soc, Opp Bharat Jyoti Stop,</p>\n      <p>Bibwewadi , Pune - 411037</p>\n      <p>Tel No. : (O) 24216162, 9822610611</p>\n      <p>Phone no. : 02024216162</p>\n      <p>Pin code : 411037</p>\n      <p>GSTIN : 27AFJPJ8271L1ZV</p>\n      <p>E-Mail : jagtapbsolutions@gmail.com</p>\n    </div>\n\n    <div style="margin:5% 0;text-align: center; font-weight: bold">\n      <h4>{{customer.customerDetails.cardName}}</h4>\n    </div>\n\n    <div style="text-align: center;">\n      <h4>Overdue Report</h4>\n      <p>{{datePeriod}}</p>\n      <p>Date {{ momentjs(currDate).format(\'DD MMM YY\') }}</p>\n    </div>\n\n    <div style="margin-top:5%">\n\n      <table style="border:1px solid #000;border-collapse: collapse; width:100%;">\n        <tr>\n          <td style="border:1px solid #000;">\n            Date\n          </td>\n          <td style="border:1px solid #000;">\n            Type\n          </td>\n          <td style="border:1px solid #000;">\n            Invoice No.\n          </td>\n          <td style="border:1px solid #000;">\n            Amount\n          </td>\n          <td style="border:1px solid #000;">\n            Due Date\n          </td>\n          <td style="border:1px solid #000;">\n            Overdue By Days\n          </td>\n        </tr>\n        <tr *ngFor="let agingInvoice of agingReportList">\n          <td style="border:1px solid #000;">\n            {{ agingInvoice.invoiceDate == \'\' ? \'\' : momentjs(agingInvoice.invoiceDate).format(\'DD MMM YY\')}}\n          </td>\n          <td style="border:1px solid #000;">\n            {{ agingInvoice.type }}\n          </td>\n          <td style="border:1px solid #000;">\n            {{agingInvoice.invoiceNo}}\n          </td>\n          <td style="border:1px solid #000;">\n            {{ agingInvoice.grossTotal }}\n          </td>\n          <td style="border:1px solid #000;">\n            {{ agingInvoice.dueDate == \'\' ? \'\' : momentjs(agingInvoice.dueDate).format(\'DD MMM YY\') }}\n          </td>\n          <td style="border:1px solid #000;">\n            {{ agingInvoice.overduedays }}\n          </td>\n        </tr>\n\n      </table>\n\n      <div style="margin-top: 5%; float:right;">\n        <img [src]="imgPath" style="width:100%;height:auto;" />\n      </div>\n\n    </div>\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\customer-details\customer-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_common_utility_common_utility__["a" /* CommonUtilityProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_restservice_restservice__["a" /* RestserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_file_opener__["a" /* FileOpener */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]])
    ], CustomerDetailsPage);
    return CustomerDetailsPage;
}());

//# sourceMappingURL=customer-details.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderMgmtPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common_utility_common_utility__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_details_order_details__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_constants_constants__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_restservice_restservice__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__customer_mgmt_customer_mgmt__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__orders_booked_orders_booked__ = __webpack_require__(235);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the OrderMgmtPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderMgmtPage = /** @class */ (function () {
    function OrderMgmtPage(navCtrl, navParams, actionSheetCtrl, commonUtility, restService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.commonUtility = commonUtility;
        this.restService = restService;
        this.orderDetailsList = [];
        this.limit = 10;
        this.pageNo = 1;
        this.customer = null;
        this.myInput = '';
        this.originalOrdersList = [];
        this.bookedOrderCount = 0;
        console.log('Name - ' + OrderMgmtPage_1.name);
        this.customer = this.navParams.get('customer');
        var ordersListApi = '';
        if (null == this.customer || this.customer == undefined)
            ordersListApi = __WEBPACK_IMPORTED_MODULE_4__providers_constants_constants__["a" /* ConstantsProvider */].API_BASE_URL + __WEBPACK_IMPORTED_MODULE_4__providers_constants_constants__["a" /* ConstantsProvider */].API_ENDPOINT_ORDERS
                + "?" + __WEBPACK_IMPORTED_MODULE_4__providers_constants_constants__["a" /* ConstantsProvider */].URL_PARAM_PAGE_NO + this.pageNo + __WEBPACK_IMPORTED_MODULE_4__providers_constants_constants__["a" /* ConstantsProvider */].URL_PARAM_LIMIT + this.limit;
        else
            ordersListApi = __WEBPACK_IMPORTED_MODULE_4__providers_constants_constants__["a" /* ConstantsProvider */].API_BASE_URL + __WEBPACK_IMPORTED_MODULE_4__providers_constants_constants__["a" /* ConstantsProvider */].API_ENDPOINT_CUST_DTLS
                + __WEBPACK_IMPORTED_MODULE_4__providers_constants_constants__["a" /* ConstantsProvider */].URL_SEPARATOR + this.customer.customerDetails.cardCode
                + __WEBPACK_IMPORTED_MODULE_4__providers_constants_constants__["a" /* ConstantsProvider */].URL_SEPARATOR + __WEBPACK_IMPORTED_MODULE_4__providers_constants_constants__["a" /* ConstantsProvider */].API_ENDPOINT_ORDERS;
        // + "?" + ConstantsProvider.URL_PARAM_PAGE_NO + this.pageNo + ConstantsProvider.URL_PARAM_LIMIT + this.limit;
        this.restService.getDetails(ordersListApi)
            .subscribe(function (response) {
            console.log('Response = ' + JSON.stringify(response));
            _this.orderDetailsList = response.response.orderDetailsList;
            _this.bookedOrderCount = response.response.bookedOrderCount;
        });
    }
    OrderMgmtPage_1 = OrderMgmtPage;
    OrderMgmtPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderMgmtPage');
    };
    OrderMgmtPage.prototype.naviagteToOrderCreatePage = function () {
        if (this.commonUtility.isNetworkAvailable()) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__customer_mgmt_customer_mgmt__["a" /* CustomerMgmtPage */], {
                referrer: OrderMgmtPage_1.name
            });
        }
    };
    OrderMgmtPage.prototype.openOrderDetails = function (orderDtls) {
        console.log('openOrderDetails()');
        if (this.commonUtility.isNetworkAvailable()) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__order_details_order_details__["a" /* OrderDetailsPage */], {
                orderDtlsId: orderDtls.docEntry,
                orderDtls: orderDtls
            });
        }
    };
    OrderMgmtPage.prototype.onInput = function () {
        console.log('searchTerm = ' + this.myInput);
        var searchVal = this.myInput;
        // if the value is an empty string don't filter the items
        if (searchVal && searchVal.trim() != '') {
            this.orderDetailsList = this.originalOrdersList.filter(function (orderDetailsObj) {
                var searchValLowerCase = searchVal.toLowerCase();
                console.log('Doc Num = ' + orderDetailsObj.docNum + ', Card name = ' + orderDetailsObj.cardName);
                if (orderDetailsObj.cardName.toLowerCase().indexOf(searchValLowerCase) > -1
                    || orderDetailsObj.docNum == searchValLowerCase)
                    return true;
                else
                    return false;
            });
            console.log('Customers List Length = ' + this.orderDetailsList.length);
        }
        else {
            this.orderDetailsList = this.originalOrdersList;
        }
    };
    OrderMgmtPage.prototype.openBookedOrders = function () {
        console.log('openBookedOrders OrderMgmtPage');
        if (this.bookedOrderCount > 0) {
            if (this.commonUtility.isNetworkAvailable()) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__orders_booked_orders_booked__["a" /* OrdersBookedPage */]);
            }
        }
        else {
            this.commonUtility.presentErrorToast('No Booked Orders To Show');
        }
    };
    OrderMgmtPage = OrderMgmtPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-order-mgmt',template:/*ion-inline-start:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\order-mgmt\order-mgmt.html"*/'<!--\n  Generated template for the OrderMgmtPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navbar">\n\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title text-center>Order Management</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding>\n\n  <ion-searchbar [(ngModel)]="myInput" (ionChange)="onInput()" placeholder="Search By Customer Name, Order No.">\n  </ion-searchbar>\n\n  <div *ngIf="orderDetailsList.length==0" class="pj-empty-page" style="margin-top: 40%;">\n    <ion-icon name="ios-cart-outline"></ion-icon>\n    <h4>No Orders To Show</h4>\n  </div>\n\n\n  <ion-card (click)="openBookedOrders()" *ngIf="null == customer || customer == undefined">\n\n    <ion-card-header>\n      <ion-row>\n        <ion-col col-12 text-center>\n          <strong>Booked Orders</strong>\n        </ion-col>\n      </ion-row>\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-row>\n        <ion-col col-12 text-center>\n          {{bookedOrderCount}}\n        </ion-col>\n      </ion-row>\n\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngFor="let orderDetails of orderDetailsList" (click)="openOrderDetails(orderDetails)">\n\n    <ion-card-header>\n      <ion-row>\n        <ion-col col-4>\n          <!-- <h2 class="pj-title">SO No. - {{ orderDetails.orderPrefix }}{{ orderDetails.orderNo }} </h2> -->\n          <strong>SO No. - {{ orderDetails.docNum }} </strong>\n        </ion-col>\n        <ion-col col-8>\n          <!-- //TODO: Display Order Created Ts -->\n          <!-- <p class="pj-date-and-status" style="color: #ccc;">\n            {{ orderDetails.createdTs | date: \'dd MMM yyyy hh:mm a\' }}\n          </p> -->\n        </ion-col>\n      </ion-row>\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <!-- <ion-row>\n        <ion-col col-12>\n          <h4 class="pj-title">Quotation No. - {{ orderDetails.quotationNo }}</h4>\n        </ion-col>\n      </ion-row> -->\n\n      <ion-row>\n        <ion-col col-12>\n          <!-- <h4 class="pj-card-label-light">\n            {{ orderDetails.custDtl.userPrefix }}{{ orderDetails.custDtl.userCode }} - {{ orderDetails.custDtl.firstName }}{{ orderDetails.custDtl.lastName\n            }}</h4> -->\n          <strong>{{ orderDetails.cardCode }} - {{ orderDetails.cardName }}</strong>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-12>\n          <!-- <h5 class="pj-sub-title"> {{ orderDetails.addrNm }}, {{ orderDetails.stAddr }} , {{ orderDetails.landmark }},\n            {{ orderDetails.areaNm }},\n            {{ orderDetails.cityNm }}, {{ orderDetails.stateNm }}</h5> -->\n\n        </ion-col>\n      </ion-row>\n\n      <!-- <ion-row>\n        <ion-col col-12>\n          <h5 class="pj-sub-title">Rs. {{ orderDetails.grandTotal }} </h5>\n        </ion-col>\n      </ion-row> -->\n\n      <ion-row>\n        <ion-col col-6>\n          <!-- <h5 class="pj-sub-title" *ngIf="orderDetails.createdByName != undefined">Created By - {{ orderDetails.createdByName }}</h5> -->\n          Qty - {{orderDetails.quantity}}\n        </ion-col>\n        <!-- <ion-col col-6>\n          <button ion-button small color="primary" class="pj-date-and-status" *ngIf="orderDetails.orderStatus == \'PENDING\'">\n            {{orderDetails.orderStatus}}\n          </button>\n          <button ion-button small color="secondary" class="pj-date-and-status" *ngIf="orderDetails.orderStatus == \'DELIVERED\'">\n            {{orderDetails.orderStatus}}\n          </button>\n          <button ion-button small color="primary" class="pj-date-and-status" *ngIf="orderDetails.orderStatus == \'ONGOING\'">\n            {{orderDetails.orderStatus}}\n          </button>\n          <button ion-button small color="danger" class="pj-date-and-status" *ngIf="orderDetails.orderStatus == \'CANCELLED\'">\n            {{orderDetails.orderStatus}}\n          </button>\n        </ion-col> -->\n      </ion-row>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-fab bottom right>\n    <button class="add-button" color="primary" ion-fab (click)="naviagteToOrderCreatePage()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\order-mgmt\order-mgmt.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_common_utility_common_utility__["a" /* CommonUtilityProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_restservice_restservice__["a" /* RestserviceProvider */]])
    ], OrderMgmtPage);
    return OrderMgmtPage;
    var OrderMgmtPage_1;
}());

//# sourceMappingURL=order-mgmt.js.map

/***/ }),

/***/ 890:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 393,
	"./af.js": 393,
	"./ar": 394,
	"./ar-dz": 395,
	"./ar-dz.js": 395,
	"./ar-kw": 396,
	"./ar-kw.js": 396,
	"./ar-ly": 397,
	"./ar-ly.js": 397,
	"./ar-ma": 398,
	"./ar-ma.js": 398,
	"./ar-sa": 399,
	"./ar-sa.js": 399,
	"./ar-tn": 400,
	"./ar-tn.js": 400,
	"./ar.js": 394,
	"./az": 401,
	"./az.js": 401,
	"./be": 402,
	"./be.js": 402,
	"./bg": 403,
	"./bg.js": 403,
	"./bm": 404,
	"./bm.js": 404,
	"./bn": 405,
	"./bn.js": 405,
	"./bo": 406,
	"./bo.js": 406,
	"./br": 407,
	"./br.js": 407,
	"./bs": 408,
	"./bs.js": 408,
	"./ca": 409,
	"./ca.js": 409,
	"./cs": 410,
	"./cs.js": 410,
	"./cv": 411,
	"./cv.js": 411,
	"./cy": 412,
	"./cy.js": 412,
	"./da": 413,
	"./da.js": 413,
	"./de": 414,
	"./de-at": 415,
	"./de-at.js": 415,
	"./de-ch": 416,
	"./de-ch.js": 416,
	"./de.js": 414,
	"./dv": 417,
	"./dv.js": 417,
	"./el": 418,
	"./el.js": 418,
	"./en-SG": 419,
	"./en-SG.js": 419,
	"./en-au": 420,
	"./en-au.js": 420,
	"./en-ca": 421,
	"./en-ca.js": 421,
	"./en-gb": 422,
	"./en-gb.js": 422,
	"./en-ie": 423,
	"./en-ie.js": 423,
	"./en-il": 424,
	"./en-il.js": 424,
	"./en-nz": 425,
	"./en-nz.js": 425,
	"./eo": 426,
	"./eo.js": 426,
	"./es": 427,
	"./es-do": 428,
	"./es-do.js": 428,
	"./es-us": 429,
	"./es-us.js": 429,
	"./es.js": 427,
	"./et": 430,
	"./et.js": 430,
	"./eu": 431,
	"./eu.js": 431,
	"./fa": 432,
	"./fa.js": 432,
	"./fi": 433,
	"./fi.js": 433,
	"./fo": 434,
	"./fo.js": 434,
	"./fr": 435,
	"./fr-ca": 436,
	"./fr-ca.js": 436,
	"./fr-ch": 437,
	"./fr-ch.js": 437,
	"./fr.js": 435,
	"./fy": 438,
	"./fy.js": 438,
	"./ga": 439,
	"./ga.js": 439,
	"./gd": 440,
	"./gd.js": 440,
	"./gl": 441,
	"./gl.js": 441,
	"./gom-latn": 442,
	"./gom-latn.js": 442,
	"./gu": 443,
	"./gu.js": 443,
	"./he": 444,
	"./he.js": 444,
	"./hi": 445,
	"./hi.js": 445,
	"./hr": 446,
	"./hr.js": 446,
	"./hu": 447,
	"./hu.js": 447,
	"./hy-am": 448,
	"./hy-am.js": 448,
	"./id": 449,
	"./id.js": 449,
	"./is": 450,
	"./is.js": 450,
	"./it": 451,
	"./it-ch": 452,
	"./it-ch.js": 452,
	"./it.js": 451,
	"./ja": 453,
	"./ja.js": 453,
	"./jv": 454,
	"./jv.js": 454,
	"./ka": 455,
	"./ka.js": 455,
	"./kk": 456,
	"./kk.js": 456,
	"./km": 457,
	"./km.js": 457,
	"./kn": 458,
	"./kn.js": 458,
	"./ko": 459,
	"./ko.js": 459,
	"./ku": 460,
	"./ku.js": 460,
	"./ky": 461,
	"./ky.js": 461,
	"./lb": 462,
	"./lb.js": 462,
	"./lo": 463,
	"./lo.js": 463,
	"./lt": 464,
	"./lt.js": 464,
	"./lv": 465,
	"./lv.js": 465,
	"./me": 466,
	"./me.js": 466,
	"./mi": 467,
	"./mi.js": 467,
	"./mk": 468,
	"./mk.js": 468,
	"./ml": 469,
	"./ml.js": 469,
	"./mn": 470,
	"./mn.js": 470,
	"./mr": 471,
	"./mr.js": 471,
	"./ms": 472,
	"./ms-my": 473,
	"./ms-my.js": 473,
	"./ms.js": 472,
	"./mt": 474,
	"./mt.js": 474,
	"./my": 475,
	"./my.js": 475,
	"./nb": 476,
	"./nb.js": 476,
	"./ne": 477,
	"./ne.js": 477,
	"./nl": 478,
	"./nl-be": 479,
	"./nl-be.js": 479,
	"./nl.js": 478,
	"./nn": 480,
	"./nn.js": 480,
	"./pa-in": 481,
	"./pa-in.js": 481,
	"./pl": 482,
	"./pl.js": 482,
	"./pt": 483,
	"./pt-br": 484,
	"./pt-br.js": 484,
	"./pt.js": 483,
	"./ro": 485,
	"./ro.js": 485,
	"./ru": 486,
	"./ru.js": 486,
	"./sd": 487,
	"./sd.js": 487,
	"./se": 488,
	"./se.js": 488,
	"./si": 489,
	"./si.js": 489,
	"./sk": 490,
	"./sk.js": 490,
	"./sl": 491,
	"./sl.js": 491,
	"./sq": 492,
	"./sq.js": 492,
	"./sr": 493,
	"./sr-cyrl": 494,
	"./sr-cyrl.js": 494,
	"./sr.js": 493,
	"./ss": 495,
	"./ss.js": 495,
	"./sv": 496,
	"./sv.js": 496,
	"./sw": 497,
	"./sw.js": 497,
	"./ta": 498,
	"./ta.js": 498,
	"./te": 499,
	"./te.js": 499,
	"./tet": 500,
	"./tet.js": 500,
	"./tg": 501,
	"./tg.js": 501,
	"./th": 502,
	"./th.js": 502,
	"./tl-ph": 503,
	"./tl-ph.js": 503,
	"./tlh": 504,
	"./tlh.js": 504,
	"./tr": 505,
	"./tr.js": 505,
	"./tzl": 506,
	"./tzl.js": 506,
	"./tzm": 507,
	"./tzm-latn": 508,
	"./tzm-latn.js": 508,
	"./tzm.js": 507,
	"./ug-cn": 509,
	"./ug-cn.js": 509,
	"./uk": 510,
	"./uk.js": 510,
	"./ur": 511,
	"./ur.js": 511,
	"./uz": 512,
	"./uz-latn": 513,
	"./uz-latn.js": 513,
	"./uz.js": 512,
	"./vi": 514,
	"./vi.js": 514,
	"./x-pseudo": 515,
	"./x-pseudo.js": 515,
	"./yo": 516,
	"./yo.js": 516,
	"./zh-cn": 517,
	"./zh-cn.js": 517,
	"./zh-hk": 518,
	"./zh-hk.js": 518,
	"./zh-tw": 519,
	"./zh-tw.js": 519
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 890;

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_opener__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_pdfmake_build_pdfmake__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_pdfmake_build_pdfmake___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_pdfmake_build_pdfmake__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_pdfmake_build_vfs_fonts__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_pdfmake_build_vfs_fonts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_pdfmake_build_vfs_fonts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__customer_details_customer_details__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_common_utility_common_utility__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment_timezone__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_moment_timezone__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











__WEBPACK_IMPORTED_MODULE_5_pdfmake_build_pdfmake___default.a.vfs = __WEBPACK_IMPORTED_MODULE_6_pdfmake_build_vfs_fonts___default.a.pdfMake.vfs;
var InvoiceDetailsPage = /** @class */ (function () {
    function InvoiceDetailsPage(navCtrl, navParams, file, fileOpener, socialSharing, modal, commonUtility, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.file = file;
        this.fileOpener = fileOpener;
        this.socialSharing = socialSharing;
        this.modal = modal;
        this.commonUtility = commonUtility;
        this.platform = platform;
        this.customer = {
            customerDetails: {}
        };
        this.fromDate = '';
        this.invoice = {
            invoiceItemsList: [{}]
        };
        this.pdfObj = null;
        this.totalTax = 0;
        this.imgPath = '';
        this.momentjs = __WEBPACK_IMPORTED_MODULE_10_moment_timezone__;
        console.log('Inside Invoice Details Page new');
        this.platform.ready().then(function () {
            _this.imgPath = cordova.file.applicationDirectory + 'www/assets/imgs/stamp.jpg';
        });
        // this.customer = this.navParams.get('customer');
        // this.fromDate = this.navParams.get('fromDate');
        // this.invoice = this.navParams.get('invoice');
        // this.totalTax = Number.parseFloat(this.invoice.invoiceItemsList[0].cgstTax)
        //   + Number.parseFloat(this.invoice.invoiceItemsList[0].sgstTax);
        // console.log('total Tax: ' + this.totalTax);
    }
    InvoiceDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InvoiceDetailsPage');
        this.customer = this.navParams.get('customer');
        console.log('this.customer = ' + JSON.stringify(this.customer));
        this.fromDate = this.navParams.get('fromDate');
        console.log('this.fromDate = ' + JSON.stringify(this.fromDate));
        this.invoice = this.navParams.get('invoice');
        console.log('this.invoice = ' + JSON.stringify(this.invoice));
        this.invoice.invoiceDate = this.invoice.invoiceDate.toISOString();
        console.log('this.invoice.invoiceDate = ' + JSON.stringify(this.invoice.invoiceDate));
        this.totalTax = 0;
        if (null != this.invoice.invoiceItemsList && this.invoice.invoiceItemsList.length > 0) {
            this.totalTax = Number.parseFloat(this.invoice.invoiceItemsList[0].cgstTax)
                + Number.parseFloat(this.invoice.invoiceItemsList[0].sgstTax);
            console.log('total Tax: ' + this.totalTax);
        }
    };
    InvoiceDetailsPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter loaded');
    };
    InvoiceDetailsPage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidEnter loaded');
    };
    InvoiceDetailsPage.prototype.ionViewWillLeave = function () {
        console.log('ionViewWillLeave loaded');
    };
    InvoiceDetailsPage.prototype.ionViewDidLeave = function () {
        console.log('ionViewDidLeave loaded');
    };
    InvoiceDetailsPage.prototype.downloadReport = function () {
        console.log('downloadReport InvoiceDetailsPage');
        var page = document.getElementById('pdfDiv');
        cordova.plugins.printer.print(page, 'JBS_Invoice.pdf');
    };
    InvoiceDetailsPage.prototype.isNull = function (term) {
        return term == null ? '' : term;
    };
    InvoiceDetailsPage.prototype.createPdfAndShare = function () {
        // alert('Creating PDF And Sharing');
        var _this = this;
        var sellerAddress = 'JAGTAP BUILDING SOLUTIONS \n Asthavinayak Soc, Opp Bharat Jyoti Stop,'
            + '\n Bibwewadi , Pune - 411037 ' + '\n Tel No. : (O) 24216162, 9822610611 \n Phone no. : 02024216162 ' +
            ' \n Pin code : 411037 \n GSTIN : 27AFJPJ8271L1ZV \n E-Mail : jagtapbsolutions@gmail.com';
        var buyerAddress = 'Buyer \n ' + this.customer.customerDetails.cardName + '\n ' + this.isNull(this.invoice.invoiceItemsList[0].partyCity) +
            '\n GSTIN/UIN : ' + this.isNull(this.invoice.invoiceItemsList[0].partyGstinNo)
            + '\n State Name: ' + this.isNull(this.invoice.invoiceItemsList[0].stateName)
            + '\n Code: ' + this.isNull(this.invoice.invoiceItemsList[0].stateCode)
            + '\n Place of supply : ' + this.isNull(this.invoice.invoiceItemsList[0].stateCode)
            + '\n Email : ' + '\n Contact : ';
        var bodyContent = [];
        var i = 1;
        bodyContent.push([{ text: 'Sr No.', border: [false, false, true, true] },
            { text: 'Description Of Goods', border: [false, false, true, true] },
            { text: 'HSN/SAC', border: [false, false, true, true] },
            { text: 'Quantity', border: [false, false, true, true] },
            { text: 'Rate', border: [false, false, true, true] },
            { text: 'Per', border: [false, false, true, true] },
            { text: 'Disc%', border: [false, false, true, true] },
            { text: 'Amount', border: [false, false, false, true] }]);
        this.invoice.invoiceItemsList.forEach(function (invoiceItem) {
            bodyContent.push([
                { text: i, border: [false, false, true, true] },
                _this.isNull(invoiceItem.itemName), invoiceItem.hsnSac,
                invoiceItem.qty, invoiceItem.ratePerBag, 'bags', '',
                { text: invoiceItem.total, border: [false, false, false, true] }
            ]);
            ++i;
        });
        bodyContent.push([{ text: '', border: [false, false, true, true] }, 'CGST@' + this.invoice.invoiceItemsList[0].cgst + '%', '', '', '', '%', '', { text: this.invoice.invoiceItemsList[0].cgstTax, border: [false, false, false, true] }]);
        bodyContent.push([{ text: '', border: [false, false, true, true] }, 'SGST@' + this.invoice.invoiceItemsList[0].sgst + '%', '', '', '', '%', '', { text: this.invoice.invoiceItemsList[0].sgstTax, border: [false, false, false, true] }]);
        bodyContent.push([{ text: '', border: [false, false, true, true] }, 'Round Off', '', '', '', '%', '', { text: this.invoice.invoiceItemsList[0].roundDif, border: [false, false, false, true] }]);
        bodyContent.push([
            { text: '', border: [false, false, true, false] },
            { text: 'Total', border: [false, false, true, false] },
            { text: '', border: [false, false, true, false] },
            { text: this.invoice.invoiceItemsList[0].qty, border: [false, false, true, false] },
            { text: '', border: [false, false, true, false] },
            { text: '', border: [false, false, true, false] },
            { text: '', border: [false, false, true, false] },
            { text: this.invoice.grossTotal, border: [false, false, false, false] }
        ]);
        // let bodyContent: any[] = getTestBodyContent();
        console.log('bodyContent = ' + JSON.stringify(bodyContent));
        var docDefinition = {
            content: [
                { text: 'TAX INVOICE', style: 'header' },
                {
                    table: {
                        body: [
                            [sellerAddress,
                                {
                                    table: {
                                        widths: [120, 120],
                                        margins: [0, 0, 0, 0],
                                        body: [
                                            [{ text: 'Invoice No. \n ' + this.invoice.invoiceNo, border: [false, false, false, false] }, { text: 'Dates \n ' + new __WEBPACK_IMPORTED_MODULE_7__angular_common__["d" /* DatePipe */]('en-US').transform(this.invoice.invoiceDate, 'dd MMM yy'), border: [true, false, false, false] }],
                                            [{ text: 'Delivery Note \n ', border: [false, true, true, true] }, { text: 'Mode/Payment Terms \n ' + (this.invoice.dueDateInDays + '').replace('-', ''), border: [false, true, false, false] }],
                                            [{ text: 'Suppliers Ref \n ' + this.invoice.invoiceNo, border: [false, true, true, true] }, { text: 'Other References \n ', border: [false, true, false, false] }],
                                            [{ text: 'Buyers Order No. \n ', border: [false, true, true, false] }, { text: 'Dated \n ', border: [false, true, false, false] }]
                                        ]
                                    }
                                }],
                            [buyerAddress, {
                                    table: {
                                        widths: [120, 120],
                                        margins: [0, 0, 0, 0],
                                        body: [
                                            [{ text: 'Despatch Doc No. \n ', border: [false, false, false, false] }, { text: 'Delivery Note Date \n ', border: [true, false, false, false] }],
                                            [{ text: 'Despatch Through \n ', border: [false, true, true, false] }, { text: 'Destinations \n ', border: [false, true, false, false] }],
                                            [{ text: 'Terms Of Payment \n ', colSpan: 2, border: [false, true, false, false] }]
                                        ]
                                    }
                                }],
                            [
                                {
                                    colSpan: 2,
                                    table: {
                                        widths: [20, 140, 50, 45, 40, 30, 30, 60],
                                        body: bodyContent,
                                    }
                                }
                            ],
                            [
                                { colSpan: 2, text: 'Amount Chargable (In Words) \n ' + this.invoice.amountInWords }
                            ]
                        ]
                    }
                },
                {
                    table: {
                        widths: ['auto', 'auto', 120, 120, 86],
                        body: [
                            ['HSN/SAC', 'Taxable Value', {
                                    table: {
                                        widths: [30, 50],
                                        body: [
                                            [{ text: 'Central Tax', style: 'tableHeader', colSpan: 2, alignment: 'center', border: [false, false, false, true] }, {}],
                                            [{ text: 'Rate', style: 'tableHeader', alignment: 'center', border: [false, false, false, false] }, { text: 'Amount', style: 'tableHeader', alignment: 'center', border: [true, false, false, false] }]
                                        ]
                                    }
                                }, {
                                    table: {
                                        widths: [30, 50],
                                        body: [
                                            [{ text: 'State Tax', style: 'tableHeader', colSpan: 2, alignment: 'center', border: [false, false, false, true] }, {}],
                                            [{ text: 'Rate', style: 'tableHeader', alignment: 'center', border: [false, false, false, false] }, { text: 'Amount', style: 'tableHeader', alignment: 'center', border: [true, false, false, false] }]
                                        ]
                                    }
                                },
                                {
                                    text: 'Total Tax'
                                }
                            ],
                            [this.invoice.invoiceItemsList[0].hsnSac, this.invoice.invoiceItemsList[0].total, {
                                    table: {
                                        widths: [30, 50],
                                        body: [
                                            [{ text: this.invoice.invoiceItemsList[0].cgst + '%', style: 'tableHeader', alignment: 'center', border: [false, false, false, false] }, { text: this.invoice.invoiceItemsList[0].cgstTax, style: 'tableHeader', alignment: 'center', border: [true, false, false, false] }]
                                        ]
                                    }
                                }, {
                                    table: {
                                        widths: [30, 50],
                                        body: [
                                            [{ text: this.invoice.invoiceItemsList[0].sgst + '%', style: 'tableHeader', alignment: 'center', border: [false, false, false, false] },
                                                { text: this.invoice.invoiceItemsList[0].sgstTax, style: 'tableHeader', alignment: 'center', border: [true, false, false, false] }]
                                        ]
                                    }
                                },
                                {
                                    text: (Number.parseFloat(this.invoice.invoiceItemsList[0].cgstTax) + Number.parseFloat(this.invoice.invoiceItemsList[0].sgstTax))
                                }
                            ],
                            ['Total', this.invoice.invoiceItemsList[0].total, {
                                    table: {
                                        widths: [30, 50],
                                        body: [
                                            [{ text: '', style: 'tableHeader', alignment: 'center', border: [false, false, false, false] },
                                                { text: this.invoice.invoiceItemsList[0].cgstTax, style: 'tableHeader', alignment: 'center', border: [true, false, false, false] }]
                                        ]
                                    }
                                }, {
                                    table: {
                                        widths: [30, 50],
                                        body: [
                                            [{ text: '', style: 'tableHeader', alignment: 'center', border: [false, false, false, false] },
                                                { text: this.invoice.invoiceItemsList[0].sgstTax, style: 'tableHeader', alignment: 'center', border: [true, false, false, false] }]
                                        ]
                                    }
                                },
                                {
                                    text: Number.parseFloat(this.invoice.invoiceItemsList[0].cgstTax) + Number.parseFloat(this.invoice.invoiceItemsList[0].sgstTax)
                                }
                            ],
                            [{ colSpan: 5, text: 'Tax Amount (In Words) \n ' + this.invoice.taxAmountInWords }]
                        ]
                    }
                },
                {
                    table: {
                        widths: [200, 50, 178, 33],
                        body: [
                            [{ text: 'Company PAN: AFJPJ8271L \n Declaration: \n We Declare That The Invoice shows the actual price of the goods described and that all particulars are true and correct', colSpan: 2 }, {},
                                { text: 'Company LBT N. :  \n for JAGTAP BUILDING SOLUTIONS \n\n\n\n Auhtorised Signatory', colSpan: 2 }, {}]
                        ]
                    }
                }
            ],
            styles: {
                header: {
                    fontSize: 18,
                    bold: true,
                },
                subheader: {
                    fontSize: 14,
                    bold: true,
                    margin: [0, 15, 0, 0]
                },
                story: {
                    italic: true,
                    alignment: 'center',
                    width: '50%',
                }
            }
        };
        console.log('PDF Doc Defination: ' + JSON.stringify(docDefinition));
        this.pdfObj = __WEBPACK_IMPORTED_MODULE_5_pdfmake_build_pdfmake___default.a.createPdf(docDefinition);
        console.log('Created PDF');
        this.downloadPdf();
    };
    InvoiceDetailsPage.prototype.downloadPdf = function () {
        var _this = this;
        this.pdfObj.getBuffer(function (buffer) {
            var blob = new Blob([buffer], { type: 'application/pdf' });
            // Save the PDF to the data Directory of our App
            _this.file.writeFile(_this.file.dataDirectory, 'JBSInvoice_' + _this.customer.customerDetails.cardName + '.pdf', blob, { replace: true }).then(function (fileEntry) {
                // Open the PDf with the correct OS tools
                // this.fileOpener.open(this.file.dataDirectory + 'myletter.pdf', 'application/pdf');
                _this.pdf = _this.file.dataDirectory + 'JBSInvoice_' + _this.customer.customerDetails.cardName + '.pdf';
                _this.share();
            });
        });
    };
    InvoiceDetailsPage.prototype.share = function () {
        //alert('Sharing Message');
        this.socialSharing.share("", "", this.pdf, null).then(function () {
            // alert('Successfully Shared The File');
        }).catch(function (e) {
            alert('Error : ' + JSON.stringify(e));
        });
    };
    InvoiceDetailsPage.prototype.getTestBodyContent = function () {
        return [
            ['Sr No.', 'Description Of Goods', 'HSN/SAC', 'Quantity', 'Rate', 'Per', 'Disc%', 'Amount'],
            ['1', 'Test Item', '258794', '100', '276.25', 'bags', '0%', '27625'],
            ['2', 'Test Item', '258794', '100', '276.25', 'bags', '0%', '27625'],
            ['', 'CGST@14%', '', '', '', '%', '', '27625'],
            ['', 'SGST@14%', '', '', '', '%', '', '27625'],
            ['', 'Round Off', '', '', '', '%', '', '-0.01'],
            ['', 'Total', '', '200', '', '', '', '56420'],
        ];
    };
    InvoiceDetailsPage.prototype.callCust = function () {
        console.log('Calling Customer on : ' + this.customer.customerDetails.cellular);
        this.commonUtility.callNumber(this.customer.customerDetails.cellular, true);
    };
    InvoiceDetailsPage.prototype.viewCustInfo = function () {
        var customerDetailsModal = this.modal.create(__WEBPACK_IMPORTED_MODULE_8__customer_details_customer_details__["a" /* CustomerDetailsPage */], {
            customer: this.customer,
            isModalData: true
        });
        customerDetailsModal.present();
    };
    InvoiceDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-invoice-details',template:/*ion-inline-start:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\invoice-details\invoice-details.html"*/'<!--\n  Generated template for the InvoiceDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navbar" text-center>\n    <ion-title>Invoice Details</ion-title>\n\n    <ion-buttons end>\n      <button (click)="createPdfAndShare()" ion-button item-end style="background-color: #1c2431; font-size: 20px;">\n        <ion-icon name="share" color="primary"></ion-icon>\n      </button>\n\n      <button (click)="downloadReport()" ion-button item-end style="background-color: #1c2431; font-size: 20px;">\n        <ion-icon name="ios-cloud-download-outline" color="primary"></ion-icon>\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n  <!-- <h2>Date : {{invoice.invoiceDate}}</h2>\n  <h2>Date Format 112: {{momentjs(invoice.invoiceDate).format(\'dd MMM yy\')}}</h2>\n  <h2>Date Format : {{invoice.invoiceDate | date : \'dd MMM yy\'}}</h2>\n  <h2>Gross Total : {{invoice.grossTotal}}</h2> -->\n\n  <ion-row>\n    <ion-col col-12 class="pj-full-width-border" no-margin>\n      <p *ngIf="customer.customerDetails != null">{{customer.customerDetails.cardCode}} - {{customer.customerDetails.cardName}}</p>\n      <span class="pj-info-letters">{{momentjs(invoice.invoiceDate).format(\'DD MMM YY\')}} | {{invoice.isPaid == \'O\' ? \'Open\' :\n        \'Close\'}} | Due Date: {{momentjs(invoice.dueDate).format(\'DD MMM YY\')}}</span><br />\n      <span class="pj-info-letters">Ref#: {{invoice.invoiceNo}}</span>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-4></ion-col>\n    <ion-col style="font-size:1.3em" col-2 (click)="callCust()" *ngIf="customer.customerDetails != null && customer.customerDetails.cellular != null && customer.customerDetails.cellular != \'\'">\n      <ion-icon name="md-call"></ion-icon>\n    </ion-col>\n    <ion-col style="font-size:1.3em" col-2 (click)="viewCustInfo()">\n      <ion-icon name="ios-information-circle-outline"></ion-icon>\n    </ion-col>\n    <ion-col col-4></ion-col>\n  </ion-row>\n\n\n  <ion-row style="margin-top: 5%;">\n    <ion-col col-12 no-margin class="pj-full-width-border">\n      ITEMS\n    </ion-col>\n  </ion-row>\n\n  <div *ngFor="let invoiceDetails of invoice.invoiceItemsList">\n\n    <ion-row padding class="light-color-imp">\n      <ion-col col-8>\n        <span>{{invoiceDetails.itemName}}</span>\n      </ion-col>\n      <ion-col col-4>\n        <span><i class="fa fa-rupee"></i> {{invoiceDetails.total}}</span>\n      </ion-col>\n    </ion-row>\n\n    <ion-row padding class="semidark-color-imp">\n      <ion-col col-12 style="font-size:12px !important;">\n        <p> Qty: {{invoiceDetails.qty}}</p>\n        <p> Rate: {{invoiceDetails.ratePerBag}} Per Bag</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class="semidark-color-imp" style="border-bottom:1px solid #AFAFAF;">\n      <ion-col col-12 style="font-size:12px !important; padding: 0 21px;">\n        <p> HSN/SAC: {{invoiceDetails.hsnSac}}</p>\n        <p *ngIf="invoiceDetails.cgst > 0"> CGST @ {{invoiceDetails.cgst}}%: <i class="fa fa-rupee"></i>{{invoiceDetails.cgstTax}}</p>\n        <p *ngIf="invoiceDetails.sgst > 0"> SGST @ {{invoiceDetails.sgst}}%: <i class="fa fa-rupee"></i>{{invoiceDetails.sgstTax}}</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row padding class="light-color-imp" style="margin-bottom: 5%;">\n      <ion-col col-8 no-margin>\n        Net Amount\n      </ion-col>\n      <ion-col col-4 no-margin>\n        <i class="fa fa-rupee"></i> {{invoiceDetails.total}}\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <ion-row>\n    <ion-col col-12 no-margin class="pj-full-width-border">\n      SUMMARY\n    </ion-col>\n  </ion-row>\n\n  <ion-row padding *ngIf="invoice.invoiceItemsList != null && invoice.invoiceItemsList != undefined" class="light-color-imp">\n    <ion-col col-8>\n      <span>CGST@{{invoice.invoiceItemsList[0].cgst}}%</span>\n    </ion-col>\n    <ion-col col-4>\n      <span><i class="fa fa-rupee"></i> {{invoice.invoiceItemsList[0].cgstTax}}</span>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf="invoice.invoiceItemsList != null && invoice.invoiceItemsList != undefined"  padding class="light-color-imp">\n    <ion-col col-8>\n      <span>SGST@{{invoice.invoiceItemsList[0].sgst}}%</span>\n    </ion-col>\n    <ion-col col-4>\n      <span><i class="fa fa-rupee"></i> {{invoice.invoiceItemsList[0].sgstTax}}</span>\n    </ion-col>\n  </ion-row>\n\n  <ion-row padding class="light-color-imp" *ngIf="invoice.invoiceItemsList != null && invoice.invoiceItemsList != undefined" >\n    <ion-col col-8>\n      <span>Round Off</span>\n    </ion-col>\n    <ion-col col-4>\n      <span><i class="fa fa-rupee"></i> {{invoice.invoiceItemsList[0].roundDif}}</span>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-row padding>\n    <ion-col col-8>\n      <span><strong>Gross Total</strong></span>\n    </ion-col>\n    <ion-col col-4>\n      <span><strong><i class="fa fa-rupee"></i>{{invoice.grossTotal}}</strong></span>\n    </ion-col>\n  </ion-row>\n\n  <ion-row style="margin-top: 5%;">\n    <ion-col col-12 no-margin class="pj-full-width-border">\n      TERMS\n    </ion-col>\n  </ion-row>\n\n  <ion-row padding class="light-color-imp">\n    <ion-col col-12>\n      <span>Due Date: {{invoice.paymentDueDays}}</span>\n    </ion-col>\n  </ion-row>\n\n  <div id="pdfDiv" style="display: none">\n    <div style="text-align:center;width:90%">\n      TAX INVOICE\n    </div>\n\n    <table style="border:1px solid #000;border-collapse: collapse; width:100%;">\n      <tr>\n        <td style="border:1px solid #000;">\n          <p style="margin:0">JAGTAP BUILDING SOLUTIONS</p>\n          <p style="margin:0">Asthavinayak Soc, Opp Bharat Jyoti Stop,</p>\n          <p style="margin:0">Bibwewadi , Pune - 411037</p>\n          <p style="margin:0">Tel No. : (O) 24216162, 9822610611</p>\n          <p style="margin:0">Phone no. : 02024216162</p>\n          <p style="margin:0">Pin code : 411037</p>\n          <p style="margin:0">GSTIN : 27AFJPJ8271L1ZV</p>\n          <p style="margin:0">E-Mail : jagtapbsolutions@gmail.com</p>\n        </td>\n        <td style="padding:0;">\n          <table style="border-collapse:collapse;width:100%;">\n            <tr>\n              <td style="border:1px solid #000;">\n                <p>Invoice No.</p>\n                <p>{{invoice.invoiceNo }}</p>\n              </td>\n              <td style="border:1px solid #000;">\n                <p>Dates</p>\n                <p>{{momentjs(invoice.invoiceDate).format(\'DD MMM YY\')}}</p>\n              </td>\n            </tr>\n            <tr>\n              <td style="border:1px solid #000;">\n                <p>Delivery Note</p>\n                <p><br /></p>\n              </td>\n              <td style="border:1px solid #000;">\n                <p>Mode/Payment Terms</p>\n                <p>{{(invoice.dueDateInDays + \'\').replace(\'-\',\'\')}}</p>\n              </td>\n            </tr>\n            <tr>\n              <td style="border:1px solid #000;">\n                <p>Supplier\'s Ref</p>\n                <p>{{invoice.invoiceNo }}</p>\n              </td>\n              <td style="border:1px solid #000;">\n                <p>Other Reference\'s</p>\n                <p><br /></p>\n              </td>\n            </tr>\n            <tr>\n              <td style="border:1px solid #000;">\n                <p>Buyer\'s Order No.</p>\n                <p><br /></p>\n              </td>\n              <td style="border:1px solid #000;">\n                <p>Dated</p>\n                <p><br /></p>\n              </td>\n            </tr>\n          </table>\n        </td>\n      </tr>\n\n      <tr>\n        <td>\n          <p style="margin:0">Buyer</p>\n          <p style="margin:0">{{customer.customerDetails.cardName}}</p>\n          <p style="margin:0">{{invoice.invoiceItemsList[0].partyCity}}</p>\n          <p style="margin:0">GSTIN/UIN : {{invoice.invoiceItemsList[0].partyGstinNo}}</p>\n          <p style="margin:0">State Name: {{invoice.invoiceItemsList[0].stateName}}, Code:\n            {{invoice.invoiceItemsList[0].stateCode}}</p>\n          <p style="margin:0">Place of supply : {{invoice.invoiceItemsList[0].stateCode}}</p>\n          <p style="margin:0">Email : </p>\n          <p style="margin:0">Contact : </p>\n        </td>\n        <td style="padding:0;">\n          <table style="border-collapse:collapse;width:100%;">\n            <tr>\n              <td style="border:1px solid #000;">\n                <p>Despatch Doc No.</p>\n                <p><br /></p>\n              </td>\n              <td style="border:1px solid #000;">\n                <p>Delivery Note Date</p>\n                <p><br /></p>\n              </td>\n            </tr>\n            <tr>\n              <td style="border:1px solid #000;">\n                <p>Despatch Through</p>\n                <p><br /></p>\n              </td>\n              <td style="border:1px solid #000;">\n                <p>Destinations</p>\n                <p></p>\n              </td>\n            </tr>\n            <tr>\n              <td colspan=2 style="border:1px solid #000;">\n                <p>Terms Of Payment</p>\n                <p><br /></p>\n              </td>\n            </tr>\n          </table>\n        </td>\n      </tr>\n    </table>\n\n    <table style="margin-top:3%;border:1px solid #000;border-collapse: collapse; width:100%;">\n      <tr>\n        <td style="border:1px solid #000;">\n          Sr No.\n        </td>\n        <td style="border:1px solid #000;">\n          Description Of Goods\n        </td>\n        <td style="border:1px solid #000;">\n          HSN/SAC\n        </td>\n        <td style="border:1px solid #000;">\n          Quantity\n        </td>\n        <td style="border:1px solid #000;">\n          Rate\n        </td>\n        <td style="border:1px solid #000;">\n          Per\n        </td>\n        <td style="border:1px solid #000;">\n          Disc%\n        </td>\n        <td style="border:1px solid #000;">\n          Amount\n        </td>\n      </tr>\n\n      <tr *ngFor="let invoiceItem of invoice.invoiceItemsList">\n        <td style="border:1px solid #000;">\n          1\n        </td>\n        <td style="border:1px solid #000;">\n          {{invoiceItem.itemName}}<br />\n        </td>\n        <td style="border:1px solid #000;">\n          {{invoiceItem.hsnSac}}\n        </td>\n        <td style="border:1px solid #000;">\n          {{invoiceItem.qty}} bags\n        </td>\n        <td style="border:1px solid #000;">\n          {{invoiceItem.ratePerBag}}\n        </td>\n        <td style="border:1px solid #000;">\n          bags\n        </td>\n        <td style="border:1px solid #000;">\n\n        </td>\n        <td style="border:1px solid #000;">\n          {{invoiceItem.total}}\n        </td>\n      </tr>\n\n      <tr>\n        <td style="border:1px solid #000;">\n\n        </td>\n        <td style="border:1px solid #000;">\n          CGST@{{invoice.invoiceItemsList[0].cgst}}%\n        </td>\n        <td style="border:1px solid #000;">\n\n        </td>\n        <td style="border:1px solid #000;">\n\n        </td>\n        <td style="border:1px solid #000;">\n\n        </td>\n        <td style="border:1px solid #000;">\n          %\n        </td>\n        <td style="border:1px solid #000;">\n\n        </td>\n        <td style="border:1px solid #000;">\n          {{invoice.invoiceItemsList[0].cgstTax}}\n        </td>\n      </tr>\n\n\n      <tr>\n        <td style="border:1px solid #000;">\n\n        </td>\n        <td style="border:1px solid #000;">\n          SGST@{{invoice.invoiceItemsList[0].sgst}}%\n        </td>\n        <td style="border:1px solid #000;">\n\n        </td>\n        <td style="border:1px solid #000;">\n\n        </td>\n        <td style="border:1px solid #000;">\n\n        </td>\n        <td style="border:1px solid #000;">\n          %\n        </td>\n        <td style="border:1px solid #000;">\n\n        </td>\n        <td style="border:1px solid #000;">\n          {{invoice.invoiceItemsList[0].sgstTax}}\n        </td>\n      </tr>\n\n\n      <tr>\n        <td style="border:1px solid #000;">\n\n        </td>\n        <td style="border:1px solid #000;">\n          Round Off\n        </td>\n        <td style="border:1px solid #000;">\n\n        </td>\n        <td style="border:1px solid #000;">\n\n        </td>\n        <td style="border:1px solid #000;">\n\n        </td>\n        <td style="border:1px solid #000;">\n          %\n        </td>\n        <td style="border:1px solid #000;">\n\n        </td>\n        <td style="border:1px solid #000;">\n          {{invoice.invoiceItemsList[0].roundDif}}\n        </td>\n      </tr>\n\n\n      <tr>\n        <td style="border:1px solid #000;">\n\n        </td>\n        <td style="border:1px solid #000;">\n          Total\n        </td>\n        <td style="border:1px solid #000;">\n\n        </td>\n        <td style="border:1px solid #000;">\n          {{invoice.invoiceItemsList[0].qty}}\n        </td>\n        <td style="border:1px solid #000;">\n\n        </td>\n        <td style="border:1px solid #000;">\n\n        </td>\n        <td style="border:1px solid #000;">\n\n        </td>\n        <td style="border:1px solid #000;">\n          {{invoice.grossTotal}}\n        </td>\n      </tr>\n\n      <tr>\n        <td colspan=8>\n          <p style="color:#cecece;"> Amount Chargable (In Words)</p>\n          <p>{{invoice.amountInWords}}</p>\n      </tr>\n    </table>\n\n    <table style="border:1px solid #000;border-collapse: collapse; width:100%;">\n      <tr>\n        <td style="border:1px solid #000;">\n          HSN/SAC\n        </td>\n        <td style="border:1px solid #000;">\n          Taxable Value\n        </td>\n        <td style="border:1px solid #000;">\n          <table style="width:100%;border-collapse:collapse">\n            <tr>\n              <td colspan=2 style="border:1px solid #000;">\n                Central tax\n              </td>\n            </tr>\n            <tr>\n              <td style="border:1px solid #000;">\n                Rate\n              </td>\n              <td style="border:1px solid #000;">\n                Amount\n              </td>\n            </tr>\n          </table>\n        </td>\n        <td style="border:1px solid #000;">\n          <table style="width:100%;border-collapse:collapse">\n            <tr>\n              <td colspan=2 style="border:1px solid #000;">\n                State tax\n              </td>\n            </tr>\n            <tr>\n              <td style="border:1px solid #000;">\n                Rate\n              </td>\n              <td style="border:1px solid #000;">\n                Amount\n              </td>\n            </tr>\n          </table>\n        </td>\n        <td style="border:1px solid #000;">\n          Total Tax Amount\n        </td>\n      </tr>\n\n      <tr>\n        <td style="border:1px solid #000;">\n          {{invoice.invoiceItemsList[0].hsnSac}}\n        </td>\n        <td style="border:1px solid #000;">\n          {{invoice.invoiceItemsList[0].total}}\n        </td>\n        <td style="border:1px solid #000;">\n          <table style="width:100%;border-collapse:collapse">\n            <tr>\n              <td style="border:1px solid #000;">\n                {{invoice.invoiceItemsList[0].cgst}}%\n              </td>\n              <td style="border:1px solid #000;">\n                {{invoice.invoiceItemsList[0].cgstTax}}\n              </td>\n            </tr>\n          </table>\n        </td>\n        <td style="border:1px solid #000;">\n          <table style="width:100%;border-collapse:collapse">\n            <tr>\n              <td style="border:1px solid #000;">\n                {{invoice.invoiceItemsList[0].sgst}}%\n              </td>\n              <td style="border:1px solid #000;">\n                {{invoice.invoiceItemsList[0].sgstTax}}\n              </td>\n            </tr>\n          </table>\n        </td>\n\n        <td style="border:1px solid #000;">\n          {{ totalTax}}\n        </td>\n      </tr>\n\n      <tr>\n        <td style="border:1px solid #000;">\n          Total\n        </td>\n        <td style="border:1px solid #000;">\n          {{invoice.invoiceItemsList[0].total}}\n        </td>\n        <td style="border:1px solid #000;">\n          <table style="width:100%;border-collapse:collapse">\n            <tr>\n              <td style="border:1px solid #000;">\n\n              </td>\n              <td style="border:1px solid #000;">\n                {{invoice.invoiceItemsList[0].cgstTax}}\n              </td>\n            </tr>\n          </table>\n        </td>\n        <td style="border:1px solid #000;">\n          <table style="width:100%;border-collapse:collapse">\n            <tr>\n              <td style="border:1px solid #000;">\n\n              </td>\n              <td style="border:1px solid #000;">\n                {{invoice.invoiceItemsList[0].sgstTax}}\n              </td>\n            </tr>\n          </table>\n        </td>\n        <td style="border:1px solid #000;">\n          {{totalTax}}\n        </td>\n      </tr>\n\n    </table>\n\n    <table style="border:1px solid #000;border-collapse: collapse; width:100%;">\n      <tr>\n        <td>\n          <p style="color:#cecece;">Tax Amount (In Words)</p>\n          <p>{{invoice.taxAmountInWords}}</p>\n        </td>\n    </table>\n\n    <table style="border:1px solid #000;border-collapse: collapse; width:100%;">\n      <tr>\n        <td style="width:60%">\n          <p> <span style="color:#cecece;">Company\'s PAN :</span> AFJPJ8271L</p>\n          <p style="color:#cecece;">Declaration</p>\n          <p>We declare that this invoice shows the actual price of the goods\n            described and that all particulars are true and correct</p>\n        </td>\n        <td>\n          <p style="color:#cecece;">Company\'s LBT No.</p>\n          <p style="border:1px solid #000;">\n            for JAGTAP BUILDING SOLUTIONS\n\n            <img [src]="imgPath" style="width:100%;height:auto;float:right" />\n            Authorised Signatory\n          </p>\n        </td>\n      </tr>\n    </table>\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\invoice-details\invoice-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_opener__["a" /* FileOpener */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_9__providers_common_utility_common_utility__["a" /* CommonUtilityProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */]])
    ], InvoiceDetailsPage);
    return InvoiceDetailsPage;
}());

//# sourceMappingURL=invoice-details.js.map

/***/ }),

/***/ 989:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Firebase__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_Firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_utility_common_utility__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_constants_constants__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_authorizaton_settings_authorizaton_settings__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_admin_users_admin_users__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_customer_mgmt_customer_mgmt__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_order_mgmt_order_mgmt__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_diagnostic__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_location_tracker_location_tracker__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_database_database__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var config = {
    apiKey: 'AIzaSyAwE6RUI2st4uTM40fotjuPJVRJNfuayko',
    authDomain: 'geotracker-86b5d.firebaseapp.com',
    databaseURL: 'https://geotracker-86b5d.firebaseio.com/',
    projectId: 'geotracker-86b5d',
    storageBucket: 'gs://geotracker-86b5d.appspot.com',
};
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, commonUtility, events, diagnostic, locationTracker, databaseProvider) {
        var _this = this;
        this.platform = platform;
        this.commonUtility = commonUtility;
        this.events = events;
        this.diagnostic = diagnostic;
        this.locationTracker = locationTracker;
        this.databaseProvider = databaseProvider;
        this.pages = [];
        this.swVersion = __WEBPACK_IMPORTED_MODULE_7__providers_constants_constants__["a" /* ConstantsProvider */].SW_VER;
        // console.log('Refresh Token = ' + localStorage.getItem('refresh-token'));
        this.rootPage = localStorage.getItem('refresh-token') == null ? __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */] : __WEBPACK_IMPORTED_MODULE_8__pages_authorizaton_settings_authorizaton_settings__["a" /* AuthorizatonSettingsPage */];
        // this.pages.push(
        // { title: 'TestPage', component: TestPage }
        // );
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.backgroundColorByHexString('#457492');
            splashScreen.hide();
            // Intialize Database
            console.log('Intializing DB');
            _this.databaseProvider.intializeDatabase();
            // setTimeout(
            //     () => {
            //         this.databaseProvider.getRefreshToken()
            //             .subscribe(
            //                 (res: any) => {
            //                     let refreshToken: any = null;
            //                     console.log('Refresh Token Fetch Response = ' + JSON.stringify(res));
            //                     if (res.rows.length > 0)
            //                         refreshToken = JSON.parse(res.rows.item(0).data);
            //                     console.log('Refresh Token = ' + refreshToken);
            //                     this.rootPage = refreshToken == null ? LoginPage : AuthorizatonSettingsPage;
            //                 },
            //                 (err) => {
            //                     console.log(JSON.stringify(err));
            //                 }
            //             );
            //     }, 1000);
            /* let getUserData = localStorage.getItem('roles');
            if (getUserData) {
                console.log('User Data : ', getUserData);
                if (JSON.parse(getUserData).indexOf(ConstantsProvider.ROLE_SALES) > -1) {
                    this.trackUserLocation();
                }
            } */
        });
        __WEBPACK_IMPORTED_MODULE_4_Firebase__["initializeApp"](config);
        console.log('Subscribing unauthorized:requestError event');
        this.events.subscribe("unauthorized:requestError", function () {
            _this.commonUtility.clearStorage();
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
        });
        this.events.subscribe("rolesUpdated", function () {
            console.log('Subscribed Event rolesUpdated called');
            _this.getSideMenuOptionsByRole();
            // if (this.commonUtility.hasRole(ConstantsProvider.ROLE_SALES))
            //   this.updateCurrentLocation();
        });
    }
    MyApp.prototype.trackUserLocation = function () {
        var _this = this;
        // Location Tracking
        this.platform.ready().then(function () {
            _this.diagnostic.isLocationEnabled().then(function (available) {
                if (available) {
                    _this.locationTracker.startTracking();
                }
                else {
                    _this.diagnostic.switchToLocationSettings();
                }
            });
        });
        // End of Location Tracking
    };
    ;
    // updateCurrentLocation() {
    //   setTimeout(() => {
    //     this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true })
    //       .then((resp) => {
    //         alert('Latitude = ' + resp.coords.latitude + ', Longitude = ' + resp.coords.longitude);
    //         console.log('Latitude = ' + resp.coords.latitude + ', Longitude = ' + resp.coords.longitude);
    //         let mylocation = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
    //       });
    //   }, 5000)
    // }
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        // this.nav.setRoot(page.component);
        // if (page.title === "Logout" && this.commonUtility.hasRole(ConstantsProvider.ROLE_SALES)) {
        //     this.locationTracker.stopTracking();
        // }
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.getSideMenuOptionsByRole = function () {
        var _this = this;
        this.pages = [];
        this.databaseProvider.initializeSqlLiteDb().then(function (db) {
            db.executeSql('SELECT data FROM metadata WHERE configname=?', ['roles'])
                .then(function (res) {
                var rolesArray = null;
                if (res.rows.length > 0) {
                    var rowData = res.rows.item(0).data;
                    rolesArray = JSON.parse(rowData);
                    console.log('rolesArray = ' + JSON.stringify(rolesArray));
                }
                if (rolesArray.indexOf(__WEBPACK_IMPORTED_MODULE_7__providers_constants_constants__["a" /* ConstantsProvider */].ROLE_ADMIN) > -1) {
                    console.log('Admin Role Matched');
                    _this.pages.push({ title: 'Customer Management', component: __WEBPACK_IMPORTED_MODULE_11__pages_customer_mgmt_customer_mgmt__["a" /* CustomerMgmtPage */] }, { title: 'Orders', component: __WEBPACK_IMPORTED_MODULE_12__pages_order_mgmt_order_mgmt__["a" /* OrderMgmtPage */] }, { title: 'Users Mgmt', component: __WEBPACK_IMPORTED_MODULE_10__pages_admin_users_admin_users__["a" /* AdminUsersPage */] }, { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */] });
                }
                else if (rolesArray.indexOf(__WEBPACK_IMPORTED_MODULE_7__providers_constants_constants__["a" /* ConstantsProvider */].ROLE_SALES) > -1) {
                    console.log('ROLE_SALES Matched');
                    _this.pages.push({ title: 'Customer Management', component: __WEBPACK_IMPORTED_MODULE_11__pages_customer_mgmt_customer_mgmt__["a" /* CustomerMgmtPage */] }, { title: 'Orders', component: __WEBPACK_IMPORTED_MODULE_12__pages_order_mgmt_order_mgmt__["a" /* OrderMgmtPage */] }, { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */] });
                }
                else {
                    console.log('No Roles Matched');
                    _this.events.publish("unauthorized:requestError");
                }
                _this.pages.push({ title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */] });
            });
        });
        // if (this.commonUtility.hasRole(ConstantsProvider.ROLE_ADMIN)) {
        //     console.log('Admin Role Matched');
        //     this.pages.push(
        //         // { title: 'Tag Mgmt', component: TagMgmtPage },
        //         { title: 'Customer Management', component: CustomerMgmtPage },
        //         { title: 'Orders', component: OrderMgmtPage },
        //         { title: 'Users Mgmt', component: AdminUsersPage },
        //         { title: 'Settings', component: SettingsPage },
        //     );
        // } else if (this.commonUtility.hasRole(ConstantsProvider.ROLE_SALES)) {
        //     console.log('ROLE_SALES Matched');
        //     this.pages.push(
        //         { title: 'Customer Management', component: CustomerMgmtPage },
        //         { title: 'Orders', component: OrderMgmtPage },
        //         { title: 'Settings', component: SettingsPage }
        //     );
        // } else {
        //     console.log('No Roles Matched');
        //     this.events.publish("unauthorized:requestError");
        // }
        // this.pages.push(
        //     { title: 'Logout', component: LoginPage },
        //     // { title: 'TestPage', component: TestPage }
        // );
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\app\app.html"*/'<ion-menu [content]="content">\n    <ion-header>\n        <ion-toolbar color="navbar">\n            <ion-title>Menu</ion-title>\n        </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n        <ion-list>\n            <button menuClose style="background-color:#2F3C51; color:#E4EBED" ion-item *ngFor="let p of pages" (click)="openPage(p)">\n                {{p.title}}\n            </button>\n        </ion-list>\n    </ion-content>\n\n    <ion-footer style="background-color: #1c2431 !important; color:#fff;">\n        <h6 text-center>{{swVersion}}</h6>\n    </ion-footer>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__providers_common_utility_common_utility__["a" /* CommonUtilityProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_diagnostic__["a" /* Diagnostic */],
            __WEBPACK_IMPORTED_MODULE_14__providers_location_tracker_location_tracker__["a" /* LocationTrackerProvider */],
            __WEBPACK_IMPORTED_MODULE_15__providers_database_database__["a" /* DatabaseProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerMgmtPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common_utility_common_utility__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_restservice_restservice__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_constants_constants__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__customer_details_customer_details__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__order_add_order_add__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__order_mgmt_order_mgmt__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__popover_sort_filters_popover_sort_filters__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_database_database__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__aging_filter_popover_aging_filter_popover__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_network__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













/**
 * Generated class for the CustomerMgmtPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CustomerMgmtPage = /** @class */ (function () {
    function CustomerMgmtPage(navCtrl, navParams, commonUtility, popOverController, restService, network, databaseProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.commonUtility = commonUtility;
        this.popOverController = popOverController;
        this.restService = restService;
        this.network = network;
        this.databaseProvider = databaseProvider;
        this.customersList = [];
        this.paginationDetails = {
            currentPageNo: 1,
            totalPages: 0
        };
        this.isPaginatedResultsFetched = true;
        this.orginalCustomersList = [];
        this.orginalListDuplicate = [];
        this.myInput = '';
        this.totalOutstanding = 0;
        this.referrer = null;
        this.currentSortOrder = 0;
        this.displayCriteria = '0';
        this.tillDate = '';
        this.isDataSynching = false;
        this.customerMgmtApiEndpoint = __WEBPACK_IMPORTED_MODULE_4__providers_constants_constants__["a" /* ConstantsProvider */].API_BASE_URL
            + __WEBPACK_IMPORTED_MODULE_4__providers_constants_constants__["a" /* ConstantsProvider */].API_ENDPOINT_CUSTOMER_MGMT;
        this.isDataSynching = false;
        this.databaseProvider.getLastUpdatedTs()
            .subscribe(function (response) {
            _this.tillDate = response.rows.item(0).data;
            console.log('tillDate = ' + _this.tillDate + ', Response = ' + JSON.stringify(response));
            _this.updateCustomerDataFromDB();
            var timeSinceLastSync = _this.commonUtility.calculateDiffInMins(new Date(_this.tillDate), new Date());
            console.log('Till Date : ' + _this.tillDate + ', Current Date = ' + new Date() + ', timeSinceLastSync = ' + timeSinceLastSync);
            if (timeSinceLastSync >= 30) {
                console.log('Synching Data');
                _this.syncCustomerData();
            }
            else {
                console.log('Not Synching Data');
            }
        });
        this.referrer = this.navParams.get('referrer');
        // this.restService.getDetails(this.getCustMgmtApiEndpoint(1))
        //   .subscribe(
        //     (response) => {
        //       console.log('Response = ' + JSON.stringify(response.response));
        //       this.customersList = response.response;
        //       this.orginalCustomersList = this.customersList;
        //       this.orginalListDuplicate = this.customersList;
        //       this.totalOutstanding = response.metaData;
        //       //: Update Pagiination Details
        //       this.paginationDetails = response.paginationDetails;
        //       console.log('this.paginationDetails = ' + JSON.stringify(this.paginationDetails));
        //     }
        //   );
    }
    CustomerMgmtPage.prototype.updateCustomerDataFromDB = function () {
        var _this = this;
        this.databaseProvider.getCustomerData()
            .subscribe(function (res) {
            if (res.rows.length > 0) {
                console.log('CustData = ' + res.rows.item(0).data);
                _this.customersList = JSON.parse(res.rows.item(0).data);
            }
            _this.orginalCustomersList = _this.customersList;
            _this.orginalListDuplicate = _this.customersList;
            _this.setCustomerBalanceFromOriginalList();
        }, function (e) {
            console.log(JSON.stringify(e));
        });
    };
    CustomerMgmtPage.prototype.setCustomerBalanceFromOriginalList = function () {
        var _this = this;
        var sortedList = [];
        this.totalOutstanding = 0;
        // this.customersList.forEach(
        this.orginalCustomersList.forEach(function (customer) {
            var custBal = customer.customerDetails.balance;
            _this.totalOutstanding = _this.totalOutstanding + custBal;
            customer.calculatedBal = custBal;
            sortedList.push(customer);
        });
        this.customersList = sortedList;
        console.log('total outstanding: ' + this.totalOutstanding.toFixed(2));
        this.totalOutstanding = Number.parseFloat(this.totalOutstanding.toFixed(2));
    };
    CustomerMgmtPage.prototype.getCustMgmtApiEndpoint = function (pageNo) {
        // return this.customerMgmtApiEndpoint + pageNo;
        return this.customerMgmtApiEndpoint;
    };
    CustomerMgmtPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustomerMgmtPage');
    };
    // getRecordsPaginated(infiniteScrollEvent: any) {
    //   console.log('getRecordsPaginated CustMgmtPage');
    //   let currentPageNo: number = this.paginationDetails.currentPageNo;
    //   let totalPages: number = this.paginationDetails.totalPages;
    //   if (this.isPaginatedResultsFetched) {
    //     if (this.commonUtility.isNetworkAvailable()) {
    //       if (currentPageNo < totalPages) {
    //         currentPageNo = currentPageNo + 1;
    //         console.log('currentPageNo = ' + currentPageNo);
    //         setTimeout(() => {
    //           this.isPaginatedResultsFetched = false;
    //           this.restService.getDetails(this.getCustMgmtApiEndpoint(currentPageNo))
    //             .subscribe(
    //               (response) => {
    //                 this.isPaginatedResultsFetched = true;
    //                 console.log('isPaginatedResultsFetched = ' + this.isPaginatedResultsFetched);
    //                 this.customersList = this.customersList.concat(response.response);
    //                 this.orginalCustomersList = this.customersList;
    //                 this.paginationDetails = response.paginationDetails;
    //                 infiniteScrollEvent.complete();
    //               },
    //               () => {
    //                 this.isPaginatedResultsFetched = true;
    //                 infiniteScrollEvent.complete();
    //                 console.log('isPaginatedResultsFetched = ' + this.isPaginatedResultsFetched);
    //               }
    //             );
    //         }, 500);
    //       } else {
    //         infiniteScrollEvent.enable(false);
    //       }
    //     }
    //   }
    // }
    CustomerMgmtPage.prototype.onInput = function () {
        console.log('searchTerm = ' + this.myInput);
        var searchVal = this.myInput;
        // if the value is an empty string don't filter the items
        if (searchVal && searchVal.trim() != '') {
            this.customersList = this.orginalCustomersList.filter(function (customerDetailsObj) {
                var searchValLowerCase = searchVal.toLowerCase();
                if ((null != customerDetailsObj.customerDetails.cardName && customerDetailsObj.customerDetails.cardName.toLowerCase().indexOf(searchValLowerCase) > -1))
                    // || (customerDetailsObj.customerDetails.phone1 != null
                    //   && customerDetailsObj.customerDetails.phone1.toLowerCase().indexOf(searchValLowerCase) > -1)
                    // || customerDetailsObj.customerDetails.cardCode.toLowerCase().indexOf(searchValLowerCase) > -1)
                    return true;
                else
                    return false;
            });
            console.log('Customers List Length = ' + this.customersList.length);
        }
        else {
            this.customersList = this.orginalListDuplicate;
            this.orginalCustomersList = this.orginalListDuplicate;
        }
    };
    CustomerMgmtPage.prototype.searchCustomers = function () {
        var _this = this;
        console.log('searchTerm = ' + this.myInput);
        var searchVal = this.myInput;
        // if the value is an empty string don't filter the items
        if (searchVal && searchVal.trim() != '') {
            var searchCustomerApi = __WEBPACK_IMPORTED_MODULE_4__providers_constants_constants__["a" /* ConstantsProvider */].API_BASE_URL + __WEBPACK_IMPORTED_MODULE_4__providers_constants_constants__["a" /* ConstantsProvider */].API_ENDPOINT_CUST_DTLS
                + __WEBPACK_IMPORTED_MODULE_4__providers_constants_constants__["a" /* ConstantsProvider */].URL_SEPARATOR + "search-term?search-term=" + searchVal;
            this.restService.getDetails(searchCustomerApi)
                .subscribe(function (response) {
                _this.customersList = response.response;
                _this.orginalCustomersList = _this.customersList;
            });
            console.log('Customers List Length = ' + this.customersList.length);
        }
        else {
            this.customersList = this.orginalListDuplicate;
            this.orginalCustomersList = this.orginalListDuplicate;
        }
    };
    CustomerMgmtPage.prototype.viewCustomerDetails = function (customer) {
        console.log('viewCustomerDetails CustomerMgmtPage');
        if (null != this.referrer && undefined != this.referrer && this.referrer != '') {
            switch (this.referrer) {
                case __WEBPACK_IMPORTED_MODULE_7__order_mgmt_order_mgmt__["a" /* OrderMgmtPage */].name:
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__order_add_order_add__["a" /* OrderAddPage */], {
                        customer: customer
                    });
                    break;
                default:
                    this.commonUtility.presentErrorToast('Invalid Referrer Supplied');
            }
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__customer_details_customer_details__["a" /* CustomerDetailsPage */], {
                customer: customer,
                isModalData: false
            });
        }
        // if (this.commonUtility.isNetworkAvailable()) {
        //   console.log('referrer = ' + this.referrer);
        //   if (null != this.referrer && undefined != this.referrer && this.referrer != '') {
        //     switch (this.referrer) {
        //       case OrderMgmtPage.name:
        //         this.navCtrl.push(OrderAddPage, {
        //           customer: customer
        //         });
        //         break;
        //       default:
        //         this.commonUtility.presentErrorToast('Invalid Referrer Supplied');
        //     }
        //   } else {
        //     this.navCtrl.push(CustomerDetailsPage, {
        //       customer: customer,
        //       isModalData: false
        //     });
        //   }
        // }
    };
    // callCust(customer) {
    //   console.log('Calling Customer on : ' + customer.customerDetails.cellular);
    //   this.commonUtility.callNumber(customer.customerDetails.cellular, true);
    // }
    CustomerMgmtPage.prototype.callCust = function (custContactNumber) {
        console.log('Calling Customer on : ' + custContactNumber);
        this.commonUtility.callNumber(custContactNumber, true);
    };
    CustomerMgmtPage.prototype.presentPopoverDataSorting = function (event) {
        var _this = this;
        var popOver = this.popOverController.create(__WEBPACK_IMPORTED_MODULE_8__popover_sort_filters_popover_sort_filters__["a" /* PopoverSortFiltersPage */], {
            sortOrder: this.currentSortOrder,
            isCustMgmt: true
        });
        popOver.present({
            ev: event
        });
        popOver.onDidDismiss(function (data) {
            if (data && data.sortData) {
                var selectedSortOrder = Number.parseInt(data.sortOrder);
                console.log('selectedSortOrder = ' + selectedSortOrder);
                _this.sortDataBySelectedSortOrder(selectedSortOrder);
            }
        });
    };
    CustomerMgmtPage.prototype.sortDataBySelectedSortOrder = function (selectedSortOrder) {
        console.log('selectedSortOrder = ' + selectedSortOrder);
        switch (selectedSortOrder) {
            // 1 = Amount (Low - High)
            case 1:
                this.customersList.sort(function (a, b) { return a.calculatedBal <= b.calculatedBal ? -1 : 1; }
                // (a, b) => a.customerDetails.balance <= b.customerDetails.balance ? -1 : 1
                );
                break;
            // 2 = Amount (High - Low) 
            case 2:
                this.customersList.sort(function (a, b) { return a.calculatedBal >= b.calculatedBal ? -1 : 1; }
                // (a, b) => a.customerDetails.balance >= b.customerDetails.balance ? -1 : 1
                );
                break;
            // 3 = Due Days (Low - High)
            case 3:
                this.customersList.sort(function (a, b) { return a.dueDateInDays <= b.dueDateInDays ? -1 : 1; });
                break;
            // 4 = Due Days (High - Low)
            case 4:
                this.customersList.sort(function (a, b) { return a.dueDateInDays >= b.dueDateInDays ? -1 : 1; });
                break;
            default:
                break;
        }
        this.currentSortOrder = selectedSortOrder;
    };
    CustomerMgmtPage.prototype.presentPopoverAging = function (event) {
        var _this = this;
        var popOver = this.popOverController.create(__WEBPACK_IMPORTED_MODULE_10__aging_filter_popover_aging_filter_popover__["a" /* AgingFilterPopoverPage */], {
            agingperiod: this.displayCriteria
        });
        popOver.present({
            ev: event
        });
        popOver.onDidDismiss(function (data) {
            if (data && data.showAging) {
                var selectedAgingPeriod = Number.parseInt(data.agingPeriod);
                console.log('selectedAgingPeriod = ' + selectedAgingPeriod);
                if (selectedAgingPeriod == 0) {
                    _this.setCustomerBalanceFromOriginalList();
                }
                else {
                    console.log('tillDate = ' + _this.tillDate);
                    var dateToCompare = new Date(_this.tillDate);
                    console.log('Active Date = ' + dateToCompare.toISOString()
                        + ', selectedAgingPeriod = ' + selectedAgingPeriod);
                    dateToCompare.setDate(dateToCompare.getDate() - selectedAgingPeriod);
                    console.log('Date Back by selectedAgingPeriod Days = ' + dateToCompare.toISOString());
                    var dateToCompareFormatted_1 = new __WEBPACK_IMPORTED_MODULE_11__angular_common__["d" /* DatePipe */](__WEBPACK_IMPORTED_MODULE_4__providers_constants_constants__["a" /* ConstantsProvider */].APP_DATE_LOCALE).transform(dateToCompare.toISOString(), 'yyyy-MM-dd');
                    console.log('dateToCompareFormatted = ' + dateToCompareFormatted_1);
                    var sortedList_1 = [];
                    _this.totalOutstanding = 0;
                    _this.orginalCustomersList.forEach(function (customer) {
                        // let custDebit: number = 0;
                        // let custCredit: number = 0;
                        var custBalance = 0;
                        if (customer.customerInvoicesList != null && customer.customerInvoicesList.length > 0) {
                            customer.customerInvoicesList.forEach(function (invoice) {
                                if (invoice.invoiceDate < dateToCompareFormatted_1
                                    && (invoice.type == 'IN' || invoice.type == 'OB' || invoice.type == 'JE')) {
                                    // custDebit = custDebit + Number.parseFloat(invoice.debit);
                                    // custCredit = custCredit + Number.parseFloat(invoice.credit);
                                    custBalance = custBalance + Number.parseFloat(invoice.grossTotal);
                                }
                            });
                        }
                        // let custBalance: number = custDebit - custCredit;
                        if (custBalance > 0) {
                            _this.totalOutstanding = _this.totalOutstanding + custBalance;
                            customer.calculatedBal = custBalance;
                            console.log('calculatedBal = ' + customer.calculatedBal);
                            sortedList_1.push(customer);
                        }
                    });
                    _this.customersList = sortedList_1;
                }
                _this.displayCriteria = selectedAgingPeriod;
                _this.sortDataBySelectedSortOrder(_this.currentSortOrder);
            }
        });
    };
    CustomerMgmtPage.prototype.syncCustomerData = function () {
        var _this = this;
        var customersDetailsApiEndpoint = __WEBPACK_IMPORTED_MODULE_4__providers_constants_constants__["a" /* ConstantsProvider */].API_BASE_URL
            + __WEBPACK_IMPORTED_MODULE_4__providers_constants_constants__["a" /* ConstantsProvider */].API_ENDPOINT_CUST_DTLS + __WEBPACK_IMPORTED_MODULE_4__providers_constants_constants__["a" /* ConstantsProvider */].URL_SEPARATOR
            + __WEBPACK_IMPORTED_MODULE_4__providers_constants_constants__["a" /* ConstantsProvider */].API_ENDPOINT_SYNC;
        this.isDataSynching = true;
        if (this.network.type != "unknown" && this.network.type != "none" && this.network.type != undefined) {
            this.restService.getDetailsWithoutLoader(customersDetailsApiEndpoint)
                .subscribe(function (response) {
                _this.isDataSynching = false;
                console.log('Customers Data = ' + JSON.stringify(response.response));
                var customersDetailsList = response.response;
                _this.databaseProvider.initializeSqlLiteDb().then(function (db) {
                    db.executeSql('SELECT data from metadata where configname=?', [__WEBPACK_IMPORTED_MODULE_4__providers_constants_constants__["a" /* ConstantsProvider */].CONFIG_NM_CUST_DATA])
                        .then(function (res) {
                        if (res.rows.length > 0) {
                            _this.updateCustomerDetailsFromApi(customersDetailsList);
                        }
                        else {
                            db.executeSql('INSERT INTO metadata(configname, data) VALUES(?,?)', [__WEBPACK_IMPORTED_MODULE_4__providers_constants_constants__["a" /* ConstantsProvider */].CONFIG_NM_CUST_DATA, ''])
                                .then(function (res) {
                                console.log('Inserted Empty Customer Record');
                                _this.updateCustomerDetailsFromApi(customersDetailsList);
                            })
                                .catch(function (e) {
                                console.log(JSON.stringify(e));
                                _this.isDataSynching = false;
                            });
                        }
                    })
                        .catch(function (e) {
                        console.log(JSON.stringify(e));
                        _this.isDataSynching = false;
                    });
                })
                    .catch(function (e) {
                    console.log(JSON.stringify(e));
                    _this.isDataSynching = false;
                });
            }, function (err) {
                _this.isDataSynching = false;
            });
        }
        else {
            this.commonUtility.presentErrorToast('No Internet Connection');
            this.isDataSynching = false;
        }
    };
    CustomerMgmtPage.prototype.updateCustomerDetailsFromApi = function (customersDetailsList) {
        var _this = this;
        this.databaseProvider.initializeSqlLiteDb().then(function (db) {
            db.executeSql('UPDATE metadata set data=? WHERE configname=?', [JSON.stringify(customersDetailsList),
                __WEBPACK_IMPORTED_MODULE_4__providers_constants_constants__["a" /* ConstantsProvider */].CONFIG_NM_CUST_DATA])
                .then(function (res) {
                console.log('Updated Customer Record');
                db.executeSql('SELECT data from metadata where configname=?', [__WEBPACK_IMPORTED_MODULE_4__providers_constants_constants__["a" /* ConstantsProvider */].CONFIG_NM_LAST_UPDATED_TS])
                    .then(function (res) {
                    if (res.rows.length > 0) {
                        _this.updateLastUpdatedTs();
                    }
                    else {
                        db.executeSql('INSERT INTO metadata(configname, data) VALUES(?,?)', [__WEBPACK_IMPORTED_MODULE_4__providers_constants_constants__["a" /* ConstantsProvider */].CONFIG_NM_LAST_UPDATED_TS, ''])
                            .then(function (res) {
                            console.log('Inserted Empty Customer Record');
                            _this.updateLastUpdatedTs();
                        })
                            .catch(function (e) { return console.log(JSON.stringify(e)); });
                    }
                });
            })
                .catch(function (e) {
                console.log(JSON.stringify(e));
            });
        })
            .catch(function (e) {
            console.log(JSON.stringify(e));
        });
    };
    CustomerMgmtPage.prototype.updateLastUpdatedTs = function () {
        var _this = this;
        this.databaseProvider.initializeSqlLiteDb().then(function (db) {
            var updatedTs = new Date().toISOString();
            _this.tillDate = updatedTs;
            db.executeSql('UPDATE metadata set data=? WHERE configname=?', [updatedTs,
                __WEBPACK_IMPORTED_MODULE_4__providers_constants_constants__["a" /* ConstantsProvider */].CONFIG_NM_LAST_UPDATED_TS])
                .then(function (res) {
                console.log('Updated Last Updated Ts');
                _this.updateCustomerDataFromDB();
                _this.isDataSynching = false;
            })
                .catch(function (e) {
                console.log(JSON.stringify(e));
            });
        })
            .catch(function (e) {
            console.log(JSON.stringify(e));
        });
    };
    CustomerMgmtPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-customer-mgmt',template:/*ion-inline-start:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\customer-mgmt\customer-mgmt.html"*/'<!--\n  Generated template for the CustomerMgmtPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="navbar" text-center>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-buttons end>\n      <button ion-button (click)="presentPopoverAging($event)" style="background-color: #1c2431; font-size: 20px; color:#E4EBED;">\n        <ion-icon name="ios-list"></ion-icon>\n      </button>\n      <button ion-button item-end (click)="presentPopoverDataSorting($event)" style="background-color: #1c2431; font-size: 20px; color:#E4EBED;">\n        <ion-icon name="md-more"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Customers\n    </ion-title>\n  </ion-navbar>\n  <ion-row style="background-color: #2F3C51 !important; color: #FFCB08 !important">\n    <ion-col col-10 text-center>\n      Last Synced: {{tillDate | date : \'dd MMM yy hh:mm a\'}}\n    </ion-col>\n    <ion-col col-2 text-center>\n      <ion-icon ios="ios-refresh" (click)="syncCustomerData()" md="md-refresh" *ngIf="!isDataSynching"></ion-icon>\n      <ion-spinner name="crescent" *ngIf="isDataSynching" color="plain"></ion-spinner>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-12>\n      <ion-searchbar [(ngModel)]="myInput" (ionChange)="onInput()" placeholder="Search By Name, Phone No., Code">\n      </ion-searchbar>\n    </ion-col>\n    <!-- <ion-col col-2 (click)="searchCustomers()">\n      <ion-icon name="md-search" class="search-btn"></ion-icon>\n    </ion-col> -->\n  </ion-row>\n\n</ion-header>\n\n\n<ion-content>\n\n\n  <div *ngIf="customersList.length==0" class="pj-empty-page" style="margin-top: 40%;">\n    <ion-icon name="ios-contact-outline"></ion-icon>\n    <h4>No Customers To Show</h4>\n  </div>\n\n  <ion-card *ngIf="customersList.length>0 && (null == this.referrer \n    || undefined == this.referrer || this.referrer == \'\')">\n\n    <!-- <ion-card-header>\n      <ion-row>\n        <ion-col col-12 text-center>\n          <strong>Outstanding Recievables</strong><br />\n        </ion-col>\n      </ion-row>\n    </ion-card-header> -->\n\n    <ion-card-content>\n\n      <ion-row>\n        <ion-col col-12 text-center>\n          <span style="font-size:3rem;">\n            <strong>\n              <i class="fa fa-rupee"></i> {{totalOutstanding}}\n            </strong>\n          </span>\n          <p style="color:#E4EBED;font-size:12px;">( Outstanding Recievables As Of {{tillDate | date : \'dd MMM yy\'}} |\n            > {{displayCriteria}} )</p>\n        </ion-col>\n      </ion-row>\n\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngFor="let customer of customersList">\n\n    <ion-card-header (click)="viewCustomerDetails(customer)">\n      <!-- <ion-row>\n        <ion-col col-12>\n          <strong>{{customer.customerDetails.cardCode}}</strong>\n        </ion-col>\n      </ion-row> -->\n      <ion-row>\n        <ion-col col-9>\n          <p style="color: #FFCB08 !important"><strong>{{customer.customerDetails.cardName}}</strong></p>\n        </ion-col>\n        <ion-col col-3>\n          <strong><i *ngIf="customer.calculatedBal != null && customer.calculatedBal != \'\'" class="fa fa-rupee"></i>\n            {{customer.calculatedBal == null || customer.calculatedBal == \'\' ? \'NA\' : customer.calculatedBal }}</strong>\n        </ion-col>\n      </ion-row>\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <!-- <ion-row>\n        <ion-col col-5>\n          Balance\n        </ion-col>\n        <ion-col col-7>\n            <i class="fa fa-rupee"></i> {{customer.calculatedBal == null || customer.calculatedBal == \'\' ? \'Not Available\' :\n          customer.calculatedBal }}\n        </ion-col>\n      </ion-row> -->\n\n      <!-- <ion-row>\n        <ion-col col-12>\n          Contact No.\n        </ion-col>\n      </ion-row> -->\n      <ion-row *ngIf="customer.customerDetails.cellular != null && customer.customerDetails.cellular != \'\'">\n        <ion-col col-11>\n          {{customer.customerDetails.cellular}}\n        </ion-col>\n        <ion-col col-1 color="primary" (click)="callCust(customer.customerDetails.cellular)">\n          <ion-icon name="md-call"></ion-icon>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="customer.customerDetails.phone1 != null && customer.customerDetails.phone1 != \'\'">\n        <ion-col col-11>\n          {{customer.customerDetails.phone1}}\n        </ion-col>\n        <ion-col col-1 color="primary" (click)="callCust(customer.customerDetails.phone1)">\n          <ion-icon name="md-call"></ion-icon>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="customer.customerDetails.phone2 != null && customer.customerDetails.phone2 != \'\'">\n        <ion-col col-11>\n          {{customer.customerDetails.phone2}}\n        </ion-col>\n        <ion-col col-1 color="primary" (click)="callCust(customer.customerDetails.phone2)">\n          <ion-icon name="md-call"></ion-icon>\n        </ion-col>\n      </ion-row>\n\n\n    </ion-card-content>\n\n\n  </ion-card>\n\n  <!-- Infinite Scroll Content -->\n  <!-- <ion-infinite-scroll (ionInfinite)="getRecordsPaginated($event)">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading Customers...">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll> -->\n\n</ion-content>'/*ion-inline-end:"D:\My Work\Jagtap Infra Solutions\location-tracking-ios-compatible\src\pages\customer-mgmt\customer-mgmt.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_common_utility_common_utility__["a" /* CommonUtilityProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_restservice_restservice__["a" /* RestserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_9__providers_database_database__["a" /* DatabaseProvider */]])
    ], CustomerMgmtPage);
    return CustomerMgmtPage;
}());

//# sourceMappingURL=customer-mgmt.js.map

/***/ }),

/***/ 990:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpResponseError */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterceptorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_throw__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_utility_common_utility__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_constants__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__database_database__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*
  Generated class for the InterceptorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HttpResponseError = /** @class */ (function () {
    function HttpResponseError() {
    }
    return HttpResponseError;
}());

var InterceptorProvider = /** @class */ (function () {
    function InterceptorProvider(alertCtrl, http, commonUtility, events, databaseProvider) {
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.commonUtility = commonUtility;
        this.events = events;
        this.databaseProvider = databaseProvider;
    }
    // Intercepts all HTTP requests!
    InterceptorProvider.prototype.intercept = function (request, next) {
        var _this = this;
        console.log('Interceptor Called');
        var token = localStorage.getItem('token');
        console.log('Token = ' + token);
        var clonedReq = this.addToken(request, token);
        return next.handle(clonedReq)
            .catch(function (error) {
            var title = 'Error';
            var message = 'Server Error Occured';
            var errorStatus = error.status;
            console.log('Error = ' + JSON.stringify(error));
            console.log('Error Status = ' + errorStatus);
            if (errorStatus == 0) {
                message = 'Cannot make server calls now. Please exit and open the app again.';
            }
            else if (errorStatus == 400) {
                //TODO: Remove hard-coded string
                if (error.error.error_description.toLowerCase() == 'bad credentials') {
                    message = 'Invalid Username/Password';
                }
                else {
                    message = 'Invalid Request Format';
                }
            }
            else if (errorStatus == 401) {
                return _this.refreshTokenAndRetryRequest(next, request);
            }
            else if (errorStatus == 402) {
                message = error.error.responseMessage.message;
            }
            var alert = _this.alertCtrl.create({
                title: title,
                message: message,
                buttons: ['OK']
            });
            alert.present();
            // Pass the error to the caller of the function
            return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_throw__["_throw"])(error);
        });
    };
    // Adds the token to your headers if it exists
    InterceptorProvider.prototype.addToken = function (request, token) {
        if (token) {
            console.log('Adding Token - ' + token);
            var clone = void 0;
            clone = request.clone({
                setHeaders: {
                    Accept: "application/json",
                    'Content-Type': "application/json",
                    Authorization: "Bearer " + token
                }
            });
            return clone;
        }
        console.log('Returning Request Without Token');
        return request;
    };
    InterceptorProvider.prototype.makeRefreshTokenCall = function (refreshTokenUrl, headers) {
        var _this = this;
        return this.http.post(refreshTokenUrl, '', { headers: headers })
            .map(function (response) { return response; })
            .catch(function (err) {
            console.log("RefreshToken Error - " + JSON.stringify(err));
            console.log('Publishing unauthorized:requestError event');
            _this.events.publish("unauthorized:requestError");
            return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_throw__["_throw"])(err);
        });
    };
    InterceptorProvider.prototype.refreshTokenAndRetryRequest = function (next, request) {
        var _this = this;
        var refreshToken = localStorage.getItem('refresh-token');
        this.commonUtility.clearStorage();
        if (refreshToken) {
            var headers = this.commonUtility.createBasicAuthHeaderOptions();
            var refreshTokenUrl = __WEBPACK_IMPORTED_MODULE_6__constants_constants__["a" /* ConstantsProvider */].API_BASE_URL + __WEBPACK_IMPORTED_MODULE_6__constants_constants__["a" /* ConstantsProvider */].API_ENDPOINT_OAUTH
                + '?grant_type=refresh_token&refresh_token=' + refreshToken;
            return this.makeRefreshTokenCall(refreshTokenUrl, headers)
                .switchMap(function (response) {
                if (response.access_token) {
                    _this.commonUtility.setTokenInStorage(response);
                    // this.databaseProvider.setTokenInDb(response);
                    var clonedReq = _this.addToken(request, response.access_token);
                    return next.handle(clonedReq);
                }
            })
                .catch(function (error) {
                // If there is an exception calling 'refreshToken', bad news so logout.
                console.log('Refresh Token Error Occured');
                _this.events.publish("unauthorized:requestError");
                return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error);
            });
        }
        else {
            console.log('No Refresh Token');
            this.events.publish("unauthorized:requestError");
            return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw({ error: 'No Refresh Token' });
        }
    };
    InterceptorProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__common_utility_common_utility__["a" /* CommonUtilityProvider */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_7__database_database__["a" /* DatabaseProvider */]])
    ], InterceptorProvider);
    return InterceptorProvider;
}());

//# sourceMappingURL=interceptor.js.map

/***/ })

},[581]);
//# sourceMappingURL=main.js.map