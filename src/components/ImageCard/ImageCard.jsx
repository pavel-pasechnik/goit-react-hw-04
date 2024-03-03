import css from './ImageCard.module.css';

export default function ImageCard({ data, onSelect }) {
  return (
    <div
      className={css.card}
      onClick={() =>
        onSelect(true, {
          src: data.urls.regular,
          description: data.description,
        })
      }>
      <img className={css.img} src={data.urls.small} alt={data.description} />
    </div>
  );
}
