import axios from "axios";

const API_URL = "http://localhost:3000/api/exhibitions";

export const getExhibitions = () => {
  return axios.get(API_URL);
};

export const createExhibition = (exhibition) => {
  return axios.post(API_URL, exhibition);
};

export const deleteExhibition = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

export const updateExhibition = (id, exhibition) => {
  return axios.put(`${API_URL}/${id}`, exhibition);
};