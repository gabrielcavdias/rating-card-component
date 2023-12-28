import { createHTMLElement, colors, spacing } from "../helpers";
import { submitHandler } from "../services/rating";

const Button = createHTMLElement({
  el: "button",
  style: {
    padding: spacing(3),
    backgroundColor: colors.orange,
    color: colors.white,
    textTransform: "uppercase",
    textAlign: "center",
    width: "100%",
    borderRadius: spacing(5),
    transition: "0.3s ease-in-out",
  },
  events: {
    mouseenter: ({ target }) => {
      target.style.backgroundColor = colors.white;
      target.style.color = colors.orange;
      target.style.cursor = "pointer";
    },
    mouseleave: ({ target }) => {
      target.style.backgroundColor = colors.orange;
      target.style.color = colors.white;
      target.style.cursor = "auto";
    },
    click: () => submitHandler(),
  },
  children: ["Submit"],
});
export default Button;
