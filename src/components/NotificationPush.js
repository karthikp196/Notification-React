import React, {useState, useEffect} from 'react';
import "./NotificationPush.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectNotification } from '../features/notificationSlice';

import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
  } from 'react-router-dom';


function NotificationPush() {

    const [text, setText] = useState('');
    const [variant, setVariant] = useState('');
    const [duration, setDuration] = useState('');
    const dispatch = useDispatch();

    // Updating Store with Notification information
    const create = () => {
        dispatch(selectNotification({
           text,
           variant,
           duration,
        }));
        alert("Success");
    }
    return (
        <div className="Notification_wrapper">
            <h4>Create Notification</h4>
            <div className="Notification">
              
                <TextField id="outlined-basic" onChange={(e) => setText(e.target.value)} label="Text" variant="outlined" />
                <TextField id="outlined-basic" onChange={(e) => setVariant(e.target.value)} label="Varient" variant="outlined" />
                <TextField id="outlined-basic" onChange={(e) => setDuration(e.target.value)} label="Duraion in Milliseconds" variant="outlined" />
                <Button className="Action_button" variant="outlined" onClick={create}>Create</Button>
            </div>
            <Link to="/"><Button className="Action_button" variant="outlined">Home</Button></Link>
        </div>
    )
}

export default NotificationPush
