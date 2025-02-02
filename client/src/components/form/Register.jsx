import { Uicontext } from "../../contexts/UiContext";
import { useContext, useState, useEffect } from "react";
import { useFormik } from "formik";
import { validateFormRegister } from "../validateForm/Form";
import { RegisterAuth } from '../../services/auth/RegisterAuth';
import Success from "../notification/Success";
import Error from "../notification/error";
import { LuEye, LuEyeOff } from "react-icons/lu";

const Register = () => {
    const { handleDisplayLogin } = useContext(Uicontext);
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema: validateFormRegister,
        onSubmit: async (values) => {
            try {
                const response = await RegisterAuth.register(values);
                console.log(response);
                setSuccess(true);
                formik.resetForm();

            } catch (error) {
                setErrorMessage(error.response.data.message);
            }
        }
    });
    const [showSuccess, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    useEffect(() => {
        if (showSuccess) {
            setTimeout(() => {
                setSuccess(false);
                handleRegisterSuccess();
            }, 1500);
        }
    }, [showSuccess]);


    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const toggleCofirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleRegisterSuccess = () => {
        handleDisplayLogin(true);
    };

    return (
        <>
            {showSuccess && <Success message="Đăng ký thành công" />}
            {errorMessage && <Error message={errorMessage} />}
            <div className="flex w-[30%] flex-col justify-center px-6 py-8 lg:px-8 bg-[#1A1918] opacity-[0.9] rounded-lg fixed z-10 top-[5%] left-[35%]">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm pb-3">
                    <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-white">
                        Đăng Ký Tài Khoản
                    </h2>
                    <span className="text-white block text-center text-[14px]">
                        Đăng ký để mua và theo dõi quá trình đọc sách
                    </span>
                </div>
                <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" method="POST" onSubmit={formik.handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                                Email
                            </label>
                            <div className="mt-2 ">
                                <input
                                    placeholder="Email"
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                />

                                {formik.errors.email && (
                                    <p className="text-red-500">{formik.errors.email}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                                    Mật Khẩu
                                </label>

                            </div>
                            <div className="mt-2 relative">
                                <input
                                    placeholder="Mật khẩu"
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="current-password"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                />
                                <div className="absolute top-[10px] right-[20px]" onClick={togglePasswordVisibility}>
                                    {showPassword ? <LuEye /> : <LuEyeOff />}
                                </div>
                                {formik.errors.password && (
                                    <p className="text-red-500">{formik.errors.password}</p>
                                )}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-white">
                                Nhập lại mật khẩu
                            </label>
                            <div className="mt-2 relative">
                                <input

                                    placeholder="Nhập lại mật khẩu"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type={showConfirmPassword ? "text" : "password"}
                                    autoComplete="password"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4"
                                    value={formik.values.confirmPassword}
                                    onChange={formik.handleChange}
                                />
                                <div className="absolute top-[10px] right-[20px]" onClick={toggleCofirmPasswordVisibility}>
                                    {showConfirmPassword ? <LuEye /> : <LuEyeOff />}
                                </div>
                                {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                                    <p className="text-red-500">{formik.errors.confirmPassword}</p>
                                )}
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"

                            >
                                Đăng Ký
                            </button>

                        </div>
                    </form>

                    <div className="pt-4">
                        <div className="flex justify-center py-3">
                            <h2 className="text-white">Hoặc đăng nhập với</h2>
                        </div>
                        <div className="flex justify-center items-center gap-2">
                            <div>
                                <button className="bg-blue-500 font-bold text-white p-2 rounded-full w-[150px]">Facebook</button>
                            </div>
                            <div>
                                <button className="w-[150px] text-white border-2 border-red-500 p-2 rounded-full">Google</button>
                            </div>
                        </div>
                        <div className="flex justify-center pt-3">
                            <button className="text-white" onClick={handleDisplayLogin}>Đăng nhập</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;