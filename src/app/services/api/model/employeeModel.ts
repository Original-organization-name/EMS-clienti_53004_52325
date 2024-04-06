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
import { Address } from './address';
import { PaymentMethod } from './paymentMethod';
import { Gender } from './gender';
import { ContactModel } from './contactModel';


export interface EmployeeModel { 
    id?: string;
    name?: string | null;
    surname?: string | null;
    pesel?: string | null;
    nip?: string | null;
    birthdate?: string | null;
    gender?: Gender;
    address?: Address;
    contacts?: Array<ContactModel> | null;
    paymentMethod?: PaymentMethod;
}
export namespace EmployeeModel {
}

