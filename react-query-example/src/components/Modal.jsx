const Modal = ({ children, showModal, handleModal }) => {
    if (!showModal) return null;
    return (
        <div className="fixed w-screen h-screen z-10 inset-0 flex justify-center items-center backdrop-blur-sm bg-black/10 aspect-square">
            <div className="relative bg-white p-6 rounded-lg shadow-md ">
                <button
                    onClick={handleModal}
                    className="absolute top-2 right-2 text-black text-2xl cursor-pointer"
                >
                    x
                </button>

                {children}
            </div>
        </div>
    );
};

export default Modal;
