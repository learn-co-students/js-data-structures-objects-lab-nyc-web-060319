let driver = {}

function updateDriverWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function  destructivelyUpdateDriverWithKeyAndValue(object, key, value) {
  return Object.assign(object, { [key]: value })
}

function deleteFromDriverByKey(object, key) {
    let newObject = Object.assign({}, object)
    delete newObject[key]
    return newObject
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key]
  return driver
}
