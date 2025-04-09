class GooglePlacesService {
    constructor() {
        this.Place = null;
        this.init();
    }

    async init() {
        const { Place } = await google.maps.importLibrary("places");
        this.Place = Place;
    }

    async searchRestaurants(location) {
        if (!this.Place) {
            throw new Error("Google Places API not initialized.");
        }

        const { places } = await this.Place.searchByText({
            fields: [
                'displayName',
                'formattedAddress',
                'id',
                'photos',
                'rating',
                'priceLevel',
                'websiteURI',
                'primaryTypeDisplayName'
            ],
            textQuery: `Restaurants in ${location}`,
            includedType: "restaurant",
        });

        return places;
    }
}

export default new GooglePlacesService();