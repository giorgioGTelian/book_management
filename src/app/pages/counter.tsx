import { Button } from '@/components/ui/button';
import React, { useState } from 'react';


const Counter = () => {
    const [count, setCount] = useState(0);

    const handleButtonClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <Button onClick={handleButtonClick}>Click me</Button>
            <p>Count: {count}</p>
        </div>
    );
};

export default Counter;
