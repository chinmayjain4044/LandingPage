import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Signup.css';
import logo from './assets/download-Photoroom (1).jpg';
import defaultProfilePic from './assets/download-Photoroom (1).jpg';

const Signup = () => {
  const [profileImage, setProfileImage] = React.useState(defaultProfilePic);
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      rollNo: '',
      contactNumber: '',
      email: '',
      dob: '',
      fathersName: '',
      fathersContactNumber: '',
      mothersName: '',
      mothersContactNumber: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First Name is required'),
      lastName: Yup.string().required('Last Name is required'),
      rollNo: Yup.string().matches(/^\d+$/, 'Roll Number must be a number').required('Roll Number is required'),
      contactNumber: Yup.string().matches(/^\d+$/, 'Contact Number must be a number').required('Contact Number is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      fathersContactNumber: Yup.string().matches(/^\d+$/, 'Contact Number must be a number'),
      mothersContactNumber: Yup.string().matches(/^\d+$/, 'Contact Number must be a number'),
      password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/\d/, 'Password must contain at least one numeral')
        .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords is not matching')
        .required('Confirm Password is required'),
    }),
    onSubmit: (values) => {
      const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
      existingUsers.push(values);
      localStorage.setItem('users', JSON.stringify(existingUsers));
      navigate('/');
    },
  });

  return (
    <div className="signup-container">
      <div className="navbar">
        <img src={logo} alt="KIIT Logo" className="logo" />
        <span>Kalinga Institute Of Industrial Technology</span>
      </div>
      <div className="overlay"></div>
      <div className="main-content">
        <div className="image-upload-container upload-section">
          <label htmlFor="file-input">
            <img src={profileImage} alt="Profile" />
          </label>
          <input id="file-input" type="file" onChange={handleImageUpload} />
          <span>Upload Your Image Here</span>
        </div>
        <div className="signup-form">
          <form onSubmit={formik.handleSubmit}>
            <h2>SIGN UP FORM</h2>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className="alert">{formik.errors.firstName}</div>
                ) : null}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="alert">{formik.errors.lastName}</div>
                ) : null}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="number"
                  placeholder="Roll no"
                  name="rollNo"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.rollNo}
                />
                {formik.touched.rollNo && formik.errors.rollNo ? (
                  <div className="alert">{formik.errors.rollNo}</div>
                ) : null}
              </div>
              <div className="form-group">
                <input
                  type="number"
                  placeholder="Contact number"
                  name="contactNumber"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.contactNumber}
                />
                {formik.touched.contactNumber && formik.errors.contactNumber ? (
                  <div className="alert">{formik.errors.contactNumber}</div>
                ) : null}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="alert">{formik.errors.email}</div>
                ) : null}
              </div>
              <div className="form-group">
                <input
                  type="date"
                  placeholder="Date of Birth"
                  name="dob"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.dob}
                />
                {formik.touched.dob && formik.errors.dob ? (
                  <div className="alert">{formik.errors.dob}</div>
                ) : null}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Father's Name"
                  name="fathersName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.fathersName}
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  placeholder="Father's Contact Number"
                  name="fathersContactNumber"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.fathersContactNumber}
                />
                {formik.touched.fathersContactNumber && formik.errors.fathersContactNumber ? (
                  <div className="alert">{formik.errors.fathersContactNumber}</div>
                ) : null}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Mother's Name"
                  name="mothersName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.mothersName}
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  placeholder="Mother's Contact Number"
                  name="mothersContactNumber"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.mothersContactNumber}
                />
                {formik.touched.mothersContactNumber && formik.errors.mothersContactNumber ? (
                  <div className="alert">{formik.errors.mothersContactNumber}</div>
                ) : null}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Set Password"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="alert">{formik.errors.password}</div>
                ) : null}
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                  <div className="alert">{formik.errors.confirmPassword}</div>
                ) : null}
              </div>
            </div>
            <button type="submit">Sign Up</button>
          </form>
          <div className="login-redirect">
            <span>Already have an account? <Link to="/">Login</Link></span>
          </div>
        </div>
      </div>
      <div className="footer-links">
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT US</Link>
        <Link to="/admissions">ADMISSIONS</Link>
        <Link to="/fees">FEES</Link>
      </div>
    </div>
  );
}

export default Signup;
