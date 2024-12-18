import axios from "axios";
export const axiosJWT = axios.create();
export const signUp = async (data) => {
  const res = await axios.post(
    `${process.env.REACT_APP_API}user/sign-up`,
    data
  );
  return res.data;
};
export const loginUser = async (data) => {
  const res = await axios.post(`${process.env.REACT_APP_API}user/login`, data);
  return res.data;
};
export const getDetailUser = async (id, access_token) => {
  const res = await axiosJWT.get(
    `${process.env.REACT_APP_API}user/get-details/${id}`,
    {
      headers: {
        token: `Bearer ${access_token}`,
      },
    }
  );
  return res.data;
};
