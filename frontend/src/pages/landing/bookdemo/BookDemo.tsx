import React, { useEffect } from 'react';

const BookDemo: React.FC = () => {
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
    <div className="bg-slate-900 py-10">
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/healthrxai/30min?primary_color=4f46e5"
        data-theme="dark"
        style={{ minWidth: '320px', height: '700px' }}
      ></div>
    </div>
  );
};

export default BookDemo;
