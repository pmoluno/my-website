'use client';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      document.documentElement.classList.add('dark');
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const isDark = !dark;
    setDark(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button onClick={toggleTheme} style={{
      padding: '0.5rem 1rem',
      background: dark ? '#333' : '#ccc',
      color: dark ? '#fff' : '#000',
      letterSpacing: '-1.5px',
      border: 'none',
      borderRadius: '0px',
      cursor: 'pointer'
    }}>
      {dark ? <><i className="bi bi-brightness-high-fill me-2"></i>  Light Mode </> : <>  <i className="bi bi-moon-stars me-2"></i> Dark Mode </>}
    </button>
  );
}
