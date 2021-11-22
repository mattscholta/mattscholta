import * as React from 'react';

interface GoogleTagManagerScriptProps {
  id: string;
}

/**
 * @name GoogleTagManagerScript
 * @external https://tagmanager.google.com/
 * @description GTM requires a two part implementation, this script is
 * responsible for loading GTM which loads our Tags and Pixels
 */
const GoogleTagManagerScript: React.FC<GoogleTagManagerScriptProps> = (
  props
) => {
  const { id } = props;

  // Setup
  const __html = `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${id}');
  `;

  return <script dangerouslySetInnerHTML={{ __html }} type="text/javascript" />;
};

export { GoogleTagManagerScript };
export type { GoogleTagManagerScriptProps };
