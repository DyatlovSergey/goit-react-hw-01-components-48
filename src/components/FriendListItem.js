import propTypes from "prop-types";

export default function FriendListItem({ id, avatar, name }) {
  return (
    <li key={id}>
      <span></span>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: propTypes.string,
  name: propTypes.string,
};
