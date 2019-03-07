import React, { Component } from 'react';
import {getMails} from '../api/api.js';

export default class AppOverview extends Component {
	state = {
		mails: []
	}

	componentDidMount() {
		// backend call
		getMails(mails => {
			this.setState({mails: mails.data});
		});
	}

	render() {

		let mails = this.state.mails.map( mail => (
			<tr key={mail.id}>
				<td>{mail.title}</td>
				<td>{mail.name}</td>
				<td>{mail.mail}</td>
				<td>{mail.enquiry}</td>
				<td>{mail.comment}</td>
			</tr>
		));

		return(
			<table className="table table-hover">
				<thead>
					<tr>
						<th>Anrede</th>
						<th>Name</th>
						<th>E-mail</th>
						<th>Anfrage</th>
						<th>Beschreibung</th>
					</tr>
				</thead>
				<tbody>
					{mails}
				</tbody>
			</table>

		);
	}
}
