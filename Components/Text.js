import { createHTMLElement, colors } from "../helpers";
/**
 *
 * @param {Object} param0
 * @returns {HTMLElement}
 */
const Text = ({ content, style }) =>
  createHTMLElement({
    el: "p",
    style: {
      color: colors.lightGray,
      fontSize: "16px",
      lineHeight: "24px",
      ...style,
    },
    children: [content],
  });

export { Text };
