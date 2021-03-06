(function (window) {
    function tooltip(ele, transitionObj, enterCallback, outCallback) {
        if (!ele || typeof ele !== "string") {
            console.error(new Error('The "tooltip" method requires the "class" of at least one parameter'));
            return
        }
        if (transitionObj && ({}).constructor.name === "Object") {
            var transition = transitionObj.transition || false,
                time = transitionObj.time || 200,
                timer = null
        }
        var els = document.querySelectorAll(ele),
            tipContent = document.createElement("div");
        Array.prototype.slice.call(els).forEach(function (el) {
            el.addEventListener("mouseenter", function () {
                var currenLeft = el.offsetLeft,
                    currenTop = el.offsetTop,
                    currenWidth = el.offsetWidth,
                    currenHeight = el.offsetHeight,
                    context = el.getAttribute("data-tip"),
                    direction = el.getAttribute("data-direction") || "top";
                tipContentSetter(tipContent, context, direction);
                var tipContentWidth = tipContent.offsetWidth,
                    tipContentHeight = tipContent.offsetHeight;
                switch (direction) {
                    case "top":
                        tipContent.style.left = currenLeft + currenWidth / 2 - tipContentWidth / 2 + "px";
                        tipContent.style.top = currenTop - tipContentHeight - 7 + "px";
                        break;
                    case "left":
                        tipContent.style.left = currenLeft - tipContentWidth - 7 + "px";
                        tipContent.style.top = currenTop + currenHeight / 2 - tipContentHeight / 2 + "px";
                        break;
                    case "right":
                        tipContent.style.left = currenLeft + currenWidth + 7 + "px";
                        tipContent.style.top = currenTop + currenHeight / 2 - tipContentHeight / 2 + "px";
                        break;
                    case "bottom":
                        tipContent.style.left = currenLeft + currenWidth / 2 - tipContentWidth / 2 + "px";
                        tipContent.style.top = currenTop + currenHeight + 7 + "px"
                }
            }, false);
            deleteTipContent(el)
        });

        function deleteTipContent(el) {
            el.addEventListener("mouseleave", function () {
                var oldTipContent = document.querySelector(".tool_tip");
                if (oldTipContent) {
                    if (transition === true) {
                        return opacityTransition(oldTipContent, "leave")
                    }
                    document.body.removeChild(oldTipContent);
                    typeof outCallback === "function" ? outCallback() : null
                }
            }, false)
        }

        function tipContentSetter(tipContent, context, direction) {
            tipContent.innerHTML = context;
            tipContent.className = "tool_tip tool_tip_" + direction;
            document.body.appendChild(tipContent);
            if (transition === true) {
                opacityTransition(tipContent, "enter");
                return
            }
            typeof enterCallback === "function" ? enterCallback() : null
        }

        function opacityTransition(ele, state) {
            timer && clearTimeout(timer);
            ele.style.setProperty("transition", "opacity " + time / 1000 + "s");
            ele.style.setProperty("-webkit-transition", "opacity " + time / 1000 + "s");
            if (state === "enter") {
                ele.style.opacity = 0;
                timer = setTimeout(function () {
                    ele.style.opacity = 1;
                    typeof enterCallback === "function" ? enterCallback() : null
                }, 0)
            } else {
                if (state === "leave") {
                    ele.style.opacity = 0;
                    typeof outCallback === "function" ? outCallback() : null;
                    timer = setTimeout(function () {
                        try {
                            document.body.removeChild(ele)
                        } catch (e) {}
                    }, time)
                }
            }
        }
    }
    window.tooltip = tooltip
})(window);