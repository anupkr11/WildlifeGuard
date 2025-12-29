import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPrograms } from "../redux/programSlice";
import ProgramHero from "../components/program/ProgramHero";
import ProgramCard from "../components/program/ProgramCard";
import Pagination from "../components/wildlife/Pagination";

const ITEMS_PER_PAGE = 6;

const Programs = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.programs);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchPrograms());
  }, [dispatch]);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const paginated = data.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <>
      <ProgramHero />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {loading
            ? [...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="h-64 bg-gray-200 rounded-xl animate-pulse"
                />
              ))
            : paginated.map((program) => (
                <ProgramCard key={program.ID} program={program} />
              ))}
        </div>

        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </section>
    </>
  );
};

export default Programs;
