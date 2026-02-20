import { Component } from "../../models/abstractions";
import type { BodyComponent } from "../body/bodyComponent";
import { RouterService } from "../services/routerService";
import { SecondExampleView } from "./secondExampleView";

export class SecondExampleComponent extends Component {
  protected _view: SecondExampleView;
  protected _parent: BodyComponent;
  private _router: RouterService = RouterService.getInstance();

  constructor(container: HTMLElement, parent: BodyComponent) {
    super(container);
    this._parent = parent;
    this._view = new SecondExampleView(container, this);
  }
  public toFirstPage(): void {
    this._router.toFirstPage();
  }
}
