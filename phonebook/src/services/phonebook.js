import axios from "axios";

const baseUrl = "http://localhost:3001";

const getAll = () => {
  const req = axios.get(baseUrl);
  return req.then((res) => res.data);
};

const create = ({ newPerson }) => {
  const req = axios.post(baseUrl, newPerson);
  return req.then((res) => res.data);
};

const update = ({ id, newData }) => {
  const req = axios.put(`${baseUrl}/${id}`, newData);
  return req.then((res) => res.data);
};

const del = ({ id }) => axios.delete(`${baseUrl}/${id}`);

export default { getAll: getAll, create: create, update: update, del: del };
