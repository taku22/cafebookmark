import '../stylesheets/main.scss';
import {config, dom, library} from '@fortawesome/fontawesome-svg-core';
import {faTwitter,faLine,faInstagramSquare,faFacebookSquare,faPinterestSquare,faYoutube} from '@fortawesome/free-brands-svg-icons';

import hamburgerMenu  from './hamburgerMenu.js';
import snsLinkMenu  from './snsLinkMenu.js';

library.add(faTwitter,faLine,faInstagramSquare,faFacebookSquare,faPinterestSquare,faYoutube);

dom.watch();
hamburgerMenu();
snsLinkMenu();
