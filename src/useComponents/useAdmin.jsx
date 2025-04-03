import React, { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import AuthContext from "../context/AuthContext";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);

    const { data: isAdmin = false, isLoading } = useQuery({
        queryKey: ["isAdmin", user?.email], 
        queryFn: async () => {
            if (!user?.email) return false; // Prevent unnecessary API call
            const res = await axiosSecure.get(`/user/admin/${user.email}`);
            console.log("Admin Status:", res.data);
            return res.data?.admin;
        },
        enabled: !!user?.email, // Ensure query only runs if user email exists
    });

    return [isAdmin, isLoading]; // Return both isAdmin and loading state
};

export default useAdmin;
