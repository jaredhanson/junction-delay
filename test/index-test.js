var vows = require('vows');
var assert = require('assert');
var delay = require('index');


vows.describe('junction-delay').addBatch({
  
  'module': {
    'should export middleware': function () {
      assert.isFunction(delay);
      assert.isFunction(delay.delayParser);
    },
  },
  
}).export(module);
