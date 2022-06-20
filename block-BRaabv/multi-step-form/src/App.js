import Materfrom from './components/Materform';

function App() {
  return (
    <div className='flex main-container'>
      <div className='app'>
        <img
          src='https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJvbSUyMGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60)'
          alt='background'
        />
      </div>
      <div className='master'>
        <Materfrom />
      </div>
    </div>
  );
}

export default App;
