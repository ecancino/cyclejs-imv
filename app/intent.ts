import xs from "xstream";
import Input from "../components/Input";

const getUsers = () => ({
  url: "https://jsonplaceholder.typicode.com/users",
  category: "users",
  method: "GET"
});

export default function intent(DOM) {
  const init$ = xs.of(getUsers());
  const refresh$ = Input({
    DOM,
    selector: ".get-users",
    event: "click",
    onEvent: getUsers
  });
  return xs.merge(init$, refresh$);
}
