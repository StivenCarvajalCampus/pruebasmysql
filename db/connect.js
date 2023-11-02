import dotenv from 'dotenv';
import mysql from 'mysql2';

dotenv.config(); 

export async function connection() {
    try {
        let conexionf = undefined;
        const my_connect = JSON.parse(process.env.MY_CONNECT)
        conexionf = mysql.createPool(my_connect)
        return conexionf;
    } catch (error) {
        return {message: "error en la conexion"}
    }
  
}