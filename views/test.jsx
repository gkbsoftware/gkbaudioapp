var React = require('react');
var DefaultLayout = require('./layouts/default');

var HelloMessage = React.createClass({
  render: function() {
    return (
      <DefaultLayout >
        <div>Test</div>
      </DefaultLayout>
    );
  }
});

module.exports = HelloMessage;
