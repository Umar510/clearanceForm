// import React from 'react'
import { useEffect } from 'react';

import './Section1.css'

const Section1 = ({ values, handleChange, handleDate, errors }) => {
    const inputData = [
        {
            id: 'name',
            label: 'Name *',
            value: values.name,
            type: 'text',
            onChange: handleChange,
            error: errors.name,
        },
        {
            id: 'employeeCode',
            label: 'Employee Code *',
            value: values.employeeCode,
            type: 'number',
            min: '1',
            onChange: handleChange,
            error: errors.employeeCode,
        },
        {
            id: 'designation',
            label: 'Designation/Position *',
            value: values.designation,
            type: 'text',
            onChange: handleChange,
            error: errors.designation,
        },
        {
            id: 'department',
            label: 'Deparment *',
            value: values.department,
            type: 'text',
            onChange: handleChange,
            error: errors.department,
        },
        {
            id: 'subDepartment',
            label: 'Sub Deparment *',
            value: values.subDepartment,
            type: 'text',
            onChange: handleChange,
            error: errors.subDepartment,
        },
        {
            id: 'hod',
            label: 'HOD/Line Manager *',
            value: values.hod,
            type: 'text',
            onChange: handleChange,
            error: errors.hod,
        },
        {
            id: 'dateOfJoining',
            label: 'Date of joining *',
            value: values.dateOfJoining,
            type: 'date',
            onChange: handleChange,
            error: errors.dateOfJoining,
        },
        {
            id: 'lastWorkingDay',
            label: 'Last Working Day *',
            value: values.lastWorkingDay,
            type: 'date',
            onChange: handleChange,
            error: errors.lastWorkingDay,
        },

    ];

    // console.log(errors)
    return (
        <div className='section1'>
            <div className='heading-sec1'>
                <strong>SECTTION I: EMPLOYEE DETAILS</strong>
            </div>
            <div className='row'>
                {inputData.map((inputData, index) => (
                    <div className='col-6' key={index}>

                        <label className='' htmlFor={inputData.id}>{inputData.label}</label>
                        <input className='col-12' type={inputData.type} id={inputData.id} name={inputData.id} value={inputData.value} min={inputData.min} onChange={inputData.onChange} />
                        
                        {inputData.error && <p className="error-message">{inputData.error} </p>}
                    </div>
                ))}
            </div>
        </div>

    )
}
export default Section1;




