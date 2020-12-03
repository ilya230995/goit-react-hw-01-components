import PropTypes from 'prop-types';
import s from './FriendsList.module.css';

function FriendsListItem({ isOnline, avatar, name }) {
  return (
    <li className={s.item}>
      <span className={isOnline ? s.true : s.status}>{isOnline}</span>
      <img className={s.avatar} src={avatar} alt="{name}" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendsListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendsListItem;
