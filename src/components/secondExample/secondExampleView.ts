import { ComponentView } from "../../models/abstractions";
import type { SecondExampleComponent } from "./secondExampleComponent";
import { Builder } from "../../utils/builder";
import styles from "./secondExample.module.scss";

export class SecondExampleView extends ComponentView {
  protected _component: SecondExampleComponent;
  protected _wrapper: HTMLElement = Builder.createCustomElement("div", null, styles.wrapper);

  constructor(container: HTMLElement, component: SecondExampleComponent) {
    super(container);
    this._component = component;
  }

  public render(): void {
    this._container.append(this._wrapper);

    this._wrapper.innerText = "Second Example Component";

    const btn = Builder.createCustomButton(null, styles.btnSecondExample);
    btn.innerText = "TO FIRST PAGE";
    this._wrapper.append(btn);
    btn.addEventListener("click", this.btnOnClick.bind(this));
  }

  private btnOnClick(): void {
    this._component.toFirstPage();
  }
}
