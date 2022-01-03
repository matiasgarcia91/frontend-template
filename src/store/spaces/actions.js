import { apiUrl } from "../../config/constants";
import axios from "axios";
import { appLoading, appDoneLoading } from "../appState/actions";

const spacesFetched = (spaces) => {
  return {
    type: "SPACES_FETCHED",
    payload: spaces,
  };
};
const spacesDetailsFetched = (details) => {
  return {
    type: "SPACE_DETAILS_FETCHED",
    payload: details,
  };
};

export const fetchSpaces = () => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.get(`${apiUrl}/spaces`);

      dispatch(spacesFetched(response.data));
      dispatch(appDoneLoading());
    } catch (error) {
      console.log(error.message);
      dispatch(appDoneLoading());
    }
  };
};

export const fetchSpaceDetails = (id) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.get(`${apiUrl}/spaces/${id}`);

      dispatch(spacesDetailsFetched(response.data));
      dispatch(appDoneLoading());
    } catch (error) {
      console.log(error.message);
      dispatch(appDoneLoading());
    }
  };
};
