import { compose, withProps, withHandlers, withState } from 'recompose'
import { inject } from 'mobx-react'

export default compose(
  inject('UserStore', 'CommonStore'),
  withState('keyword', 'setKeyword', ''),
  withHandlers({
    handleChange: props => e => {
      props.setKeyword(e.target.value)
    },
  })
)
