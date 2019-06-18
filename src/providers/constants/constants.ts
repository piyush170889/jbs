import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
Generated class for the ConstantsProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
@Injectable()
export class ConstantsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ConstantsProvider Provider');
  }

  //Common API Constants

  // LOCAL
  // public static API_BASE_URL: string = "http://127.0.0.1:8080/sapbasemodule/v1/";

  //DEV
  // public static API_BASE_URL: string = "http://116.75.129.27:8089/sapbaseapitest/v1/";
  // public static API_BASE_URL: string = "http://67.211.220.180:8080/sapbaseapi/v1/";

  // STAGING
  // public static API_BASE_URL: string = "http://116.75.129.27:8089/sapbaseapitest/v1/";

  // PRODUCTION
  public static API_BASE_URL: string = "http://116.75.129.27:8089/sapbaseapi/v1/";


  //API Endpoints
  public static API_ENDPOINT_ACTIVATE_DEACTIVATE = "activate-deactivate";
  public static API_ENDPOINT_USERS = "users";
  public static API_ENDPOINT_TAGS = "tags";
  public static URL_SEPARATOR = "/";
  public static URL_PARAM_PAGE_NO = "pageNo=";
  public static API_ENDPOINT_OAUTH = "oauth/token";
  public static URL_PARAM_LIMIT = "&limit=";
  public static LOCATION_TRACKING_URL = "ext/location";

  //API Endpoints
  public static API_ENDPOINT_ROLES = ConstantsProvider.API_ENDPOINT_USERS
    + ConstantsProvider.URL_SEPARATOR + "roles";
  public static API_ENDPOINT_VERIFY_PSSWD = ConstantsProvider.API_ENDPOINT_USERS
    + ConstantsProvider.URL_SEPARATOR + "validate-password";
  public static API_ENDPOINT_ORDERS = "orders";
  public static API_ENDPOINT_CHANGE_PASS = "change-password";
  public static API_ENDPOINT_ADMIN_USERS = "admin-users";
  public static API_ENDPOINT_TRACKING_HISTORY = 'tracking-history?track-date=';
  public static API_ENDPOINT_USER_CHNG_PWD = "user-change-password";
  public static API_ENDPOINT_CUST_DTLS = "customers"
  public static API_ENDPOINT_CUSTOMER_MGMT = 'customers' + '?' + ConstantsProvider.URL_PARAM_PAGE_NO;
  public static API_ENDPOINT_SEND_OTP = "send-otp";
  public static API_ENDPOINT_VERIFY_OTP = "verify-otp";
  public static API_ENDPOINT_AGING_REPORT = "aging-report";
  public static API_ENDPOINT_LEDGER_REPORT = "ledger-report";
  public static API_ENDPOINT_LEDGER_REPORT_NEW = 'new-ledger-report';
  public static API_ENDPOINT_ITEM_DTLS = "items";
  public static API_ENDPOINT_BOOKED_ORDERS = "booked-orders";
  public static API_ENDPOINT_PENDING_INVOICES: string = 'pending-invoices';
  public static API_ENDPOINT_CUST_ALL_INVOICES = "all-invoices";
  public static API_ENDPOINT_SYNC = "sync";

  //Master Data JSON key names
  public static MD_UOM = "uom";
  public static APP_DATE_LOCALE = 'en-US';
  public static REPORTS_DATE_FORMAT = 'DD MMM YYYY';
  public static APP_DATETIME_DISPLAY_FORMAT = 'DD MMM YY hh:mm A';

  // DB Constants
  public static APP_DB_NM = 'jbs_app_db.db';
  public static APP_DB_LOC = 'default';
  public static APP_DB_IOS_LOC = 'Library';

  //ROLES Constants
  public static ROLE_ADMIN = 'ROLE_ADMIN';
  public static ROLE_USER = 'ROLE_USER';
  public static ROLE_SALES = 'ROLE_SALES';

  //CONFIG Constants
  public static SW_VER = '2.4.5';
  public static BASIC_AUTH_TOKEN = 'c2FwYmFzZW1vZHVsZTpzYXBiYXNlbW9kdWxlLXNlY3JldA==';
  public static CONFIG_NM_CUST_DATA = 'customer_data';
  public static CONFIG_NM_LAST_UPDATED_TS = "last_updated_ts";
  public static CONFIG_DS_IMG_PATH = 'assets/imgs/stamp.jpg';
  public static CONFIG_NM_REFRESH_TOKEN = 'refresh-token';
  public static CONFIG_NM_ACCESS_TOKEN = 'token';
}