import { Request, Response } from "express";

export function logger(req: Request, res: Response, next: Function) {
  const timeNow = new Date().toLocaleString();
  console.info(
    `[${timeNow}](${req.ip}) ${req.method} ${req.url} ${JSON.stringify(
      req.body
    )} `
  );
  next();
}
