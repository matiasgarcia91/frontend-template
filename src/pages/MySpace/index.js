import { useSelector, useDispatch } from "react-redux";
import { selectLoggedInSpace } from "../../store/user/selectors";
import Loading from "../../components/Loading";
import { Button } from "react-bootstrap";
import { deleteStory } from "../../store/spaces/actions";

// On My space, stories are displayed with a Delete Story
// button which lets them delete their own story

// The story is removed from the space without manually refreshing (CMD + R / CTRL + R)

/// PLAN:
// 0. Make an endpoint that deletes a story DONE.
// 1. Delete button on each story
// 2. When button is clicked => request => action (thunk)

const MySpace = () => {
  const space = useSelector(selectLoggedInSpace);
  const dispatch = useDispatch();
  console.log("do i have the users space?", space);

  if (!space) {
    return <Loading />;
  }

  const onDeleteClick = (id) => {
    console.log("story to be deleted!");
    dispatch(deleteStory(id));
  };
  return (
    <div>
      <div
        style={{
          backgroundColor: space.backgroundColor,
          color: space.color,
          padding: 20,
        }}
      >
        <h1>{space.title}</h1>
        <h3>{space.description}</h3>
      </div>
      {space.stories.map((st) => (
        <div>
          <h4>{st.name}</h4>
          <p>{st.content}</p>
          <Button variant='danger' onClick={() => onDeleteClick(st.id)}>
            Delete
          </Button>
          <img src={st.imageUrl} alt={st.name} />
        </div>
      ))}
    </div>
  );
};

export default MySpace;
