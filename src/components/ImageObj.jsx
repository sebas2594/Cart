import { Image } from "@nextui-org/image";

export default function App() {
  return (
    <div className="relative w-full h-full flex justify-center items-center m-7 rounded-lg ">
      {/* Fondo con clip-path */}
      <div
        className="absolute top-0 left-0 w-full h-full rounded-b-3xl"
        style={{
          clipPath: "polygon(0 24%, 100% 63%, 100% 100%, 0% 100%)",
          backgroundImage: "url('../images/bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      {/* Imagen de Jinx */}
      <Image
        alt="Jinx"
        src="/images/jinx.avif" // Ruta relativa desde public/
        width={700}
        className="opacity-100"
      />
    </div>
  );
}

// import { Image } from "@nextui-org/image";

// export default function App() {
//   return (
//     <Image
//       alt="Jinx"
//       src="/images/jinx.avif" // Ruta relativa desde public/
//       width={700}
//       className="opacity-100"
//     />
//   );
// }
