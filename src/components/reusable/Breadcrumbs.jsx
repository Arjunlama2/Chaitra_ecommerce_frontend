import { Link, useLocation } from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation();
  const pathname = location.pathname;
  const pathParts = pathname.split("/").filter(Boolean);

  return (
    <nav aria-label="breadcrumb" className="p-4 text-sm text-gray-600 ml-22">
      <ul className="flex space-x-2">
        <li>
          <Link to="/" className="text-blue-500 hover:underline">Home</Link>
        </li>

        {pathParts.map((part, index) => {
          const path = `/${pathParts.slice(0, index + 1).join("/")}`;
          const isLast = index === pathParts.length - 1;

          return (
            <li key={index} className="flex items-center space-x-2">
              <span>/</span>
              {isLast ? (
                <span className="text-[#FB2E86]">{decodeURIComponent(part)}</span>
              ) : (
                <Link to={path} className="text-blue-500 hover:underline">
                  {decodeURIComponent(part)}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
