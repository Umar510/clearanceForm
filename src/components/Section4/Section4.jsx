import React from 'react'
import "./Section4.css";
const Section4 = ({ values, handleChange,handleChangeRadio, errors }) => {
    const inputData = [

        {
            inputTitle: "Laptop or Desktop Returned Without Any Damage",
            labelYes: "Yes",
            labelNo: "No",
            labelRemarks: "Remarks",
            idRadio: 'laptopReturned',
            idRemark: 'remarksLaptopReturned',
            valueYes: "yes",
            valueNo: "no",
            typeRadio: 'radio',
            typeText: 'text',
            onChange: handleChange,
            error: errors.laptopReturned,
            valueRemark: values.remarksLaptopReturned,
            errorRemark: errors.remarksLaptopReturned
        },
        {
            inputTitle: "Email-ID and Speed Dial (if exist) Has Been Blocked",
            labelYes: "Yes",
            labelNo: "No",
            labelRemarks: "Remarks",
            idRadio: 'emailBlocked',
            idRemark: 'remarksEmailBlocked',
            valueYes: "yes",
            valueNo: "no",
            typeRadio: 'radio',
            typeText: 'text',
            onChange: handleChange,
            error: errors.emailBlocked,
            valueRemark: values.remarksEmailBlocked,
            errorRemark: errors.remarksEmailBlocked
        },
        {
            inputTitle: "Password, Software Details etc",
            labelYes: "Yes",
            labelNo: "No",
            labelRemarks: "Remarks",
            idRadio: 'passwordSoftwareDetails',
            idRemark: 'remarksPasswordSoftwareDetails',
            valueYes: "yes",
            valueNo: "no",
            typeRadio: 'radio',
            typeText: 'text',
            onChange: handleChange,
            error: errors.passwordSoftwareDetails,
            valueRemark: values.remarksPasswordSoftwareDetails,
            errorRemark: errors.remarksPasswordSoftwareDetails
        },
        {
            inputTitle: "Attendance Record",
            labelYes: "Yes",
            labelNo: "No",
            labelRemarks: "Remarks",
            idRadio: 'attendanceRecord',
            idRemark: 'remarksAttendanceRecord',
            valueYes: "yes",
            valueNo: "no",
            typeRadio: 'radio',
            typeText: 'text',
            onChange: handleChange,
            error: errors.attendanceRecord,
            valueRemark: values.remarksAttendanceRecord,
            errorRemark: errors.remarksAttendanceRecord
        },
    ]
    return (
        <div className='section4'>
            <div className='heading-sec4'>
                <strong>SECTTION IV: OPERATIONS & IT DEPARTMENT</strong>
            </div>
            <div className='row'>
            {inputData.map((inputData, index) => (
                <div className='row'>
                    <div className="col-6" key={index}>
                        <p><span>{inputData.inputTitle}</span></p>
                        <label className='col-3'>{inputData.labelYes}</label>
                        <input className='col-3' type={inputData.typeRadio} id={inputData.idRadio} name={inputData.idRadio} value={inputData.valueYes} onChange={handleChangeRadio} />

                        <label className='col-3'>{inputData.labelNo}</label>
                        <input className='col-3' type={inputData.typeRadio} id={inputData.idRadio} name={inputData.idRadio} value={inputData.valueNo} onChange={handleChangeRadio} />

                        {inputData.error && <p className='error-message'>{inputData.error}</p>}
                    </div>
                    <div className='col-6'>
                        <label className='col-12' htmlFor="">{inputData.labelRemarks}</label>
                        <input className="col-12" type={inputData.typeText} id={inputData.idRemark} name={inputData.idRemark} value={inputData.valueRemark} onChange={inputData.onChange} />
                        {inputData.errorRemark && <p className='error-message'>{inputData.errorRemark}</p>}
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Section4;