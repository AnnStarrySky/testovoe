export class Builder {
  public static createCustomElement(tagName: string, id: string | null, ...classes: Array<string>): HTMLElement {
    const result: HTMLElement = document.createElement(tagName);

    if (id) {
      result.id = id;
    }

    if (classes.length > 0) {
      for (const c of classes) {
        result.classList.add(c);
      }
    }

    return result;
  }

  public static createCustomButton(id: string | null, ...classes: Array<string>): HTMLButtonElement {
    const result: HTMLButtonElement = document.createElement("button");

    if (id) {
      result.id = id;
    }

    if (classes.length > 0) {
      for (const c of classes) {
        result.classList.add(c);
      }
    }

    return result;
  }
}
