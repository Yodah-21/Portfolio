export default function SkillCard({ category }) {
  const Icon = category.icon
  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <Icon className={`${category.color} w-6 h-6 mr-3`} />
        <h3 className="font-semibold text-gray-900 dark:text-gray-100">{category.title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skillsList.map((skill, i) => (
          <span
            key={i}
            className="inline-flex items-center px-2 py-1 rounded text-xs 
                       border border-gray-300 dark:border-gray-500 
                       text-gray-700 dark:text-gray-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
