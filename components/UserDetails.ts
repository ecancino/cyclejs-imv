import { div, h5, p } from "@cycle/dom";

import A from "./A";

export default function UserDetails({ id, name, phone, email, address }) {
  return div(".card", { id }, [
    div(".card-header", name),
    div(".card-body", [
      h5(".card-title", name),
      p(".card-text", [
        `${id} ${address.street}, ${address.city}, ${address.zipcode}`
      ]),
      A({ style: ".btn.btn-primary", href: `mailto:${email}`, label: email })
    ])
  ]);
}
