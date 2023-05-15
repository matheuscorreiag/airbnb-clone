"use client";

import React from "react";
import { Modal } from "./Modal";
import useSearchModal from "../../hooks/useSearchModal";

export const SearchModal = () => {
  const searchModal = useSearchModal();
  return (
    <Modal
      isOpen={searchModal.isOpen}
      onClose={searchModal.onClose}
      onSubmit={searchModal.onOpen}
      title="Filters"
      actionLabel="Search"
    />
  );
};
