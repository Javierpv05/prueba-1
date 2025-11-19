import { MyRoutes } from "./routers/router.jsx";
function App() {
  // const frutas = ["manzana", "banana", "pera"];
  // // mapeo de objetos
  // const productos = [
  //   { nombre: "celu", precio: 900, destacado: true },
  //   { nombre: "tablet", precio: 800, destacado: false },
  //   { nombre: "mause", precio: 700, destacado: true },
  // ];
  return (
    // <div className="bg-black h-screen text-white">
    //   <Primera />
    //   <Contador />
    //   {frutas.map((item, index) => {
    //     const texto = "hola gentita";
    //     return (
    //       <div key={index} className="text-white">
    //         {item} {texto}
    //       </div>
    //     );
    //   })}
    //   <span>Productos</span>
    //   <section className="flex flex-col gap-4">
    //     {productos.map((item, index) => (
    //       <CardProducto key={index} item={item} />
    //     ))}
    //   </section>
    // </div>
    <MyRoutes />
  );
}
export default App;
