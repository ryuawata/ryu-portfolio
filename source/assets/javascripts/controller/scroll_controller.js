import { Controller } from "stimulus";

export default class extends Controller {
  static targets = [ 'cards' ];

  scrollIntoView(event) {
    this.cardsTarget.classList.remove("hidden");
    // event.currentTarget.remove();
    }
}
