import ViewManager from "./ViewManager/ViewManager";

const App = ({entity,isEdit}) => {
  return (
      <ViewManager
          entity={JSON.parse(JSON.stringify(entity))}
          isEdit = {isEdit}
      />
  );
}

export default App;
