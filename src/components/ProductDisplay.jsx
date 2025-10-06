// import React, { useContext, useState } from "react";
// import { ShopContext } from "../Context/ShopContext";
// import { Star } from "lucide-react";
// import { Link } from "react-router";

// const ProductDisplay = (props) => {
//   const { product } = props;

//   const { increaseQuantity } = useContext(ShopContext);
//   const [mainImage, setMainImage] = useState(product.image);
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 my-20 md:gap-10 px-6 md:px-0">
//       <div className="flex md:1/2 gap-4">
//         <div className="flex flex-col gap-4 md:h-[500px]">
//           <img
//             onClick={() => setMainImage(product.image)}
//             src={product.image}
//             alt=""
//             className="md:h-[163px] h-[75px] md:w-[100px] w-[120px]"
//           />
//           <img
//             onClick={() => setMainImage(product.image1)}
//             src={product.image1}
//             alt=""
//             className="md:h-[163px] h-[75px] md:w-[100px] w-[120px]"
//           />
//           <img
//             onClick={() => setMainImage(product.image2)}
//             src={product.image2}
//             alt=""
//             className="md:h-[163px] h-[75px] md:w-[100px] w-[120px]"
//           />
//           <img
//             onClick={() => setMainImage(product.image3)}
//             src={product.image3}
//             alt=""
//             className="md:h-[163px] h-[75px] md:w-[100px] w-[120px]"
//           />
//         </div>

//         <div>
//           <img
//             src={mainImage}
//             alt=""
//             className="md:h-[580px] md:w-[480px] w-[600px]"
//           />
//         </div>
//       </div>

//       <div className="flex md:1/2 flex-col mt-8 md:mt-0">
//         <h1 className="text-[#3d3d3d] text-4xl font-bold">{product.name} </h1>
//         <div className="flex items-center gap-1 text-[#1c1c1c] text-lg mt-4 ">
//           <Star fill="#138695"></Star>
//           <Star fill="#138695"></Star>
//           <Star fill="#138695"></Star>
//           <Star fill="gray"></Star>
//           <p>(122)</p>
//         </div>

//         <div className="flex gap-5 font-semibold items-center my-5 ">
//           <div className="text-gray-500 text-2xl line-through">
//             ${product.old_price}
//           </div>
//           <div className="text-[#138695] text-3xl ">${product.new_price}</div>
//         </div>

//         <div>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolorum,
//           voluptatibus, sint, maxime quia praesentium sit sapiente cum cumque
//           necessitatibus impedit dolor? Consequuntur minus pariatur voluptatibus
//           tempore, dolore aperiam quaerat quisquam. Eveniet earum dicta vitae
//           voluptatibus dolor expedita adipisci assumenda facere atque quisquam
//           inventore itaque maxime iste quibusdam, asperiores molestias!
//         </div>
//         <div>
//           <h1 className="font-semibold text-gray-400 text-2xl mt-4">
//             Select Size
//           </h1>

//           <div className="flex flex-wrap gap-4 items-center my-4 ">
//             <div className="border bg-gray-100 p-4">UK 7</div>
//             <div className="border bg-gray-100 p-4">UK 8</div>
//             <div className="border bg-gray-100 p-4">UK 9</div>
//             <div className="border bg-gray-100 p-4">UK 10</div>
//           </div>
//         </div>

//         {/* <Link to="/cart"> */}
//         <button
//           onClick={() => increaseQuantity(product.id)}
//           className="bg-[#138695] text-white px-6 py-3 my-4 w-max "
//         >
//           ADD TO CART
//         </button>
//         {/* </Link> */}

//         <p>
//           <span className="font-semibold"> Category:</span>Sports, Gym, Running
//         </p>
//         <p>
//           <span className="font-semibold">Tags:</span>Modern ,Latest
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ProductDisplay;

// import React, { useContext, useState } from "react";
// import { ShopContext } from "../Context/ShopContext";
// import {
//   Star,
//   ShoppingCart,
//   Heart,
//   Share2,
//   Truck,
//   Shield,
//   RotateCcw,
// } from "lucide-react";
// import { Link } from "react-router";

// const ProductDisplay = (props) => {
//   const { product } = props;

//   const { increaseQuantity, all_product, addToWishlist, wishlistItems } =
//     useContext(ShopContext);

//   const [mainImage, setMainImage] = useState(product.image);
//   const [selectedSize, setSelectedSize] = useState("");
//   const [quantity, setQuantity] = useState(1);
//   const [isWishlisted, setIsWishlisted] = useState(
//     wishlistItems[product.id] || false
//   );

//   // Get product rating and reviews from context
//   const productRating = product.rating || 4.3;
//   const reviewCount = product.reviews || 122;

//   // Get available sizes from product data or use defaults
//   const availableSizes = product.sizes || [
//     "UK 7",
//     "UK 8",
//     "UK 9",
//     "UK 10",
//     "UK 11",
//   ];

//   // Get product description from context or use fallback
//   const productDescription =
//     product.description ||
//     "Experience premium quality and exceptional comfort with this product. Designed for durability and style, it combines innovative features with modern aesthetics to meet your everyday needs.";

//   // Handle wishlist toggle
//   const handleWishlistToggle = () => {
//     addToWishlist(product.id);
//     setIsWishlisted(!isWishlisted);
//   };

//   // Handle quantity change
//   const handleQuantityChange = (change) => {
//     setQuantity((prev) => Math.max(1, prev + change));
//   };

//   // Handle add to cart with selected size and quantity
//   const handleAddToCart = () => {
//     if (!selectedSize) {
//       alert("Please select a size before adding to cart");
//       return;
//     }

//     for (let i = 0; i < quantity; i++) {
//       increaseQuantity(product.id);
//     }

//     // Show success feedback
//     alert(`Added ${quantity} item(s) to cart!`);
//   };

//   // Generate star rating display
//   const renderStars = (rating) => {
//     const stars = [];
//     const fullStars = Math.floor(rating);
//     const hasHalfStar = rating % 1 >= 0.5;

//     for (let i = 1; i <= 5; i++) {
//       if (i <= fullStars) {
//         stars.push(
//           <Star key={i} fill="#138695" size={20} className="text-[#138695]" />
//         );
//       } else if (i === fullStars + 1 && hasHalfStar) {
//         stars.push(
//           <Star key={i} fill="#138695" size={20} className="text-[#138695]" />
//         );
//       } else {
//         stars.push(<Star key={i} fill="none" stroke="#d1d5db" size={20} />);
//       }
//     }
//     return stars;
//   };

//   const images = [
//     product.image,
//     product.image1,
//     product.image2,
//     product.image3,
//   ].filter(Boolean);

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
//         {/* Product Images */}
//         <div className="flex flex-col lg:flex-row gap-4">
//           {/* Thumbnails */}
//           <div className="flex lg:flex-col gap-2 order-2 lg:order-1 overflow-x-auto lg:overflow-visible">
//             {images.map((img, index) => (
//               <button
//                 key={index}
//                 onClick={() => setMainImage(img)}
//                 className={`flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 rounded-lg border-2 transition-all duration-200 ${
//                   mainImage === img ? "border-[#138695]" : "border-gray-200"
//                 }`}
//               >
//                 <img
//                   src={img}
//                   alt={`Thumbnail ${index + 1}`}
//                   className="w-full h-full object-cover rounded-md"
//                 />
//               </button>
//             ))}
//           </div>

//           {/* Main Image */}
//           <div className="relative order-1 lg:order-2 flex-1">
//             <div className="aspect-square bg-gray-50 rounded-2xl overflow-hidden">
//               <img
//                 src={mainImage}
//                 alt={product.name}
//                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
//               />
//             </div>

//             {/* Wishlist Button */}
//             <button
//               onClick={handleWishlistToggle}
//               className={`absolute top-4 right-4 p-3 rounded-full shadow-lg transition-all duration-200 ${
//                 isWishlisted
//                   ? "bg-red-500 text-white"
//                   : "bg-white text-gray-600 hover:bg-gray-50"
//               }`}
//             >
//               <Heart fill={isWishlisted ? "currentColor" : "none"} size={20} />
//             </button>
//           </div>
//         </div>

//         {/* Product Info */}
//         <div className="space-y-6">
//           {/* Breadcrumb */}
//           <nav className="text-sm text-gray-500">
//             <Link to="/" className="hover:text-[#138695]">
//               Home
//             </Link>
//             <span className="mx-2">/</span>
//             <Link
//               to={`/category/${product.category}`}
//               className="hover:text-[#138695] capitalize"
//             >
//               {product.category || "Products"}
//             </Link>
//             <span className="mx-2">/</span>
//             <span className="text-gray-800">{product.name}</span>
//           </nav>

//           {/* Product Title */}
//           <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
//             {product.name}
//           </h1>

//           {/* Rating */}
//           <div className="flex items-center gap-3">
//             <div className="flex items-center gap-1">
//               {renderStars(productRating)}
//             </div>
//             <span className="text-gray-600 font-medium">{productRating}</span>
//             <span className="text-gray-400">•</span>
//             <span className="text-gray-600">{reviewCount} reviews</span>
//           </div>

//           {/* Price */}
//           <div className="flex items-center gap-4">
//             <span className="text-3xl font-bold text-[#138695]">
//               ${product.new_price}
//             </span>
//             {product.old_price && (
//               <span className="text-xl text-gray-400 line-through">
//                 ${product.old_price}
//               </span>
//             )}
//             {product.old_price && (
//               <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-semibold">
//                 Save ${(product.old_price - product.new_price).toFixed(2)}
//               </span>
//             )}
//           </div>

//           {/* Description */}
//           <div className="text-gray-600 leading-relaxed">
//             {productDescription}
//           </div>

//           {/* Size Selection */}
//           <div className="space-y-3">
//             <div className="flex items-center justify-between">
//               <label className="font-semibold text-gray-900">Select Size</label>
//               <button className="text-sm text-[#138695] hover:underline">
//                 Size Guide
//               </button>
//             </div>
//             <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
//               {availableSizes.map((size) => (
//                 <button
//                   key={size}
//                   onClick={() => setSelectedSize(size)}
//                   className={`py-3 px-4 border-2 rounded-lg text-center font-medium transition-all duration-200 ${
//                     selectedSize === size
//                       ? "border-[#138695] bg-blue-50 text-[#138695]"
//                       : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
//                   }`}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Quantity Selection */}
//           <div className="space-y-3">
//             <label className="font-semibold text-gray-900">Quantity</label>
//             <div className="flex items-center gap-4">
//               <div className="flex items-center border border-gray-200 rounded-lg">
//                 <button
//                   onClick={() => handleQuantityChange(-1)}
//                   className="p-3 hover:bg-gray-50 transition-colors"
//                 >
//                   <span className="text-xl font-bold">−</span>
//                 </button>
//                 <span className="px-6 py-3 text-lg font-semibold min-w-[60px] text-center">
//                   {quantity}
//                 </span>
//                 <button
//                   onClick={() => handleQuantityChange(1)}
//                   className="p-3 hover:bg-gray-50 transition-colors"
//                 >
//                   <span className="text-xl font-bold">+</span>
//                 </button>
//               </div>
//               <span className="text-sm text-gray-500">
//                 {product.stock || 15} items available
//               </span>
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 pt-4">
//             <button
//               onClick={handleAddToCart}
//               className="flex-1 bg-[#138695] text-white py-4 px-6 rounded-xl font-semibold hover:bg-[#0f6d75] transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
//             >
//               <ShoppingCart size={20} />
//               Add to Cart
//             </button>
//             <button className="px-6 py-4 border-2 border-[#138695] text-[#138695] rounded-xl font-semibold hover:bg-[#138695] hover:text-white transition-all duration-200 flex items-center justify-center gap-2">
//               <Share2 size={20} />
//               Share
//             </button>
//           </div>

//           {/* Product Features */}
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-200">
//             <div className="flex items-center gap-3 text-gray-600">
//               <Truck size={20} className="text-[#138695]" />
//               <div>
//                 <div className="font-semibold">Free Shipping</div>
//                 <div className="text-sm">Delivery in 2-3 days</div>
//               </div>
//             </div>
//             <div className="flex items-center gap-3 text-gray-600">
//               <Shield size={20} className="text-[#138695]" />
//               <div>
//                 <div className="font-semibold">2-Year Warranty</div>
//                 <div className="text-sm">Quality guaranteed</div>
//               </div>
//             </div>
//             <div className="flex items-center gap-3 text-gray-600">
//               <RotateCcw size={20} className="text-[#138695]" />
//               <div>
//                 <div className="font-semibold">Easy Returns</div>
//                 <div className="text-sm">30-day return policy</div>
//               </div>
//             </div>
//           </div>

//           {/* Product Meta */}
//           <div className="text-sm text-gray-500 space-y-1">
//             <p>
//               <span className="font-semibold text-gray-700">Category:</span>{" "}
//               <span className="capitalize">
//                 {product.category || "Sports, Gym, Running"}
//               </span>
//             </p>
//             <p>
//               <span className="font-semibold text-gray-700">Tags:</span>{" "}
//               {product.tags || "Modern, Latest, Premium"}
//             </p>
//             <p>
//               <span className="font-semibold text-gray-700">SKU:</span>{" "}
//               {product.id}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDisplay;

// import React, { useContext, useState } from "react";
// import { ShopContext } from "../Context/ShopContext";
// import {
//   Star,
//   ShoppingCart,
//   Heart,
//   Share2,
//   Truck,
//   Shield,
//   RotateCcw,
//   Check,
// } from "lucide-react";
// import { Link } from "react-router";

// const ProductDisplay = (props) => {
//   const { product } = props;

//   const shopContext = useContext(ShopContext);

//   // Safe destructuring with default values
//   const {
//     increaseQuantity,
//     addToWishlist,
//     wishlistItems = {},
//   } = shopContext || {};

//   const [mainImage, setMainImage] = useState(product.image);
//   const [selectedSize, setSelectedSize] = useState("");
//   const [selectedColor, setSelectedColor] = useState("");
//   const [quantity, setQuantity] = useState(1);
//   const [activeTab, setActiveTab] = useState("description");

//   // Safe wishlist check
//   const [isWishlisted, setIsWishlisted] = useState(
//     wishlistItems ? wishlistItems[product.id] : false
//   );

//   // Use data from your JSON
//   const productRating = product.rating || 4.3;
//   const reviewCount = product.review_count || 122;
//   const availableSizes = product.sizes || ["7", "8", "9", "10"];
//   const availableColors = product.colors || ["Black", "White", "Blue"];
//   const productDescription = product.description;
//   const features = product.features || [];
//   const specifications = product.specifications || {};
//   const reviews = product.reviews || [];

//   // Handle wishlist toggle
//   const handleWishlistToggle = () => {
//     if (addToWishlist) {
//       addToWishlist(product.id);
//     }
//     setIsWishlisted(!isWishlisted);
//   };

//   // Handle quantity change
//   const handleQuantityChange = (change) => {
//     setQuantity((prev) => Math.max(1, prev + change));
//   };

//   // Handle add to cart with validation
//   const handleAddToCart = () => {
//     if (!increaseQuantity) {
//       alert("System error. Please try again later.");
//       return;
//     }

//     if (!selectedSize) {
//       alert("Please select a size before adding to cart");
//       return;
//     }

//     for (let i = 0; i < quantity; i++) {
//       increaseQuantity(product.id);
//     }

//     alert(`Added ${quantity} ${product.name} (Size: ${selectedSize}) to cart!`);
//   };

//   // Generate star rating display
//   const renderStars = (rating) => {
//     const stars = [];
//     for (let i = 1; i <= 5; i++) {
//       if (i <= rating) {
//         stars.push(
//           <Star key={i} fill="#138695" size={20} className="text-[#138695]" />
//         );
//       } else if (i - 0.5 <= rating) {
//         stars.push(
//           <Star key={i} fill="#138695" size={20} className="text-[#138695]" />
//         );
//       } else {
//         stars.push(<Star key={i} fill="none" stroke="#d1d5db" size={20} />);
//       }
//     }
//     return stars;
//   };

//   const images = [
//     product.image,
//     product.image1,
//     product.image2,
//     product.image3,
//   ].filter(Boolean);

//   // If context is not available, show basic product info
//   if (!shopContext) {
//     return (
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="text-yellow-600 bg-yellow-50 p-4 rounded-lg mb-4">
//           <p>Shop context not available. Showing product information only.</p>
//         </div>
//         {/* Basic product display without context functionality */}
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
//         {/* Product Images Section */}
//         <div className="space-y-4">
//           {/* Main Image */}
//           <div className="bg-gray-50 rounded-2xl overflow-hidden">
//             <img
//               src={mainImage}
//               alt={product.name}
//               className="w-full h-96 object-contain hover:scale-105 transition-transform duration-500"
//             />
//           </div>

//           {/* Thumbnails */}
//           <div className="flex gap-3 overflow-x-auto pb-2">
//             {images.map((img, index) => (
//               <button
//                 key={index}
//                 onClick={() => setMainImage(img)}
//                 className={`flex-shrink-0 w-20 h-20 rounded-lg border-2 transition-all ${
//                   mainImage === img ? "border-[#138695]" : "border-gray-200"
//                 }`}
//               >
//                 <img
//                   src={img}
//                   alt={`${product.name} view ${index + 1}`}
//                   className="w-full h-full object-cover rounded-md"
//                 />
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Product Info Section */}
//         <div className="space-y-6">
//           {/* Breadcrumb */}
//           <nav className="text-sm text-gray-500">
//             <Link to="/" className="hover:text-[#138695] transition-colors">
//               Home
//             </Link>
//             <span className="mx-2">/</span>
//             <span className="text-gray-800 font-medium capitalize">
//               {product.category}
//             </span>
//             <span className="mx-2">/</span>
//             <span className="text-gray-600">{product.name}</span>
//           </nav>

//           {/* Product Title */}
//           <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
//             {product.name}
//           </h1>

//           {/* Rating and Reviews */}
//           <div className="flex items-center gap-4">
//             <div className="flex items-center gap-2">
//               <div className="flex items-center gap-1">
//                 {renderStars(productRating)}
//               </div>
//               <span className="text-lg font-semibold text-gray-700">
//                 {productRating}
//               </span>
//             </div>
//             <span className="text-gray-400">•</span>
//             <span className="text-gray-600 hover:text-[#138695] cursor-pointer">
//               {reviewCount} reviews
//             </span>
//             <span className="text-gray-400">•</span>
//             <span
//               className={`px-2 py-1 rounded-full text-xs font-medium ${
//                 product.in_stock
//                   ? "bg-green-100 text-green-800"
//                   : "bg-red-100 text-red-800"
//               }`}
//             >
//               {product.in_stock ? "In Stock" : "Out of Stock"}
//             </span>
//           </div>

//           {/* Price */}
//           <div className="flex items-center gap-4">
//             <span className="text-3xl font-bold text-[#138695]">
//               ${product.new_price}
//             </span>
//             {product.old_price && (
//               <span className="text-xl text-gray-400 line-through">
//                 ${product.old_price}
//               </span>
//             )}
//             {product.old_price && (
//               <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-semibold">
//                 Save ${(product.old_price - product.new_price).toFixed(2)}
//               </span>
//             )}
//           </div>

//           {/* Description */}
//           <p className="text-gray-600 leading-relaxed">{productDescription}</p>

//           {/* Features List */}
//           {features.length > 0 && (
//             <div className="space-y-2">
//               <h3 className="font-semibold text-gray-900">Key Features:</h3>
//               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//                 {features.map((feature, index) => (
//                   <li
//                     key={index}
//                     className="flex items-center gap-2 text-sm text-gray-600"
//                   >
//                     <Check size={16} className="text-green-500" />
//                     {feature}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {/* Color Selection */}
//           {availableColors.length > 0 && (
//             <div className="space-y-3">
//               <label className="font-semibold text-gray-900">
//                 Select Color
//               </label>
//               <div className="flex gap-3">
//                 {availableColors.map((color) => (
//                   <button
//                     key={color}
//                     onClick={() => setSelectedColor(color)}
//                     className={`px-4 py-2 border-2 rounded-lg font-medium transition-all ${
//                       selectedColor === color
//                         ? "border-[#138695] bg-blue-50 text-[#138695]"
//                         : "border-gray-200 hover:border-gray-300"
//                     }`}
//                   >
//                     {color}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Size Selection */}
//           <div className="space-y-3">
//             <div className="flex items-center justify-between">
//               <label className="font-semibold text-gray-900">Select Size</label>
//               <button className="text-sm text-[#138695] hover:underline">
//                 Size Guide
//               </button>
//             </div>
//             <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
//               {availableSizes.map((size) => (
//                 <button
//                   key={size}
//                   onClick={() => setSelectedSize(size)}
//                   className={`py-3 px-2 border-2 rounded-lg text-center font-medium transition-all ${
//                     selectedSize === size
//                       ? "border-[#138695] bg-blue-50 text-[#138695]"
//                       : "border-gray-200 hover:border-gray-300"
//                   }`}
//                 >
//                   UK {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Quantity and Actions */}
//           <div className="space-y-4">
//             <div className="flex items-center gap-4">
//               <label className="font-semibold text-gray-900">Quantity:</label>
//               <div className="flex items-center border border-gray-200 rounded-lg">
//                 <button
//                   onClick={() => handleQuantityChange(-1)}
//                   className="p-3 hover:bg-gray-50 transition-colors"
//                 >
//                   <span className="text-xl font-bold">−</span>
//                 </button>
//                 <span className="px-6 py-2 text-lg font-semibold min-w-[60px] text-center">
//                   {quantity}
//                 </span>
//                 <button
//                   onClick={() => handleQuantityChange(1)}
//                   className="p-3 hover:bg-gray-50 transition-colors"
//                 >
//                   <span className="text-xl font-bold">+</span>
//                 </button>
//               </div>
//             </div>

//             <div className="flex gap-4">
//               <button
//                 onClick={handleAddToCart}
//                 disabled={!product.in_stock}
//                 className="flex-1 bg-[#138695] text-white py-4 px-6 rounded-xl font-semibold hover:bg-[#0f6d75] transition-all disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//               >
//                 <ShoppingCart size={20} />
//                 {product.in_stock ? "Add to Cart" : "Out of Stock"}
//               </button>

//               <button
//                 onClick={handleWishlistToggle}
//                 className={`p-4 border-2 rounded-xl transition-all ${
//                   isWishlisted
//                     ? "border-red-500 bg-red-50 text-red-500"
//                     : "border-gray-300 text-gray-600 hover:border-[#138695] hover:text-[#138695]"
//                 }`}
//               >
//                 <Heart
//                   fill={isWishlisted ? "currentColor" : "none"}
//                   size={20}
//                 />
//               </button>
//             </div>
//           </div>

//           {/* Product Features Icons */}
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-200">
//             <div className="flex items-center gap-3 text-gray-600">
//               <Truck size={20} className="text-[#138695]" />
//               <span className="text-sm font-medium">Free Shipping</span>
//             </div>
//             <div className="flex items-center gap-3 text-gray-600">
//               <Shield size={20} className="text-[#138695]" />
//               <span className="text-sm font-medium">2-Year Warranty</span>
//             </div>
//             <div className="flex items-center gap-3 text-gray-600">
//               <RotateCcw size={20} className="text-[#138695]" />
//               <span className="text-sm font-medium">30-Day Returns</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Additional Product Information Tabs */}
//       {/* <div className="mt-12 border-t border-gray-200 pt-8">
//         <div className="flex border-b border-gray-200">
//           {[
//             { id: "description", label: "Description" },
//             { id: "specifications", label: "Specifications" },
//             { id: "reviews", label: `Reviews (${reviews.length})` },
//           ].map((tab) => (
//             <button
//               key={tab.id}
//               onClick={() => setActiveTab(tab.id)}
//               className={`px-6 py-3 font-medium border-b-2 transition-colors ${
//                 activeTab === tab.id
//                   ? "border-[#138695] text-[#138695]"
//                   : "border-transparent text-gray-500 hover:text-gray-700"
//               }`}
//             >
//               {tab.label}
//             </button>
//           ))}
//         </div>

//         <div className="py-6">
//           {activeTab === "description" && (
//             <div className="prose max-w-none">
//               <p className="text-gray-600">{productDescription}</p>
//               {features.length > 0 && (
//                 <div className="mt-4">
//                   <h4 className="font-semibold text-gray-900 mb-3">
//                     Features:
//                   </h4>
//                   <ul className="grid gap-2">
//                     {features.map((feature, index) => (
//                       <li key={index} className="flex items-center gap-2">
//                         <Check size={16} className="text-green-500" />
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>
//           )}

//           {activeTab === "specifications" && (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {Object.entries(specifications).map(([key, value]) => (
//                 <div
//                   key={key}
//                   className="flex justify-between py-2 border-b border-gray-100"
//                 >
//                   <span className="font-medium text-gray-600 capitalize">
//                     {key.replace("_", " ")}:
//                   </span>
//                   <span className="text-gray-900">{value}</span>
//                 </div>
//               ))}
//             </div>
//           )}

//           {activeTab === "reviews" && (
//             <div className="space-y-6">
//               {reviews.map((review) => (
//                 <div key={review.id} className="border-b border-gray-100 pb-6">
//                   <div className="flex items-center gap-4 mb-2">
//                     <div className="flex items-center gap-1">
//                       {renderStars(review.rating)}
//                     </div>
//                     <span className="font-semibold">
//                       {review.customer_name}
//                     </span>
//                     {review.verified_purchase && (
//                       <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
//                         Verified Purchase
//                       </span>
//                     )}
//                   </div>
//                   <p className="text-gray-600 mb-2">{review.comment}</p>
//                   <span className="text-sm text-gray-400">{review.date}</span>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div> */}
//     </div>
//   );
// };

// export default ProductDisplay;

// import React, { useContext, useState } from "react";
// import { ShopContext } from "../Context/ShopContext";
// import {
//   Star,
//   ShoppingCart,
//   Heart,
//   Share2,
//   Truck,
//   Shield,
//   RotateCcw,
//   Check,
//   AlertCircle,
// } from "lucide-react";
// import { Link } from "react-router";

// const ProductDisplay = (props) => {
//   const { product } = props;

//   const shopContext = useContext(ShopContext);

//   const {
//     increaseQuantity,
//     addToWishlist,
//     wishlistItems = {},
//   } = shopContext || {};

//   const [mainImage, setMainImage] = useState(product.image);
//   const [selectedSize, setSelectedSize] = useState("");
//   const [selectedColor, setSelectedColor] = useState("");
//   const [quantity, setQuantity] = useState(1);
//   const [activeTab, setActiveTab] = useState("description");
//   const [errors, setErrors] = useState({});

//   const [isWishlisted, setIsWishlisted] = useState(
//     wishlistItems ? wishlistItems[product.id] : false
//   );

//   // Use data from your JSON
//   const productRating = product.rating || 4.3;
//   const reviewCount = product.review_count || 122;
//   const availableSizes = product.sizes || ["7", "8", "9", "10"];
//   const availableColors = product.colors || ["Black", "White", "Blue"];
//   const productDescription = product.description;
//   const features = product.features || [];
//   const specifications = product.specifications || {};
//   const reviews = product.reviews || [];

//   // Handle wishlist toggle
//   const handleWishlistToggle = () => {
//     if (addToWishlist) {
//       addToWishlist(product.id);
//     }
//     setIsWishlisted(!isWishlisted);
//   };

//   // Handle quantity change
//   const handleQuantityChange = (change) => {
//     setQuantity((prev) => Math.max(1, prev + change));
//     // Clear quantity error when user changes quantity
//     if (errors.quantity) {
//       setErrors((prev) => ({ ...prev, quantity: "" }));
//     }
//   };

//   // Validate form before adding to cart
//   const validateForm = () => {
//     const newErrors = {};

//     if (!selectedColor) {
//       newErrors.color = "Please select a color";
//     }

//     if (!selectedSize) {
//       newErrors.size = "Please select a size";
//     }

//     if (quantity < 1) {
//       newErrors.quantity = "Quantity must be at least 1";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // Handle add to cart with validation
//   const handleAddToCart = () => {
//     // Clear previous errors
//     setErrors({});

//     // Validate form
//     if (!validateForm()) {
//       // Scroll to first error
//       setTimeout(() => {
//         const firstErrorElement = document.querySelector('[data-error="true"]');
//         if (firstErrorElement) {
//           firstErrorElement.scrollIntoView({
//             behavior: "smooth",
//             block: "center",
//           });
//         }
//       }, 100);
//       return;
//     }

//     if (!increaseQuantity) {
//       alert("System error. Please try again later.");
//       return;
//     }

//     // Add to cart with selected options
//     for (let i = 0; i < quantity; i++) {
//       increaseQuantity(product.id);
//     }

//     // Show success message with selected options
//     alert(
//       `✅ Added ${quantity} × ${product.name} (Color: ${selectedColor}, Size: UK ${selectedSize}) to cart!`
//     );

//     // Optional: Reset form after successful add
//     // setSelectedColor("");
//     // setSelectedSize("");
//     // setQuantity(1);
//   };

//   // Generate star rating display
//   const renderStars = (rating) => {
//     const stars = [];
//     for (let i = 1; i <= 5; i++) {
//       if (i <= rating) {
//         stars.push(
//           <Star key={i} fill="#138695" size={20} className="text-[#138695]" />
//         );
//       } else if (i - 0.5 <= rating) {
//         stars.push(
//           <Star key={i} fill="#138695" size={20} className="text-[#138695]" />
//         );
//       } else {
//         stars.push(<Star key={i} fill="none" stroke="#d1d5db" size={20} />);
//       }
//     }
//     return stars;
//   };

//   const images = [
//     product.image,
//     product.image1,
//     product.image2,
//     product.image3,
//   ].filter(Boolean);

//   // Check if add to cart button should be disabled
//   const isAddToCartDisabled = !selectedColor || !selectedSize || quantity < 1;

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
//         {/* Product Images Section */}
//         <div className="space-y-4">
//           <div className="bg-gray-50 rounded-2xl overflow-hidden">
//             <img
//               src={mainImage}
//               alt={product.name}
//               className="w-full h-96 object-contain hover:scale-105 transition-transform duration-500"
//             />
//           </div>

//           <div className="flex gap-3 overflow-x-auto pb-2">
//             {images.map((img, index) => (
//               <button
//                 key={index}
//                 onClick={() => setMainImage(img)}
//                 className={`flex-shrink-0 w-20 h-20 rounded-lg border-2 transition-all ${
//                   mainImage === img ? "border-[#138695]" : "border-gray-200"
//                 }`}
//               >
//                 <img
//                   src={img}
//                   alt={`${product.name} view ${index + 1}`}
//                   className="w-full h-full object-cover rounded-md"
//                 />
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Product Info Section */}
//         <div className="space-y-6">
//           {/* Breadcrumb */}
//           <nav className="text-sm text-gray-500">
//             <Link to="/" className="hover:text-[#138695] transition-colors">
//               Home
//             </Link>
//             <span className="mx-2">/</span>
//             <span className="text-gray-800 font-medium capitalize">
//               {product.category}
//             </span>
//             <span className="mx-2">/</span>
//             <span className="text-gray-600">{product.name}</span>
//           </nav>

//           <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
//             {product.name}
//           </h1>

//           <div className="flex items-center gap-4">
//             <div className="flex items-center gap-2">
//               <div className="flex items-center gap-1">
//                 {renderStars(productRating)}
//               </div>
//               <span className="text-lg font-semibold text-gray-700">
//                 {productRating}
//               </span>
//             </div>
//             <span className="text-gray-400">•</span>
//             <span className="text-gray-600 hover:text-[#138695] cursor-pointer">
//               {reviewCount} reviews
//             </span>
//             <span
//               className={`px-2 py-1 rounded-full text-xs font-medium ${
//                 product.in_stock
//                   ? "bg-green-100 text-green-800"
//                   : "bg-red-100 text-red-800"
//               }`}
//             >
//               {product.in_stock ? "In Stock" : "Out of Stock"}
//             </span>
//           </div>

//           {/* Price */}
//           <div className="flex items-center gap-4">
//             <span className="text-3xl font-bold text-[#138695]">
//               ${product.new_price}
//             </span>
//             {product.old_price && (
//               <span className="text-xl text-gray-400 line-through">
//                 ${product.old_price}
//               </span>
//             )}
//             {product.old_price && (
//               <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-semibold">
//                 Save ${(product.old_price - product.new_price).toFixed(2)}
//               </span>
//             )}
//           </div>

//           <p className="text-gray-600 leading-relaxed">{productDescription}</p>

//           {/* Features List */}
//           {features.length > 0 && (
//             <div className="space-y-2">
//               <h3 className="font-semibold text-gray-900">Key Features:</h3>
//               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//                 {features.map((feature, index) => (
//                   <li
//                     key={index}
//                     className="flex items-center gap-2 text-sm text-gray-600"
//                   >
//                     <Check size={16} className="text-green-500" />
//                     {feature}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {/* Color Selection with Error */}
//           <div className="space-y-3" data-error={!!errors.color}>
//             <div className="flex items-center justify-between">
//               <label className="font-semibold text-gray-900">
//                 Select Color *
//               </label>
//               {errors.color && (
//                 <span className="text-red-500 text-sm flex items-center gap-1">
//                   <AlertCircle size={14} />
//                   {errors.color}
//                 </span>
//               )}
//             </div>
//             <div className="flex gap-3">
//               {availableColors.map((color) => (
//                 <button
//                   key={color}
//                   onClick={() => {
//                     setSelectedColor(color);
//                     if (errors.color)
//                       setErrors((prev) => ({ ...prev, color: "" }));
//                   }}
//                   className={`px-4 py-2 border-2 rounded-lg font-medium transition-all ${
//                     selectedColor === color
//                       ? "border-[#138695] bg-blue-50 text-[#138695]"
//                       : "border-gray-200 hover:border-gray-300"
//                   } ${errors.color ? "border-red-300 bg-red-50" : ""}`}
//                 >
//                   {color}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Size Selection with Error */}
//           <div className="space-y-3" data-error={!!errors.size}>
//             <div className="flex items-center justify-between">
//               <label className="font-semibold text-gray-900">
//                 Select Size *
//               </label>
//               {errors.size && (
//                 <span className="text-red-500 text-sm flex items-center gap-1">
//                   <AlertCircle size={14} />
//                   {errors.size}
//                 </span>
//               )}
//             </div>
//             <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
//               {availableSizes.map((size) => (
//                 <button
//                   key={size}
//                   onClick={() => {
//                     setSelectedSize(size);
//                     if (errors.size)
//                       setErrors((prev) => ({ ...prev, size: "" }));
//                   }}
//                   className={`py-3 px-2 border-2 rounded-lg text-center font-medium transition-all ${
//                     selectedSize === size
//                       ? "border-[#138695] bg-blue-50 text-[#138695]"
//                       : "border-gray-200 hover:border-gray-300"
//                   } ${errors.size ? "border-red-300 bg-red-50" : ""}`}
//                 >
//                   UK {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Quantity Selection with Error */}
//           <div className="space-y-3" data-error={!!errors.quantity}>
//             <div className="flex items-center justify-between">
//               <label className="font-semibold text-gray-900">Quantity *</label>
//               {errors.quantity && (
//                 <span className="text-red-500 text-sm flex items-center gap-1">
//                   <AlertCircle size={14} />
//                   {errors.quantity}
//                 </span>
//               )}
//             </div>
//             <div className="flex items-center gap-4">
//               <div
//                 className={`flex items-center border rounded-lg transition-all ${
//                   errors.quantity
//                     ? "border-red-300 bg-red-50"
//                     : "border-gray-200"
//                 }`}
//               >
//                 <button
//                   onClick={() => handleQuantityChange(-1)}
//                   className="p-3 hover:bg-gray-50 transition-colors"
//                 >
//                   <span className="text-xl font-bold">−</span>
//                 </button>
//                 <span className="px-6 py-2 text-lg font-semibold min-w-[60px] text-center">
//                   {quantity}
//                 </span>
//                 <button
//                   onClick={() => handleQuantityChange(1)}
//                   className="p-3 hover:bg-gray-50 transition-colors"
//                 >
//                   <span className="text-xl font-bold">+</span>
//                 </button>
//               </div>
//               <span className="text-sm text-gray-500">
//                 {product.stock || 15} items available
//               </span>
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="space-y-4 pt-4">
//             <div className="flex gap-4">
//               <button
//                 onClick={handleAddToCart}
//                 disabled={!product.in_stock || isAddToCartDisabled}
//                 className={`flex-1 py-4 px-6 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
//                   product.in_stock && !isAddToCartDisabled
//                     ? "bg-[#138695] text-white hover:bg-[#0f6d75] hover:shadow-lg"
//                     : "bg-gray-300 text-gray-500 cursor-not-allowed"
//                 }`}
//               >
//                 <ShoppingCart size={20} />
//                 {!product.in_stock
//                   ? "Out of Stock"
//                   : isAddToCartDisabled
//                   ? "Select Options"
//                   : "Add to Cart"}
//               </button>

//               <button
//                 onClick={handleWishlistToggle}
//                 className={`p-4 border-2 rounded-xl transition-all ${
//                   isWishlisted
//                     ? "border-red-500 bg-red-50 text-red-500"
//                     : "border-gray-300 text-gray-600 hover:border-[#138695] hover:text-[#138695]"
//                 }`}
//               >
//                 <Heart
//                   fill={isWishlisted ? "currentColor" : "none"}
//                   size={20}
//                 />
//               </button>
//             </div>

//             {/* Requirements Info */}
//             <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
//               <p className="text-blue-800 text-sm flex items-center gap-2">
//                 <AlertCircle size={16} />
//                 <span>
//                   Please select color, size, and quantity before adding to cart
//                 </span>
//               </p>
//             </div>
//           </div>

//           {/* Selected Options Summary */}
//           {(selectedColor || selectedSize) && (
//             <div className="bg-green-50 border border-green-200 rounded-lg p-4">
//               <h4 className="font-semibold text-green-800 mb-2">
//                 Selected Options:
//               </h4>
//               <div className="text-sm text-green-700 space-y-1">
//                 {selectedColor && <p>• Color: {selectedColor}</p>}
//                 {selectedSize && <p>• Size: UK {selectedSize}</p>}
//                 <p>• Quantity: {quantity}</p>
//               </div>
//             </div>
//           )}

//           {/* Product Features Icons */}
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-200">
//             <div className="flex items-center gap-3 text-gray-600">
//               <Truck size={20} className="text-[#138695]" />
//               <span className="text-sm font-medium">Free Shipping</span>
//             </div>
//             <div className="flex items-center gap-3 text-gray-600">
//               <Shield size={20} className="text-[#138695]" />
//               <span className="text-sm font-medium">2-Year Warranty</span>
//             </div>
//             <div className="flex items-center gap-3 text-gray-600">
//               <RotateCcw size={20} className="text-[#138695]" />
//               <span className="text-sm font-medium">30-Day Returns</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDisplay;

import React, { useContext, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import {
  Star,
  ShoppingCart,
  Heart,
  Share2,
  Truck,
  Shield,
  RotateCcw,
  Check,
  AlertCircle,
} from "lucide-react";
import { Link } from "react-router";

const ProductDisplay = (props) => {
  const { product } = props;
  const shopContext = useContext(ShopContext);

  const {
    addToCartWithOptions,
    addToWishlist,
    wishlistItems = {},
  } = shopContext || {};

  const [mainImage, setMainImage] = useState(product.image);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [errors, setErrors] = useState({});

  const [isWishlisted, setIsWishlisted] = useState(
    wishlistItems ? wishlistItems[product.id] : false
  );

  // Use data from your JSON
  const productRating = product.rating || 4.3;
  const reviewCount = product.review_count || 122;
  const availableSizes = product.sizes || ["7", "8", "9", "10"];
  const availableColors = product.colors || ["Black", "White", "Blue"];
  const productDescription = product.description;
  const features = product.features || [];
  const specifications = product.specifications || {};
  const reviews = product.reviews || [];

  // Handle wishlist toggle
  const handleWishlistToggle = () => {
    if (addToWishlist) {
      addToWishlist(product.id);
    }
    setIsWishlisted(!isWishlisted);
  };

  // Handle quantity change
  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(1, prev + change));
    // Clear quantity error when user changes quantity
    if (errors.quantity) {
      setErrors((prev) => ({ ...prev, quantity: "" }));
    }
  };

  // Validate form before adding to cart
  const validateForm = () => {
    const newErrors = {};

    if (!selectedColor) {
      newErrors.color = "Please select a color";
    }

    if (!selectedSize) {
      newErrors.size = "Please select a size";
    }

    if (quantity < 1) {
      newErrors.quantity = "Quantity must be at least 1";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle add to cart with validation - UPDATED to use addToCartWithOptions
  const handleAddToCart = () => {
    // Clear previous errors
    setErrors({});

    // Validate form
    if (!validateForm()) {
      // Scroll to first error
      setTimeout(() => {
        const firstErrorElement = document.querySelector('[data-error="true"]');
        if (firstErrorElement) {
          firstErrorElement.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      }, 100);
      return;
    }

    if (!addToCartWithOptions) {
      alert("System error. Please try again later.");
      return;
    }

    // Add to cart with selected options using the new function
    addToCartWithOptions(product.id, {
      color: selectedColor,
      size: selectedSize,
      quantity: quantity,
    });

    // Show success message with selected options
    alert(
      `✅ Added ${quantity} × ${product.name} (Color: ${selectedColor}, Size: UK ${selectedSize}) to cart!`
    );

    // Optional: Reset form after successful add
    // setSelectedColor("");
    // setSelectedSize("");
    // setQuantity(1);
  };

  // Generate star rating display
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <Star key={i} fill="#138695" size={20} className="text-[#138695]" />
        );
      } else if (i - 0.5 <= rating) {
        stars.push(
          <Star key={i} fill="#138695" size={20} className="text-[#138695]" />
        );
      } else {
        stars.push(<Star key={i} fill="none" stroke="#d1d5db" size={20} />);
      }
    }
    return stars;
  };

  const images = [
    product.image,
    product.image1,
    product.image2,
    product.image3,
  ].filter(Boolean);

  // Check if add to cart button should be disabled
  const isAddToCartDisabled = !selectedColor || !selectedSize || quantity < 1;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Images Section */}
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-2xl overflow-hidden">
            <img
              src={mainImage}
              alt={product.name}
              className="w-full h-96 object-contain hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setMainImage(img)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg border-2 transition-all ${
                  mainImage === img ? "border-[#138695]" : "border-gray-200"
                }`}
              >
                <img
                  src={img}
                  alt={`${product.name} view ${index + 1}`}
                  className="w-full h-full object-cover rounded-md"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info Section */}
        <div className="space-y-6">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500">
            <Link to="/" className="hover:text-[#138695] transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium capitalize">
              {product.category}
            </span>
            <span className="mx-2">/</span>
            <span className="text-gray-600">{product.name}</span>
          </nav>

          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
            {product.name}
          </h1>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {renderStars(productRating)}
              </div>
              <span className="text-lg font-semibold text-gray-700">
                {productRating}
              </span>
            </div>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600 hover:text-[#138695] cursor-pointer">
              {reviewCount} reviews
            </span>
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                product.in_stock
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {product.in_stock ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-[#138695]">
              ${product.new_price}
            </span>
            {product.old_price && (
              <span className="text-xl text-gray-400 line-through">
                ${product.old_price}
              </span>
            )}
            {product.old_price && (
              <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-semibold">
                Save ${(product.old_price - product.new_price).toFixed(2)}
              </span>
            )}
          </div>

          <p className="text-gray-600 leading-relaxed">{productDescription}</p>

          {/* Features List */}
          {features.length > 0 && (
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900">Key Features:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <Check size={16} className="text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Color Selection with Error */}
          <div className="space-y-3" data-error={!!errors.color}>
            <div className="flex items-center justify-between">
              <label className="font-semibold text-gray-900">
                Select Color *
              </label>
              {errors.color && (
                <span className="text-red-500 text-sm flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.color}
                </span>
              )}
            </div>
            <div className="flex gap-3">
              {availableColors.map((color) => (
                <button
                  key={color}
                  onClick={() => {
                    setSelectedColor(color);
                    if (errors.color)
                      setErrors((prev) => ({ ...prev, color: "" }));
                  }}
                  className={`px-4 py-2 border-2 rounded-lg font-medium transition-all ${
                    selectedColor === color
                      ? "border-[#138695] bg-blue-50 text-[#138695]"
                      : "border-gray-200 hover:border-gray-300"
                  } ${errors.color ? "border-red-300 bg-red-50" : ""}`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection with Error */}
          <div className="space-y-3" data-error={!!errors.size}>
            <div className="flex items-center justify-between">
              <label className="font-semibold text-gray-900">
                Select Size *
              </label>
              {errors.size && (
                <span className="text-red-500 text-sm flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.size}
                </span>
              )}
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
              {availableSizes.map((size) => (
                <button
                  key={size}
                  onClick={() => {
                    setSelectedSize(size);
                    if (errors.size)
                      setErrors((prev) => ({ ...prev, size: "" }));
                  }}
                  className={`py-3 px-2 border-2 rounded-lg text-center font-medium transition-all ${
                    selectedSize === size
                      ? "border-[#138695] bg-blue-50 text-[#138695]"
                      : "border-gray-200 hover:border-gray-300"
                  } ${errors.size ? "border-red-300 bg-red-50" : ""}`}
                >
                  UK {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selection with Error */}
          <div className="space-y-3" data-error={!!errors.quantity}>
            <div className="flex items-center justify-between">
              <label className="font-semibold text-gray-900">Quantity *</label>
              {errors.quantity && (
                <span className="text-red-500 text-sm flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.quantity}
                </span>
              )}
            </div>
            <div className="flex items-center gap-4">
              <div
                className={`flex items-center border rounded-lg transition-all ${
                  errors.quantity
                    ? "border-red-300 bg-red-50"
                    : "border-gray-200"
                }`}
              >
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="p-3 hover:bg-gray-50 transition-colors"
                >
                  <span className="text-xl font-bold">−</span>
                </button>
                <span className="px-6 py-2 text-lg font-semibold min-w-[60px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="p-3 hover:bg-gray-50 transition-colors"
                >
                  <span className="text-xl font-bold">+</span>
                </button>
              </div>
              <span className="text-sm text-gray-500">
                {product.stock || 15} items available
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4 pt-4">
            <div className="flex gap-4">
              <button
                onClick={handleAddToCart}
                disabled={!product.in_stock || isAddToCartDisabled}
                className={`flex-1 py-4 px-6 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                  product.in_stock && !isAddToCartDisabled
                    ? "bg-[#138695] text-white hover:bg-[#0f6d75] hover:shadow-lg"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                <ShoppingCart size={20} />
                {!product.in_stock
                  ? "Out of Stock"
                  : isAddToCartDisabled
                  ? "Select Options"
                  : "Add to Cart"}
              </button>

              <button
                onClick={handleWishlistToggle}
                className={`p-4 border-2 rounded-xl transition-all ${
                  isWishlisted
                    ? "border-red-500 bg-red-50 text-red-500"
                    : "border-gray-300 text-gray-600 hover:border-[#138695] hover:text-[#138695]"
                }`}
              >
                <Heart
                  fill={isWishlisted ? "currentColor" : "none"}
                  size={20}
                />
              </button>
            </div>

            {/* Requirements Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-blue-800 text-sm flex items-center gap-2">
                <AlertCircle size={16} />
                <span>
                  Please select color, size, and quantity before adding to cart
                </span>
              </p>
            </div>
          </div>

          {/* Selected Options Summary */}
          {(selectedColor || selectedSize) && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-[#138695] mb-2">
                Selected Options:
              </h4>
              <div className="text-sm text-[#138695] space-y-1">
                {selectedColor && <p>• Color: {selectedColor}</p>}
                {selectedSize && <p>• Size: UK {selectedSize}</p>}
                <p>• Quantity: {quantity}</p>
              </div>
            </div>
          )}

          {/* Product Features Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-200">
            <div className="flex items-center gap-3 text-gray-600">
              <Truck size={20} className="text-[#138695]" />
              <span className="text-sm font-medium">Free Shipping</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <Shield size={20} className="text-[#138695]" />
              <span className="text-sm font-medium">2-Year Warranty</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <RotateCcw size={20} className="text-[#138695]" />
              <span className="text-sm font-medium">30-Day Returns</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
