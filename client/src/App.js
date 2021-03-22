import Header from './components/Header';

function App({ children }) {
  return (
    <div>
      <Header></Header>
      {children}
    </div>
  );
}

export default App;
