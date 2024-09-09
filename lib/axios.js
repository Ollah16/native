export const getQuestion = async () => {
    const url = `https://cross-platform.rp.devfactory.com/for_you`;
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
    };
    const method = 'GET';

    try {
        const response = await fetch(url, {
            method: method,
            headers: headers,
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json()
    } catch (error) {
        console.error('Error fetching content:', error);
        throw error;
    }
};

export const getAnswer = async (id) => {
    const url = `https://cross-platform.rp.devfactory.com/reveal?id=${id}`;
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
    };
    const method = 'GET';

    try {
        const response = await fetch(url, {
            method: method,
            headers: headers,
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json()
    } catch (error) {
        console.error('Error fetching content:', error);
        throw error;
    }
};