import { compose, withProps, withHandlers, withState } from 'recompose'

export default compose(
  withState('keyword', 'setKeyword', ''),
  withHandlers({
    handleChange: props => e => {
      props.setKeyword(e.target.value)
    },
  })
)
