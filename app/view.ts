import { div, button } from "@cycle/dom";

import UsersDetails from "../components/UsersDetails";

export default function view(state$) {
  return state$.map(users =>
    div(".main", [
      button(".get-users.btn.btn-dark", "Get Users"),
      div(".users", UsersDetails(users))
    ])
  );
}
