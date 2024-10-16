import { useFormik } from "formik";
import * as Yup from "yup";
import { db } from "../../../firebaseConfig"; // Adjust the import based on your Firebase setup
import { collection, addDoc } from "firebase/firestore"; // Import addDoc and collection
import toast, { Toaster } from 'react-hot-toast'; // Import toast and Toaster
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation(); 

  // Form validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^[0-9]+$/, "Phone number must be digits only"), // Ensures only numbers
    subject: Yup.string().required("Subject is required"), // Subject validation
    message: Yup.string().required("Please tell us about your project"),
  });

  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "", // Add subject field
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      const toastId = toast.loading("Sending your message...");
      try {
        // Send data to Firebase
        await addDoc(collection(db, "contacts"), values); // Use addDoc for Firestore
        resetForm();
        toast.success("Message sent successfully!", { id: toastId });
      } catch (error) {
        console.error("Error sending message: ", error); // Log the error for debugging
        toast.error("Error sending message, please try again.", { id: toastId });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      <Toaster /> {/* This will render the toast notifications */}
      <section className="contact ">
        <div className="container">
          <div className="contact-items">
            <div className="row gy-5 align-items-center">
<div className="col-lg-6">
 <h1>{t("contact.heading")}</h1>
</div>
              <div className="col-lg-6 left-item">
                <div className="content">
                  <h2 className="mb-4">{t("contact.title")}</h2>
                  <form className="contact-form" onSubmit={formik.handleSubmit}>
                    {/* Your form inputs here */}
                    <div className="row mb-3">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder={t("contact.name")}
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                          />
                          {formik.touched.name && formik.errors.name ? (
                            <div className="alert alert-danger mt-2">
                              {formik.errors.name}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3 gy-3">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder={t("contact.email")}
                            type="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                          />
                          {formik.touched.email && formik.errors.email ? (
                            <div className="alert alert-danger mt-2">
                              {formik.errors.email}
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            id="phone"
                            name="phone"
                            placeholder={t("contact.phone")}
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.phone}
                          />
                          {formik.touched.phone && formik.errors.phone ? (
                            <div className="alert alert-danger mt-2">
                              {formik.errors.phone}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            id="subject"
                            name="subject"
                            placeholder={t("contact.subject")} // Add placeholder for subject
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.subject}
                          />
                          {formik.touched.subject && formik.errors.subject ? (
                            <div className="alert alert-danger mt-2">
                              {formik.errors.subject}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-lg-12">
                        <div className="form-group message">
                          <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            placeholder={t("contact.message")}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.message}
                          />
                          {formik.touched.message && formik.errors.message ? (
                            <div className="alert alert-danger mt-2">
                              {formik.errors.message}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <button
                          type="submit"
                          name="submit"
                          id="submit"
                          className="main-btn text-white"
                          disabled={formik.isSubmitting}
                        >
                          {t("contact.button")} <i className="fa fa-paper-plane" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
