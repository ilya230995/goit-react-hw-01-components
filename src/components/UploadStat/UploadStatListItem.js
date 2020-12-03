import PropTypes from 'prop-types';
import s from './UploadStat.module.css';

const StatItem = ({ item }) => (
  <>
    <span className={s.label}>{item.label}</span>
    <span className={s.percentage}>{item.percentage}%</span>
  </>
);

StatItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string,
    percentage: PropTypes.number
  })
} 
export default StatItem;
