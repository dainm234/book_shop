import CheckButton from "../components/button/CheckButton";
import DeleteButton_square from "../components/button/DeleteButton_square.jsx";
// import { getDataUser } from "../service/userService";

// getDataUser()
const User = () => {
    return (
        <>
            <div className="flex-1  undefine ">
                <table className=" w-full ">
                    <thead className="bg-[#FFFFFF] h-[50px]">
                        <tr >
                            <th></th>
                            <th className="text-left w-[150px]">Tên</th>
                            <th className="text-left w-[150px]">Admin</th>
                            <th className="text-left w-[150px]" >Trạng thái</th>
                            <th className="text-left w-[150px] pl-[50px]">Ngày tạo</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border-b-0 lg:w-6 before:hidden p-4">
                                <div className="w-24 h-24 mx-auto lg:w-6 lg:h-6">
                                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Howell-Hand" alt="Howell Hand" className="rounded-full block h-auto w-full max-w-full bg-gray-100 dark:bg-slate-800" />
                                </div>
                            </td>
                            <td data-label="Name" className="text-left">Howell Hand</td>
                            <td data-label="Company">Kiehn-Green</td>
                            <td data-label="City">Emelyside</td>



                            <td data-label="Created" className="lg:w-1 whitespace-nowrap pl-[50px]">
                                <small className="text-gray-500 dark:text-slate-400">Mar 3, 2023</small>
                            </td>
                            <td className="before:hidden lg:w-1 whitespace-nowrap">
                                <div className="flex items-center justify-start lg:justify-end undefined -mb-3 flex-nowrap">
                                    <CheckButton />
                                    <DeleteButton_square />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
                    <div className="flex flex-col md:flex-row items-center justify-between py-3 md:py-0">
                        <div className="flex items-center justify-start undefined -mb-3 flex-wrap">
                            <button className="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-gray-100 dark:border-slate-800 ring-gray-200 dark:ring-gray-500 bg-gray-200 dark:bg-slate-700 hover:bg-gray-200 hover:dark:bg-slate-700 mr-3 last:mr-0 mb-3 undefined text-sm p-1" type="button">
                                <span className="px-2">1</span>
                            </button>
                            <button className="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-white dark:border-slate-900 ring-gray-200 dark:ring-gray-500 bg-white text-black dark:bg-slate-900 dark:text-white hover:bg-gray-100 hover:dark:bg-slate-800 mr-3 last:mr-0 mb-3 undefined text-sm p-1" type="button">
                                <span className="px-2">2</span>
                            </button>
                            <button className="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-white dark:border-slate-900 ring-gray-200 dark:ring-gray-500 bg-white text-black dark:bg-slate-900 dark:text-white hover:bg-gray-100 hover:dark:bg-slate-800 mr-3 last:mr-0 mb-3 undefined text-sm p-1" type="button">
                                <span className="px-2">3</span>
                            </button>
                            <button className="inline-flex justify-center items-center whitespace-nowrap focus:outline-nonetransition-colors focus:ring duration-150 border cursor-pointer rounded border-white dark:border-slate-900 ring-gray-200 dark:ring-gray-500 bg-white text-black dark:bg-slate-900 dark:text-white hover:bg-gray-100 hover:dark:bg-slate-800 mr-3 last:mr-0 mb-3 undefined text-sm p-1" type="button">
                                <span className="px-2">4</span>
                            </button>
                        </div>
                        <small className="mt-6 md:mt-0">Page 1 of 4</small>
                    </div>
                </div>
            </div>
        </>
    );
};

export default User;