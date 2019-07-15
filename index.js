// Write your solution in this file!
let driver = {};
function updateDriverWithKeyAndValue(driver, key, value){
    let newDriver = Object.assign({}, driver, { [key]: value });
    return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver, key){
    var newDriver = Object.assign({}, driver );
    delete newDriver[key];
    return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key){
    var newDriver = driver;
    delete newDriver[key];
    return newDriver;
}