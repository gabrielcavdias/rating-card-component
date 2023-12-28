import { createHTMLElement, colors, spacing } from "../helpers";
import { Title } from "../Components/Title";
import { Text } from "../Components/Text";
import { state } from "../services/rating";
import thximage from "../icons/illustration-thank-you.svg";

const ThankYouImage = createHTMLElement({
  el: "img",
  style: {
    display: "block",
    marginInline: "auto",
  },
  attributes: {
    src: thximage,
  },
});

const ClientRating = () =>
  createHTMLElement({
    el: "p",
    style: {
      width: "fit-content",
      marginInline: "auto",
      marginBlock: "15px",
      backgroundColor: colors.mediumGrayTransparent,
      padding: `5px 12px`,
      color: colors.orange,
      borderRadius: spacing(10),
    },
    children: [`You selected ${state.currentRate} out o 5`],
  });

const ThankYouCard = () =>
  createHTMLElement({
    el: "article",
    style: {
      backgroundColor: colors.darkBlue,
      maxWidth: "350px",
      padding: spacing(10),
      paddingLeft: spacing(6),
      paddingRight: spacing(6),
      paddingBottom: spacing(4),
      borderRadius: "25px",
    },
    children: [
      ThankYouImage,
      Title({
        text: "Thank you!",
        style: {
          marginTop: spacing(3),
          marginBottom: spacing(3),
          textAlign: "center",
        },
      }),
      ClientRating(),
      Text({
        content:
          "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!",
        style: {
          textAlign: "center",
        },
      }),
    ],
  });

export { ThankYouCard };
