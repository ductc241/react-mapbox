import { Link } from "react-router-dom";

const RecommendRoutes = () => {
  return (
    <div>
      <div className="flex p-3 border-l-4 border-l-blue-600 border-y border-y-gray-300">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
          inventore quam vel maiores. Tempore, rerum. Aperiam, debitis libero
          reprehenderit dolore iste nemo iure vitae mollitia, delectus,
          asperiores nobis obcaecati est.
        </p>

        <Link to="search">Search</Link>
      </div>
    </div>
  );
};

export default RecommendRoutes;
