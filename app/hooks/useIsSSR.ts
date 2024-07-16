/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";

function subscribe() {
  return () => {};
}

function getSnapshot() {
  return false;
}

function getServerSnapshot() {
  return true;
}

const useIsSSR = () => {
  if (typeof React.useSyncExternalStore !== "undefined") {
    return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  }
  return typeof window === "undefined" || typeof document === "undefined";
};

export default useIsSSR;
