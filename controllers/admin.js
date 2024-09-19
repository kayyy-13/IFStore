import usuario from "../models/usuario.js"

export async function  listarusuarios(req, res) {
    const usuarios = await usuario.find({})  // retorna todos os usuarios no banco
    res.render('admin/usuarios/lst',{x: usuarios}); 
}