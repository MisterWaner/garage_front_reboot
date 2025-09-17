export default function CarModal({ toggleModal }: { toggleModal: () => void }) {
    return (
        <div className='fixed inset-0 bg-slate-950/95 flex items-center justify-center z-50'>
            <div className='bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-2xl'>
                <h2 className='text-2xl font-bold mb-4'>Car Details</h2>
                <p>Here are more details about the car...</p>
                <button
                    className='mt-4 bg-slate-950 text-slate-50 hover:bg-slate-800 cursor-pointer active:scale-[0.99] font-semibold py-2 px-4 rounded-md'
                    onClick={toggleModal}
                >
                    Close
                </button>
            </div>
        </div>
    );
}
