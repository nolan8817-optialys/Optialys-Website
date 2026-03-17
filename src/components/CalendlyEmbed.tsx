import React, { useEffect } from 'react';
import { Calendar, Lock, XCircle } from 'lucide-react';

interface CalendlyEmbedProps {
  url?: string;
}

export const CalendlyEmbed: React.FC<CalendlyEmbedProps> = ({ 
  url = "https://calendly.com/nolprayagsing/automation-strategy-audit" 
}) => {
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
    <div className="w-full bg-brand-navy rounded-2xl border border-brand-blue/20 overflow-hidden flex flex-col">
      <div className="p-8 text-center border-b border-brand-blue/10">
        <h3 className="text-2xl font-bold text-white mb-2">Choose your slot</h3>
        <p className="text-brand-blue font-medium mb-6">30 minutes · Free · No commitment</p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-brand-gray">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-brand-blue" />
            <span>Immediate confirmation response</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-brand-blue" />
            <span>Your information remains confidential</span>
          </div>
          <div className="flex items-center gap-2">
            <XCircle className="w-4 h-4 text-brand-blue" />
            <span>Cancellation possible at any time</span>
          </div>
        </div>
      </div>
      
      <div className="w-full bg-brand-navy">
        <div 
          className="calendly-inline-widget w-full"
          data-url={`${url}?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=0A1628&text_color=ffffff&primary_color=00C2FF`}
          style={{ minWidth: '320px', height: '700px' }}
        />
      </div>
    </div>
  );
};
