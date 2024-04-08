import { IoSearch } from "react-icons/io5";


const Search = () => {
    return (
        <>
            <div className="flex">
              <div className="relative">
              <input type="text" className=" rounded-xl p-2 w-[300px]" placeholder="Tìm kiếm sách"/>
              <div className="absolute z-2 right-[5px] top-[10px]">
              <IoSearch className="text-black text-[20px] " />
              </div>
              </div>
         
            </div>
        </>
    );
};

export default Search;