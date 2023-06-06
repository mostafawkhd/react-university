import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Tdepartment } from './DepartmentList';
import { Controller, useForm } from 'react-hook-form';

function DepartmentForm(props: any) {
    const { handleSubmit, control, reset } = useForm<Tdepartment>({
        defaultValues: {
            dep_id: '',
            dep_name: '',
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
                            name="dep_id"
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
                            name="dep_name"
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { ref, ...field }, fieldState: { error } }) => {
                                return (
                                    <Form.Control className='my-4' {...field} placeholder="Name" />
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

export default DepartmentForm;