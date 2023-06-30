import React, { useState, useEffect } from "react"
import $ from "jquery"
import axios from "axios"

import { useDrag } from 'react-dnd';

import "./Map Page.scss"

const DraggableImage = ({ imageSrc }) => {
    const [{ opacity }, drag] = useDrag({
        item: { type: 'image' },
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0.5 : 1,
        }),
    });

    return (
        <img
            ref={drag}
            src={imageSrc}
            alt="Draggable Image"
            style={{ opacity, cursor: 'move' }}
        />
    );
};

export default function MapPage() {
    const [img, setimg] = useState("");

    useEffect(() => {
        $(async function () {
            console.log("-------------Start-------------")
            console.log(
                localStorage.getItem("maps"),
                localStorage.getItem("current map")
            )

            try {

                const apiStatus = await axios.get(`${process.env.REACT_APP_API_URI}/api`);
                console.log('API Status:', apiStatus.data.message);

                // const postResponse = await axios.post(`/api/data`, { name: 'John', age: 25 });
                // console.log('POST response:', postResponse.data);

                // const putResponse = await axios.put(`/api/data/1`, { name: 'Jane', age: 30 });
                // console.log('PUT response:', putResponse.data);

                // const deleteResponse = await axios.delete(`/api/data/1`);
                // console.log('DELETE response:', deleteResponse.data);

            } catch (error) {
                console.log('API Status:', "Something went wrong.");
                console.error('Error:', error);
            }
        });
    }, [])

    return (
        <>
            {
                img === "" ?
                    <div></div> :
                    <img src={img} alt="Map" className="map-page" />
            }
            <nav className="map-page-party">
                <ul className="map-page-party-list">
                    <li className="map-page-party-list-item">a</li>
                    <li className="map-page-party-list-item"></li>
                    <li className="map-page-party-list-item"></li>
                </ul>
            </nav>
            <div className="map-page-tokens">
                a
            </div>
        </>
    )
}