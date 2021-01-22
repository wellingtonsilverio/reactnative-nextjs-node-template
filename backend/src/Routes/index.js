import app from "..";
import exempleRoute from "./exemple";

app.get("/", (req, res) => {
	res.send("Hello World!");
});

export { exempleRoute };
