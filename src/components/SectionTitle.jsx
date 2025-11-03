export default function SectionTitle({ title, subtitle, color }) {
  return (
    <div className="text-center mb-12">
      <h2
        className={`text-3xl font-bold mb-2 ${
          color || "text-gray-900 dark:text-gray-100"
        }`}
      >
        {title}
      </h2>
      <p className="text-gray-500 dark:text-gray-400">{subtitle}</p>
      <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
    </div>
  )
}
