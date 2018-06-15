import { compose, withState, withHandlers } from 'recompose'
import { inject } from 'mobx-react'

export default compose(
  withHandlers({
    handleSubmit: props => e => {
      e.preventDefault()
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },
  })
)
