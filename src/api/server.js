const app = require("./index");

require("./v1/config/dbConnection");
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`App running on PORT ${PORT}`));
