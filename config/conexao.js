import mongoose from 'mongoose';

const conexao = await mongoose.connect("mongodb+srv://kay:<db_password>@c.hv7c2.mongodb.net/?retryWrites=true&w=majority&appName=C")
//const conexao = await mongoose.connect('mongodb://localhost:27017/ifstore')

export default conexao