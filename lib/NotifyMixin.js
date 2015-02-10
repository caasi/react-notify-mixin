slice = Array.prototype.slice;

var NotifyMixin = {
  notify: function () {
    var args  = slice.call(arguments),
        owner = this;
    while (owner._owner) { owner = owner._owner; }
    if (owner.props && owner.props.onNotify) {
      owner.props.onNotify.apply(this, args);
    }
  }
}

module.exports = NotifyMixin;

