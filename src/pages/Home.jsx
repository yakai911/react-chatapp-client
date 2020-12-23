import React from "react";
import { GET_USERS } from "../graphql/getUsersQuery";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { useAuthDispatch } from "../context/auth";

const Home = ({ history }) => {
  const dispatch = useAuthDispatch();
  const { loading, data, error } = useQuery(GET_USERS);

  if (error) {
    console.log(error);
  }

  if (data) {
    console.log(data);
  }

  let usersMarkup;

  if (!data || loading) {
    usersMarkup = <p>正在加载...</p>;
  } else if (data.getUsers.length === 0) {
    usersMarkup = <p>聊天列表里还没有用户</p>;
  } else if (data.getUsers.length > 0) {
    usersMarkup = data.getUsers.map((user) => (
      <div key={user.username}>
        <p>{user.username}</p>
      </div>
    ));
  }

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/login");
  };

  return (
    <>
      <nav className='header'>
        <div className='menu'>
          <ul>
            <Link to='/login'>
              <li>登录</li>
            </Link>
            <Link to='/register'>
              <li>注册</li>
            </Link>
            <li onClick={logout}>退出登录</li>
          </ul>
        </div>
      </nav>

      <div className='message-container'>
        <div className='message-left'>{usersMarkup}</div>
        <div className='message-right'>right</div>
      </div>
    </>
  );
};

export default Home;