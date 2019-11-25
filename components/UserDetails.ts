import { dl, dt, dd } from "@cycle/dom";

import A from "./A";

export default function UserDetails({ name, email, website }) {
  return dl(".user-details", [
    dt("Name:"),
    dl([A({ href: `mailto:${email}`, label: name })])
  ]);
}
