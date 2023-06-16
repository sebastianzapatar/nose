/*

1. Mostrar las compras realizadas por el usuario x
2. Mostrar las compras que tienen el carro y
3. Mostrar todas las compras
4. Insertar validar la existencia del ID del carro y Usuario
5. Editar
6. Eliminar
7. Buscar
*/
export interface Compra{
    valor:number,
    idCarro:string,
    idUsuario:string,
    fechaCompra:Date
}