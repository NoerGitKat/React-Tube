import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			term: ''
		};

		this.onInputChange = this.onInputChange.bind(this);
	}

	render() {
		return (
			<div>
				<input
				value={this.state.term} 
				onChange={event => {this.onInputChange(event.target.value)}} type="text" placeholder='Search videos...'/>
			</div>
		)
	}

	onInputChange(term) {
		this.setState({
			term
		});
		this.props.onSearchTermChange(term)
	}
}

SearchBar.propTypes = {

};

export default SearchBar;