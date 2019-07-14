// Write your solution in this file!

let driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, {[key]: value})
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    Object.assign(driver, {[key] : value})
	return driver
}

function deleteFromDriverByKey(driver, key) {
        let deleted_key_driver = Object.assign({}, driver) // Merge {} with driver so driver stays unaltered
        delete deleted_key_driver[key] //d_k_d is essentially a copy of driver, but we can mess with it without altering driver
        return deleted_key_driver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver
}


