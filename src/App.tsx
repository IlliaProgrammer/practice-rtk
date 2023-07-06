import React, {useEffect} from 'react';
import PostContainer from './components/PostContainer';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreator';



function App() {
  // const {users, isLoading, error} = useAppSelector(state=>state.userReducer)
  // const dispatch = useAppDispatch()

  // useEffect(()=>{
  //   dispatch(fetchUsers())
  // },[])

  return (
    <div>
      {/* {isLoading && <h2>Loading</h2>}
        {JSON.stringify(users, null, 2)} */}
        <PostContainer/>
    </div>

  );
}

export default App;
