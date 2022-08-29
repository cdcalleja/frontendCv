import axios from "axios";
import { useState, useEffect } from "react";
const useAxios = (endPoint) => {
  const [data, setData] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getInfo = async () => {
      try {
        const res = await axios.get(endPoint);
        setData(res.data.experiencias);
      } catch (error) {
        setErrMsg(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getInfo();
  }, [endPoint]);
  return { data, errMsg, isLoading };
};
export default useAxios;