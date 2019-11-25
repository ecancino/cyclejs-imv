export default function Input({ DOM, selector, event, onEvent }) {
  return DOM.select(selector)
    .events(event)
    .map(onEvent);
}
