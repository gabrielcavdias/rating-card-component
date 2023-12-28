import { CSSReset } from "./Components/CSSReset";
import { RatingCard } from "./Components/RatingCard";
import { colors, createHTMLElement } from "./helpers";
document.title = "Rating | LogoIpsum enterprises";
const app = document.querySelector("body");

(async function () {
  app.appendChild(
    createHTMLElement({
      el: "div",
      style: {
        backgroundColor: colors.veryDarkBlue,
        height: "100vh",
        display: "grid",
        placeItems: "center",
      },
      children: [CSSReset, RatingCard],
    })
  );
})();
