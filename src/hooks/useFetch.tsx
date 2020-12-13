import React from 'react';

export const useFetch = (url: string) => {
    const [data, setData] = React.useState('');

    React.useEffect(() => {
        const fetchData = async () => 
            fetch(url)
                .then(response => response.text())
                .then(result => setData(result));

        fetchData();
    }, [url]);

    return { data };
};