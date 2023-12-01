import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const StarModal = ({ isOpen, onRequestClose, onStar }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleStar = () => {
        onStar(name, email);
        onRequestClose();
    };

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            maxWidth: '400px',
            width: '100%',
            padding: '20px',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
            contentLabel="Star Product Modal"
        >
            <h2 className="text-xl font-semibold mb-4 text-center">Star This Product</h2>
            <form onSubmit={handleStar}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="text-center">
                    <button
                        className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded-md"
                        onClick={onRequestClose}
                    >
                        Close
                    </button>
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md ml-2"
                        type='submit'>⭐️
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default StarModal;
