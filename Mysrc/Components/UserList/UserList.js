import styles from "./UserList.module.css";

const UserList = (props) => {
  const users = props.userInfo.map((user) => {
    return (
      <div className={styles["user"]} key={user.id}>
        {user.name} ({user.age} years old)
      </div>
    );
  });

  return <div className={styles["user-list"]}>{users}</div>;
};

export default UserList;
