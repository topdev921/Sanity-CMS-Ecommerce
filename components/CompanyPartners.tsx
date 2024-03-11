import { getCompanyLogo } from "@/app/api/sanity/route";
import { urlFor } from "@/lib/sanity";
import { CompanyLogoProps } from "@/types";
import Image from "next/image";

export default async function CompanyPartners() {
  const logos: CompanyLogoProps[] = await getCompanyLogo();
  return (
    <section className="flex flex-col items-center justify-center gap-8 px-4 py-48">
      <h3 className="font-bold text-xl sm:text-2xl text-center max-w-2xl">
        Proudly partnered with
      </h3>
      <div className="flex items-center justify-center flex-wrap gap-20 md:gap-26 lg:gap-32 xl:gap-36 pt-8">
        {logos.map((logo) => (
          <Image
            key={logo.logo}
            src={urlFor(logo.logo).url()}
            alt="Logo"
            width={64}
            height={64}
            className="w-10 sm:w-12 md:w-14 lg:w-16 h-auto"
          />
        ))}
      </div>
    </section>
  );
}
