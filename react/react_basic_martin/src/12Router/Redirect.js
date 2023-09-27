import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const Redirect = () => {
  const navi = useNavigate();
  useEffect(() => {
    navi('/user');
  }, []);
  return <div>Redirect</div>;
};
