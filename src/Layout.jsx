import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/theme';

function Layout() {
  const [themeMode, setThemeMode] = useState("light");
  
  const darkTheme = () => {
    setThemeMode("dark");
  }
  
  const lightTheme = () => {
    setThemeMode("light");
  }
  
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  
  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      <Navbar />
      <Outlet />
      <Footer />
    </ThemeProvider>
  )
}

export default Layout