import { Link, useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useEffect, useState } from "react";

function NewsList({ data, set }: any) {
  const [id, setId] = useState("");
  const { del } = useFetch("http://localhost:3000/news/" + id, "DELETE");

  const handleNav = () => {
    setTimeout(() => {
      set(false);
    }, 1000);
  };

  return (
    <div>
      <ul className="flex flex-col gap-[20px]">
        {data &&
          data.map((d: any) => {
            return (
              <li key={d.id}>
                <div className="card lg:card-side bg-base-100  shadow-2xl ">
                  <figure>
                    <img
                      className="w-[1000px] h-[400px]"
                      src={d.image}
                      alt={d.title}
                    />
                  </figure>
                  <div className="card-body flex flex-col justify-between">
                    <h2 className="card-title">{d.title}</h2>
                    <div className="card-actions justify-end">
                      <Link
                        to={`/news/${d.id}`}
                        className="btn btn-outline btn-neutral"
                      >
                        Read More
                      </Link>
                      <button
                        onClick={() => {
                          handleNav();
                          setId(d.id);
                          del();
                        }}
                        className="btn btn-outline btn-neutral"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default NewsList;
