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
import { SalaryType } from './salaryType';


export interface Contract { 
    employmentDate: string;
    conclusionDate: string;
    positionItemId?: string | null;
    workplaceItemId?: string | null;
    occupationCodeItemId?: string | null;
    startDate: string;
    terminationDate?: string | null;
    fteNumerator: number;
    fteDenominator: number;
    salary: number;
    paymentSalaryTypeOptions: SalaryType;
    }
export namespace Contract {
}


