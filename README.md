here is how you use it

works great for swagger - kinda the point of it

###model class
```javascript
var schemaConstruct = require('schema-construct');

var error = schemaConstruct({
  type: 'object',
  properties: {
    code: {
      type: 'string'
    },
    message: {
      type: 'string'
    },
    stack: {
      type: 'string'
    }
  },
  additionalProperties: false
});

error.prototype.toXml = function() {
  // whatever you wanna do to make this happen
}

module.exports = error;
```

###something that uses that model
```javascript
var Error = require('./models/error');
var error = new Error();

console.log(error);
/*
{
  code: null,
  message: null,
  stack: null
}
*/

console.log(error.schema);
/*
{
  type: 'object',
  properties: {
    code: {
      type: 'string'
    },
    message: {
      type: 'string'
    },
    stack: {
      type: 'string'
    }
  },
  additionalProperties: false
}
*/

console.log(error.toXml());
/*
  hopefully whatever you did to make this xml worked lol
*/
```