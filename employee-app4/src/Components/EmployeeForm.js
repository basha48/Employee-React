import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createAddEmployeeAction, createUnEditEmployeeAction, createUpdateEmployeeAction } from '../state/employeesActions';

const EmployeeForm = ({ c }) => {

    let [id, setId] = useState(c ? c.id : 0);
    let [fullName, setFullName] = useState(c ? c.fullName : "");
    let [salary, setSalary] = useState(c ? c.salary : "");
    let [department, setDepartment] = useState(c ? c.department : "");
    let [role, setRole] = useState(c ? c.role : "");

    let isEditable = c ? true : undefined;

    const dispatch = useDispatch();

    const formSubmitted = event => {
        event.preventDefault();
        let employee = { id, fullName, salary, department, role };

        if (isEditable) {
            dispatch(createUpdateEmployeeAction(employee));
        } else {
            dispatch(createAddEmployeeAction(employee));
            clearAll();
        }
    };

    const clearAll = () => {
        setId(0);
        setFullName("");
        setSalary("");
        setDepartment("");
        setRole("");
    }

    const formReset = event => {
        isEditable ? dispatch(createUnEditEmployeeAction(id)) : clearAll();
    };

    return (
        <form className='row border-bottom border-primary p-2 text-center' onSubmit={formSubmitted}>
            <div className='col-1 text-end'>
                {id}
            </div>
            <div className='col text-start'>
                <input type="text" placeholder="Full Name" className="form-control"
                    value={fullName} onChange={e => setFullName(e.target.value)} />
            </div>
            <div className='col-2'>
                <input type="text" placeholder="salary" className="form-control"
                    value={salary} onChange={e => setSalary(e.target.value)} />
            </div>
            <div className='col-2'>
                <input type="text" placeholder="department" className="form-control"
                    value={department} onChange={e => setDepartment(e.target.value)} />
            </div>
            <div className='col-2'>
                <input type="text" placeholder="role" className="form-control"
                    value={role} onChange={e => setRole(e.target.value)} />
            </div>
            <div className='col-2'>
                <button className="btn btn-sm btn-primary me-1" >SAVE</button>
                <button type="button" className="btn btn-sm btn-danger" onClick={formReset}>CANCEL</button>
            </div>
        </form>
    );
};

export default EmployeeForm;