import SocialLinks from "./SocialLinks"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <SocialLinks />
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Ashley Mutengwa. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
