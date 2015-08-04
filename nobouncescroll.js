/**
 * Stop containers from bouncing in webkit browsers.
 * @author  McKenzie Long
 * @version 0.1
 */
(function () {
  NoBounceScroll = function (eleName) {
    var version = '0.1';
    var ele = document.getElementById(eleName);

    if (typeof ele !== "undefined") {
      enable();
    } else {
      throw new Error("NoBounceScroll: Unable to setup");
    }

    function handleScroll(evt) {
      if (evt.target.scrollTop <= 1 ||
        evt.target.scrollTop + evt.target.clientHeight >= evt.target.scrollHeight) {
          evt.stopImmediatePropagation();
          return;
        }
      }

      function disable() {
        ele.removeEventListener('scroll', handleScroll, false);
      }

      function enable() {
        ele.addEventListener('scroll', handleScroll, false);
      }

      return {
        version : version,
        enable : enable,
        disable : disable
      };
    };

  })();
