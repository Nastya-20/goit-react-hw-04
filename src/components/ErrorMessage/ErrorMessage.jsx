import css from './ErrorMessage.module.css';

export default function ErrorMessage() {
  return (
    <div className={css.error}>
      <b>Oops, there was an error. Please try again!</b>
    </div>
  );
}
