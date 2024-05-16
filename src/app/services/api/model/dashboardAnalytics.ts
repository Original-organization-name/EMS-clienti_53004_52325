/**
 * EMS.Api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { EmployeeShortInfoModel } from './employeeShortInfoModel';


export interface DashboardAnalytics { 
    totalEmployeeCount?: number;
    addInLastMonth?: number;
    totalPayroll?: number;
    recentAddedEmployees?: Array<EmployeeShortInfoModel> | null;
    nearExpiryContract?: Array<string> | null;
}

