import React, { useState, createContext} from 'react'

export const ScoreContext = createContext();
export const RoundContext = createContext();



export const ScoreProvider =({ children }) => {
    const [score, setScore] = useState({});
  return (
    <ScoreContext.Provider value={[score, setScore]}>
        { children }
    </ScoreContext.Provider>
  )
}

export const RoundProvider = ({ children }) => {
    const [round, setRound] = useState(1);
    return (
        <RoundContext.Provider value={[round, setRound]}>
            { children }
        </RoundContext.Provider>
    )
}
