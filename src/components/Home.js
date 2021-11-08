import React, {useState, useEffect} from 'react';
import "./Home.css";
import NotificationAlert from './NotificationAlert';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectOpenNotification } from '../features/notificationSlice';


function Home() {

    const [notifications, setNotifications] = useState([]);
    const notification =  useSelector(selectOpenNotification);
   

    useEffect( () => {
        setNotifications(notification)
        }, []);

    const action_button = (status) => {
        const arr = notifications.filter((item) => item.variant !== status);
        setNotifications(arr);
        console.log(notifications);
    }
    return (
        <div className="home">
            <div className="Home_actions">
                <Button className="Action_button" onClick={() => action_button("success")}  variant="outlined">Hide Success</Button>
                <Button className="Action_button" onClick={() => action_button("error")} variant="outlined">Hide Error</Button>
                <Button className="Action_button" onClick={() => action_button("warning")}  variant="outlined">Hide Warning</Button>
                <Button className="Action_button" onClick={() => action_button("info")}  variant="outlined">Hide Info</Button>
                <Button className="Action_button" onClick={() => action_button("others")}  variant="outlined">Hide Unstyled</Button>
            </div>
           

            { notifications.map((notify) => ( 
                <div className="Notification_inner">
                    <NotificationAlert key={notify} text={notify.text} serverity={notify.variant} duration={notify.duration}/>
                </div>
            ))}   
        </div>
    )
}

export default Home
