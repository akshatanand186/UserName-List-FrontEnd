const UserList = (props) => {
  return (
    <div>
      <table className="result">
        <thead>
          <tr>
            <th>UserName</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((user) => (
            <tr>
              <td>{user.username}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
