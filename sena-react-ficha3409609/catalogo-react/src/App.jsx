import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

import Producto from "./components/Producto";

// function App() {
//   return <Producto />;
// }

// function App(){
//   return(
//     <main className="app">
//       <h1>Wonder Beauty Shop</h1>
//       <section className="catalogo">
//         <Producto />
//         <Producto />
//         <Producto />
//       </section>
//     </main>
//   )
// }

const productos = [
  {
    id: 1,
    imagen: "/im1.png",
    nombre: "Labial mate",
    descripcion: "Labial de larga duración con acabado mate terciopelo.",
    categoria: "Maquillaje",
    precio: 18000
  },
  {
    id: 2,
    imagen: "/im2.png",
    nombre: "Crema facial",
    descripcion: "Crema hidratante intensiva con ácido hialurónico.",
    categoria: "Cuidado facial",
    precio: 26000
  },
  {
    id: 3,
    imagen: "/im3.png",
    nombre: "Perfume",
    descripcion: "Fragancia floral con notas suaves y de larga duración.",
    categoria: "Perfumería",
    precio: 42000
  },
  {
    id: 4,
    imagen: "/im4.png",
    nombre: "Set de brochas",
    descripcion: "Kit completo de brochas sintéticas de alta precisión.",
    categoria: "Accesorios",
    precio: 35000
  },
  {
    id: 5,
    imagen: "/im5.png",
    nombre: "Sombra",
    descripcion: "Paleta de sombras con pigmentación intensa y acabado brillante.",
    categoria: "Maquillaje",
    precio: 22000
  }
];
function App() {
  return (
    <main className="app">
      <h1>Wonder Beauty Shop</h1>
      <section className="catalogo">
        {productos.map((prod) => (
          <Producto
            key={prod.id}
            imagen={prod.imagen}
            nombre={prod.nombre}
            descripcion={prod.descripcion}
            categoria={prod.categoria}
            precio={prod.precio}
          />
        ))}
      </section>
    </main>
  );
}

export default App;