import { createHTMLElement, colors, spacing } from "../helpers";
import star from "../icons/icon-star.svg";

const Star = createHTMLElement({
  el: "span",
  style: {
    borderRadius: "100%",
    backgroundColor: colors.mediumGrayTransparent,
    marginBottom: spacing(2),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50px",
    height: "50px",
  },
  children: [
    createHTMLElement({
      el: "img",
      attributes: {
        src: star,
      },
    }),
  ],
});

export { Star };
