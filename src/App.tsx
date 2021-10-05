import "./styles.css";
import { UserCard } from "./componets/UserCard"
import axios from "axios";
import { User } from "./types/api/user";
import { userProfile } from "./types/userProfile";
import { useState } from "react";

const user = {
  id: "1",
  name: "じゃけぇ",
  email: "1213@aaa.com",
  address: "ADDRESS"
}

export default function App() {
const [useeProfiles, setUserProfiles] = useState<Array<userProfile>>([]);
  
const onClickFetchUser = () => {
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data.map((user) =>({
          id: user.id,
          name: `${user.name}(${user.username})`,
          email: user.email,
          address: `${user.address.city}${user.address.suite}${user.address.street}`
        }))
      })  
  }
  return (
    <div className="App">
      <button　onClick={onClickFetchUser}>データ取得</button>
      <UserCard user={user}/>
    </div>
  );
}
