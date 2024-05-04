/* eslint-disable @typescript-eslint/no-explicit-any */
export class BaseResponse {
  resultCode: number;
  resultItem: any;
  userMessage: string;

  constructor(apiResponse: any) {
    this.resultCode = apiResponse.resultCode;
    this.resultItem = apiResponse.resultItem;
    this.userMessage = apiResponse.userMessage;
  }
}
