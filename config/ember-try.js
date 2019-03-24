'use strict';

module.exports = function() {
  return {
      scenarios: [
        {
          name: 'ember-lts-2.18',
          npm: {
            dependencies: {
              'ember-source': '~2.18.0'
            }
          }
        }
      ]
  };
};
