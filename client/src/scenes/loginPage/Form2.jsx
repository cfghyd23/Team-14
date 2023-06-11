// import { useState } from "react";
// import { Box, Button, TextField, useMediaQuery, Typography, useTheme } from "@mui/material";
// import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
// import { Formik } from "formik";
// import * as yup from "yup";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { setLogin } from "state";
// import Dropzone from "react-dropzone";
// import FlexBetween from "components/FlexBetween";

// const registerSchema = yup.object().shape({
//   firstName: yup.string().required("required"),
//   lastName: yup.string().required("required"),
//   email: yup.string().email("invalid email").required("required"),
//   password: yup.string().required("required"),
//   location: yup.string().required("required"),
//   occupation: yup.string().required("required"),
//   picture: yup.string().required("required"),
// });

// const loginSchema = yup.object().shape({
//   email: yup.string().email("invalid email").required("required"),
//   password: yup.string().required("required"),
// });

// const initialValuesRegister = {
//   email: "",
//   password: "",
//   fullName: "",
//   gender: "",
//   dob: "",
//   contact: "",
//   state: "",
//   cityTown: "",
//   region: "",
//   address: "",
//   collegeName: "",
//   education: "",
//   aboutYou: "",
// };

// const initialValuesLogin = {
//   email: "",
//   password: "",
// };

// const Form = () => {
//   const [pageType, setPageType] = useState("login");
//   const { palette } = useTheme();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const isNonMobile = useMediaQuery("(min-width:600px)");
//   const isLogin = pageType === "login";
//   const isRegister = pageType === "register";

//   const register = async (values, onSubmitProps) => {
//     // this allows us to send form info with image
//     const formData = new FormData();
//     for (let value in values) {
//       formData.append(value, values[value]);
//     }
//     formData.append("picturePath", values.picture.name);

//     const savedInternResponse = await fetch("http://localhost:3001/auth/register", {
//       method: "POST",
//       body: formData,
//     });
//     const savedIntern = await savedInternResponse.json();
//     onSubmitProps.resetForm();

//     if (savedIntern) {
//       setPageType("login");
//     }
//   };

//   const login = async (values, onSubmitProps) => {
//     const loggedInResponse = await fetch("http://localhost:3001/auth/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(values),
//     });
//     const loggedIn = await loggedInResponse.json();
//     onSubmitProps.resetForm();
//     if (loggedIn) {
//       dispatch(
//         setLogin({
//           intern: loggedIn.intern,
//           token: loggedIn.token,
//         })
//       );
//       navigate("/home");
//     }
//   };

//   const handleFormSubmit = async (values, onSubmitProps) => {
//     if (isLogin) await login(values, onSubmitProps);
//     if (isRegister) await register(values, onSubmitProps);
//     console.log("nsjnvjs");
//  };

//   return (
//     <Formik onSubmit={handleFormSubmit} initialValues={isLogin ? initialValuesLogin : initialValuesRegister} validationSchema={isLogin ? loginSchema : registerSchema}>
//       {({ values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue, resetForm }) => (
//         <form onSubmit={handleSubmit}>
//           <Box
//             display="grid"
//             gap="30px"
//             gridTemplateColumns="repeat(4, minmax(0, 1fr))"
//             sx={{
//               "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
//             }}
//           >
//             {isRegister && (
//               <>
//                 <TextField
//                   label="Full Name"
//                   onBlur={handleBlur}
//                   onChange={handleChange}
//                   value={values.fullName}
//                   name="fullName"
//                   error={Boolean(touched.fullName) && Boolean(errors.fullName)}
//                   helperText={touched.fullName && errors.fullName}
//                   sx={{ gridColumn: "span 4" }}
//                 />
//                 {/* Gender field */}
//                 <TextField
//                   label="Gender"
//                   onBlur={handleBlur}
//                   onChange={handleChange}
//                   value={values.gender}
//                   name="gender"
//                   error={Boolean(touched.gender) && Boolean(errors.gender)}
//                   helperText={touched.gender && errors.gender}
//                   sx={{ gridColumn: "span 4" }}
//                 />

//                 {/* Date of Birth field */}
//                 {/* Date of Birth */}
//                 <div style={{display:"flex", width:"40vw"}}>
//                 <div style={{marginRight:"5vw", marginLeft:"2 vw"}}>Date of Birth</div>
//                 <TextField
//                 //   label="Date of Birth"
//                   type="date"
//                   onBlur={handleBlur}
//                   onChange={handleChange}
//                   value={values.dob}
//                   name="dob"
//                   error={Boolean(touched.dob) && Boolean(errors.dob)}
//                   helperText={touched.dob && errors.dob}
//                   sx={{ gridColumn: "span 4" }}
//                   style={{width:"500px"}}
//                 />
//                 </div>
//                 {/* Contact field */}
//                 <TextField
//                   label="Contact"
//                   onBlur={handleBlur}
//                   onChange={handleChange}
//                   value={values.contact}
//                   name="contact"
//                   error={Boolean(touched.contact) && Boolean(errors.contact)}
//                   helperText={touched.contact && errors.contact}
//                   sx={{ gridColumn: "span 4" }}
//                 />

//                 {/* State field */}
//                 <TextField
//                   label="State"
//                   onBlur={handleBlur}
//                   onChange={handleChange}
//                   value={values.state}
//                   name="state"
//                   error={Boolean(touched.state) && Boolean(errors.state)}
//                   helperText={touched.state && errors.state}
//                   sx={{ gridColumn: "span 4" }}
//                 />

//                 {/* City/Town field */}
//                 <TextField
//                   label="City/Town"
//                   onBlur={handleBlur}
//                   onChange={handleChange}
//                   value={values.cityTown}
//                   name="cityTown"
//                   error={Boolean(touched.cityTown) && Boolean(errors.cityTown)}
//                   helperText={touched.cityTown && errors.cityTown}
//                   sx={{ gridColumn: "span 4" }}
//                 />

//                 {/* Region field */}
//                 <TextField
//                   label="Region"
//                   onBlur={handleBlur}
//                   onChange={handleChange}
//                   value={values.region}
//                   name="region"
//                   error={Boolean(touched.region) && Boolean(errors.region)}
//                   helperText={touched.region && errors.region}
//                   sx={{ gridColumn: "span 4" }}
//                 />
//                 <TextField
//                   label="Address"
//                   onBlur={handleBlur}
//                   onChange={handleChange}
//                   value={values.address}
//                   name="address"
//                   error={Boolean(touched.address) && Boolean(errors.address)}
//                   helperText={touched.address && errors.address}
//                   sx={{ gridColumn: "span 4" }}
//                 />

//                 {/* College Name field */}
//                 <TextField
//                   label="College Name"
//                   onBlur={handleBlur}
//                   onChange={handleChange}
//                   value={values.collegeName}
//                   name="collegeName"
//                   error={Boolean(touched.collegeName) && Boolean(errors.collegeName)}
//                   helperText={touched.collegeName && errors.collegeName}
//                   sx={{ gridColumn: "span 4" }}
//                 />

//                 {/* Education field */}
//                 <TextField
//                   label="Education"
//                   onBlur={handleBlur}
//                   onChange={handleChange}
//                   value={values.education}
//                   name="education"
//                   error={Boolean(touched.education) && Boolean(errors.education)}
//                   helperText={touched.education && errors.education}
//                   sx={{ gridColumn: "span 4" }}
//                 />

//                 {/* About You field */}
//                 <TextField
//                   label="About You"
//                   onBlur={handleBlur}
//                   onChange={handleChange}
//                   value={values.aboutYou}
//                   name="aboutYou"
//                   error={Boolean(touched.aboutYou) && Boolean(errors.aboutYou)}
//                   helperText={touched.aboutYou && errors.aboutYou}
//                   sx={{ gridColumn: "span 4" }}
//                 />
//               </>
//             )}

//             <TextField
//               label="Email"
//               onBlur={handleBlur}
//               onChange={handleChange}
//               value={values.email}
//               name="email"
//               error={Boolean(touched.email) && Boolean(errors.email)}
//               helperText={touched.email && errors.email}
//               sx={{ gridColumn: "span 4" }}
//             />
//             <TextField
//               label="Password"
//               type="password"
//               onBlur={handleBlur}
//               onChange={handleChange}
//               value={values.password}
//               name="password"
//               error={Boolean(touched.password) && Boolean(errors.password)}
//               helperText={touched.password && errors.password}
//               sx={{ gridColumn: "span 4" }}
//             />
//           </Box>

//           {/* BUTTONS */}
//           <Box>
//             <Button
//               fullWidth
//               type="submit"
//               sx={{
//                 m: "2rem 0",
//                 p: "1rem",
//                 backgroundColor: palette.primary.main,
//                 color: palette.background.alt,
//                 "&:hover": { color: palette.primary.main },
//               }}
//             >
//               {isLogin ? "LOGIN" : "REGISTER"}
//             </Button>
//             <Typography
//               onClick={() => {
//                 setPageType(isLogin ? "register" : "login");
//                 resetForm();
//               }}
//               sx={{
//                 textDecoration: "underline",
//                 color: palette.primary.main,
//                 "&:hover": {
//                   cursor: "pointer",
//                   color: palette.primary.light,
//                 },
//               }}
//             >
//               {isLogin ? "Don't have an account? Sign Up here." : "Already have an account? Login here."}
//             </Typography>
//           </Box>
//         </form>
//       )}
//     </Formik>
//   );
// };

// export default Form;
