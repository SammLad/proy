// function Producto() {
//     return (
//         <article className="producto">
//             <h2>Labial mate</h2>
//             <p>Precio: $18.000</p>
//             <button>Ver detalle</button>
//         </article>
//     );
// }

// export default Producto;


// export default function Producto(){
//     return(
//         <article className="producto">
//             <img src="/producto-demo.png" alt="Producto" />
//             <h2>Labial mate</h2>
//             <p>Producto para catálogo de belleza</p>
//             <strong>Precio: $18.000</strong>
//             <button>Ver detalle</button>
//         </article>
//     );
// }


// export default function Producto(props) {
//     return (
//         <article className="producto">
//             <h2>{props.nombre}</h2>
//             <p>{props.descripcion}</p>
//             <strong>${props.precio}</strong>
//         </article>
//     );
// }


export default function Producto({ imagen, categoria, nombre, descripcion, precio }) {
    return (

        <article className="producto">
            <img src={imagen} alt={nombre} />
            <h2>{categoria}</h2>
            <h2>{nombre}</h2>
            <p>{descripcion}</p>
            <strong>${precio}</strong>
        </article>
    );
}