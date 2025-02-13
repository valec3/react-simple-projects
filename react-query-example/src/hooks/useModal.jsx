import { useState } from 'react';

const useModal = () => {
    const [showModal, setShowModal] = useState(false);
    const handleModal = () => setShowModal(!showModal);
    return { showModal, handleModal };
};
export { useModal };
