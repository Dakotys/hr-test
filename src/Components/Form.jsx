function Form() {
	return (
		<form
			class="form"
			onSubmit={(e) => {
				e.preventDefault();
				const formData = new FormData(e.target);
				alert(`Form data: ${JSON.stringify(Object.fromEntries(formData))}`);
				e.target.reset();
			}}
		>
			<label for="email">Email</label>
			<input
				type="email"
				id="email"
				name="email"
				placeholder="name@email.com"
				required
			/>
			<label for="name">Name</label>
			<input
				type="text"
				id="name"
				name="name"
				placeholder="John Johnson"
				required
			/>
			<label for="topic">Choose a topic</label>
			<select id="topic" name="topic">
				<option value="" disabled selected>
					ex. Website Wireframe
				</option>
				<option value="design">Design</option>
				<option value="development">Development</option>
				<option value="marketing">Marketing</option>
			</select>
			<label for="comments">Comments</label>
			<textarea
				id="comments"
				name="comments"
				placeholder="Your feedback would be appreciated"
			/>
			<button type="submit">Send Your Feedback</button>
		</form>
	);
}

export default Form;
