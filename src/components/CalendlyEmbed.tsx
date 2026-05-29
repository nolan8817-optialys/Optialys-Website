import React, { useEffect } from 'react';
import { Calendar, Lock, XCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface CalendlyEmbedProps {
  url?: string;
}

export const CalendlyEmbed: React.FC<CalendlyEmbedProps> = ({
  url = "https://calendly.com/nolprayagsing/automation-strategy-audit"
}) => {
  const { lang } = useLanguage();
  const fr = lang === 'fr';

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full bg-ink-navy border border-accent-coral/30 overflow-hidden flex flex-col">
      <div className="p-8 text-center border-b border-white/10">
        <h3 className="text-2xl font-bold text-white mb-2">{fr ? 'Choisissez votre créneau' : 'Choose your slot'}</h3>
        <p className="text-accent-coral font-medium mb-6">{fr ? '30 minutes · Diagnostic Rentabilité' : '30 minutes · Profitability Diagnostic'}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-white/60">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-accent-coral" />
            <span>{fr ? 'Confirmation immédiate' : 'Immediate confirmation'}</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-accent-coral" />
            <span>{fr ? 'Vos informations restent confidentielles' : 'Your information stays confidential'}</span>
          </div>
          <div className="flex items-center gap-2">
            <XCircle className="w-4 h-4 text-accent-coral" />
            <span>{fr ? 'Annulable à tout moment' : 'Cancel anytime'}</span>
          </div>
        </div>
      </div>

      <div className="w-full bg-ink-navy">
        <div
          className="calendly-inline-widget w-full"
          data-url={`${url}?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=1A1A2E&text_color=ffffff&primary_color=E8562A`}
          style={{ minWidth: '320px', height: '700px' }}
        />
      </div>
    </div>
  );
};
