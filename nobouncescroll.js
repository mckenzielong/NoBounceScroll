/* NoBounceScroll - stop containers from bouncing McKenzie Long 2015 */
(function () {
NoBounceScroll = function (eleName) {
    var version = '0.1';
    var ele = document.getElementById(eleName);

    if (typeof ele !== "undefined") {
        bind();
    } else {
        console.log("Unable to setup NoBounceScroll");
    }

    function handleScroll(evt) {
        if (evt.target.scrollTop <= 1 || evt.target.scrollTop > evt.target.clientHeight) {
            evt.stopPropagation();
            evt.stopImmediatePropagation();
            evt.preventDefault();
            return false;
        }
    }

    function unbind() {
        ele.removeEventListener('scroll', handleScroll, false);
    }

    function bind() {
        ele.addEventListener('scroll', handleScroll, false);
    }

    return {
        version : version,
        bind : bind,
        unbind : unbind
    };
};
})();
