import React, { useContext } from 'react';
import SectionTitle from '../../useComponents/SectionTitle';
import AuthContext from '../../context/AuthContext';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../useComponents/useAxiosSecure';


const PaymentHistory = () => {
    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()

    const {data: payments=[]} = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })
    // if(isLoading){
    //     return <p className="text-center text-xl my-10">Loading...</p>;
    // }
    return (
        <div className="w-full my-24 px-4 md:px-10">
          <SectionTitle title="---At a Glance!---" subTitle="Payment History" />
    
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Total Payments: <span className="text-black">{payments.length}</span>
          </h2>
    
          <div className="overflow-x-auto rounded-xl shadow-lg">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-600 text-white">
                  <th className="text-left px-6 py-3">EMAIL</th>
                  <th className="text-left px-6 py-3">TRANSACTIONID</th>
                  <th className="text-left px-6 py-3">TOTAL PRICE</th>
                  <th className="text-left px-6 py-3">PAYMENT DATE</th>
                  <th className="text-left px-6 py-3">STATUS</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment, index) => (
                  <tr key={index} className="border-b last:border-none">
                    <td className="px-6 py-4 text-gray-700">{payment.email}</td>
                    <td className="px-6 py-4 text-gray-700">{payment.transactionId}</td>
                    <td className="px-6 py-4 text-gray-700">{payment.price}</td>
                    <td className="px-6 py-4 text-gray-700">{payment.date}</td>
                    <td className="px-6 py-4 text-green-700">{payment.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
};

export default PaymentHistory;