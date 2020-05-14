const fs = require('fs');

let controlador = {
    registro: function(req, res){
       
       let usuario = {
           nombre : req.body.nombre,
           apellido: req.body.apellido,
           email: req.body.email,
           }
        let usuarioJson = JSON.stringify(usuario);

        fs.writeFileSync('ususarios.json', usuarioJson);
       
       
        res.render('profile', {usuario: usuario});
    }

};

module.exports = controlador;