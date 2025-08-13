/// <reference path="base.ts" />
/// <reference path="../decorators/autobind.ts" />
/// <reference path="../utils/validation.ts" />
/// <reference path="../state/project-state.ts" />

namespace App {
  // ProjectInput class
  export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor() {
      super("project-input", "app", true, "user-input");

      this.titleInputElement = this.element.querySelector(
        "#title"
      ) as HTMLInputElement;

      this.descriptionInputElement = this.element.querySelector(
        "#description"
      ) as HTMLInputElement;

      this.peopleInputElement = this.element.querySelector(
        "#people"
      ) as HTMLInputElement;

      this.configure();
    }

    configure() {
      // this.element.addEventListener("submit", this.submitHandler.bind(this));
      this.element.addEventListener("submit", this.submitHandler);
    }

    renderContent(): void {}

    private gatherUserInput(): [string, string, number] | void {
      const enteredTitle = this.titleInputElement.value;
      const enteredDesc = this.descriptionInputElement.value;
      const enteredPeopleAmount = this.peopleInputElement.value;

      const titleValidateable: Validateable = {
        value: enteredTitle,
        required: true,
      };

      const descriptionValidateable: Validateable = {
        value: enteredDesc,
        required: true,
        minLenght: 5,
      };

      const peopleValidateable: Validateable = {
        value: +enteredPeopleAmount,
        required: true,
        min: 0,
      };
      if (
        !validate(titleValidateable) ||
        !validate(descriptionValidateable) ||
        !validate(peopleValidateable)
      ) {
        alert("Invalid input, please try again");
        return;
      }
      return [enteredTitle, enteredDesc, +enteredPeopleAmount];
    }

    private clearInputs() {
      this.titleInputElement.value = "";
      this.descriptionInputElement.value = "";
      this.peopleInputElement.value = "";
    }

    @autobind
    private submitHandler(event: Event) {
      event.preventDefault();
      const userInput = this.gatherUserInput();
      if (Array.isArray(userInput)) {
        const [title, desc, people] = userInput;
        projectState.addProject(title, desc, people);
        this.clearInputs();
      }
    }
  }
}
