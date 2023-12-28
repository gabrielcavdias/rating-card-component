import { state, ratingChangedEvent } from "../services/rating";
import { createHTMLElement, colors, spacing } from "../helpers";
const RatingValue = (rate) => {
  const activeBg = () =>
    state.currentRate == rate ? colors.orange : colors.mediumGrayTransparent;
  const activeColor = () =>
    state.currentRate == rate ? colors.white : "inherit";
  return createHTMLElement({
    el: "li",
    children: [
      createHTMLElement({
        el: "button",
        attributes: { "data-rating-value": rate },
        style: {
          backgroundColor: activeBg(),
          color: activeColor(),
          borderRadius: "100%",
          marginBottom: spacing(2),
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "50px",
          height: "50px",
          fontSize: "1.5rem",
          transition: "0.3s ease-in-out",
        },
        events: {
          mouseenter: ({ target }) => {
            if (state.currentRate != rate) {
              target.style.backgroundColor = colors.mediumGray;
              target.style.color = colors.white;
              target.style.cursor = "pointer";
            }
          },
          mouseleave: ({ target }) => {
            target.style.backgroundColor = activeBg();
            target.style.color = activeColor();
            target.style.cursor = "auto";
          },
          changedrate: ({ target }) => {
            target.style.backgroundColor =
              state.currentRate == rate
                ? colors.orange
                : colors.mediumGrayTransparent;
            target.style.color =
              state.currentRate == rate ? colors.white : "inherit";
          },
          click: () => {
            state.currentRate = rate;
            document
              .querySelectorAll("[data-rating-value]")
              .forEach((el) => el.dispatchEvent(ratingChangedEvent));
          },
        },
        children: [`${rate}`],
      }),
    ],
  });
};

const RatingValues = createHTMLElement({
  el: "ul",
  style: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: spacing(4),
    marginBottom: spacing(4),
    color: colors.lightGray,
  },
  children: [1, 2, 3, 4, 5].map((rate) => RatingValue(rate)),
});
export { RatingValues };
