import React from 'react';
import { motion } from 'motion/react';
import { FadeIn } from '../components/ui';

export const Legal = () => {
  return (
    <div className="pt-32 pb-20">
      <section className="px-6 max-w-4xl mx-auto text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
            Legal Notice
          </h1>
          <p className="text-xl text-brand-gray leading-relaxed max-w-2xl mx-auto">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </motion.div>
      </section>

      <section className="px-6 max-w-4xl mx-auto">
        <FadeIn direction="up">
          <div className="p-8 md:p-12 rounded-3xl bg-brand-card/30 border border-brand-blue/10 space-y-12">
            
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">1. Site Publisher</h2>
              <div className="text-brand-gray space-y-2 leading-relaxed">
                <p>The Optialys site (hereinafter "the Site") is published by:</p>
                <p className="font-bold text-white mt-4">Optialys</p>
                <p>Director of publication: Nolan</p>
                <p>Email: <a href="mailto:nolan@optialys.com" className="text-brand-blue hover:underline">nolan@optialys.com</a></p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">2. Hosting</h2>
              <div className="text-brand-gray space-y-2 leading-relaxed">
                <p>The Site is hosted by:</p>
                <p className="font-bold text-white mt-4">Vercel Inc.</p>
                <p>340 S Lemon Ave #4133</p>
                <p>Walnut, CA 91789</p>
                <p>United States</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">3. Intellectual Property</h2>
              <div className="text-brand-gray space-y-4 leading-relaxed">
                <p>
                  All content on the Site (texts, images, videos, logos, brands, etc.) is the exclusive property of Optialys or its partners. Any reproduction, representation, modification, publication, adaptation of all or part of the elements of the Site, whatever the means or process used, is prohibited without prior written permission.
                </p>
                <p>
                  Any unauthorized use of the Site or any of the elements it contains will be considered as constituting an infringement and prosecuted in accordance with the provisions of the Intellectual Property Code.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">4. Personal Data (GDPR)</h2>
              <div className="text-brand-gray space-y-4 leading-relaxed">
                <p>
                  Optialys is committed to ensuring that the collection and processing of your data, carried out from the Site, complies with the General Data Protection Regulation (GDPR) and the Data Protection Act.
                </p>
                <p>
                  The personal data collected via the contact forms are intended exclusively for Optialys in order to respond to your requests. They are never transferred or sold to third parties.
                </p>
                <p>
                  In accordance with applicable regulations, you have the right to access, rectify, delete, limit the processing, portability, and object to your personal data. You can exercise these rights by contacting us at the following email address: <a href="mailto:nolan@optialys.com" className="text-brand-blue hover:underline">nolan@optialys.com</a>.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">5. Cookies</h2>
              <div className="text-brand-gray space-y-4 leading-relaxed">
                <p>
                  The Site may ask you to accept cookies for statistical and display purposes. A cookie is information placed on your hard drive by the server of the site you are visiting. It contains several data that are stored on your computer in a simple text file that a server accesses to read and record information.
                </p>
                <p>
                  You can configure your browser software so that cookies are saved in your terminal or, on the contrary, that they are rejected, either systematically or according to their issuer.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
              <div className="text-brand-gray space-y-4 leading-relaxed">
                <p>
                  Optialys strives to provide as accurate information as possible on the Site. However, we cannot be held responsible for omissions, inaccuracies, and deficiencies in the update, whether by us or by third-party partners who provide this information.
                </p>
                <p>
                  All information indicated on the Site is given as an indication, and is subject to change. Furthermore, the information on the Site is not exhaustive. They are given subject to modifications having been made since they were put online.
                </p>
              </div>
            </div>

          </div>
        </FadeIn>
      </section>
    </div>
  );
};
