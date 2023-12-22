import { useEffect, useState, useRef } from 'react';
import React from 'react';
import axios from 'axios';
import Header from '../src/components/Header/Header';
import Heading from './components/Heading/Heading';
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';
import Section3 from './components/Section3/Section3';
import Section4 from './components/Section4/Section4';
import Section5 from './components/Section5/Section5';
import Section6 from './components/Section6/Section6';
import validate from './components/Hooks/useValidateInfo';

import './App.css';

const App = () => {

  const [values, setValues] = useState({


    //sec#1
    name: '',
    employeeCode: '',
    designation: '',
    department: '',
    subDepartment: '',
    hod: '',
    dateOfJoining: '',
    lastWorkingDay: '',

    //sec#2
    hardCopy: null,
    remarksHardCopy: "",
    softCopy: null,
    remarksSoftCopy: "",
    officeKeyReturned: null,
    remarksOfficeKeyReturned: "",
    cashReturned: null,
    remarksCashReturned: "",
    catalogReturn: null,
    remarksCatalogReturn: "",
    cabinetKeys: null,
    remarksCabinetKeys: "",
    milscellaneousFile: null,
    remarksMilscellaneousFiles: "",

    //sec#3
    loanClearance: null,
    remarksLoanClearance: "",
    salaryClearance: null,
    remarksSalryClearance: "",
    loan: null,
    remarksLoan: "",

    //sec#4
    laptopReturned: null,
    remarksLaptopReturned: '',
    emailBlocked: null,
    remarksEmailBlocked: '',
    passwordSoftwareDetails: null,
    remarksPasswordSoftwareDetails: '',
    attendanceRecord: null,
    remarksAttendanceRecord: '',


    //sec#5
    vehicleDocuments: null,
    remarksVehicleDocuments: '',
    shopDeduction: null,
    remarksShopDeduction: '',
    canteenPayDeduct: null,
    remarksCanteenPayDeduct: '',
    accomodationClearance: null,
    remarksAccomodationClearance: '',
    advanceClearance: null,
    remarksAdvanceClearance: '',

    //sec#6
    employeeCard: null,
    remarksEmployeeCard: '',
    businessCard: null,
    remarksBusinessCard: '',
    letterHeads: null,
    remarksLetterHeads: '',
    mobileSim: null,
    remarksMobileSim: '',
    copies: null,
    remarksCopies: '',
    resignationLetter: null,
    remarksResignationLetter: '',
    terminationLetter: null,
    remarksTerminationLetter: '',
    experienceLetter: null,
    remarksExperienceLetter: '',
  })
  const [errors, setErrors] = useState({});
  // const requiredInputRef = useRef()
  // console.log(requiredInputRef)
  const len = Object.keys(errors).length;
  console.log(len)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values, [name]: value
    })

  }
  const handleDate = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values, [name]: value
    })
  }

  useEffect(() => {
    // if (values.dateOfJoining !== '' && values.lastWorkingDay !== 
      compareDates(values.lastWorkingDay, values.dateOfJoining);
  }, [values.dateOfJoining, values.lastWorkingDay])



  const compareDates = (lastDate, joinDate) => {
    if (lastDate < joinDate) {
      setErrors({
        ...errors,
        lastWorkingDay: '*Last WORKING Day must be after The DATE of JOINING*'
      });
    }
    else {
      setErrors({ ...errors, lastWorkingDay: "" })
    }
  }

  const handleChangeRadio = e => {
    const { name, value } = e.target;
    if (value === 'yes') {
      setValues({
        ...values, [name]: true
      })
    }
    else if (value === 'no') {
      setValues({
        ...values, [name]: false
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    compareDates()
    const err = validate(values);
    setErrors(err);
    if (Object.keys(errors).length !== 0) {
      const errorKey = Object.keys(errors)[0];
      document.querySelector(`input[name=${errorKey}]`).scrollIntoView({ behavior: 'smooth' });
      return;
    }

    console.log('submit', errors)

    if (Object.keys(errors).length === 0) {
      const payload = {

        //sec#1
        name: values.name,
        employee_code: values.employeeCard,
        designation: values.designation,
        sub_department: values.subDepartment,
        department: values.department,
        date_of_joining: values.dateOfJoining,
        hod: values.hod,
        last_working_day: values.lastWorkingDay,

        //sec2
        hard_copy: values.hardCopy,
        hard_copy_remark: values.remarksHardCopy ? values.remarksHardCopy : "",
        soft_copy: values.softCopy,
        soft_copy_remark: values.remarksSoftCopy ? values.remarksSoftCopy : "",
        cabinet: values.cabinetKeys,
        cabinet_remark: values.remarksCabinetKeys ? values.remarksCabinetKeys : "",
        department_cash: values.cashReturned,
        department_cash_remark: values.remarksCashReturned ? values.remarksCashReturned : "",
        company_catalog: values.catalogReturn,
        company_catalog_remark: values.remarksCompanyCatalog ? values.remarksCompanyCatalog : "",
        stationary: values.cabinetKeys,
        stationary_remark: values.remarksCabinetKeys ? values.remarksCabinetKeys : "",
        milscellaneous: values.milscellaneousFile,
        milscellaneous_remark: values.remarksMilscellaneousFiles ? values.remarksMilscellaneousFiles : "",

        //sec#3
        loan_clearance: values.loanClearance,
        remark_loan_clearance: values.remarksLoanClearance ? values.remarksLoanClearance : "",
        salary_clearance: values.salaryClearance,
        remark_salary_clearance: values.remarksSalryClearance ? values.remarksSalryClearance : "",
        other_loan: values.loan,
        other_loan_remark: values.remarksLoan ? values.remarksLoan : "",

        //sec#4
        laptop: values.laptopReturned,
        laptop_remark: values.remarksLaptopReturned ? values.remarksLaptopReturned : "",
        email: values.emailBlocked,
        email_remark: values.remarksEmailBlocked ? values.remarksEmailBlocked : "",
        password: values.passwordSoftwareDetails,
        password_remark: values.remarksPasswordSoftwareDetails ? values.remarksPasswordSoftwareDetails : "",
        attendance: values.attendanceRecord,
        attendance_remark: values.remarksAttendanceRecord ? values.remarksAttendanceRecord : "",

        //sec#5
        vehicle: values.vehicleDocuments,
        vehicle_remark: values.remarksVehicleDocuments ? values.remarksVehicleDocuments : "",
        shop: values.shopDeduction,
        shop_remark: values.remarksShopDeduction ? values.remarksShopDeduction : "",
        canteen: values.canteenPayDeduct,
        canteen_remark: values.remarksCanteenPayDeduct ? values.remarksCanteenPayDeduct : "",
        clearance: values.accomodationClearance,
        clearance_remark: values.remarksAccomodationClearance ? values.remarksAccomodationClearance : "",
        advance_clearance: values.advanceClearance,
        advance_clearance_remark: values.remarksAdvanceClearance ? values.remarksAdvanceClearance : "",

        //sec#6
        employee_card: values.employeeCard,
        employee_card_remark: values.remarksEmployeeCard,
        business_card: values.businessCard,
        business_card_remark: values.remarksBusinessCard,
        letter: values.letterHeads,
        letter_remark: values.remarksLetterHeads,
        mobile_phone: values.mobileSim,
        mobile_phone_remark: values.remarksMobileSim,
        resignation: values.resignationLetter,
        resignation_remark: values.remarksResignationLetter,
        termination: values.terminationLetter,
        termination_remark: values.remarksTerminationLetter,
        experience: values.experienceLetter,
        experience_remark: values.remarksExperienceLetter
      }
      console.log({ payload })
      console.log({ errors })
    }
  }
  console.log('outside submit', errors)
  console.log(values)



  return (
    <div className="App container col-11">
      <Header />
      <Heading />
      <form onSubmit={handleSubmit}>

        <Section1
          values={values}
          handleChange={handleChange}
          handleDate={handleDate}
          errors={errors}
        />

        <Section2
          values={values}
          handleChange={handleChange}
          handleChangeRadio={handleChangeRadio}
          errors={errors}
        />

        <Section3
          values={values}
          handleChange={handleChange}
          handleChangeRadio={handleChangeRadio}
          errors={errors}
        />

        <Section4
          values={values}
          handleChange={handleChange}
          handleChangeRadio={handleChangeRadio}
          errors={errors}
        />

        <Section5
          values={values}
          handleChange={handleChange}
          handleChangeRadio={handleChangeRadio}
          errors={errors}
        />

        <Section6
          values={values}
          handleChange={handleChange}
          handleChangeRadio={handleChangeRadio}
          errors={errors}
        />

        <button className='submit-btn' type='submit'>Submit</button>
      </form>
    </div>
  );
}
export default App;