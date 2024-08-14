import { EMPLOYEES_ERR, EMPLOYEES_REFRESH, EMPLOYEES_WAIT, EDIT_EMPLOYEE, UNEDIT_EMPLOYEE } from "./employeesActions";

const initalState = () => ({
    employees: null,
    wait:null,
    errMsg:null
});

const employeesReducer = (state = initalState(),action) => {

    let {employees,errMsg,wait} = state;
    
    switch(action.type){

        case EMPLOYEES_WAIT: 
            wait=true;
            errMsg=null;
            break;

        case EMPLOYEES_ERR: 
            errMsg = action.errMsg;
            wait=false;
            break;

        case EMPLOYEES_REFRESH: 
            employees = action.employees;
            wait=false;
            errMsg=null;
            break;

        case EDIT_EMPLOYEE: 
            employees = employees.map(c => c.id!=action.id?c:{...c,isEditable:true})
            break;
        
        case UNEDIT_EMPLOYEE: 
            employees = employees.map(c => c.id!=action.id?c:{...c,isEditable:undefined})
            break;
    }

    return {employees,errMsg,wait};
};

export default employeesReducer;