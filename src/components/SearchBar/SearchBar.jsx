import { Field, Form, Formik } from "formik";
import css from './SearchBar.module.css';


export default function SearchBar( {onSearch}) {
    return (
      <header>
        <Formik initialValues={{ topic: "" }}
                onSubmit={(values, actions) => {
                    onSearch(values.topic);
                    actions.resetForm();
                }}
            >
                <Form className={css.form}>
                   <Field type="text" name="topic" className={css.input} />
                    <button type="submit">Search</button>
                </Form>
            </Formik>
        </header>
    );
}