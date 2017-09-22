import App from '../components/App'
import Header from '../components/Header'
import ItemList from '../components/ItemList'

import withData from '../lib/withData'
import Auth from '../Auth'

export const auth = new Auth()

export default withData((props) => (
  <App>
    <Header login={auth.login} pathname={props.url.pathname} />
    <ItemList />
  </App>
))
