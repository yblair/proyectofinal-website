const request = require('postman-request');

const getAllProductos = (callback) => {
    request('https://proyectofinal-api.herokuapp.com/productos', (error, res, body) => {
        if(error){
          console.log('Error', error)  
          return callback(error, undefined);
        }
        if (res){
            if(body){
               return callback(undefined, body);
            }
            callback("No se encontraron productos.", undefined);
        }
    });
}


module.exports= {
 
  getAllProductos

}

