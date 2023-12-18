import './globals.css';
import { Routes, Route } from 'react-router-dom';
// import SigninForm from './'
const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public */}
        <Route path="sign-in" element={<SigninForm/>} />
        <Route path="sign-up" element={<SignUpForm/>} />
        
        {/* private routes */}
        <Route index element={<Home/>} />
      </Routes>
    </main>
  );
};

export default App;
