import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextProvider from './context/Context.jsx'

// ReactDOM ka createRoot function use karke
// pura React App ko HTML ke #root div me mount kar rahe hain
ReactDOM.createRoot(document.getElementById('root')).render(

    // ContextProvider ek global state manager jaisa hota hai
    // Iske andar jitne components aayenge wo sab shared data ko access kar sakte hain
    <ContextProvider>

        {/* App component – hamare project ka main component */}
        <App />

    </ContextProvider>
)
