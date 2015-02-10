# react-notify-mixin

A mixin to notify the top level component.

## Usage

First, create a component with this mixin:

```jsx
var NotifyMixin = require('react-notify-mixin');
var MyComp = React.createClass({
  mixins: [NotifyMixin],
  handleClick: function () {
    this.notify('hello');
  },
  render: function () {
    return <button onClick={this.handleClick}>click me!</button>
  }
});
```

And bury it inside your app:

```jsx
var MyApp = React.createClass({
  render: function () {
    return {
      <div>
        <div>
          <MyComp />
        </div>
      </div>
    }
  }
});
```

Then get the notification on the top:

```jsx
React.render(
  <MyApp onNotify={function (msg) { doSomething(msg); }} />,
  document.getElementById('app-id')
);
```
