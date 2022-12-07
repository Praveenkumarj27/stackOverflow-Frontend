import React from 'react'

const WidgetTags = () => {

    const tags = ['C','C++', 'HTML', 'CSS',  'NPM','BOOTSTRAP','NODE.JS','PYTHON','JAVASCRIPT','REACT', 'MONGODB','AWS','DS & ALGO']

    return (
        <div className='widget-tags'>
            <h4>Watched tags</h4>
            <div className='widget-tags-div'> 
                {
                    tags.map((tag) => (
                        <p key={tag}>{tag}</p>
                    ))
                }
            </div>
        </div>
    )
}

export default WidgetTags
