import Stripe from '../components/Stripe'
import withData from '../lib/withData'

export default withData(props => {

  return <Stripe {...props} />

})

