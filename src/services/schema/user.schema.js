// import * as yup from 'yup';


// export const CreateUserSchema = yup.object().shape({
//     name: yup
//         .string()
//         .matches(/^[A-Za-z ]+$/, "invalid characters")
//         .required("filed is required"),
//     phone: yup
//         .string()
//         .matches(
//             /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
//             {
//                 message: "invalid phone number",
//                 excludeEmptyString: false,
//             }
//         )
//         .required(),
//     email: yup.string().required("filed is required").email("enter valid email"),
//     password: yup.string().required("filed is required").min(8),
//     confirmPassword: yup
//         .string()
//         .nullable()
//         .notRequired()
//         .oneOf([yup.ref("password")], "passwords do not match"),
//     status: yup.bool().default(false),
//     roleId: yup.string().required("select one"),
// });

// export const UpdateUserSchema = yup.object({

//     firstName: yup
//         .string()
//         .matches(/^[A-Za-z ]+$/, "invalid characters")
//         .required("filed is required"),
//     lastName: yup
//         .string()
//         .matches(/^[A-Za-z ]+$/, "invalid characters")
//         .required("filed is required"),
//     phone: yup
//         .string()
//         .matches(
//             /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
//             {
//                 message: "invalid phone number",
//                 excludeEmptyString: false,
//             }
//         )
//         .required(),
//     email: yup.string().required("filed is required").email("enter valid email"),
//     status: yup.bool().required("select one"),
//     roleId: yup.string().required("select one "),
// });