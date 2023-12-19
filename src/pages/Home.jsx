//=components/pages/Home.jsx

import menusImg from "@assets/artwork/menu_batch.webp"
import cuisineImage from "@assets/cards/card_cuisine.webp"
import exterieurImage from "@assets/cards/card_exterieur.webp"
import interieurImage from "@assets/cards/card_interieur.webp"
import cook3Img from "@assets/cooking/dessert_1.webp"
import cook4Img from "@assets/cooking/dessert_2.webp"
import cook1Img from "@assets/cooking/plat_1.webp"
import cook2Img from "@assets/cooking/plat_2.webp"
import equipeCuisineImg from "@assets/equipe/equipe_cuisine.webp"
import equipeSalleImg from "@assets/equipe/equipe_salle.webp"
import Card from "@components/card/Card"
import Hero from "@components/hero/Hero"
import HomeParallax from "@components/parallax/HomeParallax.jsx"
import DescrCTA from "@components/sections/DescrCTA"
import Breakpoints from "@components/utils/Breakpoints"

const Home = () => {
  return (
    <div id="elephant">
      <Hero />
      <Breakpoints />
      <div
        id="Cards"
        className="mx-auto mb-14 grid grid-cols-1 justify-center gap-14 px-4 py-16 sm:px-6 md:grid-cols-3 md:gap-10 lg:max-w-6xl lg:grid-cols-3 lg:px-8"
      >
        <Card imageUrl={interieurImage} title="en hiver" />
        <Card imageUrl={cuisineImage} title="en cuisine" />
        <Card imageUrl={exterieurImage} title="en été" />
      </div>
      <Breakpoints />
      <DescrCTA />
      <Breakpoints />
      <HomeParallax />
      <Breakpoints />
      <section className="flex flex-col justify-between gap-10 bg-secondary p-20 lg:flex-row lg:gap-20">
        <div
          id="carte&menus"
          className="flex w-full flex-col gap-6 text-center font-heading text-sm text-secondary md:text-lg lg:w-1/2"
        >
          <h2 className="text-3xl">carte & menus</h2>
          <p className="text-justify font-body">
            Plongez dans l&apos;atmosphère vibrante de l&apos;Animal Lodge Bar, où notre
            équipe dévouée et passionnée oeuvre inlassablement pour créer une expérience
            exceptionnelle pour nos clients. Guidée par une passion commune pour
            l&apos;hospitalité, chaque membre de notre équipe est déterminé à offrir un
            service attentionné, dans une ambiance chaleureuse et amicale qui fait de
            notre établissement un véritable bar d&apos;ambiance.
          </p>
          <p className="text-justify font-body">
            Que ce soit pour une soirée décontractée entre amis ou une soirée en amoureux,
            notre équipe est là pour vous accueillir avec un sourire et une énergie
            contagieuse. Nous sommes fiers de créer un environnement convivial, où chaque
            visite se transforme en une expérience mémorable, mettant en avant notre
            engagement envers le confort et le plaisir de nos clients.
          </p>
          <h3 className="text-2xl">découvrir</h3>
        </div>

        <div id="batch_menus" className="my-auto w-full lg:w-1/2">
          <img
            className="h-full w-full object-cover object-center transition-all duration-500 ease-in-out hover:rotate-2 hover:scale-110"
            src={menusImg}
            alt="Image"
          />
        </div>
      </section>
      <section className="banner">
        <div className="flex w-full">
          <img className="w-1/4" src={cook1Img} alt="Image 1" />
          <img className="w-1/4" src={cook2Img} alt="Image 2" />
          <img className="w-1/4" src={cook3Img} alt="Image 3" />
          <img className="w-1/4" src={cook4Img} alt="Image 2" />
        </div>
      </section>
      <section className="flex flex-col gap-20 bg-primary p-20 py-32 text-justify font-body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc id
          aliquam tincidunt, nisl turpis aliquet nunc, nec tincidunt nunc nunc at dolor.
          Sed id nunc auctor, aliquet nunc id, aliquam nunc. Sed id nunc auctor, aliquet
          nunc id, aliquam nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam auctor, nunc id aliquam tincidunt, nisl turpis aliquet nunc, nec
          tincidunt nunc nunc at dolor. Sed id nunc auctor, aliquet nunc id, aliquam nunc.
          Sed id nunc auctor, aliquet nunc id, aliquam nunc.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nullam auctor, nunc id aliquam tincidunt, nisl
          turpis aliquet nunc, nec tincidunt nunc nunc at dolor. Sed id nunc auctor,
          aliquet nunc id, aliquam nunc. Sed id nunc auctor, aliquet nunc id, aliquam
          nunc.
        </p>
        <h2 className="text-center font-heading text-4xl">l&apos;équipe du Christina</h2>
        <div
          id="Home_Teams"
          className="container mx-auto grid grid-cols-1 gap-14 md:grid-cols-2"
        >
          <Card imageUrl={equipeSalleImg} title="en salle" />
          <Card imageUrl={equipeCuisineImg} title="en cuisine" />
        </div>
      </section>
    </div>
  )
}

export default Home
