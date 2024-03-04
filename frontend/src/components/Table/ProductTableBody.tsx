import React from "react";
import { ProductType } from "../../types/types";

interface ProductTableBodyProps {
  data: ProductType[];
}

const ProductTableBody: React.FC<ProductTableBodyProps> = ({ data }) => {
  if (!Array.isArray(data)) {
    return null;
  }

  return (
    <tbody className="">
      {data.map(({ _id, id, title, description, price, category, sold, image }) => (
        <tr key={_id} className="grid grid-cols-[1fr,2fr,3fr,1fr,1fr,1fr,1fr] md:grid-cols-[0.5fr,1.5fr,3fr,0.5fr,0.5fr,0.5fr,1fr] hover:bg-gray-900  border-b border-b-slate-600">
          <td className="min-h-full text-center capitalize border-l border-l-slate-600">{id}</td>
          <td className="min-h-full pl-2 capitalize border-l border-l-slate-600 text-start">{title}</td>
          <td className="min-h-full px-4 overflow-y-hidden capitalize border-l border-l-slate-600 text-start line-clamp-3">{description}</td>
          <td className="min-h-full text-center capitalize border-l border-l-slate-600">${price.toFixed(2)}</td>
          <td className="min-h-full text-center capitalize border-l border-l-slate-600">{category}</td>
          <td className="min-h-full text-center capitalize border-l border-l-slate-600">{sold ? 'Yes' : 'No'}
          </td>
          <td className="min-w-[150px] flex justify-center h-full py-2 border-x border-x-slate-600">
            <img src={image} alt={title} className="object-contain w-12 h-12 rounded-full md:w-16 md:h-16" />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default ProductTableBody;

