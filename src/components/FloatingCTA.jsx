import { useNavigate } from "react-router-dom";

   const FloatingCTA = () => {
    
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/contact")}
      className="fixed right-6 bottom-6 bg-yellow-400 text-gray-900 px-4 py-3 rounded-full shadow-lg hover:scale-105 transition"
      aria-label="Enroll now"
    >
      Enroll Now
    </button>
  );
}

export default FloatingCTA;