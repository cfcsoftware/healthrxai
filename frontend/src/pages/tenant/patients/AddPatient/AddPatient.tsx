import React from 'react';

const AddPatientForm: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Add New Patient</h2>
      {/* Add your form fields here */}
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Patient Name</label>
          <input
            type="text"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            placeholder="Enter patient name"
          />
        </div>
        {/* Add more fields like age, gender, contact, etc. */}
        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save Patient
        </button>
      </form>
    </div>
  );
};

export default AddPatientForm;
