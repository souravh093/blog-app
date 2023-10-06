import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const ManageBlog = ({ blog }) => {
  const { date, title, category, image } = blog;
  return (
    <tr className="bg-white border-b">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        <img
          src={image}
          alt="user demo image"
          className="w-10 h-10 hover:ring-2 rounded-full object-cover"
        />
      </th>
      <td className="px-6 py-4">{title}</td>
      <td className="px-6 py-4">{date && new Date(date).toDateString()}</td>
      <td className="px-6 py-4">{category}</td>
      <td className="px-6 py-4 flex gap-2 items-center">
        <button>
          <AiFillEdit className="text-xl font-bold mt-3" />
        </button>
        <button>
          <AiFillDelete className="text-xl font-bold mt-3" />
        </button>
      </td>
    </tr>
  );
};

export default ManageBlog;
