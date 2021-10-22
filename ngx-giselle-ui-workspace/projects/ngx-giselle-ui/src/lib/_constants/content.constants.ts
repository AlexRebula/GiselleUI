import { ICountryCodeEnum } from './../_interfaces/geography.enums';

import { IOption } from './../_interfaces/common-viewmodel.interfaces';

import { ICountryEnum } from '../_interfaces/geography.enums';

export const COUNTRY_OPTIONS: IOption[] = [
    {
        id: ICountryCodeEnum.Australia,
        value: ICountryEnum.AU,
        displayValue: ICountryEnum.AU,
    },
    {
        id: ICountryCodeEnum.UnitedKingdom,
        value: ICountryEnum.GB,
        displayValue: ICountryEnum.GB,
    },
    {
        id: ICountryCodeEnum.UnitedStates,
        value: ICountryEnum.US,
        displayValue: ICountryEnum.US,
    },
    {
        id: ICountryCodeEnum.Canada,
        value: ICountryEnum.CA,
        displayValue: ICountryEnum.CA,
    },
    {
        id: ICountryCodeEnum.Singapore,
        value: ICountryEnum.SG,
        displayValue: ICountryEnum.SG,
    },
];

export const COUNTRY_COORDINATES = {
    Australia: {
        lat: -29.0076186,
        lng: 134.681129,
    },
    'United Kingdom': {
        lat: 51.5285582,
        lng: -0.2416799,
    },
    'United States': {
        lat: 38.8937336,
        lng: -77.0846156,
    },
    Singapore: {
        lat: 1.3139961,
        lng: 103.7041651,
    },
    Canada: {
        lat: 45.5579564,
        lng: -73.8703845,
    },
};
