import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
// import { useAuth } from "../../../hooks/useAuth"; 
import axios from "../../../lib/axios";


export default function TenantRegisterPage() {
  const [formData, setFormData] = useState({
    full_name: "",
    hospital_name: "",
    email: "",
    password: "",
    mobile_number: "",
    username: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (Object.values(formData).some((val) => val.trim() === "")) {
    toast.error("Please fill in all fields");
    return;
  }

  setIsLoading(true);

try {
    const baseURL =
        window.location.hostname === "localhost"
            ? "http://localhost:8000/"
            : "https://healthrxai.com/server/";
    // Get CSRF token from cookies or meta tag as required by your backend
    const csrfToken = (document.cookie.match(/csrftoken=([^;]+)/)?.[1]) || "";

    await axios.post(
      baseURL + "tenant/register",
      formData,
      {
        headers: {
          "X-CSRFToken": csrfToken,
        },
        withCredentials: true,
      }
    );
    toast.success("Tenant registered successfully!");
    navigate("/tenant/dashboard");
  } catch (error: any) {
    toast.error(
      error?.response?.data?.message || "Registration failed. Try again."
    );
  } finally {
    setIsLoading(false);
  }
};

  return (
    <div className="w-full px-6 py-10 lg:px-16 bg-gray-50 min-h-[calc(100vh-100px)] rounded-md">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Register New Hospital Tenant</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input label="Full Name" name="full_name" value={formData.full_name} onChange={handleChange} />
          <Input label="Hospital Name" name="hospital_name" value={formData.hospital_name} onChange={handleChange} />
          <Input label="Username" name="username" value={formData.username} onChange={handleChange} />
          <Input label="Email Address" type="email" name="email" value={formData.email} onChange={handleChange} />
          <Input label="Mobile Number" name="mobile_number" value={formData.mobile_number} onChange={handleChange} />
          <Input label="Password" type="password" name="password" value={formData.password} onChange={handleChange} />

          <div className="col-span-full">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 rounded-xl font-semibold shadow-md transition-all duration-200 transform hover:-translate-y-1 hover:shadow-xl"
            >
              {isLoading ? "Registering..." : "Register Hospital"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Input({
  label,
  name,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-shadow bg-white text-gray-900 placeholder-gray-400"
        placeholder={label}
        autoComplete="off"
      />
    </div>
  );
}

function post(arg0: string, formData: { full_name: string; hospital_name: string; email: string; password: string; mobile_number: string; username: string; }) {
    throw new Error("Function not implemented.");
}
