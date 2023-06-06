import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Tstudent } from './StudentList';
import { Controller, useForm } from 'react-hook-form';

function StudentForm(props: any) {
    const { handleSubmit, control, reset } = useForm<Tstudent>({
        defaultValues: {
            student_fname: '',
            student_gpa: '',
            student_id: '',
            student_lname: ''
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
                            name="student_id"
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
                            name="student_fname"
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { ref, ...field }, fieldState: { error } }) => {
                                return (
                                    <Form.Control className='my-4' {...field} placeholder="First Name" />
                                );
                            }}
                        />
                        <Controller
                            name="student_lname"
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { ref, ...field }, fieldState: { error } }) => {
                                return (
                                    <Form.Control className='my-4' {...field} placeholder="Last Name" />
                                );
                            }}
                        />
                        <Controller
                            name="student_gpa"
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { ref, ...field }, fieldState: { error } }) => {
                                return (
                                    <Form.Control className='my-4' {...field} placeholder="GPA" />
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

export default StudentForm;