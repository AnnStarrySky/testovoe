import type { IComponent, IComponentView } from "./interfaces";

export abstract class Component implements IComponent {
  protected abstract _view: IComponentView;
  protected abstract _parent: IComponent | null;
  protected _container: HTMLElement;
  private _children: Array<IComponent> = new Array<IComponent>();

  constructor(container: HTMLElement) {
    this._container = container;
  }

  public render(): void {
    this._view.render();

    this._children.forEach((child) => {
      child.render();
    });
  }

  public dispose(): void {
    this.disposeAllChildren();
    this._view.dispose();
  }

  public disposeAllChildren(): void {
    this._children.forEach((child) => {
      child.dispose();
    });
    this.clearAllChildren();
  }

  public removeFromContainer(): void {
    this._view.removeFromContainer();
  }

  public appendToContainer(): void {
    this._view.appendToContainer();
  }

  protected addChild(newChild: IComponent): void {
    this._children.push(newChild);
  }

  protected removeChild(child: IComponent): void {
    const index: number = this._children.indexOf(child);
    if (index > -1) {
      this._children.splice(index, 1);
    }
  }

  protected clearAllChildren(): void {
    this._children = new Array<IComponent>();
  }
}

export abstract class ComponentView implements IComponentView {
  protected abstract _component: IComponent;
  protected _container: HTMLElement;
  protected abstract _wrapper: HTMLElement;

  constructor(container: HTMLElement) {
    this._container = container;
  }

  public abstract render(): void;

  public dispose(): void {
    this.removeFromContainer();
  }

  public removeFromContainer(): void {
    this._wrapper.remove();
  }

  public appendToContainer(): void {
    this._container.append(this._wrapper);
  }
}
