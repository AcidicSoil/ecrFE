import 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

const services = [
    {
        "id": 1,
        "service": "Laptop Cleaning",
        "time": "1.5 hours",
        "cost": 180
    },
    {
        "id": 2,
        "service": "Network Troubleshooting",
        "time": "2 hours",
        "cost": 240
    },
    {
        "id": 3,
        "service": "Data Transfer",
        "time": "1.5 hours",
        "cost": 180
    }
];



ReactDOM.createRoot(document.getElementById('root')).render(
  <App services={services} />
)
