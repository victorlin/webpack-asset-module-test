import { hasExtension, getExtension } from "../util/extensions";

const Content = hasExtension("navbarComponent") ?
    getExtension("navbarComponent") : null;

export default Content;
