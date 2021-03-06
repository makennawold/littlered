import { Connection, IDatabaseDriver, EntityManager } from "@mikro-orm/core";
import { Request, Response } from "express";
//@ts-ignore
export type MyContext = {
  em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>;
  //@ts-ignore
  req: Request & { session?: Express.Session };
  res: Response;
};
