import { HttpException, HttpStatus } from '@nestjs/common';
import { ApiErrorCode } from 'src/common/constant/api-error-code.enum';

export class ApiException extends HttpException {
  private errorMessage: string;
  private errorCode: ApiErrorCode;

  constructor(
    errorMessage: string,
    errorCode: number,
    statusCode: HttpStatus = HttpStatus.BAD_REQUEST,
  ) {
    super(errorMessage, statusCode);
    this.errorCode = errorCode;
    this.errorMessage = errorMessage;
  }

  getErrorCode(): ApiErrorCode {
    return this.errorCode;
  }

  getErrorMessage(): string {
    return this.errorMessage;
  }
}
