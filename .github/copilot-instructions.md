# UPick - Restaurant Selection & Tournament App

UPick is a Vue.js 3 application that helps users discover restaurants through Google Places API integration and run elimination tournaments to decide where to eat. The app uses local IndexedDB storage via Dexie for offline restaurant management.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

### Bootstrap, Build & Test Repository:
- Install dependencies: `npm install` -- takes 90 seconds. NEVER CANCEL. Set timeout to 3+ minutes.
- Build for production: `npm run build` -- takes 10 seconds. Creates optimized files in `dist/` directory.
- Start development server: `npm run serve` -- takes 7 seconds. Serves on http://localhost:8080/UPick/
- Linting: `npm run lint` -- **FAILS - ESLint not configured**. Do not attempt linting.

### Development Workflow:
- ALWAYS run `npm install` first after cloning
- Use `npm run serve` for development - app runs on http://localhost:8080/UPick/
- Use `npm run build` for production builds
- Build produces warnings about SASS deprecations and bundle size - these are EXPECTED and harmless

### Key Application Structure:
- **Main Routes**: 
  - `/` - Restaurant management (search, add, disable restaurants)
  - `/tournament` - Tournament mode for saved restaurants
- **Database**: Local IndexedDB via Dexie (`src/db.js`)
- **API**: Google Places API integration (`src/services/GooglePlacesService.js`)
- **Styling**: Bootstrap 5 + custom SCSS theme (`src/styles/custom.scss`)

## Validation

### Manual Testing Requirements:
After making changes, ALWAYS test these core scenarios:
1. **Restaurant Search**: Navigate to home page, enter a location, click "Find Restaurants" (may fail without Google API access)
2. **Navigation**: Test navigation between "Manage Restaurants" and "Tournament" links
3. **Tournament Mode**: Navigate to /tournament page, verify it shows appropriate message or tournament interface
4. **Build Validation**: Always run `npm run build` to ensure no build errors

### Google Places API Dependency:
- App requires Google Maps API key in `public/index.html`
- In restricted environments, Google API calls will fail with "google is not defined" errors
- This is EXPECTED behavior in sandboxed environments - do not attempt to fix
- Core UI and navigation should still function despite API failures

## Common Tasks

### Repository Structure:
```
UPick/
├── src/
│   ├── components/           # Vue components
│   │   ├── FetchRestaurants.vue  # Main restaurant search
│   │   ├── Tournament.vue         # Tournament logic
│   │   └── RestaurantCard.vue     # Restaurant display
│   ├── views/
│   │   └── TournamentView.vue     # Tournament page
│   ├── router/
│   │   └── index.js          # Route definitions
│   ├── services/
│   │   └── GooglePlacesService.js # API integration
│   ├── styles/
│   │   └── custom.scss       # Bootstrap theme customization
│   ├── App.vue              # Main layout component
│   ├── main.js              # Application entry point
│   └── db.js                # Dexie database setup
├── public/
│   ├── index.html           # HTML template with Google Maps API
│   └── logo.png             # UPick logo
├── dist/                    # Production build output
├── package.json            # Dependencies and scripts
└── vue.config.js           # Vue CLI configuration
```

### Package.json Scripts:
```json
{
  "serve": "vue-cli-service serve",    // Development server
  "build": "vue-cli-service build",    // Production build  
  "lint": "vue-cli-service lint"       // FAILS - not configured
}
```

### Key Dependencies:
- **vue**: ^3.0.0 (Vue.js framework)
- **vue-router**: ^4.5.0 (Client-side routing)
- **bootstrap**: ^5.3.5 (UI framework)
- **dexie**: ^4.0.11 (IndexedDB wrapper)
- **sass**: ^1.86.3 (SCSS preprocessing)

### Expected Build Output:
- Build creates `dist/` directory with optimized assets
- **Warnings Expected**: SASS deprecation warnings (235+ warnings)
- **Warnings Expected**: Bundle size warnings (app bundle >244KB)
- Build time: ~10 seconds
- Build always succeeds despite warnings

### Database Schema (Dexie):
```javascript
// src/db.js
restaurants: '&place_id, name, rating, address, photoUrl, price_level, disabled, wins, losses'
```

### Application Features:
1. **Restaurant Discovery**: Search by location using Google Places API
2. **Local Storage**: Save restaurants to IndexedDB for offline access
3. **Tournament Mode**: Elimination-style decision making between restaurants
4. **Price Filtering**: Filter restaurants by price level ($, $$, $$$, $$$$)
5. **Restaurant Management**: Enable/disable restaurants, track wins/losses

### Known Limitations:
- No ESLint configuration - linting commands will fail
- No test files or test runner configured
- Google Places API requires valid API key and network access
- SASS deprecation warnings during build (harmless)
- Bundle size exceeds recommended limits (functional but slower)

### Troubleshooting:
- **"google is not defined" errors**: Expected in restricted environments
- **SASS deprecation warnings**: Expected, do not attempt to fix
- **Bundle size warnings**: Expected for this application size
- **Lint command fails**: No ESLint configured, skip linting

### Making Changes:
- Always test both development (`npm run serve`) and production (`npm run build`) 
- Verify navigation between routes still works
- Test restaurant search functionality if Google API is available
- Check that database operations don't break (adding/removing restaurants)
- Validate tournament mode displays correctly