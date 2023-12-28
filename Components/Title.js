import { createHTMLElement, colors } from "../helpers";
/**
 *
 * @param {Object} param0
 * @returns {HTMLElement}
 */
const Title = ({ text, style }) =>
  createHTMLElement({
    el: "h1",
    style: {
      color: colors.white,
      fontSize: "24px",
      fontWeight: "bold",
      ...style,
    },
    children: [text],
  });

export { Title };
