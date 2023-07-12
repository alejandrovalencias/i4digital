#Consumo de Api

#Pasos para correr el proyecto
1.0 Crear base de datos en mysql con el nombre de api-adonis
  CREATE DATABASE IF NOT EXISTS `api-adonis` /*!40100 DEFAULT CHARACTER SET utf8 */;
  el usuario y clave de la base de datos debe ser root
1.Descargar el repositorio con el siguiente comando
  git clone https://github.com/alejandrovalencias/i4digital.git
2.Installar las depencias
  npm install
3. Ejecutar las migraciones
  node ace migration:run
4.Correr la aplicación
  node ace serve --watch
5.Consumir la api con con la operación register para crear token y consumir el resto de operaciones
  - El metodo es POST y se debe enviar email y password
    http://127.0.0.1:3333/register
  - la respuesta es un json con la siguiente estructura 
    {"token": {
     "type": "bearer",
     "token": "MQ.WIy81nHK5xjDjvJXaOrm0mhR0Jc_JyvEWZKIiaQSmuC7NAT-1PD_1W2dN9Vl",
     "expires_at": "2023-07-21T23:25:02.754-05:00"
    }}
6.Para consumir la operación listar todos los usuarios se debe usar el endpoint
  - El metodo para consumir la api es GET y se debe enviar en  header la siguiente estructura con el token de la api anterior
    Authorization	bearer MQ.WIy81nHK5xjDjvJXaOrm0mhR0Jc_JyvEWZKIiaQSmuC7NAT-1PD_1W2dN9Vl
    accept	application/json 
  - http://127.0.0.1:3333/api/listar-usuarios
  - Tendremos una respuesta con la siguiente estrcutura si el consumo fue exitoso y los datos se podran ver en la tabla usuarios
     {"respuesta": "Los datos fueron consultados y luego guardados con el id:1 en base de datos",
       "id": 1,
       "datos":    [
                {
             "id": 1,
             "name": "Leanne Graham",
             "username": "Bret",
             "email": "Sincere@april.biz",
             "address":          {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo":             {
                   "lat": "-37.3159",
                   "lng": "81.1496"
                }
             },
             "phone": "1-770-736-8031 x56442",
             "website": "hildegard.org",
             "company":          {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
             }
          }]}

Notas:
1. Solo implemente una api con el consumo del servicio de usuario de la api https://jsonplaceholder.typicode.com/
2. Es la primera vez que uso adonis
3. Sé que no se debe agregar el archivo .env al repositorio, lo hice para que corra la api de forma rapida y no haya que hacer más pasos
4. No termine de implementar swagger para poder consumir las apis desde ahí, aunque se pueden visualizar las operaciones, me falto el envio de los parametros
  - http://127.0.0.1:3333/docs

Resumen
Implemente el servicio de generar token y poder consumir la api de listar-usuarios, cuando se tiene la lista de usuarios de la api externa se guarda en base de datos el resultado

