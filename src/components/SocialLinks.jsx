import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

export default function SocialLinks() {
  return (
    <div className="flex justify-center gap-6 text-2xl text-gray-600">
      <a
        href="https://github.com/ashley"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-600 transition"
      >
        <FaGithub />
      </a>
      <a
        href="https://linkedin.com/in/ashley"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-600 transition"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://twitter.com/ashley"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-600 transition"
      >
        <FaTwitter />
      </a>
    </div>
  )
}
