import React from 'react'
const useValidateInfo = (values) => {
    let errors = {};

    //1
    if (values.name === "") {
        errors.name = "Enter your full name.";
    }
    else if (values.employeeCode === "") {
        errors.employeeCode = "Enter your employee code.";
    }
    else if (values.designation === "") {
        errors.designation = "Enter your designation.";
    }
    else if (values.department === "") {
        errors.department = "Enter your Department";
    }
    else if (values.subDepartment === "") {
        errors.subDepartment = "Enter your Sub Department";
    }
    else if (values.hod === "") {
        errors.hod = "Enter HOD name";
    }
    else if (values.dateOfJoining === "") {
        errors.dateOfJoining = "Enter your Date of Joining";
    }
    else if (values.lastWorkingDay === "") {
        errors.lastWorkingDay = "Enter your LAST WORKING DAY";
    }

//2
    else if (values.hardCopy === null) {
        errors.hardCopy = "Select one Option!";
    }
    else if (values.softCopy === null) {

        errors.softCopy = "Select one option !";
    }
    else if (values.officeKeyReturned === null) {

        errors.officeKeyReturned = "Select one option !";
    }
    else if (values.cashReturned === null) {

        errors.cashReturned = "Select one option !";
    }
    else if (values.catalogReturn === null) {

        errors.catalogReturn = "Select one option !";
    }
    else if (values.cabinetKeys === null) {

        errors.cabinetKeys = "Select one option !";
    }
    else if (values.milscellaneousFiles === null) {

        errors.milscellaneousFiles = "Select one option !";
    }


//3
    else if (values.loanClearance === null) {

        errors.loanClearance = "Select one option1 !";
    }
    else if (values.salaryClearance === null) {

        errors.salaryClearance = "Select one option !";
    }
    else if (values.loan === null) {

        errors.loan = "Select one option !";
    }

    
//4
    else if (values.laptopReturned === null) {

        errors.laptopReturned = "Select one option !";
    }
    else if (values.emailBlocked === null) {

        errors.emailBlocked = "Select one option !";
    }
    else if (values.passwordSoftwareDetails === null) {

        errors.passwordSoftwareDetails = "Select one option !";
    }
    else if (values.attendanceRecord === null) {

        errors.attendanceRecord = "Select one option !";
    }

//5
    else if (values.vehicleDocuments === null) {

        errors.vehicleDocuments = "Select one option !";
    }
    else if (values.shopDeduction === null) {

        errors.shopDeduction = "Select one option !";
    }
    else if (values.canteenPayDeduct === null) {

        errors.canteenPayDeduct = "Select one option !";
    }
    else if (values.accomodationClearance === null) {

        errors.accomodationClearance = "Select one option !";
    }
    else if (values.advanceClearance === null) {

        errors.advanceClearance = "Select one option !";
    }

//6
    else if (values.employeeCard === null) {

        errors.employeeCard = "Select one option !";
    }
    else if (values.businessCard === null) {

        errors.business_businessCardcard = "Select one option !";
    }
    else if (values.letterHeads === null) {

        errors.letterHeads = "Select one option !";
    }
    else if (values.mobileSim === null) {

        errors.mobileSim = "Select one option ! ";
    }
    else if (values.copies === null) {

        errors.copies = "Select one option !";
    }
    else if (values.resignationLetter === null) {

        errors.resignationLetter = "Select one option !";
    }
    else if (values.terminationLetter === null) {

        errors.terminationLetter = "Select one option !";
    }
    else if (values.experienceLetter === null) {

        errors.experienceLetter = "Select one option !";
    }
    else {
        errors = {};
    }
    return errors;
}
export default useValidateInfo;