import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import Loading from "../../../../components/Loading/Loading";
import { userList } from "../../../../redux/actions/userActions";
import UserListItem from "./UserListItem/UserListItem";

const UserList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, users } = useSelector((state) => state.userList);
  const { userInfo } = useSelector((state) => state.userLogin);

  const [callback, setCallback] = useState(false);

  useEffect(() => {
    if (userInfo && userInfo?.user.role === 1) {
      dispatch(userList());
    } else {
      navigate("/");
    }

    // if (deleteError) {
    //   addToast(deleteError, { appearance: "error", autoDismiss: true });
    // }
    // if (deleteStatus) {
    //   addToast(deleteStatus.message, {
    //     appearance: "success",
    //     autoDismiss: true,
    //   });
    // }
  }, [dispatch, navigate, userInfo, callback]);
  return (
    <>
      <hr />
      <div className="profile__admin">
        <div className="profile__admin__users">
          <h2 className="profile__admin__users-title">Users</h2>

          {loading ? (
            <Loading />
          ) : error ? (
            <h3>{error}</h3>
          ) : (
            <UserListItem
              callback={callback}
              setCallback={setCallback}
              users={users}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default UserList;
