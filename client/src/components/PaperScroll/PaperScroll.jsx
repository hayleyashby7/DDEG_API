import React from 'react';
import PropTypes from 'prop-types';

function PaperScroll({ contents }) {
    return (
        <div className='relative flex-col bg-orange-100 bg-[size:150%] text-red-950'>
            <span className='absolute bottom-full left-0 h-5 w-full rotate-180 bg-paper bg-bottom' />
            {contents && contents}
            <span className=' absolute left-0 top-full h-5 w-full bg-paper bg-bottom' />
        </div>
    );
}

export default PaperScroll;

PaperScroll.propTypes = {
    contents: PropTypes.node.isRequired,
};
