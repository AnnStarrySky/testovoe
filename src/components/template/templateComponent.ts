import { Component } from "../../models/abstractions";
// Replace import of interface to exact class
import type { IComponent } from "../../models/interfaces";
import { TemplateView } from "./templateView";

export class TemplateComponent extends Component {
  protected _view: TemplateView;
  // Replace parent type with exact type instead of interface
  protected _parent: IComponent;

  constructor(container: HTMLElement, parent: IComponent) {
    super(container);
    this._parent = parent;
    this._view = new TemplateView(container, this);
  }
}
