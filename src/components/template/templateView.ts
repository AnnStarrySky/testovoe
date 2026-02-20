import { ComponentView } from "../../models/abstractions";
import { TemplateComponent } from "./templateComponent";
import { Builder } from "../../utils/builder";
import styles from "./body.module.scss";

export class TemplateView extends ComponentView {
  protected _component: TemplateComponent;
  protected _wrapper: HTMLElement = Builder.createCustomElement("div", null, styles.wrapper);

  constructor(container: HTMLElement, component: TemplateComponent) {
    super(container);
    this._component = component;
  }

  public render(): void {
    this._container.append(this._wrapper);

    this._wrapper.innerText = "Template Component";
  }
}
