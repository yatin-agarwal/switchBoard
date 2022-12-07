import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Time = () => {

    const [date, setDate] = React.useState(new Date());

    React.useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);

        return function cleanup() {
            clearInterval(timerID);
        };
    });

    function tick() {
        setDate(new Date());
    }

    return (
        date.toLocaleTimeString()
    )
};
export default Time;