/** @jsx React.DOM */

// hard coding data
var data = [
  {"author": "Pete Hunt", "text": "This is one comment"},
  {"author": "Jordan Walke", "text": "This is *another* comment"}
];

React.renderComponent(
  <ReactTutorialApp data={data} />,
  document.getElementById('content')
);
