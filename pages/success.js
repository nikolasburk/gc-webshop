import Confetti from 'react-confetti'

export default props => {
  return (
    <Confetti width={process.browser ? window.innerWidth : '100%'} height={process.browser ? window.innerHeight : '100%'} />
  )
}
