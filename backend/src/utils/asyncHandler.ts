import { Request, Response, NextFunction } from 'express';

interface AsyncRequestHandler {
  (req: Request, res: Response, next: NextFunction): Promise<any>;
}

const asyncHandler = (requestHandler: AsyncRequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise
      .resolve(requestHandler(req, res, next))
      .catch((err) => next(err));
  };
};

export { asyncHandler, AsyncRequestHandler };
