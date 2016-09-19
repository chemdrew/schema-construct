/** Model constructor with a hidden schema key and set of nulls
 * @this Schema
 * @param {Object} schemaObj - json schema object.
 * */

function schema(schemaObj) {
  return function() {
    var returnObj = {};
    Object.defineProperty(this, 'schema', {
      enumerable: false,
      configurable: false,
      writable: false,
      value: schemaObj
    });
    addKeys(returnObj, schemaObj);
    Object.assign(this, returnObj);
  };
}

function addKeys(obj, schemaObj) {
  var properties = Object.keys(schemaObj.properties), i = 0;
  for (i; i < properties.length; i++) {
    obj[properties[i]] = null;
    if (schemaObj.properties[properties[i]].properties) addKeys(obj, schemaObj.properties[properties[i]]);
  }
  if (!schemaObj.additionalProperties) Object.preventExtensions(obj);
}

module.exports = schema;