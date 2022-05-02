import "../ui/card/Card.css";
import User from "./User";

const UserList = (props) => {
  return (
    <ul className="card">
      {props.users.map((user) => (
        <User key={user.id} name={user.name} age={user.age} />
      ))}
    </ul>
  );
};

export default UserList;
