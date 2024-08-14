import { useDispatch } from 'react-redux';
import { createDeleteEmployeeAction, createEditEmployeeAction } from "../state/employeesActions";

const EmployeeRow = ({ c }) => {

    const dispatch = useDispatch();

    return (
        <div className='row border-bottom border-primary p-2 text-center'>
            <div className='col-1 text-end'>{c.id}</div>
            <div className='col text-start'>{c.fullName}</div>
            <div className='col-2'>{c.salary}</div>
            <div className='col-2'>{c.department}</div>
            <div className='col-2'>{c.role}</div>
            <div className='col-2'>
                <button type="button" className="btn btn-sm btn-secondary me-1" onClick={e => dispatch(createEditEmployeeAction(c.id))}>EDIT</button>
                <button type="button" className="btn btn-sm btn-danger" onClick={e => dispatch(createDeleteEmployeeAction(c.id))}>DELETE</button>
            </div>
        </div>
    );
};

export default EmployeeRow;