import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";

import productRoutes from "./routes/independent/products.js";

import auditLogRoutes from "./routes/independent/auditLogs.js";
import userRoutes from "./routes/independent/users.js";

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

// Route Definitions
app.use('/api/audit-logs', auditLogRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

app.use('/api/orders', orderRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/product-images', productImageRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/wishlists', wishlistRoutes);
app.use('/api/wishlist-items', wishlistItemRoutes);
app.use('/api/coupons', couponRoutes);
app.use('/api/carts', cartRoutes);
app.use('/api/cart-items', cartItemRoutes);
app.use('/api/inventories', inventoryRoutes);
app.use('/api/shippings', shippingRoutes);
app.use('/api/vendors', vendorRoutes);
app.use('/api/product-attributes', productAttributeRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/roles', roleRoutes);
app.use('/api/permissions', permissionRoutes);
app.use('/api/role-permissions', rolePermissionRoutes);

app.listen(3000, () => {
  console.log("Server started at port " + 3000);
});
