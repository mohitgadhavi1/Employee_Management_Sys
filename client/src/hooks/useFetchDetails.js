import { useState, useEffect } from "react";
import {
  employeeList as employeeListUrl,
  department as departmentListUrl,
} from "../services";
import { useDispatch, useSelector } from "react-redux";
import { initialEmployees } from "../store/features/employeeSlice";
import { initialDepartment } from "../store/features/departmentSlice";

export const useFetchEmployeeList = () => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const [employeeList, setEmployeeList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployeeList = async () => {
      setLoading(true);

      try {
        const response = await fetch(employeeListUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch employee list");
        }

        const data = await response.json();
        dispatch(initialEmployees(data));
        setEmployeeList(data);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching employee list:", error);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchEmployeeList();
    }
  }, [token]);

  return { employeeList, loading, error };
};

export const useFetchDepartmentList = () => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const [departmentList, setDepartmentList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDepartmentList = async () => {
      setLoading(true);

      try {
        const response = await fetch(departmentListUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch Department list");
        }

        const data = await response.json();
        console.log("data", data);
        dispatch(initialDepartment(data));
        setDepartmentList(data);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching Department list:", error);
      } finally {
        setLoading(false);
      }
    };
    if (token) {
      fetchDepartmentList();
    }
  }, [token]);

  return { departmentList, loading, error };
};
