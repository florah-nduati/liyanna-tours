import image1 from "../assets/destination.jpg";
import image2 from "../assets/planning.webp";
import image3 from "../assets/hotels.jpg";
import image4 from "../assets/adventure.jpg";
import image5 from "../assets/food.jpg";

export const blogData = [
  {
    id: "top-5-luxury-destinations",
    title: "Top 5 Luxury Destinations You Must Visit",
    image: image1,
    content: `
      <h3>Introduction</h3>
      <p>Explore the top luxury destinations including Maldives, Paris, Bora Bora, and more...</p>
      <h3>Key Highlights</h3>
      <ul>
        <li>Maldives - The ultimate paradise getaway with private islands.</li>
        <li>Paris - The city of lights and luxury.</li>
        <li>Bora Bora - Famous for its turquoise waters and overwater bungalows.</li>
      </ul>
      <p>Each of these destinations offers a unique experience that defines the essence of luxury travel. From private villas to personalized services, these places will make you feel pampered and relaxed.</p>
      <h3>Why These Destinations?</h3>
      <p>These luxury destinations are known for their exclusive appeal, secluded locations, top-tier accommodations, and world-class amenities. Whether you're looking for a romantic retreat or a family vacation, these spots will make your dreams come true.</p>
      <h3>Top Activities</h3>
      <ol>
        <li>Private yacht cruises in the Maldives.</li>
        <li>Private wine tours in Paris.</li>
        <li>Scuba diving and snorkeling in Bora Bora.</li>
      </ol>
    `,
    category: "Destinations",
    author: "Jane Doe",
    authorImage: image2,
    publishedDate: "December 10, 2024",
    relatedPosts: ["perfect-luxury-safari-kenya", "best-luxury-hotels"],
  },
  {
    id: "perfect-luxury-safari-kenya",
    title: "How to Plan Your Perfect Luxury Safari in Kenya",
    image: image2,
    content: `
      <h3>Introduction</h3>
      <p>Kenya offers some of the most exclusive safari experiences in Africa. From private game reserves to luxurious lodges, this guide will help you plan the perfect safari trip.</p>
      <h3>Safari Highlights</h3>
      <ul>
        <li>Maasai Mara - Famous for the Great Migration and big game.</li>
        <li>Amboseli - Known for its stunning views of Mount Kilimanjaro.</li>
        <li>Lake Nakuru - A paradise for birdwatching and wildlife photography.</li>
      </ul>
      <h3>Luxury Safari Lodges</h3>
      <p>Choose from world-renowned lodges offering all-inclusive services, private game drives, and more.</p>
      <h3>Activities to Enjoy</h3>
      <ol>
        <li>Hot air balloon rides over the Maasai Mara.</li>
        <li>Exclusive bush dinners and sundowners.</li>
        <li>Private game drives with expert guides.</li>
      </ol>
    `,
    category: "Safari",
    author: "John Smith",
    authorImage: image3,
    publishedDate: "November 25, 2024",
    relatedPosts: ["top-5-luxury-destinations", "best-luxury-hotels"],
  },
  {
    id: "best-luxury-hotels",
    title: "Traveling in Style: Best Luxury Hotels for Your Getaway",
    image: image3,
    content: `
      <h3>Introduction</h3>
      <p>Discover the world's best luxury hotels that offer more than just a place to stay. These hotels offer an experience that redefines luxury travel.</p>
      <h3>Top Luxury Hotels</h3>
      <ul>
        <li>The Ritz-Carlton, Paris - Known for its impeccable service and elegance.</li>
        <li>Beverly Hills Hotel, Los Angeles - The iconic "Pink Palace" in the heart of Hollywood.</li>
        <li>Amangiri, Utah - A secluded desert resort offering unparalleled privacy and luxury.</li>
      </ul>
      <h3>Unique Features of Luxury Hotels</h3>
      <p>From personalized concierge services to private villas and in-house chefs, these hotels provide unmatched luxury for those seeking the best.</p>
    `,
    category: "Hotels",
    author: "Emily Johnson",
    authorImage: image4,
    publishedDate: "December 1, 2024",
    relatedPosts: ["top-5-luxury-destinations", "perfect-luxury-safari-kenya"],
  },
  {
    id: "luxury-adventure-travel",
    title: "Epic Adventures: Luxury Travel for the Bold and Brave",
    image: image4,
    content: `
      <h3>Introduction</h3>
      <p>For those seeking both adventure and luxury, the world offers unique opportunities. From climbing peaks to exploring uncharted territories, here's how to mix adrenaline with comfort.</p>
      <h3>Top Luxury Adventure Destinations</h3>
      <ul>
        <li>Everest Base Camp Trek - Luxury trekking in the Himalayas with five-star amenities along the way.</li>
        <li>Sailing the Galápagos - Experience the wildlife of the Galápagos Islands while enjoying a luxurious yacht cruise.</li>
        <li>Antarctica - Take a luxury cruise to the southernmost continent with private expeditions and lavish accommodations.</li>
      </ul>
      <h3>What Makes Luxury Adventure Different?</h3>
      <p>Luxury adventure travel combines the thrill of exploration with the comfort and exclusivity of high-end services. Whether you're scaling mountains or exploring remote destinations, you'll enjoy luxury accommodations and personalized service.</p>
      <h3>Best Activities for Luxury Adventurers</h3>
      <ol>
        <li>Helicopter tours over the Grand Canyon.</li>
        <li>Private safari in Botswana.</li>
        <li>Luxury yacht expedition to the Arctic.</li>
      </ol>
    `,
    category: "Adventure",
    author: "Michael Williams",
    authorImage: image5,
    publishedDate: "December 15, 2024",
    relatedPosts: ["top-5-luxury-destinations", "perfect-luxury-safari-kenya"],
  },
  {
    id: "luxury-food-tours",
    title: "The Ultimate Foodie Getaway: Luxury Food Tours Around the World",
    image: image5,
    content: `
      <h3>Introduction</h3>
      <p>If you consider yourself a food lover, why not take your passion to the next level with a luxury food tour? Experience the best cuisine in the world, paired with the finest wines and unforgettable dining experiences.</p>
      <h3>Top Food Tour Destinations</h3>
      <ul>
        <li>Italy - Embark on a luxurious culinary journey through Tuscany's vineyards and Milan's world-class restaurants.</li>
        <li>France - Enjoy gourmet experiences in Paris, including Michelin-star dining and private cooking classes.</li>
        <li>Japan - Experience high-end sushi dining and traditional kaiseki meals in Kyoto.</li>
      </ul>
      <h3>Luxury Food Experiences</h3>
      <p>From private chefs preparing meals in your villa to exclusive tasting menus in renowned restaurants, luxury food tours offer the ultimate culinary indulgence.</p>
      <h3>Top Foodie Activities</h3>
      <ol>
        <li>Private wine-tasting tours in Bordeaux, France.</li>
        <li>Cooking classes with celebrity chefs in Tuscany.</li>
        <li>Exclusive private dinners in Paris, overlooking the Eiffel Tower.</li>
      </ol>
    `,
    category: "Food",
    author: "Sarah Lee",
    authorImage: image4,
    publishedDate: "December 18, 2024",
    relatedPosts: ["top-5-luxury-destinations", "best-luxury-hotels"],
  },
];
