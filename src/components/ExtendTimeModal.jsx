import { useEffect, useRef, useState } from "react";
import axios from "axios";
import useBidStore from "../stores/bid.store.js";
import { apiGetUserById } from "../api/apiMain.js";

export default function ExtendTimeModal({}) {
  const { timeExtension } = useBidStore();
  const hasShownRef = useRef(false);


  // Fetch winner's username when a winner is set
  useEffect(() => {
    if (!timeExtension) return;

    if (!hasShownRef.current) {
      hasShownRef.current = true;
    }

  }, [timeExtension]);

  // Reset guard when winner is cleared
  useEffect(() => {
    if (!timeExtension) {
      hasShownRef.current = false;
    }
  }, [timeExtension]);

  if (!timeExtension || !hasShownRef.current) return null;


  return (
    <>

    </>
  );
}
