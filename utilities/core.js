define([],
//
function() {
  "use strict";

  /*global console*/

  return {

    "inherit": function(aChild, aParent) {
      aChild.prototype = Object.create(aParent.prototype);
      aChild.prototype.constructor = aChild;
    },

    "returnStatus": function(aCallback, aStatus, aData /* Optional */) {
      var result;
      result = {
        "status": aStatus
      };
      if (aData) {
        result.data = aData;
      }
      if (aCallback) {
        aCallback(result);
      }
      return result;
    },

    "queue": function(aFuncTab, aThisArg) {
      var task, slice;
      slice = Array.prototype.slice;
      function next() {
        task = aFuncTab.shift();
        if (task) {
          task.apply(aThisArg, [next].concat(slice.call(arguments, 0)));
        }
      }


      next.apply(aThisArg, slice.call(arguments, 2));
    },

    "listenDomEvent": function(aDomElement, aEventId, aCallback) {
      if (aDomElement.addEventListener) {
        aDomElement.addEventListener(aEventId, aCallback, false);
      } else if (aDomElement.attachEvent) {
        aDomElement.attachEvent("on" + aEventId, aCallback);
      } else {
        aDomElement["on" + aEventId] = aCallback;
      }
    },

    "detectScreenResize": function(aCallback) {
      this.listenDomEvent(window, "resize", aCallback);
    },

    "getScreenParameters": function() {
      var screenObj;
      screenObj = {
        "orientation": "landscape",
        "width": window.innerWidth,
        "height": window.innerHeight,
        "pixelRatio": window.devicePixelRatio || 1,
        "deviceType": "large"
      };
      if ( typeof (window.screen.orientation) === "object") {
        if (window.screen.orientation.type.indexOf("landscape") >= 0) {
          if (window.innerHeight > window.innerWidth) {
            screenObj.orientation = "portrait";
          }
        } else {
          if (window.innerWidth > window.innerHeight) {
            screenObj.orientation = "portrait";
          }
        }
      } else if (window.innerHeight > window.innerWidth) {
        screenObj.orientation = "portrait";
        screenObj.width = window.innerHeight;
        screenObj.height = window.innerWidth;
      }
      if (screenObj.width < 768) {
        screenObj.deviceType = "small";
      } else if (screenObj.width < 992) {
        screenObj.deviceType = "medium";
      } else if (screenObj.width < 1200) {
        screenObj.deviceType = "large";
      }
      return screenObj;
    }
  };

});
