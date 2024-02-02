import Input from './Input.jsx'
import Button from './Button.jsx';
import Modal from './Modal.jsx';
import { useRef } from 'react';

export default function NewProject({ onAdd, onCancel }) {

    const modal = useRef();

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const titleValue = title.current.value;
        const descriptionValue = description.current.value;
        const dueDateValue = dueDate.current.value;

        // validation
        if (titleValue === '' || descriptionValue === '' || dueDateValue === ''){
            modal.current.open();
            return;
        }

        onAdd({
            title: titleValue,
            description: descriptionValue,
            dueDate: dueDateValue
        });
    }

    return (
        <>
            <Modal ref={modal} buttonCaption="Close!">
                <p>Invalid</p>
            </Modal>
            <div>
                <menu>
                    <li><Button onClick={onCancel} >Cancel</Button></li>
                    <li><Button onClick={handleSave}>Save</Button></li>
                </menu>
                <div>
                    <Input type="text" ref={title} label="Title" />
                    <Input ref={description} label="Description" textarea />
                    <Input type="date" ref={dueDate} label="Due Date" />
                </div>
            </div>
        </>
    );
}