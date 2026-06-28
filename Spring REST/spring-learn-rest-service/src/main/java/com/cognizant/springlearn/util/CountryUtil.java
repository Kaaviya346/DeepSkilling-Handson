package com.cognizant.springlearn.util;

import java.util.ArrayList;
import java.util.List;

import com.cognizant.springlearn.model.Country;

public class CountryUtil {

    public static List<Country> getCountryList() {

        List<Country> countryList = new ArrayList<>();

        countryList.add(new Country("IN", "India"));
        countryList.add(new Country("US", "United States"));
        countryList.add(new Country("DE", "Germany"));

        return countryList;
    }
}