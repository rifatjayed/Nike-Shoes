// import { useEffect, useMemo, useRef, useState } from "react";
// import { Star } from "lucide-react";

// export default function Description() {
//   const tabs = useMemo(
//     () => [
//       { id: "description", label: "DESCRIPTION" },
//       { id: "additional", label: "ADDITIONAL INFORMATION" },
//       { id: "review", label: "REVIEW" },
//     ],
//     []
//   );

//   const [active, setActive] = useState("description");
//   const containerRef = useRef(null);
//   const btnRefs = useRef({});
//   const indicatorRef = useRef(null);
//   const [isMobile, setIsMobile] = useState(false);

//   // For review state
//   const [rating, setRating] = useState(0);
//   const [hover, setHover] = useState(0);
//   const [reviews, setReviews] = useState([
//     {
//       id: 1,
//       name: "Michael T",
//       rating: 4.9,
//       title: "Very good and delicious!!",
//       text: "Lorem ipsum dolor sit amet consectetur. Curabitur et vel purus quisque diam. Euismod aliquet quis suscipit feugiat tristique cursus consectetur nisl.",
//       date: "a day ago",
//       avatar: "https://i.pravatar.cc/100?img=12",
//     },
//     {
//       id: 2,
//       name: "Michael T",
//       rating: 4.9,
//       title: "Very good and delicious!!",
//       text: "Lorem ipsum dolor sit amet consectetur. Curabitur et vel purus quisque diam. Euismod aliquet quis suscipit feugiat tristique cursus consectetur nisl.",
//       date: "a day ago",
//       avatar: "https://i.pravatar.cc/100?img=11",
//     },
//   ]);

//   // Check screen size
//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     checkScreenSize();
//     window.addEventListener("resize", checkScreenSize);

//     return () => window.removeEventListener("resize", checkScreenSize);
//   }, []);

//   // Move the underline indicator to the active tab
//   useEffect(() => {
//     const btn = btnRefs.current[active];
//     const container = containerRef.current;
//     const indicator = indicatorRef.current;
//     if (!btn || !container || !indicator) return;

//     const btnRect = btn.getBoundingClientRect();
//     const cRect = container.getBoundingClientRect();
//     const left = btnRect.left - cRect.left + container.scrollLeft;
//     indicator.style.width = `${btnRect.width}px`;
//     indicator.style.transform = `translateX(${left}px)`;
//   }, [active, isMobile]);

//   return (
//     <div className="mx-auto px-4 py-6 md:py-10">
//       <div className="rounded-2xl border border-gray-200 p-4 md:p-6 bg-white">
//         {/* Tabs Header */}
//         <div
//           ref={containerRef}
//           className="relative border-b border-gray-200 overflow-x-auto no-scrollbar"
//           role="tablist"
//           aria-label="Product details tabs"
//         >
//           <div className="flex min-w-max gap-4 md:gap-8">
//             {tabs.map((t) => (
//               <button
//                 key={t.id}
//                 ref={(el) => (btnRefs.current[t.id] = el)}
//                 role="tab"
//                 aria-selected={active === t.id}
//                 aria-controls={`panel-${t.id}`}
//                 id={`tab-${t.id}`}
//                 onClick={() => setActive(t.id)}
//                 className={`relative py-3 md:py-4 text-xs md:text-sm tracking-wide whitespace-nowrap transition-colors hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 rounded-md ${
//                   active === t.id
//                     ? "text-gray-900 font-semibold"
//                     : "text-gray-500"
//                 }`}
//               >
//                 {isMobile ? t.label.split(" ")[0] : t.label}
//               </button>
//             ))}
//           </div>
//           {/* Active underline */}
//           <div
//             ref={indicatorRef}
//             className="pointer-events-none absolute bottom-0 h-0.5 bg-[#138695] transition-transform duration-300"
//             style={{ width: 0, transform: "translateX(0px)" }}
//           />
//         </div>

//         {/* Panels */}
//         <div className="pt-6 md:pt-8 text-gray-700">
//           {/* DESCRIPTION */}
//           {active === "description" && (
//             <section className="space-y-4 md:space-y-6">
//               <h3 className="text-base md:text-lg font-semibold text-gray-900">
//                 Description
//               </h3>
//               <p className="text-sm md:text-base">
//                 Enjoy the convenience of Fresh Peeled and Deveined Shrimp,
//                 perfect for quick and delicious meals. Our shrimp are carefully
//                 selected, peeled, and deveined to save you time in the kitchen.
//                 They're perfect for stir-fries, pasta dishes, salads, and more.
//                 Each shrimp is frozen at peak freshness to lock in flavor and
//                 nutrients.
//               </p>
//               <ul className="space-y-2 text-sm md:text-base pl-5 list-disc">
//                 <li>Fresh, never frozen (unless specified)</li>
//                 <li>Peeled and deveined for your convenience</li>
//                 <li>Perfect for grilling, sautéing, or baking</li>
//                 <li>Rich in protein and low in calories</li>
//                 <li>Sustainably sourced from trusted suppliers</li>
//               </ul>
//             </section>
//           )}

//           {/* ADDITIONAL */}
//           {active === "additional" && (
//             <section className="space-y-4 md:space-y-6">
//               <h3 className="text-base md:text-lg font-semibold text-gray-900">
//                 Additional Information
//               </h3>
//               <div className="overflow-x-auto">
//                 <table className="min-w-full rounded-lg md:rounded-3xl border border-gray-200 text-sm">
//                   <tbody>
//                     {[
//                       ["Brand", "OceanFresh"],
//                       ["Weight", "500g"],
//                       ["Origin", "Imported"],
//                       ["Storage", "Keep frozen at -18°C"],
//                       ["Shelf Life", "12 months from production date"],
//                       ["Ingredients", "Shrimp, water, salt"],
//                       ["Allergens", "Crustacean shellfish"],
//                       ["Net Weight", "500g"],
//                       ["Packaging", "Vacuum sealed bag"],
//                       ["Country of Origin", "Ecuador"],
//                     ].map(([k, v]) => (
//                       <tr key={k} className="even:bg-gray-50">
//                         <th className="text-left p-3 w-1/3 md:w-48 bg-gray-50 md:bg-transparent font-medium">
//                           {k}
//                         </th>
//                         <td className="p-3">{v}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </section>
//           )}

//           {/* REVIEW */}
//           {active === "review" && (
//             <section className="space-y-6 md:space-y-8">
//               {/* Review List */}
//               <div>
//                 <h2 className="font-semibold text-base md:text-lg mb-3 md:mb-4">
//                   Review list
//                 </h2>
//                 <div className="flex flex-col md:flex-row md:justify-between md:items-center text-sm mb-4 gap-2 md:gap-0">
//                   <p className="text-xs md:text-sm">
//                     Showing 1 - {reviews.length} of 120 results
//                   </p>
//                   <select className="border rounded p-2 text-xs md:text-sm w-full md:w-auto">
//                     <option>Newest</option>
//                     <option>Oldest</option>
//                     <option>Highest Rated</option>
//                     <option>Lowest Rated</option>
//                   </select>
//                 </div>
//                 <div className="space-y-4 md:space-y-6">
//                   {reviews.map((review) => (
//                     <div
//                       key={review.id}
//                       className="flex gap-3 md:gap-4 p-3 md:p-0"
//                     >
//                       <img
//                         src={review.avatar}
//                         alt={review.name}
//                         className="w-10 h-10 md:w-12 md:h-12 rounded-full flex-shrink-0"
//                       />
//                       <div className="flex-1 min-w-0">
//                         <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
//                           <div>
//                             <h3 className="font-semibold text-sm md:text-base">
//                               {review.name}
//                             </h3>
//                             <div className="flex items-center gap-1 text-yellow-500 text-xs md:text-sm">
//                               <Star size={14} className="fill-yellow-500" />
//                               {review.rating}
//                             </div>
//                           </div>
//                           <span className="text-gray-400 text-xs mt-1 md:mt-0">
//                             {review.date}
//                           </span>
//                         </div>
//                         <h4 className="font-medium text-sm md:text-base mt-1">
//                           {review.title}
//                         </h4>
//                         <p className="text-gray-600 text-xs md:text-sm mt-1 line-clamp-3">
//                           {review.text}
//                         </p>
//                         <button className="text-emerald-600 text-xs font-medium mt-2">
//                           Read more
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Load More Reviews Button for Mobile */}
//                 {isMobile && (
//                   <button className="w-full mt-4 py-2 border border-emerald-500 text-emerald-600 rounded-lg font-medium">
//                     Load More Reviews
//                   </button>
//                 )}
//               </div>

//               {/* Add Review Form */}
//               <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-200">
//                 <h2 className="font-semibold text-base md:text-lg mb-3 md:mb-4">
//                   ADD A REVIEW
//                 </h2>
//                 <div className="mb-4">
//                   <label className="font-medium text-xs md:text-sm block mb-2">
//                     Rating <span className="text-red-500">*</span>
//                   </label>
//                   <div className="flex gap-1 md:gap-2">
//                     {[...Array(5)].map((star, index) => {
//                       const ratingValue = index + 1;
//                       return (
//                         <Star
//                           key={index}
//                           size={isMobile ? 20 : 24}
//                           className={`cursor-pointer ${
//                             ratingValue <= (hover || rating)
//                               ? "text-yellow-400 fill-yellow-400"
//                               : "text-gray-300"
//                           }`}
//                           onClick={() => setRating(ratingValue)}
//                           onMouseEnter={() => setHover(ratingValue)}
//                           onMouseLeave={() => setHover(0)}
//                         />
//                       );
//                     })}
//                   </div>
//                 </div>
//                 <form className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
//                   <div className="col-span-2">
//                     <label className="text-xs md:text-sm font-medium">
//                       Title*
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="Write short title.."
//                       className="w-full border rounded p-2 md:p-3 mt-1 text-sm"
//                     />
//                   </div>
//                   <div className="col-span-2">
//                     <label className="text-xs md:text-sm font-medium">
//                       Your detail review*
//                     </label>
//                     <textarea
//                       placeholder="Write details here..."
//                       className="w-full border rounded p-2 md:p-3 mt-1 h-24 md:h-28 text-sm"
//                     />
//                   </div>
//                   <div>
//                     <label className="text-xs md:text-sm font-medium">
//                       First Name*
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="Name"
//                       className="w-full border rounded p-2 md:p-3 mt-1 text-sm"
//                     />
//                   </div>
//                   <div>
//                     <label className="text-xs md:text-sm font-medium">
//                       Email*
//                     </label>
//                     <input
//                       type="email"
//                       placeholder="Email"
//                       className="w-full border rounded p-2 md:p-3 mt-1 text-sm"
//                     />
//                   </div>
//                   <div className="col-span-2 flex justify-between items-center mt-2">
//                     <p className="text-xs text-gray-500">* Required fields</p>
//                     <button
//                       type="submit"
//                       className="bg-[#138695] text-white px-5 md:px-6 py-2 md:py-2.5 rounded text-sm md:text-base font-medium"
//                     >
//                       Submit Review
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </section>
//           )}
//         </div>
//       </div>

//       <style jsx>{`
//         .no-scrollbar {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//         .no-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//         .line-clamp-3 {
//           display: -webkit-box;
//           -webkit-line-clamp: 3;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//       `}</style>
//     </div>
//   );
// }

// import { useEffect, useMemo, useRef, useState, useContext } from "react";
// import { Star } from "lucide-react";
// import { ShopContext } from "../Context/ShopContext"; // সঠিক পাথ দিন

// export default function Description({ productId }) {
//   // const { all_product } = useContext(ShopContext);

//   const { all_product, getProductById } = useContext(ShopContext);
//   // প্রোডাক্ট ID অনুসারে প্রোডাক্ট খুঁজে বের করুন
//   const currentProduct = all_product.find(
//     (product) => product.id === parseInt(productId)
//   );

//   // Detailed debugging
//   console.log("=== DESCRIPTION COMPONENT DEBUG ===");
//   console.log("1. Props productId:", productId);
//   console.log("2. Props productId type:", typeof productId);
//   console.log("3. Context all_product:", all_product);
//   console.log("4. Is all_product array?", Array.isArray(all_product));
//   const tabs = useMemo(
//     () => [
//       { id: "description", label: "DESCRIPTION" },
//       { id: "additional", label: "ADDITIONAL INFORMATION" },
//       { id: "review", label: "REVIEW" },
//     ],
//     []
//   );

//   const [active, setActive] = useState("description");
//   const containerRef = useRef(null);
//   const btnRefs = useRef({});
//   const indicatorRef = useRef(null);
//   const [isMobile, setIsMobile] = useState(false);

//   // For review state
//   const [rating, setRating] = useState(0);
//   const [hover, setHover] = useState(0);
//   const [reviews, setReviews] = useState([]);

//   // Check screen size
//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     checkScreenSize();
//     window.addEventListener("resize", checkScreenSize);

//     return () => window.removeEventListener("resize", checkScreenSize);
//   }, []);

//   // প্রোডাক্টের রিভিউ লোড করুন
//   useEffect(() => {
//     if (currentProduct && currentProduct.reviews) {
//       // প্রোডাক্টের রিভিউগুলোকে ফরম্যাট করুন
//       const formattedReviews = currentProduct.reviews.map((review, index) => ({
//         id: review.id || index + 1,
//         name: review.customer_name,
//         rating: review.rating,
//         title: review.comment.split(".")[0] || "Great Product!",
//         text: review.comment,
//         date: new Date(review.date).toLocaleDateString("en-US", {
//           year: "numeric",
//           month: "short",
//           day: "numeric",
//         }),
//         avatar: `https://i.pravatar.cc/100?img=${index + 10}`,
//         verified: review.verified_purchase || true,
//       }));
//       setReviews(formattedReviews);
//     }
//   }, [currentProduct]);

//   // Move the underline indicator to the active tab
//   useEffect(() => {
//     const btn = btnRefs.current[active];
//     const container = containerRef.current;
//     const indicator = indicatorRef.current;
//     if (!btn || !container || !indicator) return;

//     const btnRect = btn.getBoundingClientRect();
//     const cRect = container.getBoundingClientRect();
//     const left = btnRect.left - cRect.left + container.scrollLeft;
//     indicator.style.width = `${btnRect.width}px`;
//     indicator.style.transform = `translateX(${left}px)`;
//   }, [active, isMobile]);

//   // যদি প্রোডাক্ট না পাওয়া যায়
//   if (!currentProduct) {
//     return (
//       <div className="mx-auto px-4 py-6 md:py-10">
//         <div className="rounded-2xl border border-gray-200 p-8 text-center">
//           <p className="text-gray-500">Product not found</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="mx-auto px-4 py-6 md:py-10">
//       <div className="rounded-2xl border border-gray-200 p-4 md:p-6 bg-white">
//         {/* Tabs Header */}
//         <div
//           ref={containerRef}
//           className="relative border-b border-gray-200 overflow-x-auto no-scrollbar"
//           role="tablist"
//           aria-label="Product details tabs"
//         >
//           <div className="flex min-w-max gap-4 md:gap-8">
//             {tabs.map((t) => (
//               <button
//                 key={t.id}
//                 ref={(el) => (btnRefs.current[t.id] = el)}
//                 role="tab"
//                 aria-selected={active === t.id}
//                 aria-controls={`panel-${t.id}`}
//                 id={`tab-${t.id}`}
//                 onClick={() => setActive(t.id)}
//                 className={`relative py-3 md:py-4 text-xs md:text-sm tracking-wide whitespace-nowrap transition-colors hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 rounded-md ${
//                   active === t.id
//                     ? "text-gray-900 font-semibold"
//                     : "text-gray-500"
//                 }`}
//               >
//                 {isMobile ? t.label.split(" ")[0] : t.label}
//               </button>
//             ))}
//           </div>
//           {/* Active underline */}
//           <div
//             ref={indicatorRef}
//             className="pointer-events-none absolute bottom-0 h-0.5 bg-[#138695] transition-transform duration-300"
//             style={{ width: 0, transform: "translateX(0px)" }}
//           />
//         </div>

//         {/* Panels */}
//         <div className="pt-6 md:pt-8 text-gray-700">
//           {/* DESCRIPTION */}
//           {active === "description" && (
//             <section className="space-y-4 md:space-y-6">
//               <h3 className="text-base md:text-lg font-semibold text-gray-900">
//                 Description
//               </h3>
//               <p className="text-sm md:text-base">
//                 {currentProduct.description}
//               </p>
//               <ul className="space-y-2 text-sm md:text-base pl-5 list-disc">
//                 {currentProduct.features.map((feature, index) => (
//                   <li key={index}>{feature}</li>
//                 ))}
//               </ul>

//               {/* Specifications */}
//               <div className="mt-6">
//                 <h4 className="font-semibold text-sm md:text-base mb-3">
//                   Specifications
//                 </h4>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
//                   {Object.entries(currentProduct.specifications).map(
//                     ([key, value]) => (
//                       <div
//                         key={key}
//                         className="flex justify-between border-b pb-2"
//                       >
//                         <span className="font-medium capitalize">
//                           {key.replace("_", " ")}:
//                         </span>
//                         <span>{value}</span>
//                       </div>
//                     )
//                   )}
//                 </div>
//               </div>
//             </section>
//           )}

//           {/* ADDITIONAL INFORMATION */}
//           {active === "additional" && (
//             <section className="space-y-4 md:space-y-6">
//               <h3 className="text-base md:text-lg font-semibold text-gray-900">
//                 Additional Information
//               </h3>
//               <div className="overflow-x-auto">
//                 <table className="min-w-full rounded-lg md:rounded-3xl border border-gray-200 text-sm">
//                   <tbody>
//                     <tr className="even:bg-gray-50">
//                       <th className="text-left p-3 w-1/3 md:w-48 bg-gray-50 md:bg-transparent font-medium">
//                         Product Name
//                       </th>
//                       <td className="p-3">{currentProduct.name}</td>
//                     </tr>
//                     <tr className="even:bg-gray-50">
//                       <th className="text-left p-3 w-1/3 md:w-48 bg-gray-50 md:bg-transparent font-medium">
//                         Category
//                       </th>
//                       <td className="p-3 capitalize">
//                         {currentProduct.category}
//                       </td>
//                     </tr>
//                     <tr className="even:bg-gray-50">
//                       <th className="text-left p-3 w-1/3 md:w-48 bg-gray-50 md:bg-transparent font-medium">
//                         Available Sizes
//                       </th>
//                       <td className="p-3">{currentProduct.sizes.join(", ")}</td>
//                     </tr>
//                     <tr className="even:bg-gray-50">
//                       <th className="text-left p-3 w-1/3 md:w-48 bg-gray-50 md:bg-transparent font-medium">
//                         Available Colors
//                       </th>
//                       <td className="p-3">
//                         {currentProduct.colors.join(", ")}
//                       </td>
//                     </tr>
//                     <tr className="even:bg-gray-50">
//                       <th className="text-left p-3 w-1/3 md:w-48 bg-gray-50 md:bg-transparent font-medium">
//                         Stock Status
//                       </th>
//                       <td className="p-3">
//                         <span
//                           className={`px-2 py-1 rounded text-xs font-medium ${
//                             currentProduct.in_stock
//                               ? "bg-green-100 text-green-800"
//                               : "bg-red-100 text-red-800"
//                           }`}
//                         >
//                           {currentProduct.in_stock
//                             ? "In Stock"
//                             : "Out of Stock"}
//                         </span>
//                       </td>
//                     </tr>
//                     <tr className="even:bg-gray-50">
//                       <th className="text-left p-3 w-1/3 md:w-48 bg-gray-50 md:bg-transparent font-medium">
//                         Customer Rating
//                       </th>
//                       <td className="p-3">
//                         <div className="flex items-center gap-2">
//                           <div className="flex items-center gap-1">
//                             <Star
//                               size={16}
//                               className="fill-yellow-400 text-yellow-400"
//                             />
//                             <span>{currentProduct.rating}</span>
//                           </div>
//                           <span className="text-gray-500">
//                             ({currentProduct.review_count} reviews)
//                           </span>
//                         </div>
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </section>
//           )}

//           {/* REVIEW */}
//           {active === "review" && (
//             <section className="space-y-6 md:space-y-8">
//               {/* Review List */}
//               <div>
//                 <h2 className="font-semibold text-base md:text-lg mb-3 md:mb-4">
//                   Customer Reviews
//                 </h2>
//                 <div className="flex flex-col md:flex-row md:justify-between md:items-center text-sm mb-4 gap-2 md:gap-0">
//                   <p className="text-xs md:text-sm">
//                     Showing 1 - {reviews.length} of{" "}
//                     {currentProduct.review_count} reviews
//                   </p>
//                   <select className="border rounded p-2 text-xs md:text-sm w-full md:w-auto">
//                     <option>Newest</option>
//                     <option>Oldest</option>
//                     <option>Highest Rated</option>
//                     <option>Lowest Rated</option>
//                   </select>
//                 </div>

//                 {reviews.length > 0 ? (
//                   <div className="space-y-4 md:space-y-6">
//                     {reviews.map((review) => (
//                       <div
//                         key={review.id}
//                         className="flex gap-3 md:gap-4 p-3 md:p-0"
//                       >
//                         <img
//                           src={review.avatar}
//                           alt={review.name}
//                           className="w-10 h-10 md:w-12 md:h-12 rounded-full flex-shrink-0"
//                         />
//                         <div className="flex-1 min-w-0">
//                           <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
//                             <div>
//                               <h3 className="font-semibold text-sm md:text-base">
//                                 {review.name}
//                                 {review.verified && (
//                                   <span className="ml-2 text-xs text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full">
//                                     Verified Purchase
//                                   </span>
//                                 )}
//                               </h3>
//                               <div className="flex items-center gap-1 text-yellow-500 text-xs md:text-sm">
//                                 <Star size={14} className="fill-yellow-500" />
//                                 {review.rating}
//                               </div>
//                             </div>
//                             <span className="text-gray-400 text-xs mt-1 md:mt-0">
//                               {review.date}
//                             </span>
//                           </div>
//                           <h4 className="font-medium text-sm md:text-base mt-1">
//                             {review.title}
//                           </h4>
//                           <p className="text-gray-600 text-xs md:text-sm mt-1 line-clamp-3">
//                             {review.text}
//                           </p>
//                           <button className="text-emerald-600 text-xs font-medium mt-2">
//                             Read more
//                           </button>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 ) : (
//                   <div className="text-center py-8 text-gray-500">
//                     No reviews yet. Be the first to review this product!
//                   </div>
//                 )}

//                 {/* Load More Reviews Button for Mobile */}
//                 {isMobile && reviews.length > 0 && (
//                   <button className="w-full mt-4 py-2 border border-emerald-500 text-emerald-600 rounded-lg font-medium">
//                     Load More Reviews
//                   </button>
//                 )}
//               </div>

//               {/* Add Review Form */}
//               <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-200">
//                 <h2 className="font-semibold text-base md:text-lg mb-3 md:mb-4">
//                   ADD A REVIEW
//                 </h2>
//                 <div className="mb-4">
//                   <label className="font-medium text-xs md:text-sm block mb-2">
//                     Rating <span className="text-red-500">*</span>
//                   </label>
//                   <div className="flex gap-1 md:gap-2">
//                     {[...Array(5)].map((star, index) => {
//                       const ratingValue = index + 1;
//                       return (
//                         <Star
//                           key={index}
//                           size={isMobile ? 20 : 24}
//                           className={`cursor-pointer ${
//                             ratingValue <= (hover || rating)
//                               ? "text-yellow-400 fill-yellow-400"
//                               : "text-gray-300"
//                           }`}
//                           onClick={() => setRating(ratingValue)}
//                           onMouseEnter={() => setHover(ratingValue)}
//                           onMouseLeave={() => setHover(0)}
//                         />
//                       );
//                     })}
//                   </div>
//                 </div>
//                 <form className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
//                   <div className="col-span-2">
//                     <label className="text-xs md:text-sm font-medium">
//                       Title*
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="Write short title.."
//                       className="w-full border rounded p-2 md:p-3 mt-1 text-sm"
//                     />
//                   </div>
//                   <div className="col-span-2">
//                     <label className="text-xs md:text-sm font-medium">
//                       Your detail review*
//                     </label>
//                     <textarea
//                       placeholder="Write details here..."
//                       className="w-full border rounded p-2 md:p-3 mt-1 h-24 md:h-28 text-sm"
//                     />
//                   </div>
//                   <div>
//                     <label className="text-xs md:text-sm font-medium">
//                       First Name*
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="Name"
//                       className="w-full border rounded p-2 md:p-3 mt-1 text-sm"
//                     />
//                   </div>
//                   <div>
//                     <label className="text-xs md:text-sm font-medium">
//                       Email*
//                     </label>
//                     <input
//                       type="email"
//                       placeholder="Email"
//                       className="w-full border rounded p-2 md:p-3 mt-1 text-sm"
//                     />
//                   </div>
//                   <div className="col-span-2 flex justify-between items-center mt-2">
//                     <p className="text-xs text-gray-500">* Required fields</p>
//                     <button
//                       type="submit"
//                       className="bg-[#138695] text-white px-5 md:px-6 py-2 md:py-2.5 rounded text-sm md:text-base font-medium"
//                     >
//                       Submit Review
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </section>
//           )}
//         </div>
//       </div>

//       <style jsx>{`
//         .no-scrollbar {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//         .no-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//         .line-clamp-3 {
//           display: -webkit-box;
//           -webkit-line-clamp: 3;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//       `}</style>
//     </div>
//   );
// }

import { useEffect, useMemo, useRef, useState, useContext } from "react";
import { Star } from "lucide-react";
import { ShopContext } from "../Context/ShopContext";

export default function Description({ productId }) {
  const { getProductById } = useContext(ShopContext);

  // প্রোডাক্ট ID অনুসারে প্রোডাক্ট খুঁজে বের করুন
  const currentProduct = getProductById(productId);

  const tabs = useMemo(
    () => [
      { id: "description", label: "DESCRIPTION" },
      { id: "additional", label: "ADDITIONAL INFORMATION" },
      { id: "review", label: "REVIEW" },
    ],
    []
  );

  const [active, setActive] = useState("description");
  const containerRef = useRef(null);
  const btnRefs = useRef({});
  const indicatorRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // For review state
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [reviewForm, setReviewForm] = useState({
    title: "",
    review: "",
    firstName: "",
    email: "",
  });

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // প্রোডাক্টের রিভিউ লোড করুন
  useEffect(() => {
    if (currentProduct && currentProduct.reviews) {
      // প্রোডাক্টের রিভিউগুলোকে ফরম্যাট করুন
      const formattedReviews = currentProduct.reviews.map((review, index) => ({
        id: review.id || index + 1,
        name: review.customer_name,
        rating: review.rating,
        title: review.comment.split(".")[0] || "Great Product!",
        text: review.comment,
        date: new Date(review.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
        avatar: `https://i.pravatar.cc/100?img=${index + 10}`,
        verified: review.verified_purchase || true,
      }));
      setReviews(formattedReviews);
    }
  }, [currentProduct]);

  // Move the underline indicator to the active tab
  useEffect(() => {
    const btn = btnRefs.current[active];
    const container = containerRef.current;
    const indicator = indicatorRef.current;
    if (!btn || !container || !indicator) return;

    const btnRect = btn.getBoundingClientRect();
    const cRect = container.getBoundingClientRect();
    const left = btnRect.left - cRect.left + container.scrollLeft;
    indicator.style.width = `${btnRect.width}px`;
    indicator.style.transform = `translateX(${left}px)`;
  }, [active, isMobile]);

  // Review form handle change
  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setReviewForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Review form submit
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    // এখানে review submit logic implement করবেন
    console.log("Review submitted:", { rating, ...reviewForm });
    alert("Review submitted successfully!");
    setReviewForm({ title: "", review: "", firstName: "", email: "" });
    setRating(0);
  };

  // যদি প্রোডাক্ট না পাওয়া যায়
  if (!currentProduct) {
    return (
      <div className="mx-auto px-4 py-6 md:py-10">
        <div className="rounded-2xl border border-gray-200 p-8 text-center">
          <p className="text-gray-500">Product not found</p>
          <p className="text-sm text-gray-400 mt-2">Product ID: {productId}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto px-4 py-6 md:py-10 max-w-6xl">
      <div className="rounded-2xl border border-gray-200 p-4 md:p-6 bg-white">
        {/* Tabs Header */}
        <div
          ref={containerRef}
          className="relative border-b border-gray-200 overflow-x-auto no-scrollbar"
          role="tablist"
          aria-label="Product details tabs"
        >
          <div className="flex min-w-max gap-4 md:gap-8">
            {tabs.map((t) => (
              <button
                key={t.id}
                ref={(el) => (btnRefs.current[t.id] = el)}
                role="tab"
                aria-selected={active === t.id}
                aria-controls={`panel-${t.id}`}
                id={`tab-${t.id}`}
                onClick={() => setActive(t.id)}
                className={`relative py-3 md:py-4 text-xs md:text-sm tracking-wide whitespace-nowrap transition-colors hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 rounded-md ${
                  active === t.id
                    ? "text-gray-900 font-semibold"
                    : "text-gray-500"
                }`}
              >
                {isMobile ? t.label.split(" ")[0] : t.label}
              </button>
            ))}
          </div>
          {/* Active underline */}
          <div
            ref={indicatorRef}
            className="pointer-events-none absolute bottom-0 h-0.5 bg-[#138695] transition-transform duration-300"
            style={{ width: 0, transform: "translateX(0px)" }}
          />
        </div>

        {/* Panels */}
        <div className="pt-6 md:pt-8 text-gray-700">
          {/* DESCRIPTION TAB */}
          {active === "description" && (
            <section className="space-y-6 md:space-y-8">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
                  Product Description
                </h3>
                <p className="text-sm md:text-base leading-relaxed">
                  {currentProduct.description}
                </p>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-3">
                  Key Features
                </h4>
                <ul className="space-y-3 text-sm md:text-base pl-5 list-disc">
                  {currentProduct.features.map((feature, index) => (
                    <li key={index} className="leading-relaxed">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
                  Specifications
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  {Object.entries(currentProduct.specifications).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between items-center py-2 border-b border-gray-100"
                      >
                        <span className="font-medium capitalize text-gray-600">
                          {key.replace("_", " ")}:
                        </span>
                        <span className="text-gray-900">{value}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </section>
          )}

          {/* ADDITIONAL INFORMATION TAB */}
          {active === "additional" && (
            <section className="space-y-6 md:space-y-8">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                Product Information
              </h3>

              <div className="overflow-x-auto">
                <table className="min-w-full rounded-lg border border-gray-200 text-sm">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <th className="text-left p-4 w-1/3 md:w-48 bg-gray-50 font-medium text-gray-700">
                        Product Name
                      </th>
                      <td className="p-4 text-gray-900">
                        {currentProduct.name}
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <th className="text-left p-4 bg-gray-50 font-medium text-gray-700">
                        Category
                      </th>
                      <td className="p-4 capitalize text-gray-900">
                        {currentProduct.category}
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <th className="text-left p-4 bg-gray-50 font-medium text-gray-700">
                        Available Sizes
                      </th>
                      <td className="p-4 text-gray-900">
                        {currentProduct.sizes.join(", ")}
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <th className="text-left p-4 bg-gray-50 font-medium text-gray-700">
                        Available Colors
                      </th>
                      <td className="p-4 text-gray-900">
                        {currentProduct.colors.join(", ")}
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <th className="text-left p-4 bg-gray-50 font-medium text-gray-700">
                        Stock Status
                      </th>
                      <td className="p-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            currentProduct.in_stock
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {currentProduct.in_stock
                            ? "In Stock"
                            : "Out of Stock"}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th className="text-left p-4 bg-gray-50 font-medium text-gray-700">
                        Customer Rating
                      </th>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <Star
                              size={18}
                              className="fill-yellow-400 text-yellow-400"
                            />
                            <span className="font-medium">
                              {currentProduct.rating}
                            </span>
                          </div>
                          <span className="text-gray-500 text-sm">
                            ({currentProduct.review_count} reviews)
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* REVIEW TAB */}
          {active === "review" && (
            <section className="space-y-8 md:space-y-10">
              {/* Review List */}
              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
                  <div>
                    <h2 className="font-semibold text-lg md:text-xl mb-2">
                      Customer Reviews
                    </h2>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star
                          size={20}
                          className="fill-yellow-400 text-yellow-400"
                        />
                        <span className="font-medium text-lg">
                          {currentProduct.rating}
                        </span>
                      </div>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-600">
                        {currentProduct.review_count} reviews
                      </span>
                    </div>
                  </div>

                  <select className="border rounded-lg p-2 text-sm mt-3 md:mt-0 w-full md:w-auto">
                    <option>Newest First</option>
                    <option>Oldest First</option>
                    <option>Highest Rated</option>
                    <option>Lowest Rated</option>
                  </select>
                </div>

                {reviews.length > 0 ? (
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div
                        key={review.id}
                        className="flex gap-4 p-4 border border-gray-200 rounded-lg"
                      >
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="w-12 h-12 rounded-full flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-semibold text-base">
                                  {review.name}
                                </h3>
                                {review.verified && (
                                  <span className="text-xs text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full">
                                    Verified Purchase
                                  </span>
                                )}
                              </div>
                              <div className="flex items-center gap-1 text-yellow-500">
                                <Star size={16} className="fill-yellow-500" />
                                <span className="text-sm font-medium">
                                  {review.rating}
                                </span>
                              </div>
                            </div>
                            <span className="text-gray-400 text-sm mt-1 md:mt-0">
                              {review.date}
                            </span>
                          </div>
                          <h4 className="font-medium text-base mb-2">
                            {review.title}
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {review.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 border border-gray-200 rounded-lg">
                    <p className="text-gray-500">No reviews yet.</p>
                    <p className="text-sm text-gray-400 mt-1">
                      Be the first to review this product!
                    </p>
                  </div>
                )}

                {isMobile && reviews.length > 0 && (
                  <button className="w-full mt-6 py-3 border-2 border-[#138695] rounded-lg font-medium hover:bg-emerald-50 transition-colors">
                    Load More Reviews
                  </button>
                )}
              </div>

              {/* Add Review Form */}
              <div className="pt-6 border-t border-gray-200">
                <h2 className="font-semibold text-lg md:text-xl mb-6">
                  Add Your Review
                </h2>

                <form onSubmit={handleReviewSubmit} className="space-y-6">
                  <div>
                    <label className="font-medium text-sm md:text-base block mb-3">
                      Overall Rating <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-2">
                      {[...Array(5)].map((star, index) => {
                        const ratingValue = index + 1;
                        return (
                          <button
                            type="button"
                            key={index}
                            onClick={() => setRating(ratingValue)}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(0)}
                            className="focus:outline-none"
                          >
                            <Star
                              size={isMobile ? 24 : 28}
                              className={`transition-colors ${
                                ratingValue <= (hover || rating)
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="title"
                      className="text-sm md:text-base font-medium block mb-2"
                    >
                      Review Title*
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={reviewForm.title}
                      onChange={handleReviewChange}
                      placeholder="Write a short title for your review..."
                      className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="review"
                      className="text-sm md:text-base font-medium block mb-2"
                    >
                      Your Review*
                    </label>
                    <textarea
                      id="review"
                      name="review"
                      value={reviewForm.review}
                      onChange={handleReviewChange}
                      placeholder="Share your experience with this product..."
                      rows={4}
                      className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="text-sm md:text-base font-medium block mb-2"
                      >
                        First Name*
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={reviewForm.firstName}
                        onChange={handleReviewChange}
                        placeholder="Your first name"
                        className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="text-sm md:text-base font-medium block mb-2"
                      >
                        Email Address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={reviewForm.email}
                        onChange={handleReviewChange}
                        placeholder="your.email@example.com"
                        className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 pt-4">
                    <p className="text-xs text-gray-500">
                      * Required fields. Your email will not be published.
                    </p>
                    <button
                      type="submit"
                      className="bg-[#138695] text-white px-8 py-3 rounded-lg text-sm md:text-base font-medium hover:bg-[#0f6b7a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#138695] focus:ring-offset-2"
                    >
                      Submit Review
                    </button>
                  </div>
                </form>
              </div>
            </section>
          )}
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
