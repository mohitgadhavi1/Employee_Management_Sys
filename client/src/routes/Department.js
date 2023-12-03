
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDepartment, updateDepartment, deleteDepartment } from '../store/features/departmentSlice';

const Department = () => {
  const [newDepartment, setNewDepartment] = useState('');
  const [editDepartment, setEditDepartment] = useState(null);

  const dispatch = useDispatch();
  const departments = useSelector((state) => state.department);
  console.log(departments)

  const handleAddDepartment = () => {
    dispatch(addDepartment(newDepartment));
    setNewDepartment('');
  };

  const handleEditDepartment = (id, name) => {
    setEditDepartment(id);
    setNewDepartment(name);
  };

  const handleUpdateDepartment = () => {
    dispatch(updateDepartment({ id: editDepartment, name: newDepartment }));
    setEditDepartment(null);
    setNewDepartment('');
  };

  const handleDeleteDepartment = (id) => {
    dispatch(deleteDepartment(id));
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">List of Departments</h2>

      <ul>
        {departments.map((department) => (
          <li key={department.id} className="mb-4">
            {editDepartment === department.id ? (
              <>
                <input
                  className="border rounded-md py-2 px-3"
                  type="text"
                  value={newDepartment}
                  onChange={(e) => setNewDepartment(e.target.value)}
                />
                <button
                  className="bg-blue-500 text-white rounded-md py-2 px-4 ml-2 hover:bg-blue-600"
                  onClick={handleUpdateDepartment}
                >
                  Update
                </button>
              </>
            ) : (
              <>
                <span>{department.name}</span>
                <button
                  className="bg-yellow-500 text-white rounded-md py-2 px-4 ml-2 hover:bg-yellow-600"
                  onClick={() => handleEditDepartment(department.id, department.name)}
                >
                  Edit
                </button>
              </>
            )}

            <button
              className="bg-red-500 text-white rounded-md py-2 px-4 ml-2 hover:bg-red-600"
              onClick={() => handleDeleteDepartment(department.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <input
          className="border rounded-md py-2 px-3"
          type="text"
          placeholder="Enter department name"
          value={newDepartment}
          onChange={(e) => setNewDepartment(e.target.value)}
        />
        <button
          className="bg-green-500 text-white rounded-md py-2 px-4 ml-2 hover:bg-green-600"
          onClick={handleAddDepartment}
        >
          Add Department
        </button>
      </div>
    </div>
  );
};

export default Department;
