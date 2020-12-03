import PropTypes from 'prop-types';
import StatItem from './UploadStatListItem';
import s from './UploadStat.module.css';

function UploadStat(props) {
  const { title, stats } = props;
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>

      <ul className={s.list}>
        {stats.map(el => (
          <li
            className={s.item}
            key={el.id}
            style={{
              backgroundColor:
                '#' + Math.floor(Math.random() * 16777215).toString(16),
            }}
          >
            <StatItem item={el} />
          </li>
        ))}
      </ul>
    </section>
  );
}

UploadStat.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default UploadStat;
