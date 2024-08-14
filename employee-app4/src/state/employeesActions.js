import axios from "axios";

const api = "http://localhost:9998/employees";

//declare action types

export const EMPLOYEES_WAIT = "Employe Wait";
export const EMPLOYEES_ERR = "Employe Error";
export const EMPLOYEES_REFRESH = "Employe Refresh";
export const EDIT_EMPLOYEE = "Edit Employee";
export const UNEDIT_EMPLOYEE = "UnEdit Employee";

//declare action creators




export const createEmployeesErrorAction = errMsg => ({type:EMPLOYEES_ERR,errMsg});
export const createEmployeesRefreshAction = employees=> ({type:EMPLOYEES_REFRESH,employees});
export const createEmployeesWaitAction = () => ({type:EMPLOYEES_WAIT});
export const createEditEmployeeAction = id => ({type:EDIT_EMPLOYEE, id});
export const createUnEditEmployeeAction = id => ({type:UNEDIT_EMPLOYEE, id});


//DECLARE thuck action creator



export const createLoadEmployeeAction = employee => (dispatch=>{
    dispatch(createEmployeesWaitAction());
    axios.get(api)
    .then(resp =>dispatch(createEmployeesRefreshAction(resp.data)))
    .catch(resp=>{console.error(resp);dispatch(createEmployeesErrorAction("unable to load data! please retry later "))})
});

export const createAddEmployeeAction = employee => (dispatch=>{
    dispatch(createEmployeesWaitAction());
    axios.post(api,employee)
    .then(resp =>dispatch(createLoadEmployeeAction()))
    .catch(resp=>{console.error(resp);dispatch(createEmployeesErrorAction("unable to save data! please retry later "))})
});
export const createUpdateEmployeeAction = employee=> (dispatch=>{
    dispatch(createEmployeesWaitAction());
    axios.put(api+"/"+employee.id,employee)
    .then(resp =>dispatch(createLoadEmployeeAction()))
    .catch(resp=>{console.error(resp);dispatch(createEmployeesErrorAction("unable to update data! please retry later "))})



});
export const createDeleteEmployeeAction = id=> (dispatch=>{
    dispatch(createEmployeesWaitAction());
    axios.delete(api+"/"+id)
    .then(resp =>dispatch(createLoadEmployeeAction()))
    .catch(resp=>{console.error(resp);dispatch(createEmployeesErrorAction("unable to delete data! please retry later "))})


});