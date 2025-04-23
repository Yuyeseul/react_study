import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

export default function DayList() {
  const days = useFetch(`http://localhost:3001/days`);

  // useFetch.js useState([]) 의 초기값이 [] 이므로, 배열 length가 0일때 Loading 을 출력
  if (days.length === 0) {
    return <span>Loading...</span>;
  }

  return (
    <ul className="list_day">
      {days.map((day) => (
        <li key={day.id}>
          <Link to={`/day/${day.day}`}>Day {day.day}</Link>
        </li>
      ))}
    </ul>
  );
}
