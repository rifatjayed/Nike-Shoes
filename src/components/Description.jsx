// import React from "react";

// const Description = () => {
//   return (
//     <div className="px-6 md:px-0">
//       <div className="flex">
//         <div className="border border-gray-400 font-semibold p-4">
//           Description
//         </div>
//         <div className="border border-gray-400 font-semibold p-4">Reviews</div>
//       </div>
//       <div className="border border-gray-400 p-8">
//         <p>
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi ut
//           repellendus sint eius totam dolorum illo ad, repellat, ea debitis
//           explicabo fugiat neque quis earum quisquam voluptate culpa temporibus
//           nemo similique autem velit cum officia. Minima voluptates quis neque,
//           ex sunt quo nemo velit quos culpa sed, error fuga expedita quidem
//           nulla perferendis unde. Magnam dicta reprehenderit eius ab
//           consequatur!
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Description;

import { useEffect, useMemo, useRef, useState } from "react";
import { Star } from "lucide-react";

export default function Description() {
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
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Michael T",
      rating: 4.9,
      title: "Very good and delicious!!",
      text: "Lorem ipsum dolor sit amet consectetur. Curabitur et vel purus quisque diam. Euismod aliquet quis suscipit feugiat tristique cursus consectetur nisl.",
      date: "a day ago",
      avatar: "https://i.pravatar.cc/100?img=12",
    },
    {
      id: 2,
      name: "Michael T",
      rating: 4.9,
      title: "Very good and delicious!!",
      text: "Lorem ipsum dolor sit amet consectetur. Curabitur et vel purus quisque diam. Euismod aliquet quis suscipit feugiat tristique cursus consectetur nisl.",
      date: "a day ago",
      avatar: "https://i.pravatar.cc/100?img=11",
    },
  ]);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

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

  return (
    <div className="mx-auto px-4 py-6 md:py-10">
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
          {/* DESCRIPTION */}
          {active === "description" && (
            <section className="space-y-4 md:space-y-6">
              <h3 className="text-base md:text-lg font-semibold text-gray-900">
                Description
              </h3>
              <p className="text-sm md:text-base">
                Enjoy the convenience of Fresh Peeled and Deveined Shrimp,
                perfect for quick and delicious meals. Our shrimp are carefully
                selected, peeled, and deveined to save you time in the kitchen.
                They're perfect for stir-fries, pasta dishes, salads, and more.
                Each shrimp is frozen at peak freshness to lock in flavor and
                nutrients.
              </p>
              <ul className="space-y-2 text-sm md:text-base pl-5 list-disc">
                <li>Fresh, never frozen (unless specified)</li>
                <li>Peeled and deveined for your convenience</li>
                <li>Perfect for grilling, sautéing, or baking</li>
                <li>Rich in protein and low in calories</li>
                <li>Sustainably sourced from trusted suppliers</li>
              </ul>
            </section>
          )}

          {/* ADDITIONAL */}
          {active === "additional" && (
            <section className="space-y-4 md:space-y-6">
              <h3 className="text-base md:text-lg font-semibold text-gray-900">
                Additional Information
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full rounded-lg md:rounded-3xl border border-gray-200 text-sm">
                  <tbody>
                    {[
                      ["Brand", "OceanFresh"],
                      ["Weight", "500g"],
                      ["Origin", "Imported"],
                      ["Storage", "Keep frozen at -18°C"],
                      ["Shelf Life", "12 months from production date"],
                      ["Ingredients", "Shrimp, water, salt"],
                      ["Allergens", "Crustacean shellfish"],
                      ["Net Weight", "500g"],
                      ["Packaging", "Vacuum sealed bag"],
                      ["Country of Origin", "Ecuador"],
                    ].map(([k, v]) => (
                      <tr key={k} className="even:bg-gray-50">
                        <th className="text-left p-3 w-1/3 md:w-48 bg-gray-50 md:bg-transparent font-medium">
                          {k}
                        </th>
                        <td className="p-3">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* REVIEW */}
          {active === "review" && (
            <section className="space-y-6 md:space-y-8">
              {/* Review List */}
              <div>
                <h2 className="font-semibold text-base md:text-lg mb-3 md:mb-4">
                  Review list
                </h2>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center text-sm mb-4 gap-2 md:gap-0">
                  <p className="text-xs md:text-sm">
                    Showing 1 - {reviews.length} of 120 results
                  </p>
                  <select className="border rounded p-2 text-xs md:text-sm w-full md:w-auto">
                    <option>Newest</option>
                    <option>Oldest</option>
                    <option>Highest Rated</option>
                    <option>Lowest Rated</option>
                  </select>
                </div>
                <div className="space-y-4 md:space-y-6">
                  {reviews.map((review) => (
                    <div
                      key={review.id}
                      className="flex gap-3 md:gap-4 p-3 md:p-0"
                    >
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                          <div>
                            <h3 className="font-semibold text-sm md:text-base">
                              {review.name}
                            </h3>
                            <div className="flex items-center gap-1 text-yellow-500 text-xs md:text-sm">
                              <Star size={14} className="fill-yellow-500" />
                              {review.rating}
                            </div>
                          </div>
                          <span className="text-gray-400 text-xs mt-1 md:mt-0">
                            {review.date}
                          </span>
                        </div>
                        <h4 className="font-medium text-sm md:text-base mt-1">
                          {review.title}
                        </h4>
                        <p className="text-gray-600 text-xs md:text-sm mt-1 line-clamp-3">
                          {review.text}
                        </p>
                        <button className="text-emerald-600 text-xs font-medium mt-2">
                          Read more
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Load More Reviews Button for Mobile */}
                {isMobile && (
                  <button className="w-full mt-4 py-2 border border-emerald-500 text-emerald-600 rounded-lg font-medium">
                    Load More Reviews
                  </button>
                )}
              </div>

              {/* Add Review Form */}
              <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-200">
                <h2 className="font-semibold text-base md:text-lg mb-3 md:mb-4">
                  ADD A REVIEW
                </h2>
                <div className="mb-4">
                  <label className="font-medium text-xs md:text-sm block mb-2">
                    Rating <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-1 md:gap-2">
                    {[...Array(5)].map((star, index) => {
                      const ratingValue = index + 1;
                      return (
                        <Star
                          key={index}
                          size={isMobile ? 20 : 24}
                          className={`cursor-pointer ${
                            ratingValue <= (hover || rating)
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                          onClick={() => setRating(ratingValue)}
                          onMouseEnter={() => setHover(ratingValue)}
                          onMouseLeave={() => setHover(0)}
                        />
                      );
                    })}
                  </div>
                </div>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <div className="col-span-2">
                    <label className="text-xs md:text-sm font-medium">
                      Title*
                    </label>
                    <input
                      type="text"
                      placeholder="Write short title.."
                      className="w-full border rounded p-2 md:p-3 mt-1 text-sm"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="text-xs md:text-sm font-medium">
                      Your detail review*
                    </label>
                    <textarea
                      placeholder="Write details here..."
                      className="w-full border rounded p-2 md:p-3 mt-1 h-24 md:h-28 text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs md:text-sm font-medium">
                      First Name*
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full border rounded p-2 md:p-3 mt-1 text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs md:text-sm font-medium">
                      Email*
                    </label>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full border rounded p-2 md:p-3 mt-1 text-sm"
                    />
                  </div>
                  <div className="col-span-2 flex justify-between items-center mt-2">
                    <p className="text-xs text-gray-500">* Required fields</p>
                    <button
                      type="submit"
                      className="bg-[#138695] text-white px-5 md:px-6 py-2 md:py-2.5 rounded text-sm md:text-base font-medium"
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
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
