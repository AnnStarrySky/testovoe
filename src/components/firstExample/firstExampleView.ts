import { ComponentView } from "../../models/abstractions";
import type { FirstExampleComponent } from "./firstExampleComponent";
import { Builder } from "../../utils/builder";
import styles from "./firstExample.module.scss";

export class FirstExampleView extends ComponentView {
  protected _component: FirstExampleComponent;
  protected _wrapper: HTMLElement = Builder.createCustomElement("div", null, styles.wrapper);

  constructor(container: HTMLElement, component: FirstExampleComponent) {
    super(container);
    this._component = component;
  }

  public render(): void {
    this._container.append(this._wrapper);

    this._wrapper.innerText = "First Example Component";

    const btn = Builder.createCustomButton(null, "btn");
    btn.innerText = "TO SECOND PAGE";
    this._wrapper.append(btn);
    btn.addEventListener("click", this.btnOnClick.bind(this));
  }

  private btnOnClick(): void {
    this._component.toSecondPage();
  }
}
