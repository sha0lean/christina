//=components/pages/Home.jsx

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import Card from "../components/card/Card"
import Hero from "../components/hero/Hero"
import CallToAction from "../components/ui/CallToAction"
import Breakpoints from "../components/utils/Breakpoints"

const Home = () => {
  return (
    <div id="elephant">
      <Hero />
      <div
        id="Cards"
        className="container mx-auto mb-14 grid grid-cols-1 gap-14 px-4 py-16 sm:px-6 md:grid-cols-3 md:gap-10 lg:max-w-6xl lg:grid-cols-3 lg:px-8"
      >
        <Card imageUrl="./src/assets/cards/card_interieur.webp" title="en hiver" />
        <Card imageUrl="./src/assets/cards/card_cuisine.webp" title="en cuisine" />
        <Card imageUrl="./src/assets/cards/card_exterieur.webp" title="en été" />
      </div>
      <Breakpoints />
      <section className="b1 p-8 font-heading text-primary sm:p-20">
        <div className="b2 grid grid-cols-1 lg:grid-cols-5 lg:gap-4">
          <div className="b3 grid gap-6 lg:col-span-4 lg:grid lg:grid-cols-2 lg:gap-10">
            <p id="text1" className="b4 order-1 lg:col-span-1">
              Plongez dans l&apos;atmosphère vibrante de l&apos;Animal Lodge Bar, où notre
              équipe dévouée et passionnée œuvre inlassablement pour créer une expérience
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
              équipe dévouée et passionnée œuvre inlassablement pour créer une expérience
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
      <div className="flex flex-row items-center justify-center bg-secondary"></div>
    </div>
  )
}

export default Home
