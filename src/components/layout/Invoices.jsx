import React from "react";

const Invoice = () => {
  const invoiceData = {
    invoiceNumber: "INV-1001",
    date: "2025-04-22",
    dueDate: "2025-05-01",
    company: {
      name: "Microlent Pvt. Ltd.",
      address: "RIICO IND. AREA , JODHPUR",
      email: "microlent@gmail.com",
    },
    client: {
      name: "Dilip",
      address: "new colony, pali",
      email: "Dilip@example.com",
    },
    items: [
      { description: "Web Development Services", quantity: 1, price: 1500 },
      { description: "Hosting (1 year)", quantity: 1, price: 200 },
      { description: "Maintenance", quantity: 1, price: 300 },
    ],
  };

  const calculateTotal = () =>
    invoiceData.items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-3xl font-bold text-center mb-6">Invoice</h2>

      <div className="flex justify-between mb-6">
        <div>
          <h5 className="font-semibold text-lg">{invoiceData.company.name}</h5>
          <p className="text-gray-600">{invoiceData.company.address}</p>
          <p className="text-gray-600">Email: {invoiceData.company.email}</p>
        </div>
        <div className="text-right">
          <p><span className="font-medium">Invoice No:</span> {invoiceData.invoiceNumber}</p>
          <p><span className="font-medium">Date:</span> {invoiceData.date}</p>
          <p><span className="font-medium">Due:</span> {invoiceData.dueDate}</p>
        </div>
      </div>

      <div className="mb-6">
        <h6 className="text-lg font-semibold">Bill To:</h6>
        <p className="text-gray-700">{invoiceData.client.name}</p>
        <p className="text-gray-600">{invoiceData.client.address}</p>
        <p className="text-gray-600">Email: {invoiceData.client.email}</p>
      </div>

      <table className="w-full border border-gray-300 rounded overflow-hidden">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="text-left p-3 border-b">Description</th>
            <th className="text-left p-3 border-b">Qty</th>
            <th className="text-left p-3 border-b">Price ($)</th>
            <th className="text-left p-3 border-b">Total ($)</th>
          </tr>
        </thead>
        <tbody>
          {invoiceData.items.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="p-3 border-b">{item.description}</td>
              <td className="p-3 border-b">{item.quantity}</td>
              <td className="p-3 border-b">{item.price}</td>
              <td className="p-3 border-b">{item.quantity * item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="text-right mt-6">
        <h5 className="text-xl font-semibold">Total: ${calculateTotal()}</h5>
      </div>
      
    </div>
  );
};

export default Invoice;
