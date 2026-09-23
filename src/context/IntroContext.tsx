"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

type IntroContextValue = {
  introActive: boolean;
  introComplete: boolean;
  completeIntro: () => void;
};

const IntroContext = createContext<IntroContextValue>({
  introActive: false,
  introComplete: true,
  completeIntro: () => {},
});

export function IntroProvider({ children }: { children: React.ReactNode }) {
  const [introComplete, setIntroComplete] = useState(true);

  const completeIntro = useCallback(() => {
    setIntroComplete(true);
  }, []);

  const value = useMemo(
    () => ({
      introActive: false,
      introComplete,
      completeIntro,
    }),
    [introComplete, completeIntro]
  );

  return <IntroContext.Provider value={value}>{children}</IntroContext.Provider>;
}

export function useIntro() {
  return useContext(IntroContext);
}
