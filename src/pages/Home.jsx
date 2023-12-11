//=components/pages/Home.jsx

import cuisineImage from "@assets/cards/card_cuisine.webp"
import exterieurImage from "@assets/cards/card_exterieur.webp"
import interieurImage from "@assets/cards/card_interieur.webp"
import Card from "@components/card/Card"
import Hero from "@components/hero/Hero"
import HomeParallax from "@components/parallax/HomeParallax.jsx"
import CallToAction from "@components/ui/CallToAction"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"

const Home = () => {
  return (
    <div id="elephant">
      <Hero />
      <div
        id="Cards"
        className="container mx-auto mb-14 grid grid-cols-1 gap-14 px-4 py-16 sm:px-6 md:grid-cols-3 md:gap-10 lg:max-w-6xl lg:grid-cols-3 lg:px-8"
      >
        <Card imageUrl={interieurImage} title="en hiver" />
        <Card imageUrl={cuisineImage} title="en cuisine" />
        <Card imageUrl={exterieurImage} title="en été" />{" "}
      </div>
      <section className="p-8 font-heading text-primary sm:p-20">
        <div className="b2 grid grid-cols-1 lg:grid-cols-5 lg:gap-4">
          <div className="b3 grid gap-6 lg:col-span-4 lg:grid lg:grid-cols-2 lg:gap-10">
            <p id="text1" className="b4 order-1 lg:col-span-1">
              Plongez dans l&apos;atmosphère vibrante de l&apos;Animal Lodge Bar, où notre
              équipe dévouée et passionnée oeuvre inlassablement pour créer une expérience
              exceptionnelle pour nos clients. Guidée par une passion commune pour
              l&apos;hospitalité, chaque membre de notre équipe est déterminé à offrir un
              service attentionné, dans une ambiance chaleureuse et amicale qui fait de
              notre établissement un véritable bar d&apos;ambiance. Que ce soit pour une
              soirée décontractée entre amis ou une soirée en amoureux, notre équipe est
              là pour vous accueillir avec un sourire et une énergie contagieuse. Nous
              sommes fiers de créer un environnement convivial, où chaque visite se
              transforme en une expérience mémorable, mettant en avant notre engagement
              envers le confort et le plaisir de nos clients.
            </p>
            <p id="text2" className="b4 order-3">
              Plongez dans l&apos;atmosphère vibrante de l&apos;Animal Lodge Bar, où notre
              équipe dévouée et passionnée oeuvre inlassablement pour créer une expérience
              exceptionnelle pour nos clients.
            </p>
            <p id="text3" className="b4 order-4 lg:mt-20">
              Que ce soit pour une soirée décontractée entre amis ou une soirée en
              amoureux, notre équipe est là pour vous accueillir avec un sourire et une
              énergie contagieuse. Nous sommes fiers de créer un environnement convivial,
              où chaque visite se transforme en une expérience mémorable, mettant en avant
              notre engagement envers le confort et le plaisir de nos clients.
            </p>
            <h3
              id="heading_bookup"
              className="b4 order-last mt-10 text-5xl lg:order-2 lg:mt-20 lg:text-6xl"
            >
              Réservation <br />
              par téléphone uniquement.
            </h3>
          </div>
          <div
            id="CTAs"
            className="b4 mx-auto my-16 flex flex-row justify-center gap-8 md:col-span-1 lg:my-auto lg:flex-col lg:gap-10"
          >
            <CallToAction
              icon={faPhone}
              altText="Contact par téléphone"
              link="/Telephone"
              iconSize="lg"
            />
            <CallToAction
              icon={faWhatsapp}
              altText="Contact par Whatsapp"
              link="/Whatsapp"
              iconSize="2x"
            />
          </div>
        </div>
      </section>
      <HomeParallax />
      <section className="flex flex-col justify-between gap-10 bg-secondary p-20 lg:flex-row lg:gap-20">
        <div
          id="carte&menus"
          className="flex w-full flex-col gap-6 text-center font-heading text-sm text-secondary md:text-lg lg:w-1/2"
        >
          <h2 className=" text-3xl">carte & menus</h2>
          <p className="text-justify">
            Plongez dans l&apos;atmosphère vibrante de l&apos;Animal Lodge Bar, où notre
            équipe dévouée et passionnée oeuvre inlassablement pour créer une expérience
            exceptionnelle pour nos clients. Guidée par une passion commune pour
            l&apos;hospitalité, chaque membre de notre équipe est déterminé à offrir un
            service attentionné, dans une ambiance chaleureuse et amicale qui fait de
            notre établissement un véritable bar d&apos;ambiance.
          </p>
          <p className="text-justify">
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
            src="/src/assets/artwork/menu_batch.webp"
            alt="Image"
          />
        </div>
      </section>
      <section className="banner">
        <div className="flex w-full">
          <img className="w-1/4" src="src/assets/cooking/dessert_1.webp" alt="Image 1" />
          <img className="w-1/4" src="src/assets/cooking/plat_2.webp" alt="Image 2" />
          <img className="w-1/4" src="src/assets/cooking/dessert_2.webp" alt="Image 3" />
          <img className="w-1/4" src="src/assets/cooking/plat_1.webp" alt="Image 2" />
        </div>
      </section>
      <section className="flex flex-col gap-20 bg-primary p-20 py-32 text-justify font-heading">
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
        <h2 className="text-center text-4xl">l&apos;équipe du Christina</h2>
        <div
          id="Home_Teams"
          className="container mx-auto grid grid-cols-1 gap-14 md:grid-cols-2"
        >
          <Card imageUrl="public/assets/equipe/equipe_salle.webp" title="en salle" />
          <Card imageUrl="./src/assets/equipe/equipe_cuisine.webp" title="en cuisine" />
        </div>
      </section>
    </div>
  )
}

export default Home
