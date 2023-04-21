import { EmptyState } from "../components/EmptyState";
import getCurrentUser from "../actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavoriteListings";
import FavoritesClient from "./FavoritesClient";

export default async function Favorites() {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if (!listings.length) {
    return (
      <EmptyState
        title="No favorites found"
        subtitle="Looks like you have no favorite listings."
      ></EmptyState>
    );
  }
  return <FavoritesClient listings={listings} currentUser={currentUser} />;
}
