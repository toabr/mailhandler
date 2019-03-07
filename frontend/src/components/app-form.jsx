import React, { Component } from 'react';


class AppForm extends Component {
	render() {
		const form = this.props.form;

		let renderInput = ele => {
			return(
				<div className={ele.classes.join(' ')}>
					<label htmlFor={ele.id}>{ele.label}</label>
					<input type={ele.type}
								 className="form-control"
								 id={ele.id}
								 value={ele.value}
								 required={ele.required}/>
				</div>
			);
		}

		let renderSelect = () => {
			return(
				<div className={form.enquiry.classes}>
					<label htmlFor="sel1">{form.enquiry.label}</label>
					<select className="form-control"
									id={form.enquiry.id}
									required={form.enquiry.required} >
									{form.enquiry.options.map((o) => <option key={o}>{o}</option>)}
					</select>
				</div>
			);
		}

		let renderComment = () => {
			if(form.comment.active) {
				return(
					<div className={form.comment.classes}>
						<label htmlFor="comment">{form.comment.label}</label>
						<textarea className="form-control"
											rows="5"
											id={form.comment.id}
											value={form.comment.value}
											required={form.comment.required} />
					</div>
				);
			}
		}

		let renderCheckbox = (ele) => {
			return(
				<div className={ele.classes.join(' ')}>
					<label className="form-check-label" htmlFor={ele.id} >
						<input type="checkbox"
									 id={ele.id}
									 className="form-check-input"
									 required={ele.required}
									 defaultChecked={ele.value} />
						{ele.label}
					</label>
				</div>
			);
		}

		return(
			<div className="container">
			    <div className="row">
					<form className="col-lg-12"
								onChange={(e)=>this.props.onFormChange(e)}
								onSubmit={this.props.onFormSubmit} >

						{renderInput(form.title)}
						{renderInput(form.name)}
						{renderInput(form.mail)}
						{renderSelect()}
						{renderComment()}
						{renderCheckbox(form.privacy)}

						<button type="submit" className="btn btn-primary">
							{form.submit.label}
						</button>

					</form>
				</div>
			</div>
		);
	}
}

export default AppForm;
