import {optimize} from "svgo";
import {readFileSync} from "node:fs";

export default async function (svgName, ariaName = "", className = "", styleName = "") {
  const svgData = readFileSync(`./src/assets/svg/${svgName}.svg`, "utf8");

  const {data} = await optimize(svgData);

  return data.replace(
    /<svg(.*?)>/,
    `<svg$1 ${ariaName ? `aria-label="${ariaName}" role="img"` : 'aria-hidden="true"'} ${className ? `class="${className}"` : ""} ${styleName ? `style="${styleName}"` : ""} >`
  );
}
