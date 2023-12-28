import { ThankYouCard } from "../Components/ThankYouCard";
const ratingChangedEvent = new Event("changedrate");
const state = {
  currentRate: null,
};

const submitHandler = () => {
  if (!state.currentRate) return;
  const ratingCard = document.querySelector("article");
  const app = document.querySelector("body>div");
  ratingCard.remove();
  app.appendChild(ThankYouCard());
};

export { state, ratingChangedEvent, submitHandler };
