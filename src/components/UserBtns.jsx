import { useDispatch, useSelector } from "react-redux";
import { toggleUserStatus } from "../userState/userSlice";
function UserBtns() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  function loginHandler() {
    console.log(isLoggedIn);
    dispatch(toggleUserStatus());
  }
  return (
    <div className="text-white flex flex-col gap-4">
      {isLoggedIn ? (
        <button
          className="bg-purple py-3 w-[80%] hover:bg-opacity-80 rounded-lg text-lg m-auto"
          onClick={loginHandler}
        >
          Logout
        </button>
      ) : (
        <button
          className="bg-purple py-3 w-[80%] hover:bg-opacity-80 rounded-lg text-lg m-auto"
          onClick={loginHandler}
        >
          Login
        </button>
      )}
    </div>
  );
}

export default UserBtns;
