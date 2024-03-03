import css from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({ onClick }) {
  return (
    <div className={css.load}>
      <button className={css.more} type='button' onClick={onClick}>
        Load more
      </button>
    </div>
  );
}
