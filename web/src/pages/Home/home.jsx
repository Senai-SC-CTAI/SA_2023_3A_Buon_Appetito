import Navbar from "../../components/Navbar";

export default function Home() {
  return (

      <main className="bg-[url('/src//assets/imgFundo.png')] h-screen w-screen bg-no-repeat bg-cover">
        <Navbar />
        <section className="mx-32 mt-20 space-y-10">
          <h1 className="text-black font-normal text-9xl">
            Buon Appetito
          </h1>
          <div className="border-2 border-solid border-[#743C34] w-80"></div>
          <p className="text-[#232323] font-light text-3xl w-2/6">
            Apresentamos nosso aplicativo de cantina escolar, uma solução inovadora para otimizar a gestão da cantina, mostramos o cardápio para tornar a experiência da cantina mais eficiente e agradável.
          </p>
        </section>
      </main>
  )
}
