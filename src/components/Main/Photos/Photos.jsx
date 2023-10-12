import React from "react";
import { useState, useEffect } from "react";
import './Photos.css';

const Photos = () => {
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(json => {
                setPhotos(json)
            })
    }, [])
    return (
        <section>
            {photos.map((photo) => {
                return (
                    <div className="photo" key={photo.id}>
                        <img src={photo.thumbnailUrl} />
                    </div>
                )
            }
            )}
        </section>
    )
};
export default Photos;