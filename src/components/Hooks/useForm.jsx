// import React from 'react';
// import { useState, useEffect } from 'react';
// const useForm = validate => {
//     const [values, setValues] = useState({
//         //sec#1
//         name: '',
//         employeeCode: '',
//         designation: '',
//         subDepartment: '',
//         department: '',
//         dateOfJoining: '',
//         hod: '',
//         lastWorkingDay: '',

//         //sec#2
//         hard_copy: false,
//         remarks_hard_copy: "",
//         soft_copy: null,
//         remarks_soft_copy: "",
//         office_key_returned: null,
//         remarks_office_key_returned: "",
//         dept_cash_returned: null,
//         remarks_dept_cash_returned: "",
//         com_catalog_return: null,
//         remarks_com_catalog_return: "",
//         cabinet_keys: null,
//         remarks_cabinet_keys: "",
//         milscellaneous_files: null,
//         remarks_milscellaneous_files: "",

//         //sec#3
//         loan_clearance: null,
//         remarks_loan_clearance: "",
//         salry_clearance: null,
//         remarks_salary_clearance: "",
//         loan: null,
//         remarks_loan: "",

//         //sec#4
//         laptop_returned: null,
//         remarks_laptop_returned: '',
//         email_blocked: null,
//         remarks_email_blocked: '',
//         password_software_details: null,
//         remarks_password_software_details: '',
//         attendance_record: null,
//         remarks_attendance_record: '',

//         //sec#5
//         vehicle_and_documents: null,
//         remarks_vehicle_and_documents: '',
//         shop_deduction: null,
//         remarks_shop_deduction: '',
//         canteen_pay_deduct: null,
//         remarks_canteen_pay_deduct: '',
//         accomodation_clearance: null,
//         remarks_accomodation_clearance: '',
//         accomodation_clearance: null,
//         remarks_accomodation_clearance: '',
//         advance_clearance: null,
//         remarks_advance_clearance: '',

//         //sec#6
//         employee_card: null,
//         remarks_employee_card: '',
//         business_card: null,
//         remarks_business_card: '',
//         letter_heads: null,
//         remarks_letter_heads: '',
//         mobile_and_sim: null,
//         remarks_mobile_and_sim: '',
//         copies: null,
//         remarks_copies: '',
//         registration_letter: null,
//         remarks_registration_letter: '',
//         termination_letter: null,
//         remarks_termination_letter: '',
//         experience_letter: null,
//         remarks_experience_letter: '',
//     })
//     console.log(values);
//     const [errors, setErrors] = useState({});
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         if (value==='yes') {
//             const True = true;
//             handleBoolean(name, True);
//         }
//         else if (value==='no') {
//             const False = false;
//             handleBoolean(name, False);
//         }
//         else {
//             // console.log(radio)
//             setValues({
//                 ...values, [name]: value
//             })
//             console.log((values));
//         }
//     }
//     const handleSubmit = e => {
//         e.preventDefault();
//         setErrors(validate(values))
//     }
//     const handleBoolean=(name, value)=>{
//         setValues({
//             ...values, [name]: value
//         })
//     }

//     return { handleChange, values, handleSubmit, errors }
// }
// export default useForm;