export default function model(HTTP) {
  return HTTP.select("users")
    .flatten()
    .map(res => res.body)
    .startWith([]);
}
