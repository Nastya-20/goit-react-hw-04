// SearchBar.jsx
import { Field, Form, Formik } from 'formik';
import toast from 'react-hot-toast';
import css from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {
  return (
    <header className={css.header}>
      <Formik
        initialValues={{ topic: '' }}
        onSubmit={(values, actions) => {
          if (values.topic.trim() === '') {
            toast('Please enter a search term.');
            return;
          }
          onSearch(values.topic);
          actions.resetForm();
        }}
      >
        <Form className={css.form}>
          <Field
            type="text"
            name="topic"
            className={css.input}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit" className={css.button}>Search</button>
        </Form>
      </Formik>
    </header>
  );
}
