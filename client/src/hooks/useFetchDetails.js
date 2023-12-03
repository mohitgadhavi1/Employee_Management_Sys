// src/hooks/useFetchEmployeeList.js
import { useState, useEffect } from "react";
import { employeeList as employeeListUrl ,department as departmentListUrl} from "../services";



export const useFetchEmployeeList = () => {
  const [employeeList, setEmployeeList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployeeList = async () => {
      setLoading(true);

      try {
        const response = await fetch(employeeListUrl);

        if (!response.ok) {
          throw new Error("Failed to fetch employee list");
        }

        const data = await response.json();
        setEmployeeList(data);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching employee list:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployeeList();
  }, []);

  return { employeeList, loading, error };
};


export const useFetchDepartmentList = () => {
    const [departmentList, setDepartmentList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchDepartmentList = async () => {
        setLoading(true);
  
        try {
          const response = await fetch(departmentListUrl);
  
          if (!response.ok) {
            throw new Error("Failed to fetch Department list");
          }
  
          const data = await response.json();
          setDepartmentList(data);
        } catch (error) {
          setError(error.message);
          console.error("Error fetching Department list:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchDepartmentList();
    }, []);
  
    return { departmentList, loading, error };
  };