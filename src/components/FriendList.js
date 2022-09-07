import propTypes from "prop-types";
import FriendListItem from "./FriendListItem";

export default function FriendsList({ items }) {
  return (
    <section>
      <ul>
        {items.map((item) => (
          <FriendListItem
            key={item.id}
            isOnline={item.isOnline}
            avatar={item.avatar}
            name={item.name}
          />
        ))}
      </ul>
    </section>
  );
}

FriendsList.propTypes = {
  items: propTypes.arrayOf(propTypes.shape({ id: propTypes.number })),
};
