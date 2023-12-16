//=components/hero/Hero.jsx

import logoChristina from "@assets/logo/logo_lechristina_dark.webp"
import CallToAction from "@components/ui/CallToAction.jsx"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"

const Hero = () => {
  return (
    <div className="">
      <img
        src={logoChristina}
        alt="Logo Restaurant 'Le Christina'"
        className="sm:pr-10sm:w-3/5 md:pb- w-5/6 px-10 py-0 pr-32 sm:py-10 md:w-1/2 md:pl-16 md:pt-20 lg:w-5/12 lg:pl-32"
      />
      <div className="border-cyan-400 mb-8 mt-10 flex flex-row px-20">
        <div
          id="headlines"
          className="flex h-full w-5/6 flex-col justify-center space-y-4 border-purple-400"
        >
          <h1 className="font-heading text-2xl font-bold sm:text-3xl md:text-5xl">
            Restaurant
            <br />
            Traditionnel
            <br />
            Français
          </h1>

          <p className="max-w-md pr-10 font-heading text-sm text-gray-300 sm:text-lg">
            À l&apos;origine de l&apos;Animal Lodge Bar, Nelly et Bruno,
            <br /> véritable globe-trotters passionnés du voyage <br /> et fervents
            défenseurs des animaux, <br /> ont créé un havre qui évoque un univers
            d&apos;aventures.
          </p>
        </div>
        <div
          id="CTA"
          className="my-auto flex w-1/6 flex-col items-end gap-6 pr-6 sm:pr-10"
        >
          <CallToAction
            icon={faPhone}
            altText="Contact par téléphone"
            link="/Telephone"
            iconSize="2x"
          />
          <CallToAction
            icon={faWhatsapp}
            altText="Contact par Whatsapp"
            link="/Whatsapp"
            iconSize="3x"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
