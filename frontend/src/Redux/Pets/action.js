import { DATA_ERROR, DATA_SUCCESS, DATA_REQUEST } from "./actionType";
import axios from "axios";

// Create axios instance with base URL
const api = axios.create({
  baseURL: 'https://pethub-u60q.onrender.com'
});

export const getAllPets = (paramObj) => async (dispatch) => {
  try {
    // Log the start of the API call
    console.log("Starting API call with params:", paramObj);

    // Dispatch request action
    dispatch({ type: DATA_REQUEST });

    // Make the API call
    const response = await api.get('/pet', {
      params: paramObj.params
    });

    // Log the API response
    console.log("API Response:", response.data);

    // If no filters are applied
    if (!paramObj.params.gender && !paramObj.params.breed && 
        !paramObj.params.age && !paramObj.params.size) {
      dispatch({ type: DATA_SUCCESS, payload: response.data });
      return;
    }

    // Filter the data based on params
    let filteredData = response.data;

    if (paramObj.params.gender) {
      const genders = paramObj.params.gender.split(',');
      filteredData = filteredData.filter(pet => genders.includes(pet.gender));
    }

    if (paramObj.params.breed) {
      const breeds = paramObj.params.breed.split(',');
      filteredData = filteredData.filter(pet => breeds.includes(pet.breed));
    }

    if (paramObj.params.age) {
      const ages = paramObj.params.age.split(',');
      filteredData = filteredData.filter(pet => ages.includes(pet.age));
    }

    if (paramObj.params.size) {
      const sizes = paramObj.params.size.split(',');
      filteredData = filteredData.filter(pet => sizes.includes(pet.size));
    }

    // Log the filtered data
    console.log("Filtered Data:", filteredData);

    // Dispatch success with filtered data
    dispatch({ type: DATA_SUCCESS, payload: filteredData });

  } catch (error) {
    // Log any errors
    console.error("API Error:", error);
    dispatch({ type: DATA_ERROR });
  }
};

export const getOnePet = (id) => async (dispatch) => {
  try {
    dispatch({ type: DATA_REQUEST });
    const response = await api.get(`/pet/${id}`);
    dispatch({ type: DATA_SUCCESS, payload: response.data });
  } catch (error) {
    console.error("Error fetching pet details:", error);
    dispatch({ type: DATA_ERROR });
  }
};
