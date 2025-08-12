# UPick

UPick is a restaurant decision-making application that helps you discover restaurants in your area and choose where to eat through an interactive tournament-style elimination system.

## Features

- **Restaurant Discovery**: Search for restaurants by location with price level filtering ($, $$, $$$, $$$$)
- **Restaurant Management**: Add restaurants to your personal list and disable ones you're not interested in
- **Tournament Mode**: Use a bracket-style elimination system to help decide between restaurants
- **Local Storage**: Persistent storage of restaurant data using IndexedDB
- **Responsive Design**: Mobile-friendly interface built with Bootstrap 5

## Project Structure

```
UPick
├── src
│   ├── components
│   │   ├── FetchRestaurants.vue     # Main restaurant search interface
│   │   ├── RestaurantCard.vue       # Restaurant display component
│   │   ├── Tournament.vue           # Tournament elimination system
│   │   └── DisabledRestaurantCard.vue
│   ├── views
│   │   └── TournamentView.vue       # Tournament page
│   ├── services
│   │   └── GooglePlacesService.js   # Google Places API integration
│   ├── router
│   │   └── index.js                 # Vue Router configuration
│   ├── styles
│   │   └── custom.scss              # Custom styling
│   ├── App.vue                      # Root component
│   ├── main.js                      # Application entry point
│   └── db.js                        # Dexie database configuration
├── public
│   ├── index.html
│   └── logo.png
├── package.json
└── README.md
```

## Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- Google Places API key

## Installation

1. Clone the repository:
```bash
git clone https://github.com/logan-christensen/UPick.git
cd UPick
```

2. Install dependencies:
```bash
npm install
```

3. Set up Google Places API:
   - Get a Google Places API key from the [Google Cloud Console](https://console.cloud.google.com/)
   - Enable the Places API (New) for your project
   - Add your API key to your HTML file or configure it in your application

## Development

To run the application in development mode:

```bash
npm run serve
```

This will start a local development server, typically at `http://localhost:8080`.

## Build

To build the application for production:

```bash
npm run build
```

This will create an optimized version of the app in the `dist` directory.

## Usage

1. **Find Restaurants**: Enter a location and optionally filter by price level, then click "Find Restaurants"
2. **Manage Your List**: View discovered restaurants and disable any you're not interested in
3. **Start Tournament**: Navigate to the Tournament page to begin the elimination process
4. **Make Decisions**: Choose between restaurant pairs until a winner emerges

## Technology Stack

- **Frontend**: Vue.js 3 with Vue Router
- **Styling**: Bootstrap 5 with custom SCSS
- **Database**: Dexie (IndexedDB wrapper) for local storage
- **API**: Google Places API for restaurant data
- **Build Tool**: Vue CLI

## License

This project is licensed under the MIT License.