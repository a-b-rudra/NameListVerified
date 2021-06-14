import classes from "./UserList.module.css";
import Card from "../UI/Card";

const UserList = (props) => {
  return (
    <div>
      <Card>
        <ul className={classes.users}>
          {props.user.map((user) => (
            <li key={user.id}>
              {user.name} ({user.age} years old)
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default UserList;
