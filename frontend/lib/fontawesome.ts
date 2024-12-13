import { library, config } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faCommentDots,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

// Add the icons you want to use to the library
library.add(faUser, faCommentDots, faPaperPlane);

config.autoAddCss = false;
