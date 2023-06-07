import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Tcourse, TcourseFormData } from './CourseList';
import { Controller, useForm } from 'react-hook-form';
import { Tinstructor } from '../instructor/InstructortList';
import { Tdepartment } from '../department/DepartmentList';

type TCourseFormProps = {
    instructors: Array<Tinstructor>,
     departments: Array<Tdepartment>,
    show: boolean,
    handleClose: () => void
    onSubmit:(data:TcourseFormData,event:any)=>Promise<void>

}

function CourseForm(props: TCourseFormProps) {
    const { handleSubmit, control, reset } = useForm<TcourseFormData>({
        defaultValues: {
            crs_id: '',
            crs_title: '',
            dep_id: '',
            ins_id: ''
        },
    });
    return (
        <div
            className="modal"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate onSubmit={handleSubmit(props.onSubmit)}>
                        <Controller
                            name="crs_id"
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { ref, ...field }, fieldState: { error } }) => {
                                return (
                                    <Form.Control className='my-4' {...field} placeholder="id" />
                                );
                            }}
                        />
                        <Controller
                            name="crs_title"
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { ref, ...field }, fieldState: { error } }) => {
                                return (
                                    <Form.Control className='my-4' {...field} placeholder="Title" />
                                );
                            }}
                        />
                             <Controller
                            name="ins_id"
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { ref, ...field }, fieldState: { error } }) => {
                                return (
                                    <Form.Select className='my-4' {...field} placeholder="Title" >
                                        <option disabled value={''}>Instructor</option>
                                        {props.instructors.map((item,index)=><option key={index} value={item.ins_id}>{item.ins_fname+' '+item.ins_lname}</option>)}
                                    </Form.Select>
                                );
                            }}
                        />
                               <Controller
                            name="dep_id"
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { ref, ...field }, fieldState: { error } }) => {
                                return (
                                    <Form.Select className='my-4' {...field} placeholder="Title" >
                                        <option disabled value={''}>Department</option>
                                        {props.departments.map((item,index)=><option key={index} value={item.dep_id}>{item.dep_name}</option>)}
                                    </Form.Select>
                                );
                            }}
                        />
                        <Button variant="primary" type='submit'>
                            Save Changes
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default CourseForm;