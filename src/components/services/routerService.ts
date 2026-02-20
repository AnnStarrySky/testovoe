import type { BodyComponent } from "../body/bodyComponent";

export class RouterService {
  private static _instance: RouterService | null = null;

  private _body: BodyComponent | null = null;

  private constructor() { }

  // Singleton pattern
  public static getInstance(): RouterService {
    if (this._instance) {
      return this._instance;
    }
    this._instance = new RouterService();
    return this._instance;
  }

  public setBodyComponent(body: BodyComponent) {
    this._body = body;
  }

  // TODO: Routing for browser adress field

  public toFirstPage(): void {
    this._body?.toFirstPage();
  }

  public toSecondPage(): void {
    this._body?.toSecondPage();
  }
}
