/** @jsx React.DOM */

// Comment Box (from React tutorial) (START)
var Comment = React.createClass({
  render: function() {
    return (
      <div className='comment'>
        <li>
          <b>{this.props.author}</b> {this.props.text}
        </li>
      </div>
    )
  }
});

var CommentList = React.createClass({
  render: function() {
    var comments = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} text={comment.text}>
        </Comment>
      )
    });
    return (
      <div>
        {comments}
      </div>
    );
  }
});

var CommentBox = React.createClass({
  getInitialState: function() {
    return {data: []};
  },

  render: function() {
    return (
      <div className="commentBox">
        <h2>Comments</h2>
        <CommentList data={this.props.data} />
      </div>
    );
  }
});
// Comment Box (END)

// DEMO #2 (http://facebook.github.io/react/) (START)
// A Stateful Component
// For a question about componentDidMount and componentWillUnmount, look at
// http://facebook.github.io/react/docs/component-specs.html

var StatefulTimer = React.createClass({
  getInitialState: function() {
    return {secondsElapsed: 0};
  },
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
      <div>
        <h2>Stateful Timer</h2>
        <div className='timer'>
          Seconds Elapsed: {this.state.secondsElapsed}
        </div>
      </div>
    );
  }
});

// DEMO #1 (http://facebook.github.io/react/) (START)
// All React components, minially require a 'render' method
var StaticHello = React.createClass({
  render: function() {
    return (
      <h2 className='static-component'>Hello React</h2>
    );
  }
});

//The parent (or root) component
var ReactTutorialApp = React.createClass({
  render: function() {
    return (
      <div>
        <StaticHello />
        <StatefulTimer />
        <CommentBox data={this.props.data} />
      </div>
    );
  }
});
