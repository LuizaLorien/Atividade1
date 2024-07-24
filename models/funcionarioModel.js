import { Connection } from 'mysql2/typings/mysql/lib/Connection.js';
import conn from '../config/dbconfig.js';

const livrosTable = /*sql*/ `

CREATE TABLE IF NOT EXISTS livros(
    id VARCHAR(60) PRIMARY KEY NOT NULL,
    cliente_id VARCHAR(255) NOT NULL,
    livro_id VARCHAR(60) NOT NULL,
    data_emprestimo DATE NOT NULL,
    data_devolcao DATE NOT NULL,
)`;

conn.query(livrosTable, (err)=>{
    if(err){
        console.error(err)
        response.status(500).json({message:"Erro ao achar o livro"})
    };
    console.log(livrosTable);
})