import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export default function ImageGallery({ items, onSelect }) {
  return (
    <ul className={css.list}>
      {items.map(item => {
        return (
          <li className={css.item} key={item.id}>
            <ImageCard data={item} onSelect={onSelect} />
          </li>
        );
      })}
    </ul>
  );
}
