import { Component } from "../../models/abstractions";
import type { IComponent } from "../../models/interfaces";
import { FirstExampleComponent } from "../firstExample/firstExampleComponent";
import { SecondExampleComponent } from "../secondExample/secondExampleComponent";
import { RouterService } from "../services/routerService";
import { BodyView } from "./bodyView";

export class BodyComponent extends Component {
  protected _view: BodyView;
  protected _parent: IComponent | null = null;
  private _router: RouterService = RouterService.getInstance();

  private _headerComponent: IComponent | null = null;
  private _mainComponent: IComponent | null = null;
  private _footerComponent: IComponent | null = null;

  constructor(container: HTMLElement) {
    super(container);
    this._view = new BodyView(container, this);
    this._router.setBodyComponent(this);
  }

  public render(): void {
    this._view.render();

    this.toFirstPage();
  }

  private clearComponentsFileds() {
    this._headerComponent = null;
    this._mainComponent = null;
    this._footerComponent = null;
  }

  public toFirstPage(): void {
    // Reset previous
    this.disposeAllChildren();
    this.clearComponentsFileds();

    // Set new
    const firstComponent = new FirstExampleComponent(this._view.main, this);
    this._mainComponent = firstComponent;
    this.addChild(firstComponent);
    firstComponent.render();
  }

  public toSecondPage(): void {
    this.disposeAllChildren();
    this.clearComponentsFileds();

    const secondComponent = new SecondExampleComponent(this._view.main, this);
    this._mainComponent = secondComponent;
    this.addChild(secondComponent);
    secondComponent.render();
  }
}
