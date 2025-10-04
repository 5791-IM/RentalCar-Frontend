import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Calendar } from "../Calendar/Calendar";
import css from "./BookingForm.module.css";

const BookingSchema = Yup.object().shape({
  name: Yup.string().min(2, "Name is too short").required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  date: Yup.string()
    .min(new Date(), "Date connot be in the past")
    .required("Booking date is required"),
  comment: Yup.string().max(300, "Comment is too long"),
});

export const BookingForm = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <h2 className={css.title}>Book your car now</h2>
        <p className={css.subtitle}>
          Stay connected! We are always ready to help you.
        </p>
      </div>

      <Formik
        initialValues={{ name: "", email: "", date: null, comment: "" }}
        validationSchema={BookingSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
      >
        {({ setFieldValue, values }) => (
          <Form className={css.form}>
            <div className={css.fieldWrapper}>
              <Field name="name" placeholder="Name*" className={css.field} />
              <ErrorMessage name="name" component="div" className={css.error} />
            </div>

            <div className={css.fieldWrapper}>
              <Field
                name="email"
                type="email"
                placeholder="Email*"
                className={css.field}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={css.error}
              />
            </div>

            <div className={css.fieldWrapper}>
              <Calendar
                value={values.date}
                onChange={(date) => setFieldValue("date", date)}
                className={css.field}
              />
              <ErrorMessage name="date" component="div" className={css.error} />
            </div>

            <div className={css.fieldWrapper}>
              <Field
                name="comment"
                as="textarea"
                placeholder="Comment"
                className={`${css.field} ${css.textarea}`}
              />
              <ErrorMessage
                name="comment"
                component="div"
                className={css.error}
              />
            </div>

            <button type="submit" className={css.btn}>
              Send
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};
