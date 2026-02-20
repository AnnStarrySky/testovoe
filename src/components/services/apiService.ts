export class ApiService {
  private constructor() { }

  //  Scoped service
  public static getInstance(): ApiService {
    return new ApiService();
  }

  public async getDataFromServer(): Promise<void> { }

  public async getAnotherDataFromServer(): Promise<void> { }
}
