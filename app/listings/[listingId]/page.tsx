import React from "react";
import getListingById from "../../actions/getListingsById";
import { EmptyState } from "../../components/EmptyState";
import getCurrentUser from "../../actions/getCurrentUser";
import ListingClient from "./ListingClient";
import getReservations from "../../actions/getReservations";

interface IParams {
  listingId?: string;
}

export default async function ListingPage({ params }: { params: IParams }) {
  const listing = await getListingById(params);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return <EmptyState />;
  }
  return (
    <div>
      <ListingClient
        listing={listing}
        currentUser={currentUser}
        reservations={reservations}
      />
    </div>
  );
}
