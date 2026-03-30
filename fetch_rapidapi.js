const axios = require('axios');

const fetchApi = async () => {
    try {
        const response = await axios.get('https://footapi7.p.rapidapi.com/api/tournaments', {
            headers: {
                'X-RapidAPI-Key': '56eeaae0a2msh1f5a78362b65e64p1c49efjsn933601bf2799',
                'X-RapidAPI-Host': 'footapi7.p.rapidapi.com'
            }
        });
        console.log(JSON.stringify(response.data, null, 2).slice(0, 1000));
    } catch (error) {
        console.error("Error:", error.message);
        if (error.response) console.error(error.response.data);
    }
};

fetchApi();
