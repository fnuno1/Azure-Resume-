// This event listener waits for the entire HTML document to be loaded and parsed before running the function inside it.
window.addEventListener('DOMContentLoaded', (event) => {
    // This calls the getVisitCount function to get the visit count when the page loads.
    getVisitCount();
});

// This line sets up a constant variable called functionAPI and assigns it an empty string.
// This variable is supposed to hold the URL of the API we want to call.
const functionAPI = '';

// This function is called getVisitCount. It doesn't take any parameters.
const getVisitCount = () => {
    // We start by setting a variable called count to 30. This is our default visit count.
    let count = 30;

    // We use the fetch function to make a network request to the URL stored in functionAPI.
    fetch(functionAPI)
        // When the fetch request completes, it returns a response. We use the .then() method to handle this response.
        .then(response => {
            // We convert the response to JSON format. This is because our API returns data in JSON format.
            return response.json();
        })
        // After converting the response to JSON, we use another .then() method to handle the JSON data.
        .then(response => {
            // We log a message to the console to indicate that the API was called successfully.
            console.log("Website called function API.");
            // We update the count variable with the value from the API response.
            count = response.count;
            // We find the HTML element with the ID "counter" and update its text to show the new count.
            document.getElementById("counter").innerText = count;
        })
        // This catch block handles any errors that occur during the fetch request.
        .catch(function(error){
            // We log the error message to the console.
            console.log(error);
        });
    
    // We return the count variable. This is the final visit count.
    return count;
}