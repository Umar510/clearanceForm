import React from 'react';
import './Section2.css';
const Section2 = ({ values, handleChange, handleChangeRadio, errors }) => {
    const inputData = [

        {
            inputTitle: "Documents and Files Returned(hard copy)",
            labelYes: "Yes",
            labelNo: "No",
            labelRemarks: "Remarks",
            idRadio: 'hardCopy',
            idRemark: 'remarksHardCopy',
            valueYes: "yes",
            valueNo: "no",
            typeRadio: 'radio',
            typeText: 'text',
            onChange: handleChange,
            error: errors.hardCopy,
            valueRemark: values.remarksHardCopy,
            errorRemark: errors.remarksHardCopy
        },
        {
            inputTitle: "Documents and Files Returned(soft copy))",
            labelYes: "Yes",
            labelNo: "No",
            labelRemarks: "Remarks",
            idRadio: 'softCopy',
            idRemark: 'remarksSoftCopy',
            valueYes: "yes",
            valueNo: "no",
            typeRadio: 'radio',
            typeText: 'text',
            onChange: handleChange,
            error: errors.softCopy,
            valueRemark: values.remarksSoftCopy,
            errorRemark: errors.remarksSoftCopy
        },
        {
            inputTitle: "Cabinet/Office Building Key Returned)",
            labelYes: "Yes",
            labelNo: "No",
            labelRemarks: "Remarks",
            idRadio: 'officeKeyReturned',
            idRemark: 'remarksOfficeKeyReturned',
            valueYes: "yes",
            valueNo: "no",
            typeRadio: 'radio',
            typeText: 'text',
            onChange: handleChange,
            error: errors.officeKeyReturned,
            valueRemark: values.remarksOfficeKeyReturned,
            errorRemark: errors.remarksOfficeKeyReturned
        },
        {
            inputTitle: "Department Cash Returned (if any)",
            labelYes: "Yes",
            labelNo: "No",
            labelRemarks: "Remarks",
            idRadio: 'cashReturned',
            idRemark: 'remarksDeptCashReturned',
            valueYes: "yes",
            valueNo: "no",
            typeRadio: 'radio',
            typeText: 'text',
            onChange: handleChange,
            error: errors.cashReturned,
            valueRemark: values.remarksDeptCashReturned,
            errorRemark: errors.remarksDeptCashReturned
        },
        {
            inputTitle: "Company's Catalog Return)",
            labelYes: "Yes",
            labelNo: "No",
            labelRemarks: "Remarks",
            idRadio: 'catalogReturn',
            idRemark: 'remarksCatalogReturn',
            valueYes: "yes",
            valueNo: "no",
            typeRadio: 'radio',
            typeText: 'text',
            onChange: handleChange,
            error: errors.catalogReturn,
            valueRemark: values.remarksCatalogReturn,
            errorRemark: errors.remarksCatalogReturn
        },
        {
            inputTitle: "Stationary / Cabinet keys",
            labelYes: "Yes",
            labelNo: "No",
            labelRemarks: "Remarks",
            idRadio: 'cabinetKeys',
            idRemark: 'remarksCabinetKeys',
            valueYes: "yes",
            valueNo: "no",
            typeRadio: 'radio',
            typeText: 'text',
            onChange: handleChange,
            error: errors.cabinetKeys,
            valueRemark: values.remarksCabinetKeys,
            errorRemark: errors.remarksCabinetKeys
        },
        {
            inputTitle: "Milscellaneous files",
            labelYes: "Yes",
            labelNo: "No",
            labelRemarks: "Remarks",
            idRadio: 'milscellaneousFile',
            idRemark: 'remarksMilscellaneousFiles',
            valueYes: "yes",
            valueNo: "no",
            typeRadio: 'radio',
            typeText: 'text',
            onChange: handleChange,
            error: errors.milscellaneousFile,
            valueRemark: values.remarksMilscellaneousFiles,
            errorRemark: errors.remarksMilscellaneousFiles
        },


    ];
    return (
        <div className='section2'>
            <div className='heading-sec2'>
                <strong>SECTTION II: EMPLOYEE HOME DEPARTMENT</strong>
            </div>
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
    )
}
export default Section2;