import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpaces } from "../../store/spaces/actions";
import { getSpaces } from "../../store/spaces/selectors";

const Homepage = () => {
  const dispatch = useDispatch();
  const spaces = useSelector(getSpaces);
  useEffect(() => {
    dispatch(fetchSpaces());
  }, []);

  return (
    <div>
      <h1>Home page :D</h1>
      <div>
        {spaces.map((s) => (
          <div
            style={{
              backgroundColor: s.backgroundColor,
              color: s.color,
              margin: 10,
              padding: 10,
            }}
            key={s.id}
          >
            <h2>{s.title}</h2>
            <h3>{s.description}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
