import axios from "axios";
export const axiosJWT = axios.create();
export const signUp = async (data) => {
  const res = await axios.post(
    `${process.env.REACT_APP_API}user/sign-up`,
    data
  );
  return res.data;
};
