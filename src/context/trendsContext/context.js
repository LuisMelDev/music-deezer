import { createContext, useState } from "react";

export const TrendsContext = createContext();

const TrendsState = (props) => {
    
    const [trends, setTrends] = useState(null)
    
    
    return <TrendsContext.Provider value={{
        trends,
        setTrends
    }}>
            {props.children}
    </TrendsContext.Provider>;
};

export default TrendsState
