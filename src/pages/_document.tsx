import * as React from 'react';
import Document, {
  DocumentProps,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document';

import { CLIENT_GOOGLE_TAG_MANAGER } from '@src/config/settings';
import { GoogleTagManagerIFrame } from '@src/services/tracking/components/GoogleTagManagerIFrame';
import { script as scriptArtwork } from '@src/utils/artwork';

/**
 * @name AppDocument
 * @external https://nextjs.org/docs/advanced-features/custom-document
 * @description A custom Document is commonly used to augment your
 * application's <html> and <body> tags.
 */
class AppDocument extends Document {
  render(): JSX.Element {
    return (
      <>
        <Html lang="en">
          <Head />
          <body>
            <GoogleTagManagerIFrame id={CLIENT_GOOGLE_TAG_MANAGER} />
            <Main />
            <NextScript />
            <div dangerouslySetInnerHTML={{ __html: scriptArtwork }} />
          </body>
        </Html>
      </>
    );
  }
}

export { AppDocument, AppDocument as default };
export type { DocumentProps as AppDocumentProps };
