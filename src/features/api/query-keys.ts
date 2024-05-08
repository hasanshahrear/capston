export enum QueryKey {
  // Cart
  GetAllCartItems = "get-all-cart-items",
  GetAllCarts = "get-all-carts",
  GetSelectedCarts = "get-selected-carts",
  TotalCartItemCount = "total-cart-item-count",

  // User
  GetUserDefaultAddress = "get-user-default-address",
  GetRefundReasons = "get-refund-reasons",
  GetUserInfo = "get-user-info",

  // Recent Orders
  GetAllRecentOrders = "get-all-recent-orders",
  GetAllOrders = "get-all-orders",
  OrderDetails = "get-order-details",
  PackageDetails = "get-package-details",

  // Bank
  GetAllBank = "get-bank-list",

  // Branch
  GetAllBranch = "get-branch-list",

  // Refund
  GetAllRefund = "get-refund-list",

  // Category Product
  GetProductByCategoryId = "get-product-by-category-id",

  // Order Confirmation
  GetOrderInvoiceFormatted = "order-invoice-formatted",

  // Location
  GetCountries = "get-countries",
  GetStates = "get-states",
  GetCities = "get-cities",
  GetZones = "get-zones",
  GetAddressType = "get-address-type",

  // Shipping Address
  GetDefaultShippingAddress = "get-default-shipping-address",
  GetAllShippingAddress = "get-all-shipping-address",
  GetShippingAddressById = "get-shipping-address-by-id",

  // Wish List
  GetAllWishList = "get-all-wish-list",

  // Only For You
  OnlyForYou = "only-for-you",

  // Profile Info
  GetProfileInfo = "get-profile-info",

  // Breadcrumb
  GetBreadcrumb = "get-breadcrumb",

  // Product Review
  GetProductReview = "get-product-review",
  GetProductRatings = "get-product-Ratings",
  GetProductQuestionAns = "get-all-answers",

  // Category Tree
  CategoryTree = "category-tree",

  // Search
  Search = "_search",
  // Track Orders
  GetTrackOrders = "my-order-list",
  GetTrackOrderStatus = "track-my-order",

  // Review History
  GetReviewHistory = "review-approved-history",
  GetToReviewHistory = "to-get-to-reviews",
  CreateReview = "create-review-new",

  // Product is campaign check
  ProductIsCampaignCheck = "get-flash-deals-product-countdown-time",

  // Product
  GetSingleProductDetail = "single-product-detail",

  // Dashboard
  GetDashboardData = "get-dashboard-data",
}
