import { DATA_ERROR, DATA_SUCCESS, DATA_REQUEST } from "./actionType";
import axios from "axios";

export const getAllPets = (paramObj) => (dispatch) => {
  dispatch({ type: DATA_REQUEST });
  axios
    .get(`https://pethub-u60q.onrender.com/pet`)
    .then((res) => {
      let mainData = []
      // console.log(paramObj.params.gender);
      if (paramObj.params.gender == null && paramObj.params.age == null && paramObj.params.breed == null&& paramObj.params.size == null) {
        dispatch({ type: DATA_SUCCESS, payload: res.data });
      }
      else {
        if (paramObj.params.gender !== null) {
          const newBreeds = paramObj.params.gender.split(",")
          let newData = []
          newBreeds.forEach(element => {
            const temp = res.data.filter(
              (el) => el.gender === element
            )
            newData = [...temp, ...newData]
          });
          mainData = mainData.concat(newData)
        }
        if (paramObj.params.age !== null) {
          const newBreeds = paramObj.params.age.split(",")
          let newData = []
          newBreeds.forEach(element => {
            if (mainData.length == 0) {
              const temp = res.data.filter(
                (el) => el.age === element
              )
              newData = [...temp, ...newData]
            }
            else {
              const temp = mainData.filter(
                (el) => el.age === element
              )
              newData = [...temp, ...newData]
            }
          });
          mainData = newData
        }
        if (paramObj.params.breed !== null) {
          const newBreeds = paramObj.params.breed.split(",")
          let newData = []
          newBreeds.forEach(element => {
            if (mainData.length == 0) {
              const temp = res.data.filter(
                (el) => el.breed === element
              )
              newData = [...temp, ...newData]
            }
            else {
              const temp = mainData.filter(
                (el) => el.breed === element
              )
              newData = [...temp, ...newData]
            }
          });
          mainData = newData
        }
        if (paramObj.params.size !== null) {
          const newBreeds = paramObj.params.size.split(",")
          let newData = []
          newBreeds.forEach(element => {
            if (mainData.length == 0) {
              const temp = res.data.filter(
                (el) => el.size === element
              )
              newData = [...temp, ...newData]
            }
            else {
              const temp = mainData.filter(
                (el) => el.size === element
              )
              newData = [...temp, ...newData]
            }
          });
          mainData = newData
        }
        // else if (paramObj.params.breed) {
        //       // console.log(paramObj.params.breed)
        //       const newBreeds=paramObj.params.breed.split(",")
        //       // console.log(newBreeds)
        //       let newData=[]
        //       newBreeds.forEach(element => {
        //         const temp=res.data.filter(
        //           (el) => el.breed === element
        //         )
        //         newData=[...temp,...newData]
        //       });
        //       // console.log(newData)
        //       dispatch({
        //         type: DATA_SUCCESS,
        //         payload: newData
        //       });
        //     } else if (paramObj.params.age) {
        //       dispatch({
        //         type: DATA_SUCCESS,
        //         payload: res.data.filter((el, i) => el.age === paramObj.params.age),
        //       });
        //     } else if (paramObj.params.size) {
        //       dispatch({
        //         type: DATA_SUCCESS,
        //         payload: res.data.filter((el, i) => el.size === paramObj.params.size),
        //       });
        //     } else {
        // let filteredData=new Set(mainData)
        // console.log(filteredData)
        dispatch({ type: DATA_SUCCESS, payload: mainData });
      }
    })
    .catch((err) => {
      dispatch({ type: DATA_ERROR });
    });


};
export const getOnePet = (id) => (dispatch) => {
  console.log(id);
  dispatch({ type: DATA_REQUEST });
  axios
    .get(`https://pethub-u60q.onrender.com/pet/${id}`)
    .then((data) => {
      dispatch({ type: DATA_SUCCESS, payload: data.data });
      console.log(data.data);
    })
    .catch((err) => {
      dispatch({ type: DATA_ERROR });
    });
};
