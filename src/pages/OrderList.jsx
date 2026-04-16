import React from 'react';

const OrderList = () => {
  const orders = [
    {
      id: "DC-9821-X9",
      lot: "442",
      title: "Ephemeral Echoes",
      status: "DELIVERED",
      bid: "$142,500.00",
      shippingInfo: "Delivered Oct 12, 2024",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBALGp4AbkQdznHFWNuAaQeZFa-Rdaan2pY15UjJI6eAtmnHINePk1G5LfWwL7cY_D6tCCUnIFdHS5KtA5C8PmsGw6NtgxS6jEwfL9LyGKfBA8I69NLcxA8XKdA4il5v_7_MsDDuWxIiKAWyfzHFtZB3xHMyASdDf3eEkffhPvK1gst07Y5mxuqOnJtKa45DsYlRqxd1pcHOVVeMuMGsG0Pa26ZKF3kDLb0VTgecV84QC4blZBuQkROoLMy9JgPJfrkqMU5MSBLA7yP",
      primaryAction: "View Details",
      secondaryActions: ["Download Invoice", "View Auction Details"]
    },
    {
      id: "DC-1045-A2",
      lot: "819",
      title: "Midnight Serenade",
      status: "IN TRANSIT",
      bid: "$89,000.00",
      shippingInfo: "Expected Oct 28, 2024",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWeXCx5bWlOzoroauFbvGmv9dIw8yFLZEcGKsqg8Cka1qAIabMIUDHMNEJox7OUf2pas8MfFlPC3t2OEzJgt5URgiUfOZlaR886W-bxeg61-gHNaX0LUiVpjsOVMunRBOH1wZWrdXVnSLV3y_9lO519mNkJbtwUj6_dgqdoKQIFFv685ME4RSJ3cHVW7rZf0LGac-M69PByZJJ1ufr_n-joQpmdNjmrBpN7trYPZFW7XVXKFIH951Hc0aqcFQexxsWQ2WEqtWL4qOI",
      primaryAction: "Track Shipment",
      secondaryActions: ["View Order Details", "Auction History"]
    },
    {
      id: "DC-1229-B5",
      lot: "312",
      title: "Structure of Silence",
      status: "PENDING PAYMENT",
      bid: "$320,000.00",
      shippingInfo: "Due Oct 24, 2024",
      isUrgent: true,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCW-GXHSrukc_J6RxrYf_16B3EngCexwf9jpG2Hl__JO_jREmm_xc3hqewW-CU1dpOfJeA42ki00bX4VoUeJSLc8TfJOZu9wmnIckplRDrcurkaqCtYf267-_AV_QhvH-yw7aCCblXkQcS2nYZKhduX9rq-rWos_izq6E_V7rXmUhUMFK7tp1UM861k5IQqEibCxqv1sEBuveV4W5RQ7T4PZw2-9UlUMGRkQKEmCIlIEzB4RO1e0m45MZzneZ2tgNWNqOzjomtqMF-s",
      primaryAction: "Complete Payment",
      secondaryActions: ["Download Proforma", "Support Curator"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#fbf9f6] text-[#1b1c1a] font-['Manrope'] selection:bg-[#9e1b1b] selection:text-white">
      <main className="flex-grow max-w-[1200px] w-full mx-auto px-8 py-16">
        {/* Page Header */}
        <header className="mb-16">
          <h1 className="text-5xl font-['Newsreader'] font-light mb-4">My Orders</h1>
          <p className="text-[#59413e] text-lg tracking-wide max-w-2xl">
            Manage and track your successful acquisitions from our global gallery network.
          </p>
        </header>
        {/* Order List */}
        <section className="flex flex-col gap-8">
          {orders.map((order) => (
            <article key={order.id} className="bg-white p-6 rounded-sm shadow-sm transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Thumbnail */}
                <div className="w-full md:w-48 aspect-square bg-[#e4e2df] rounded-sm overflow-hidden">
                  <img src={order.image} alt={order.title} className="w-full h-full object-cover" />
                </div>
                
                {/* Content */}
                <div className="flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="text-[#59413e] text-xs font-bold uppercase tracking-widest mb-1 block">Lot {order.lot}</span>
                      <h2 className="text-2xl font-['Newsreader'] italic">{order.title}</h2>
                    </div>
                    <span className={`px-3 py-1 ${order.status === 'PENDING PAYMENT' ? 'bg-[#efeeeb] text-[#5f5e5e]' : 'bg-[#7a0009]/10 text-[#7a0009]'} text-[10px] font-bold tracking-[0.15em] uppercase rounded-sm`}>
                      {order.status}
                    </span>
                  </div>

                  {/* Metadata Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8 border-t border-[#e1bebb]/15 pt-6">
                    <div>
                      <p className="text-[10px] font-bold text-[#59413e] uppercase tracking-widest mb-1">Winning Bid</p>
                      <p className="text-xl font-['Newsreader'] text-[#4b3519]">{order.bid}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-[#59413e] uppercase tracking-widest mb-1">Order Number</p>
                      <p className="text-sm font-bold">{order.id}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-[#59413e] uppercase tracking-widest mb-1">
                        {order.status === 'IN TRANSIT' ? 'Expected Arrival' : (order.status === 'PENDING PAYMENT' ? 'Payment Deadline' : 'Shipping')}
                      </p>
                      <p className={`text-sm font-bold ${order.isUrgent ? 'text-[#7a0009]' : ''}`}>{order.shippingInfo}</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-auto flex flex-wrap items-center gap-6 pt-4">
                    <button className="bg-gradient-to-br from-[#7a0009] to-[#9e1b1b] text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity active:scale-[0.98]">
                      {order.primaryAction}
                    </button>
                    {order.secondaryActions.map((action) => (
                      <a key={action} className="text-[#7a0009] text-xs font-bold uppercase tracking-widest hover:underline decoration-[#e1bebb]/50 transition-all" href="#">
                        {action}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}

          {/* Load More */}
          <div className="flex justify-center mt-12">
            <button className="flex items-center gap-2 px-8 py-4 bg-[#efeeeb] hover:bg-[#eae8e5] text-[#59413e] text-[10px] font-bold uppercase tracking-[0.2em] transition-colors rounded-sm">
              Load Historical Archives
              <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default OrderList;
