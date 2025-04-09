import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="bg-gray-100 py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
          Never Miss a Home Task Again
        </h1>
        <p className="text-gray-700 text-lg md:text-xl mb-8">
          FixItList helps you track recurring maintenance, seasonal chores, and everything in between — with smart reminders and easy organization.
        </p>
        <Link
          to="/my-list"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition duration-300"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
