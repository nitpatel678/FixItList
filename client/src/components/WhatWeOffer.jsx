import { FaSyncAlt, FaBell, FaCloudUploadAlt, FaCalendarAlt } from 'react-icons/fa';

const features = [
  {
    icon: <FaSyncAlt size={30} className="text-blue-600" />,
    title: 'Recurring Task Scheduling',
    desc: 'Set up repeating tasks so you never forget maintenance again.',
  },
  {
    icon: <FaBell size={30} className="text-blue-600" />,
    title: 'Smart Reminders',
    desc: 'Get notified before it’s too late — by email or push.',
  },
  {
    icon: <FaCloudUploadAlt size={30} className="text-blue-600" />,
    title: 'File Uploads',
    desc: 'Attach receipts, manuals, or contractor info to any task.',
  },
  {
    icon: <FaCalendarAlt size={30} className="text-blue-600" />,
    title: 'Seasonal Suggestions',
    desc: 'Get auto-suggested tasks based on your region and time of year.',
  },
];

export default function WhatWeOffer() {
  return (
    <section className="py-20 px-6 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">
        What We Offer
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((feat, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="mb-4">{feat.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{feat.title}</h3>
            <p className="text-gray-600 text-sm">{feat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
