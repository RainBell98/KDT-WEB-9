import { useParams, Link, Outlet } from 'react-router-dom';
import { users } from './User';

export const UserDetail = () => {
  //Route에 /user/:userid
  const params = useParams();
  console.log(params);
  return (
    <div>
      <div>
        사용자 {params.id}는 {users[Number(params.id) - 1].name}입니다.
      </div>
      <Link to="comment">comment</Link>
      <Outlet />
    </div>
  );
};
