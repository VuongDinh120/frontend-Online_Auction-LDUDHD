import { useEffect, useReducer } from 'react';
import MenuBar from './components/Menu/MenuBar';
import SearchBar from './components/Menu/SearchBar';
import CateBar from './components/Menu/CateBar';
import Home from './pages/Home';
import CatItemList from './pages/CatItemList';
import ItemDetail from './pages/ItemDetail';






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
    <div className="page">
      <MenuBar />
      <SearchBar />
      <CateBar />
      {/* <Home /> */}
      {/* <CatItemList /> */}
      <ItemDetail />

    </div>
  );
}

export default App;
