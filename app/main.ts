import xs from "xstream";

import intent from "./intent";
import model from "./model";
import view from "./view";

export default function main({ DOM, HTTP }) {
  const http$ = intent(DOM);
  const state$ = model(HTTP);
  const vdom$ = view(state$);

  return {
    DOM: vdom$,
    HTTP: http$
  };
}
