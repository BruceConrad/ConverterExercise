'use strict'

var input = 'Albany|22.2*Caribou|9.5*Columbia|44.6*Denver|29.2*Indianapolis|26.5*Montgomery|46.6*San Diego|57.8*Tulsa|36.4*Tampa|61.3*Billings|24.0';
var coldCities = [];
var moderateCities = [];
var hotCities = [];

function parse(input)
{
    var splitInput = input.split('*');
    for(let i = 0; i < splitInput.length; i++)
    {
        let currInput = splitInput[i].split('|');
        console.log(currInput);
        convert(currInput);
    }

    outputCities();
}

function convert(cityInfo)
{
    let convertedTemp = (cityInfo[1] - 32.0) * 5/9;
    console.log("Converted Temp: " + convertedTemp)
    if(convertedTemp < 20.0)
    {
        coldCities.push([cityInfo[0], convertedTemp])
    }
    else if(convertedTemp > 20.0 && convertedTemp < 30.0)
    {
        moderateCities.push([cityInfo[0], convertedTemp]);
    }
    else if(convertedTemp > 30.0)
    {
        hotCities.push([cityInfo[0], convertedTemp]);
    }
}

function outputCities()
{
    console.log('Cold: ')
    for(let i = 0; i < coldCities.length; i++)
    {
        console.log(coldCities[i][0] + " " + coldCities[i][1]);
    }

    console.log('Moderate: ')
    for(let i = 0; i < moderateCities.length; i++)
    {
        console.log(moderateCities[i][0] + " " + coldCities[i][1]);
    }

    console.log('Hot: ')
    for(let i = 0; i < hotCities.length; i++)
    {
        console.log(hotCities[i][0] + " " + coldCities[i][1]);
    }
}