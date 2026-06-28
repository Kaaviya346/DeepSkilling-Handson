package com.cognizant.springlearn.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cognizant.springlearn.model.Country;
import com.cognizant.springlearn.util.CountryUtil;

@Service
public class CountryService {

    public Country getCountry(String code) {

        List<Country> countryList = CountryUtil.getCountryList();

        for (Country country : countryList) {

            if (country.getCode().equalsIgnoreCase(code)) {

                return country;

            }

        }

        return null;
    }

}