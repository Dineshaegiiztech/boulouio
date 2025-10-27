import { XCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Cancel.css';

export default function Cancel() {
    const navigate = useNavigate();

    const Homenavigate = () => {
        // navigate('/prospect-search');
        window.location.href = '/prospect-search'
    }

  return (
    <div className="container-cancel">
      <div className="card-cancel">
        <XCircle className="icon-cancel" />
        <h2 className="title-cancel">Payment Declined</h2>
        <p className="message-cancel">Unfortunately, your payment could not be processed. Please check your card details or try another method.</p>
        <div className="actions-cancel">
          <button onClick={Homenavigate} className="retry-cancel">Go back Home</button>
        </div>
      </div>
    </div>
  );
}
