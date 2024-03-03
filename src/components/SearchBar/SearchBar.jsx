import toast from 'react-hot-toast';
import css from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {
  function handleSubmit(event) {
    event.preventDefault();
    const setSearchQuery = event.target.elements.query.value;
    onSearch(setSearchQuery);
    if (setSearchQuery.trim() === '') {
      toast.error('Please enter a search term');
    }
  }

  return (
    <div className={css.container}>
      <header className={css.header}>
        <form className={css.form} onSubmit={handleSubmit}>
          <input
            className={css.input}
            name='query'
            type='text'
            autoComplete='off'
            autoFocus
            placeholder='Search images and photos'
          />

          <button className={css.submit} type='submit'>
            Search
          </button>
        </form>
      </header>
    </div>
  );
}
