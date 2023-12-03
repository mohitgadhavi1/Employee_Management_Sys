import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const useAuthToken = () => {
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    const token = Cookies.get("authToken");

    setAuthToken(token || null);
  }, []);

  return authToken;
};

export default useAuthToken;
