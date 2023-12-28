const colors = {
  orange: "hsl(25, 97%, 53%)",
  white: "hsl(0, 0%, 100%)",
  lightGray: "hsl(217, 12%, 63%)",
  mediumGray: "hsl(216, 12%, 54%)",
  mediumGrayTransparent: "hsl(216, 12%, 54%, 0.1)",
  darkBlue: "hsl(213, 19%, 18%)",
  darkBlueTransparent: "hsl(213, 19%, 18%, 0.3)",
  veryDarkBlue: "hsl(216, 12%, 8%)",
};
/**
 *
 * @param {Number} num
 * @returns {String} spacing inpixels
 */
function spacing(num) {
  return `${num * 4}px`;
}

/**
 *
 * @param {Object} tagData
 * @returns {HTMLElement}
 */

function createHTMLElement({
  el,
  attributes,
  children,
  style,
  events,
  functions,
}) {
  const tag = document.createElement(el);
  if (attributes) {
    Object.entries(attributes).forEach(([name, value]) =>
      tag.setAttribute(name, value)
    );
  }
  if (style) {
    Object.entries(style).forEach(([name, value]) => (tag.style[name] = value));
  }
  if (events) {
    Object.entries(events).forEach(([eventName, callback]) =>
      tag.addEventListener(eventName, callback)
    );
  }
  if (children) {
    children.forEach((child) => {
      if (typeof child == "string") {
        child = document.createTextNode(child);
      }
      tag.appendChild(child);
    });
  }
  return tag;
}

export { createHTMLElement, colors, spacing };
