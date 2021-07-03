import './errorModal.css';

const ErrorModal = ({description, close}) => {
    return (
        <div className='error-modal-box'>
            <div className='error-modal-block'>
                <div className='error-modal-title'>Қате!</div>
                <div className='error-modal-description'>{description}</div>
                <div className='button-2' onClick={close}>ОК</div>
            </div>
        </div>
    );
}

export default ErrorModal;