// import { Response } from "@adonisjs/core/build/standalone";
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Usuario from "App/Models/Usuario";
import axios from "axios";

interface ListaUsuarios {
  id: number;
  name: string;
  username: string;
  email: string;
  address: object;
  phone: string;
  website: string;
  company: string;
}

export default class UsuariosController {
  /**
   * @index
   * @description Rerna array con lista de usuarios
   * @responseBody 200 - <ListaUsuarios[]>()
   * @responseHeader 200 - @use(paginated)
   * @responseHeader 200 - X-pages - A description of the header - @example(test)
   */
  public async listarUsuarios({ request, response }: HttpContextContract) {
    const { data } = await axios.get<ListaUsuarios[]>(
      "https://jsonplaceholder.typicode.com/users"
    );

    const newUser = new Usuario();
    newUser.datos = JSON.stringify(data);
    newUser.metodo = request.url();
    const { id } = await newUser.save();

    response.send({
      respuesta: `Los datos fueron consultados y luego guardados con el id:${id} en base de datos`,
      id,
      datos: data,
    });
  }

  public async publicaciones({ request, response }: HttpContextContract) {
    /**
     * Request URL
     */
    console.log(request.url());

    /**
     * Request body + query params
     */
    console.log(request.all());

    /**
     * Send response
     */
    response.send("publicaciones ...");
    response.send({ hello: "publicaciones ..." });
  }
}
