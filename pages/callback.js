import Callback from '../components/Callback'
import {auth} from './index'


export default (props) => {

  console.log(`CALLBACK`, props)
  console.log(`query`, props.query)

  auth.handleAuthentication(props);


  return <Callback {...props} />

}
