import Card from "./Card";
import classes from "./UserList.module.css";
const UserList = (props) => {
  return (
    <Card className={classes.table}>
      <table>
        <thead>
          <tr>
            <th>UserName</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((user) => (
            <tr key={Math.random()}>
              <td>{user.username}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default UserList;
