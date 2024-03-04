class ApiResponse {
  public statusCode: number;
  public data: null | any;
  public message: string | Record<string, any>;
  public success: boolean;

  constructor(
    statusCode: number,
    data: any,
    message: string | Record<string, any> = "Success"
  ) {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400;
  }
}

export { ApiResponse };
