import UserService from "./services/user.service.js";

async function startApp() {
	await UserService.start();

	try {
		const newUser = await UserService.call("user.createUser", {
			username: "John",
			email: "john@example.com",
		});

		console.log("New user created: ", newUser);

		const users = await UserService.call("user.getUsers");
		console.log("All users: ", users);
	} catch (err) {
		console.log("Error: ", err);
	} finally {
		await UserService.stop();
	}
}

startApp();
