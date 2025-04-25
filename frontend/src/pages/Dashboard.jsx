import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get('/api/auth/dashboard', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMsg(res.data.msg);
    };
    fetchData();
  }, []);

  return <div className="p-4">{msg}</div>;
}
