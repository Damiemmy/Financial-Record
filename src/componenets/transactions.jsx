import React from "react";
import Title from "./title";
import { motion } from "framer-motion";
import { RiProgress3Line } from "react-icons/ri";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { TiWarning } from "react-icons/ti";

const data = [
  {
    date: "2025-11-10",
    name: "Esteban Acosta",
    contact: "+9519037652",
    status: "Completed",
    source: "Bitcoin",
    amount: 40,
  },
  {
    date: "2025-11-10",
    name: "Esteban Acosta",
    contact: "+9519037652",
    status: "Completed",
    source: "Bitcoin",
    amount: 110,
  },
  {
    date: "2025-11-10",
    name: "Esteban Acosta",
    contact: "+9519037652",
    status: "Completed",
    source: "Bitcoin",
    amount: 80,
  },
  {
    date: "2025-11-10",
    name: "Esteban Acosta",
    contact: "+9519037652",
    status: "Completed",
    source: "Bitcoin",
    amount: 200,
  },
  {
    date: "2025-11-10",
    name: "Esteban Acosta",
    contact: "+9519037652",
    status: "Completed",
    source: "Bitcoin",
    amount: 380,
  },
  {
    date: "2025-11-10",
    name: "Esteban Acosta",
    contact: "+9519037652",
    status: "Completed",
    source: "Bitcoin",
    amount: 300,
  },
  {
    date: "2025-11-10",
    name: "Esteban Acosta",
    contact: "+9519037652",
    status: "Completed",
    source: "Bitcoin",
    amount: 100,
  },
  {
    date: "2025-11-24",
    name: "Esteban Acosta",
    contact: "+9519037652",
    status: "Completed",
    source: "Cashapp",
    amount: 300,
  },
  {
    date: "2025-11-24",
    name: "Esteban Acosta",
    contact: "+9519037652",
    status: "Completed",
    source: "Cashapp",
    amount: 110,
  },
  {
    date: "2025-11-24",
    name: "Esteban Acosta",
    contact: "+9519037652",
    status: "Completed",
    source: "Cashapp",
    amount: 400,
  },
  {
    date: "2025-11-24",
    name: "Esteban Acosta",
    contact: "+9519037652",
    status: "Completed",
    source: "Cashapp",
    amount: 675,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  show: {
    transition: { staggerChildren: 0.07 },
  },
};

const Transactions = () => {
  return (
    <div className="py-10 w-full md:w-2/3">
      <Title title="Latest Transactions" />

      {/* MOBILE CARD VIEW */}
      <motion.div
        className="mt-6 flex flex-col gap-4 md:hidden"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        {data.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            whileHover={{ scale: 1.02, boxShadow: "0px 10px 25px rgba(0,0,0,0.08)" }}
            transition={{ type: "spring", stiffness: 120 }}
            className="p-4 bg-white dark:bg-gray-900 shadow rounded-xl border border-gray-200 dark:border-gray-700"
          >
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm text-gray-500">{item.date}</p>

              <span
                className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1
                  ${
                    item.status === "Completed"
                      ? "bg-emerald-200 text-emerald-800"
                      : item.status === "Pending"
                      ? "bg-yellow-200 text-yellow-800"
                      : "bg-red-200 text-red-800"
                  }
                `}
              >
                {item.status === "Pending" && <RiProgress3Line />}
                {item.status === "Completed" && <IoCheckmarkDoneCircle />}
                {item.status === "Rejected" && <TiWarning />}
                {item.status}
              </span>
            </div>

            <p className="font-semibold text-gray-900 dark:text-white">{item.name}</p>
            <p className="text-sm text-gray-500">{item.contact}</p>

            <div className="flex justify-between items-center mt-3">
              <p className="text-gray-600 dark:text-gray-400">{item.source}</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                ${item.amount}.00
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* DESKTOP TABLE VIEW */}
      <div className="overflow-x-auto mt-5 hidden md:block">
        <motion.table
          className="w-full"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <thead className="border-b border-gray-300 dark:border-gray-700">
            <tr className="text-left text-black dark:text-gray-400">
              <th className="py-2">Date</th>
              <th className="py-2">Name</th>
              <th className="py-2">Status</th>
              <th className="py-2">Source</th>
              <th className="py-2">Amount</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <motion.tr
                key={index}
                variants={fadeUp}
                whileHover={{
                  scale: 1.01,
                  backgroundColor: "rgba(200,200,200,0.15)",
                }}
                className="border-b border-gray-200 dark:border-gray-700 cursor-pointer"
              >
                <td className="py-3 px-2">{item.date}</td>

                <td className="py-3 px-2">
                  <p className="font-medium text-base text-black dark:text-gray-300">
                    {item.name}
                  </p>
                  <span className="text-sm text-gray-500">{item.contact}</span>
                </td>

                <td className="py-3 px-2 flex items-center gap-2">
                  {item.status === "Pending" && (
                    <RiProgress3Line className="text-amber-600" size={22} />
                  )}
                  {item.status === "Completed" && (
                    <IoCheckmarkDoneCircle className="text-emerald-600" size={22} />
                  )}
                  {item.status === "Rejected" && (
                    <TiWarning className="text-red-600" size={22} />
                  )}
                  <span>{item.status}</span>
                </td>

                <td className="py-3 px-2">{item.source}</td>

                <td className="py-3 px-2 text-black dark:text-gray-300 font-semibold">
                  ${item.amount}.00
                </td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      </div>
    </div>
  );
};

export default Transactions;
