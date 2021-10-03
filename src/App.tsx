import "./styles.css";
import { UserCard } from "./componets/UserCard"
import axios from "axios";
import { User } from "./types/api/user";

const user = {
  id: "1",
  name: "じゃけぇ",
  email: "1213@aaa.com",
  address: "ADDRESS"
}

export default function App() {
  const onClickFetchUser = () => {
    axios.get<Array<User>>("https://jsonplaceholder.typicode.com/users")
  }
  return (
    <div className="App">
      <button　onClick={onClickFetchUser}>データ取得</button>
      <UserCard user={user}/>
    </div>
  );
}
