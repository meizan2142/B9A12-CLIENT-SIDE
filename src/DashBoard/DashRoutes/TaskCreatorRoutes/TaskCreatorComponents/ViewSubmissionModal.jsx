const ViewSubmissionModal = () => {
    return (
        <div>
            <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>View Submission</button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box" >
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <p>Saif Sultan Meizan</p>
                </div>
            </dialog>
        </div>
    );
};

export default ViewSubmissionModal;