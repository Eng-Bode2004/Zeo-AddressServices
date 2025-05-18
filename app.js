// Connect To DataBase
require('./Config/DataBase');
const express = require('express');


// Set Up Port and Make Server listen To requests
const app = express();
const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
app.use(express.json()); // Middleware to parse JSON



                                // Main Routes
                         // Store Address Routes  //
const StoreAddressRoutes = require("./Routes/StoreAddressRoutes");
app.use('/api/store-address',StoreAddressRoutes);

                       //User Address Routes  //
const UserAddressRoutes = require("./Routes/UserAddressRoutes");
app.use('/api/user-address',UserAddressRoutes);

