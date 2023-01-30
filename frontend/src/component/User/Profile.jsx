import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import LoadingBar from "../layout/Loader/LoadingBar";
import { Link } from "react-router-dom";
import "./Profile.css";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);
  const history = useNavigate();
  useEffect(() => {
    if (isAuthenticated === false) {
      history("/login");
    }
  }, [history, isAuthenticated]);
  return (
    <Fragment>
      {loading ? (
        <LoadingBar />
      ) : (
        <Fragment>
          <MetaData title={`${user.name}'s Profile`} />
          <div className="profile_heading">
            <h1>My Profile</h1>
          </div>
          <hr className="hr_profile" />
          <div className="profileContainer">
            <div>
              {/* <img src={user.avatar.url} alt={user.name} /> */}
              <img  alt={user.name} />
              <Link to="/me/update">Edit Profile</Link>
            </div>
            <div>
              <div>
                <h3>Full Name</h3>
                <h4>{user.name}</h4>
              </div>
              <div>
                <h3>Email</h3>
                <h4>{user.email}</h4>
              </div>
              <div>
                <h3>Joined On</h3>
                <h4>{String(user.createdAt).substr(0, 10)}</h4>
              </div>

              <div>
                <Link to="/orders">My Orders</Link>
                <Link to="/password/update">Change Password</Link>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
