import { useContext } from "react";
import UserContext from "./context/User";

const UserCard = ({ user }) => {
  const { setLoggedInUser } = useContext(UserContext);

  return (
    <div id="meet-team-1765" className="cs-item">
      <div id="meet-team-1765" className="cs-image-group">
        <picture id="meet-team-1765" className="cs-picture">
          <source media="(max-width: 600px)" srcSet={user.avatar_url} />

          <source media="(min-width: 601px)" srcSet={user.avatar_url} />
          <img
            loading="lazy"
            decoding="async"
            src={user.avatar_url}
            alt="person"
            width="305"
            height="440"
          />
        </picture>

        <div id="meet-team-1765" className="cs-info">
          <span id="meet-team-1765" className="cs-name">
            User Name: {user.username}
          </span>
        </div>
      </div>

      <button
        className="cs-button-solid"
        onClick={() => {
          setLoggedInUser(user);
        }}
      >
        Log me in!
      </button>
    </div>
  );
};
export default UserCard;
