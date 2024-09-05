// models/Users.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.UUID, default: mongoose.Types.UUID, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password_hash: { type: String, required: true },
  role: { type: String, enum: ['customer', 'admin', 'vendor'], required: true },
  phone_number: { type: String },
  address: { type: String },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

export const User = mongoose.model('User', userSchema);

// models/Categories.js
import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.UUID, default: mongoose.Types.UUID, required: true },
  name: { type: String, required: true },
  slug: { type: String, unique: true, required: true },
  description: { type: String },
  parent_id: { type: mongoose.Schema.Types.UUID, ref: 'Category' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

export const Category = mongoose.model('Category', categorySchema);

// models/Products.js
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.UUID, default: mongoose.Types.UUID, required: true },
  name: { type: String, required: true },
  slug: { type: String, unique: true, required: true },
  description: { type: String },
  price: { type: mongoose.Types.Decimal128, required: true },
  stock_quantity: { type: Number, required: true },
  sku: { type: String, unique: true, required: true },
  category_id: { type: mongoose.Schema.Types.UUID, ref: 'Category' },
  vendor_id: { type: mongoose.Schema.Types.UUID, ref: 'User' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

export const Product = mongoose.model('Product', productSchema);

// models/ProductImages.js
import mongoose from 'mongoose';

const productImageSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.UUID, default: mongoose.Types.UUID, required: true },
  product_id: { type: mongoose.Schema.Types.UUID, ref: 'Product' },
  url: { type: String, required: true },
  alt_text: { type: String },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

export const ProductImage = mongoose.model('ProductImage', productImageSchema);

// models/Orders.js
import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.UUID, default: mongoose.Types.UUID, required: true },
  user_id: { type: mongoose.Schema.Types.UUID, ref: 'User' },
  total_amount: { type: mongoose.Types.Decimal128, required: true },
  status: { type: String, enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'], required: true },
  shipping_address: { type: String },
  payment_status: { type: String, enum: ['pending', 'completed', 'failed', 'refunded'], required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

export const Order = mongoose.model('Order', orderSchema);

// models/OrderItems.js
import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.UUID, default: mongoose.Types.UUID, required: true },
  order_id: { type: mongoose.Schema.Types.UUID, ref: 'Order' },
  product_id: { type: mongoose.Schema.Types.UUID, ref: 'Product' },
  quantity: { type: Number, required: true },
  price: { type: mongoose.Types.Decimal128, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

export const OrderItem = mongoose.model('OrderItem', orderItemSchema);

// models/Payments.js
import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.UUID, default: mongoose.Types.UUID, required: true },
  order_id: { type: mongoose.Schema.Types.UUID, ref: 'Order' },
  payment_method: { type: String, enum: ['credit_card', 'paypal', 'bank_transfer'], required: true },
  amount: { type: mongoose.Types.Decimal128, required: true },
  status: { type: String, enum: ['pending', 'completed', 'failed', 'refunded'], required: true },
  transaction_id: { type: String },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

export const Payment = mongoose.model('Payment', paymentSchema);

// models/Reviews.js
import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.UUID, default: mongoose.Types.UUID, required: true },
  product_id: { type: mongoose.Schema.Types.UUID, ref: 'Product' },
  user_id: { type: mongoose.Schema.Types.UUID, ref: 'User' },
  rating: { type: Number, min: 1, max: 5, required: true },
  comment: { type: String },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

export const Review = mongoose.model('Review', reviewSchema);

// models/Wishlists.js
import mongoose from 'mongoose';

const wishlistSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.UUID, default: mongoose.Types.UUID, required: true },
  user_id: { type: mongoose.Schema.Types.UUID, ref: 'User' },
  name: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

export const Wishlist = mongoose.model('Wishlist', wishlistSchema);

// models/WishlistItems.js
import mongoose from 'mongoose';

const wishlistItemSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.UUID, default: mongoose.Types.UUID, required: true },
  wishlist_id: { type: mongoose.Schema.Types.UUID, ref: 'Wishlist' },
  product_id: { type: mongoose.Schema.Types.UUID, ref: 'Product' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

export const WishlistItem = mongoose.model('WishlistItem', wishlistItemSchema);

// models/Coupons.js
import mongoose from 'mongoose';

const couponSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.UUID, default: mongoose.Types.UUID, required: true },
  code: { type: String, unique: true, required: true },
  description: { type: String },
  discount_percentage: { type: mongoose.Types.Decimal128, required: true },
  max_uses: { type: Number },
  expires_at: { type: Date },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

export const Coupon = mongoose.model('Coupon', couponSchema);

// models/Cart.js
import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.UUID, default: mongoose.Types.UUID, required: true },
  user_id: { type: mongoose.Schema.Types.UUID, ref: 'User' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

export const Cart = mongoose.model('Cart', cartSchema);

// models/CartItems.js
import mongoose from 'mongoose';

const cartItemSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.UUID, default: mongoose.Types.UUID, required: true },
  cart_id: { type: mongoose.Schema.Types.UUID, ref: 'Cart' },
  product_id: { type: mongoose.Schema.Types.UUID, ref: 'Product' },
  quantity: { type: Number, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

export const CartItem = mongoose.model('CartItem', cartItemSchema);

// models/Inventory.js
import mongoose from 'mongoose';

const inventorySchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.UUID, default: mongoose.Types.UUID, required: true },
  product_id: { type: mongoose.Schema.Types.UUID, ref: 'Product' },
  quantity: { type: Number, required: true },
  location: { type: String },
  updated_at: { type: Date, default: Date.now }
});

export const Inventory = mongoose.model('Inventory', inventorySchema);

// models/Shipping.js
import mongoose from 'mongoose';

const shippingSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.UUID, default: mongoose.Types.UUID, required: true },
  order_id: { type: mongoose.Schema.Types.UUID, ref: 'Order' },
  tracking_number: { type: String },
  shipping_method: { type: String, enum: ['standard', 'express', 'overnight'], required: true },
  status: { type: String, enum: ['preparing', 'shipped', 'in_transit', 'delivered'], required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

export const Shipping = mongoose.model('Shipping', shippingSchema);

// models/Vendors.js
import mongoose from 'mongoose';

const vendorSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.UUID, default: mongoose.Types.UUID, required: true },
  user_id: { type: mongoose.Schema.Types.UUID, ref: 'User' },
  company_name: { type: String, required: true },
  contact_info: { type: String },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

export const Vendor = mongoose.model('Vendor', vendorSchema);

// models/ProductAttributes.js
import mongoose from 'mongoose';

const productAttributeSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.UUID, default: mongoose.Types.UUID, required: true },
  product_id: { type: mongoose.Schema.Types.UUID, ref: 'Product' },
  attribute_name: { type: String, required: true },
  attribute_value: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

export const ProductAttribute = mongoose.model('ProductAttribute', productAttributeSchema);

// models/AuditLogs.js
import mongoose from 'mongoose';

const auditLogSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.UUID, default: mongoose.Types.UUID, required: true },
  user_id: { type: mongoose.Schema.Types.UUID, ref: 'User' },
  action: { type: String, required: true },
  table_name: { type: String, required: true },
  record_id: { type: mongoose.Schema.Types.UUID },
  changes: { type: mongoose.Schema.Types.Mixed },
  created_at: { type: Date, default: Date.now }
});

export const AuditLog = mongoose.model('AuditLog', auditLogSchema);

// models/Notifications.js
import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.UUID, default: mongoose.Types.UUID, required: true },
  user_id: { type: mongoose.Schema.Types.UUID, ref: 'User' },
  type: { type: String, enum: ['order_update', 'promotion', 'account_activity'], required: true },
  message: { type: String },
  read_status: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

export const Notification = mongoose.model('Notification', notificationSchema);

// models/Roles.js
import mongoose from 'mongoose';

const roleSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.UUID, default: mongoose.Types.UUID, required: true },
  name: { type: String, required: true },
  description: { type: String },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

export const Role = mongoose.model('Role', roleSchema);

// models/Permissions.js
import mongoose from 'mongoose';

const permissionSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.UUID, default: mongoose.Types.UUID, required: true },
  name: { type: String, required: true },
  description: { type: String },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

export const Permission = mongoose.model('Permission', permissionSchema);

// models/RolePermissions.js
import mongoose from 'mongoose';

const rolePermissionSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.UUID, default: mongoose.Types.UUID, required: true },
  role_id: { type: mongoose.Schema.Types.UUID, ref: 'Role' },
  permission_id: { type: mongoose.Schema.Types.UUID, ref: 'Permission' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

export const RolePermission = mongoose.model('RolePermission', rolePermissionSchema);
