export const AppErrorResponse = (statusCode: number, message: string) => {
  throw {
    statusCode,
    message
  }
}
