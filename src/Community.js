import React, {Component} from 'react';

class Community extends Component {
componentDidMount() {
  console.log(this.props)
}

render() {
  return (
     <p className="tags">@{this.props.tag}  </p>
    )
 }
}
export default Community