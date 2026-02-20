export interface IComponent extends IDisposable {
  render(): void;
  removeFromContainer(): void;
  appendToContainer(): void;
}

export interface IComponentView extends IDisposable {
  render(): void;
  removeFromContainer(): void;
  appendToContainer(): void;
}

export interface IDisposable {
  dispose(): void;
}
