// Example 1: Async function with await
async function fetchData() {
    // Simulate fetching data from an API
    return new Promise((resolve) => {
        setTimeout(() => {
           console.log('hello i am data');
        }, 10000);
    });
}

async function processData() {
    try {
        // Using await to wait for the fetchData() function to complete
        const data = await fetchData();
        console.log(data); 
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

processData();
