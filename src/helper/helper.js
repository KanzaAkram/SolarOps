// import Axios from "axios";

// Axios.defaults.baseURL =
//   import.meta.env.VITE_REACT_APP_SERVER_DOMAIN || "http://localhost:5000";

// export async function fetchPrediction(imageFile) {
//   try {
//     const formData = new FormData();
//     formData.append("file", imageFile); // Ensure imageFile is a valid File object

//     const ngrokUrl = "https://afc0-35-202-134-154.ngrok-free.app/predict/";
//     const response = await Axios.post(ngrokUrl, formData); // No need for Content-Type header

//     console.log("Prediction response:", response.data);
//     return response.data; // Return the response data directly
//   } catch (error) {
//     console.error("Error details:", error.response?.data.detail || error);
//     throw new Error(error.response?.data?.error || "Prediction failed");
//   }
// }


// helper.js
export const fetchPrediction = async (formData) => {
  try {
    const response = await fetch(
      "https://42ee-34-136-57-251.ngrok-free.app/predict",
      {
        // Replace with your ngrok URL
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      // Throw an error with the status code for better debugging
      throw new Error(`Server responded with status ${response.status}`);
    }

    // Parse the JSON response from the server
    return await response.json();
  } catch (error) {
    console.error("Error details:", error);
    throw error;
  }
};
