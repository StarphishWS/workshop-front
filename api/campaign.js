import api from "./api";
import { getToken } from "./auth";

export const getAllCampaigns = async () => {
  const token = await getToken();
  const response = await api.get("/campaigns", {
    headers: { Authorization: token }
  });
  return response.data;
};

export const postCampaign = async data => {
  const token = await getToken();
  const response = await api.post("/campaign", data, {
    headers: { Authorization: token }
  });
  return response.data;
};
