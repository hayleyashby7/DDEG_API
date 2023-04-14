import React from 'react';
import PropTypes from 'prop-types';

function PaperScroll({ contents }) {
    return (
        <div className='relative flex-col bg-orange-100 bg-[size:150%] text-red-950 before:absolute before:bottom-full before:left-0 before:h-5 before:w-full before:rotate-180 before:bg-paper before:bg-bottom after:absolute after:left-0 after:top-full after:h-5 after:w-full after:bg-paper after:bg-bottom'>
            {contents && contents}
        </div>
    );
}

export default PaperScroll;

PaperScroll.propTypes = {
    contents: PropTypes.node.isRequired,
};
