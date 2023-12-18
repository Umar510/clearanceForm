import React, { useEffect } from 'react';
import "./Section6.css"
const Section6 = ({ values, handleChange, handleChangeRadio, errors }) => {
    const inputData = [
        {
            inputTitle: "Employee Card",
            labelYes: "Yes",
            labelNo: "No",
            labelRemarks: "Remarks",
            idRadio: 'employeeCard',
            idRemark: 'remarksEmployeeCard',
            valueYes: "yes",
            valueNo: "no",
            typeRadio: 'radio',
            typeText: 'text',
            onChange: handleChange,
            onchangeRdaio:handleChangeRadio,
            error: errors.employeeCard,
            valueRemark: values.remarksEmployeeCard,
            errorRemark: errors.remarksEmployeeCard
        },
        {
            inputTitle: "Business Cards",
            labelYes: "Yes",
            labelNo: "No",
            labelRemarks: "Remarks",
            idRadio: 'businessCard',
            idRemark: 'remarksBusinessCard',
            valueYes: "yes",
            valueNo: "no",
            typeRadio: 'radio',
            typeText: 'text',
            onChange: handleChange,
            onchangeRdaio:handleChangeRadio,
            error: errors.businessCard,
            valueRemark: values.remarksBusinessCard,
            errorRemark: errors.remarksBusinessCard
        },
        {
            inputTitle: "Letter Heads (if any)",
            labelYes: "Yes",
            labelNo: "No",
            labelRemarks: "Remarks",
            idRadio: 'letterHeads',
            idRemark: 'remarksLetterHeads',
            valueYes: "yes",
            valueNo: "no",
            typeRadio: 'radio',
            typeText: 'text',
            onChange: handleChange,
            onchangeRdaio:handleChangeRadio,
            error: errors.letterHeads,
            valueRemark: values.remarksLetterHeads,
            errorRemark: errors.remarksLetterHeads
        },
        {
            inputTitle: "Mobile Phone With Sim Card:",
            labelYes: "Yes",
            labelNo: "No",
            labelRemarks: "Remarks",
            idRadio: 'mobileSim',
            idRemark: 'remarksmobileSim',
            valueYes: "yes",
            valueNo: "no",
            typeRadio: 'radio',
            typeText: 'text',
            onChange: handleChange,
            onchangeRdaio:handleChangeRadio,
            error: errors.mobileSim,
            valueRemark: values.remarksmobileSim,
            errorRemark: errors.remarksmobileSim
        },
        {
            inputTitle: "Copies of JD, SOP or Any Other DEPARTMENT1",
            labelYes: "Yes",
            labelNo: "No",
            labelRemarks: "Remarks",
            idRadio: 'copies',
            idRemark: 'remarksCopies',
            valueYes: "yes",
            valueNo: "no",
            typeRadio: 'radio',
            typeText: 'text',
            onChange: handleChange,
            onchangeRdaio:handleChangeRadio,
            error: errors.copies,
            valueRemark: values.remarksCopies,
            errorRemark: errors.remarksCopies
        },
        {
            inputTitle: "Resignation letter",
            labelYes: "Yes",
            labelNo: "No",
            labelRemarks: "Remarks",
            idRadio: 'resignationLetter',
            idRemark: 'remarksResignationLetter',
            valueYes: "yes",
            valueNo: "no",
            typeRadio: 'radio',
            typeText: 'text',
            onChange: handleChange,
            onchangeRdaio:handleChangeRadio,
            error: errors.resignationLetter,
            valueRemark: values.remarksResignationLetter,
            errorRemark: errors.remarksResignationLetter
        },
        {
            inputTitle: "Terminantion/Lay off Letter:",
            labelYes: "Yes",
            labelNo: "No",
            labelRemarks: "Remarks",
            idRadio: 'terminationLetter',
            idRemark: 'remarksTerminationLetter',
            valueYes: "yes",
            valueNo: "no",
            typeRadio: 'radio',
            typeText: 'text',
            onChange: handleChange,
            onchangeRdaio:handleChangeRadio,
            error: errors.terminationLetter,
            valueRemark: values.remarksTerminationLetter,
            errorRemark: errors.remarksTerminationLetter
        },
        {
            inputTitle: "Exprience Letter:",
            labelYes: "Yes",
            labelNo: "No",
            labelRemarks: "Remarks",
            idRadio: 'experienceLetter',
            idRemark: 'remarksExperienceLetter',
            valueYes: "yes",
            valueNo: "no",
            typeRadio: 'radio',
            typeText: 'text',
            onChange: handleChange,
            onchangeRdaio:handleChangeRadio,
            error: errors.experienceLetter,
            valueRemark: values.remarksExperienceLetter,
            errorRemark: errors.remarksExperienceLetter
        },
    ]
    return (
        <div className='section6'>

            <div className='heading-sec6'>
                <strong>SECTTION VI: ADMINITRATION</strong>
            </div>
            <div className='row'>
                {inputData.map((inputData, index) => (
                    <div className='row'>
                        <div className="col-6" key={index}>
                            <p><span>{inputData.inputTitle}</span></p>
                            <label className='col-3'>{inputData.labelYes}</label>
                            <input className='col-3' type={inputData.typeRadio} id={inputData.idRadio} name={inputData.idRadio} value={inputData.valueYes} onChange={inputData.onchangeRdaio} />

                            <label className='col-3'>{inputData.labelNo}</label>
                            <input className='col-3' type={inputData.typeRadio} id={inputData.idRadio} name={inputData.idRadio} value={inputData.valueNo} onChange={inputData.onchangeRdaio} />

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

export default Section6