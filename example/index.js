var React = require('react'),
    NotifyMixin = require('../'),
    MyComp,
    MyApp,
    div = React.DOM.div,
    button = React.DOM.button;

MyComp = React.createClass({
  mixins: [NotifyMixin],
  render: function () {
    var self = this;
    return button({
             onClick: function () {
               self.notify('hello');
             }
           }, 'click me!');
  }
});
MyComp = React.createFactory(MyComp);

MyApp = React.createClass({
  render: function () {
    return div({},
             div({},
               div({},
                 MyComp()
               )
             )
           );
  }
});
MyApp = React.createFactory(MyApp);

React.render(
  MyApp({ onNotify: alert }),
  document.getElementById('app')
);
