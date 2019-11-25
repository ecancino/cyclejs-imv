import { a } from "@cycle/dom";

export default function A({ href, style = "", label = href }) {
  return a(style, { attrs: { href } }, label);
}
