import React from 'react';

//imagesをAppから受け取る
const ImageList = (props) => {
    const images = props.images.map((image) => {
        return (
            <a href={image.pageURL} key={image.id} target='_brank'
             rel='noopener noreferrer' className='ui midium image'>
                <img src={image.webformatURL} alt={image.tags} />
            </a>
        );
    });

    return (
        <div>{images}</div>
    );
};

export default ImageList;