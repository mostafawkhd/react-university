import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Tinstructor } from './InstructortList';
import { Controller, useForm } from 'react-hook-form';

function InstructorForm(props: any) {
    const { handleSubmit, control, reset } = useForm<Tinstructor>({
        defaultValues: {
            ins_id: '',
            ins_fname: '',
            ins_lname:'',
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
                            name="ins_id"
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
                            name="ins_fname"
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
                            name="ins_lname"
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
                         <Button variant="primary" type='submit'>
                        Save Changes
                    </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default InstructorForm;