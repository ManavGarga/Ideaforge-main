import { PropTypes } from "prop-types";
import { createContext, useState } from "react";

export const IdeaForgeContext = createContext(null);

const Provider = ({ children }) => {
    const [alertBoxOpenStatus, setAlertBoxOpenStatus] = useState(false);
    const [alertSeverity, setAlertSeverity] = useState("");
    const [alertMessage, setAlertMessage] = useState("")
    const [loadingStatus, setLoadingStatus] = useState(false);

    const contextValue = {
        alertBoxOpenStatus,
        setAlertBoxOpenStatus,
        alertSeverity,
        setAlertSeverity,
        loadingStatus,
        setLoadingStatus,
        alertMessage,
        setAlertMessage
    }

    return (
        <IdeaForgeContext.Provider value={contextValue}>{children}</IdeaForgeContext.Provider>
    )
}

Provider.propTypes = {
    children: PropTypes.node.isRequired
}

export default Provider