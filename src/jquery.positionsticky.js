PositionSticky = {

  POS_SCHEME_STATIC:   100,
  POS_SCHEME_FIXED:    200,
  POS_SCHEME_ABSOLUTE: 300,

  create: function(element) {
    return Object.create(PositionSticky).init(element);
  },

  init: function(element) {
    this.constructor = PositionSticky;
    this.element = element;
    this.container = element.parentNode;
    this.posScheme = null;
    return this;
  },

  isStatic: function() {

  },

  makeStatic: function() {

  },

  isFixed: function() {
    return this.posScheme === PositionSticky.POS_SCHEME_FIXED;
  },

  makeFixed: function() {
    this.element.style.removeProperty('bottom');
    this.element.style.setProperty('position', 'fixed');
    this.element.style.setProperty('top', '0px');
    this.posScheme = PositionSticky.POS_SCHEME_FIXED;
  },

  isAbsolute: function() {

  },

  makeAbsolute: function() {

  },

  update: function() {
    if (this.isContainerBelowViewport()) {
      if (!this.isStatic()) {
        this.makeStatic();
      }
    } else if (this.canStickyFitInContainer()) {
      if (!this.isFixed()) {
        this.makeFixed();
      }
    } else {
      if (!this.isAbsolute()) {
        this.makeAbsolute();
      }
    }
  },

  isContainerBelowViewport: function() {
    if (this.container.getBoundingClientRect().top >= 0) {
      return true;
    }
    return false;
  },

  canStickyFitInContainer: function() {
    return this.container.getBoundingClientRect().bottom >= this.element.getBoundingClientRect().height;
  }

};