console.clear();

import "./scss/biosocial.scss";

import xs from "xstream";
import { run } from "@cycle/run";
import { makeDOMDriver } from "@cycle/dom";
import { makeHTTPDriver } from "@cycle/http";

import main from "./app/main";

run(main, {
  DOM: makeDOMDriver("#root"),
  HTTP: makeHTTPDriver()
});
