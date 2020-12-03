import PropTypes from 'prop-types';
import FriendsListItem from './FriendsListItem';
import s from './FriendsList.module.css';

function FriendsList({ friends }) {
  return (
    <ul className={s.list}>
      {friends.map(el => (
        <FriendsListItem
          key={el.id}
          isOnline={el.isOnline}
          avatar={el.avatar}
          name={el.name}
        />
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendsList;
