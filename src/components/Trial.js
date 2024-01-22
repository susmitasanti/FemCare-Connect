import React, { useEffect } from 'react';

function Trial() {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const queryParams = new URLSearchParams({
                    query: 'eiffel tower',
                    lang: 'en_US',
                    units: 'km'
                });

                const url = `https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?${queryParams.toString()}`;

                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': 'af0c12788amsh56d9ca29cbc784dp187cc0jsnfa73a4883579',
                        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
                    },
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const json = await response.json();

                // Check if the response contains valid data
                if (!json.data) {
                    throw new Error('Invalid data in the response');
                }

                console.log(json);
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array to run the effect only once

    return (
        <div>
            {/* Your component JSX */}
        </div>
    );
}

export default Trial;
