import { ServiceBroker } from "moleculer";

const broker = new ServiceBroker();

// Greeter Service
broker.createService({
	name: "greeter",
	actions: {
		sayHello(ctx) {
			return `Hello ${ctx.params.name}`;
		},
	},
});

const startApp = async () => {
	await broker.start();
	const res = await broker.call("greeter.sayHello", { name: "John" });

	console.log(res);
	broker.stop();
};

startApp();
