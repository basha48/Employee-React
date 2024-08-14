import { useSelector,useDispatch } from 'react-redux';
import EmployeeHeader from './EmployeeHeader';
import EmployeeRow from './EmployeeRow';
import EmployeeForm from './EmployeeForm';
import { useEffect } from 'react';
import { createLoadEmployeeAction } from '../state/employeesActions';

const EmployeeList = () => {


const dispatch = useDispatch();


    useEffect(()=>{
dispatch(createLoadEmployeeAction());
    },[])

    let employees = useSelector(state => state.employees);
    let wait = useSelector(state => state.wait);
    let errMsg =useSelector(state => state.errMsg);


    return (
        <section className="container-fluid p-2">
            <section className="col-11 mx-auto border border-primary p-4">
                <h4>Employee List </h4>

                {
                    wait && <div className='alert alert-info fw-bold p-4'> please wait while working with server..! </div>
                }

                {
                    errMsg && <div className='alert alert-danger  fw-bold  p-4'>{errMsg} </div>
                }

                <EmployeeHeader />

                <EmployeeForm />

                {
                    employees && employees.length > 0 && (
                        employees.map(c => c.isEditable ? <EmployeeForm c={c} key={c.id} /> : <EmployeeRow c={c} key={c.id} />)
                    )
                }

            </section>
        </section>
    );
};

export default EmployeeList;