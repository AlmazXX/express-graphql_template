export class HttpCompatibleError extends Error {
  constructor(
    public httpCode: number,
    public message: string,
  ) {
    super();
  }
}
