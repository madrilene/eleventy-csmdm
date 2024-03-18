import slugify from "slugify";

/** Converts string to a slug form. */
const slugifyString = str => {
  return slugify(str, {
    replacement: "-",
    remove: /[#,&,+()$~%.'":*¿?¡!<>{}]/g,
    lower: true
  });
};

export {slugifyString};
