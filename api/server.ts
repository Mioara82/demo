
export async function getMarketData() {
    const API_KEY = process.env.API_KEY_MARKET_DATA;
    const url = `https://pro-api.coingecko.com/api/v3/global`;
    const headers = {
        'Accept': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
    };

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: headers
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching market data:', error);
        throw error; // Rethrow the error to handle it elsewhere
    }
}



