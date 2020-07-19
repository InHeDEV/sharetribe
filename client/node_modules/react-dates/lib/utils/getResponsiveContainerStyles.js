Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = getResponsiveContainerStyles;

var _constants = require('../../constants');

function getResponsiveContainerStyles(anchorDirection, currentOffset, containerEdge, margin) {
  var newStyles = {};

  var windowWidth = typeof window !== 'undefined' && window.innerWidth;
  var calculatedOffset = anchorDirection === _constants.ANCHOR_LEFT ? windowWidth - containerEdge : containerEdge;
  var calculatedMargin = margin || 0;

  newStyles[anchorDirection] = Math.min(currentOffset + calculatedOffset - calculatedMargin, 0);

  return newStyles;
}