import { createHTMLElement, colors, spacing } from "../helpers";
import { Star } from "./Star";
import { Title } from "./Title";
import { Text } from "./Text";
import { RatingValues } from "./RatingValues";
import Button from "./Button";

const RatingCard = createHTMLElement({
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
    Star,
    Title({
      text: "How did we do?",
      style: {
        marginTop: spacing(3),
        marginBottom: spacing(3),
      },
    }),
    Text({
      content: `Please let us know how we did with
                your support request. All feedback is appreciated 
                to help us improve our offering!`,
    }),
    RatingValues,
    Button,
  ],
});
export { RatingCard };
