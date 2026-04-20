import React from 'react';
import { motion } from 'motion/react';
import { FadeIn, PillBadge } from '../components/ui';
import { useLanguage } from '../i18n/LanguageContext';

export const Legal = () => {
  const { lang } = useLanguage();
  const fr = lang === 'fr';

  const locale = fr ? 'fr-FR' : 'en-US';
  const updated = new Date().toLocaleDateString(locale, { month: 'long', year: 'numeric' });

  const T = fr ? {
    title: "Mentions légales",
    updated: `Dernière mise à jour : ${updated}`,
    s1t: "1. Éditeur du site",
    s1p1: "Le site Optialys (ci-après « le Site ») est édité par :",
    s1p2: "Directeur de la publication : Nolan",
    s1email: "Email :",
    s2t: "2. Hébergement",
    s2p1: "Le Site est hébergé par :",
    s3t: "3. Propriété intellectuelle",
    s3p1: "L'ensemble du contenu du Site (textes, images, vidéos, logos, marques, etc.) est la propriété exclusive d'Optialys ou de ses partenaires. Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du Site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable.",
    s3p2: "Toute utilisation non autorisée du Site ou de l'un des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions du Code de la propriété intellectuelle.",
    s4t: "4. Données personnelles (RGPD)",
    s4p1: "Optialys s'engage à ce que la collecte et le traitement de vos données, effectués à partir du Site, soient conformes au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.",
    s4p2: "Les données personnelles collectées via les formulaires de contact sont destinées exclusivement à Optialys afin de répondre à vos demandes. Elles ne sont jamais transférées ni vendues à des tiers.",
    s4p3a: "Conformément à la réglementation applicable, vous disposez d'un droit d'accès, de rectification, de suppression, de limitation du traitement, de portabilité et d'opposition à vos données personnelles. Vous pouvez exercer ces droits en nous contactant à l'adresse suivante :",
    s5t: "5. Cookies",
    s5p1: "Le Site peut vous demander d'accepter des cookies à des fins statistiques et d'affichage. Un cookie est une information déposée sur votre disque dur par le serveur du site que vous visitez.",
    s5p2: "Vous pouvez configurer votre navigateur pour que les cookies soient enregistrés dans votre terminal ou, au contraire, qu'ils soient rejetés, soit systématiquement, soit selon leur émetteur.",
    s6t: "6. Limitation de responsabilité",
    s6p1: "Optialys s'efforce de fournir sur le Site des informations aussi précises que possible. Toutefois, nous ne saurions être tenus responsables des omissions, inexactitudes et carences dans la mise à jour, qu'elles soient de notre fait ou du fait de tiers partenaires qui nous fournissent ces informations.",
    s6p2: "Toutes les informations indiquées sur le Site sont données à titre indicatif et sont susceptibles d'évoluer. Par ailleurs, les informations présentes sur le Site ne sont pas exhaustives. Elles sont données sous réserve de modifications ayant été apportées depuis leur mise en ligne.",
  } : {
    title: "Legal Notice",
    updated: `Last updated: ${updated}`,
    s1t: "1. Site Publisher",
    s1p1: "The Optialys site (hereinafter \"the Site\") is published by:",
    s1p2: "Director of publication: Nolan",
    s1email: "Email:",
    s2t: "2. Hosting",
    s2p1: "The Site is hosted by:",
    s3t: "3. Intellectual Property",
    s3p1: "All content on the Site (texts, images, videos, logos, brands, etc.) is the exclusive property of Optialys or its partners. Any reproduction, representation, modification, publication, adaptation of all or part of the elements of the Site, whatever the means or process used, is prohibited without prior written permission.",
    s3p2: "Any unauthorized use of the Site or any of the elements it contains will be considered as constituting an infringement and prosecuted in accordance with the provisions of the Intellectual Property Code.",
    s4t: "4. Personal Data (GDPR)",
    s4p1: "Optialys is committed to ensuring that the collection and processing of your data, carried out from the Site, complies with the General Data Protection Regulation (GDPR) and the Data Protection Act.",
    s4p2: "The personal data collected via the contact forms are intended exclusively for Optialys in order to respond to your requests. They are never transferred or sold to third parties.",
    s4p3a: "In accordance with applicable regulations, you have the right to access, rectify, delete, limit the processing, portability, and object to your personal data. You can exercise these rights by contacting us at the following email address:",
    s5t: "5. Cookies",
    s5p1: "The Site may ask you to accept cookies for statistical and display purposes. A cookie is a information placed on your hard drive by the server of the site you are visiting.",
    s5p2: "You can configure your browser software so that cookies are saved in your terminal or, on the contrary, that they are rejected, either systematically or according to their issuer.",
    s6t: "6. Limitation of Liability",
    s6p1: "Optialys strives to provide as accurate information as possible on the Site. However, we cannot be held responsible for omissions, inaccuracies, and deficiencies in the update, whether by us or by third-party partners who provide this information.",
    s6p2: "All information indicated on the Site is given as an indication, and is subject to change. Furthermore, the information on the Site is not exhaustive. They are given subject to modifications having been made since they were put online.",
  };

  return (
    <div className="pt-32 pb-20 bg-bg-cream">
      <section className="px-6 max-w-4xl mx-auto text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <PillBadge className="mb-6">{T.title}</PillBadge>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-ink-navy mb-6">
            {T.title}
          </h1>
          <p className="text-xl text-ink-gray leading-relaxed max-w-2xl mx-auto">
            {T.updated}
          </p>
        </motion.div>
      </section>

      <section className="px-6 max-w-4xl mx-auto">
        <FadeIn direction="up">
          <div className="p-8 md:p-12 rounded-3xl bg-surface-white border border-border-cream space-y-12">

            <div>
              <h2 className="text-2xl font-bold text-ink-navy mb-4">{T.s1t}</h2>
              <div className="text-ink-gray space-y-2 leading-relaxed">
                <p>{T.s1p1}</p>
                <p className="font-bold text-ink-navy mt-4">Optialys</p>
                <p>{T.s1p2}</p>
                <p>{T.s1email} <a href="mailto:nolan@optialys.com" className="text-accent-electric hover:underline">nolan@optialys.com</a></p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-ink-navy mb-4">{T.s2t}</h2>
              <div className="text-ink-gray space-y-2 leading-relaxed">
                <p>{T.s2p1}</p>
                <p className="font-bold text-ink-navy mt-4">Vercel Inc.</p>
                <p>340 S Lemon Ave #4133</p>
                <p>Walnut, CA 91789</p>
                <p>United States</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-ink-navy mb-4">{T.s3t}</h2>
              <div className="text-ink-gray space-y-4 leading-relaxed">
                <p>{T.s3p1}</p>
                <p>{T.s3p2}</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-ink-navy mb-4">{T.s4t}</h2>
              <div className="text-ink-gray space-y-4 leading-relaxed">
                <p>{T.s4p1}</p>
                <p>{T.s4p2}</p>
                <p>
                  {T.s4p3a} <a href="mailto:nolan@optialys.com" className="text-accent-electric hover:underline">nolan@optialys.com</a>.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-ink-navy mb-4">{T.s5t}</h2>
              <div className="text-ink-gray space-y-4 leading-relaxed">
                <p>{T.s5p1}</p>
                <p>{T.s5p2}</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-ink-navy mb-4">{T.s6t}</h2>
              <div className="text-ink-gray space-y-4 leading-relaxed">
                <p>{T.s6p1}</p>
                <p>{T.s6p2}</p>
              </div>
            </div>

          </div>
        </FadeIn>
      </section>
    </div>
  );
};
