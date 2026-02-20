import { Component } from "../../models/abstractions";
import type { IComponent } from "../../models/interfaces";
import { BodyView } from "./bodyView";

export class BodyComponent extends Component {
  protected _view: BodyView;
  protected _parent: IComponent | null = null;

  private _headerComponent: IComponent | null = null;
  private _mainComponent: IComponent | null = null;
  private _footerComponent: IComponent | null = null;

  constructor(container: HTMLElement) {
    super(container);
    this._view = new BodyView(container, this);
  }
}
