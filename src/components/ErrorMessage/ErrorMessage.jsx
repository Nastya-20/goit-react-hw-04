import css from './ErrorMessage.module.css';

export default function ErrorMessage() {
  return (
    <div className={css.error}>
      <b>Failed to fetch articles. Please try again!</b>
    </div>
  );
}
