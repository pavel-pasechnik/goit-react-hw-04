import css from './ErrorMessage.module.css';

export default function ErrorMessage() {
  return (
    <div className={css.error}>
      <p className={css.errorText}>Something went wrong! Please reload the page and try again!</p>
    </div>
  );
}
