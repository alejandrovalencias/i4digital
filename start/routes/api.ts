import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
  Route.get("/api/listar-usuarios", "UsuariosController.listarUsuarios");
}).middleware("auth:api");;
