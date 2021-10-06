import { useEffect, useReducer } from 'react';
import MenuBar from './components/MenuBar';
import SearchBar from './components/SearchBar';


// import AppContext from './todoAppContext';
import reducer from './todoAppReducer';

function App() {
  const initialAppState = {
    items: [],
    query: ''
  }
  const [store, dispatch] = useReducer(reducer, initialAppState);

  useEffect(function () {
    setTimeout(function () {
      const items_from_backend = [
        { id: 1, title: 'Pay Bills', complete: true },
        { id: 2, title: '@vue/cli vs create-react-app', complete: false },
        { id: 3, title: 'vue-router vs react-router', complete: false },
        { id: 4, title: 'redux vs vuex', complete: false },
        { id: 5, title: 'learn FBM Platform', complete: false },
      ];

      dispatch({
        type: 'init',
        payload: {
          items: items_from_backend,
          query: ''
        }
      });

    }, 300);
  }, []);

  return (
    <div className="container">
      <MenuBar />
      <SearchBar />

    </div>
  );
}

export default App;
