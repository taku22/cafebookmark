import '../stylesheets/main.scss';
import {config, dom, library} from '@fortawesome/fontawesome-svg-core';
import {faTwitter,faLine,faInstagramSquare,faFacebookSquare,faPinterestSquare} from '@fortawesome/free-brands-svg-icons';

import hamburgerMenu  from './hamburgerMenu.js';

library.add(faTwitter,faLine,faInstagramSquare,faFacebookSquare,faPinterestSquare);

dom.watch();
hamburgerMenu();
