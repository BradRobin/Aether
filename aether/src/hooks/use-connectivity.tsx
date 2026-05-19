import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type ConnectivityState = {
  isOnline: boolean;
  latencyMs: number;
};

const ConnectivityContext = createContext<ConnectivityState>({
  isOnline: true,
  latencyMs: 12,
});

export function ConnectivityProvider({ children }: { children: ReactNode }) {
  const [isOnline, setIsOnline] = useState(
    typeof navigator !== "undefined" ? navigator.onLine : true,
  );
  const [latencyMs, setLatencyMs] = useState(12);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Simulated latency jitter until real mesh telemetry is wired
  useEffect(() => {
    if (!isOnline) return;

    const interval = window.setInterval(() => {
      setLatencyMs(8 + Math.floor(Math.random() * 24));
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isOnline]);

  const value = useMemo(
    () => ({ isOnline, latencyMs: isOnline ? latencyMs : 0 }),
    [isOnline, latencyMs],
  );

  return (
    <ConnectivityContext.Provider value={value}>
      {children}
    </ConnectivityContext.Provider>
  );
}

export function useConnectivity() {
  return useContext(ConnectivityContext);
}
