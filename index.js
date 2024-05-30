import UserService from "./services/user.service.js";
import EmailService from "./services/email.service.js";

async function startApp() {
	await UserService.start();
	await EmailService.start();

	try {
		const newUser = await UserService.call("user.createUser", {
			username: "John",
			email: "john@example.com",
		});

		console.log("New user created: ", newUser);

		const users = await UserService.call("user.getUsers");
		console.log("All users: ", users);

		// Simualate sending email
		const emailResult = await EmailService.call("email.sendEmail", {
			recipient: newUser.email,
			subject: "Welcome to our platform!",
			content: "Thank you for signing up",
		});
		console.log(emailResult);
	} catch (err) {
		console.log("Error: ", err);
	} finally {
		await UserService.stop();
	}
}

startApp();
