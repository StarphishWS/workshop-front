import api from "./api";
import { getToken } from "./auth";

export const getEmployeesByCampaignId = async id => {
  const token = await getToken();
  const response = await api.get(`/campaign/${id}/employees`, {
    headers: { Authorization: token }
  });
  return response.data;
};

export const putEmployeesById = async (id, step) => {
    const response = await api.put(`/employee/${id}/${step}`)
    return response.data; 
} 
