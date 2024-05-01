export const exerciseOptions = {
     
        method: 'GET',
        headers: {
        params: {limit: '10'},
        headers: {
          
          'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com',
          'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
        
      }
    }
};



export const fetchData = async (url, options)  => {
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    }