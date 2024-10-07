import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


function Admin() {
    const { } = useSelector((state) => state.post);
    const dispatch = useDispatch();

    const [user, setuser] = useState({});
    const navigate = useNavigate()


    useEffect(() => {
        // const localUser = JSON.parse(localStorage.getItem("user")) || {};
        // setuser(localUser);
        // if(localUser.role !== "admin"){
        //   navigate('/')
        // }
    }, []);


    const [token, settoken] = useState({});
    useEffect(() => {
        const localtoken = JSON.parse(localStorage.getItem("token")) || {};
        settoken(localtoken);
    }, []);


    // useEffect(() => {
    //     dispatch(getData())
    // },[deletItem])





    useEffect(() => {
        dispatch(getData());
    }, [deletItem]);

    useEffect(() => {
        dispatch(getData());
    }, []);

    console.log(allData, "from admin");
    return (
        <div>
            <div className="w-full bg-[#a6e4e7] px-5 py-1">
                <div className="w-full h-[15vh] shadow-sm rounded-lg bg-[#488b8f]  px-10 flex items-center gap-10">
                    <div className="w-max ">
                        <h1 className="text-[30px] text-[#c1e0f5]">Admin Panel</h1>
                        <h1 className="text-xl text-[#a5c1d4]">Products</h1>
                    </div>
                    <button className="create px-5 py-2 bg-[#7fa99b]">
                        <Link to={"/createproduct"}>Create New</Link>
                    </button>
                    <div className="filter  flex gap-10 items-center">
                        <select className="px-2 py-2" name="" id="">
                            <option value="">All</option>
                            <option value="">Name</option>
                            <option value="">Condition</option>
                            <option value="">City</option>
                        </select>
                        <input
                            className="px-2 py-2"
                            type="text"
                            name=""
                            id=""
                            placeholder="search..."
                        />
                        <BsSearch className="text-[30px] text-cyan-200" />
                    </div>
                </div>
                <div className="products w-full border mt-10">
                    <div className="info w-full h-14 border border-[#137083] rounded-lg flex items-center justify-between px-10">
                        <p>pic</p>
                        <p>Name</p>
                        <p>Price</p>
                        <button></button>
                        <button></button>
                    </div>
                    {
                        allData?.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="item w-full h-[15vh] border border-[#bde2ea] rounded-lg mt-5 flex items-center justify-between px-10"
                                >
                                    <div className="image w-24 h-24 border">
                                        <img
                                            className="w-[100%] h-[100%]"
                                            src={item.image}
                                            alt=""
                                        />
                                    </div>
                                    <p>sdf</p>
                                    <p>sdf</p>

                                    <button
                                        type="button"
                                        className="px-5 py-2 bg-red-500"
                                    // onClick={() => dispatch(delUser({id: item._id, token: token}))}
                                    >
                                        delelte
                                    </button>
                                    <Link
                                        // to={`/editproduct/${item._id}`}
                                        >
                                        <button type="button" className="px-5 py-2 bg-yellow-600">edit</button>
                                    </Link>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}

export default Admin;
