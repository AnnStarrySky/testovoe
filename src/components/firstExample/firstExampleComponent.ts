import { Component } from "../../models/abstractions";
import type { BodyComponent } from "../body/bodyComponent";
import { RouterService } from "../services/routerService";
import { FirstExampleView } from "./firstExampleView";

export class FirstExampleComponent extends Component {
  protected _view: FirstExampleView;
  protected _parent: BodyComponent;
  private _router: RouterService = RouterService.getInstance();

  constructor(container: HTMLElement, parent: BodyComponent) {
    super(container);
    this._parent = parent;
    this._view = new FirstExampleView(container, this);
  }

  public toSecondPage(): void {
    this._router.toSecondPage();
  }
}
