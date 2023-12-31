export default {
    path: __dirname + "../",
    title: "Api jsonplaceholder",
    version: "1.0.0",
    tagIndex: 2,
    ignore: ["/swagger", "/docs"],
    preferredPutPatch: "PUT", // if PUT/PATCH are provided for the same rout, prefer PUT
    common: {
      parameters: {}, // OpenAPI conform parameters that are commonly used
      headers: {}, // OpenAPI confomr headers that are commonly used
    },
  };