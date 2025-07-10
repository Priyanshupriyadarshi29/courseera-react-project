<<<<<<< HEAD
# Green Haven - Houseplant E-commerce

A modern React Redux e-commerce website for premium houseplants, built with React, Redux Toolkit, and React Router.

## Features

### 🏠 Landing Page
- Beautiful background image with overlay
- Company name "Green Haven" prominently displayed
- Detailed company description about premium houseplants
- "Get Started" button linking to product listing page

### 🛍️ Product Listing Page
- Six unique houseplants organized into three categories:
  - **Succulents**: Echeveria Elegans, Jade Plant
  - **Tropical**: Monstera Deliciosa, Fiddle Leaf Fig
  - **Air Plants**: Tillandsia Ionantha, Tillandsia Xerographica
- Category filtering functionality
- Product cards with thumbnail, name, price, and description
- "Add to Cart" buttons that:
  - Increase cart count in header
  - Become disabled after adding
  - Add items to Redux store

### 🛒 Shopping Cart Page
- Displays total number of plants and total cost
- Each cart item shows:
  - Thumbnail image
  - Plant name
  - Unit price
  - Quantity controls (+/- buttons)
  - Total price for that item
  - Delete button
- Increment/decrement functionality that updates all values
- "Continue Shopping" button linking back to products
- "Checkout" button with "Coming Soon" message

### 📱 Header Navigation
- Displays on all pages
- Shopping cart icon with real-time item count
- Navigation links to Home, Shop, and Cart pages
- Responsive design

### 🔧 Redux State Management
- Complete cart functionality with Redux Toolkit
- Actions for add, remove, increment, decrement, and delete
- Automatic total calculations
- Persistent state across page navigation

## Technology Stack

- **React 18** - Frontend framework
- **Redux Toolkit** - State management
- **React Router DOM** - Client-side routing
- **CSS3** - Styling with modern design
- **Unsplash Images** - High-quality plant photos

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd houseplant-ecommerce
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.js       # Navigation header
│   ├── LandingPage.js  # Home page
│   ├── ProductListing.js # Product catalog
│   ├── ShoppingCart.js # Cart page
│   └── *.css           # Component styles
├── store/              # Redux store
│   ├── index.js        # Store configuration
│   └── cartSlice.js    # Cart state management
├── data/               # Static data
│   └── plants.js       # Plant catalog data
├── App.js              # Main app component
├── index.js            # App entry point
└── App.css             # Global styles
```

## Features Implementation

### Redux Store (4 points)
- ✅ Complete cart slice with all required actions
- ✅ State management for cart items, quantities, and totals
- ✅ Proper Redux Toolkit implementation

### Landing Page (5 points)
- ✅ Background image with overlay
- ✅ Company description paragraph
- ✅ Company name "Green Haven"
- ✅ Get Started button linking to products

### Product Listing (9 points)
- ✅ Six unique houseplants with thumbnails, names, and prices
- ✅ Three categories (Succulents, Tropical, Air Plants)
- ✅ Add to Cart buttons with proper behavior:
  - ✅ Increases cart count
  - ✅ Becomes disabled after adding
  - ✅ Adds to Redux store

### Header (7 points)
- ✅ Displays on all pages
- ✅ Shopping cart icon with item count
- ✅ Navigation between pages

### Shopping Cart (23 points)
- ✅ Total plants count display
- ✅ Total cost calculation
- ✅ Each item shows thumbnail, name, and unit price
- ✅ Increment buttons that update quantities and totals
- ✅ Decrement buttons that update quantities and totals
- ✅ Delete button for removing items
- ✅ Checkout button with "Coming Soon" message
- ✅ Continue shopping button linking to products

## Design Features

- **Modern UI/UX**: Clean, professional design with smooth animations
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Accessibility**: Proper semantic HTML and keyboard navigation
- **Performance**: Optimized images and efficient state management
- **User Experience**: Intuitive navigation and clear visual feedback

## Future Enhancements

- User authentication and accounts
- Wishlist functionality
- Product reviews and ratings
- Advanced filtering and search
- Payment integration
- Order tracking
- Plant care guides

## License

This project is created for educational purposes as part of a Coursera JavaScript course assignment. 
=======
# courseera-react-project
>>>>>>> 73f6b232e064127df225576f445e8495567e7ad1
