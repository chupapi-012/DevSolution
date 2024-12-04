import React from 'react';

const Grid: React.FC = () => {
    return (
        <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
                <div className="col-span-12 h-32 bg-gray-200 rounded-lg"></div> 
                <div className="col-span-9 h-32 bg-gray-200 rounded-lg"></div>  
                <div className="col-span-3 h-32 bg-gray-200 rounded-lg"></div> 
                <div className="col-span-8 h-32 bg-gray-200 rounded-lg"></div> 
                <div className="col-span-4 h-32 bg-gray-200 rounded-lg"></div> 
                <div className="col-span-6 h-32 bg-gray-200 rounded-lg"></div> 
                <div className="col-span-6 h-32 bg-gray-200 rounded-lg"></div> 
                <div className="col-span-4 h-32 bg-gray-200 rounded-lg"></div>  
                <div className="col-span-4 h-32 bg-gray-200 rounded-lg"></div>
                <div className="col-span-4 h-32 bg-gray-200 rounded-lg"></div>
                <div className="col-span-3 h-32 bg-gray-200 rounded-lg"></div>  
                <div className="col-span-3 h-32 bg-gray-200 rounded-lg"></div>
                <div className="col-span-3 h-32 bg-gray-200 rounded-lg"></div>
                <div className="col-span-3 h-32 bg-gray-200 rounded-lg"></div>
            </div>
        </div>
    );
};

export default Grid;
