import "reflect-metadata";
import { Server, Request, ResponseToolkit } from "@hapi/hapi";
import getConnection from "./connection";
import { User } from "./entity/user";

const init = async () => {
  const server: Server = new Server({
    port: 3000,
    host: "localhost",
  });

  const conn = await getConnection();
  console.log("Conectado.......");

  server.route({
    method: "GET",
    path: "/",
    handler: (request: Request, h: ResponseToolkit) => {
      return "Hello World!";
    },
  });

  server.route({
    method: "GET",
    path: "/crear-usuario",
    handler: async (request: Request, h: ResponseToolkit) => {
      const repoUser = conn.getRepository(User);
      const newUser = new User();
      newUser.firstName = "marcos";
      newUser.lastName = "Perez";
      newUser.age = 31;
      newUser.email = "marcos.d.perez@gmail.com";
      return await repoUser.save(newUser);
    },
  });

  server.route({
    method: "GET",
    path: "/usuarios",
    handler: async (request: Request, h: ResponseToolkit) => {
      const repoUser = conn.getRepository(User);
      const where = { ...request.query };
      return repoUser.find(where);
    },
  });

  server.route({
    method: "GET",
    path: "/borrar-usuario/{id}",
    handler: async (request: Request, h: ResponseToolkit) => {
      const repoUser = conn.getRepository(User);
      return repoUser.remove({ id: request.params.id } as any);
    },
  });

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});
init();
