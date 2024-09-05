import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";

import auditLogRoutes from "./routes/auditLogs.js";
import userRoutes from "./routes/users.js";
import productRoutes from "./routes/products.js";
import orderRoutes from "./routes/orders.js";
import categoryRoutes from "./routes/categories.js";
import productImageRoutes from "./routes/productImages.js";
import paymentRoutes from "./routes/payments.js";
import reviewRoutes from "./routes/reviews.js";
import wishlistRoutes from "./routes/wishlists.js";
import wishlistItemRoutes from "./routes/wishlistItems.js";
import couponRoutes from "./routes/coupons.js";
import cartRoutes from "./routes/carts.js";
import cartItemRoutes from "./routes/cartItems.js";
import inventoryRoutes from "./routes/inventories.js";
import shippingRoutes from "./routes/shippings.js";
import vendorRoutes from "./routes/vendors.js";
import productAttributeRoutes from "./routes/productAttributes.js";
import notificationRoutes from "./routes/notifications.js";
import roleRoutes from "./routes/roles.js";
import permissionRoutes from "./routes/permissions.js";
import rolePermissionRoutes from "./routes/rolePermissions.js";

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.get("/", async (req, res) => {
  res.send("Hello World");
});

// Route Definitions

const path = "/api";
app.use(path, auditLogRoutes);
app.use(path, userRoutes);
app.use(path, productRoutes);
app.use(path, orderRoutes);
app.use(path, categoryRoutes);
app.use(path, productImageRoutes);
app.use(path, paymentRoutes);
app.use(path, reviewRoutes);
app.use(path, wishlistRoutes);
app.use(path, wishlistItemRoutes);
app.use(path, couponRoutes);
app.use(path, cartRoutes);
app.use(path, cartItemRoutes);
app.use(path, inventoryRoutes);
app.use(path, shippingRoutes);
app.use(path, vendorRoutes);
app.use(path, productAttributeRoutes);
app.use(path, auditLogRoutes);
app.use(path, notificationRoutes);
app.use(path, roleRoutes);
app.use(path, permissionRoutes);
app.use(path, rolePermissionRoutes);

app.listen(3000, () => {
  console.log("Server started at port " + 3000);
});
