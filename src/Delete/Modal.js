import "./Modal.css";

function Modal({ modalRef, handleSubmit, handleClose}){
    return(
        <>
            <div  className="pop" ref={modalRef}>
                <span>Are you sure you want to delete?</span>
                <div>
                    <button  onClick={handleSubmit}>Yes</button>
                    <button onClick={handleClose}>No</button>
                </div>
            </div>

        </>
    );
}

export default Modal;