import React from 'react'
import "./Section5.css"
import { useState } from 'react';
const Section5 = ({ values, handleChange, handleChangeRadio, errors }) => {
    const inputData = [

        {
            inputTitle: "Vehicle & Documents (All formalities)",
            labelYes: "Yes",
            labelNo: "No",
            labelRemarks: "Remarks",
            idRadio: 'vehicleDocuments',
            idRemark: 'remarksVehicleDocuments',
            valueYes: "yes",
            valueNo: "no",
            typeRadio: 'radio',
            typeText: 'text',
            onChange: handleChange,
            error: errors.vehicleDocuments,
            valueRemark: values.remarksVehicleDocuments,
            errorRemark: errors.remarksVehicleDocuments
        },
        {
            inputTitle: "Shop Deduction",
            labelYes: "Yes",
            labelNo: "No",
            labelRemarks: "Remarks",
            idRadio: 'shopDeduction',
            idRemark: 'remarksShopDeduction',
            valueYes: "yes",
            valueNo: "no",
            typeRadio: 'radio',
            typeText: 'text',
            onChange: handleChange,
            error: errors.shopDeduction,
            valueRemark: values.remarksShopDeduction,
            errorRemark: errors.remarksShopDeduction
        },
        {
            inputTitle: "Canteen payment Deduction:",
            labelYes: "Yes",
            labelNo: "No",
            labelRemarks: "Remarks",
            idRadio: 'canteenPayDeduct',
            idRemark: 'remarksCanteenPayDeduct',
            valueYes: "yes",
            valueNo: "no",
            typeRadio: 'radio',
            typeText: 'text',
            onChange: handleChange,
            error: errors.canteenPayDeduct,
            valueRemark: values.remarksCanteenPayDeduct,
            errorRemark: errors.remarksCanteenPayDeduct
        },
        {
            inputTitle: "Accommodation Clearance",
            labelYes: "Yes",
            labelNo: "No",
            labelRemarks: "Remarks",
            idRadio: 'accomodationClearance',
            idRemark: 'remarksAccomodationClearance',
            valueYes: "yes",
            valueNo: "no",
            typeRadio: 'radio',
            typeText: 'text',
            onChange: handleChange,
            error: errors.accomodationClearance,
            valueRemark: values.remarksAccomodationClearance,
            errorRemark: errors.remarksAccomodationClearance
        },
        {
            inputTitle: "Advance Clearance (Admin Dpt)",
            labelYes: "Yes",
            labelNo: "No",
            labelRemarks: "Remarks",
            idRadio: 'advanceClearance',
            idRemark: 'remarksAdvanceClearance',
            valueYes: "yes",
            valueNo: "no",
            typeRadio: 'radio',
            typeText: 'text',
            onChange: handleChange,
            error: errors.advanceClearance,
            valueRemark: values.remarksAdvanceClearance,
            errorRemark: errors.remarksAdvanceClearance
        },
    ]
    return (
        <div className='section5'>
            <div className='heading-sec5'>
                <strong>SECTTION V: ADMINITRATION</strong>
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

export default Section5