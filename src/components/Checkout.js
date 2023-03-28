import { placesStore } from '../store/Store'
import { useParams } from 'react-router-dom';
import "../styles/Checkout.css"
import PaymentForm from './PaymentForm';
import { Link } from 'react-router-dom';

const Checkout = (props) => {

  const params = useParams();
  const { id } = params;

  let daysSelected = params;

  let daysFinal = daysSelected.days;

  const checkoutPagePlace = placesStore.find((item) => item.id === id)

  const { name, homeMainPic, price, stars } = checkoutPagePlace || {}


  return (
    <div className='checkout-parent'>

      <p className='book-heading absolute font-semibold text-4xl'>Request To Book</p>

      <div className='place-datails-container absolute'>

        <Link to={`/${id}`}>
          <img src={homeMainPic} className="rounded-xl w-48 absolute checkout-pic" />
          <p className='checkout-name'>{name}</p>
        </Link>

        <p className='checkout-stars'>{stars} (15reviews) </p>

        <p className='checkout-start-price font-semibold'>${price}</p>

        <p className='checkout-line1 text-gray-300 whitespace-nowrap'>____________________________________________________________</p>

        <p className='absolute uppercase italic checkout-protected font-semibold'>Your booking is protected by</p>

        <img src='https://a0.muscache.com/pictures/aircover/aircover-logo/original/56683a2f-f11b-43f6-8af7-a1b3861b2c85.svg' className='checkout-logo absolute w-32 left-12' />

        <p className='checkout-line2 text-gray-300 whitespace-nowrap'>____________________________________________________________</p>

        <p className='absolute text-xl font-semibold checkout-price-heading'>price details</p>

        <div className='checkout-expense-title flex flex-col absolute'>

          <p>${price} X {daysFinal} days</p>

          <p>Service Fee</p>

          <p>Processing Fee</p>

        </div>

        <div className='absolute checkout-expense-calc flex flex-col'>

          <p>${price * daysFinal}</p>

          <p>$240</p>

          <p>$65</p>

        </div>

        <p className='checkout-line3 text-gray-300 whitespace-nowrap'>____________________________________________________________</p>
        <p className='checkout-toal-heading font-semibold absolute text-xl'>TOTAL</p>

        <p className='absolute total-checkout'>${240 + 65 + (price * daysFinal)}</p>
        <br />
        <br />
        <br />

      </div>

      <PaymentForm amount={price} days={daysFinal} place={name} />

    </div>
  )
}

export default Checkout