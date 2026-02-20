import { ComponentView } from "../../models/abstractions";
import type { BodyComponent } from "./bodyComponent";
import { Builder } from "../../utils/builder";
import styles from "./body.module.scss";

export class BodyView extends ComponentView {
  protected _component: BodyComponent;
  protected _wrapper: HTMLElement = Builder.createCustomElement("div", null, styles.wrapper);

  public header: HTMLElement = Builder.createCustomElement("header", null);
  public main: HTMLElement = Builder.createCustomElement("main", null);
  public footer: HTMLElement = Builder.createCustomElement("footer", null);

  constructor(container: HTMLElement, component: BodyComponent) {
    super(container);
    this._component = component;
  }

  public render(): void {
    // Insert wrapper before <script>
    this._container.insertBefore(this._wrapper, this._container.firstChild);

    this._wrapper.append(this.header);
    this._wrapper.append(this.main);
    this._wrapper.append(this.footer);
  }
}
