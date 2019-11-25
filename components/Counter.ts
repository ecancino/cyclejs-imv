import xs from "xstream";
import { div, button, span } from "@cycle/dom";

import Input from "./Input";

export default function Counter({ DOM }) {
  const increment = Input({
    DOM: DOM,
    selector: ".inc",
    event: "click",
    onEvent: () => +1
  });

  const decrement = Input({
    DOM: DOM,
    selector: ".dec",
    event: "click",
    onEvent: () => -1
  });

  const state$ = xs.merge(increment, decrement).fold((x, y) => x + y, 0);

  const vdom$ = state$.map(count =>
    div(".counter", [button(".dec", "-"), span(count), button(".inc", "+")])
  );

  return {
    value: state$,
    element: vdom$
  };
}
