import {RemixBrowser} from '@remix-run/react';
import {startTransition, StrictMode} from 'react';
import {hydrateRoot} from 'react-dom/client';
import TagManager from 'react-gtm-module';

const TagManagerArgs = {
  gtmId : "GTM-TPDWX7TM"	
}
TagManager.initialize(TagManagerArgs);
startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <RemixBrowser />
    </StrictMode>,
  );
});
