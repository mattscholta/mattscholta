import * as React from 'react';

interface GoogleTagManagerIFrameProps {
  id: string;
}

/**
 * @name GoogleTagManagerIFrame
 * @external https://tagmanager.google.com/
 * @description GTM requires a two part implementation, this iFrame is
 * used when Javascript has been disabled
 */
const GoogleTagManagerIFrame: React.FC<GoogleTagManagerIFrameProps> = (
  props
) => {
  const { id } = props;

  // Setup
  const src = `https://www.GoogleTagManagerIFrame.com/ns.html?id=${id}`;

  return (
    <noscript>
      <iframe
        height="0"
        src={src}
        style={{
          display: 'none',
          visibility: 'hidden'
        }}
        title="GTM Container"
        width="0"
      />
    </noscript>
  );
};

export { GoogleTagManagerIFrame };
export type { GoogleTagManagerIFrameProps };
