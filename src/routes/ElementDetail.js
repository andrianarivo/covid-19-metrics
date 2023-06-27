import { useParams } from 'react-router-dom';

export default function ElementDetail() {
  const { slug } = useParams();
  return (
    <div>
      <h3>{slug}</h3>
      This is the element detail
    </div>
  );
}
