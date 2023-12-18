import React from 'react'
import "./Section3.css"
const Section3 = ({ values, handleChange, handleChangeRadio, errors }) => {
    const inputData = [

        {
            inputTitle: "Personal Loan Clearance",
            labelYes: "Yes",
            labelNo: "No",
            labelRemarks: "Remarks",
            idRadio: 'loanClearance',
            idRemark: 'remarksLoanClearance',
            valueYes: "yes",
            valueNo: "no",
            typeRadio: 'radio',
            typeText: 'text',
            onChange: handleChange,
            error: errors.loanClearance,
            valueRemark: values.remarksLoanClearance,
            errorRemark: errors.remarksLoanClearance
        },
        {
            inputTitle: "Advance Salary Clearance (Accounts)",
            labelYes: "Yes",
            labelNo: "No",
            labelRemarks: "Remarks",
            idRadio: 'salaryClearance',
            idRemark: 'remarksSalryClearance',
            valueYes: "yes",
            valueNo: "no",
            typeRadio: 'radio',
            typeText: 'text',
            onChange: handleChange,
            error: errors.salaryClearance,
            valueRemark: values.remarksSalryClearance,
            errorRemark: errors.remarksSalryClearance
        },
        {
            inputTitle: "Any other Loan (vehicle Purchase)",
            labelYes: "Yes",
            labelNo: "No",
            labelRemarks: "Remarks",
            idRadio: 'loan',
            idRemark: 'remarksLoan',
            valueYes: "yes",
            valueNo: "no",
            typeRadio: 'radio',
            typeText: 'text',
            onChange: handleChange,
            error: errors.loan,
            valueRemark: values.remarksLoan,
            errorRemark: errors.remarksLoan
        },


    ];
    return (
        <div className='section3'>
            <div className='heading-sec3'>
                <strong>SECTTION III: ACCOUNTS AND FINANCE</strong>
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
export default Section3;