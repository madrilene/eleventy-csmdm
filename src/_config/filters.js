import {toISOString, formatDate} from "./filters/dates.js";
import {minifyCss, minifyJs} from "./filters/minify.js";
import {splitlines} from "./filters/splitlines.js";
import {striptags} from "./filters/striptags.js";
import {toAbsoluteUrl} from "./filters/toAbsoluteUrl.js";
import {slugifyString} from "./filters/slugify.js";
import {escapeHtml} from "./filters/escapeHtml.js";

export default {
  toISOString,
  formatDate,
  minifyCss,
  minifyJs,
  splitlines,
  striptags,
  toAbsoluteUrl,
  slugifyString,
  escapeHtml
};
