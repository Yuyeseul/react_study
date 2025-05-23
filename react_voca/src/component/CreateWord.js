import { useRef, useState } from 'react';
import useFetch from '../hooks/useFetch';
import { useNavigate } from 'react-router-dom';

export default function CreateWord() {
  const days = useFetch(`http://localhost:3001/days`);
  const navigate = useNavigate();
  const [isLoding, setIsLoding] = useState(false);

  // 기본 새로고침 막아줌
  function onSubmit(e) {
    e.preventDefault();

    if (!isLoding) {
      setIsLoding(true);
      fetch(`http://localhost:3001/words/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          day: dayRef.current.value,
          eng: engRef.current.value,
          kor: korRef.current.value,
          isDone: false,
        }),
      }).then((res) => {
        if (res.ok) {
          alert('생성이 완료 되었습니다.');
          navigate(`/day/${dayRef.current.value}`);
          setIsLoding(false);
        }
      });
    }
  }

  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);

  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label>Eng</label>
        <input type="text" placeholder="computer" ref={engRef} />
      </div>
      <div className="input_area">
        <label>Kor</label>
        <input type="text" placeholder="컴퓨터" ref={korRef} />
      </div>
      <div className="input_area">
        <label>Day</label>
        <select ref={dayRef}>
          {days.map((day) => (
            <option key={day.id} value={day.day}>
              {day.day}
            </option>
          ))}
        </select>
      </div>
      <button
        style={{
          opacity: isLoding ? 0.3 : 1,
        }}
      >
        {isLoding ? 'Saving...' : '저장'}
      </button>
    </form>
  );
}
