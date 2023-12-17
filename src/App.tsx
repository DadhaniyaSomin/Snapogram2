import './globals.css';
import { Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public */}
        <Route path="sign-in" element="<SigninForm />" />
        {/* private routes */}

        <Route index element="<Home />" />
      </Routes>
    </main>
  );
};

export default App;
