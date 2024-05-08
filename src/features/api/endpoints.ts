export const ApiPrefix = "/v1";

export enum Api {
  HomepageSetting = `${ApiPrefix}/page-settings/get-all`, // get
  CategoryMenu = `${ApiPrefix}/category/tree-v2`, // get
  HomePageProduct = `${ApiPrefix}/product-badges/product-stocks`, // get
  ProductDetails = `${ApiPrefix}/product/product-stock/get-details`, // get
  GetSingleProductDetail = `${ApiPrefix}/product/product-stock/get/`, // get
  GetAllProduct = `${ApiPrefix}/product/product-stock/get-all`, // get
  FlashSaleProduct = `${ApiPrefix}/flash-deal/get-flash-sales-products`,
  BestShop = `${ApiPrefix}/product/product-stock/get-best-shops`, // get
  OnlyForYou = `${ApiPrefix}/product/product-stock/get-only-for-you-products`, // get
  GetHomePageCategoryList = `${ApiPrefix}/category/get-hp-customer-category-list`, // Get

  // Auth
  SingUp = `${ApiPrefix}/customer/auth/signup`, // post

  // Order
  CreateOrder = `${ApiPrefix}/order/order-create`, // post
  BaseProductDeliveryCharge = `${ApiPrefix}/delivery-cost/base-product-delivery-charge`, // post
  CartProductDeliveryCharge = `${ApiPrefix}/delivery-cost/delivery-charge`, // post

  // Dashboard Profile
  GetSideBarProfileInfo = `${ApiPrefix}/customer/profile`, // get

  // Dashboard Shipping Address
  GetShippingAddressInfo = `${ApiPrefix}/customer/address/get-all/`, // get
  GetShippingAddressInfoById = `${ApiPrefix}/customer/address/get-details/`, // get
  CreateShippingAddress = `${ApiPrefix}/customer/address/add`, // post
  UpdateShippingAddress = `${ApiPrefix}/customer/address/edit`, // post
  SetDefaultShippingAddress = `${ApiPrefix}/customer/address/default-set`, // put
  DeleteAddress = `${ApiPrefix}/customer/address/delete`, // delete

  // Dashboard Change Password
  UpdatePassword = `${ApiPrefix}/customer/change-password`, // put

  // Dashboard Change Password
  UpdateProfileInfo = `${ApiPrefix}/customer/general-info/edit`, // put

  // Dashboard Profile Picture Upload
  UploadProfilePicture = `${ApiPrefix}/customer/update-profile-image`, // post

  // Cart
  GetCarts = `${ApiPrefix}/carts/get-carts-details`, // get`
  GetAllCarts = `${ApiPrefix}/carts/get-carts`, // get``
  GetSelectedCarts = `${ApiPrefix}/carts/get-selected-carts`, // get
  AddToCart = `${ApiPrefix}/carts/add-to-cart`, // post`
  UpdateCart = `${ApiPrefix}/carts/update-cart`, // post
  RemoveFromCart = `${ApiPrefix}/carts/delete-cart-ci`, // post
  EmptyCart = `${ApiPrefix}/carts/delete-all-carts`, // post
  SelectCartItem = `${ApiPrefix}/carts/select-carts-items`, // post
  TotalCartItemCount = `${ApiPrefix}/carts/total-carts-item-count`, // get

  // User
  GetUserDefaultAddress = `${ApiPrefix}/customer/address/get-default`,

  // Dashboard Refund
  GetCustomerRefundReason = `${ApiPrefix}/reason/list/customer-return-request-reason`, // Get
  OrderCancelReason = `${ApiPrefix}/reason/list/order-cancel`, // Get
  CreateRefund = `${ApiPrefix}/order/order-refund`, // POST

  // Dashboard Orders
  GetAllRecentOrders = `${ApiPrefix}/order/recent-order-list`, // Get
  GetAllOrders = `${ApiPrefix}/order/my-order-list`, // Get
  OrderDetailsByRefId = `${ApiPrefix}/order/get-order-details/`, // Get
  PackageItemDetailsByPackageId = `${ApiPrefix}/order/get-order-package-details/`, // Get

  // Bank
  GetBankList = `${ApiPrefix}/order/get-bank-info`, // Get

  // Branch
  GetBranchList = `${ApiPrefix}/order/get-branch-info`, // Get

  // Refund
  GetRefundList = `${ApiPrefix}/order/order-refund-list`, // Get

  // Category Products
  GetCategoryProducts = `${ApiPrefix}/product/product-stock/get-category-wise`, // Get
  GetCategorySlugProducts = `${ApiPrefix}/product/product-stock/get-category-slug-wise`, // Get

  // Order Confirmation
  GetOrderInvoiceFormatted = `${ApiPrefix}/order/order-invoice-formatted/`, // Get

  // OTP Confirmation
  OTPConfirmation = `${ApiPrefix}/customer/auth/confirm_code`, // POST

  // Address
  GetCountries = `${ApiPrefix}/locations/get-countries`, // Get
  GetStates = `${ApiPrefix}/locations/get-states`, // GET
  GetCities = `${ApiPrefix}/locations/get-cities`,
  GetZones = `${ApiPrefix}/locations/get-zones`,
  GetAddressType = `${ApiPrefix}/customer/address-types/get-all`,

  // Shipping Address
  GetDefaultShippingAddress = `${ApiPrefix}/customer/address/get-default`, // GET
  GetAllShippingAddress = `${ApiPrefix}/customer/address/get-all/`, // GET

  // Wish List
  AddToWishList = `${ApiPrefix}/wishlist/create`, // post`
  GetAllWishList = `${ApiPrefix}/wishlist/favorite/list`, // GET
  DELETEWishList = `${ApiPrefix}/wishlist/favorite/remove`, // DELETE

  // Channel
  Channel = `${ApiPrefix}/channel/get-channel-list`,
  ChannelDetails = `${ApiPrefix}/channel/get-channel-details`,
  // Image Upload
  ImageUpload = `media/common/upload-files`, // POST`
  Payment = `/api/ssl/pay`, // POST`

  // Breadcrumb
  GetBreadcrumbList = `${ApiPrefix}/category/hierarchy-category-tree-v2/`, // GET

  // ProductReview
  GetProductReview = `${ApiPrefix}/product-reviews/get-reviews/`, // GET
  GetProductRatings = `${ApiPrefix}/product-reviews/get-rating-report/`, // GET
  GetProductQuestionAns = `${ApiPrefix}/product/product-stock/get-all-answers/`, // Get
  PostProductQuestionAns = `${ApiPrefix}/question-answer/add-question`, // POST
  PostProductVoucher = `${ApiPrefix}/voucher/get-product-vouchers`, // POST

  // Cash On Delivery
  CashOnDelivery = `${ApiPrefix}/order/order-payment-status-update`, // POST

  // Search
  Search = `product_index/_search`, // GET

  // Track Orders
  GetTrackOrders = `${ApiPrefix}/order/my-order-list`, // Get
  GetTrackOrderStatus = `${ApiPrefix}/order/track-my-order/`, // Get

  // Review history
  GetReviewHistory = `${ApiPrefix}/review/all-history`, // Get
  GetToReviewHistory = `${ApiPrefix}/order/get-to-reviews`, // Get
  CreateReview = `${ApiPrefix}/review/new`, // POST
  CreateSellerReview = `${ApiPrefix}/review/create-seller-review`, // POST
  CreateDeliveryReview = `${ApiPrefix}/review/create-delivery-service-review`, // POST

  /// Product is campaign check
  ProductIsCampaignCheck = `${ApiPrefix}/product/product-stock/get-flash-deals-product-countdown-time`,

  // Order
  CancelOrder = `${ApiPrefix}/order/cancel-my-order`, // POST

  // Dashboard
  GetDashboardData = `${ApiPrefix}/customer/dashboard`, // GET
}
